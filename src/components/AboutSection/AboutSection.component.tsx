import { Data } from '../../common'
import { Timelines } from '../Timeline'
import { useStyles } from './AboutSection.styles'

const AboutSection = ({ ...about }: typeof Data.about) => {
  const classes = useStyles()
  const { bio, timelines } = about
  return (
    <div className={classes.root}>
      {/* Bio */}
      <div className={classes.bio}>
        <div className={classes.photo}>
          <img src='/assets/Khoi Huynh.jpg' alt='Khoi Huynh' />
        </div>
        <p>{bio}</p>
      </div>

      {/* Timeline */}
      <div className={classes.timeline}>
        <Timelines nodes={timelines} />
      </div>
    </div>
  )
}

export default AboutSection
