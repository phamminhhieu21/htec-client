import React from 'react'
import {NextPage, InferGetServerSidePropsType, GetServerSideProps} from 'next'
import {getBlogDetail} from '../../server/blogs'
import {Wrapped} from './styled'
import {BlogHeader} from '../../components/BlogHeader'
import parse from 'html-react-parser'
import detail from './id.module.css'
import {FooterCpn} from '../../components/FooterCpn'
import {useEffect, useState} from 'react'
import NextNProgress from 'nextjs-progressbar'
import ScrollButton from '../../components/ScrollButton'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id
  const id = Number(route)
  let blogDetail = await getBlogDetail(id)
  return {
    props: {
      blogData: blogDetail,
      isLoading: false,
    },
  }
}

export const BlogDetailPage: NextPage = ({
  blogData,
  isLoading,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {author, bodyHTML, createdAt, title} = blogData
  const {name: authorLogin, avatar: authorAvatarUrl, url: authorUrl} = author

  return (
    <Wrapped>
      <NextNProgress
        color="#29D"
        startPosition={0.9}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <title>{title}</title>
      <section className="layout detail-page-custom">
        <div className="max-w-[50%] detail-page-content__custom">
          <h1 className="text-center my-10 text-[2rem] font-bold">{title}</h1>
          <div
            className="flex justify-start mb-4"
            style={{position: 'relative'}}
          >
            <BlogHeader
              createdAt={createdAt}
              authorLogin={authorLogin}
              authorAvatarUrl={authorAvatarUrl}
              authorUrl={authorUrl}
            />
            <div className="border-custom"></div>
          </div>
          <div className={`${detail.html} flex flex-col`}>
            {parse(bodyHTML)}
          </div>
        </div>
      </section>
      <ScrollButton />
      <FooterCpn />
    </Wrapped>
  )
}
export default BlogDetailPage
