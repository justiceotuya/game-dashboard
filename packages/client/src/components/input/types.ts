export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
