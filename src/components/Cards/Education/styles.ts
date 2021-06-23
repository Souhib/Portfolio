import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'education-card': {
      border: '1px solid #FFFFFF',
      borderRadius: 24,
      display: 'flex',
      flexDirection: 'column',
      width: 670,
      height: 348,
      padding: 24,
      [theme.breakpoints.down('sm')]: {
      },
    },
    'logo-position': {
      marginLeft: 'auto',
      marginTop: 'auto',
    }
  }),
);

export default useStyles