import type { Meta, StoryObj } from '@storybook/react'
import TextBlock from './text'

const meta = {
  title: 'TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof TextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const AlignRight: Story = {
  args: {
    id: 'align-right',
    type: 'text',
    align: 'right',
    color: '#333333',
    text: 'Align right text',
  },
}

export const AlignLeft: Story = {
  args: {
    id: 'align-left',
    type: 'text',
    align: 'left',
    color: '#22b332',
    text: 'Align left text',
  },
}
