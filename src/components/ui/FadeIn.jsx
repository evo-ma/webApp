import { motion } from 'framer-motion'

/**
 * FadeIn — wraps any content with a scroll-triggered fade+slide animation.
 *
 * Usage:
 *   <FadeIn>  — default fade up
 *   <FadeIn delay={0.2} direction="left">
 *   <FadeIn stagger> — when wrapping a list, children stagger automatically
 */

export default function FadeIn({
  children,
  delay    = 0,
  duration = 0.55,
  direction = 'up',   // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 24,
  once     = true,
  className,
  as: Tag  = 'div',
}) {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign = direction === 'down' || direction === 'right' ? -1 : 1
  const offset = direction === 'none' ? {} : { [axis]: sign * distance }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeInStagger — parent container that staggers children FadeIn animations.
 *
 * Usage:
 *   <FadeInStagger staggerDelay={0.08}>
 *     {items.map(item => <FadeInItem key={item.id}>...</FadeInItem>)}
 *   </FadeInStagger>
 */

export function FadeInStagger({ children, staggerDelay = 0.07, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({ children, className, direction = 'up', distance = 20 }) {
  const axis   = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign   = direction === 'down' || direction === 'right' ? -1 : 1
  const offset = direction === 'none' ? {} : { [axis]: sign * distance }

  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
