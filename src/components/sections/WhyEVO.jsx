import { useTranslation } from 'react-i18next'
import { Shield, Zap, Globe, Headset, Cloud, GitMerge } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'

const WHY_KEYS = [
  { icon: GitMerge, key: 'teams'    },
  { icon: Zap,      key: 'speed'    },
  { icon: Globe,    key: 'lang'     },
  { icon: Headset,  key: 'support'  },
  { icon: Cloud,    key: 'deploy'   },
  { icon: Shield,   key: 'security' },
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
          {WHY_KEYS.map(({ icon: Icon, key }) => (
            <FadeInItem key={key}>
              <div className="card card-hover p-7 group h-full">
                <div className="feat-icon group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-300 mb-5">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2.5">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed">
                  {t(`why.${key}.desc`)}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
