import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useState, useEffect} from 'react'
import Head from 'next/head'
export default function App({Component, pageProps}: AppProps) {
  // const isSSR = typeof window === 'undefined'
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])
  return (
    !isSSR && (
      <>
        <Head>
          <title>HTec</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
  )
}
