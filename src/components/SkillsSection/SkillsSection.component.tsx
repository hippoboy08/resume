import { Icon, Typography } from '@material-ui/core'
import { RefObject } from 'react'
import { Data } from '../../common'
import { useIntersection } from '../../hooks'
import { Skill } from '../Skill'
import { useStyles } from './SkillsSection.styles'

interface SkillsSectionProps {
  extraInfo: typeof Data.extraInfo
  skills: typeof Data.skills
}
const SkillsSection = ({ extraInfo, skills }: SkillsSectionProps) => {
  const classes = useStyles()
  const { ref: skillRef, isInViewPort: showSkills } =
    useIntersection<HTMLDivElement>({
      threshold: 0.5,
    })

  return (
    <div className={classes.root}>
      {/* Programming skills */}
      <div className={classes.skills} ref={skillRef}>
        {showSkills &&
          skills.map((skill, ind) => {
            return <Skill key={ind} {...skill} />
          })}
      </div>

      {/* Extra Info */}
      <div className={classes.extraInfo}>
        {extraInfo.extraItems.map((item, ind) => {
          return (
            <div className={classes.extraItem} key={ind}>
              <Typography
                variant='h5'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Icon fontSize='large'>{item.icon}</Icon>
                {item.header}
              </Typography>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SkillsSection
