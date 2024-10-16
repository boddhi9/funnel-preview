import { Block, PropsWithOptionalChildren } from '@/app/lib/types'
import { cn } from '@/app/lib/utils'

const ButtonBlock = ({
  text,
  bgColor,
  color,
  className,
  children,
}: PropsWithOptionalChildren<Extract<Block, { type: 'button' }>>) => (
  <button
    style={{ backgroundColor: bgColor ?? '#007BFF', color: color ?? '#FFFFFF' }}
    className={cn(
      'px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md',
      'hover:shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      className
    )}
  >
    {text}
    {children && <div>{children}</div>}
  </button>
)

export default ButtonBlock
