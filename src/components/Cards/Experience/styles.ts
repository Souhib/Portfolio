import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'experience-card': {
      border: '1px solid #FFFFFF',
      borderRadius: 24,
      display: 'flex',
      flexDirection: 'column',
      height: 160,
      width: 300,
      padding: 24,
      [theme.breakpoints.down('sm')]: {
      },
    },
  }),
);

export default useStyles