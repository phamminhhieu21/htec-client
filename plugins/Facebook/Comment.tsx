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
  const initFacebookSDK = () => {
    // if (window.FB) {
    //   window.FB.XFBML.parse()
    // }
    const facebookScript = document.createElement('script')
    facebookScript.async = true
    facebookScript.src = `https://connect.facebook.net/en_US/sdk.js#xfbml=true&version=v2.7&cookie=true&status=true&appId=${process.env.FACEBOOK_APP_ID}&autoLogAppEvents=1`
    document.body.appendChild(facebookScript)

    // let locale = language ? language : 'en_US'
    // window.fbAsyncInit = function () {
    //   window.FB.init({
    //     appId: process.env.FACEBOOK_APP_ID,
    //     status: true,
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v2.7', // or v2.6, v2.5, v2.4, v2.3
    //   })
    // }
    // // Load the SDK asynchronously
    // ;(function (d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0]
    //   if (d.getElementById(id)) {
    //     return
    //   }
    //   js = d.createElement(s)
    //   js.id = id
    //   js.src = '//connect.facebook.net/' + locale + '/sdk.js'
    //   fjs.parentNode.insertBefore(js, fjs)
    // })(document, 'script', 'facebook-jssdk')
  }

  useEffect(() => {
    console.log('dataHref',dataHref)
    initFacebookSDK()
  }, [])

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href={dataHref}
        data-width={width ? width : ''}
        data-numposts={numberPost ? numberPost : 5}
      />
    </>
  )
}
export default Comments
