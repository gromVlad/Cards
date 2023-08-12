import { FC } from 'react'

import { Typography } from '../typography'

import styles from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  checked: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  label,
  id,
  className,
}) => {
  const handleCheckedChange = () => {
    onChange && onChange(!checked)
  }

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.input}
            checked={checked}
            onChange={handleCheckedChange}
            disabled={disabled}
            required={required}
            id={id}
          />
          <label htmlFor="checkbox"></label>
        </div>
        <Typography variant="body2" as={'span'} className={disabled ? styles.disabledText : ' '}>
          {label}
        </Typography>
      </div>
    </>
  )
}
