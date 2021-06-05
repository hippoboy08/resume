import { Data } from '../common'
import {
  AboutSection,
  Banner,
  ContactSection,
  GlobalStyles,
  NavBar,
  ProjectsSection,
  Section,
  SkillsSection,
} from '../components'
import { NavItemProps } from '../components/NavBar'

const Home = () => {
  GlobalStyles()
  const navItems: NavItemProps[] = [
    { title: 'About', icon: '' },
    { title: 'Skills', icon: '' },
    { title: 'Projects', icon: '' },
    // { title: 'Contact', icon: '' },
  ]
  return (
    <>
      <NavBar navItems={navItems} />
      <Banner />
      <Section title='About'>
        <AboutSection {...Data.about} />
      </Section>
      <Section title='Skills'>
        <SkillsSection {...Data} />
      </Section>
      <Section title='Projects'>
        <ProjectsSection projects={Data.projects} />
      </Section>
      {/* <Section title='Contact'> */}
        <ContactSection contacts={Data.contacts} />
      {/* </Section> */}
    </>
  )
}

export default Home
