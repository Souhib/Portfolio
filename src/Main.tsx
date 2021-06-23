import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AhliaLogo from 'assets/img/ahlia.png'
import EnedisLogo from 'assets/img/enedis.png'
import EpitechLogo from 'assets/img/epitech.png'
import Education from 'components/Cards/Education/Education'
import Experience from 'components/Cards/Experience/Experience'
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
    <div className={classes.app}>
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Title variant='huge'>Title huge</Title>
        <Title variant='big'>Title big</Title>
        <Title variant='medium'>Title medium</Title>
        <Title variant='small'>Title small</Title>
        <Title variant='tiny'>Title tiny</Title>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Subtitle variant='big'>Subtitle big</Subtitle>
        <Subtitle variant='medium'>Subtitle medium</Subtitle>
        <Subtitle variant='small'>Subtitle small</Subtitle>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Body variant='big'>Body big</Body>
        <Body variant='medium'>Body medium</Body>
        <Body variant='small'>Body small</Body>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Experience
          company='Société générale'
          date='11/03/1995'
          job='Développeur front-end'
          logo={EnedisLogo}
        />
      </div> */}
      <div style={{marginTop: 20}}>
        <Header></Header>
      </div>
      <div style={{marginTop: 20}}>
        <Header></Header>
      </div>
      <div style={{marginTop: 20}}>
        <Footer></Footer>
      </div>
      <div style={{marginTop: 20}}>
        <Education diplomaName="Master’s degree in Computer Science" logo={EpitechLogo} bgColor="#122767"></Education>
      </div>
      <div style={{marginTop: 20}}>
        <Education diplomaName="Master of Science Degree in Engineering Management" logo={AhliaLogo} bgColor="#930B23"></Education>
      </div>
    </div>
  )
}

export default Main
