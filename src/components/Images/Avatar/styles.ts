import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    'huge': {
      width: '200px',
      height: '200px',
    },
    'big': {
      width: '72px',
      height: '72px'
    },
    'medium': {
      width: '56px',
      height: '56px',
    },
    'small': {
      width: '48px',
      height: '48px',
    },
    'tiny': {
      width: '40px',
      height: '40px',
    },
    animatedAvatar: {
      transition: '.5s',
      '&:hover': {
        transform: 'scale(1.1)',
        transition: '.5s',
      }
    },
    imageContainer: {
      overflow: 'hidden',
      lineHeight: 0,
      borderRadius: '50%',
    },
    bordered: {
      border: '2px solid #FFFFFF',
    }
  }),
)

export default useStyles