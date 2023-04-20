import { InputHTMLAttributes } from 'react'
import { CheckboxProps } from './types'

const Checkbox = ({ checked, onChange, text, name }: CheckboxProps) => {
    const toggleCheckbox = (
        e: InputHTMLAttributes<HTMLInputElement>,
        val?: string
    ) => {
        onChange(val)
    }
    return (
        <label
            htmlFor={name}
            className='flex gap-2.5 items-center focus:border focus:border-color-primary-1  focus:ring-1'
        >
            <input
                type='checkbox'
                name={name}
                id={name}
                title='category'
                className='bg-color-white border-color-secondary-6 checked:border-color-primary-1 text-color-primary-1 border-2 rounded-sm checked:bg-color-primary-1 w-[15px] h-[15px]   focus:border-color-primary-1  focus:ring-2'
                checked={checked}
                onChange={e => toggleCheckbox(e, text)}
            />

            {text && (
                <p className=' leading-6 text-color-accent-1 text-sm '>{text}</p>
            )}
        </label>
    )
}

export default Checkbox
