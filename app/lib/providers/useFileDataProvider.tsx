'use client'

import React, { useContext } from 'react'

import { ChildrenWithoutProps, Funnel } from '@/app/lib/types'
import { useFileUpload } from '@/app/lib/hooks/use-file-upload'

type FileDataProps = {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetError: () => void
  uploadedFileName: string | null
  fileData: Funnel | null
  isLoading: boolean
  isError: boolean | null
}

export const Context = React.createContext<FileDataProps | undefined>(undefined)

const FileDataProvider = ({ children }: ChildrenWithoutProps) => {
  const { handleFileUpload, resetError, uploadedFileName, fileData, isLoading, isError } = useFileUpload()

  const value = {
    handleFileUpload,
    resetError,
    uploadedFileName,
    fileData,
    isLoading,
    isError,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useFileDataProvider = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useFileDataProvider must be used within a FileDataProvider')
  }

  return context
}

export default FileDataProvider
