import React from 'react'
import {NextPage, InferGetServerSidePropsType, GetServerSideProps} from 'next'
import {Wrapped} from './styled'
import NextNProgress from 'nextjs-progressbar'

const ProfilePage: NextPage = () => {
  return (
    <Wrapped>
      <NextNProgress
        color="#fd7200cf"
        startPosition={1.5}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <div className='text-xl font-bold text-center mx-auto my-auto'>
        <h1>Feature is inprogress develop</h1>
      </div>
    </Wrapped>
  )
}
export default ProfilePage