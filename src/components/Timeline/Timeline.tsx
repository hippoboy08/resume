import { Paper, Typography, useTheme } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineOppositeContent,
} from '@material-ui/lab'
import { TimelineNode } from '.'

interface TimelinesProps {
  nodes: TimelineNode[]
}
const Timelines = ({ nodes = [] }: TimelinesProps) => {
  const theme = useTheme()
  return (
    <Timeline align='alternate'>
      {nodes.map((node, ind) => {
        return (
          <TimelineItem key={ind}>
            <TimelineOppositeContent style={{color: theme.palette.primary.main}}>{node.title}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} style={{ padding: '0.5em' }}>
                {node.description}
                <Typography style={{color: theme.palette.primary.main}} variant='h6'>{node.subTitle}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

export default Timelines
