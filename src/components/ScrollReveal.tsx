import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
  distance?: number
  duration?: number
  delay?: number
  threshold?: number
  staggerChildren?: number
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  distance = 50, 
  duration = 0.8, 
  delay = 0, 
  threshold = 0.1,
  staggerChildren 
}: ScrollRevealProps) {
  const getVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: {
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
          ...(staggerChildren && { staggerChildren })
        }
      }
    }

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: { opacity: 0, y: distance },
          visible: { ...baseVariants.visible, opacity: 1, y: 0 }
        }
      case "down":
        return {
          ...baseVariants,
          hidden: { opacity: 0, y: -distance },
          visible: { ...baseVariants.visible, opacity: 1, y: 0 }
        }
      case "left":
        return {
          ...baseVariants,
          hidden: { opacity: 0, x: distance },
          visible: { ...baseVariants.visible, opacity: 1, x: 0 }
        }
      case "right":
        return {
          ...baseVariants,
          hidden: { opacity: 0, x: -distance },
          visible: { ...baseVariants.visible, opacity: 1, x: 0 }
        }
      case "scale":
        return {
          ...baseVariants,
          hidden: { opacity: 0, scale: 0.8 },
          visible: { ...baseVariants.visible, opacity: 1, scale: 1 }
        }
      case "fade":
      default:
        return {
          ...baseVariants,
          hidden: { opacity: 0 },
          visible: { ...baseVariants.visible, opacity: 1 }
        }
    }
  }

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}
