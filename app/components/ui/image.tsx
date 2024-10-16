import Image from 'next/image'
import { Block } from '@/app/lib/types'

const ImageBlock = ({ src, alt }: Extract<Block, { type: 'image' }>) => {
  // TODO: static base64 placeholder, should be dynamic based on src
  const base64Placeholder =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVR42mP8z/CfARgYBkBiJAXkZGRk+M8fUgjwgIDGAcwKTIkEpZmQ0gVgpEsBIMhJhBNjNUBQiAKiqlGFUBICMYu9kOUMK8EoQeAHkRKcAKBkHGACAWIYFKrn8rkAAAAAElFTkSuQmCC'

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL={base64Placeholder}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="max-w-full md:max-w-[500px] rounded-md shadow-lg object-cover"
    />
  )
}

export default ImageBlock
