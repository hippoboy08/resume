import { makeStyles, Theme } from '@material-ui/core'
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.9)',
      transform: 'translateX(-100%)',
      height: '100vh',
      width: '100%',
      textAlign: 'left',
      // padding: '2rem',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'transform 0.5s ease-in-out',

      '& .MuiTypography-root': {
        display: 'block',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.5rem',
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s linear',
        textAlign: 'center',
  
        [theme.breakpoints.up('sm')]: {
          fontSize: '2rem',
        },
  
        '&.active': {
          '&>a':{
            color: theme.palette.primary.main,
          }
        },
        '&:hover, &:active': {
          color: theme.palette.primary.main,
        },
      },
    },
    open: {
      transform: 'translateX(0)',
    },
    
  }),
  { name: 'SideMenu' }
)
export default useStyles
