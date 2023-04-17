import React, { useCallback } from 'react'
import { ReactComponent as LoadingIcon } from '../../assets/loading_icon.svg'
import Loader from '../Loader'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  text: string
  disabled?: boolean
  // variant?: 'primary' | 'disabled'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';

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

  const defaultStyle = useCallback(() => {
    switch (variant) {
      case 'primary':
        return `bg-color-cyan-2  text-color-white`
       case 'outline':
        return `text-color-accent-1  bg-color-white border-color-secondary-3`
      default:
        return `bg-color-cyan-2  text-color-white`
    }
  }, [variant])


  const disabledStyle = `bg-color-cyan-2
  text-color-secondary-5 border-0`

  const showIcon = useCallback(() => {
    if (isLoading) {
      return (
        <Loader/>
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
      group relative inline-flex  justify-center rounded   py-2.5 px-4 text-sm font-medium gap-2 hover:opacity-60 focus:outline-none ${
        (disabled || isLoading) ? disabledStyle : defaultStyle
()      } ${isFullWidth ? 'w-full' : ''}`}
      disabled={isLoading || disabled}
      {...rest}
    >
      {showIcon()}
      <p>
      {text}
      </p>
    </button>
  )
}



export default Button
