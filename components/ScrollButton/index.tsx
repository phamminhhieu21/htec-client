import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import styled from 'styled-components'
import {Button} from './styled'

const ScrollButton = () => {
  const Wrapped = styled.div`
    //styled
    .icon-scrollTop {
      @media screen and (max-width: 479px) {
        font-size : 2.5rem;
      }
    }
  `
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 170) {
      setVisible(true)
    } else if (scrolled <= 170) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)
  return (
    <Wrapped>
      <Button>
        <FaArrowCircleUp
          onClick={scrollToTop}
          className="icon-scrollTop"
          style={{
            display: visible ? 'inline' : 'none',
            position: 'fixed',
            bottom: '18%',
            right: '2%',
          }}
        />
      </Button>
    </Wrapped>
  )
}

export default ScrollButton
