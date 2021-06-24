import React from 'react'

import { SubtitleProps } from 'components/Text/interface'

import useStyles from './styles'

const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  children,
  textAlign = 'left',
  variant
}) => {
  const classes = useStyles()

  return (
    <h5
      className={[classes.text, classes[variant]].join(' ')}
      style={{ textAlign: textAlign }}
    >{children}</h5>
  )
}

export default Subtitle
