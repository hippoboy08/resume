import { RefObject, useEffect, useRef, useState } from 'react'

interface InputProps <T> extends IntersectionObserverInit{
  elementRef: RefObject<T>,
  stopOnceVisible?: boolean
}

/** A hook to check if a component is in view port. 
 * The perfomance is optimized with the browser built-in IntersectionObserver API. */
const useIntersection = <T extends HTMLElement>({
  elementRef,
  stopOnceVisible = true,
  root = null,
  rootMargin = '0%',
  threshold = 1
} :InputProps<T>) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  useEffect(() => {
    // Gets the DOME node
    const ref = elementRef?.current

    /** Stops observing once the component is already visible */
    if(entry?.isIntersecting && stopOnceVisible) {
      return
    }

    // Unobserve the old refs
    if (observer.current) observer.current.disconnect()

    // Creating the new observer
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
      },
      { root, rootMargin, threshold }
    )
    /** Since the observer created with useRef is mutable, 
     * so the observer we are dealing with may not be the same one
     * This next line of code is to ensure that 
     * the observer is the same in the useEffect scope
     */
    const { current: currentObserver } = observer

    // Start observing the DOM node
    if (ref) currentObserver.observe(ref)
    // Unobserves in the cleaning up phase
    return () => {
      currentObserver.disconnect()
    }
  }, [elementRef, entry, stopOnceVisible, root, rootMargin, threshold])

  return { isInViewPort: !!entry?.isIntersecting, entry }
}
export default useIntersection
