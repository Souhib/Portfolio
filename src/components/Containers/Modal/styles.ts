import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:focus': {
        outline: 'none'
      },
    },
    modalContainer: {
      position: 'absolute',
      width: '90%',
      height: '90%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: '24px 32px',
      borderRadius: 40,
      '& .MuiBox-root': {
        justifyContent: 'space-between'
      },
      '& div[aria-hidden = true]': {
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: 32,
        width: '80%',
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
      top: 24,
      '& img': {
        cursor: 'pointer',
        width: 32,
        height: 32,
      },
      [theme.breakpoints.up('md')]: {
        right: 40,
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
      [theme.breakpoints.down('md')]: {
        marginTop: '16px',
        borderRadius: '14px',
        padding: '0 13px',
        maxHeight: 450,
        animation: '$shadowFadeIn 0.5s forwards',
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