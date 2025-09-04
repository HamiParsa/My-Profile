'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export default function ScrollAppearNoJump({
  children,
  delay = 0,
  duration = 0.6,
}: Props) {
  // Reference to the wrapper element
  const ref = useRef<HTMLDivElement>(null)

  // State to track if the element is visible in the viewport
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current
      if (!el || visible) return // Exit if no element or already visible

      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if element is within 90% of viewport height
      if (rect.top < windowHeight * 0.9) {
        setVisible(true)
      }
    }

    // Run check once on mount
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  return (
    <motion.div
      ref={ref}
      style={{ position: 'relative', willChange: 'transform, opacity' }}
      initial={{ opacity: 0, y: 40 }} // Start hidden and slightly below
      animate={visible ? { opacity: 1, y: 0 } : {}} // Animate in when visible
      transition={{ duration, delay, ease: 'easeOut' }} // Smooth animation
    >
      {children}
    </motion.div>
  )
}
