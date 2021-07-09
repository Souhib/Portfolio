import React, { forwardRef } from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import { EducationProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Education = forwardRef<HTMLDivElement, EducationProps>(({ diplomaName, logo, bgColor, location, date, onClick }, ref) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div
      ref={ref}
      className={classes['education-card']}
      onClick={onClick}
      style={{
        border: `2px solid ${bgColor}`,
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
        spacing={isMobile ? 1 : 2}
        style={{zIndex: isMobile ? 1 : -1}}
      >
        <Subtitle
          textAlign='left'
          variant={isMobile ? 'medium' : 'medium'}
        >{date}</Subtitle>
        <Subtitle
          textAlign='left'
          variant={isMobile ? 'medium' : 'medium'}
        >{location}</Subtitle>
      </Stack>
      <Box
        className={classes['logo-position']}
        style={{ zIndex: isMobile ? 1 : -1 }}
      >
        <Logo
          logo={logo}
          variant={isMobile ? 'small' : 'medium'}
        />
      </Box>
    </div>
  )
})

Education.displayName = 'Education'

export default Education
