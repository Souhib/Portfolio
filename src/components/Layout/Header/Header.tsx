import React from 'react'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { 
  ProfilePictureLogo, 
  LinkedinLogo, 
  GithubLogo,
  ContactLogo
} from 'assets/img'
import Clickable from 'components/Containers/Clickable/Clickable'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'
const data = {
  socials: {
    mail: 'mailto:souhib.trabelsi@epitech.eu',
    linkedin: 'https://www.linkedin.com/in/keddache/',
    github: 'https://github.com/Souhib'
  }
}

const Header: React.FunctionComponent = () => {
  const theme = useTheme();
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
          source={ProfilePictureLogo}
        />
        <Stack spacing={2}>
          <Title
            variant='big'
            textAlign={responsiveHorizontal}
          >Souhib Keddache</Title>
          <Subtitle
            variant='big'
            textAlign={responsiveHorizontal}
          >Front End Engineer @ Café</Subtitle>
          <Subtitle
            variant='big'
            textAlign={responsiveHorizontal}
          >
          #OpenToWork - End of studies internship
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
              source={LinkedinLogo}
              variant='small'
            />
          </Clickable>
          <Clickable onClick={mailTo}>
            <Avatar
              isBordered
              source={ContactLogo}
              variant='big'
            />
          </Clickable>
          <Clickable onClick={goToGithub}>
            <Avatar
              isAnimated
              isBordered
              source={GithubLogo}
              variant='small'
            />
          </Clickable>
        </Stack>
      )}
    </Stack>
  )
}

export default Header
