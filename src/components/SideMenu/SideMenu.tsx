import { NavItem, NavItemProps } from '../NavBar'
import useStyles from './SideMenu.style'

interface SideMenuProps {
  navItems: NavItemProps[]
  open: boolean
  onItemClick: Function
  activeItem: string
}
const SideMenu = ({ open, navItems = [], onItemClick, activeItem }: SideMenuProps) => {
  const classes = useStyles()
  return (
    <div className={`${classes.root} ${open ? classes.open : ''}`}>
      {navItems.map((item, index) => (
        <NavItem active={item.title === activeItem} key={index} {...item} onClick={() => onItemClick(item.title)} />
      ))}
    </div>
  )
}

export default SideMenu
