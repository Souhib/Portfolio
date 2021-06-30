import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: 'absolute',
      width: '70%',
      height: '80%',
      margin: 'auto',
      display: 'flex',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: '80px 72px',
      borderRadius: 40,
      '& .MuiBox-root': {
        justifyContent: 'space-between'
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 32,
        width: '80%',
        height: '70%',
      },
    },
    bottomBar: {
      [theme.breakpoints.down('sm')]: {
        '& > div:first-child': {
          order: 2,
        },
        '& > div:last-child': {
          order: 1,
        }
      }
    },
    cross: {
      position: 'absolute',
      top: 80,
      '& img': {
        width: 32,
        height: 32,
      },
      [theme.breakpoints.up('sm')]: {
        right: 80,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        position: 'relative',
        alignSelf: 'center',
        top: 24,
        '& img': {
          padding: '8px',
          borderRadius: '24px',
          border: '2px solid white',
          width: 24,
          height: 24,
        },
      }
    },
    'divider': {
      width: 100,
      height: 1,
      background: '#FFFFFF'
    },
    'linebreak': {
      whiteSpace: 'break-spaces'
    },
    mainStack: {
      [theme.breakpoints.down('sm')]: {
        '& > div:nth-child(2)': {
          flexGrow: 1,
        },
        flexGrow: 1,
      },
    },
    'modalBottomItem': {
      marginLeft: 'auto',
      display: 'block',
    },

    description: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '16px',
        borderRadius: '14px',
        padding: '0 13px',
        maxHeight: 350,
        animation: '$shadowFadeIn 0.8s forwards',
        'webkit-animation': '$shadowFadeIn 0.8s forwards',
        overflow: 'scroll',
      }
    },
     
    '@keyframes shadowFadeIn': {
      '0%': { 
        boxShadow: 'none',
      },
      '100%': {
        boxShadow: 'inset 0px 0px 8px 0px #00000066',

      }
    },
 
  }),
)

export default useStyles