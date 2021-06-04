import { makeStyles, Theme } from '@material-ui/core'
export { NavBar } from './NavBar'
export { default as Hamburger } from './Hamburger'
export { Banner } from './Banner'
export { default as Title } from './Title'
export { default as Section } from './Section'
export { Skill } from './Skill'
export { default as AboutSection } from './AboutSection'
export { default as SkillsSection } from './SkillsSection'
export { default as ProjectsSection } from './ProjectsSection'
export { default as ContactSection } from './ContactSection'

export const GlobalStyles = makeStyles((theme: Theme) => {
  return {
    '@global': {
      /* The typewriter cursor effect */
      '@keyframes reveal': {
        from: { width: 0 },
        to: { width: '100%' },
      },
      '@keyframes twinkle': {
        '0%': { color: theme.palette.primary.main },
        // '20%': { color: 'white' },
        '40%': { color: 'white' },
        // '60%': { color: 'white' },
        '100%': { color: theme.palette.primary.main },
      },
      '@keyframes blink-caret': {
        'from, to': { borderColor: 'transparent' },
        '50%': { borderColor: theme.palette.primary.main },
      },

      body: {
        fontSize: '1.2em',
        [theme.breakpoints.up('sm')]: {
          fontSize: 20,
        },
      },
    },
  }
})
