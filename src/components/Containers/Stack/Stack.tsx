import React, { Children } from 'react'

import Box from '@material-ui/core/Box'

import type ContainerProps from 'components/Containers/interfaces'

const Stack: React.FunctionComponent<ContainerProps> = ({
  children,
  horizontalAlign,
  isRow,
  spacing = 1,
  verticalAlign,
}) => {
  const horizontal = horizontalAlign === 'left'
    ? 'flex-start'
    : horizontalAlign === 'right' 
      ? 'flex-end' 
      : horizontalAlign
  const vertical =
    verticalAlign === 'center'
      ? 'center'
      : verticalAlign === 'top'
        ? 'flex-start'
        : 'flex-end'

  const childrenMap = Children.map(children as React.ReactElement[], 
    (child, index) => {
      if (!child) {
        return null
      }
      const isLastItem = (children as React.ReactElement[]).length - 1 === index

      return isRow ? 
        <Box 
          mr={isLastItem ? undefined : spacing}
        >{child}</Box> 
        : <Box mb={isLastItem ? undefined : spacing}>{child}</Box>
    })

  return (
    <Box
      display='flex'
      flexDirection={isRow ? 'row' : 'column'}
      justifyContent={horizontalAlign ? horizontal : undefined}
      alignItems={verticalAlign ? vertical : undefined}
    >
      {childrenMap}
    </Box>
  )
}
export default Stack
