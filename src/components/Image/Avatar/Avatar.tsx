import React from 'react'
import useStyles from './styles'
import { AvatarProps } from '../interface'
import { Box } from '@material-ui/core'

const Avatar: React.FunctionComponent<AvatarProps> = ({ isBordered, source, variant }) => {
  const classes = useStyles()

  return (
    <Box className={classes.imageContainer}>
      <img
        src={source}
        className={[
          classes[variant],
          isBordered && classes.bordered
          ].join(' ')}
      ></img>
    </Box>
  )
}

export default Avatar
