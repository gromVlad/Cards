import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Select } from '.'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

const options = [
  { id: 1, value: 'react' },
  { id: 2, value: 'angular' },
  { id: 3, value: 'vue' },
]

export const Default = () => <Select options={options} />

export const WithValue = () => <Select options={options} value="angular" />

export const Controlled = () => {
  const [value, setValue] = useState(1)

  return (
    <>
      <h1>Id : {value}</h1>
      <Select options={options} value={value} onChangeOption={setValue} />
    </>
  )
}
