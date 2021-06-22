import React from 'react'

import { Box, Grid } from '@material-ui/core'

import { ExperienceProps } from 'components/Cards/interfaces'
import Logo from 'components/Images/Logo/Logo'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'


const Experience: React.FunctionComponent<ExperienceProps> = ({
  company,
  date,
  job,
  logoSrc,
}) => {
  const classes = useStyles()

  return (
    <Box mt={4} mb={4} className={classes['experience-card']}>
      <Box mb={2}>
        <Logo logo='enedis' variant='big' />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Title variant='tiny'>{job}</Title>
        </Grid>
        <Grid item xs={12}>
          <Subtitle variant='small'>{company}</Subtitle>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experience
