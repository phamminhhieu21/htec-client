/* eslint-disable @next/next/no-img-element */
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import BlogPreview from '../components/BlogPreview'
import {getBlogs} from '../server/blogs'
import {BlogPost, labelPost} from './../model/blog'
import {useMemo, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FooterCpn } from '../components/FooterCpn'
import { HeaderCpn } from '../components/HeaderCpn'

const Home: NextPage = ({
  blogsData,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedPosition, setSelectedPosition] = useState<number[]>([])
  const [filterWord, setFilterWord] = useState<string[]>([])
  const HomePage = styled.div`
    overflow: hidden;
  `
  const filterBlog: BlogPost[] = useMemo(() => {
    return filterWord.length > 0
      ? blogsData.filter((blog: BlogPost) => {
          return filterWord.every((word) => blog.tags.includes(word))
        })
      : blogsData
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterWord])
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
      <main className="overflow-auto flex flex-col items-center bg-neutral-800 text-neutral-300 font-poppins">
        <HeaderCpn/>
        <section className="flex flex-row items-center text-[1.15rem] mt-12">
          <div className="flex gap-3 mb-12">
            {tags?.map((tag: string, index: number) => {
              return (
                <button
                  className={`${
                    selectedPosition.includes(index)
                      ? 'label-selected hover:bg-sky-400 transition-all duration-300'
                      : 'label hover:bg-sky-400 transition-all duration-300'
                  }`}
                  // style={{backgroundColor: `${tag.color}`}}
                  key={index}
                  onClick={(e) => filterLabel(e.target, index)}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </section>
        <section className="flex flex-col items-center text-[1.15rem] mt-12">
          <div className="flex gap-3 mb-12"></div>
          {filterBlog.map((blog: BlogPost) => {
            return (
              <div
                key={blog.id}
                className="max-w-[37em] max-h-[25em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
              >
                <Link href={`${blog.url}`}>
                  <BlogPreview
                    title={blog.title}
                    bodyText={blog.bodyText}
                    createdAt={blog.createdAt}
                    tags={blog.tags}
                    authorLogin={blog.authorLogin}
                    authorAvatarUrl={blog.authorAvatarUrl}
                    authorUrl={blog.authorUrl}
                  />
                </Link>
              </div>
            )
          })}
        </section>
        <FooterCpn/>
      </main>
    </HomePage>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  console.log(blogs)
  let tags: labelPost[] = []
  blogs.forEach((blog) => {
    for (const tag of blog.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  })
  return {
    props: {
      blogsData: blogs,
      tags: tags,
    },
  }
}
