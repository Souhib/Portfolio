import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import colors from '../../../theme/colors'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'big': {
      fontSize: 32,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      },
    },
    'medium': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      },
    },
    'small': {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    'tiny': {
      fontSize: 14,
      [theme.breakpoints.down('sm')]: {
        fontSize: 10
      },
    },
    'subtitle': {
      position: 'relative',
    },
    'slideIn': {
      animation: '$slideIn 0.8s forwards',
      opacity: 0,
      left: -30,
    },
    '@keyframes slideIn': {
      '0%': {
        opacity: 0,
        left: -30,
      },
      '50%': {
        opacity: 0.5,
      },
      '100%': {
        opacity: 1,
        left: 0,
      }
    },
    'text': {
      color: colors.text.title,
      fontWeight: 400,
      margin: 0,
      fontFamily: 'Montserrat, sans'
    },
  }),
);

export default useStyles