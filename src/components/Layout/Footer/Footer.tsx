import React from 'react'

// import { Box } from '@material-ui/core'


import github from 'assets/img/github.svg'
import linkedin from 'assets/img/linkedin.svg'
import Inline from 'components/Containers/Inline/Inline'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'

import useStyles from './styles'

const Footer: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Stack spacing={2}>
      <Inline spacing={3}>
        <Avatar isBordered={true} variant="medium" source={github} />
        <Avatar isBordered={true} variant="medium" source={linkedin} />
      </Inline>
      <Subtitle variant="small">Made by Keddache Rayan</Subtitle>
      <Subtitle variant="small">Contact@KeddacheRayan.com</Subtitle>
    </Stack>
  )
}

export default Footer
