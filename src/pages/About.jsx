import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GitMerge, Users, Globe, Award, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'

const VALUES = [
  { icon: GitMerge, title: 'Intégration native',    desc: 'Certifiés Microsoft, nous sommes spécialisés dans l\'écosystème Teams depuis sa création.' },
  { icon: Globe,    title: 'Ancrage marocain',      desc: 'Basés à Casablanca, nous comprenons les spécificités du marché et de la réglementation locale.' },
  { icon: Users,    title: 'Équipe dédiée',          desc: 'Une équipe d\'ingénieurs certifiés Microsoft, disponible et réactive pour chaque client.' },
  { icon: Award,    title: 'Excellence opérationnelle', desc: 'SLA 99.9%, déploiement en 72h et support autour du monde — sans compromis.' },
]

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <section className="relative z-10 pt-28 pb-20 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <div className="section-tag">{t('nav.about')}</div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight tracking-tight">
              Nous réinventons la<br />
              <span className="text-gradient">communication d'entreprise</span><br />
              au Maroc.
            </h1>
            <p className="text-white/45 text-lg leading-relaxed mb-6">
              EVO Technologies est né d'une conviction : les entreprises marocaines méritent les mêmes
              outils de communication que les grandes multinationales — simples, puissants, intégrés.
            </p>
            <p className="text-white/35 text-base leading-relaxed">
              Depuis notre création, nous avons équipé plus de 500 entreprises avec des solutions
              Microsoft Teams avancées : Contact Center, agents IA, enregistrement, analytics.
              Notre slogan <span className="text-white/60 font-medium">"We Make Collaboration Better"</span> est
              notre engagement quotidien.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card card-hover p-7"
              >
                <div className="feat-icon mb-5"><Icon size={18} /></div>
                <h3 className="font-display font-semibold text-base text-white mb-2">{title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Partners logos placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs text-white/25 uppercase tracking-widest mb-6">Partenaires & certifications</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['Microsoft', 'Azure', 'Genesys', 'Cisco', 'Teams'].map(partner => (
                <div key={partner} className="text-white/20 font-display font-bold text-lg tracking-wider">
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}

// ── Simple placeholder pages ──────────────────────────────────────────

function PlaceholderPage({ title, desc, emoji = '🚧' }) {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">{emoji}</div>
        <h1 className="font-display font-bold text-3xl text-white mb-4">{title}</h1>
        <p className="text-white/40 mb-8">{desc}</p>
        <Link to="/" className="btn-primary justify-center">
          Retour à l'accueil <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

export function BlogPage() {
  return <PlaceholderPage emoji="📝" title="Blog & Ressources" desc="Nos articles, guides et actualités arrivent bientôt." />
}
export function PartnersPage() {
  return <PlaceholderPage emoji="🤝" title="Partenaires" desc="Notre écosystème de partenaires et intégrations." />
}
export function CasesPage() {
  return <PlaceholderPage emoji="⭐" title="Cas clients" desc="Témoignages et études de cas de nos clients." />
}
export function DemoPage() {
  return <PlaceholderPage emoji="📅" title="Réserver une démo" desc="Utilisez le formulaire de contact pour planifier votre démonstration personnalisée." />
}
export function LegalPage() {
  return <PlaceholderPage emoji="⚖️" title="Mentions légales" desc="Informations légales et politique de confidentialité." />
}
export function NotFoundPage() {
  return <PlaceholderPage emoji="404" title="Page introuvable" desc="Cette page n'existe pas ou a été déplacée." />
}
