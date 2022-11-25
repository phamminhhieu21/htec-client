import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getBlogs} from '../server/blogs'
import { BlogPost } from './../model/blog';

const Home : NextPage = ({blogsData} : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
      <title>Home page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to HwinBlog</h1>
        </div>
      </section>
      <section className='flex flex-col items-center text-[1.15rem] mt-12'>
      
      </section>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs :BlogPost[] = await getBlogs()
  console.log(blogs)
  return {
    props: {
      blogsData : blogs
    }
  }
}
