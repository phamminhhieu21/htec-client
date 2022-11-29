import styled from 'styled-components'

const SkeletonCard = () => {
  const Wrapped = styled.div`
    .skeleton-card {
      width: 100%;
      height: 100%;
    }
  `

  return (
    <Wrapped>
      <div className="flex w-full flex-1 flex-col items-center  px-20 skeleton-card">
        <div className="mt-12 w-1/2 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </Wrapped>
  )
}
export default SkeletonCard
