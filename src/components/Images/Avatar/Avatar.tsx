import React from 'react'

import { Box } from '@material-ui/core'

import { AvatarProps } from './interface'
import useStyles from './styles'


const Avatar: React.FunctionComponent<AvatarProps> = ({ isBordered, source, variant }) => {
  const classes = useStyles()

  return (
    <Box className={classes.imageContainer}>
      <img
        src={source}
        className={[
          classes[variant], classes.radius,
          isBordered && classes.bordered
        ].join(' ')}
      ></img>
    </Box>
  )
}

export default Avatar
