import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, FileText, Phone } from 'lucide-react'

export default function CTABanner() {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-navy-950 via-dark-card to-dark-card p-10 md:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-orange/8 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

          <div className="relative z-10">
            <div className="section-tag justify-center mb-5">
              {t('common.free_consultation')}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
              {t('home.cta_title')}
            </h2>
            <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {t('home.cta_sub')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link to="/demo" className="btn-primary">
                <Calendar size={16} />
                {t('common.request_demo')}
              </Link>
              <Link to="/contact" className="btn-secondary">
                <FileText size={16} />
                {t('common.request_quote')}
              </Link>
            </div>

            <a
              href="tel:+212520999721"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-orange transition-colors"
            >
              <Phone size={14} />
              {t('common.phone')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
