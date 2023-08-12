import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

export type CardType = {} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...restProps }: CardType) => {
  return <div className={`${s.card}`} {...restProps} />
}
