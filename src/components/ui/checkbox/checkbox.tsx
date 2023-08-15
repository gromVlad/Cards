import { FC, ReactNode } from 'react'

import { Typography } from '../typography'

import styles from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  checked: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  id?: string
  position?: 'left'
  children?: ReactNode
}
export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  id,
  className,
  children,
}) => {
  const handleCheckedChange = () => {
    onChange && onChange(!checked)
  }

  const finalInputClassName = styles.checkbox + (className ? ' ' + className : '')
  /* + disabled ? styles.dis */

  return (
    <label className={`${styles.label} `}>
      <input
        type="checkbox"
        className={finalInputClassName}
        checked={checked}
        onChange={handleCheckedChange}
        disabled={disabled}
        required={required}
        id={id}
      />
      {children && (
        <Typography variant="body2" as={'span'} className={disabled ? styles.disabledText : ' '}>
          {children}
        </Typography>
      )}
    </label>
  )
}
