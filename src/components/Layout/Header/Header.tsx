import React from 'react'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { 
  ProfilePicture, 
  Linkedin, 
  Github,
  Contact
} from 'assets/img'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

const Header: React.FunctionComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const responsiveHorizontal = isMobile ? 'center' : 'left'
  return (
    <Stack
      isRow
      horizontalAlign='space-between'
    >
      <Stack
        isRow={!isMobile}
        verticalAlign='center'
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
      <Stack
        isRow
        verticalAlign='center'
        spacing={2}
      >
        <Avatar
          isBordered
          source={Linkedin}
          variant='medium'
        />
        <Avatar
          isBordered
          source={Contact}
          variant='medium'
        />
        <Avatar
          isBordered
          source={Github}
          variant='medium'
        />
      </Stack>
    </Stack>
  )
}

export default Header
