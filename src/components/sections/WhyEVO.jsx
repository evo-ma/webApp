import { useTranslation } from 'react-i18next'
import { Shield, Zap, Globe, Headset, Cloud, GitMerge } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'

const WHY_ITEMS = [
  { icon: GitMerge,       key: 'teams',    title: 'Natif Microsoft Teams',     desc: 'Intégration certifiée Direct Routing & Operator Connect. Vos équipes restent dans l\'interface qu\'elles connaissent.' },
  { icon: Zap,            key: 'speed',    title: 'Déploiement en 72h',         desc: 'De l\'audit à la mise en production en 3 jours. Notre équipe gère l\'intégration complète.' },
  { icon: Globe,          key: 'lang',     title: '4 langues supportées',        desc: 'Arabe, Français, Darija et Anglais. Nos agents IA parlent la langue de vos clients.' },
  { icon: Headset, key: 'support',  title: 'Support 24/7',               desc: 'Équipe EVO Maroc disponible à toute heure. SLA garanti avec escalade dédiée.' },
  { icon: Cloud,          key: 'deploy',   title: 'SaaS ou On-Premises',        desc: 'Déployez dans le cloud Azure EVO ou sur votre infrastructure. Souveraineté des données garantie.' },
  { icon: Shield,         key: 'security', title: 'Conformité & Sécurité',      desc: 'Chiffrement end-to-end, enregistrement conforme RGPD, audit trail complet.' },
]

export default function WhyEVO() {
  const { t } = useTranslation()

  return (
    <section className="section border-t border-white/[0.04]">
      <div className="container-xl">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag justify-center">{t('home.why_title')}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
            La différence <span className="text-gradient">EVO</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            {t('home.why_sub')}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_ITEMS.map(({ icon: Icon, key, title, desc }) => (
            <FadeInItem key={key}>
              <div className="card card-hover p-7 group h-full">
                <div className="feat-icon group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-300 mb-5">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2.5">{title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
