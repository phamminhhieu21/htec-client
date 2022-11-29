import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useState, useEffect} from 'react'
// import NextNProgress from 'nextjs-progressbar'
// import dynamic from 'next/dynamic'
// const  ComponentName = dynamic(() => import('../components/ComponentName'), { ssr: false })
export default function App({Component, pageProps}: AppProps) {
  // const isSSR = typeof window === 'undefined'
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])
  return !isSSR && <Component {...pageProps} />
}
