/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import {TimeSince} from '../utils/helper'
import {FcOk, FcApproval, FcCopyright} from 'react-icons/fc'
import {MdAccountCircle} from 'react-icons/md'
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
      margin-right: 6px;

      @media screen and (max-width: 479px) {
        display: block;
        svg {
          font-size: 1.8rem;
        }
      }
      @media screen and (min-width: 480px) {
        display: none;
      }
    }
    .date-time-blog {
      @media screen and (max-width: 479px) {
        li {
          font-size: 0.78rem;
          margin-left: 0;
        }
        li:first-child {
          list-style: none;
        }
      }
      .author-url {
        @media screen and (max-width: 479px) {
          display: none;
        }
      }
      .last-edited {
        font-size: 1.2rem;
        @media screen and (max-width: 479px) {
          font-size: 1rem;
          margin-right: 6px;
        }
      }
    }
  `
  return (
    <Wrapped>
      <div className="flex items-start header-preview">
        <Link href="/profile">
          <img
            src={authorAvatarUrl}
            className="rounded-[50%] mb-4 mr-4 avatar-custom"
            alt={authorLogin}
            width={50}
            height={50}
          />
          <div id="icon-author">
            <MdAccountCircle />
          </div>
        </Link>
        <div className="flex flex-col">
          <Link href="/profile">
            <p className="font-semibold text-[1rem]">{authorLogin}</p>
          </Link>
          <div className="flex gap-4 date-time-blog">
            {isPreview && (
              <li className="list-none font-normal text-[0.85rem] author-url">
                {authorUrl}
              </li>
            )}
            <li className="font-normal ml-2 text-[0.85rem] flex flex-row flex-wrap items-center">
              <FcCopyright className="last-edited" />{' '}
              {createdDate.toLocaleDateString('en-US', options)}
            </li>
            {isDetailBlog && lastEdited && (
              <li className="font-normal ml-2 text-[0.85rem] list-none flex flex-row flex-wrap items-center">
                <FcApproval className="last-edited" /> Last edited{' '}
                {TimeSince(lastEdited)}
              </li>
            )}
          </div>
        </div>
      </div>
    </Wrapped>
  )
}
