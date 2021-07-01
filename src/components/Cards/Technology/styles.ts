import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    technologieCard: {
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      width: 400,
      height: 240,  
      padding: 24,
      '& h2': {
        textTransform: 'capitalize'
      },
      '&:hover': {
        transition: '.5s',
        cursor: 'pointer',
      },
      '&:hover $cardOverlay': {
        opacity: '0.3',
        transition: '.5s',
      },
      '& ul': {
        paddingInlineStart: 0,
        listStyle: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '160px',
      },
    },
    cardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      transition: '.5s',
    },
    logoBottomRight: {
      position: 'absolute',
      bottom: 8,
      right: 16
    },
  }),
)

export default useStyles