/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {FcGoogle} from 'react-icons/fc'
import {FaAngellist} from 'react-icons/fa'
const HeaderCpn = (props: any) => {
  const {avatarUrl} = props
  const Wrapped = styled.div`
    .avatar-header {
      width: 18.75rem;
      height: 18.75rem;
      border-radius: 50%;
      box-shadow: 0 8px 18px #9ad0f3;
      border: 2px solid #4c036c;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
      overflow: hidden;
      transition: all 0.3s ease;
      @media screen and (max-width: 479px) {
        width: 13.75rem;
        height: 13.75rem;
        margin-top: 3.8rem;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .name-custom {
      font-size: 3.75rem;
      font-weight: 700;
      text-align: center;
      margin-top: 2rem;
      color: #8ef8d4;
      text-shadow: 3px 5px #3c70be;
      @media screen and (max-width: 479px) {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }
    }
    .intro {
      margin-top: 1.5rem;
      .icon-intro {
        font-size: 1.55rem;
        margin-left: 6px;
      }
    }
  `
  return (
    <Wrapped>
      <section>
        <title>HTec</title>
        <div className="avatar-header">
          <img src={`${avatarUrl}`} alt="avatar-author" />
        </div>
        <div>
          <div className="mt-3 text-center">
            <h1 className="text-[3rem] mb-2 name-custom">
              <b>HTec</b> Pham
            </h1>
            <Link
              href="/profile"
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
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FaAngellist
                  className="icon-intro"
                  style={{marginRight: '4px'}}
                />{' '}
                I&apos;m a &nbsp;
                <b
                  style={{
                    fontWeight: 700,
                    color: '#8ef8d4',
                    textShadow: '1px 3px #3c70be',
                  }}
                >
                  Web Developer
                </b>{' '}
                <FcGoogle className="icon-intro" />
              </p>
              <p>
                A <b>Developer</b> likes <b>writing</b> and love{' '}
                <b>technology</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapped>
  )
}
export default HeaderCpn
