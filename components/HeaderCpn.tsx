/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
export const HeaderCpn = (props: any) => {
  const {avatarUrl} = props
  const Wrapped = styled.div`
    .avatar-header {
      width: 18.75rem;
      height: 18.75rem;
      border-radius: 50%;
      box-shadow: 0 6px 0 #e0d4d1;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
      overflow: hidden;
      transition: all 0.3s ease;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .intro {
      margin-top: 1.5rem;
    }
  `
  return (
    <Wrapped>
      <section>
        <title>HTec Blog</title>
        <div className="avatar-header">
          <img src={`${avatarUrl}`} alt="avatar-author" />
        </div>
        <div>
          <div className="mt-3 text-center">
            <h1 className="text-[3rem] mb-2">
              <b>HTec</b> Blog
            </h1>
            <Link href="/profile"
              className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
              <span className="relative z-20 flex items-center text-sm">
                <svg
                  className="relative w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                About me
              </span>
            </Link>
            <div className="intro text-lg">
              <p>
                I&apos;m a<b> Web Developer</b>
              </p>
              <p>A Developer likes writing and love technology</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapped>
  )
}
