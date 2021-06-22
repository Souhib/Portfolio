import { ReactNode } from 'react';

 type ContainerProps = {
  children: ReactNode
  horizontalAlign?: 'left' | 'center' | 'right'
  spacing?: number
  verticalAlign?: 'left' | 'center' | 'right'
}

export default ContainerProps