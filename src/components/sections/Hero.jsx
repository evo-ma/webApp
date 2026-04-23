import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, CheckCircle2, Phone, TrendingUp, Users, Clock, Activity } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative z-10 min-h-screen flex items-center pt-20 pb-16 px-5 md:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="badge mb-7 inline-flex">
                <span className="badge-dot" />
                {t('home.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-white">{t('home.title1')}</span>
              <span className="block text-gradient">{t('home.title2')}</span>
              <span className="block text-white/85">{t('home.title3')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-white/45 text-lg leading-relaxed max-w-[480px] mb-10"
            >
              {t('home.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-10">
              <Link to="/demo" className="btn-primary text-base px-7 py-3.5">
                <Calendar size={17} />
                {t('home.cta_demo')}
              </Link>
              <Link to="/solutions" className="btn-secondary text-base px-7 py-3.5">
                {t('home.cta_solutions')}
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                t('home.trust1'),
                t('home.trust2'),
                t('home.trust3'),
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-white/35">
                  <CheckCircle2 size={13} className="text-orange flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardCard t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard({ t }) {
  const agents = [
    { initials: 'SA', name: 'Sara Alami',    task: 'Support client',    status: 'online', color: 'from-orange to-orange-700' },
    { initials: 'KN', name: 'Karim Naciri',  task: 'Appel entrant',     status: 'busy',   color: 'from-navy to-navy-800' },
    { initials: 'LB', name: 'Layla Benchaa', task: 'Après-appel',       status: 'wrap',   color: 'from-violet-500 to-violet-700' },
  ]

  const statusStyle = {
    online: 'bg-green-500/15 text-green-400 border border-green-500/20',
    busy:   'bg-orange/15 text-orange-300 border border-orange/20',
    wrap:   'bg-violet-500/15 text-violet-300 border border-violet-500/20',
  }
  const statusLabel = { online: 'En ligne', busy: 'En appel', wrap: 'Post-appel' }

  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-gradient-radial from-orange/10 to-transparent rounded-3xl blur-xl pointer-events-none" />

      <div className="relative card shimmer-line p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-bold text-white/35 tracking-widest uppercase">
            Contact Center — Live
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-green-400 bg-green-500/10 border border-green-500/15 rounded-full px-2.5 py-1">
            <span className="live-dot" />
            Live
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { icon: Phone,     value: '247',  label: 'Appels actifs',   color: 'text-orange' },
            { icon: TrendingUp,value: '98.2%',label: 'Taux résolution', color: 'text-green-400' },
            { icon: Clock,     value: '1m 24s',label: 'Temps moyen',   color: 'text-violet-400' },
            { icon: Users,     value: '18',   label: 'Agents en ligne', color: 'text-sky-400' },
          ].map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
              <div className={`font-display font-bold text-2xl ${color} leading-none mb-1`}>{value}</div>
              <div className="text-[11px] text-white/30">{label}</div>
            </div>
          ))}
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-[3px] h-8 mb-5 px-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-full bg-orange"
              style={{ opacity: 0.15 + Math.random() * 0.6 }}
              animate={{ height: [
                `${20 + Math.random() * 60}%`,
                `${20 + Math.random() * 80}%`,
                `${20 + Math.random() * 50}%`,
              ]}}
              transition={{
                duration: 0.8 + Math.random() * 0.8,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: i * 0.04,
              }}
            />
          ))}
        </div>

        {/* Agent list */}
        <div className="space-y-2">
          {agents.map(({ initials, name, task, status, color }) => (
            <div key={name} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] rounded-xl px-3 py-2.5">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}>
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white/80 truncate">{name}</div>
                <div className="text-[11px] text-white/30 truncate">{task}</div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusStyle[status]}`}>
                {statusLabel[status]}
              </span>
            </div>
          ))}
        </div>

        {/* AI insight chip */}
        <div className="mt-4 flex items-center gap-2 bg-orange/5 border border-orange/15 rounded-xl px-3 py-2.5">
          <Activity size={13} className="text-orange flex-shrink-0" />
          <span className="text-[11px] text-white/50">
            <span className="text-orange font-semibold">IA :</span> Pic d'appels détecté — 3 agents supplémentaires recommandés
          </span>
        </div>
      </div>
    </div>
  )
}
