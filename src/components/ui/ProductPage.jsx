import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Calendar, ArrowRight,
  Search, Settings, Rocket } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { useSEO } from '@/hooks/useSEO'

const STEPS_KEYS = [
  { key: 'common.step_audit',    icon: Search  },
  { key: 'common.step_config',   icon: Settings },
  { key: 'common.step_training', icon: Rocket   },
]

/**
 * ProductPage — generic template for all solutions & AI product pages.
 *
 * Props:
 *   nameKey      — i18n key for the product name        e.g. "solutions.contact_centre.name"
 *   descKey      — i18n key for the long description    e.g. "solutions.contact_centre.desc"
 *   shortKey     — i18n key for short tagline           e.g. "solutions.contact_centre.short"
 *   icon         — Lucide icon component
 *   features     — array of { icon, title, desc } (already translated strings or i18n keys)
 *   useCases     — array of strings
 *   backTo       — path for "back" breadcrumb           e.g. "/solutions"
 *   backLabel    — label for back link                  e.g. "Solutions"
 *   accentColor  — tailwind color name for theming      e.g. "orange" | "violet" | "sky"
 *   heroCard     — optional JSX to render in hero right col (custom mock UI)
 */
export default function ProductPage({
  nameKey,
  descKey,
  shortKey,
  icon: Icon,
  features = [],
  useCases = [],
  backTo = '/',
  backLabel = 'Accueil',
  accentColor = 'orange',
  heroCard,
}) {
  const { t } = useTranslation()

  const name  = t(nameKey)
  const desc  = t(descKey)
  const short = t(shortKey)

  useSEO(name, `${desc} — ${short} | EVO Technologies`)

  const ACCENT = {
  orange: {
    glow:  'from-orange/8',
    badge: 'bg-orange/10 border-orange/25 text-orange',
    dot:   'bg-orange',
    tag:   'text-orange',
    icon:  'bg-orange/5 border-orange/20 text-orange',
    num:   'bg-orange/10 border-orange/25 text-orange',
    step:  'from-orange/30',
  },
  violet: {
    glow:  'from-violet-500/8',
    badge: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
    dot:   'bg-violet-400',
    tag:   'text-violet-400',
    icon:  'bg-violet-500/5 border-violet-500/20 text-violet-400',
    num:   'bg-violet-500/10 border-violet-500/25 text-violet-400',
    step:  'from-violet-500/30',
  },
  sky: {
    glow:  'from-sky-500/8',
    badge: 'bg-sky-500/10 border-sky-500/25 text-sky-400',
    dot:   'bg-sky-400',
    tag:   'text-sky-400',
    icon:  'bg-sky-500/5 border-sky-500/20 text-sky-400',
    num:   'bg-sky-500/10 border-sky-500/25 text-sky-400',
    step:  'from-sky-500/30',
  },
  emerald: {
    glow:  'from-emerald-500/8',
    badge: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
    dot:   'bg-emerald-400',
    tag:   'text-emerald-400',
    icon:  'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
    num:   'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
    step:  'from-emerald-500/30',
  },
}

const ac = ACCENT[accentColor] ?? ACCENT.orange

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative z-10 pt-28 pb-20 px-5 md:px-10">
        {/* Glow */}
        <div className={`absolute inset-0 bg-gradient-radial ${ac.glow} to-transparent pointer-events-none`} />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              {backLabel}
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className={`badge mb-6 inline-flex ${ac.badge}`}>
                  <span className={`badge-dot ${ac.dot}`} />
                  EVO — {backLabel}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center flex-shrink-0 ${ac.icon}`}>
                  {Icon && <Icon size={26} />}
                </div>
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight">
                  {name}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-white/45 text-lg leading-relaxed max-w-lg mb-4"
              >
                {desc}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white/30 text-base leading-relaxed max-w-md mb-10"
              >
                {short}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/demo" className="btn-primary">
                  <Calendar size={16} />
                  {t('common.request_demo')}
                </Link>
                <Link to="/contact" className="btn-secondary">
                  {t('common.request_quote')}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>

            {/* Right — custom hero card or default placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroCard ?? <DefaultHeroCard name={name} Icon={Icon} ac={ac} />}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {features.length > 0 && (
        <section className="section border-t border-white/[0.04]">
          <div className="container-xl">
            <div className="section-tag" style={{ color: 'var(--orange)' }}>
              {t('common.features')}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-12 max-w-2xl leading-tight tracking-tight">
              Tout ce dont vous avez besoin
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon: FIcon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="card p-7 group hover:border-white/10 transition-all duration-300"
                >
                  <div className={`feat-icon group-hover:scale-110 transition-transform duration-300 ${ac.icon}`}>
                    {FIcon && <FIcon size={17} />}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── USE CASES ── */}
      {useCases.length > 0 && (
        <section className="section border-t border-white/[0.04]">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className={`section-tag ${ac.tag}`}>{t('common.use_cases')}</div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight tracking-tight">
                  Idéal pour
                </h2>
                <p className="text-white/40 leading-relaxed">
                  {name} s'adapte à tous les secteurs d'activité et toutes les tailles d'entreprise.
                </p>
              </div>
              <ul className="space-y-3">
                {useCases.map((uc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/60 leading-relaxed">{uc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── DEPLOYMENT ── */}
      <section className="section border-t border-white/[0.04] bg-white/[0.01]">
        <div className="container-xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="section-tag justify-center">{t('common.deployment')}</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight tracking-tight">
              {t('home.deploy_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {STEPS_KEYS.map(({ key, icon: SIcon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mx-auto mb-4 ${ac.num}`}>
                  <span className="font-display font-bold text-sm">0{i + 1}</span>
                </div>
                <SIcon size={20} className="text-white/20 mx-auto mb-3" />
                <h3 className="font-display font-semibold text-sm text-white">{t(key)}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

/* Default hero card when no custom one is provided */
function DefaultHeroCard({ name, Icon, ac }) {
  return (
    <div className="relative">
      <div className={`absolute -inset-4 bg-gradient-radial ${ac.glow} to-transparent rounded-3xl blur-xl pointer-events-none`} />
      <div className="relative card shimmer-line p-8 flex flex-col items-center justify-center min-h-64 text-center gap-4">
        <div className={`w-20 h-20 rounded-3xl border-2 flex items-center justify-center ${ac.icon}`}>
          {Icon && <Icon size={36} />}
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-white mb-1">{name}</h3>
          <p className="text-sm text-white/30">EVO Technologies</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/15 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Actif & opérationnel
        </div>
      </div>
    </div>
  )
}
