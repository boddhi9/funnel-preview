'use client'

import React from 'react'
import FunnelPreview from './funnel-preview'
import { useFileDataProvider } from '@/app/lib/providers/useFileDataProvider'

const Funnel = () => {
  const { fileData, isLoading } = useFileDataProvider()
  const { name, bgColor } = fileData || {}
  const canShowFunnelPreview = !isLoading && fileData

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full size-16 border-t-4 border-blue-500 border-opacity/75"></div>
        </div>
      )}

      {canShowFunnelPreview && (
        <div
          className="flex flex-col items-center justify-center p-8 mb-6 rounded-lg shadow-lg"
          style={{ backgroundColor: bgColor || '#0076FF' }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold relative text-center">
            {name}
            <div className="relative mt-4 flex justify-center">
              <span className="block w-3/4 h-1 rounded-full bg-gray-500"></span>
            </div>
          </h1>

          <FunnelPreview data={fileData} />
        </div>
      )}
    </>
  )
}

export default Funnel
