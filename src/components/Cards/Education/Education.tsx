import React from 'react'

import { Box } from '@material-ui/core'

import { EducationProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Education: React.FunctionComponent<EducationProps> = ({ diplomaName, logo, bgColor, location, date }) => {
  const classes = useStyles()

  return (
    <Box
      className={classes['education-card']}
      style={{
        border: `2px solid ${bgColor}`
      }}
    >
      <Box
        className={classes.overlay}
        bgcolor={bgColor}
      />
      <Box
        mb={2}
        style={{zIndex: 0}}
      >
        <Title variant='big'>{diplomaName}</Title>
      </Box>
      <Stack
        spacing={2}
        style={{zIndex: -1}}
      >
        <Subtitle
          textAlign='left'
          variant='big'
        >{date}</Subtitle>
        <Subtitle
          textAlign='left'
          variant='big'
        >{location}</Subtitle>
      </Stack>
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
