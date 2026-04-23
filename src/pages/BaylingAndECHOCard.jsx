// ── BaylingPage ──────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Bell, Layers } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'

export function BaylingPage() {
  useSEO('ECHO Bayling — Bientôt', 'ECHO Bayling — la prochaine solution EVO Technologies. Bientôt disponible.')

  return (
    <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="absolute inset-0 bg-gradient-radial from-orange/5 to-transparent pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="text-center max-w-lg w-full relative z-10">

        {/* Icon */}
        <div className="w-20 h-20 rounded-3xl bg-orange/8 border border-orange/20 flex items-center justify-center mx-auto mb-8">
          <Layers size={36} className="text-orange" />
        </div>

        {/* Badge */}
        <span className="badge mb-6 inline-flex">
          <span className="badge-dot" />
          {t('bayling.badge')}
        </span>

        <h1 className="font-display font-black text-5xl md:text-6xl text-white tracking-tight mb-2">
          ECHO <span className="text-gradient">Bayling</span>
        </h1>
        <p className="text-white/30 text-sm tracking-widest uppercase mb-6">{t('bayling.subtitle')}</p>

        <p className="text-white/45 text-lg leading-relaxed mb-10">
          {t('bayling.desc')}
        </p>

        {/* Notify form placeholder */}
        <div className="card p-6 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={16} className="text-orange" />
            <span className="text-sm font-semibold text-white">Être notifié au lancement</span>
          </div>
          <div className="flex gap-2">
            <input type="email" placeholder="votre@email.com"
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange/40 transition-colors" />
            <button className="btn-primary py-2.5 px-5 text-sm whitespace-nowrap">
              Me notifier
            </button>
          </div>
          <p className="text-xs text-white/20 mt-2">{t('common.no_spam')}</p>
        </div>

        <Link to="/solutions/echo" className="btn-ghost text-sm">
          <ArrowLeft size={14} /> {t('bayling.see_echo')}
        </Link>
      </motion.div>
    </section>
  )
}


// ── ECHOCard — Homepage section ───────────────────────────────────────────────
import { useTranslation } from 'react-i18next'
import { ArrowRight, Calendar, Globe2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export function ECHOCard() {
  return (
    <section className="relative z-10 px-5 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="relative card overflow-hidden group">
            {/* Gradient glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-orange/15 via-transparent to-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start lg:items-center p-5 sm:p-8 md:p-10">
              <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start">
                {/* Logo mark */}
                <div className="w-16 h-16 rounded-2xl bg-orange/10 border border-orange/25 flex items-center justify-center flex-shrink-0">
                  <Globe2 size={28} className="text-orange" />
                </div>

                <div>
                  {/* Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-widest">
                      <span className="text-orange">E</span>
                      <span className="text-white/50">.</span>
                      <span className="text-white">C</span>
                      <span className="text-white/50">.</span>
                      <span className="text-orange">H</span>
                      <span className="text-white/50">.</span>
                      <span className="text-white">O</span>
                    </span>
                    <span className="text-[9px] font-bold tracking-widest uppercase bg-orange/15 border border-orange/25 text-orange px-2.5 py-1 rounded-full">
                      {t('echo.flagship')}
                    </span>
                  </div>

                  <p className="text-xs text-white/25 tracking-[0.25em] uppercase mb-3">
                    <span className="text-orange">É</span>cosystème ·{' '}
                    <span className="text-orange">C</span>ollaboratif ·{' '}
                    <span className="text-orange">H</span>ébergé ·{' '}
                    <span className="text-orange">O</span>péré
                  </p>

                  <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl">
                    {t('home.echo_card_desc')}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Microsoft Teams', 'AudioCodes SBC', 'ISO 27001', 't('echo.hosted_badge')].map(tag => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                        ['Microsoft Teams', 'AudioCodes SBC'].includes(tag)
                          ? 'bg-orange/10 border-orange/25 text-orange'
                          : 'bg-white/[0.04] border-white/[0.08] text-white/40'
                      }`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 flex-shrink-0 mt-2 lg:mt-0">
                <Link to="/solutions/echo" className="btn-primary whitespace-nowrap">
                  <ArrowRight size={15} /> {t('home.discover_echo')}
                </Link>
                <Link to="/demo" className="btn-secondary whitespace-nowrap">
                  <Calendar size={15} /> Démo
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
