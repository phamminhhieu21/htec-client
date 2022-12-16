/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {VscChromeClose} from 'react-icons/vsc'
import {useState} from 'react'
import Link from 'next/link'
import {FcHome, FcIdea, FcPortraitMode} from 'react-icons/fc'
const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const Wrapped = styled.div`
    width: 100%;
    max-width: 100%;
    header {
      padding: 0.6rem;
      background-color: #9337e99e;
      box-shadow: #9337e98f 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
      @media screen and (max-width: 479px) {
        padding: 0.7rem;
      }
      @media screen and (max-width: 767px) {
        padding: 0.5rem;
      }
      .nav-custom {
        @media screen and (max-width: 767px) {
          justify-content: space-between;
          padding: 0 0.5rem;
          .icon-menu {
            color: #f2e3ffd4;
          }
        }
        .logo-header {
          @media screen and (max-width: 479px) {
            width: 2rem;
          }
        }
      }
      .blog-name {
        color: #8ef8d4;
        text-shadow: 2px 4px #3c70be;
        font-size: 1.5rem;
      }
      .list-menu {
        padding-left: 1.5rem;
      }
      .logoHeader {
        width: 30px;
        height: 30px;
      }
      .menu-item-label {
        padding: 0.3rem 0.5rem;
        color: #e9d4fcd1;
      }
    }
    .menu-mobile {
      .icon-menu {
        font-size: 1.8rem;
      }
      .menu-list-mobile {
        display: block;
        top: 54px;
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #4b0091db;
        right: 0;
        transition: all 0.3s ease;
        li {
          padding: 0.3rem 0.5rem;
          .menu-item-label {
            color: #e7ccffd1;
          }
        }
        li:last-child {
          padding-bottom: 0.8rem;
        }
        li:first-child {
          padding-top: 0.5rem;
        }
      }
    }
  `
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <Wrapped>
      <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
        <div className="flex items-center justify-center mx-auto max-w-7xl nav-custom">
          <a href="/" className="flex items-center">
            <img
              className="w-9 logo-header"
              src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Home-valentine-love-bearicons-outline-color-bearicons.png"
            />{' '}
            <b className="blog-name mt-1">HTec</b>
          </a>
          <div className="flex items-center space-x-1 list-menu">
            <ul className="hidden space-x-2 md:inline-flex">
              <li>
                <Link href="/">
                  <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex item-center">
                    <FcHome className="icon-menu-child mx-1 text-xl" /> Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex item-center">
                    <FcIdea className="icon-menu-child mx-1 text-xl" /> Blogs
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex item-center">
                    <FcPortraitMode className="icon-menu-child mx-1 text-xl" />{' '}
                    About me
                  </p>
                </Link>
              </li>
            </ul>
            <div className="inline-flex md:hidden menu-mobile ">
              {isMenu ? (
                <VscChromeClose
                  className="text-gray-600 cursor-pointer icon-menu"
                  onClick={() => toggleMenu()}
                />
              ) : (
                <AiOutlineMenu
                  className="text-gray-600 cursor-pointer icon-menu"
                  onClick={() => toggleMenu()}
                />
              )}
              {isMenu && (
                <ul className="space-y-2 menu-list-mobile">
                  <li>
                    <Link href="/">
                      <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex items-center">
                        <FcHome className="icon-menu-child mx-1 text-base" />{' '}
                        Home
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex items-center">
                        <FcIdea className="icon-menu-child mx-1 text-base" />{' '}
                        Blogs
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile">
                      <p className="px-4 py-2 font-medium text-gray-600 rounded menu-item-label flex items-center">
                        <FcPortraitMode className="icon-menu-child mx-1 text-base" />{' '}
                        About me
                      </p>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
    </Wrapped>
  )
}
export default Header
