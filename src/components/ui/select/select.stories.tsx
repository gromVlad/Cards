import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { SelectComponent } from '.'

const meta = {
  title: 'Components/Select',
  component: SelectComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectComponent>

export default meta

const options = [
  { value: '1', label: 'react' },
  { value: '2', label: 'angular' },
  { value: '3', label: 'vue' },
]

export const Default = () => <SelectComponent placeholder={'select...'} />

export const Control = () => {
  let [val, setVal] = useState('1')

  return (
    <div style={{ margin: '25px' }}>
      <h1>{val}</h1>
      <SelectComponent options={options} value={val} onChange={setVal} />
    </div>
  )
}

export const Disable = () => {
  let [val, setVal] = useState('1')

  return (
    <div style={{ margin: '25px' }}>
      <h1>{val}</h1>
      <SelectComponent options={options} value={val} onChange={setVal} disabled={true} />
    </div>
  )
}
