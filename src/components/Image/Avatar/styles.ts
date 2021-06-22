import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    'big': {
      width: "200px",
      height: "200px",
    },
    'medium': {
      width: "56px",
      height: "56px",
      background: "white",
      border: "1px solid #FFFFFF",
    },
    'small': {
      width: "48px",
      height: "48px",
    },
    'image': {
      borderRadius: 120,
    },
  }),
);

export default useStyles