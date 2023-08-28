import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Slider from '@radix-ui/react-slider'

import { Typography } from '..'

import s from './slider.module.scss'

export const SliderComponent = forwardRef<
  ElementRef<typeof Slider.Root>,
  ComponentPropsWithoutRef<typeof Slider.Root>
>(({ className, ...props }, ref) => {
  const value = props.value || props.defaultValue

  return (
    <div className={s.container}>
      <Typography variant="body1" className={s.spanText}>
        {props?.value?.[0]}
      </Typography>
      <Slider.Root className={s.sliderRoot} ref={ref} {...props} step={1}>
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        {value?.map((_, i) => (
          <Slider.Thumb key={i} className={s.sliderThumb} aria-label="Volume" />
        ))}
      </Slider.Root>
      <Typography variant="body1" className={s.spanText}>
        {props?.value?.[1]}
      </Typography>
    </div>
  )
})
