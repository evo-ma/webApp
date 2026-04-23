import { useTranslation } from 'react-i18next'
import { Search, Settings, Rocket, Cloud, Server, Headset, Globe } from 'lucide-react'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'

const STEPS = [
  { icon: Search,   num: '01', titleKey: 'common.step_audit',    descKey: 'deploy.step1_desc' },
  { icon: Settings, num: '02', titleKey: 'common.step_config',   descKey: 'deploy.step2_desc' },
  { icon: Rocket,   num: '03', titleKey: 'common.step_training', descKey: 'deploy.step3_desc' },
]

const OPTIONS = [
  { icon: Cloud,   key: 'saas',       descKey: 'deploy.saas_desc'     },
  { icon: Server,  key: 'onprem',     descKey: 'deploy.onprem_desc'   },
  { icon: Headset, key: 'support_247',descKey: 'deploy.support_desc'  },
  { icon: Globe,   key: 'multilang',  descKey: 'deploy.multilang_desc'},
]

export default function DeploymentSteps() {
  const { t } = useTranslation()

  return (
    <section className="section border-t border-white/[0.04] bg-white/[0.01]">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Steps */}
          <div>
            <FadeIn>
              <div className="section-tag">{t('common.deploy_72h')}</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
                {t('home.deploy_title')}
              </h2>
              <p className="text-white/40 text-lg mb-10">
                {t('home.deploy_sub')}
              </p>
            </FadeIn>

            <div className="space-y-0">
              {STEPS.map(({ icon: Icon, num, titleKey, descKey }, i) => (
                <FadeIn key={num} delay={i * 0.1}>
                  <div className="flex gap-5 relative pb-8 last:pb-0">
                    {i < STEPS.length - 1 && (
                      <div className="absolute left-[19px] top-11 bottom-0 w-px bg-gradient-to-b from-orange/30 to-transparent" />
                    )}
                    <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/25 flex items-center justify-center font-display font-bold text-sm text-orange flex-shrink-0 mt-1">
                      {num}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display font-semibold text-base text-white mb-1.5">
                        {t(titleKey)}
                      </h3>
                      <p className="text-sm text-white/35 leading-relaxed">{t(descKey)}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Options grid */}
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OPTIONS.map(({ icon: Icon, key, descKey }) => (
              <FadeInItem key={key}>
                <div className="card card-hover p-6 group h-full">
                  <Icon size={26} className="text-orange mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-display font-semibold text-sm text-white mb-1.5">{t(`common.${key}`)}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{t(descKey)}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
