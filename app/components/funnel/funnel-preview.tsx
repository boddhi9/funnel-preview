import React, { useState } from 'react'
import { Funnel, Block } from '@/app/lib/types'
import TextBlock from '@/app/components/ui/text'
import ImageBlock from '@/app/components/ui/image'
import ButtonBlock from '@/app/components/ui/button'
import ListBlock from '@/app/components/ui/list'
import Pagination from '@/app/components/ui/pagination'
import { IconLink } from '@/app/components/ui/icons'

type FunnelProps = {
  data: Funnel
}

const isTextBlock = (block: Block): block is Extract<Block, { type: 'text' }> => block.type === 'text'
const isImageBlock = (block: Block): block is Extract<Block, { type: 'image' }> => block.type === 'image'
const isListBlock = (block: Block): block is Extract<Block, { type: 'list' }> => block.type === 'list'
const isButtonBlock = (block: Block): block is Extract<Block, { type: 'button' }> => block.type === 'button'

const FunnelPreview = ({ data: { pages = [] } }: FunnelProps) => {
  const [currentPage, setCurrentPage] = useState(0)

  const setPage = (nextPage: number) => {
    setCurrentPage(nextPage)
  }

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1)
    }
  }

  const allBlocksForCurrentPage = pages[currentPage]?.blocks ?? []

  return (
    <div className="w-full rounded-lg min-w-[300px] sm:min-w-[375px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px]">
      {allBlocksForCurrentPage.map((block) => {
        const { id } = block

        if (isTextBlock(block)) {
          return <TextBlock key={id} {...block} text={block.text ?? ''} align={block.align ?? 'left'} />
        }

        if (isImageBlock(block)) {
          return (
            <div key={id} className="relative flex justify-center my-6 min-h-[20vh]">
              <ImageBlock {...block} src={block.src} alt={block.alt ?? ''} />
            </div>
          )
        }

        if (isListBlock(block)) {
          return <ListBlock key={id} {...block} />
        }

        if (isButtonBlock(block)) {
          return (
            <div key={id} className="flex flex-col items-center justify-center space-y-4 my-6 w-full">
              <ButtonBlock
                {...block}
                text={block.text ?? 'Click'}
                color={block.color ?? '#FFF'}
                bgColor={block.bgColor ?? '#0076FF'}
                className="
                    flex items-center justify-center p-3 space-x-3 rounded-lg text-md font-medium 
                    hover:shadow-lg duration-300 ease-in-out bg-blue-500 text-white
                  "
              >
                <IconLink className="size-4 ml-2" />
              </ButtonBlock>
            </div>
          )
        }

        return null
      })}

      <Pagination currentPage={currentPage} totalPages={pages.length} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default FunnelPreview
