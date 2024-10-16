import { renderHook, act } from '@testing-library/react'
import { useFileUpload } from './use-file-upload'
import { mockFileReader } from '@/app/lib/utils'

beforeEach(() => {
  mockFileReader(JSON.stringify({ name: 'Test Funnel', bgColor: '#FFF', pages: [] }))
})

describe('useFileUpload', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useFileUpload())

    expect(result.current.uploadedFileName).toBeNull()
    expect(result.current.fileData).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeNull()
  })

  it('should handle successful file upload', async () => {
    const { result } = renderHook(() => useFileUpload())

    const file = new File([JSON.stringify({ name: 'Test Funnel' })], 'test.json', {
      type: 'application/json',
    })

    const event = {
      target: {
        files: [file],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>

    await act(async () => {
      result.current.handleFileUpload(event)
    })

    expect(result.current.uploadedFileName).toBe('test.json')
    expect(result.current.fileData).toEqual({ name: 'Test Funnel', bgColor: '#FFF', pages: [] })
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeNull()
  })

  it('should handle invalid JSON file and set an error', async () => {
    mockFileReader('Invalid JSON')

    const { result } = renderHook(() => useFileUpload())

    const file = new File(['Invalid JSON'], 'invalid.json', { type: 'application/json' })

    const event = {
      target: {
        files: [file],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>

    await act(async () => {
      result.current.handleFileUpload(event)
    })

    expect(result.current.fileData).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(true)
  })

  it('should handle no file selected', async () => {
    const { result } = renderHook(() => useFileUpload())

    const event = {
      target: {
        files: [],
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>

    await act(async () => {
      result.current.handleFileUpload(event)
    })

    expect(result.current.uploadedFileName).toBeNull()
    expect(result.current.fileData).toBeNull()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeNull()
  })
})
