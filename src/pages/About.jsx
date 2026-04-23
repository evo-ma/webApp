import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GitMerge, Users, Globe, Award, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'
import { useSEO } from '@/hooks/useSEO'

const VALUE_KEYS = [
  { icon: GitMerge, key: 'teams'      },
  { icon: Globe,    key: 'morocco'    },
  { icon: Users,    key: 'team'       },
  { icon: Award,    key: 'excellence' },
]

export default function AboutPage() {
  const { t } = useTranslation()
  useSEO(t('nav.about'), '')

  return (
    <>
      <section className="relative z-10 pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">

          <FadeIn className="max-w-3xl mb-20">
            <div className="section-tag">{t('about.tag')}</div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight tracking-tight">
              {t('about.title1')}<br />
              <span className="text-gradient">{t('about.title2')}</span><br />
              {t('about.title3')}
            </h1>
            <p className="text-white/45 text-lg leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-white/35 text-base leading-relaxed">
              {t('about.p2')}{' '}
              <span className="text-white/60 font-medium">"{t('about.slogan_inline')}"</span>
            </p>
          </FadeIn>

          {/* Values */}
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {VALUE_KEYS.map(({ icon: Icon, key }) => (
              <FadeInItem key={key}>
                <div className="card card-hover p-7 group h-full">
                  <div className="feat-icon mb-5 group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {t(`about.values.${key}.title`)}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {t(`about.values.${key}.desc`)}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Partners */}
          <FadeIn className="text-center">
            <p className="text-xs text-white/25 uppercase tracking-widest mb-6">
              {t('about.partners_label')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['Microsoft', 'Azure', 'Genesys', 'Cisco', 'Teams'].map(partner => (
                <div key={partner} className="text-white/20 font-display font-bold text-lg tracking-wider">
                  {partner}
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>
      <CTABanner />
    </>
  )
}

// ── Placeholder pages ─────────────────────────────────────────────────────────

function PlaceholderPage({ titleKey, descKey, emoji = '🚧' }) {
  const { t } = useTranslation()
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">{emoji}</div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">{t(titleKey)}</h1>
        <p className="text-white/40 mb-8">{t(descKey)}</p>
        <Link to="/" className="btn-primary justify-center">
          {t('common.back_home')} <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

export function BlogPage() {
  return <PlaceholderPage emoji="📝" titleKey="pages.blog_title" descKey="pages.blog_desc" />
}
export function PartnersPage() {
  return <PlaceholderPage emoji="🤝" titleKey="pages.partners_title" descKey="pages.partners_desc" />
}
export function CasesPage() {
  return <PlaceholderPage emoji="⭐" titleKey="pages.cases_title" descKey="pages.cases_desc" />
}
export function LegalPage() {
  return <PlaceholderPage emoji="⚖️" titleKey="pages.legal_title" descKey="pages.legal_desc" />
}
export function NotFoundPage() {
  return <PlaceholderPage emoji="404" titleKey="pages.notfound_title" descKey="pages.notfound_desc" />
}
