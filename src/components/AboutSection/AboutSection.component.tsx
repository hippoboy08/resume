import { Slide, Zoom } from '@material-ui/core'
import { createRef, useEffect, useRef } from 'react'
import { Data } from '../../common'
import { useIntersection } from '../../hooks'
import { Timelines } from '../Timeline'
import { useStyles } from './AboutSection.styles'

const AboutSection = ({ ...about }: typeof Data.about) => {
  const classes = useStyles()
  const { bio, timelines } = about
  const { isInViewPort:showBio, ref:bioRef } = useIntersection({
    threshold: 0.4,
    // stopOnceVisible: false
  })
  const { isInViewPort:showTimeline, ref:timelineRef } = useIntersection({
    threshold: 0.4,
    // stopOnceVisible: false
  })
  return (
    <div className={classes.root}>
      {/* Bio */}
      <Zoom ref={bioRef} in={showBio}>
      <div className={classes.bio}>
        <div className={classes.photo}>
          <img src='/assets/Khoi Huynh.jpg' alt='Khoi Huynh' />
        </div>
        <p>{bio}</p>
      </div>
      </Zoom>

      {/* Timeline */}
      <Zoom ref={timelineRef} in={showTimeline}>
        <div className={classes.timeline}>
          <Timelines nodes={timelines} />
        </div>
      </Zoom>
    </div>
  )
}

export default AboutSection
