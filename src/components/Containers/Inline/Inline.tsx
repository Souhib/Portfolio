import React, { Children } from 'react'
import Carousel from 'react-material-ui-carousel'

import Box from '@material-ui/core/Box'

import enedisLogo from 'assets/img/enedis.png'
import Experience from 'components/Cards/Experience/Experience'
import type ContainerProps from 'components/Containers/interfaces'

const Inline: React.FunctionComponent<ContainerProps> = ({
  children,
  horizontalAlign = 'center',
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

  const childrenMap = Children.map(children as React.ReactElement[], child => {
    if (!child) {
      return null
    }
    return <Box mr={spacing}>{child}</Box>
  })

  return (
    <Box display="flex" justifyContent={horizontal} alignItems={vertical}>
      {childrenMap}
    </Box>
  )
}
export default Inline
