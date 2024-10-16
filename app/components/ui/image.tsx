import Image from 'next/image'
import { Block } from '@/app/lib/types'

const ImageBlock = ({ src, alt }: Extract<Block, { type: 'image' }>) => (
  <Image
    src={src}
    alt={alt ?? ''}
    width={800}
    height={600}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="max-w-full md:max-w-[500px] rounded-md shadow-lg object-cover"
  />
)

export default ImageBlock
