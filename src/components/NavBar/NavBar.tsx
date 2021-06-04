import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core'
import React from 'react'
import { Hamburger } from '../index'
import useStyles from './NavBar.style'
import SideMenu from '../SideMenu/SideMenu'
import { NavItem, NavItemProps } from '.'
import { useScroll } from '../../common'

const NavBar = ({ navItems = [] }: { navItems: NavItemProps[] }) => {
  const [open, setOpen] = React.useState(false)
  // const [activeItem, setActiveItem] = React.useState('')
  const { currentSection: activeItem, setCurrentSection: setActiveItem } =
    useScroll()
  const classes = useStyles()

  const trigger = useScrollTrigger()

  const handleMenuClick = (title?: string) => {
    setOpen(!open)
    if (title) {
      setActiveItem(title)
      // console.log('click')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={classes.appBar}
        elevation={0}
        style={{ transform: `translateY(${trigger ? '-100%' : 0})` }}
      >
        <Hamburger isOpen={open} onClick={() => handleMenuClick()} />
        <Toolbar className={classes.toolBar}>
          {navItems.map((item, index) => (
            <NavItem
              onClick={setActiveItem}
              active={item.title === activeItem}
              key={index}
              {...item}
            />
          ))}
        </Toolbar>
        <SideMenu
          navItems={navItems}
          activeItem={activeItem}
          open={open}
          onItemClick={handleMenuClick}
        />
      </AppBar>
    </div>
  )
}

export default NavBar
