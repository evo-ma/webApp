import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import { useStars } from '@/hooks/useStars'

export default function Layout() {
  const location = useLocation()
  useStars()

  return (
    <>
      <canvas id="stars-canvas" aria-hidden="true" />

      <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="nebula w-[min(600px,100vw)] h-[min(600px,100vw)] bg-gradient-radial from-orange/6 to-transparent top-[-200px] right-[-200px]" />
        <div className="nebula w-[min(500px,80vw)] h-[min(500px,80vw)] bg-gradient-radial from-navy/20 to-transparent bottom-0 left-[-150px]" />
        <div className="nebula w-[min(400px,70vw)] h-[min(400px,70vw)] bg-gradient-radial from-orange/4 to-transparent top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onAnimationStart={() => window.scrollTo(0, 0)}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}
