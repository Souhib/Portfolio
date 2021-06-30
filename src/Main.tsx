import React, { useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box } from '@material-ui/core'
import { createStyles, Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

import { 
  KookaiLogo, 
  CloudeasierLogo,
  ChevronLeft,
  ChevronRight,
  AirFranceLogo, 
  EnedisLogo,
} from 'assets/img'
import Experience from 'components/Cards/Experience/Experience'
import Clickable from 'components/Containers/Clickable/Clickable'
import Modal from 'components/Containers/Modal/Modal'
import Stack from 'components/Containers/Stack/Stack'
import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'

const useStyles = makeStyles((theme: Theme) => createStyles({
  app: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px',
    },
  },
  slick: {
    '&:hover .slick-prev, &:hover .slick-next': {
      display: 'block !important',
      [theme.breakpoints.down('sm')]: {
        display: 'none !important'
      },
    },
    '& .slick-prev': {
      width: 48,
      display: 'none !important',
      height: '100%',
      left: 0,
      zIndex: 10,
      transition: '0.8s',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      '&:hover': {
        '&::before': {
          width: 36,
          height: 36
        },
        background: '#00000073',
        transition: '0.8s'
      },
      '&::before': {
        content: '\' \' !important',
        backgroundSize: 'cover',
        width: '32px',
        margin: 'auto',
        display: 'block',
        backgroundImage: `url(${ChevronLeft})`,
        height: '32px',
        position: 'absolute',
        left: 0,
        transition: '0.8s',
        bottom: 0,
        top: 0
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '& .slick-next': {
      width: 48,
      display: 'none !important',
      height: '100%',
      zIndex: 10,
      transition: '0.8s',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      right: 0,
      '&:hover': {
        '&::before': {
          width: 36,
          height: 36
        },
        background: '#00000073',
        transition: '0.8s'
      },
      '&::before': {
        content: '\' \' !important',
        backgroundSize: 'cover',
        width: '32px',
        margin: 'auto',
        display: 'block',
        backgroundImage: `url(${ChevronRight})`,
        height: '32px',
        transition: '0.8s',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
      },
    },
  }
}))

const experiences = [
  {
    job: 'Frontend Engineer',
    bgColor: '#003371',
    company: 'Enedis',
    date: 'May - Jun 20',
    stack: 'CSS | JS | C++',
    source: EnedisLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.
    
    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#092D32',
    company: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: KookaiLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Lead tech integration',
    bgColor: '#000E23',
    stack: 'CSS | JS | C++',
    company: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFranceLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Backend Engineer',
    bgColor: '#42004A',
    stack: 'CSS | JS | C++',
    date: 'Feb 20 - May 21',
    company: 'Cloudeasieer',
    source: CloudeasierLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#003371',
    stack: 'CSS | JS | C++',
    company: 'Enedis',
    date: 'May - Jun 20',
    source: EnedisLogo,
    location: 'Paris - France',
    text: ` ⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Frontend Engineer',
    bgColor: '#092D32',
    company: 'Kookaï',
    stack: 'CSS | JS | C++',
    date: 'Jul - Sep 20',
    source: KookaiLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Lead tech integration',
    stack: 'CSS | JS | C++',
    bgColor: '#000E23',
    company: 'Air France',
    date: 'Oct 20 - Jan 21',
    source: AirFranceLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
  {
    job: 'Backend Engineer',
    stack: 'CSS | JS | C++',
    bgColor: '#42004A',
    date: 'Feb 20 - May 21',
    company: 'Cloudeasieer',
    source: CloudeasierLogo,
    location: 'Paris - France',
    text: `⇨ 𝑴𝑨 𝑴𝑰𝑺𝑺𝑰𝑶𝑵 : Modifier et ajouter des données sur un outil de monitoring constitué d'une carte et de plusieurs graphiques répertoriant toutes les données liées aux coupures électriques en France.

    𝐃𝐨𝐦𝐚𝐢𝐧𝐞 𝐝'𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐭𝐢𝐨𝐧 :
    ➤ Modification des labels constituants les graphiques (React, Chart JS).
    ➤ Récupération des données nécessaires en base de données (Django, PGSQL).
    ➤ Modification des graphiques afin d'avoir un rendu plus adapté aux besoins d'Enedis. (Chart JS).
    ➤ Mise en place de tests unitaires Back-End (Pytest).
    ➤ Mise en place de l'automatisation des tests Back-End (Jenkins).

    𝐅𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 : HTML, CSS, Javascript (React)
    𝐁𝐚𝐜𝐤-𝐄𝐧𝐝 : Python, Django
    𝐁𝐚𝐬𝐞 𝐝𝐞 𝐝𝐨𝐧𝐧𝐞𝐞 : PGSQL
    𝐓𝐞𝐬𝐭𝐢𝐧𝐠 : Pytest
    𝐃𝐞𝐯𝐎𝐩𝐬 : Jenkins
    𝐎𝐫𝐠𝐚𝐧𝐢𝐬𝐚𝐭𝐢𝐨𝐧 : Trello
    𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐧𝐢𝐧𝐠 : GIT
    `
  },
]

export interface ExperienceType {
  job: string
  stack: string
  bgColor: string
  date: string
  company: string
  source: string
  location: string
  text: string
}

const Main: React.FunctionComponent = () => {
  const classes = useStyles()
  const sliderProps = {
    dots: false,
    infinite: true,
    variableWidth: true,
    className: classes.slick,
    swipeToSlide: true,
    swipe: true,
    lazyload: true,
    speed: 300,
  }
  const [modalData, setModalData] = useState<ExperienceType | undefined>(undefined)

  return (
    <Box className={classes.app}>
      <Header />
      <Box mt={10}>
        <Slider
          {...sliderProps}
        >
          {experiences.map((experience, index) => {
            return (
              <Clickable
                key={index}
                onClick={() => setModalData(experience)}
              >
                <Experience
                  bgColor={experience.bgColor}
                  date={experience.date}
                  company={experience.company}
                  logo={experience.source}
                  job={experience.job}
                  stack={experience.stack}
                />
              </Clickable>
            )
          })}
        </Slider>
      </Box>
      <Stack>
        <Modal
          open={!!modalData}
          title={modalData?.job}
          subtitle={modalData?.company}
          onClose={() => setModalData(undefined)}
          location={modalData?.location}
          date={modalData?.date}
          color={modalData?.bgColor}
          image={modalData?.source}
          text={modalData?.text}
        />
      </Stack>
      <Footer />
    </Box>
  )
}

export default Main
