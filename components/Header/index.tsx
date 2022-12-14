/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const Wrapped = styled.div`
    width: 100%;
    max-width: 100%;
    header {
      padding: 0.8rem;
      background-color: #9337e99e;
      box-shadow: #9337e98f 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
      @media screen and (max-width: 479px) {
        padding: 0.7rem;
      }
      .logoHeader{
        width : 30px;
        height : 30px;
      }
      .menu-item-label{
        padding: 0.3rem 0.5rem;
        color: #e9d4fcd1;
      }
    }
    .menu-mobile {
      .icon-menu {
        font-size: 1.7rem;
      }
      .menu-list-mobile {
        display: block;
        top: 54px;
        position: absolute;
        width: 100%;
        left: 0;
        background-color: #9337e9b8;
        right: 0;
        transition: all 0.3s ease;
        li {
          padding: 0.1rem 0.5rem;
          .menu-item-label {
            color: #e7ccffd1;
          }
        }
        li:last-child {
          padding-bottom: 0.5rem;
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
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <a href="#">
            {/* <img src="../../resources/logo/logo.png" alt="" className='logoHeader'/> */}
            <p>HTec</p>
          </a>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              <li>
                <Link href="/">
                  <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
                    Blogs
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
                    About me
                  </p>
                </Link>
              </li>
            </ul>
            <div className="inline-flex md:hidden menu-mobile ">
              {isMenu ? (
                <GrClose
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
                      <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
                        Blogs
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile">
                      <p className="px-4 py-2 font-semibold text-gray-600 rounded menu-item-label">
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
