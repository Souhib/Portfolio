import React from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import { EducationProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'
import theme from 'theme'

import useStyles from './styles'

const Education: React.FunctionComponent<EducationProps> = ({ diplomaName, logo, bgColor, location, date }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
        style={{zIndex: isMobile ? 1 : 0}}
      >
        <Title variant={isMobile ? 'medium' : 'big'}>{diplomaName}</Title>
      </Box>
      <Stack
        spacing={2}
        style={{zIndex: isMobile ? 1 : -1}}
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
      <Box
        className={classes['logo-position']}
        style={{ zIndex: isMobile ? 1 : -1 }}
      >
        <Logo
          logo={logo}
          variant={isMobile ? 'small' : 'big'}
        />
      </Box>
    </Box>
  )
}

export default Education
