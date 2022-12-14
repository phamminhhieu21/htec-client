import React from 'react'
import {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next'
import {getBlogDetail, getLabels, getBlogs} from '../../server/blogs'
import {BlogPost} from '../../model/blog'
import {BlogHeader} from '../../components/BlogHeader'
import parse from 'html-react-parser'
import detail from '../../styles/id.module.css'
import FooterCpn from '../../components/FooterCpn'
import NextNProgress from 'nextjs-progressbar'
import ScrollButton from '../../components/ScrollButton'
import TagCpn from '../../components/Tags'
import ButtonBack from '../../components/ButtonBack'
import styled from 'styled-components'
import TableOfContent from '../../components/TableOfContent'
import RelatedBlog from '../../components/RelatedBlog'
import Header from '../../components/Header'
import {IoIosPlanet} from 'react-icons/io'
import {FcDocument} from 'react-icons/fc'
import {ImPriceTags} from 'react-icons/im'
import {URL_PROD} from '../../constant'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {toSlug} from './../../utils/helper'
import Head from 'next/head'
const Like = dynamic(() => import('../../plugins/Facebook/Like'), {
  ssr: false,
})
const Comments = dynamic(() => import('../../plugins/Facebook/Comment'), {
  ssr: false,
})
const Share = dynamic(() => import('../../plugins/Facebook/Share'), {
  ssr: false,
})

export const getStaticProps: GetStaticProps = async (context) => {
  const route: string[] | string | undefined = context?.params?.slug
  const id_after_split = route?.toString().split('-')[
    route?.toString().split('-').length - 1
  ]
  const id = Number(id_after_split)
  let blogDetail = await getBlogDetail(id)
  let labels = await getLabels()
  let blogs: BlogPost[] = await getBlogs()
  const relatedBlogs = blogs
    .filter((blog) => blog.id !== blogDetail.id_blog)
    .filter((blog) => {
      return blog.tags.every((tag) =>
        labels.some((label) => label.name === tag)
      )
    })
    .slice(0, 3)
  return {
    props: {
      blogData: blogDetail,
      relatedBlogs: relatedBlogs,
      labels: labels,
      route: route,
      isLoading: false,
    },
  }
}
export const getStaticPaths: GetStaticPaths<{slug: string}> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export const BlogDetailPage: NextPage = ({
  blogData,
  labels,
  isLoading,
  relatedBlogs,
  route,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Wrapped = styled.div`
    width: 100vw;
    overflow: auto;
    height: auto;
    .footer-custom {
      justify-content: center !important;
      background-color: #121010e8 !important;
      width: 100vw;
      .label-custom {
        text-align: center;
      }
      .icon-custom {
        justify-content: center;
      }
    }
    .detail-page-custom {
      overflow: unset;
      height: max-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      background-color: #000d26e6;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='502' height='502' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23330956' stroke-width='1.1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234C036C'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
      @media screen and (max-width: 479px) {
        padding: 10px;
      }
      header {
        border-radius: 8px;
      }
      .menu-list-mobile {
        @media screen and (max-width: 767px) {
          background-color: #3a0070f7 !important;
          border: 2px solid #8f26f4ed;
          border-radius: 12px;
        }
      }
      .detail-page-content__custom {
        background-color: #001a3687;
        margin-top: 55px;
        padding: 35px;
        width: 100%;
        height: fit-content;
        border-radius: 20px;
        border: 2px solid #033162c7;
        position: relative;
        @media screen and (max-width: 479px) {
          padding: 8px;
          max-width: 100%;
          padding: 20px;
          margin-top: 30px;
          border-top: 1.2px dashed #2196fca9;
          border-bottom: 1.5px dashed #2196fca9;
        }
        @media screen and (min-width: 480px) and (max-width: 849px) {
          max-width: 80% !important;
        }
        @media screen and (min-width: 850px) and (max-width: 1300px) {
          max-width: 70%;
        }

        .avatar-custom {
          @media screen and (max-width: 479px) {
            display: none;
          }
        }
        .navi-back {
          @media screen and (max-width: 479px) {
            display: none;
          }
        }
        #title {
          @media screen and (max-width: 479px) {
            font-size: 1.25rem;
            margin: 15px 0px 25px 0px;
          }
        }
        .border-custom {
          position: absolute;
          bottom: 4px;
          border: 1px dashed #a8c5ff2b;
          width: 75%;
          @media screen and (max-width: 479px) {
            bottom: -20%;
            width: 95%;
          }
        }
        .tags {
          align-items: center;
          flex-direction: row;
          width: fit-content;
          display: flex;
          border-radius: 8px;
          margin-bottom: 9px;
          padding: 10px 12px;
          @media screen and (max-width: 479px) {
            font-size: 0.85rem;
            flex-wrap: wrap;
          }
          .lb-tags {
            margin-right: 3px;
          }
          .tag {
            padding: 0 6px;
            cursor: pointer;
            @media screen and (max-width: 479px) {
              margin-top: 8px;
            }
            .tag-custom {
              @media screen and (max-width: 479px) {
                font-size: 0.7rem;
                padding-top: 0.15rem;
                padding-bottom: 0.15rem;
              }
            }
          }
          .icon-tags {
            font-size: 1.5rem;
            @media screen and (max-width: 479px) {
              font-size: 1.15rem;
            }
          }
        }
        #like-n-share {
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 3px 0px;
          height: 25px;
          -webkit-writing-mode: vertical-lr;
          .like {
            height: 25px;
          }
          .share {
            height: 25px;
          }
          @media screen and (max-width: 479px) {
          }
        }
        .author-infor {
          margin-bottom: 0.5rem;
          @media screen and (max-width: 479px) {
            margin-top: 35px;
            margin-bottom: 0.75rem;
          }
          .date-time-blog {
            @media screen and (max-width: 479px) {
              margin-top: 5px;
              gap: 0.5rem;
            }
          }
        }
        .logo-mini {
          position: absolute;
          top: -0.5%;
          left: 50%;
          transform: translateX(-16px);
          @media screen and (max-width: 479px) {
            /* top: -3%; */
          }
          svg {
            font-size: 2.5rem;
            @media screen and (max-width: 479px) {
              font-size: 1.7rem;
            }
          }
        }
      }
      .tb-content {
        position: absolute;
        top: 8%;
        right: 5%;
        height: fit-content;
        max-width: 20%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border-radius: 13px;
        @media screen and (max-width: 479px) {
          display: none;
        }
        @media screen and (max-width: 1300px) {
          display: none;
        }
      }
      #comments {
        width: 50%;
        border-radius: 8px;
        padding: 12px;
        margin: 35px 0px 20px 0px;
        background-color: white;
        @media screen and (max-width: 479px) {
          width: 94%;
        }
      }
    }
    .related-blogs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 15px;
      width: 62%;
      padding: 1rem;
      transform: translateX(10%);
      padding-bottom: 5rem;
      @media screen and (max-width: 479px) {
        margin-top: 20px;
        padding: 0px 15px;
        margin-bottom: 35px;
        width: 100%;
        transform: translateX(0%);
      }
      .related-title {
        @media screen and (max-width: 479px) {
          font-size: 1rem;
          margin-left: 6px;
        }
      }
      .list-related-blog {
        @media screen and (max-width: 479px) {
          margin-top: 15px;
        }
      }
      .icon-rel-title {
        color: #ffff;
        font-size: 1.8rem;
        margin-right: 8px;
        @media screen and (max-width: 479px) {
          font-size: 1.3rem;
        }
      }
    }
  `
  const {author, bodyHTML, createdAt, title, id_blog, lastEdited} = blogData
  const {name: authorLogin, avatar: authorAvatarUrl, url: authorUrl} = author
  let numberPost = 100
  const convertUrlToSlug = (url: string | undefined, title: string) => {
    const slug = toSlug(title)
    const id = url?.split('/')[url?.split('/').length - 1]
    return `${slug}-b-${id}`
  }
  let currentURL: string = `${URL_PROD}/blog/${route}`
  const img_meta = document.getElementsByTagName('img')[1]?.src
  const description_meta = document.getElementsByTagName('p')[1]?.innerText
  return (
    <Wrapped>
      <Head>
        <title>{title}</title>
        <meta property="og:url" content={currentURL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description_meta} />
        <meta property="og:image" content={img_meta} />
      </Head>
      <NextNProgress
        color="#fd7200cf"
        startPosition={1.5}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />

      <section className="layout detail-page-custom">
        <Header />
        <div className="max-w-[50%] detail-page-content__custom">
          <div className="logo-mini">
            <IoIosPlanet />
          </div>
          <div className="navi-back">
            <ButtonBack />
          </div>
          <h1 className="text-center my-10 text-[2rem] font-bold" id="title">
            {title}
          </h1>

          <div
            className="flex justify-start mb-4 author-infor"
            style={{position: 'relative'}}
          >
            <BlogHeader
              createdAt={createdAt}
              lastEdited={lastEdited}
              authorLogin={authorLogin}
              authorAvatarUrl={authorAvatarUrl}
              authorUrl={authorUrl}
              isDetailBlog={true}
            />
            <div className="border-custom"></div>
          </div>
          <div className="tags">
            <span className="lb-tags">
              <ImPriceTags className="icon-tags" />
            </span>
            {blogData.tags.map((tag: string, index: number) => {
              return (
                <span key={index} className="tag">
                  <TagCpn tag={tag} labels={labels} />
                </span>
              )
            })}
          </div>
          <div id="like-n-share">
            <div className="like">
              <Like dataHref={currentURL} width="100" />
            </div>
            <div className="share">
              <Share dataHref={currentURL} />
            </div>
          </div>
          <div className={`${detail.html} flex flex-col mt-4`}>
            {parse(bodyHTML)}
          </div>
        </div>
        <div className="tb-content">
          <TableOfContent />
        </div>
        <div id="comments">
          <Comments
            dataHref={currentURL}
            width="100%"
            numberPost={numberPost}
          />
        </div>
        <div className="related-blogs p-11 w-fit mx-auto">
          <span className="flex items-center font-bold text-lg text-slate-300 related-title">
            <FcDocument className="icon-rel-title" /> B??i vi???t li??n quan
          </span>
          <div className="flex flex-row flex-wrap justify-start mt-10  gap-4 overflow-auto list-related-blog">
            {relatedBlogs &&
              relatedBlogs.map((blog: BlogPost, index: number) => {
                return (
                  <Link
                    key={index}
                    href={convertUrlToSlug(blog.url, blog.title)}
                    rel="noreferrer"
                  >
                    <RelatedBlog
                      title={blog.title}
                      bodyText={blog.bodyText}
                      urlBlog={blog.url}
                    />
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
      <ScrollButton />
      <FooterCpn />
    </Wrapped>
  )
}
export default BlogDetailPage
