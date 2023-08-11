import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  as: any
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'> //ComponentPropsWithoutRef<'button'> - это пропсы, которые принимает стандартный html-тег button, мы их расширяем своими пропсами.

export const Button = ({
  variant = 'primary',
  fullWidth,
  className,
  as: Component = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
