import type { Meta, StoryObj } from '@storybook/react'
import ButtonBlock from './button'

const meta = {
  title: 'ButtonBlock',
  component: ButtonBlock,
  tags: ['autodocs'],
  argTypes: {
    bgColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 'primary',
    type: 'button',
    color: '#ffffff',
    bgColor: '#3B71CA',
    text: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    id: 'secondary',
    type: 'button',
    bgColor: '#9FA6B2',
    text: 'Button',
  },
}

export const Success: Story = {
  args: {
    id: 'success',
    type: 'button',
    bgColor: '#14A44D',
    text: 'Button',
  },
}
