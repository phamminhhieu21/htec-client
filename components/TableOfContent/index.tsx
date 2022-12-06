import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {useHeadsObserver} from '../../Hooks/useHeadsObserver'
import { SiCodefactor } from "react-icons/si";
import { FcNext } from "react-icons/fc";

const TableOfContent = () => {
  const [headings, setHeadings] = useState([])
  const {activeId} = useHeadsObserver()
  useEffect(() => {
    const elements: any = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ).map((elem: any) => ({
      id: elem.id,
      text: elem.innerText,
      level: Number(elem.nodeName.charAt(1)),
    }))
    setHeadings(elements)
  }, [])
  const getClassName = (level: any): any => {
    switch (level) {
      case 1:
        return 'head1'
      case 2:
        return 'head2'
      case 3:
        return 'head3'
      case 4:
        return 'head4'
      case 5:
        return 'head5'
      case 6:
        return 'head6'
      default:
        return null
    }
  }
  const Wrapped = styled.div`
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 1.4rem;
      }
    }
    nav {
      width: 275px;
      max-width: 285px;
      padding: 6px;
      align-self: flex-start;
      position: -webkit-sticky;
      position: sticky;
      top: 48px;
      max-height: calc(100vh - 70px);
      overflow: auto;
      margin-top: 150px;
    }

    nav ul li {
      margin-bottom: 15px;
    }
    .head3 {
      margin-left: 10px;
      list-style-type: circle;
    }
    .head4 {
      margin-left: 20px;
      list-style-type: square;
    }
    .list-content {
      margin-top: 20px;
      li {
        font-size: 0.85rem;
      }
      svg {
        display: inline-block;
      }
    }
  `

  return (
    <Wrapped>
      <nav>
        <p className="title">
          <SiCodefactor 
            style={{marginRight: '8px'}}
          /> TABLE OF CONTENTS
        </p>
        <ul className="list-content">
          {headings.map((heading: any) => {
            return (
              <li
                key={heading.id}
                className={getClassName(heading.level)}
                style={{marginLeft: `${heading.level}em`}}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                  style={{
                    fontWeight: activeId === heading.id ? 'bold' : 'normal',
                  }}
                >
                  <FcNext
                    style={{
                      marginRight: '5px',
                      fontSize: '0.9rem'
                    }}
                  />
                  {heading.text}
                </a>
                &lt;
              </li>
            )
          })}
        </ul>
      </nav>
    </Wrapped>
  )
}
export default TableOfContent
