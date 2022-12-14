/* eslint-disable @next/next/no-img-element */
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import BlogPreview from '../components/BlogPreview'
import {getBlogs, getLabels} from '../server/blogs'
import {BlogPost, labelPost} from './../model/blog'
import {useMemo, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import FooterCpn from '../components/FooterCpn'
import HeaderCpn from '../components/HeaderCpn'
import Header from '../components/Header'
import NextNProgress from 'nextjs-progressbar'
import {FcRules} from 'react-icons/fc'
import {toSlug} from '../utils/helper'

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  console.log(blogs)
  let tags: string[] = []
  blogs.forEach((blog) => {
    for (const tag of blog.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  })
  let labels = await getLabels()
  return {
    props: {
      blogsData: blogs,
      tags: tags,
      labels: labels,
      isLoading: false,
    },
  }
}

const Home: NextPage = ({
  blogsData,
  tags,
  labels,
  isLoading,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedPosition, setSelectedPosition] = useState<number[]>([])
  const [filterWord, setFilterWord] = useState<string[]>([])
  const HomePage = styled.div`
    main {
      min-height: 100vh;
      padding-bottom: 45px;
      background-color: #130026;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='502' height='502' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23330956' stroke-width='1.1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234C036C'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: -58px;
      section{
        @media screen and (max-width: 479px) {
          padding: 0px 20px;
          margin-top: 1.5rem;
          padding-bottom: 1rem;
        }
        &.list-tag-custom{
          @media screen and (max-width: 479px) {
          
          }
          .label-item{
            align-items : center;
            @media screen and (max-width: 479px) {
              flex-wrap: wrap;
              gap : 0.65rem;
              margin-bottom: 1rem;
            }
            .icon-tags{
              font-size : 1.5rem;
              @media screen and (max-width: 479px) {}
            }
          }
        }
        &.list-blogs{
          @media screen and (max-width: 479px) {}
          @media screen and (max-width: 349px) {
            padding: 0px 10px;
        }
          .tags-custom{
            @media screen and (max-width: 479px) {
              flex-wrap: wrap;
            }
            .readmore{
              @media screen and (max-width: 479px) {
                
              }
            }
          }
          .blogs-title{
            width: 100%;
            padding: 20px 18px;
            .icon-blogs-title{
              margin-right: 0.3rem;
              font-size : 1.4rem;
            }
          }
        }
      }
      #footer{
        @media screen and (max-width: 479px) {

        }
        .icon-custom{
          @media screen and (max-width: 479px) {
            justify-content: center;
          }
        }
      }
    }
    .post-custom {
      position: relative;
      width: 41rem;
      background-color: #d4e5f3b5;
      &:hover {
        box-shadow: 0 0 10px #e5e5e5;
        background-color: rgb(100 116 139);
      }
      @media screen and (max-width: 479px) {
        width: 21.5rem; 
        max-width: 23rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      @media screen and (max-width: 369px) {
        width: 19rem;
        max-width: 20.5rem;
      }
      @media screen and (max-width: 349px) {
        width: 19rem;
        max-width: 20.5rem;
      }
      @media screen and (max-width: 329px) {
        width: 18rem;
        max-width: 18.7rem;
      }
      .blog-preview{
        @media screen and (max-width: 479px) {
          padding: 0 8px;
          margin-top: 0.8rem;
        }
        .header-preview{
          @media screen and (max-width: 479px) {

          }
        }
        .title-blog-preview{
          @media screen and (max-width: 479px) {
            padding: 10px 0px 0px 0px;
          }
        }
      }
    }
    .label-not-selected {
      &:hover {
        opacity: 1 !important;
        transition: opacity 0.3s ease-in-out;
        transform: rotateZ(5deg) scale(1.1);
        color: #ffff;
      }
      @media screen and (max-width: 479px) {
        
      }
    }
    .effect-custom{
      transform : scale(1.2);
      transform 0.3s ease-in-out;
      color: #ffff;
      border: 1px solid #ddedfad6;
      box-shadow: 0 0 7px #e5e5e5
    }
  `

  const filterBlog: BlogPost[] = useMemo(() => {
    return filterWord.length > 0
      ? blogsData.filter((blog: BlogPost) => {
          return filterWord.every((word) => blog.tags.includes(word))
        })
      : blogsData
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterWord])

  const convertUrlToSlug = (url: string | undefined, title: string) => {
    const slug = toSlug(title)
    const id = url?.split('/')[url?.split('/').length - 1]
    const path = url?.split('/')[1]
    return `${path}/${slug}-b-${id}`
  }

  const filterLabel = (e: any, index: number) => {
    if (selectedPosition.includes(index)) {
      setSelectedPosition(
        selectedPosition.filter((item: number) => item !== index)
      )
      setFilterWord(filterWord.filter((item: string) => item !== e.innerText))
    } else {
      setSelectedPosition([...selectedPosition, index])
      setFilterWord([...filterWord, e.innerText])
    }
  }

  return (
    <HomePage>
      <NextNProgress
        color="#fd7200cf"
        startPosition={1.5}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <main className="overflow-auto flex flex-col items-center bg-neutral-800 text-neutral-300 font-poppins">
        <Header/>
        <HeaderCpn avatarUrl="https://avatars.githubusercontent.com/u/65443368?v=4" />
        <section className="flex flex-row items-center text-[1.15rem] mt-12 list-tag-custom">
          <div className="flex gap-3 mb-12 label-item">
            {/* <MdLabel className='icon-tags'/> */}
            <div>
              <span
                className="text-[1.2rem] font-bold"
                style={{
                  fontWeight: '700',
                  color: '#94cef4',
                  textShadow: 'rgb(3 85 209 / 95%) 2px 4px',
                }}
              >
                Tags
              </span>
            </div>
            {tags?.map((tag: string, index: number) => {
              return (
                <button
                  className={`${
                    selectedPosition.includes(index)
                      ? 'label-selected hover:bg-sky-400 transition-all duration-300 effect-custom'
                      : 'label hover:bg-sky-400 transition-all duration-300 label-not-selected'
                  }`}
                  style={{
                    backgroundColor: `#${
                      labels.find((item: labelPost) => item.name === tag)?.color
                    }`,
                    opacity: `${
                      selectedPosition.includes(index) ? '1' : '0.685'
                    }`,
                  }}
                  key={index}
                  onClick={(e) => filterLabel(e.target, index)}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </section>
        <section className="flex flex-col items-center text-[1.15rem] mt-9 mb-9 list-blogs">
          <div className="blogs-title flex flex-row items-center flex-wrap">
            <FcRules className="icon-blogs-title" />
            <h2
              className="font-bold text-xl"
              style={{
                fontWeight: 700,
                color: '#8ef8d4',
                textShadow: '1px 3px #3c70be',
              }}
            >
              Blogs <b>({filterBlog.length})</b>
            </h2>
          </div>
          {filterBlog.map((blog: BlogPost) => {
            return (
              <div
                key={blog.id}
                className="transition ease-in-out delay-150 bg-neutral-300 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-200 post-custom max-w-[45em] max-h-[25em] overflow-hidden mx-6 mb-6 text-zinc-800 rounded-lg p-4 hover:text-neutral-300"
              >
                <Link
                  href={convertUrlToSlug(blog.url, blog.title)}
                  rel="noreferrer"
                >
                  <BlogPreview
                    title={blog.title}
                    bodyText={blog.bodyText}
                    createdAt={blog.createdAt}
                    lastEdited={blog.lastEdited}
                    tags={blog.tags}
                    authorLogin={blog.authorLogin}
                    authorAvatarUrl={blog.authorAvatarUrl}
                    authorUrl={blog.authorUrl}
                    labels={labels}
                    id_discussion={blog.id_discussion}
                  />
                </Link>
              </div>
            )
          })}
        </section>
        <FooterCpn />
      </main>
    </HomePage>
  )
}
export default Home
