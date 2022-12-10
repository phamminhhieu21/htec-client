import React from 'react'
import {useEffect} from 'react'

interface LikeAndShare {
  dataHref?: string
}
const LikeAndShare = ({dataHref}: LikeAndShare) => {
  const initLikeAnShare = () => {
    // if (window.FB) {
    //   window.FB.XFBML.parse()
    // }
    const facebookScript = document.createElement('script')
    facebookScript.async = true
    facebookScript.defer = true
    facebookScript.crossOrigin = 'anonymous'
    // facebookScript.nonce = 'EgcPZuLW'
    facebookScript.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`
    // facebookScript.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=2156491084555653&autoLogAppEvents=1"
    document.body.appendChild(facebookScript)
  }

  useEffect(() => {
    initLikeAnShare()
  }, [])
  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-like"
        data-href={dataHref}
        data-width
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="true"
      />
    </>
  )
}
export default LikeAndShare
