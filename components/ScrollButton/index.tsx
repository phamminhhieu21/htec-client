import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import styled from 'styled-components'
import {Button} from './styled'

const ScrollButton = () => {
  const Wrapped = styled.div`
    //styled
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
          style={{
            display: visible ? 'inline' : 'none',
            position: 'fixed',
            bottom: '15%',
            right: '2%',
          }}
        />
      </Button>
    </Wrapped>
  )
}

export default ScrollButton
