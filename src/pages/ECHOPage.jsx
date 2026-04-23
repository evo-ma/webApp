import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSEO } from '@/hooks/useSEO'
import CTABanner from '@/components/sections/CTABanner'
import FadeIn, { FadeInStagger, FadeInItem } from '@/components/ui/FadeIn'
import {
  ArrowLeft, ArrowRight, Calendar, ChevronRight,
  Phone, Shield, Cloud, Server, Headset, Globe,
  Mail, HardDrive, Layout, Lock, PhoneCall,
  PhoneForwarded, Voicemail, Users, AlertCircle,
  CheckCircle2, Zap, Star, Award,
} from 'lucide-react'

// ── ECHO feature items (right panel) ─────────────────────────────────────────
const ECHO_FEATURES = [
  {
    ico: '@',   name: 'Email professionnel',
    desc: 'Adresse email <b>@votredomaine.com</b> professionnelle avec une boîte de <b>50 Go</b> par utilisateur, sans publicité. Calendrier et contacts intégrés via Exchange Online.',
  },
  {
    ico: 'T',   name: 'Chat & Réunions vidéo',
    desc: 'Messagerie instantanée, vidéoconférence jusqu\'à <b>300 participants</b>, partage d\'écran en temps réel. Accessible depuis PC, mobile et tablette.',
  },
  {
    ico: 'O',   name: '1 To de stockage cloud',
    desc: 'Espace cloud sécurisé de <b>1 To par utilisateur</b>. Accès et partage depuis n\'importe quel appareil, synchronisation automatique, versionning inclus.',
  },
  {
    ico: 'W',   name: 'Suite Office Web & Mobile',
    desc: '<b>Word, Excel, PowerPoint et Outlook</b> en version navigateur et sur smartphone ou tablette. Co-édition en temps réel, sans installation requise.',
  },
  {
    ico: 'S',   name: 'Intranet collaboratif',
    desc: 'Espace collaboratif partagé pour gérer documents et processus d\'équipe. Créez votre <b>intranet d\'entreprise</b>, gérez les workflows et centralisez la connaissance.',
  },
  {
    ico: '#',   name: 'Sécurité & Anti-malware',
    desc: 'Protection <b>anti-spam, anti-malware</b> et vérification automatique des liens suspects. Microsoft Defender intégré pour protéger vos communications en temps réel.',
  },
  {
    ico: 'P',   name: 'Système PBX Cloud',
    desc: 'Centrale téléphonique hébergée dans le cloud. <b>Aucun matériel physique requis</b>, gestion 100% en ligne depuis Teams. Activez et gérez vos numéros en quelques clics.',
  },
  {
    ico: '»',   name: 'Transfert & Renvoi d\'appel',
    desc: 'Transférez, renvoyez ou mettez en attente les appels <b>depuis Teams sur tout appareil</b>. Règles de renvoi automatique selon l\'horaire ou la disponibilité.',
  },
  {
    ico: 'VM',  name: 'Messagerie vocale cloud',
    desc: 'Messages vocaux reçus et <b>transcrits automatiquement</b>, consultables depuis Outlook ou Teams. Archivage sécurisé et notifications instantanées inclus.',
  },
  {
    ico: 'Q',   name: 'File d\'attente & Standard auto',
    desc: 'Accueil automatisé avec <b>menu vocal personnalisable</b> et distribution intelligente vers les agents. Musique d\'attente et annonces de position incluses.',
  },
  {
    ico: 'M',   name: 'Appels multi-appareils',
    desc: 'Téléphonez depuis votre <b>PC, mobile, tablette ou téléphone de bureau</b> avec le même numéro. Passez d\'un appareil à l\'autre en cours d\'appel sans interruption.',
  },
  {
    ico: 'E',   name: 'Appels d\'urgence & Localisation',
    desc: 'Routage des appels <b>15 / 18 / 112</b> avec adresse d\'urgence associée à chaque utilisateur. Conformité totale avec les obligations légales de localisation.',
  },
]

