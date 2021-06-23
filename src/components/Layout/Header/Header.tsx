import React from 'react'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import picture from 'assets/img/profile_picture.png'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

const Header: React.FunctionComponent = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack isRow={!isMobile} spacing={2}>
      <Avatar isBordered={false} variant="big" source={picture} />
      <Stack spacing={2} horizontalAlign={isMobile ? 'center' : 'left'}>
        <Title variant="big" textAlign={isMobile ? 'center' : 'left'}>Souhib Keddache</Title>
        <Subtitle variant="big" textAlign={isMobile ? 'center' : 'left'}>Front End Engineer @ Café</Subtitle>
        <Subtitle variant="big" textAlign={isMobile ? 'center' : 'left'}>
          #OpenToWork - End of studies internship
        </Subtitle>
      </Stack>
    </Stack>
  )
}

export default Header
