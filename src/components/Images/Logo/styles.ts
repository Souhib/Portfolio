import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    huge: {
      height: 88
    },

    big: {
      height: 72
    },

    medium: {
      height: 56
    },

    small: {
      height: 48
    },

    tiny: {
      height: 40
    },

    logo: {
      filter: 'drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.25))',
      textAlign: 'center',
    },
  }),
);

export default useStyles