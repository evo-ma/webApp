import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'

function useCounter(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

function StatItem({ value, suffix, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(value, 1800, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-6 py-8 border-r border-white/[0.06] last:border-r-0"
    >
      <div className="stat-num mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/35 tracking-wide">{label}</div>
    </motion.div>
  )
}

export default function StatsStrip() {
  const { t } = useTranslation()

  const stats = [
    { value: 500,  suffix: '+',  label: t('home.stats.clients'),  delay: 0    },
    { value: 99,   suffix: '.9%',label: t('home.stats.uptime'),   delay: 0.1  },
    { value: 2,    suffix: 'M+', label: t('home.stats.calls'),    delay: 0.2  },
    { value: 24,   suffix: '/7', label: t('home.stats.support'),  delay: 0.3  },
  ]

  return (
    <section className="relative z-10 px-5 md:px-10 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
