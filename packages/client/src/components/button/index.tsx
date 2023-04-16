import React, { useCallback } from 'react'
import { ReactComponent as LoadingIcon } from '../../assets/loading_icon.svg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  text: string
  disabled?: boolean
  variant?: 'primary' | 'disabled'
  isLoading?: boolean
  isFullWidth?: boolean
  // type?: string
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    text,
    variant = 'primary',
    disabled = false,
    isLoading = false,
    isFullWidth = false,
    type = 'button',
    ...rest
  } = props

  const defaultStyle = `bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:shadow-focus text-white`
  const disabledStyle = `bg-gray-200
  text-gray-300 border-0`

  const showIcon = useCallback(() => {
    if (isLoading) {
      return (
        <LoadingIcon
          // className="opacity-2
          className={`w-5 h-5 mr-2 fill-blue-500 animate-spin  text-gray-disabled opacity-2 ${props.className}`}
        />
      )
    } else if (!isLoading && icon) {
      return icon
    } else {
      return ''
    }
  }, [isLoading, icon])

  return (
    <button
      type={type}
      className={`
      group relative inline-flex  justify-center rounded-md border border-transparent  py-2.5 px-4 text-sm font-medium   focus:outline-none ${
        disabled || isLoading ? disabledStyle : defaultStyle
      } ${isFullWidth ? 'w-full' : ''}`}
      disabled={isLoading || disabled}
      {...rest}
    >
      {showIcon()}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
      {text}
    </button>
  )
}



export default Button
