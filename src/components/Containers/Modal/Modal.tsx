import React, { useRef } from 'react';

import { Modal as ModalMUI } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import { ModalProps } from 'components/Containers/interfaces';
import Stack from 'components/Containers/Stack/Stack';
import Body from 'components/Text/Body/Body';
import Subtitle from 'components/Text/Subtitle/Subtitle';
import Title from 'components/Text/Title/Title';

import useStyles from './styles';

const Modal: React.FunctionComponent<ModalProps> = ({
  title,
  subtitle,
  location,
  date,
  image,
  text
}) => {

  const classes = useStyles();

  const rootRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={rootRef}>
      <ModalMUI
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby='server-modal-title'
        aria-describedby='server-modal-description'
        className={classes.modal}
        container={() => rootRef.current}
      >
        <>
          <Stack
            horizontalAlign='center'
            verticalAlign='center'
            spacing={4}
          >
            <Title variant='huge'>{title}</Title>
            <Divider />
            <Title variant='medium'>{subtitle}</Title>
            <Body
            // className={classes.linebreak}
              variant='big'
            >{text}</Body> 
          </Stack>
          <Subtitle variant='big'>{location}</Subtitle>
          <Subtitle variant='medium'>{date}</Subtitle>
          <p>{image}</p>
          <div className={classes.linebreak} />
        </>
      </ModalMUI>
    </div>
  );
};

export default Modal;
