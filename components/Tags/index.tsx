import React from 'react'
import {labelPost} from '../../model/blog'
import {Wrapped} from './styled'
const TagCpn = (props: any) => {
  const {key, tag, labels} = props
  return (
    <Wrapped>
      <span
        className="text-xs background-label text-neutral-300 rounded-lg px-2 py-1 tag-custom"
        style={{
          backgroundColor: `#${
            labels?.find((item: labelPost) => item.name === tag)?.color
          }`,
        }}
      >
        {tag}
      </span>
    </Wrapped>
  )
}
export default TagCpn
