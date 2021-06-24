import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode
  horizontalAlign?: 'left' | 'center' | 'right' | 'space-between'
  isRow?: boolean
  spacing?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
}

export interface ClickableProps {
  children: ReactNode
  onClick(): void
}