// ── Product cards (telephony row) ────────────────────────────────────────────
const PRODUCTS = [
  {
    color: 'orange',
    badge: { text: '⬤ Core', style: 'pop' },
    title: 'Téléphonie Microsoft Teams',
    desc: 'Système téléphonique complet intégré nativement à Teams. Appels PSTN, conférences, messagerie dans une interface unifiée.',
    feats: ['Direct Routing certifié Microsoft', 'Appels entrants & sortants PSTN', 'Double appels simultanés', 'Transfert & mise en attente avancés'],
  },
  {
    color: 'teal',
    badge: { text: 'Standard', style: 'std' },
    title: 'SBC AudioCodes',
    desc: 'Session Border Controller haute performance hébergé dans nos locaux. Sécurité maximale, qualité voix premium.',
    feats: ['AudioCodes Gold Partner certifié', 'Protection anti-fraude & anti-SPIT', 'Qualité voix HD — codec G.722', 'Redondance N+2 garantie'],
  },
  {
    color: 'violet',
    badge: { text: 'Nouveau', style: 'new' },
    title: 'Auto Attendant & SVI',
    desc: 'Serveur Vocal Interactif avancé avec menus vocaux personnalisables, routage intelligent et gestion des horaires.',
    feats: ['Arborescence illimitée de menus', 'TTS multi-langues (FR, AR, Darija)', 'Plages horaires & jours fériés', 'Statistiques d\'usage en temps réel'],
  },
  {
    color: 'blue',
    badge: { text: 'Standard', style: 'std' },
    title: 'Files d\'Attente & Call Back',
    desc: 'Gestion avancée des files d\'attente avec rappel automatique, musique personnalisée et distribution intelligente.',
    feats: ['3 files d\'attente avancées incluses', 'Call Back automatique', 'Prioritisation des appels', 'Annonces de position en file'],
  },
  {
    color: 'green',
    badge: { text: 'Standard', style: 'std' },
    title: 'Messagerie Vocale Cloud',
    desc: 'Répondeur intelligent avec transcription automatique et notification email. Accessible depuis Teams ou Outlook.',
    feats: ['Transcription automatique FR/AR', 'Notification email instantanée', 'Archivage 90 jours inclus', 'Accès depuis tout appareil'],
  },
  {
    color: 'orange',
    badge: { text: 'Nouveau', style: 'new' },
    title: 'Mobility & Softphone',
    desc: 'Téléphonez depuis votre smartphone avec votre numéro professionnel. Application iOS et Android incluse.',
    feats: ['App Teams iOS & Android', 'Même numéro bureau et mobile', 'Bascule d\'appel en cours', 'Présence unifiée multi-appareils'],
  },
]

