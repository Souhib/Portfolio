import { Hidden } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'education-card': {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 24,
      display: 'flex',
      flexDirection: 'column',
      height: 348,
      padding: 24,
      '&:hover $overlay': {
        opacity: 0.3,
        transition: '0.8s'
      },
      [theme.breakpoints.down('sm')]: {
        height: 240
      },
    },
    'logo-position': {
      marginLeft: 'auto',
      marginTop: 'auto',
      zIndex: -1,
    },
    'overlay': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: '0.8s',
      zIndex: 0,
    }
  }),
)

export default useStyles