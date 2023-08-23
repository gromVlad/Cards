import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { RadioGroup } from '.'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

export const Default = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ]

  return <RadioGroup options={options} />
}

export const WithValue = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ]

  return <RadioGroup options={options} value="angular" />
}

export const Disabled = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ]

  return <RadioGroup options={options} value="angular" isDisabled={true} />
}

export const Controlled = () => {
  const [value, setValue] = useState('react')
  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ]

  return <RadioGroup options={options} value={value} onChange={setValue} />
}
