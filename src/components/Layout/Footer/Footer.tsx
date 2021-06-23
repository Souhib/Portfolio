import React from 'react'

import { Box } from '@material-ui/core'

import github from 'assets/img/github.svg'
import linkedin from 'assets/img/linkedin.svg'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'

const Footer: React.FunctionComponent = () => {
  return (
    <Box mt='auto'>
      <Stack
        horizontalAlign='center'
        spacing={2}
      >
        <Stack
          isRow
          horizontalAlign='center'
        >
          <Avatar
            isBordered={true}
            variant='medium'
            source={github}
          />
          <Avatar
            isBordered={true}
            variant='medium'
            source={linkedin}
          />
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
