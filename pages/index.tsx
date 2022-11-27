/* eslint-disable @next/next/no-img-element */
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import BlogPreview from '../components/BlogPreview'
import {getBlogs} from '../server/blogs'
import {BlogPost} from './../model/blog'
import styled from 'styled-components'
const Home: NextPage = ({
  blogsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const HomePage = styled.div`
    main {
    }
  `
  return (
    <HomePage>
      <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-neutral-800 text-neutral-300 font-poppins">
        <title>Home page</title>
        <img src="../resources/image/background/bg.jpg" alt="" />
        <section>
          <div className="mt-3 text-center">
            <h1 className="text-[3rem]">Welcome to HTec</h1>
            <p>A Developer likes writing and love technology</p>
          </div>
        </section>
        <section className="flex flex-col items-center text-[1.15rem] mt-12">
          <div className="flex gap-3 mb-12"></div>
          {blogsData.map((blog: BlogPost) => {
            return (
              <div
                key={blog.id}
                className="max-w-[37em] max-h-[25em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
              >
                <a href={blog.url} target="_blank" rel="noreferrer">
                  <BlogPreview
                    title={blog.title}
                    bodyText={blog.bodyText}
                    createdAt={blog.createdAt}
                    tags={blog.tags}
                    authorLogin={blog.authorLogin}
                    authorAvatarUrl={blog.authorAvatarUrl}
                    authorUrl={blog.authorUrl}
                  />
                </a>
              </div>
            )
          })}
        </section>
      </main>
    </HomePage>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
  console.log(blogs)
  return {
    props: {
      blogsData: blogs,
    },
  }
}
