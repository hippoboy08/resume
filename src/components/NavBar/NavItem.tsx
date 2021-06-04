import { Typography, Link, Icon } from '@material-ui/core'
import useStyles from './NavBar.style'

const NavItem = ({ ...navItem }) => {
  const classes = useStyles()
  const { title, icon, onClick, active } = navItem
  return (
    <Typography className={`${classes.navItem} ${active ? 'active' : ''}`} variant='h6'>
      <Link href={`#${title}`} underline={active ? 'always' : 'hover'} onClick={() => onClick(title)}>
        <Icon>{icon}</Icon>
        {title.toUpperCase()}
      </Link>
    </Typography>
  )
}
export default NavItem
