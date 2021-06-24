import React from 'react'

import useStyles from './styles'

import { BodyProps } from '../interface'

const Body: React.FunctionComponent<BodyProps> = ({ children, variant, textAlign = 'left' }) => {
  const classes = useStyles()

  return (
    <p
      className={[classes.text, classes[variant]].join(' ')}
      style={{ textAlign: textAlign }}
    >{children}</p>
  )
}

export default Body
