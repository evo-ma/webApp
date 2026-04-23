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
      {/* Animated star canvas - fixed behind everything */}
      <canvas id="stars-canvas" aria-hidden="true" />

      {/* Global nebula blobs */}
      <div aria-hidden="true">
        <div className="nebula w-[600px] h-[600px] bg-gradient-radial from-orange/6 to-transparent top-[-200px] right-[-200px]" />
        <div className="nebula w-[500px] h-[500px] bg-gradient-radial from-navy/20 to-transparent bottom-0 left-[-150px]" />
        <div className="nebula w-[400px] h-[400px] bg-gradient-radial from-orange/4 to-transparent top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}
