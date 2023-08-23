import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '../dropdownMenu'
import ava from '../dropdownMenu/ava.svg'

import logoHeader from './Logo.png'

import { Header } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

const avatar = <Avatar username="John Doe" email="client5646@.gdf" src={ava} />
const child = <div>Hello</div>

export const Primery: Story = {
  args: {
    src: logoHeader,
    rightContent: avatar,
    children: child,
  },
}
