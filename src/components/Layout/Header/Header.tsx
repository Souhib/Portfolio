import React from 'react'

// import { Box } from '@material-ui/core'


import picture from 'assets/img/profile_picture.png'
import Inline from 'components/Containers/Inline/Inline'
import Stack from 'components/Containers/Stack/Stack'
import Avatar from 'components/Images/Avatar/Avatar'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Header: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Inline spacing={3} horizontalAlign="left">
      <Avatar isBordered={false} variant="big" source={picture} />
      <Stack horizontalAlign="left" verticalAlign="left" spacing={2}>
        <Title variant="big">Souhib Keddache</Title>
        <Subtitle variant="big">Front End Engineer @ Café</Subtitle>
        <Subtitle variant="big">#OpenToWork - End of studies internship</Subtitle>
      </Stack>
    </Inline>
    // <Box className={classes.imageContainer}>
    //   <img
    //     src={source}
    //     className={[
    //       classes[variant],
    //       isBordered && classes.bordered
    //     ].join(' ')}
    //   ></img>
    // </Box>
  )
}

export default Header
