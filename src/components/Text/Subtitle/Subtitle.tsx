import React from 'react'

import { SubtitleProps } from 'components/Text/interface'

import useStyles from './styles'

const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  animation,
  animationDelay,
  children,
  textAlign = 'left',
  variant
}) => {
  const classes = useStyles()

  return (
    <h5
      className={[
        classes.text,
        classes[variant], 
        classes.subtitle, 
        animation && classes[animation]
      ].join(' ')}
      style={{ 
        animationDelay: animation && animationDelay ? animationDelay : undefined,
        textAlign: textAlign,
      }}
    >{children}</h5>
  )
}

export default Subtitle
