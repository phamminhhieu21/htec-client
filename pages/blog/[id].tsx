import React from 'react'
import {NextPage, InferGetServerSidePropsType, GetServerSideProps} from 'next'
import {getBlogDetail, getLabels, getBlogs} from '../../server/blogs'
import {BlogPost, labelPost} from '../../model/blog'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id
  const id = Number(route)
  let blogDetail = await getBlogDetail(id)
  let labels = await getLabels()
  let blogs: BlogPost[] = await getBlogs()
  const relatedBlogs = blogs
    .filter((blog) => {
      return blog.tags.every((tag) =>
        labels.some((label) => label.name === tag)
      )
    })
    .slice(0, 3)
  console.log('relatedBlogs', relatedBlogs)
  return {
    props: {
      blogData: blogDetail,
      relatedBlogs: relatedBlogs,
      labels: labels,
      isLoading: false,
    },
  }
}

export const BlogDetailPage: NextPage = ({
  blogData,
  labels,
  isLoading,
  relatedBlogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const Wrapped = styled.div`
    /* overflow: auto; */
    width: 100vw;
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
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: relative;
      background-color: #000d26e6;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='502' height='502' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23330956' stroke-width='1.1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234C036C'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
      .detail-page-content__custom {
        background-color: #001a3687;
        position: absolute;
        top: 8%;
        padding: 35px;
        width: 100%;
        height: fit-content;
        border-radius: 20px;
        border: 2px solid #033162c7;
        .navi-back {
        }
        .border-custom {
          position: absolute;
          bottom: 4px;
          border: 1px dashed #a8c5ff2b;
          width: 75%;
        }
        .tags {
          align-items: center;
          flex-direction: row;
          width: fit-content;
          display: flex;
          border: 1.5px dashed #004d91e0;
          border-radius: 8px;
          margin-bottom: 15px;
          padding: 10px 12px;
          .lb-tags {
            margin-right: 3px;
          }
          .tag {
            padding: 0 6px;
            cursor: pointer;
          }
        }
      }
      .tb-content {
        position: absolute;
        top: 13%;
        right: 8%;
        height: fit-content;
        max-width: 20%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        border: 1px dashed #5dafeb70;
        border-radius: 13px;
      }
    }
    .related-blogs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }
  `
  const {author, bodyHTML, createdAt, title, id_blog, lastEdited} = blogData
  const {name: authorLogin, avatar: authorAvatarUrl, url: authorUrl} = author
  return (
    <Wrapped>
      <NextNProgress
        color="#fd7200cf"
        startPosition={1.5}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <title>{title}</title>
      <section className="layout detail-page-custom">
        <div className="max-w-[50%] detail-page-content__custom">
          <div className="navi-back">
            <ButtonBack />
          </div>
          <h1 className="text-center my-10 text-[2rem] font-bold">{title}</h1>
          <div className="tags">
            <span className="lb-tags">Tags:</span>
            {blogData.tags.map((tag: string, index: number) => {
              return (
                <span key={index} className="tag">
                  <TagCpn tag={tag} labels={labels} />
                </span>
              )
            })}
          </div>
          <div
            className="flex justify-start mb-4"
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
          <div className={`${detail.html} flex flex-col`}>
            {parse(bodyHTML)}
          </div>
        </div>
        <div className="tb-content">
          <TableOfContent />
        </div>
      </section>
      <div className="related-blogs p-11 w-fit mx-auto">
        <span className="font-bold text-lg text-slate-300">
          Bài viết liên quan
        </span>
        <div className="flex flex-row flex-wrap justify-center mt-10  gap-4 overflow-auto">
          {relatedBlogs &&
            relatedBlogs.map((blog: BlogPost, index: number) => {
              return (
                <RelatedBlog
                  key={index}
                  title={blog.title}
                  bodyText={blog.bodyText}
                  urlBlog={blog.url}
                />
              )
            })}
        </div>
      </div>
      {/* <ScrollButton /> */}
      <FooterCpn />
    </Wrapped>
  )
}
export default BlogDetailPage
