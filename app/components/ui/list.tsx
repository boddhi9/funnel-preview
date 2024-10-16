import Image from 'next/image'
import { Block } from '@/app/lib/types'

const ListBlock = ({ items }: Extract<Block, { type: 'list' }>) => (
  <ul className={`grid gap-4 ${items?.length >= 6 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
    {items?.map(({ id, title, description, src }) => (
      <li
        key={id}
        className="
          flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md 
          hover:shadow-lg transition-shadow duration-300
        "
      >
        <div className="shrink-0 size-20 md:size-[80px] rounded-lg overflow-hidden">
          <Image src={src ?? ''} alt="" width={80} height={80} className="size-full object-cover rounded-lg" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 text-left">{title}</h3>
          <p className="text-gray-600 text-left">{description}</p>
        </div>
      </li>
    ))}
  </ul>
)

export default ListBlock
