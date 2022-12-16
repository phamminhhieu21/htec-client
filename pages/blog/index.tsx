import React from 'react'
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import Header from '../../components/Header'
import FooterCpn from '../../components/FooterCpn'
import Link from 'next/link'
import BlogPreview from '../../components/BlogPreview'
import {getBlogs, getLabels} from '../../server/blogs'
import {BlogPost, labelPost} from '../../model/blog'
import styled from 'styled-components'
import NextNProgress from 'nextjs-progressbar'
import {toSlug} from '../../utils/helper'
import { Wrapped } from './../../components/Tags/styled';


export const getServerSideProps: GetServerSideProps = async () => {
  let blogs: BlogPost[] = await getBlogs()
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
    },
  }
}
const BlogsPage = () => {
  const Wrapped = styled.div``
  return (
    <Wrapped>
      <NextNProgress
        color="#fd7200cf"
        startPosition={1.5}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <main>
        <Header />
        <section>
          <div>
            <h2>Mới nhất</h2>
          </div>
        </section>
        <FooterCpn />
      </main>
    </Wrapped>
  )
}
export default BlogsPage
