import React from 'react'
import { useStyles } from './Hamburger.style'

interface HamburgerProps extends React.SVGProps<SVGSVGElement> {
  // onClick?: () => void,
  // color?: string,
  isOpen: boolean
}

const Hamburger = ({
  onClick = (e: React.MouseEvent<SVGSVGElement> | undefined) => {},
  isOpen = false,
}: HamburgerProps) => {
  const classes = useStyles()

  return (
    <>
      <svg
        className={`${classes.root} ${isOpen ? classes.crossForm : ''}`}
        onClick={onClick}
        viewBox='250 200 450 250'
        tabIndex={-1}
      >
        <path
          d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200'
          className={classes.topBar}
        />

        <path d='M300,320 L540,320' className={classes.middleBar} />

        <path
          d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190'
          className={classes.bottomBar}
          transform='translate(480, 320) scale(1, -1) translate(-480, -318)'
        />
      </svg>
    </>
  )
}

export default Hamburger
