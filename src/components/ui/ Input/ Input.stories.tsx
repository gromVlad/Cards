import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Input } from './ Input'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export const Text = {
  args: {
    disabled: false,
    type: 'text',
  },
}

export const Password = {
  args: {
    disabled: false,
    type: 'password',
  },
}

export const Search = {
  args: {
    disabled: false,
    type: 'search',
  },
}

export const Error = {
  args: {
    disabled: false,
    type: 'text',
    error: 'error',
  },
}

export const Disable = {
  args: {
    disabled: true,
    type: 'text',
  },
}

export function WithText() {
  let [value, setValue] = useState<string>('')

  return (
    <>
      <div>
        <h1>{value}</h1>
        <Input type="text" value={value} onChangeText={setValue} />
      </div>
    </>
  )
}

export function WithPassword() {
  let [value, setValue] = useState<string>('')

  return (
    <>
      <div>
        <h1>{value}</h1>
        <Input type="password" value={value} onChangeText={setValue} />
      </div>
    </>
  )
}

export function WithSearch() {
  let [value, setValue] = useState<string>('')

  return (
    <>
      <div>
        <h1>{value}</h1>
        <Input type="search" value={value} onChangeText={setValue} />
      </div>
    </>
  )
}
