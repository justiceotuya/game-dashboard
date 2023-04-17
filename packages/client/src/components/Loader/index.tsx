import React from 'react'
import { ReactComponent as LoadingIcon } from '../../assets/loading_icon.svg'

type Props = {
    className?: string
}

const Loader = (props: Props) => {
  return (
    <LoadingIcon
          className={`w-5 h-5 mr-2 fill-blue-500 animate-spin  text-gray-disabled opacity-2 ${props.className}`}
        />
  )
}

export default Loader
