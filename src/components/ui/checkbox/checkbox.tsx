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

  return (
    <label className={`${styles.label} `}>
      <div className={disabled ? styles.checkboxWrapperDis : styles.checkboxWrapper}>
        <input
          type="checkbox"
          className={finalInputClassName}
          checked={checked}
          onChange={handleCheckedChange}
          disabled={disabled}
          required={required}
          id={id}
        />
      </div>
      {children && (
        <Typography variant="body2" as={'span'} className={disabled ? styles.disabledText : ' '}>
          {children}
        </Typography>
      )}
    </label>
  )
}
