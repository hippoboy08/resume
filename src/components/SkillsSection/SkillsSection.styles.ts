import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme: Theme) => {
    return {
      root: {
        width: '95%',
        margin: 'auto',
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5em',
        [theme.breakpoints.up('sm')]: {
          // flexDirection: 'row',
          width: '60%',
        },
      },
      /** Skills*/
      skills: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 0,
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
          // width: '60%',
        },
      },
      /** Extra Info */
      extraInfo: {
        width: '100%',
        margin: '2em auto',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 0,
        flexGrow: 1,
        background: theme.palette.secondary.main,
        padding: '1em 0',
        borderRadius: 15,
        [theme.breakpoints.up('sm')]: {
          // width: '60%',
        },
      },
      extraItem: {
        borderLeft: `5px solid ${theme.palette.primary.main}`,
        padding: '0 0.5em',
        margin: '0 0.5em 0.5em',
        '& p': {
          // color: 'rgba(0,0,0, 0.5)',
          color: theme.palette.common.white,
        },
      },
    }
  },
  { name: 'SkillsSection' }
)
