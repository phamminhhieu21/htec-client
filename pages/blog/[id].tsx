import React from 'react'
import {NextPage, InferGetServerSidePropsType, GetServerSideProps} from 'next'
import {getBlogDetail, getLabels} from '../../server/blogs'
import {Wrapped} from './styled'
import {BlogHeader} from '../../components/BlogHeader'
import parse from 'html-react-parser'
import detail from './id.module.css'
import {FooterCpn} from '../../components/FooterCpn'
import NextNProgress from 'nextjs-progressbar'
import ScrollButton from '../../components/ScrollButton'
import TagCpn from '../../components/Tags'
import ButtonBack from '../../components/ButtonBack'
// import Router from 'next/router'
// import Link from 'next/link'
// import {useEffect, useState} from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id
  const id = Number(route)
  let blogDetail = await getBlogDetail(id)
  let labels = await getLabels()
  return {
    props: {
      blogData: blogDetail,
      labels: labels,
      isLoading: false,
    },
  }
}

export const BlogDetailPage: NextPage = ({
  blogData,
  labels,
  isLoading,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {author, bodyHTML, createdAt, title, id_blog} = blogData
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
          <div 
            className="navi-back"
            // onClick={() => Router.back()}
          >
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
