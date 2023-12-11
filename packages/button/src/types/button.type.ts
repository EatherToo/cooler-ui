import { type Component } from 'vue'
export type CButtonProps = {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'medium' | 'small' | 'mini'
  icon?: string
  nativeType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  plain?: boolean
  autofocus?: boolean
  round?: boolean
  circle?: boolean
  startIcon?: Component
  endIcon?: Component
  loadingPosition?: 'left' | 'right'
  text?: boolean
  bg?: boolean
}
