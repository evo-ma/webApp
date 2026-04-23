import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Sparkles, Bot, MessageSquare, UserCheck, Zap } from 'lucide-react'
import { AI_PRODUCTS } from '@/lib/utils'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'

const ICONS = { Bot, MessageSquare, UserCheck, Sparkles }

const CARD_COLORS = [
  { bg: 'from-orange/8 to-transparent',    border: 'border-orange/20',     icon: 'bg-orange/10 border-orange/25 text-orange' },
  { bg: 'from-violet-500/8 to-transparent', border: 'border-violet-500/20', icon: 'bg-violet-500/10 border-violet-500/25 text-violet-400' },
  { bg: 'from-sky-500/8 to-transparent',    border: 'border-sky-500/20',    icon: 'bg-sky-500/10 border-sky-500/25 text-sky-400' },
  { bg: 'from-emerald-500/8 to-transparent',border: 'border-emerald-500/20',icon: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' },
]

export default function AIShowcase() {
  const { t } = useTranslation()

  return (
    <section className="section border-t border-white/[0.04]">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <FadeIn className="lg:sticky lg:top-28 mb-8 lg:mb-0">
            <div className="section-tag">{t('nav.ai')}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5">
              {t('home.ai_title')}
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8">{t('home.ai_sub')}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['Arabe', 'Français', 'Darija', 'Anglais', 'Analyse sentiment', 'Résumés auto'].map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/40">{tag}</span>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 bg-orange/5 border border-orange/15 rounded-2xl px-5 py-4">
              <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0">
                <Zap size={18} className="text-orange" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-orange">92%</div>
                <div className="text-xs text-white/40">Taux de résolution automatique</div>
              </div>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_PRODUCTS.map(({ key, path, icon }, i) => {
              const Icon = ICONS[icon]
              const colors = CARD_COLORS[i]
              return (
                <FadeInItem key={key}>
                  <Link to={path} className={`group block card card-hover p-6 bg-gradient-to-br ${colors.bg} ${colors.border} h-full`}>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${colors.icon} transition-all duration-300`}>
                      {Icon && <Icon size={17} />}
                    </div>
                    <h3 className="font-display font-semibold text-base text-white mb-2">{t(`ai.${key}.name`)}</h3>
                    <p className="text-sm text-white/35 leading-relaxed mb-4">{t(`ai.${key}.short`)}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/30 group-hover:text-orange group-hover:gap-2 transition-all duration-200">
                      {t('common.learn_more')} <ArrowRight size={11} />
                    </span>
                  </Link>
                </FadeInItem>
              )
            })}
          </FadeInStagger>

        </div>
      </div>
    </section>
  )
}
