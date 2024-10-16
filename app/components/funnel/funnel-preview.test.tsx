import { fireEvent, render, screen } from '@testing-library/react'
import FunnelPreview from './funnel-preview'
import { Funnel } from '@/app/lib/types'

interface PaginationProps {
  currentPage: number
  handleNext: () => void
  handlePrev: () => void
}

jest.mock('@/app/components/ui/text', () => {
  const TextBlock = () => <div>TextBlock</div>
  TextBlock.displayName = 'TextBlock'
  return TextBlock
})

jest.mock('@/app/components/ui/image', () => {
  const ImageBlock = () => <div>ImageBlock</div>
  ImageBlock.displayName = 'ImageBlock'
  return ImageBlock
})

jest.mock('@/app/components/ui/button', () => {
  const ButtonBlock = () => <div>ButtonBlock</div>
  ButtonBlock.displayName = 'ButtonBlock'
  return ButtonBlock
})

jest.mock('@/app/components/ui/list', () => {
  const ListBlock = () => <div>ListBlock</div>
  ListBlock.displayName = 'ListBlock'
  return ListBlock
})

jest.mock('@/app/components/ui/pagination', () => ({
  __esModule: true,
  default: ({ currentPage, handleNext, handlePrev }: PaginationProps) => (
    <div>
      <button onClick={handlePrev} data-testid="prev-btn">
        Previous
      </button>
      <span data-testid="current-page">{currentPage}</span>
      <button onClick={handleNext} data-testid="next-btn">
        Next
      </button>
    </div>
  ),
}))

const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: jest.fn(),
}))

describe('FunnelPreview', () => {
  const mockFunnel: Funnel = {
    name: 'My awesome funnel',
    bgColor: '#FFF',
    pages: [
      {
        id: 'page1',
        blocks: [
          {
            id: 'block1',
            type: 'text',
            text: 'Welcome',
            align: 'center',
          },
          {
            id: 'block2',
            type: 'image',
            src: 'image1.jpg',
            alt: 'image1',
          },
        ],
      },
      {
        id: 'page2',
        blocks: [
          {
            id: 'block3',
            type: 'list',
            items: [
              {
                id: 'item1',
                title: 'Item 1',
              },
            ],
          },
          {
            id: 'block4',
            type: 'button',
            text: 'Click Me',
          },
        ],
      },
    ],
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing and displays initial content', () => {
    render(<FunnelPreview data={mockFunnel} />)

    expect(screen.getByText('TextBlock')).toBeInTheDocument()
    expect(screen.getByText('ImageBlock')).toBeInTheDocument()
    expect(screen.queryByText('ListBlock')).not.toBeInTheDocument()
    expect(screen.queryByText('ButtonBlock')).not.toBeInTheDocument()
  })

  it('navigates to the next page', () => {
    render(<FunnelPreview data={mockFunnel} />)

    fireEvent.click(screen.getByTestId('next-btn'))

    expect(screen.getByText('ListBlock')).toBeInTheDocument()
    expect(screen.getByText('ButtonBlock')).toBeInTheDocument()

    expect(screen.queryByText('TextBlock')).not.toBeInTheDocument()
    expect(screen.queryByText('ImageBlock')).not.toBeInTheDocument()
  })

  it('navigates to the previous page', () => {
    render(<FunnelPreview data={mockFunnel} />)

    fireEvent.click(screen.getByTestId('next-btn'))
    fireEvent.click(screen.getByTestId('prev-btn'))

    expect(screen.getByText('TextBlock')).toBeInTheDocument()
    expect(screen.getByText('ImageBlock')).toBeInTheDocument()

    expect(screen.queryByText('ListBlock')).not.toBeInTheDocument()
    expect(screen.queryByText('ButtonBlock')).not.toBeInTheDocument()
  })
})
