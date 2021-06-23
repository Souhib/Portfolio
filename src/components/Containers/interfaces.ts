import { ReactNode } from 'react';

 type ContainerProps = {
  children: ReactNode
  horizontalAlign?: 'left' | 'center' | 'right' | 'space-between'
  isRow?: boolean
  spacing?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
}

export default ContainerProps