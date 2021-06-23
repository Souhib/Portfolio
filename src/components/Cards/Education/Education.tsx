import React from 'react'

import { Box, Grid } from '@material-ui/core'

import { EducationProps } from 'components/Cards/interfaces'
import Inline from 'components/Containers/Inline/Inline'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Education = ({
  diplomaName,
  logo,
  bgColor
}: EducationProps) => {
  const classes = useStyles()

  return (
    <Box bgcolor={bgColor} className={classes['education-card']}>
      <Title variant='big' >{diplomaName}</Title>
      <Box className={classes['logo-position']}>
        <Logo logo={logo} variant='big' />
      </Box>
    </Box>
  )
}

export default Education
