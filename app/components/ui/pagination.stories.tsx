import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/preview-api'
import Pagination from './pagination'

const meta = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: { type: 'number', min: 0 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPagination: Story = {
  args: {
    currentPage: 0,
    totalPages: 5,
    handleNext: () => action('next clicked'),
    handlePrev: () => action('prev clicked'),
  },
  render: (args) => {
    const [{ currentPage }, updateArgs] = useArgs()

    const handleNext = () => {
      const nextPage = currentPage + 1
      if (nextPage < args.totalPages) {
        updateArgs({ currentPage: nextPage })
        action('next clicked')(`Current Page: ${nextPage}`)
      }
    }

    const handlePrev = () => {
      const prevPage = currentPage - 1
      if (prevPage >= 0) {
        updateArgs({ currentPage: prevPage })
        action('prev clicked')(`Current Page: ${prevPage}`)
      }
    }

    return (
      <Pagination
        currentPage={currentPage}
        totalPages={args.totalPages}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    )
  },
}
