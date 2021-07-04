import React, { ReactNode } from 'react'

export interface ContainerProps {
  bgColor?: string | undefined
  children: ReactNode
  className?: string | undefined
  horizontalAlign?: 'left' | 'center' | 'right' | 'space-between'
  isRow?: boolean
  spacing?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
  style?: React.CSSProperties
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
  animation?: string
  title?: string
  open?: boolean
  subtitle?: string
  onClose(): void
  location?: string
  date?: string
  color?: string
  image?: string
  text?: string
}