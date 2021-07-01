import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) =>
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
      borderRadius: 120,
      overflow: 'hidden'
    },
    bordered: {
      border: '1px solid #FFFFFF',
    }
  }),
)

export default useStyles