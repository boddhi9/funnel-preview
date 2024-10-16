import { ReactNode } from 'react'

export type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>

export type PropsWithOptionalChildren<P = unknown> = P & { children?: ReactNode }

export type ChildrenWithoutProps = {
  children: ReactNode
}

export type NullableValues<T> = {
  [P in keyof T]: T[P] | null | undefined
}

export type Funnel = {
  name: string
  bgColor: string
  pages?: Array<Page>
}

export type Page = {
  id: string
  blocks: Array<Block>
}

type BaseBlock = {
  id: string
  text?: string
  color?: string
  bgColor?: string
}

export type Block =
  | (BaseBlock & {
      type: 'text'
      align?: 'left' | 'right' | 'center' | 'justify'
    })
  | (BaseBlock & {
      type: 'button'
      className?: string
    })
  | {
      id: string
      type: 'image'
      src: string
      alt?: string
    }
  | {
      id: string
      type: 'list'
      items: Array<BlockItem>
    }

export type BlockItem = {
  id: string
  title: string
  description?: string
  src?: string
}
