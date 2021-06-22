import React from 'react'

import useStyles from './styles'

import { BodyProps } from '../interface'

const Body: React.FunctionComponent<BodyProps> = ({ children, variant }) => {
  const classes = useStyles()

  return (
    <p className={[classes.text, classes[variant]].join(' ')}>{children}</p>
  )
}

export default Body
