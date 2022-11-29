import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'

const ButtonBack = () => {
  const Wrapped = styled.div`
    .button-back-custom {
      font-size: 0.8rem;
      font-weight: 600;
      .size-custom {
        width: 1rem;
      }
    }
  `
  return (
    <Wrapped>
      <button
        className="inline-flex items-center px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md button-back-custom"
        onClick={() => Router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 size-custom mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
        back
      </button>
    </Wrapped>
  )
}
export default ButtonBack
