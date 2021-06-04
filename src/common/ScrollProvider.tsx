import React from 'react'

interface ScrollContextProps {
  currentSection: string
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>
}
export const ScrollContext = React.createContext<ScrollContextProps>(
  {} as ScrollContextProps
)

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = React.useState('')
  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const scrollContext = React.useContext(ScrollContext)
  if (!scrollContext)
    throw Error('call useScrollContext outside ScrollProvider!')
  return scrollContext
}
export default ScrollProvider
