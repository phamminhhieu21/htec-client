import React from 'react'
import styled from 'styled-components'
import {URL} from '../../constant/index'
import {RxLink2} from 'react-icons/rx'
import {toSlug} from './../../utils/helper'
export interface RelatedBlogProps {
  title: string
  bodyText: string
  urlBlog?: string
}
const RelatedBlog = ({title, bodyText, urlBlog}: RelatedBlogProps) => {
  const Wrapped = styled.div`
    .releted-blog {
      background-color: #7aa3ed45;
      @media screen and (max-width: 479px) {
        width: 21rem;
        max-width: 22.5rem;
      }
      @media screen and (max-width: 369px) {
        width: 19rem;
        max-width: 20rem;
      }
      @media screen and (max-width: 339px) {
        width: 18rem;
        max-width: 19rem;
      }
      @media screen and (max-width: 327px) {
        width: 17rem;
        max-width: 18rem;
      }
      svg {
        /* font-size : 1rem; */
      }
    }
  `
  const convertUrlToSlug = (url: string | undefined, title: string) => {
    const slug = toSlug(title)
    const id = url?.split('/')[url?.split('/').length - 1]
    const path = url?.split('/')[1]
    return `${path}/${slug}-b-${id}`
  }
  const urlBlogCustom = URL + '/' + convertUrlToSlug(urlBlog, title)
  const previewText =
    bodyText.length >= 110 ? bodyText.substring(0, 110) + '...' : bodyText
  const previewTitle =
    title.length >= 60 ? title.substring(0, 60) + '...' : title
  return (
    <Wrapped>
      <section className="flex flex-col w-80 max-h-34 overflow-hidden p-4 releted-blog rounded-xl">
        <p
          className="text-slate-50 font-bold text-base flex flex-row"
          title={title}
        >
          {previewTitle}
        </p>
        <p className="text-slate-400">{previewText}</p>
        <a
          className="text-slate-400 text-sm font-bold mt-1 flex flex-row items-center flex-wrap"
          href={urlBlogCustom}
          title={urlBlogCustom}
        >
          <RxLink2 style={{marginRight: '4px', fontSize: '1rem'}} />{' '}
          {urlBlogCustom.length > 34
            ? urlBlogCustom.slice(0, 33) + '...'
            : urlBlogCustom}
        </a>
      </section>
    </Wrapped>
  )
}
export default RelatedBlog
