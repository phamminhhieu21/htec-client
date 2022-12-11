/* eslint-disable react-hooks/exhaustive-deps */
import {useRef, useEffect, useState} from 'react'

export function useHeadsObserver() {
  const [activeId, setActiveId] = useState('')
  const observer = <any>useRef()

  useEffect(() => {
    const handleObsever = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '-20% 0% -35% 0px',
    })

    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    elements.forEach((elem: any) => observer.current.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return {activeId}
}
