import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { SliderComponent } from '.'

const meta = {
  title: 'Components/Slider',
  component: SliderComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof SliderComponent>

export default meta

export const Primary = () => <SliderComponent />

export const Default = () => {
  return <SliderComponent min={0} max={100} defaultValue={[10, 60]} />
}

export const Control = () => {
  const [value, setValue] = useState([2, 8, 7])

  return (
    <>
      <SliderComponent
        value={value}
        onValueChange={setValue}
        min={0}
        max={10}
        minStepsBetweenThumbs={1}
      />
      <div>Значение: {value.map((el, index) => `${index + 1}: ${el}  | `)}</div>{' '}
    </>
  )
}

export const Disable = () => {
  return <SliderComponent min={0} max={100} defaultValue={[10, 60]} disabled={true} />
}
