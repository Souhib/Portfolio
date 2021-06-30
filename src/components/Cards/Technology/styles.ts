import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'technologie-card': {
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 275,
      width: 450,
      padding: 24,
      transition: '.5s',
      '&:hover': {
        background: '#27856aa1 !important',
        border: '1px solid #d2d2d2 !important',
        transition: '.5s',
        cursor: 'pointer',
      },
      [theme.breakpoints.down('sm')]: {
      },
    },
    logoBottomRight: {
      position: 'absolute',
      bottom: 8,
      right: 16
    },
  }),
)

export default useStyles