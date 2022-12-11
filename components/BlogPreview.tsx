import React from 'react'
import {BlogPost} from './../model/blog'
import {BlogHeader} from './BlogHeader'
import styled from 'styled-components'
import TagCpn from './Tags'
import {IoIosArrowDroprightCircle, IoMdReturnRight} from 'react-icons/io'
import {RxPaperPlane, RxLink2, RxDotFilled} from 'react-icons/rx'

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
    lastEdited,
  } = props
  const previewText = bodyText.substring(0, 150) + '...'
  const Wrapped = styled.div`
    .tags-custom {
      position: relative;
      display: flex;
      align-items: center;
      .readmore {
        position: absolute;
        right: 0;
        .custom-readmore {
          font-size: 0.7rem;
          padding: 3px 6px;
          background-color: #2884a7;
          font-weight: 400;
          .w-custom {
            width: 0.8rem;
          }
        }
        @media screen and (max-width: 479px) {
          display: none;
        }
      }
      .readmore-mobile {
        position: absolute;
        right: 0;
        svg {
          font-size: 1.3rem;
          color: #1f1facb8;
        }
        @media screen and (max-width: 479px) {
          display: block;
        }
        @media screen and (min-width: 480px) {
          display: none;
        }
      }
    }
  `
  return (
    <Wrapped>
      <section className="blog-preview">
        <BlogHeader
          createdAt={createdAt}
          lastEdited={lastEdited}
          authorUrl={authorUrl}
          authorLogin={authorLogin}
          authorAvatarUrl={authorAvatarUrl}
          isPreview={true}
        />
        <h2 className="font-bold title-blog-preview">{title}</h2>
        <p className="mt-2">{previewText}</p>
        <div>
          {/* <a
            className="text-slate-400 text-sm font-bold mt-1 flex flex-row items-center flex-wrap"
            href={urlBlogCustom}
          >
            <RxLink2 style={{marginRight: '4px', fontSize: '1rem'}} />{' '}
            {urlBlogCustom}
          </a> */}
        </div>
        <div className="flex flex-row gap-2 mt-2 tags-custom">
          {tags.map((tag, index) => {
            return <TagCpn key={index} tag={tag} labels={labels} />
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
          <div className="readmore-mobile">
            <IoMdReturnRight />
          </div>
        </div>
      </section>
    </Wrapped>
  )
}
export default BlogPreview
