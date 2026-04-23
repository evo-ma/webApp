import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Calendar } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

const PLANS = [
  {
    name: 'Essentiel',
    desc: 'Pour les PME qui veulent démarrer avec Teams',
    price: 'Sur devis',
    highlight: false,
    features: [
      'Auto Attendant',
      'Enregistrement d\'appels (90 jours)',
      'Contact Manager (sync AD)',
      'Rapports basiques',
      'Support 8h–18h (j. ouvrés)',
      'Déploiement assisté',
    ],
  },
  {
    name: 'Business',
    desc: 'Pour les équipes avec besoins avancés',
    price: 'Sur devis',
    highlight: true,
    badge: 'Le plus populaire',
    features: [
      'Tout Essentiel, plus :',
      'Contact Center complet',
      'Console Opérateur',
      'Enregistrement appels & écran',
      'Call Analytics avancé',
      'FAX Digital',
      '1 Agent IA Vocal (2 000 min/mois)',
      'Support 24/7',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'Pour les grands comptes et déploiements complexes',
    price: 'Sur devis',
    highlight: false,
    features: [
      'Tout Business, plus :',
      'Suite IA complète (Voice + Digital + Receptionist)',
      'AI Call Analytics illimité',
      'SLA garanti 99.9%',
      'Intégration CRM/ERP sur mesure',
      'Account manager dédié',
      'Formation sur site incluse',
      'On-Premises ou Azure privé',
    ],
  },
]

export default function PricingPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 pt-28 pb-20 px-5 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-tag justify-center">{t('nav.pricing')}</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-5 leading-tight tracking-tight">
              Tarifs transparents,<br />
              <span className="text-gradient">valeur réelle</span>
            </h1>
            <p className="text-white/40 text-lg leading-relaxed">
              Toutes nos offres sont construites sur mesure selon votre nombre d'utilisateurs,
              vos modules et votre infrastructure. Contactez-nous pour un devis personnalisé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section pt-0">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map(({ name, desc, price, highlight, badge, features }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative card p-8 flex flex-col ${
                  highlight
                    ? 'border-orange/30 bg-gradient-to-b from-orange/5 to-transparent'
                    : ''
                }`}
              >
                {highlight && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
                )}
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-orange text-white px-3 py-1 rounded-full">
                    {badge}
                  </span>
                )}

                <h3 className="font-display font-bold text-xl text-white mb-2">{name}</h3>
                <p className="text-sm text-white/40 mb-6 leading-relaxed">{desc}</p>

                <div className="mb-8">
                  <span className="font-display font-bold text-3xl text-white">{price}</span>
                  <span className="text-sm text-white/30 ml-2">/ par utilisateur</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${highlight ? 'text-orange' : 'text-white/30'}`} />
                      <span className={`text-sm leading-relaxed ${fi === 0 && f.includes('Tout') ? 'text-white/50 italic' : 'text-white/60'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/demo"
                  className={highlight ? 'btn-primary justify-center' : 'btn-secondary justify-center'}
                >
                  <Calendar size={15} />
                  {t('common.request_demo')}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* FAQ note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <p className="text-sm text-white/30 mb-4">
              Des questions sur les tarifs ? Appelez-nous directement.
            </p>
            <a
              href="tel:+212520999721"
              className="inline-flex items-center gap-2 text-orange hover:text-orange-400 font-semibold transition-colors"
            >
              <Phone size={16} />
              {t('common.phone')}
            </a>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
