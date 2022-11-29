/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
interface BlogHeaderProps {
  createdAt: string
  authorUrl: string | undefined
  authorLogin: string
  authorAvatarUrl: string | undefined
}

export const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  const {createdAt, authorUrl, authorLogin, authorAvatarUrl} = props
  const createdDate: Date = new Date(createdAt)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className="flex items-start">
      <Link href="/profile">
        <img
          src={authorAvatarUrl}
          className="rounded-[50%] mb-4 mr-4"
          alt={authorLogin}
          width={50}
          height={50}
        />
      </Link>
      <div className="flex flex-col">
        <Link href="/profile">
          <p className="font-semibold text-[1rem]">{authorLogin}</p>
        </Link>
        <div className="flex gap-4">
          <li className="list-none font-normal text-[0.85rem]">{authorUrl}</li>
          <li className="font-normal ml-2 text-[0.85rem]">
            {createdDate.toLocaleDateString('en-US', options)}
          </li>
        </div>
      </div>
    </div>
  )
}
