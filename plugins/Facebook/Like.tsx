import React from 'react'
import {useEffect} from 'react'

interface LikeAndShare {
  dataHref?: string
  width?: string
}
const Like = ({dataHref, width}: LikeAndShare) => {
  const initLikeAnShare = () => {
    // if (window.FB) {
    //   window.FB.XFBML.parse()
    // }
    const facebookScript = document.createElement('script')
    facebookScript.async = true
    facebookScript.defer = true
    facebookScript.crossOrigin = 'anonymous'
    facebookScript.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5&cookie=true&status=true&appId=${process.env.FACEBOOK_APP_ID}`
    // Load the SDK asynchronously
    //   (function (d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s); js.id = id;
    //     js.src = `//connect.facebook.net/${locale}/sdk.js`;
    //     fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
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
        data-width={width ? width : '100'}
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="false"
      />
    </>
  )
}
export default Like
