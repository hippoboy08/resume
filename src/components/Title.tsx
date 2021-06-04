import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: '0 0.5em 2em',
      '& $title': {
        color: 'white',
        fontSize: '2em',
        margin: '0.2em 0.2em 0 0.2em',
      },
      '& hr': {
        border: 'none',
        borderBottom: '3px solid',
        margin: 0,
        color: theme.palette.primary.main,
        animation: '$reveal 1s',
      },
    },
    title: {},
  }
}, {name: 'Title'})

const Title = ({ children = '' }: { children?: React.ReactNode }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        {children}</h1>
      {/* <hr /> */}
    </div>
  )
}

export default Title
