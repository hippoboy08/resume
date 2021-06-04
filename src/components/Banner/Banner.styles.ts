import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles(
  (theme: Theme) => {
    return {
    background: {
      marginTop: theme.mixins.toolbar.minHeight,
      width: '100%',
      // height: '90vh',
      // maxHeight: '90vh',
      margin: 'auto',
      backgroundColor: 'white',
      backgroundImage: `url('/assets/banner.gif')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      aspectRatio: '16/9',
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-between',
      height: '100%',
      '& h1': {
        // marginTop: '0.5em',
        fontSize: '1.5em',
        [theme.breakpoints.up('sm')]: {
          fontSize: '2.5em',
        },
      },
    },
    typewriter: {
      maxWidth: 'max-content',
      color: theme.palette.primary.main,
      overflow:
        'hidden' /* Ensures the content is not revealed until the animation */,
      borderRight: '.1em solid black' /* The typwriter cursor */,
      whiteSpace: 'nowrap' /* Keeps the content on a single line */,
      margin: '0 auto' /* Gives that scrolling effect as the typing happens */,
      animation:
        'reveal 2s steps(40, end), blink-caret .75s step-end infinite',
    },
    icon: {
      fontSize: '3em',
      animation: 'twinkle 2s infinite',
      animationTimingFunction: 'ease-in-out',
    },

    gap:{
      width: '100%',
      paddingTop: '10%',
      backgroundImage: `url('/assets/banner-gap.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    },
  }},
  { name: 'Banner' }
)