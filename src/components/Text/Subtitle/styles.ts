import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import colors from '../../../theme/colors'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'big': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      },
    },
    'medium': {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      },
    },
    'small': {
      fontSize: 14,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    'tiny': {
      fontSize: 12,
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
      left: -15,
    },
    'slideOut': {
      animation: '$slideOut 0.8s forwards',
    },
    'text': {
      color: colors.text.title,
      fontWeight: 400,
      margin: 0,
      fontFamily: 'Montserrat, sans'
    },
    '@keyframes slideIn': {
      '0%': {
        opacity: 0,
        left: -15,
      },
      '75%': {
        opacity: 0.5,
      },
      '100%': {
        opacity: 1,
        left: 0,
      }
    },
    '@keyframes slideOut': {
      '0%': {
        opacity: 1,
        left: 0,
      },
      '50%': {
        opacity: 0.05,
      },
      '100%': {
        opacity: 0,
        left: -15,
      }
    },
  }),
)

export default useStyles