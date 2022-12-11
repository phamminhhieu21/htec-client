import React from 'react'
import {useEffect} from 'react'

interface Share {
  dataHref?: string
  width?: string
}
const Share = ({dataHref, width}: Share) => {
  const initShare = () => {
    // if (window.FB) {
    //   window.FB.XFBML.parse()
    // }
    const facebookScript = document.createElement('script')
    facebookScript.async = true
    facebookScript.defer = true
    facebookScript.crossOrigin = 'anonymous'
    facebookScript.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&cookie=true&status=true&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`
    document.body.appendChild(facebookScript)
  }
  useEffect(() => {
    initShare()
  }, [])
  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-share-button"
        data-href={dataHref}
        data-layout="button_count"
        data-size="small"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          Chia sẻ
        </a>
      </div>
    </>
  )
}
export default Share
