import React from 'react'

import { TitleProps } from 'components/Text/interface'

import useStyles from './styles'


const Title: React.FunctionComponent<TitleProps> = ({ children, variant }) => {
  const classes = useStyles()

  return (
    <h2 className={[classes.text, classes[variant]].join(' ')}>{children}</h2>
  )
}

export default Title
