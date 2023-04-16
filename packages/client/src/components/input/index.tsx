import React, { useState } from 'react'
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
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

const Input = (props: Props) => {
  const {
    required = false,
    label,
    type = 'text',
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
          className={`block text-sm font-medium text-gray-quatinary ${error && 'text-red-500'}`}
        >
          {`${label} ${required === true ? '*' : ''}`}
        </label>
        {optional && <p className="block mb-0 text-xs text-gray-tertiary ">Optional</p>}
      </div>
      <div className="relative">
        <input
        //   type={type}
          id={name}
          className={`form-input bg-gray-50  text-base md:text-sm rounded-lg block w-full mb-2.5 pl-3 py-2.5 placeholder-gray-secondary disabled:cursor-not-allowed shadow-xs placeholder-opacity-25 disabled:bg-gray-disabled-2 disabled:text-base-black  pr-3 ${className} ${disabledClass}
         ${
           error
             ? 'border-[1.001px] border-red-500 text-sm focus:ring-red-500 active:border-red-500 hover:border-red-500  focus:border-red-500  text-red-500 placeholder-red-500'
             : 'border-[1.001px] border-gray-primary-2 text-gray-900 focus:ring-blue-500  focus:border-blue-500  active:border-blue-500  active:text-blue-500 hover:border-blue-500'
         }`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        value={value}
          {...props}
        />
      </div>
      {error && <p className="block text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Input
