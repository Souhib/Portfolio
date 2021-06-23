import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    'big': {
      width: '200px',
      height: '200px',
    },
    'medium': {
      width: '56px',
      height: '56px',
      background: 'white',
    },
    'small': {
      width: '48px',
      height: '48px',
    },
    imageContainer: {
      overflow: 'hidden',
      lineHeight: 0,
      borderRadius: '50%',
    },
    bordered: {
      border: '1px solid #FFFFFF',
    }
  }),
);

export default useStyles