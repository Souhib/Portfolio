import React, { Children } from 'react'

import Box from '@material-ui/core/Box'

import type ContainerProps from 'components/Containers/interfaces'

const Stack: React.FunctionComponent<ContainerProps> = ({
  children,
  horizontalAlign = 'center',
  isRow,
  spacing = 1,
  verticalAlign = 'center',
}) => {
  const horizontal =
    horizontalAlign === 'center'
      ? 'center'
      : horizontalAlign === 'left'
        ? 'flex-start'
        : 'flex-end'
  const vertical =
    verticalAlign === 'center'
      ? 'center'
      : verticalAlign === 'left'
        ? 'flex-start'
        : 'flex-end'

  const childrenMap = Children.map(children as React.ReactElement[], 
    (child, index) => {
      if (!child) {
        return null
      }
      const isLastItem = (children as React.ReactElement[]).length - 1 === index

      return isRow ? 
        <Box mr={isLastItem ? undefined : spacing}>{child}</Box> 
        : <Box mb={isLastItem ? undefined : spacing}>{child}</Box>
    })

  return (
    <Box
      display="flex"
      flexDirection={isRow ? 'row' : 'column'}
      justifyContent={vertical}
      alignItems={horizontal}
    >
      {childrenMap}
    </Box>
  )
}
export default Stack
