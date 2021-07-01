import React from 'react'

import { SubtitleProps } from 'components/Text/interface'

import useStyles from './styles'

const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  animation,
  animationExit,
  animationDelay,
  children,
  isHovering,
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
        animation && isHovering && classes[animation],
        !isHovering && animationExit && classes[animationExit]
      ].join(' ')}
      style={{ 
        animationDelay: animation && animationDelay && isHovering ? animationDelay : undefined,
        textAlign: textAlign,
      }}
    >{children}</h5>
  )
}

export default Subtitle
