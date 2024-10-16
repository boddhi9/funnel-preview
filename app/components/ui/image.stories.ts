import type { Meta, StoryObj } from '@storybook/react'
import ImageBlock from './image'

const meta = {
  title: 'ImageBlock',
  component: ImageBlock,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof ImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    id: 'primary',
    type: 'image',
    src: '/logo.png',
    alt: 'Logo',
  },
}
