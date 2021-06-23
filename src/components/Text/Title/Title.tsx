import React from 'react'

import { TitleProps } from 'components/Text/interface'

import useStyles from './styles'


const Title: React.FunctionComponent<TitleProps> = ({ children, variant, textAlign = 'left' }) => {
  const classes = useStyles()

  return (
    <h2
      className={[classes.text, classes[variant]].join(' ')}
      style={{ textAlign: textAlign }}
    >{children}</h2>
  )
}

export default Title
