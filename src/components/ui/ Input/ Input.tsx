// CustomInput.tsx
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

import { Typography } from '../typography'

import styles from './ Input.module.scss'
import eyeOutline from './eyeOutline.svg'
import layer from './layer.svg'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  type: 'text' | 'password' | 'search'
  error?: string
  onChangeText?: (value: string) => void
  value?: string
}

export const Input: React.FC<Props> = props => {
  const [value, setValue] = useState(props.value || '')
  const [isVisible, setIsVisible] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    props.onChangeText?.(event.target.value)
  }

  function onToggleVisibility() {
    setIsVisible(!isVisible)
  }

  const onClear = () => {
    setValue('')
    props.onChangeText?.('')
  }

  let inputType = props.type
  let leftIcon, rightIcon

  if (props.type === 'password') {
    inputType = isVisible ? 'text' : 'password'
    rightIcon = (
      <img
        className={`${styles.icon} ${styles.rightIcon}`}
        onClick={onToggleVisibility}
        src={eyeOutline}
      />
    )
  } else if (props.type === 'search') {
    rightIcon = value.length > 0 && (
      <img className={`${styles.icon} ${styles.rightIcon}`} src={layer} onClick={onClear}></img>
    )
  }

  return (
    <div className={`${styles.container} ${props.error && styles.errorContainer}`}>
      <div className={styles.inputContainer}>
        {leftIcon}
        <input
          // eslint-disable-next-line no-nested-ternary
          placeholder={props.error ? 'Error' : props.type === 'search' ? 'Input search' : 'Input'}
          {...props}
          value={value}
          type={inputType}
          onChange={onChange}
          className={styles.input}
        />
        {rightIcon}
      </div>
      {props.error && (
        <Typography variant="error" className={styles.error}>
          {props.error}
        </Typography>
      )}
    </div>
  )
}
