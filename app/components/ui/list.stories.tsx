import type { Meta, StoryObj } from '@storybook/react'
import ListBlock from './list'

const meta = {
  title: 'ListBlock',
  component: ListBlock,
  tags: ['autodocs'],
  argTypes: {
    items: [],
  },
} satisfies Meta<typeof ListBlock>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    id: 'list1',
    title: 'List 1',
    desciptions: 'List 1 description',
    src: undefined,
  },
  {
    id: 'list2',
    title: 'List 2',
    desciptions: 'List 2 description',
    src: undefined,
  },
  {
    id: 'list3',
    title: 'List 3',
    desciptions: 'List 3 description',
    src: undefined,
  },
]

const itemsWithImages = items.map((item) => ({
  ...item,
  src: `https://someimageprovider.com/images/${item.id}.png`,
}))

export const DefaultList: Story = {
  args: {
    id: 'default-list',
    type: 'list',
    items,
  },
}

export const ListWithImages: Story = {
  args: {
    id: 'list-with-images',
    type: 'list',
    items: itemsWithImages,
  },
}
