import React from 'react'
import { BlogPost } from './../model/blog';
import { BlogHeader } from './BlogHeader';

 const BlogPreview : React.FC<BlogPost> = (props) => {
  const {
    title,
    bodyText,
    createdAt,
    tags,
    authorLogin,
    authorAvatarUrl,
    authorUrl,
  } = props
  const previewText = bodyText.substring(0, 150) + '...'
  return (
    <section>
      <BlogHeader
        createdAt={createdAt}
        authorUrl={authorUrl}
        authorLogin={authorLogin}
        authorAvatarUrl={authorAvatarUrl}
      />
      <h2 className='font-bold'>{title}</h2>
      <p className='mt-2'>{previewText}</p>
      <div className='flex flex-row gap-2 mt-2'>
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className='text-xs bg-neutral-500 text-neutral-300 rounded-lg px-2 py-1'
            >
              {tag}
            </span>
          )
        })}
      </div>
    </section>
  )
}
export default BlogPreview
