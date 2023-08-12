import type { Meta } from '@storybook/react'

import { Checkbox } from './'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export const Uncontrolled = {
  args: {
    label: 'Click here',
    disabled: false,
  },
}

export const Uncontrolled2 = {
  args: {
    label: 'Click here',
    disabled: false,
    checked: true,
  },
}

export const Uncontrolled3 = {
  args: {
    label: 'Click here',
    disabled: false,
    checked: false,
  },
}
