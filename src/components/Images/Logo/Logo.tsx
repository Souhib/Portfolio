import React from 'react'

import { Box, Grid } from '@material-ui/core'

import { LogoProps } from './interfaces'
import useStyles from './styles'

const Logo: React.FunctionComponent<LogoProps> = ({ logo, variant }) => {
  const classes = useStyles()
  return (
    <Box className={classes.logo}>
      <img
        className={classes[variant]}
        src={`../../../assets/img/${logo}.png`}
      />
    </Box>
  )
}

export default Logo
