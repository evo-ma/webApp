import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Calendar } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import { useSEO } from '@/hooks/useSEO'

const PLAN_KEYS = ['essential', 'business', 'enterprise']
const HIGHLIGHTS = [false, true, false]

export default function PricingPage() {
  const { t } = useTranslation()
  useSEO(t('nav.pricing'), '')

  return (
    <>
      <section className="relative z-10 pt-28 pb-20 px-5 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-tag justify-center">{t('nav.pricing')}</div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight tracking-tight">
              {t('pricing.title')}<br />
              <span className="text-gradient">{t('pricing.title2')}</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed">{t('pricing.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLAN_KEYS.map((planKey, i) => {
              const highlight = HIGHLIGHTS[i]
              const features = t(`pricing.plans.${planKey}.features`, { returnObjects: true })
              return (
                <motion.div key={planKey} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative card p-8 flex flex-col ${highlight ? 'border-orange/30 bg-gradient-to-b from-orange/5 to-transparent' : ''}`}>
                  {highlight && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />}
                  {highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-orange text-white px-3 py-1 rounded-full">
                      {t('pricing.most_popular')}
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl text-white mb-2">{t(`pricing.plans.${planKey}.name`)}</h3>
                  <p className="text-sm text-white/40 mb-6 leading-relaxed">{t(`pricing.plans.${planKey}.desc`)}</p>
                  <div className="mb-8">
                    <span className="font-display font-bold text-3xl text-white">{t('pricing.on_quote')}</span>
                    <span className="text-sm text-white/30 ml-2">{t('pricing.per_user')}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {Array.isArray(features) && features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${highlight ? 'text-orange' : 'text-white/30'}`} />
                        <span className={`text-sm leading-relaxed ${fi === 0 && String(f).includes('+') ? 'text-white/50 italic' : 'text-white/60'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/demo" className={highlight ? 'btn-primary justify-center' : 'btn-secondary justify-center'}>
                    <Calendar size={15} /> {t('common.request_demo')}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
            <p className="text-sm text-white/30 mb-4">{t('pricing.questions')}</p>
            <a href="tel:+212520999721" className="inline-flex items-center gap-2 text-orange hover:text-orange-400 font-semibold transition-colors">
              <Phone size={16} /> {t('common.phone')}
            </a>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
