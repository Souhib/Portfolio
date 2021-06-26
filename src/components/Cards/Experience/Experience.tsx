import React, { useRef, useState } from 'react'

import { Box } from '@material-ui/core'

import { ExperienceProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Experience = ({
  company,
  date,
  bgColor,
  stack,
  job,
  logo,
}: ExperienceProps) => {
  const classes = useStyles()
  const [isHovered, setIsHovered] = useState(false)
  const containerStyle = {
    borderRadius: 8,
    border: `2px solid ${isHovered ? '#FFFFFF' : bgColor}`,
    transition: '.5s',
  }

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bgcolor={bgColor}
      style={containerStyle}
    >
      <Stack
        spacing={2}
        className={classes.experienceCard}
        verticalAlign='center'
      >
        <Logo
          logo={logo}
          horizontalAlign='left'
          variant='tiny'
        />
        <Stack
          horizontalAlign='left'
          verticalAlign='center'
          spacing={1}
        >
          <Title variant='tiny'>{job}</Title>
          <Title
            color='#C0C0C0'
            variant='tiny'
          >{company}</Title>
        </Stack>
        {isHovered && (
          <>
            <Subtitle
              animation='slideIn'
              variant='tiny'
            >{date}</Subtitle>
            <Subtitle
              animation='slideIn'
              animationDelay='0.3s'
              variant='tiny'
            >{stack}</Subtitle>
          </>
        )}          
      </Stack>
    </Box>
  )
}

export default Experience
