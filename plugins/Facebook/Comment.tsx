/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useEffect} from 'react'

interface Comments {
  language?: string
  dataHref?: string
  numberPost?: number
  width?: string
}
const Comments = ({language, dataHref, numberPost, width}: Comments) => {
  const initComments = () => {
    // if (window.FB) {
    //   window.FB.XFBML.parse()
    // }
    const facebookScript = document.createElement('script')
    facebookScript.async = true
    facebookScript.defer = true
    facebookScript.crossOrigin = 'anonymous'
    // facebookScript.nonce = 'ugC4mrP6'
    facebookScript.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=true&version=v15.0&cookie=true&status=true&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`
    document.body.appendChild(facebookScript)
  }

  useEffect(() => {
    initComments()
  }, [])

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href={dataHref}
        data-width={width ? width : ''}
        data-numposts={numberPost ? numberPost : 5}
        data-mobile
      />
    </>
  )
}
export default Comments
