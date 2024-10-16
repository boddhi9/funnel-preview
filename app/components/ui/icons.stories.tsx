import type { Meta, StoryObj } from '@storybook/react'
import { IconDownload, IconLink } from './icons'

const meta = {
  title: 'Icons',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Download: Story = {
  render: () => <IconDownload />,
}

export const Link: Story = {
  render: () => <IconLink />,
}
