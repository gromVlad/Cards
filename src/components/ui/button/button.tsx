import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'> //ComponentPropsWithoutRef<'button'> - это пропсы, которые принимает стандартный html-тег button, мы их расширяем своими пропсами.

export const Button = ({ variant = 'primary', fullWidth, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}

//21 2023 06 24 par 2 -> 9.08
