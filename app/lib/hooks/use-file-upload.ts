import { useReducer, useCallback } from 'react'
import { Funnel } from '../types'

type FileUploadState = {
  uploadedFileName: string | null
  fileData: Funnel | null
  isLoading: boolean
  isError: boolean | null
}

type FileUploadAction =
  | { type: 'UPLOAD_START' }
  | { type: 'UPLOAD_SUCCESS'; payload: { fileName: string; data: Funnel } }
  | { type: 'UPLOAD_ERROR'; payload: { isError: boolean } }

const initialState: FileUploadState = {
  uploadedFileName: null,
  fileData: null,
  isLoading: false,
  isError: null,
}

const fileUploadReducer = (state: FileUploadState, action: FileUploadAction): FileUploadState => {
  switch (action.type) {
    case 'UPLOAD_START':
      return {
        ...state,
        isLoading: true,
        isError: null,
      }
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        uploadedFileName: action.payload.fileName,
        fileData: action.payload.data,
        isError: null,
      }
    case 'UPLOAD_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: action.payload.isError,
      }
    default:
      return state
  }
}

type UseFileUploadReturn = {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetError: () => void
  uploadedFileName: string | null
  fileData: Funnel | null
  isLoading: boolean
  isError: boolean | null
}

export const useFileUpload = (): UseFileUploadReturn => {
  const [state, dispatch] = useReducer(fileUploadReducer, initialState)

  const resetError = useCallback(() => {
    dispatch({
      type: 'UPLOAD_ERROR',
      payload: { isError: false },
    })
  }, [])

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      dispatch({ type: 'UPLOAD_START' })

      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          dispatch({
            type: 'UPLOAD_SUCCESS',
            payload: { fileName: file.name, data },
          })
        } catch (error) {
          console.error('Invalid JSON file', error)
          dispatch({
            type: 'UPLOAD_ERROR',
            payload: { isError: true },
          })
        }
      }
      reader.readAsText(file)
    }
  }, [])

  return {
    handleFileUpload,
    resetError,
    uploadedFileName: state.uploadedFileName,
    fileData: state.fileData,
    isLoading: state.isLoading,
    isError: state.isError,
  }
}
