import { Block } from '@/app/lib/types'

const TextBlock = ({ text, color, align }: Extract<Block, { type: 'text' }>) => (
  <p style={{ color, textAlign: align }} className="text-lg font-semibold text-gray-800 p-2">
    {text}
  </p>
)

export default TextBlock
