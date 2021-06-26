import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    experienceCard: {
      height: 120,
      width: 240,
      padding: 24,
      transition: '.5s',
      '&:hover': {
        height: 160,
        width: 260,
        cursor: 'pointer',
        transition: '.5s',
      },
      '&:hover img': {
        margin: '0 !important',
        transition: '.5s',
      },
      [theme.breakpoints.down('sm')]: {
      },
    },
  }),
);

export default useStyles