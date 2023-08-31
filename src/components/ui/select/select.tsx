import { useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import { Typography } from '..'

import style from './select.module.scss'

interface SelectProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  options?: Array<{ value: string; label: string }>
  className?: string
}

export const SelectComponent = ({
  value,
  onChange,
  disabled,
  options,
  placeholder,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const isDis = disabled || !options || options.length === 0 ? true : false

  return (
    <Select.Root
      value={value}
      onValueChange={onChange}
      open={isOpen}
      onOpenChange={setIsOpen}
      disabled={isDis}
    >
      <Select.Trigger
        className={`${style.selectTrigger} ${className}`}
        aria-label="Select"
        onClick={handleOpen}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={style.selectIcon}>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className={style.selectPortal}>
        <Select.Content
          className={style.selectContent}
          position="popper"
          onCloseAutoFocus={handleClose}
        >
          <Select.ScrollUpButton className={style.selectScrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={style.selectViewport}>
            <Select.Group className={style.selectGroup}>
              {options?.map(option => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  disabled={disabled}
                  className={style.selectItem}
                >
                  <Select.ItemText className={style.selectItemText}>
                    <Typography variant="body1" className={isDis ? style.disText : ''}>
                      {option.label}
                    </Typography>
                  </Select.ItemText>
                  <Select.ItemIndicator></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={style.selectScrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
