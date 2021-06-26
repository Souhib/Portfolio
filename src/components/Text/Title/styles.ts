import { createStyles, makeStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import colors from '../../../theme/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'huge': {
      fontSize: 40,
      textShadow: '0px 3Px 3px #0000002b',
      [theme.breakpoints.down('sm')]: {
        fontSize: 32
      },
    },
    'big': {
      fontSize: 32,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24
      },
    },
    'medium': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      },
    },
    'small': {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      },
    },
    'text': {
      color: colors.text.title,
      fontWeight: 600,
      margin: 0,
      fontFamily: 'Poppins, sans'
    },
  }),
);

export default useStyles