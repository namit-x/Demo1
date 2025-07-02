/**
 * ScrollReveal Component
 * Wraps content with scroll-triggered animations
 * Supports multiple animation directions and customizable properties
 */
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Variants, Transition } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  distance?: number
  duration?: number
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  className?: string
  staggerChildren?: number
  opacity?: {
    hidden: number
    visible: number
  }
}

export default function ScrollReveal({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  staggerChildren = 0,
  opacity = { hidden: 0, visible: 1 }
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollReveal({
    threshold,
    triggerOnce,
    delay
  })

  // Define animation variants based on direction
  const getAnimationVariants = (): Variants => {
    const baseTransition: Transition = {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier curve
    }

    const staggerTransition: Transition = staggerChildren > 0 ? {
      ...baseTransition,
      staggerChildren,
      when: "beforeChildren"
    } : baseTransition

    switch (direction) {
      case 'up':
        return {
          hidden: {
            opacity: opacity.hidden,
            y: distance,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            y: 0,
            transition: staggerTransition
          }
        }
      case 'down':
        return {
          hidden: {
            opacity: opacity.hidden,
            y: -distance,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            y: 0,
            transition: staggerTransition
          }
        }
      case 'left':
        return {
          hidden: {
            opacity: opacity.hidden,
            x: distance,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            x: 0,
            transition: staggerTransition
          }
        }
      case 'right':
        return {
          hidden: {
            opacity: opacity.hidden,
            x: -distance,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            x: 0,
            transition: staggerTransition
          }
        }
      case 'scale':
        return {
          hidden: {
            opacity: opacity.hidden,
            scale: 0.8,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            scale: 1,
            transition: staggerTransition
          }
        }
      case 'fade':
      default:
        return {
          hidden: {
            opacity: opacity.hidden,
            transition: baseTransition
          },
          visible: {
            opacity: opacity.visible,
            transition: staggerTransition
          }
        }
    }
  }

  return (
    <motion.div
      ref={elementRef}
      className={className}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}