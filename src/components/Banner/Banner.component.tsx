import { Icon } from '@material-ui/core'
import { useStyles } from './Banner.styles'

const Banner = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.background}>
        <div className={classes.center}>
          <div>
            <h1 className={classes.typewriter}>Hellooo! I'm Khoi</h1>
          </div>
          <Icon className={classes.icon}>keyboard_arrow_down</Icon>
        </div>
      </div>
      <div className={classes.gap} />
    </>
  )
}

export default Banner
