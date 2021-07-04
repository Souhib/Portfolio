import React, { useEffect, useRef, useState } from 'react'

import { Box, Modal as ModalMUI, useMediaQuery, useTheme } from '@material-ui/core'

import { Cross } from 'assets/img'
import { ModalProps } from 'components/Containers/interfaces'
import Stack from 'components/Containers/Stack/Stack'
import Logo from 'components/Images/Logo/Logo'
import Body from 'components/Text/Body/Body'
import Subtitle from 'components/Text/Subtitle/Subtitle'
import Title from 'components/Text/Title/Title'

import useStyles from './styles'

const Modal: React.FunctionComponent<ModalProps> = ({
  animation,
  title,
  subtitle,
  location,
  date,
  onClose,
  open,
  color,
  image,
  text
}) => {
  const classes = useStyles()
  const rootRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    const body = document.getElementsByTagName('body')
    const overflowMode = open ? 'hidden' : 'unset'
    body[0].style.overflow = overflowMode
  }, [open])
  console.log(open)
  return (
    <div>
      <ModalMUI
        open={open || false}

        aria-labelledby='server-modal-title'
        aria-describedby='server-modal-description'
        container={() => rootRef.current}
        className={classes.modal}
      >
        <div
          ref={rootRef}
          className={classes.modalContainer}
          style={{
            animationName: animation
          }}
        >
          <Box
            className={classes.overlay}
            style={{ 
              backgroundColor: color
            }}
          />
          <Stack
            className={classes.mainStack}
            horizontalAlign='space-between'
          >
            <Stack
              horizontalAlign='center'
              verticalAlign='center'
              spacing={isMobile ? 3 : 4}
            >
              <Title
                textAlign={isMobile ? 'center' : 'left'}
                variant='huge'
              >{title}</Title>
              <Box className={classes.divider}  />
              <Title variant='medium'>{subtitle}</Title>
            </Stack>
            <Box className={classes.linebreak}>
              <Box 
                className={classes.description}
              >
                <Body
                  variant='big'
                >{text}</Body> 
              </Box>
            </Box>
            <Stack
              isRow={!isMobile}
              className={classes.bottomBar}
              verticalAlign='center'
            >
              <Stack
                horizontalAlign='center'
                className={classes.modalBottomItem}
                verticalAlign='center'
              >
                <Subtitle
                  textAlign={isMobile ? 'center' : 'left'}
                  variant='big'
                >{location}</Subtitle>
                <Subtitle
                  textAlign={isMobile ? 'center' : 'left'}
                  variant='medium'
                >{date}</Subtitle>
              </Stack>
              <Stack
                className={classes.modalBottomItem}
              >
                <Logo
                  logo={image}
                  variant={isMobile ? 'tiny' : 'medium'}
                />
              </Stack>
            </Stack>
          </Stack>
          <Box
            className={classes.cross}
            onClick={onClose}
          >
            <img
              src={Cross}
            />
          </Box>
        </div>
      </ModalMUI>
    </div>
  )
}

export default Modal
