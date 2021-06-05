import React from 'react'
import { useScroll } from '../common'
import useIntersection from './useIntersection'

interface ScrollProps {
  ref: React.RefObject<HTMLElement>
}
const useScrollTracker = ({ ref }: ScrollProps) => {
  const { isInViewPort } = useIntersection({
    elementRef: ref,
    threshold: 0.4,
    stopOnceVisible: false,
  })
  const { currentSection, setCurrentSection } = useScroll()
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (isInViewPort) {
        // console.log('trigger', ref.current?.id)
        if (currentSection === ref.current?.id || ref.current?.id === undefined) 
          return
        setCurrentSection(ref.current.id)
      } 
      else {
        if(currentSection === ref.current?.id) {
          setCurrentSection('')
        }
      }
    }, 0)
    return () => clearTimeout(timeout)
  }, [isInViewPort])

  return { isInViewPort }
}
export default useScrollTracker
