import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight,
  Headphones, PhoneForwarded, LayoutDashboard, Mic,
  Monitor, Users, FileText, BarChart3,
} from 'lucide-react'
import { TELEPHONY as SOLUTIONS } from '@/lib/utils'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'

const ICONS = { Headphones, PhoneForwarded, LayoutDashboard, Mic, Monitor, Users, FileText, BarChart3 }

export default function SolutionsGrid() {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container-xl">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-14">
          <div className="section-tag">{t('nav.solutions')}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
            {t('home.solutions_title')}
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            {t('home.solutions_sub')}
          </p>
        </FadeIn>

        {/* Grid */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {SOLUTIONS.map(({ key, path, icon }) => {
            const Icon = ICONS[icon]
            return (
              <FadeInItem key={key}>
                <Link
                  to={path}
                  className="group flex flex-col h-full bg-dark p-5 sm:p-8 hover:bg-orange/[0.03] transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="feat-icon group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-300">
                    {Icon && <Icon size={18} />}
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {t(`solutions.${key}.name`)}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed flex-1 mb-4">
                    {t(`solutions.${key}.short`)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange/60 group-hover:text-orange group-hover:gap-2 transition-all duration-200">
                    {t('common.learn_more')}
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </div>
    </section>
  )
}
