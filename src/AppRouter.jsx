import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/Home'
import PricingPage from '@/pages/Pricing'
import ContactPage from '@/pages/Contact'
import DemoPage from '@/pages/Demo'
import AboutPage, { BlogPage, PartnersPage, CasesPage, LegalPage, NotFoundPage } from '@/pages/About'
import ECHOPage from '@/pages/ECHOPage'
import { BaylingPage } from '@/pages/BaylingAndECHOCard'
import {
  ContactCentrePage, AutoAttendantPage, AttendantConsolePage,
  CallRecordingPage, ScreenRecordingPage, ContactManagerPage,
  DigitalFaxPage, CallAnalyticsPage,
  AIVoiceAgentPage, AIDigitalAgentPage, AIVirtualReceptionistPage, AIAnalyticsPage,
} from '@/pages/ProductPages'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { TELEPHONY, AI_PRODUCTS, SOLUTIONS_EVO } from '@/lib/utils'
import {
  Headphones, PhoneForwarded, LayoutDashboard, Mic,
  Monitor, Users, FileText, BarChart3,
  Bot, MessageSquare, UserCheck, Sparkles,
  Globe2, Layers,
} from 'lucide-react'

const TEL_ICONS = { Headphones, PhoneForwarded, LayoutDashboard, Mic, Monitor, Users, FileText, BarChart3 }
const AI_ICONS  = { Bot, MessageSquare, UserCheck, Sparkles }
const SOL_ICONS = { Globe2, Layers }

