import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

import colors from '../../../theme/colors'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'huge': {
      fontSize: 24,
      [theme.breakpoints.down('sm')]: {
        fontSize: 20
      },
    },
    'big': {
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      },
    },
    'medium': {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
    },
    'small': {
      fontSize: 12,
      [theme.breakpoints.down('sm')]: {
        fontSize: 10
      },
    },
    'text': {
      color: colors.text.title,
      fontFamily: 'Manrope, sans'
    },
  }),
)

export default useStyles