/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import {TimeSince} from '../utils/helper'
import {ImBlog} from 'react-icons/im'
import styled from 'styled-components'

interface BlogHeaderProps {
  createdAt: string
  lastEdited?: string
  authorUrl: string | undefined
  authorLogin: string
  authorAvatarUrl: string | undefined
  isPreview?: boolean
  isDetailBlog?: boolean
}

export const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  console.log('lastEdited blog header', props.lastEdited)
  const {
    createdAt,
    authorUrl,
    authorLogin,
    authorAvatarUrl,
    isPreview,
    lastEdited,
    isDetailBlog,
  } = props
  const createdDate: Date = new Date(createdAt)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const Wrapped = styled.div`
    .avatar-custom {
      @media screen and (max-width: 479px) {
        display: none;
      }
    }
    #icon-author {
      margin-right : 6px;
      svg{
        font-size : 1.2rem;
      }
      @media screen and (max-width: 479px) {
        display: block;
      }
      @media screen and (min-width: 480px) {
        display: none;
      }
    }
    .date-time-blog{
      @media screen and (max-width: 479px) {
        li{
          font-size : 0.78rem;
          margin-left : 0;
        }
        li:first-child{
          list-style : none;
          
        }
      }
    }
  `
  return (
    <Wrapped>
      <div className="flex items-start">
        <Link href="/profile">
          <img
            src={authorAvatarUrl}
            className="rounded-[50%] mb-4 mr-4 avatar-custom"
            alt={authorLogin}
            width={50}
            height={50}
          />
          <div id="icon-author">
            <ImBlog />
          </div>
        </Link>
        <div className="flex flex-col">
          <Link href="/profile">
            <p className="font-semibold text-[1rem]">{authorLogin}</p>
          </Link>
          <div className="flex gap-4 date-time-blog">
            {isPreview && (
              <li className="list-none font-normal text-[0.85rem]">
                {authorUrl}
              </li>
            )}
            <li className="font-normal ml-2 text-[0.85rem]">
              {createdDate.toLocaleDateString('en-US', options)}
            </li>
            {isDetailBlog && lastEdited && (
              <li className="font-normal ml-2 text-[0.85rem]">
                Last edited {TimeSince(lastEdited)}
              </li>
            )}
          </div>
        </div>
      </div>
    </Wrapped>
  )
}
