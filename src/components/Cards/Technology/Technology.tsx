import React from 'react'

import { Box } from '@material-ui/core'

import { TechnologieProps } from 'components/Cards/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'


const Technologie: React.FunctionComponent<TechnologieProps> = ({
  bgColor,
  language,
  companies,
  logo,
}) => {
  const classes = useStyles()

  return (
    <Box 
      mt={4} 
      mb={4} 
      className={classes.technologieCard} 
      style={{ border: `2px solid ${bgColor}` }}
    >
      <Box
        className={classes.cardOverlay}
        style={{ background: bgColor }}
      />
      <Box
        style={{ zIndex: 1 }}
      >
        <Title variant='big'>{language}</Title>
      </Box>
      <ul>
        <Stack
          spacing={1}
          horizontalAlign='left'
        >
          {companies && companies.map((company, index) => {
            return (
              <li
                key={index}
                style={{ paddingLeft: 16 }}
              >
                <Stack
                  isRow
                  spacing={1}
                  horizontalAlign='left'
                >
                  <Subtitle variant='medium'>●</Subtitle>
                  <Subtitle variant='medium'>{company}</Subtitle>
                </Stack>
              </li>
            )
          })}
        </Stack>
      </ul>
      <Box className={classes.logoBottomRight}>
        <Logo
          logo={logo}
          variant='huge'
        />
      </Box>
    </Box>
  )
}

export default Technologie
