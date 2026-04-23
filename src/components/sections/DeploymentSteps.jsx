import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, Settings, Rocket, Cloud, Server, Headset, Globe } from 'lucide-react'

const STEPS = [
  { icon: Search,   num: '01', titleKey: 'common.step_audit',    desc: 'Analyse de votre infrastructure Teams, vos flux actuels et vos besoins spécifiques.' },
  { icon: Settings, num: '02', titleKey: 'common.step_config',   desc: 'Intégration complète à votre environnement Microsoft, paramétrage des flux et IA.' },
  { icon: Rocket,   num: '03', titleKey: 'common.step_training', desc: 'Formation agents et superviseurs. Mise en production avec support EVO dédié 24/7.' },
]

const OPTIONS = [
  { icon: Cloud,           key: 'saas',       desc: 'Scalable automatiquement. Maintenance assurée par EVO.' },
  { icon: Server,          key: 'onprem',      desc: 'Contrôle total de votre infrastructure. Souveraineté des données.' },
  { icon: Headset,          key: 'support_247', desc: 'Équipe EVO Maroc disponible à toute heure.' },
  { icon: Globe,           key: 'multilang',   desc: 'Arabe, Français, Anglais, Darija selon vos besoins.' },
]

export default function DeploymentSteps() {
  const { t } = useTranslation()

  return (
    <section className="section border-t border-white/[0.04] bg-white/[0.01]">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Steps */}
          <div>
            <div className="section-tag">{t('common.deploy_72h')}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
              {t('home.deploy_title')}
            </h2>
            <p className="text-white/40 text-lg mb-10">
              {t('home.deploy_sub')}
            </p>

            <div className="space-y-0">
              {STEPS.map(({ icon: Icon, num, titleKey, desc }, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 relative pb-8 last:pb-0"
                >
                  {/* Vertical connector */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-11 bottom-0 w-px bg-gradient-to-b from-orange/30 to-transparent" />
                  )}

                  {/* Number circle */}
                  <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/25 flex items-center justify-center font-display font-bold text-sm text-orange flex-shrink-0 mt-1">
                    {num}
                  </div>

                  <div className="pt-1">
                    <h3 className="font-display font-semibold text-base text-white mb-1.5">
                      {t(titleKey)}
                    </h3>
                    <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-4">
            {OPTIONS.map(({ icon: Icon, key, desc }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card card-hover p-6 group"
              >
                <Icon size={26} className="text-orange mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-display font-semibold text-sm text-white mb-1.5">{t(`common.${key}`)}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
