import React from 'react'

import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import {
  LinkedinLogo,
  GithubLogo,
  ContactLogo
} from 'assets/img/'
import Clickable from 'components/Containers/Clickable/Clickable'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
const data = {
  socials: {
    mail: 'mailto:souhib.trabelsi@epitech.eu',
    linkedin: 'https://www.linkedin.com/in/keddache/',
    github: 'https://github.com/Souhib'
  }
}

const Footer: React.FunctionComponent = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const mailTo = () => window.open(data.socials.mail, '_blank')
  const goToLinkedin = () => window.open(data.socials.linkedin, '_blank')
  const goToGithub = () => window.open(data.socials.github, '_blank')
  return (
    <Box mt='auto'>
      <Stack
        horizontalAlign='center'
        spacing={2}
      >
        <Stack
          isRow
          verticalAlign='center'
          horizontalAlign='center'
        >
          <Clickable onClick={goToLinkedin}>
            <Avatar
              isAnimated
              isBordered
              source={LinkedinLogo}
              variant='small'
            />
          </Clickable>
          {isMobile && (
            <Clickable onClick={mailTo}>
              <Avatar
                isBordered
                source={ContactLogo}
                variant='big'
              />
            </Clickable>
          )}
          <Clickable onClick={goToGithub}>
            <Avatar
              isAnimated
              isBordered
              source={GithubLogo}
              variant='small'
            />
          </Clickable>
        </Stack>
        <Subtitle
          textAlign='center'
          variant='small'
        >Made by Keddache Rayan</Subtitle>
        <Subtitle
          textAlign='center'
          variant='small'
        >Contact@KeddacheRayan.com</Subtitle>
      </Stack>
    </Box>
  )
}

export default Footer
