import { makeStyles, Theme } from '@material-ui/core'
export const useStyles = makeStyles(
  (theme: Theme) => {
    return {
      root: {
        background: theme.palette.secondary.main,
        borderRadius: 15,
        width: '95%',
        margin: 'auto',
        '& .slick-track': {
          padding: '70px 0px',
          background: 'rbga(0.0.0.0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .slick-slide': {
          opacity: 0.5,
          transition: 'all 0.3s linear',
        },
        '& .slick-center': {
          opacity: 1,
          transform: 'scale(1.2)',
          zIndex: 2,
        },
        '& .slick-prev': {
          width: 40,
          height: 40,
          zIndex: 999,
          left: '5%',
          '&:before': {
            fontSize: 40,
            color: theme.palette.primary.main,
          },
        },
        '& .slick-next': {
          width: 40,
          height: 40,
          zIndex: 999,
          right: '5%',
          '&:before': {
            fontSize: 40,
            color: theme.palette.primary.main,
          },
        },
        
      },

      /** Project */
      projectCard: {
        width: '100%',
        height: '70%',
        margin: 'auto',
        '& *': { fontSize: '0.8em' },
        '& .MuiChip-root': { fontSize: '0.7em', height: 25 },
        [theme.breakpoints.up('sm')]: {
          '& *': { fontSize: '0.9em' },
        },
      },
      cardMedia: {
        height: '40vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      cardTech: {
        padding: '0.5em',
        '& .MuiChip-root': {
          margin: '0.2em',
        },
      },
      cardAction: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
    }
  },
  { name: 'ProjectsSection' }
)
