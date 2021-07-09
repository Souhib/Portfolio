import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { 
  ProfilePicture, 
  Linkedin, 
  Github,
  Contact
} from 'assets/img'
import Clickable from 'components/Containers/Clickable/Clickable'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'
const data = {
  socials: {
    mail: 'mailto:souhib.trabelsi@epitech.eu',
    linkedin: 'https://www.linkedin.com/in/souhib-trabelsi/',
    github: 'https://github.com/Souhib'
  }
}

const Header: React.FunctionComponent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const responsiveHorizontal = isMobile ? 'center' : 'left'
  const goToLinkedin = () => window.open(data.socials.linkedin, '_blank')
  const goToGithub = () => window.open(data.socials.github, '_blank')
  const mailTo = () => window.open(data.socials.mail, '_blank')

  return (
    <Stack
      isRow
      verticalAlign='center'
      horizontalAlign={isMobile ? 'center' : 'space-between'}
    >
      <Stack
        isRow={!isMobile}
        verticalAlign='center'
        horizontalAlign='center'
        spacing={2}
      >
        <Avatar
          isBordered={false}
          variant='huge'
          source={ProfilePicture}
        />
        <Stack spacing={2}>
          <Title
            variant='big'
            textAlign={responsiveHorizontal}
          >Souhib Trabelsi</Title>
          <Subtitle
            variant='big'
            textAlign={responsiveHorizontal}
          >Software Developer</Subtitle>
          <Subtitle
            variant='big'
            textAlign={responsiveHorizontal}
          >
          Looking for a 6 months end of study internship
          </Subtitle>
        </Stack>
      </Stack>
      { !isMobile && (
        <Stack
          isRow
          verticalAlign='center'
          spacing={2}
        >
          <Clickable onClick={goToLinkedin}>
            <Avatar
              isAnimated
              isBordered
              source={Linkedin}
              variant='small'
            />
          </Clickable>
          <Clickable onClick={mailTo}>
            <Avatar
              isBordered
              source={Contact}
              variant='big'
            />
          </Clickable>
          <Clickable onClick={goToGithub}>
            <Avatar
              isAnimated
              isBordered
              source={Github}
              variant='small'
            />
          </Clickable>
        </Stack>
      )}
    </Stack>
  )
}

export default Header
