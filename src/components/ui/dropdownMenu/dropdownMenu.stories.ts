import type { Meta, StoryObj } from '@storybook/react'

import ava from './ava.svg'

import { Avatar } from '.'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    onProfileClick: { action: 'profileClicked' },
    onSignOutClick: { action: 'signOutClicked' },
    onLearnClick: { action: 'learnClicked' },
    onEditClick: { action: 'editClicked' },
    onDeleteClick: { action: 'deleteClicked' },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    username: 'Vlad',
    email: 'client5646@.gdf',
    src: ava,
  },
}
