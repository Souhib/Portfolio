import React from 'react'
import useStyles from './styles'
import { AvatarProps } from '../interface'

const Avatar: React.FunctionComponent<AvatarProps> = ({ source, variant }) => {
  const classes = useStyles()

  return (
    <div>
      <img
        src={source}
        className={[classes.image, classes[variant]].join(' ')}
      ></img>
    </div>
  )
}

export default Avatar
