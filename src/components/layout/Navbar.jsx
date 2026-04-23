import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ChevronDown,
  Headphones, PhoneForwarded, LayoutDashboard, Mic,
  Monitor, Users, FileText, BarChart3,
  Bot, MessageSquare, UserCheck, Sparkles,
  Globe2, Layers, Calendar, ArrowRight,
} from 'lucide-react'
import { cn, TELEPHONY, AI_PRODUCTS, SOLUTIONS_EVO, LANGUAGES } from '@/lib/utils'

const TEL_ICONS = { Headphones, PhoneForwarded, LayoutDashboard, Mic, Monitor, Users, FileText, BarChart3 }
const AI_ICONS = { Bot, MessageSquare, UserCheck, Sparkles }
const SOL_ICONS = { Globe2, Layers }

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [langOpen, setLangOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveMenu(null) }, [location.pathname])
  useEffect(() => { document.body.classList.toggle('nav-open', mobileOpen) }, [mobileOpen])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null); setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  const changeLanguage = (code) => {
    const lang = LANGUAGES.find(l => l.code === code)
    i18n.changeLanguage(code)
    document.documentElement.dir = lang.dir
    document.documentElement.lang = code
    setLangOpen(false)
  }

  const isActive = (path) => location.pathname.startsWith(path)
  const toggle = (menu) => setActiveMenu(activeMenu === menu ? null : menu)

  return (
    <header
      ref={menuRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden',
        scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 overflow-x-hidden">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img src="/logo.avif" alt="EVO Technologies" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              onError={e => { e.target.src = '/logo.png' }} />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <NavDropdownBtn label={t('nav.produits')} active={isActive('/produits') || activeMenu === 'produits'} open={activeMenu === 'produits'} onClick={() => toggle('produits')} />
            <NavDropdownBtn label={t('nav.solutions')} active={isActive('/solutions') || activeMenu === 'solutions'} open={activeMenu === 'solutions'} onClick={() => toggle('solutions')} />
            {[
              { to: '/pricing', label: t('nav.pricing') },
              { to: '/about', label: t('nav.about') },
              { to: '/contact', label: t('nav.contact') },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className={cn('px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200', location.pathname === to ? 'text-white bg-white/5' : 'text-white/55 hover:text-white hover:bg-white/5')}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all duration-200">
                {currentLang.label}
                <ChevronDown size={12} className={cn('transition-transform duration-200', langOpen && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-32 bg-dark-card border border-white/10 rounded-xl overflow-hidden shadow-xl z-50">
                    {LANGUAGES.map(lang => (
                      <button key={lang.code} onClick={() => changeLanguage(lang.code)}
                        className={cn('w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-150',
                          i18n.language === lang.code ? 'text-orange bg-orange/10' : 'text-white/60 hover:text-white hover:bg-white/5')}>
                        <span className="font-semibold text-xs w-5">{lang.label}</span>
                        <span className="text-xs">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/demo" className="btn-primary text-sm py-2 px-4">
              <Calendar size={14} /> {t('nav.demo')}
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
            className="hidden lg:block border-t border-white/[0.06] bg-dark/95 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-10 py-8">

              {activeMenu === 'produits' && (
                <div className="flex gap-0">
                  <div className="flex-[3] pr-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold text-white/30 tracking-[0.18em] uppercase">{t('nav.telephony')}</span>
                      <span className="flex-1 h-px bg-white/[0.06]" />
                      <Link to="/produits" className="text-[10px] text-orange/60 hover:text-orange transition-colors font-medium">
                        {t('nav_extra.see_all')} →
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      {TELEPHONY.map(({ key, path, icon }) => {
                        const Icon = TEL_ICONS[icon]
                        return <MegaItem key={key} to={path} Icon={Icon} title={t(`solutions.${key}.name`)} desc={t(`solutions.${key}.short`)} color="navy" />
                      })}
                    </div>
                  </div>
                  <div className="w-px bg-white/[0.06] self-stretch flex-shrink-0" />
                  <div className="flex-[2] pl-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold text-white/30 tracking-[0.18em] uppercase">{t('nav.ai')}</span>
                      <span className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {AI_PRODUCTS.map(({ key, path, icon }) => {
                        const Icon = AI_ICONS[icon]
                        return <MegaItem key={key} to={path} Icon={Icon} title={t(`ai.${key}.name`)} desc={t(`ai.${key}.short`)} color="orange" />
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeMenu === 'solutions' && (
                <div className="grid grid-cols-2 gap-5 max-w-2xl">
                  {SOLUTIONS_EVO.map(({ key, path, icon, coming }) => {
                    const Icon = SOL_ICONS[icon]
                    return (
                      <Link key={key} to={path}
                        className={cn('group relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200',
                          coming ? 'border-white/[0.06] bg-white/[0.02] opacity-60 cursor-default pointer-events-none'
                            : 'border-orange/20 bg-orange/[0.03] hover:bg-orange/[0.06] hover:border-orange/35')}>
                        {!coming && <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-orange/50 to-transparent" />}
                        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border',
                          coming ? 'bg-white/[0.04] border-white/10 text-white/30' : 'bg-orange/10 border-orange/25 text-orange group-hover:bg-orange/15')}>
                          {Icon && <Icon size={20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-display font-bold text-base text-white">{t(`evo_solutions.${key}.name`)}</span>
                            <span className={cn('text-[9px] font-bold tracking-widest uppercase rounded-full px-2 py-0.5 border',
                              coming ? 'bg-white/[0.07] text-white/40 border-white/10' : 'bg-orange/15 text-orange border-orange/25')}>
                              {t(`evo_solutions.${key}.badge`)}
                            </span>
                          </div>
                          <p className="text-xs text-white/40 leading-relaxed">{t(`evo_solutions.${key}.short`)}</p>
                          {!coming && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange/60 group-hover:text-orange group-hover:gap-1.5 transition-all duration-200 mt-2">
                              {t('common.learn_more')} <ArrowRight size={11} />
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark/98 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden w-full">
            <div className="px-5 py-6 space-y-1">
              <MobileSection title={t('nav.produits')}>
                <div className="pl-1 pt-1">
                  <div className="text-[10px] font-bold text-white/25 tracking-widest uppercase px-3 py-1">{t('nav.telephony')}</div>
                  {TELEPHONY.map(({ key, path, icon }) => {
                    const Icon = TEL_ICONS[icon]
                    return (
                      <Link key={key} to={path} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group">
                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-navy/30 text-orange/70 group-hover:text-orange flex-shrink-0">{Icon && <Icon size={13} />}</div>
                        <span className="text-sm text-white/60 group-hover:text-white">{t(`solutions.${key}.name`)}</span>
                      </Link>
                    )
                  })}
                  <div className="text-[10px] font-bold text-white/25 tracking-widest uppercase px-3 py-1 mt-2">{t('nav.ai')}</div>
                  {AI_PRODUCTS.map(({ key, path, icon }) => {
                    const Icon = AI_ICONS[icon]
                    return (
                      <Link key={key} to={path} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange/5 transition-colors group">
                        <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-orange/5 border border-orange/15 text-orange/70 group-hover:text-orange flex-shrink-0">{Icon && <Icon size={13} />}</div>
                        <span className="text-sm text-white/60 group-hover:text-white">{t(`ai.${key}.name`)}</span>
                      </Link>
                    )
                  })}
                </div>
              </MobileSection>

              <MobileSection title={t('nav.solutions')}>
                <div className="pl-1 pt-1 space-y-1">
                  {SOLUTIONS_EVO.map(({ key, path, coming }) => (
                    <Link key={key} to={path} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg transition-colors', coming ? 'opacity-50 pointer-events-none' : 'hover:bg-orange/5')}>
                      <span className="text-sm text-white/60">{t(`evo_solutions.${key}.name`)}</span>
                      {coming && <span className="text-[9px] text-white/30 border border-white/10 rounded-full px-2 py-0.5 font-bold tracking-widest uppercase">{t(`evo_solutions.${key}.badge`)}</span>}
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <div className="pt-2 border-t border-white/[0.06] space-y-1">
                {[
                  { to: '/pricing', label: t('nav.pricing') },
                  { to: '/about', label: t('nav.about') },
                  { to: '/contact', label: t('nav.contact') },
                ].map(({ to, label }) => (
                  <Link key={to} to={to} className="block px-3 py-2.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors">{label}</Link>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-2">
                {LANGUAGES.map(lang => (
                  <button key={lang.code} onClick={() => changeLanguage(lang.code)}
                    className={cn('px-3 py-1.5 rounded-lg text-xs font-bold border transition-all',
                      i18n.language === lang.code ? 'border-orange text-orange bg-orange/10' : 'border-white/10 text-white/40 hover:text-white hover:border-white/20')}>
                    {lang.label}
                  </button>
                ))}
                <Link to="/demo" className="btn-primary ml-auto text-xs py-2 px-4">
                  <Calendar size={13} /> {t('nav.demo')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavDropdownBtn({ label, active, open, onClick }) {
  return (
    <button onClick={onClick} className={cn('flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200', active ? 'text-white bg-white/5' : 'text-white/55 hover:text-white hover:bg-white/5')}>
      {label}
      <ChevronDown size={14} className={cn('transition-transform duration-200', open && 'rotate-180')} />
    </button>
  )
}

function MegaItem({ to, Icon, title, desc, color }) {
  return (
    <Link to={to} className={cn('group flex items-start gap-3 p-3 rounded-xl border border-transparent transition-all duration-200',
      color === 'orange' ? 'hover:bg-orange/[0.04] hover:border-orange/15' : 'hover:bg-white/[0.04] hover:border-white/[0.08]')}>
      <div className={cn('w-8 h-8 flex items-center justify-center rounded-lg border flex-shrink-0 transition-all duration-200',
        color === 'orange'
          ? 'bg-orange/5 border-orange/15 text-orange/70 group-hover:text-orange group-hover:bg-orange/10 group-hover:border-orange/25'
          : 'bg-navy/30 border-navy/50 text-white/40 group-hover:text-orange group-hover:bg-orange/8 group-hover:border-orange/20')}>
        {Icon && <Icon size={14} />}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors mb-0.5 truncate">{title}</div>
        <div className="text-[11px] text-white/30 leading-snug line-clamp-2">{desc}</div>
      </div>
    </Link>
  )
}

function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
        {title}
        <ChevronDown size={14} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
