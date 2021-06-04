import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme: Theme) => {
    return {
      root: {
        color: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          padding: '0 2em',
        },
      },
      /** Bio */
      bio: {
        padding: '1em',
        position: 'relative',
        '&:after': {
          content: '"//bio"',
          fontSize: '6em',
          position: 'absolute',
          color: theme.palette.primary.main,
          opacity: 0.2,
          top: '55%',
          left: '10%',
          [theme.breakpoints.up('sm')]: {
            fontSize: '10em',
            top: '15%',
            left: '110%',
          }
        },
        [theme.breakpoints.up('sm')]: {
          width: '50%',
          padding: '2em',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 15,
        },
      },
      photo: {
        width: '80%',
        margin: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          width: '80%',
        },
        '& img': {
          // width: 'inherit',
          borderRadius: '50%',
          // aspectRatio: '5 / 5',
          width: '12em',
          height: '12em',
        },
      },

      /** Timeline */
      timeline: {
        width: '100%',
        fontSize: '0.9em',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
          width: '60%',
          fontSize: '1.2em',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 15,
          display: 'flex',
          alignSelf: 'flex-end',
          marginTop: '2em',
        },
        '&:before': {
          content: '">exp"',
          fontSize: '6em',
          position: 'absolute',
          color: theme.palette.primary.main,
          opacity: 0,
          top: '30%',
          left: '10%',
          [theme.breakpoints.up('sm')]: {
            opacity: 0.2,
            fontSize: '8em',
            top: '5%',
            left: '-65%',
          }
        }
      },
    }
  },
  { name: 'About' }
)
