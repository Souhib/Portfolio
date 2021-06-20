import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'
import colors from '../../../theme/colors'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        fontSize: 12
      },
    },
    'text': {
      color: colors.text.title,
      fontWeight: 400,
      fontFamily: 'Montserrat, sans'
    },
  }),
);

export default useStyles