import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockFileReader = (result: string | null) => {
  const mockFileReader: Partial<FileReader> = {
    onload: null,
    readAsText: jest.fn(function (this: FileReader) {
      if (this.onload) {
        this.onload({
          target: {
            result,
          },
        } as ProgressEvent<FileReader>)
      }
    }),
  }

  global.FileReader = jest.fn(() => mockFileReader as FileReader) as unknown as {
    new (): FileReader
    readonly prototype: FileReader
    readonly EMPTY: 0
    readonly LOADING: 1
    readonly DONE: 2
  }
}
