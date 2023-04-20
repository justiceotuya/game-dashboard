export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  text: string
  disabled?: boolean
  variant?: 'primary' | 'danger' | 'outline';

  isLoading?: boolean
  isFullWidth?: boolean
}
