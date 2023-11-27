export type CButtonProps = {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' 
  size?: 'large' | 'medium' | 'small' | 'mini'
  icon?: string
  nativeType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  plain?: boolean
  autofocus?: boolean
  round?: boolean
  circle?: boolean
}