function ProduitsIndexPage() {
  const { t } = useTranslation()
  return (
    <section className="relative z-10 pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="section-tag">{t('nav.produits')}</div>
        <h1 className="font-display font-bold text-5xl text-white mb-4 leading-tight tracking-tight">
          {t('home.solutions_title')}
        </h1>
        <p className="text-white/40 text-lg mb-14 max-w-xl">{t('home.solutions_sub')}</p>

        <h2 className="font-display font-bold text-xl text-white/70 mb-4">{t('nav.telephony')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TELEPHONY.map(({ key, path, icon }) => {
            const Icon = TEL_ICONS[icon]
            return (
              <Link key={key} to={path} className="card card-hover p-6 group">
                <div className="feat-icon mb-4 group-hover:bg-orange/10 group-hover:border-orange/30 transition-all">{Icon && <Icon size={18}/>}</div>
                <h3 className="font-semibold text-sm text-white mb-1">{t(`solutions.${key}.name`)}</h3>
                <p className="text-xs text-white/35 mb-3">{t(`solutions.${key}.short`)}</p>
                <span className="text-xs text-orange/60 group-hover:text-orange flex items-center gap-1">{t('common.learn_more')}<ArrowRight size={11}/></span>
              </Link>
            )
          })}
        </div>

        <h2 className="font-display font-bold text-xl text-white/70 mb-4">{t('nav.ai')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {AI_PRODUCTS.map(({ key, path, icon }) => {
            const Icon = AI_ICONS[icon]
            return (
              <Link key={key} to={path} className="card card-hover p-8 group flex gap-5 items-start">
                <div className="w-12 h-12 rounded-2xl bg-orange/5 border border-orange/20 text-orange flex items-center justify-center flex-shrink-0 group-hover:bg-orange/10">{Icon && <Icon size={22}/>}</div>
                <div>
                  <h3 className="font-semibold text-base text-white mb-1.5">{t(`ai.${key}.name`)}</h3>
                  <p className="text-sm text-white/35 mb-3 leading-relaxed">{t(`ai.${key}.short`)}</p>
                  <span className="text-xs text-orange/60 group-hover:text-orange flex items-center gap-1">{t('common.learn_more')}<ArrowRight size={11}/></span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SolutionsIndexPage() {
  const { t } = useTranslation()
  return (
    <section className="relative z-10 pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="section-tag">{t('nav.solutions')}</div>
        <h1 className="font-display font-bold text-5xl text-white mb-4 leading-tight tracking-tight">Nos Solutions</h1>
        <p className="text-white/40 text-lg mb-14 max-w-xl">Des solutions complètes, hébergées et opérées par EVO au Maroc.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SOLUTIONS_EVO.map(({ key, path, icon, coming }) => {
            const Icon = SOL_ICONS[icon]
            return (
              <Link key={key} to={path} className={`card card-hover p-8 group flex gap-5 items-start ${coming ? 'opacity-60 pointer-events-none' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-orange/5 border border-orange/20 text-orange flex items-center justify-center flex-shrink-0">{Icon && <Icon size={22}/>}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base text-white">{t(`evo_solutions.${key}.name`)}</h3>
                    {coming && <span className="text-[9px] font-bold tracking-widest uppercase border border-white/10 text-white/30 rounded-full px-2 py-0.5">{t(`evo_solutions.${key}.badge`)}</span>}
                  </div>
                  <p className="text-sm text-white/35 mb-3">{t(`evo_solutions.${key}.short`)}</p>
                  {!coming && <span className="text-xs text-orange/60 group-hover:text-orange flex items-center gap-1">{t('common.learn_more')}<ArrowRight size={11}/></span>}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<HomePage />} />

        {/* PRODUITS — Téléphonie */}
        <Route path="produits" element={<ProduitsIndexPage />} />
        <Route path="produits/contact-center"    element={<ContactCentrePage />} />
        <Route path="produits/auto-attendant"    element={<AutoAttendantPage />} />
        <Route path="produits/attendant-console" element={<AttendantConsolePage />} />
        <Route path="produits/call-recording"    element={<CallRecordingPage />} />
        <Route path="produits/screen-recording"  element={<ScreenRecordingPage />} />
        <Route path="produits/contact-manager"   element={<ContactManagerPage />} />
        <Route path="produits/digital-fax"       element={<DigitalFaxPage />} />
        <Route path="produits/call-analytics"    element={<CallAnalyticsPage />} />

        {/* PRODUITS — AI */}
        <Route path="produits/ai/voice-agent"   element={<AIVoiceAgentPage />} />
        <Route path="produits/ai/digital-agent" element={<AIDigitalAgentPage />} />
        <Route path="produits/ai/receptionist"  element={<AIVirtualReceptionistPage />} />
        <Route path="produits/ai/analytics"     element={<AIAnalyticsPage />} />

        {/* SOLUTIONS — ECHO + Bayling */}
        <Route path="solutions"         element={<SolutionsIndexPage />} />
        <Route path="solutions/echo"    element={<ECHOPage />} />
        <Route path="solutions/bayling" element={<BaylingPage />} />

        {/* Legacy redirects — old /solutions/* paths still work */}
        <Route path="solutions/contact-center"    element={<ContactCentrePage />} />
        <Route path="solutions/auto-attendant"    element={<AutoAttendantPage />} />
        <Route path="solutions/attendant-console" element={<AttendantConsolePage />} />
        <Route path="solutions/call-recording"    element={<CallRecordingPage />} />
        <Route path="solutions/screen-recording"  element={<ScreenRecordingPage />} />
        <Route path="solutions/contact-manager"   element={<ContactManagerPage />} />
        <Route path="solutions/digital-fax"       element={<DigitalFaxPage />} />
        <Route path="solutions/call-analytics"    element={<CallAnalyticsPage />} />
        <Route path="ai/voice-agent"              element={<AIVoiceAgentPage />} />
        <Route path="ai/digital-agent"            element={<AIDigitalAgentPage />} />
        <Route path="ai/receptionist"             element={<AIVirtualReceptionistPage />} />
        <Route path="ai/analytics"               element={<AIAnalyticsPage />} />

        {/* Static pages */}
        <Route path="pricing"  element={<PricingPage />} />
        <Route path="about"    element={<AboutPage />} />
        <Route path="contact"  element={<ContactPage />} />
        <Route path="demo"     element={<DemoPage />} />
        <Route path="blog"     element={<BlogPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="cases"    element={<CasesPage />} />
        <Route path="legal"    element={<LegalPage />} />
        <Route path="*"        element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
