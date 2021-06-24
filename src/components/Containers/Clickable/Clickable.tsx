import React from 'react'

import Box from '@material-ui/core/Box'

import { ClickableProps } from 'components/Containers/interfaces'

const Clickable: React.FunctionComponent<ClickableProps> = ({
  children,
  onClick
}) => {
  return (
    <Box
      onClick={onClick}
      style={{ cursor: 'pointer'}}
    >
      {children}
    </Box>
  )
}

export default Clickable
