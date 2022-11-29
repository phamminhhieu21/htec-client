import React from 'react'
import {NextPage, InferGetServerSidePropsType, GetServerSideProps} from 'next'
import {Wrapped} from './styled'
const ProfilePage: NextPage = () => {
  return (
    <Wrapped>
      <div>
        <h1>Profile Page</h1>
      </div>
    </Wrapped>
  )
}
export default ProfilePage
