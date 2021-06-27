import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'modal': {
      position: 'absolute',
      width: 400,
      backgroundColor: 'red',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: 10,
    },
    'linebreak': {
      whiteSpace: 'pre'
    }
  }),
);

export default useStyles