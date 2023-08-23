import { FC } from 'react'

import { Typography } from '../typography'

import styles from './radioGroup.module.scss'

export interface RadioGroupProps {
  options: {
    value: string
    label: string
  }[]
  value?: string
  isDisabled?: boolean
  onChange?: (value: string) => void
}

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  isDisabled = false,
}) => {
  const radioClassName = (optionValue: string) => {
    let cls = styles.radio

    if (value === optionValue) {
      cls += ` ${styles.radioChecked}`
    }

    return cls
  }

  return (
    <div className={styles.radioGroup}>
      {options.map(option => (
        <label key={option.value} className={radioClassName(option.value)}>
          <input
            disabled={isDisabled}
            type="radio"
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
          />
          <Typography variant="body2" className={isDisabled ? styles.disText : ''}>
            {option.label}
          </Typography>
        </label>
      ))}
    </div>
  )
}
