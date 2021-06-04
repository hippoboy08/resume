import { Icon, Typography } from '@material-ui/core'
import { Data } from '../../common'
import { Skill } from '../Skill'
import { useStyles } from './SkillsSection.styles'

interface SkillsSectionProps {
  extraInfo: typeof Data.extraInfo
  skills: typeof Data.skills
}
const SkillsSection = ({ extraInfo, skills }: SkillsSectionProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* Programming skills */}
      <div className={classes.skills}>
        {/* <Typography variant='h2' style={{color: 'rgba(0,0,0,0.5)'}}><Icon fontSize='large'>code</Icon> Skills </Typography> */}
        {skills.map((skill, ind) => {
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
