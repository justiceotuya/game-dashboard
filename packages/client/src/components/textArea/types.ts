export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
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
