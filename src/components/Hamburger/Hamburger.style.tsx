import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        /** Position */
        position: 'absolute',
        /** Box */
        height: 50,
        width: 50,
        outline: 'none',
        /** Misc */
        cursor: 'pointer',
        zIndex: 1000,
        '& path': {
          strokeWidth: 10,
          strokeLinecap: 'round',
          stroke: `black`,
          fill: 'none',
          transition: 'all 0.5s ease-in-out',
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      crossForm: {
        '& path': {
          stroke: 'white'
        },
        '& $topBar, & $bottomBar': {
          strokeDashoffset: '-650px',
        },
        '& $middleBar': {
          strokeDasharray: '0px 220px',
          strokeDashoffset: '-120px',
        },
      },
      topBar: {
        strokeDasharray: '240px 910px',
      },
      middleBar: {
        strokeDasharray: '240px 240px',
      },
      bottomBar: {
        strokeDasharray: '240px 910px',
      },
    }
  },
  { name: 'Hamburger', index: 1 }
)
