import { ReactNode } from 'react';

export interface ContainerProps {
  bgColor?: string | undefined
  children: ReactNode
  className?: string | undefined
  horizontalAlign?: 'left' | 'center' | 'right' | 'space-between'
  isRow?: boolean
  spacing?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
}

export interface ClickableProps {
  children: ReactNode
  onClick(): void
}

// export interface ModalProps {
//   children: ReactNode
//   onClick(): void
// }

export interface ModalProps {
  title: string
  subtitle: string
  location: string
  date: string
  image: string
  text: string
}