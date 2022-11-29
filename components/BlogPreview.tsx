import React from 'react'
import {BlogPost, labelPost} from './../model/blog'
import {BlogHeader} from './BlogHeader'
import styled from 'styled-components'

const BlogPreview: React.FC<BlogPost> = (props) => {
  const {
    title,
    bodyText,
    createdAt,
    tags,
    authorLogin,
    authorAvatarUrl,
    authorUrl,
    labels,
  } = props
  console.log(tags)
  const previewText = bodyText.substring(0, 150) + '...'
  const Wrapped = styled.div`
  .tags-custom{
    position: relative;
    .readmore {
      position : absolute;
      right: 0;
      .custom-readmore {
        font-size: 0.7rem;
        padding: 3px 6px;
        background-color: #2884a7;
        font-weight: 400;
        .w-custom{
          width : 0.8rem;
        }
      }
    }
  }
    
  `
  return (
    <Wrapped>
      <section>
        <BlogHeader
          createdAt={createdAt}
          authorUrl={authorUrl}
          authorLogin={authorLogin}
          authorAvatarUrl={authorAvatarUrl}
        />
        <h2 className="font-bold">{title}</h2>
        <p className="mt-2">{previewText}</p>
        <div className="flex flex-row gap-2 mt-2 tags-custom">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="text-xs background-label text-neutral-300 rounded-lg px-2 py-1"
                style={{
                  backgroundColor: `#${
                    labels?.find((item: labelPost) => item.name === tag)?.color
                  }`,
                }}
              >
                {tag}
              </span>
            )
          })}
          <div className="readmore">
            <a
              href="#_"
              className="custom-readmore inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Read more
              <svg
                className="w-custom h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Wrapped>
  )
}
export default BlogPreview
