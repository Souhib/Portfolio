import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { 
  KookaiLogo, 
  CloudeasierLogo, 
  AirFranceLogo, 
  EnedisLogo, 
} from 'assets/img'
import Experience from 'components/Cards/Experience/Experience'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import { useWindowSize } from 'functions/useWindowSize'

const useStyles = makeStyles({
  app: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px',
  },
})

const experiences = [
  {
    job: 'Frontend Engineer',
    bgColor: '#003371',
    company: 'Enedis',
    date: 'May - Jun 20',
    stack: 'CSS | JS | C++',
    source: EnedisLogo,
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#092D32',
    company: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: KookaiLogo,
  },
  {
    job: 'Lead tech integration',
    bgColor: '#000E23',
    stack: 'CSS | JS | C++',
    company: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFranceLogo
  },
  {
    job: 'Backend Engineer',
    bgColor: '#42004A',
    stack: 'CSS | JS | C++',
    date: 'Feb 20 - May 21',
    company: 'Cloudeasieer',
    source: CloudeasierLogo
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#003371',
    stack: 'CSS | JS | C++',
    company: 'Enedis',
    date: 'May - Jun 20',
    source: EnedisLogo,
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#092D32',
    company: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: KookaiLogo,
  },
  {
    job: 'Lead tech integration',
    stack: 'CSS | JS | C++',
    bgColor: '#000E23',
    company: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFranceLogo
  },
  {
    job: 'Backend Engineer',
    stack: 'CSS | JS | C++',
    bgColor: '#42004A',
    date: 'Feb 20 - May 21',
    company: 'Cloudeasieer',
    source: CloudeasierLogo
  },
]

const Main: React.FunctionComponent = () => {
  const classes = useStyles()
  const sliderProps = {
    dots: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    swipe: true,
    lazyload: true,
    speed: 300,
  }
  return (
    <Box className={classes.app}>
      <Header />
      <Box mt={10}>
        <Slider
          {...sliderProps}
        >
          {experiences.map((experience, index) => {
            return (
              <Experience
                key={index}
                bgColor={experience.bgColor}
                date={experience.date}
                company={experience.company}
                logo={experience.source}
                job={experience.job}
                stack={experience.stack}
              />
            )
          })}
        </Slider>
      </Box>
      <Footer />
    </Box>
  )
}

export default Main
