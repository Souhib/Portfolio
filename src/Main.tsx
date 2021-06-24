import React from 'react'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'

const useStyles = makeStyles({
  app: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px',
  },
})

const Main: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Box className={classes.app}>
      <Header />
      <Footer />
    </Box>
  )
}

export default Main
