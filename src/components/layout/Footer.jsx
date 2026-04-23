import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'
import { TELEPHONY as SOLUTIONS, AI_PRODUCTS, SOLUTIONS_EVO } from '@/lib/utils'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 bg-navy-950/80 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.avif" alt="EVO Technologies" className="h-10"
                onError={e => { e.target.src = '/logo.png' }} />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              {t('common.footer_desc')}
            </p>
            <p className="text-xs font-semibold text-orange/70 tracking-widest uppercase mb-6">
              {t('common.slogan')}
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a href="tel:+212520999721" className="flex items-center gap-2 text-sm text-white/40 hover:text-orange transition-colors">
                <Phone size={13} />
                {t('common.phone')}
              </a>
              <a href="mailto:contact@evo.ma" className="flex items-center gap-2 text-sm text-white/40 hover:text-orange transition-colors">
                <Mail size={13} />
                {t('common.email')}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin size={13} />
                Casablanca, Maroc
              </div>
            </div>
          </div>

          {/* Produits — Téléphonie */}
          <div>
            <h4 className="text-xs font-bold text-white/60 tracking-widest uppercase mb-5">
              {t('nav.produits')}
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className="text-sm text-white/35 hover:text-orange transition-colors">
                    {t(`solutions.${key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions — ECHO + Bayling */}
          <div>
            <h4 className="text-xs font-bold text-white/60 tracking-widest uppercase mb-5">
              {t('nav.solutions')}
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS_EVO.map(({ key, path, coming }) => (
                <li key={key} className="flex items-center gap-2">
                  <Link to={path} className={`text-sm transition-colors ${coming ? 'text-white/20 pointer-events-none' : 'text-white/35 hover:text-orange'}`}>
                    {t(`evo_solutions.${key}.name`)}
                  </Link>
                  {coming && <span className="text-[9px] font-bold tracking-widest uppercase border border-white/10 text-white/25 rounded-full px-1.5 py-0.5">Soon</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div>
            <h4 className="text-xs font-bold text-white/60 tracking-widest uppercase mb-5">
              {t('nav.ai')}
            </h4>
            <ul className="space-y-2.5">
              {AI_PRODUCTS.map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className="text-sm text-white/35 hover:text-orange transition-colors">
                    {t(`ai.${key}.name`)}
                  </Link>
                </li>
              ))}
              <li><Link to="/pricing" className="text-sm text-white/35 hover:text-orange transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link to="/about"   className="text-sm text-white/35 hover:text-orange transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white/60 tracking-widest uppercase mb-5">
              Compagnie
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/about',   label: t('nav.about') },
                { to: '/blog',    label: 'Blog' },
                { to: '/partners',label: 'Partenaires' },
                { to: '/cases',   label: 'Cas clients' },
                { to: '/demo',    label: t('common.request_demo') },
                { to: '/contact', label: t('nav.contact') },
                { to: '/legal',   label: 'Mentions légales' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/35 hover:text-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            {t('common.footer_rights')}
          </p>
          <div className="flex items-center gap-1">
            {[
              { href: 'https://linkedin.com/company/evo-technologies-ma', Icon: Linkedin },
              { href: 'https://twitter.com/evo_ma',                       Icon: Twitter  },
              { href: 'https://youtube.com/@evo_ma',                      Icon: Youtube  },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-orange hover:bg-orange/10 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
