import {
  LinearProgress,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { SkillProps } from '.'

const useStyles = makeStyles(
  (theme: Theme) => {
    return {
      root: {
        marginBottom: '0.5em',
        color: theme.palette.common.white,
      },
    }
  },
  { name: 'Skill' }
)

const ProgressClasses = makeStyles(
  {
    root: {
      height: '0.5em',
      borderRadius: '3px',
    },
    colorPrimary: {
      backgroundColor: 'rgba(230,230,230, 0.5)',
    },
    bar: {
      animation: 'reveal 1.5s ease-in-out',
    },
  },
  { name: 'MuiLinearProgress' }
)

const Skill = ({ ...skill }: SkillProps) => {
  const classes = useStyles()
  const progressClasses = ProgressClasses()
  return (
    <div className={classes.root}>
      <Typography variant='h6'>{skill.name}</Typography>
      <LinearProgress
        classes={{ ...progressClasses }}
        variant='determinate'
        value={skill.point}
      />
    </div>
  )
}

export default Skill
