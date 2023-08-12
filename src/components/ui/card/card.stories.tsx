import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Card } from './'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
  },
}

export function Primary() {
  return (
    <Card style={{ padding: '25px' }}>
      <h1> Title </h1>
      <Button variant="primary" fullWidth={false}>
        Hello
      </Button>
    </Card>
  )
}
