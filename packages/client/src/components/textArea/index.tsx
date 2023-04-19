import React, { useState } from 'react'
interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  required?: boolean
  disabled?: boolean
  type: string
  placeholder?: string
  name?: string
  value?: string
  className?: string
  error?: string | false
  optional?: any
}

const TextArea = (props: Props) => {
  const {
    required = false,
    label,
    placeholder = '',
    name,
    className = '',
    disabled = false,
    error,
    optional,
    value
  } = props


  let disabledClass = disabled ? 'cursor-not-allowed' : ''

  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-sm">
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-color-accent-1 ${error && 'text-color-error'}`}
        >
          {label}
        </label>
      </div>
      <div className="relative">
        <textarea
          //   type={type}
          id={name}
          className={`form-input border bg-gray-50  text-sm rounded-lg block w-full mb-2.5  py-3 placeholder:text-color-secondary-6 disabled:cursor-not-allowed shadow-xs disabled:bg-gray-disabled-2 disabled:text-base-black  px-4 ${className} ${disabledClass}
         ${error
              ? ' border-color-error  focus:ring-color-error focus:ring-1 active:border-color-error hover:border-color-error focus:outline-none focus:border-color-error  text-color-error placeholder:text-color-error'
              :
              ' border-color-secondary-3 text-color-accent-1   active:border-color-primary-1      hover:border-color-primary-1 focus:outline-none  focus:ring-1  focus:ring-color-primary-1 focus:border-color-primary-1'
            }`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          value={value}
          {...props}
        ></textarea>
      </div>
      {error && <p className="block text-xs text-color-error">{error}</p>}
    </div>
  )
}

export default TextArea
