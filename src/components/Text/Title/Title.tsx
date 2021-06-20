import React from 'react'
import useStyles from './styles'
import { TitleProps } from '../interface'

const Title: React.FunctionComponent<TitleProps> = ({ children, variant }) => {
  const classes = useStyles()

  return (
    <h2 className={[classes.text, classes[variant]].join(' ')}>{children}</h2>
  )
}

export default Title
