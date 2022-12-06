import React from 'react'
import styled from 'styled-components'
import {URL} from '../../constant/index'
export interface RelatedBlogProps {
  title: string
  bodyText: string
  urlBlog?: string
}
const RelatedBlog = ({title, bodyText, urlBlog}: RelatedBlogProps) => {
  const Wrapped = styled.div`
    .releted-blog {
      background-color: #7aa3ed45;
    }
  `
  const urlBlogCustom = URL + urlBlog
  const previewText =
    bodyText.length >= 110 ? bodyText.substring(0, 110) + '...' : bodyText
  const previewTitle =
    title.length >= 60 ? title.substring(0, 60) + '...' : title
  return (
    <Wrapped>
      <section className="flex flex-col w-80 max-h-34 overflow-hidden p-4 releted-blog rounded-xl">
        <p className="text-slate-50 font-bold text-base">{previewTitle}</p>
        <p className="text-slate-400">{previewText}</p>
        <a className="text-slate-400 text-sm font-bold mt-1" href={urlBlogCustom}>
          {urlBlogCustom}
        </a>
      </section>
    </Wrapped>
  )
}
export default RelatedBlog
