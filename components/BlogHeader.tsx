/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface BlogHeaderProps {
  createdAt: string 
  authorUrl: string | undefined
  authorLogin: string 
  authorAvatarUrl: string | undefined
}

export const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  const {createdAt, authorUrl, authorLogin, authorAvatarUrl} = props
  const createdDate: Date = new Date(createdAt)
  const options : Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  return (
    <div className="flex items-start">
      <img
        src={authorAvatarUrl}
        className="rounded-[50%] mb-4 mr-4"
        alt={authorLogin}
        width={50}
        height={50}
      />
      <div className="flex flex-col">
        <p className="font-semibold text-[1rem]">{authorLogin}</p>
        <div className="flex gap-4">
          <li className="list-none font-normal text-[0.85rem]">{authorUrl}</li>
          <li className="font-normal ml-2 text-[0.85rem]">{createdDate.toLocaleDateString('en-US', options)}</li>
        </div>
      </div>
    </div>
  )
}
