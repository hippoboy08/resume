import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      flexGrow: 1,
      background: theme.palette.primary.main,
    },
    appBar: {
      padding: '0 10px',
      justifyContent: 'center',
      background: theme.palette.common.white,
      transition: 'transform 0.5s',
      '& *': {
        color: theme.palette.common.black,
      }
    },
    toolBar: {
      width: '60vw',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    navItem: {
      display: 'none',
      flexGrow: 0.1,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      // '& .active':{
      //   color: theme.palette.primary.main
      // },
    },
  }),
  { name: 'NavBar' }
)
export default useStyles