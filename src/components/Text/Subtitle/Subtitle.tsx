import React from 'react'
import useStyles from './styles'
import { SubtitleProps } from '../interface'

const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  children,
  variant,
}) => {
  const classes = useStyles()

  return (
    <h5 className={[classes.text, classes[variant]].join(' ')}>{children}</h5>
  )
}

export default Subtitle
