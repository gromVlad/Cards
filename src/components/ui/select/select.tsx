import { ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState, useRef } from 'react'

import arrow from './LayerSelect.svg'
import s from './select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
  themeId?: number
}

export const Select: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  const mappedOptions: any[] = options
    ? options.map((o: { id: number; value: string }) => (
        <option id={'option-' + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value)
      setIsOpen(false)
    }
  }

  const handleClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      if (selectRef.current) {
        selectRef.current.blur()
      }
    }, 0)
  }

  return (
    <div className={s.container}>
      <img className={`${s.arrowSvg} ${isOpen ? s.open : s.closed}`} src={arrow} />
      <select
        ref={selectRef}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onClick={handleClick}
        className={s.select}
        onChange={onChangeCallback}
        {...restProps}
      >
        {mappedOptions}
      </select>
    </div>
  )
}