const CARD_COLORS = {
  orange: { icon: 'bg-orange/10 border-orange/20 text-orange', hover: 'hover:border-orange/30 hover:bg-orange/[0.03]', top: 'bg-orange' },
  teal:   { icon: 'bg-teal-500/10 border-teal-500/20 text-teal-400', hover: 'hover:border-teal-500/25 hover:bg-teal-500/[0.03]', top: 'bg-teal-400' },
  violet: { icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400', hover: 'hover:border-violet-500/25 hover:bg-violet-500/[0.03]', top: 'bg-violet-400' },
  blue:   { icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400', hover: 'hover:border-blue-500/25 hover:bg-blue-500/[0.03]', top: 'bg-blue-400' },
  green:  { icon: 'bg-green-500/10 border-green-500/20 text-green-400', hover: 'hover:border-green-500/25 hover:bg-green-500/[0.03]', top: 'bg-green-400' },
}

const BADGE_STYLES = {
  pop: 'bg-green-500/10 text-green-400 border border-green-500/20',
  new: 'bg-orange/15 text-orange border border-orange/25',
  std: 'bg-white/5 text-white/35 border border-white/[0.08]',
}

// ── Why ECHO cards ────────────────────────────────────────────────────────────
const WHY_KEYS = [
  { icon: Shield,  key: 'sovereignty' },
  { icon: Zap,     key: 'speed'       },
  { icon: Headset, key: 'support'     },
  { icon: Globe,   key: 'lang'        },
  { icon: Award,   key: 'certified'   },
  { icon: Lock,    key: 'security'    },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function ECHOPage() {
  useSEO('ECHO — Solution EVO', 'ECHO : l\'écosystème collaboratif complet hébergé au Maroc. Microsoft Teams, PBX Cloud, Email, Stockage — un abonnement, opéré par EVO.')
  const { t } = useTranslation()
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-24 pb-8 px-4 sm:px-6 md:px-10">
        <div className="absolute inset-0 bg-gradient-radial from-orange/6 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-white/30 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <span className="text-orange">Solutions ECHO</span>
          </motion.div>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
            <span className="badge mb-6 inline-flex">
              <span className="badge-dot" />
              {t('echo.hosted_badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight mb-4">
            <span className="text-gradient">ECHO</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm text-white/25 tracking-[0.3em] uppercase mb-5">
            <span className="text-orange font-semibold">É</span>cosystème ·{' '}
            <span className="text-orange font-semibold">C</span>ollaboratif ·{' '}
            <span className="text-orange font-semibold">H</span>ébergé ·{' '}
            <span className="text-orange font-semibold">O</span>péré
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/45 text-lg leading-relaxed max-w-2xl mb-4">
            Un seul abonnement pour <span className="text-white/80 font-medium">téléphoner</span>,{' '}
            <span className="text-white/80 font-medium">collaborer</span> et{' '}
            <span className="text-white/80 font-medium">connecter</span> tous vos outils — hébergé et opéré depuis nos datacenters au Maroc.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/30 text-sm leading-relaxed max-w-xl mb-10">
            Microsoft Teams, AudioCodes SBC, et tous vos outils de collaboration — opérés par nos experts certifiés, disponibles 24h/24.
          </motion.p>

          {/* Tags */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.32 }}
            className="flex flex-wrap gap-2 mb-10">
            {['Microsoft Teams', 'AudioCodes SBC', 'Tier III', 'ISO 27001', 'PCI DSS', 'Support 24/7'].map(tag => (
              <span key={tag} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                ['Microsoft Teams', 'AudioCodes SBC'].includes(tag)
                  ? 'bg-orange/10 border-orange/25 text-orange'
                  : 'bg-white/[0.04] border-white/[0.08] text-white/45'
              }`}>{tag}</span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-wrap gap-3 mb-16">
            <Link to="/demo" className="btn-primary">
              <Calendar size={16} /> Demander une démo
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t('echo.details')} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ECHO FEATURED CARD ────────────────────────────────────────────── */}
      <section className="relative z-10 px-4 sm:px-6 md:px-10 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative card overflow-hidden">

            {/* Orange top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange via-orange-400 to-orange-600 rounded-t-2xl" />

            {/* "Solution Phare" badge */}
            <div className="absolute top-5 right-6 z-10">
              <span className="text-[9px] font-bold tracking-widest uppercase bg-orange/12 border border-orange/30 text-orange px-3 py-1.5 rounded-full">
                Solution Phare
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px]">

              {/* Left */}
              <div className="p-5 sm:p-8 md:p-12 lg:border-r border-white/[0.06] flex flex-col justify-between gap-6 sm:gap-8">
                <div>
                  <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-widest leading-none mb-3">
                    <span className="text-orange">E</span>
                    <span className="text-white/60">.</span>
                    <span className="text-white">C</span>
                    <span className="text-white/60">.</span>
                    <span className="text-orange">H</span>
                    <span className="text-white/60">.</span>
                    <span className="text-white">O</span>
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-white/25 mb-5">
                    <span className="text-orange font-semibold">É</span>cosystème ·{' '}
                    <span className="text-orange font-semibold">C</span>ollaboratif ·{' '}
                    <span className="text-orange font-semibold">H</span>ébergé ·{' '}
                    <span className="text-orange font-semibold">O</span>péré
                  </div>
                  <p className="text-white/50 font-medium text-base leading-relaxed mb-2">
                    Un seul <span className="text-orange">Abonnement</span> pour{' '}
                    <span className="text-orange">Téléphoner</span>,{' '}
                    <span className="text-orange">Collaborer</span> et{' '}
                    <span className="text-orange">Connecter</span> tous vos outils.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed mb-7">
                    L'écosystème de communication d'entreprise complet, hébergé dans nos datacenters au Maroc.
                    Microsoft Teams, AudioCodes SBC, et tous vos outils de collaboration — opérés par nos{' '}
                    <strong className="text-white/80">Experts certifiés</strong>, disponibles 24h/24.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Teams', 'AudioCodes SBC', 'Tier III', 'ISO 27001', 'PCI DSS', 'Support 24/7'].map(tag => (
                      <span key={tag} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                        ['Microsoft Teams', 'AudioCodes SBC'].includes(tag)
                          ? 'bg-orange/10 border-orange/25 text-orange'
                          : 'bg-white/[0.04] border-white/[0.08] text-white/45'
                      }`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/demo" className="btn-primary"><Calendar size={15} />{t('common.request_demo')}</Link>
                  <Link to="/contact" className="btn-secondary">{t('echo.details_echo')}</Link>
                </div>
              </div>

              {/* Right — feature list with tooltip */}
              <div className="p-5 sm:p-6 md:p-8 relative">
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/20 mb-4 pb-3 border-b border-white/[0.06]">
                  {t('echo.included')}
                </div>
                <div className="space-y-1">
                  {ECHO_FEATURES.map((feat, i) => (
                    <button key={i} onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all duration-200 ${
                        activeFeature === i
                          ? 'bg-orange/6 border-orange/25'
                          : 'border-transparent hover:bg-white/[0.03] hover:border-orange/12'
                      }`}>
                      <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                      <span className={`text-sm font-medium transition-colors flex-1 ${
                        activeFeature === i ? 'text-white' : 'text-white/65 hover:text-white'
                      }`}>{feat.name}</span>
                      <ChevronRight size={12} className={`text-white/20 flex-shrink-0 transition-transform ${activeFeature === i ? 'rotate-90 text-orange' : ''}`} />
                    </button>
                  ))}
                </div>

                {/* Expanded detail panel */}
                {activeFeature !== null && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                    className="mt-4 p-4 bg-orange/5 border border-orange/20 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange/12 border border-orange/20 flex items-center justify-center text-xs font-bold text-orange flex-shrink-0">
                        {ECHO_FEATURES[activeFeature].ico}
                      </div>
                      <span className="text-sm font-semibold text-white">{ECHO_FEATURES[activeFeature].name}</span>
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: ECHO_FEATURES[activeFeature].desc }} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT CARDS ─────────────────────────────────────────────────── */}
      <section className="section border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <div className="section-tag">{t('echo.suite_tag')}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-3">
              {t('echo.suite_title')} <span className="text-gradient">{t('echo.suite_title2')}</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl leading-relaxed">
              {t('echo.suite_desc')}
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {PRODUCTS.map(({ color, badge, title, desc, feats }, i) => {
              const c = CARD_COLORS[color]
              return (
                <FadeInItem key={i}>
                  <div className={`group relative bg-dark-card p-5 sm:p-8 flex flex-col h-full transition-all duration-200 ${c.hover}`}>
                    {/* Orange top line on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${c.top}`} />

                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 ${c.icon}`}>
                      <Phone size={18} />
                    </div>

                    <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 ${BADGE_STYLES[badge.style]}`}>
                      {badge.text}
                    </span>

                    <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-orange transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">{desc}</p>

                    <ul className="space-y-1.5 mb-5">
                      {feats.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-xs text-white/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange/60 group-hover:text-orange group-hover:gap-2.5 transition-all duration-200 mt-auto">
                      En savoir plus <ArrowRight size={12} />
                    </Link>
                  </div>
                </FadeInItem>
              )
            })}
          </FadeInStagger>

          {/* Hosting badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
            {[
              { icon: Server,  label: 'Datacenter Tier III Maroc' },
              { icon: Shield,  label: 'Déploiement 72h' },
              { icon: Headset, label: 'Support 24/7' },
              { icon: Award,   label: 'Certifié Microsoft & AudioCodes' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 bg-dark-card border border-white/[0.07] hover:border-orange/25 rounded-xl px-4 py-2.5 transition-colors">
                <div className="w-6 h-6 rounded-md bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={12} className="text-orange" />
                </div>
                <span className="text-sm text-white/55">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ECHO ──────────────────────────────────────────────────────── */}
      <section className="section border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">{t('echo.why_tag')}</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
              {t('echo.why_title')}
            </h2>
            <p className="text-white/40 leading-relaxed">
              {t('echo.why_desc')}
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_KEYS.map(({ icon: Icon, key }) => (
              <FadeInItem key={title}>
                <div className="card card-hover p-7 group h-full">
                  <div className="feat-icon mb-5 group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
