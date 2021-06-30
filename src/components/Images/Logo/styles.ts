import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    huge: {
      height: 88,
      [theme.breakpoints.down('sm')]: {
        height: 72
      }
    },

    big: {
      height: 72,
      [theme.breakpoints.down('sm')]: {
        height: 56
      }
    },

    medium: {
      height: 56,
      [theme.breakpoints.down('sm')]: {
        height: 48
      }
    },

    small: {
      height: 48,
      [theme.breakpoints.down('sm')]: {
        height: 40
      }
    },

    tiny: {
      height: 40,
      [theme.breakpoints.down('sm')]: {
        height: 32
      }
    },

    logo: {
      filter: 'drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.25))',
      textAlign: 'center',
    },
  }),
)

export default useStyles