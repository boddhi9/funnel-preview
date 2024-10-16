'use client'

import React from 'react'
import { IconDownload } from './ui/icons'
import { useFileDataProvider } from '@/app/lib/providers/useFileDataProvider'

const JsonUpload = () => {
  const { handleFileUpload, resetError, uploadedFileName, fileData, isError } = useFileDataProvider()

  return (
    <>
      {!fileData && (
        <>
          <h1
            className="
            text-3xl sm:text-4xl font-semibold mb-6 tracking-wide uppercase 
            text-gray-800 dark:text-gray-200 relative
          "
          >
            <span
              className="
              relative text-transparent bg-clip-text bg-gradient-to-r 
              from-gray-700 via-gray-900 to-black
            "
            >
              Funnel Preview
            </span>
          </h1>

          <p
            className="
              max-w-2xl text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 
              hover:opacity-90 transition-opacity duration-300 ease-in-out
            "
          >
            Easily preview your funnel JSON data in an intuitive, responsive layout. Upload your JSON file and navigate
            through the generated funnel.
          </p>
        </>
      )}

      {uploadedFileName && <span className="text-sm text-gray-600">{`${uploadedFileName} uploaded`}</span>}

      {isError ? (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center shadow-md">
          <p className="text-md font-semibold mb-2">Oops! Something went wrong.</p>
          <p className="text-sm mb-4">
            There was an error uploading the file. Please check the file format and try again.
          </p>
          <button
            className="
              px-4 py-2 bg-red-500 text-white rounded-md shadow-lg 
              hover:bg-red-600 transition-colors duration-300 ease-in-out
            "
            onClick={resetError}
          >
            Try Again
          </button>
        </div>
      ) : (
        <label
          className="
            relative flex items-center space-x-2 px-4 py-2 bg-gray-200 
            text-gray-700 rounded-md shadow-md hover:bg-gray-300 
            transition-colors duration-200
          "
        >
          <input type="file" className="absolute inset-0 opacity-0" onChange={handleFileUpload} />
          <IconDownload />
          <span className="text-sm text-grey-600 font-semibold py-1">
            {uploadedFileName ? 'Upload another file' : 'Choose a file'}
          </span>
        </label>
      )}
    </>
  )
}

export default JsonUpload
