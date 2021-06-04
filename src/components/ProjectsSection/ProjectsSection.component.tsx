import { Data } from '../../common'
import Slider, { Settings } from 'react-slick'
import { useStyles } from './ProjectsSection.styles'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Icon,
  Chip,
} from '@material-ui/core'

interface ProjectsSectionProps {
  projects: typeof Data.projects
}
const ProjectsSection = ({ projects = [] }: ProjectsSectionProps) => {
  const classes = useStyles()
  const settings: Settings = {
    className: classes.root,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {projects.map((project, ind) => {
        return <Project key={ind} {...project} />
      })}
    </Slider>
  )
}

const Project = ({ ...project }) => {
  const { name, description, position, thumbnail, techs, demo, source } =
    project
  const classes = useStyles()
  return (
    <Card className={classes.projectCard}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image={`/assets/${thumbnail}`}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
        <div className={classes.cardTech}>
          {techs.map((tech: string, ind: number) => (
            <Chip key={ind} label={tech} variant='outlined' />
          ))}
        </div>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        {demo && (
          <Button
            variant='outlined'
            fullWidth
            href={demo}
            target='_blank'
            size='small'
            color='primary'
          >
            Demo
          </Button>
        )}
        {source && (
          <Button
            variant='outlined'
            fullWidth
            href={source}
            target='_blank'
            size='small'
            color='primary'
          >
            Source
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default ProjectsSection
