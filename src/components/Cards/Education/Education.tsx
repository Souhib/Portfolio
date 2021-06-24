import React from 'react'

import { Box } from '@material-ui/core'

import { EducationProps } from 'components/Cards/interfaces'
import Logo from 'components/Images/Logo/Logo'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Education: React.FunctionComponent<EducationProps> = ({ diplomaName, logo, bgColor }) => {
  const classes = useStyles()

  return (
    <Box
      bgcolor={bgColor}
      className={classes['education-card']}
    >
      <Title variant='big' >{diplomaName}</Title>
      <Box className={classes['logo-position']}>
        <Logo
          logo={logo}
          variant='big'
        />
      </Box>
    </Box>
  )
}

export default Education
