/**
 * Custom hook for scroll-triggered animations
 * Provides intersection observer functionality with customizable options
 */
import { useEffect, useRef, useState } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  const elementRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Check if Intersection Observer is supported (cross-browser compatibility)
    if (!window.IntersectionObserver) {
      // Fallback for older browsers - immediately show content
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true)
                setHasTriggered(true)
              }, delay)
            } else {
              setIsVisible(true)
              setHasTriggered(true)
            }

            // If triggerOnce is true, stop observing after first trigger
            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce && hasTriggered) {
            // Allow re-triggering if triggerOnce is false
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered])

  return { elementRef, isVisible }
}