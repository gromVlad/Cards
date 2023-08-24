import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { TabSwitcher } from '.'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta

const tabs = ['One', 'Two', 'Three']

export const Default = () => <TabSwitcher options={tabs} value="One" onChange={() => 'hello'} />

export const WithActiveTab = () => (
  <TabSwitcher options={tabs} value="Two" onChange={() => 'hello'} />
)

export const Controlled = () => {
  const [activeTab, setActiveTab] = useState('One')

  return <TabSwitcher options={tabs} value={activeTab} onChange={setActiveTab} />
}

export const Disable = () => {
  const [activeTab, setActiveTab] = useState('One')

  return <TabSwitcher options={tabs} isDisable={true} value={activeTab} onChange={setActiveTab} />
}
