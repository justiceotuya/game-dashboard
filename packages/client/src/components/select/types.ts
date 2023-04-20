export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
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
  options: string[]
}
