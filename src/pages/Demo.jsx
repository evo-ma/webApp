import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, ArrowRight, ArrowLeft, CheckCircle2,
  Headphones, Bot, BarChart3, PhoneForwarded,
  Mic, MessageSquare, UserCheck, Sparkles,
  Building2, Users, Phone, Mail, Clock,
} from 'lucide-react'

const PRODUCTS = [
  { id: 'contact_center',    icon: Headphones,    label: 'Contact Center' },
  { id: 'ai_voice',          icon: Bot,           label: 'Agent IA Vocal' },
  { id: 'ai_digital',        icon: MessageSquare, label: 'Agent IA Digital' },
  { id: 'ai_receptionist',   icon: UserCheck,     label: 'Réceptionniste Virtuelle' },
  { id: 'ai_analytics',      icon: Sparkles,      label: 'IA Analytique' },
  { id: 'auto_attendant',    icon: PhoneForwarded,label: 'Auto Attendant' },
  { id: 'call_recording',    icon: Mic,           label: 'Enregistrement' },
  { id: 'call_analytics',    icon: BarChart3,     label: 'Analytics' },
]

const COMPANY_SIZES = [
  { id: '1-10',    label: '1 – 10' },
  { id: '11-50',   label: '11 – 50' },
  { id: '51-200',  label: '51 – 200' },
  { id: '200+',    label: '200+' },
]

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00',
]

const inputClass = `w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3
  text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange/40
  focus:bg-white/[0.06] transition-all duration-200`

const STEPS = ['Solutions', 'Entreprise', 'Créneau', 'Confirmation']

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function DemoPage() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [dir,  setDir]  = useState(1)
  const [done, setDone] = useState(false)

  const [form, setForm] = useState({
    products:  [],
    name:      '',
    company:   '',
    size:      '',
    email:     '',
    phone:     '',
    day:       '',
    time:      '',
    notes:     '',
  })

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n) }
  const next = () => go(step + 1)
  const back = () => go(step - 1)

  const toggleProduct = (id) => {
    setForm(f => ({
      ...f,
      products: f.products.includes(id)
        ? f.products.filter(p => p !== id)
        : [...f.products, id],
    }))
  }

  const canNext = [
    form.products.length > 0,
    form.name && form.company && form.email && form.size,
    form.day && form.time,
  ][step]

  const handleSubmit = () => {
    // TODO: POST to Node.js backend /api/demo
    setDone(true)
  }

  if (done) {
    return (
      <section className="relative z-10 min-h-screen flex items-center justify-center px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card p-12 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-400" />
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-3">Demande envoyée !</h2>
          <p className="text-white/45 text-sm leading-relaxed mb-2">
            Notre équipe vous confirmera votre démonstration pour le{' '}
            <span className="text-white font-medium">{form.day}</span> à{' '}
            <span className="text-white font-medium">{form.time}</span>.
          </p>
          <p className="text-white/30 text-xs mb-8">Un email de confirmation sera envoyé à {form.email}</p>
          <Link to="/" className="btn-primary justify-center w-full">
            Retour à l'accueil
          </Link>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="relative z-10 min-h-screen pt-24 pb-20 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <div className="section-tag justify-center">Démonstration gratuite</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-3 leading-tight tracking-tight">
            Réservez votre démo
          </h1>
          <p className="text-white/40 text-base">
            Démonstration live sur votre environnement Teams. 30 minutes. Sans engagement.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
              <button
                onClick={() => i < step && go(i)}
                className="flex items-center gap-2 flex-shrink-0"
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i < step  ? 'bg-green-500/20 border border-green-500/40 text-green-400' :
                  i === step ? 'bg-orange text-white shadow-orange-sm' :
                               'bg-white/[0.05] border border-white/10 text-white/25'
                }`}>
                  {i < step ? <CheckCircle2 size={14} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block transition-colors ${
                  i === step ? 'text-white' : i < step ? 'text-white/50' : 'text-white/20'
                }`}>{label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px transition-colors duration-300 ${i < step ? 'bg-green-500/30' : 'bg-white/[0.06]'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step panels */}
        <div className="card overflow-hidden" style={{ minHeight: 380 }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="p-8"
            >

              {/* ── Step 0: Products ── */}
              {step === 0 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">
                    Quelles solutions vous intéressent ?
                  </h2>
                  <p className="text-sm text-white/35 mb-6">Sélectionnez une ou plusieurs solutions (obligatoire)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PRODUCTS.map(({ id, icon: Icon, label }) => {
                      const selected = form.products.includes(id)
                      return (
                        <button
                          key={id}
                          onClick={() => toggleProduct(id)}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 ${
                            selected
                              ? 'border-orange/50 bg-orange/8 text-white'
                              : 'border-white/[0.07] bg-white/[0.02] text-white/40 hover:text-white/70 hover:border-white/15'
                          }`}
                        >
                          <Icon size={20} className={selected ? 'text-orange' : ''} />
                          <span className="text-xs font-medium leading-tight">{label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* ── Step 1: Company info ── */}
              {step === 1 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">Parlez-nous de vous</h2>
                  <p className="text-sm text-white/35 mb-6">Ces informations nous permettent de préparer votre démo</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">Nom complet</label>
                        <input type="text" placeholder="Sara Alami" value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">Entreprise</label>
                        <input type="text" placeholder="Votre société" value={form.company}
                          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                          className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">Email professionnel</label>
                        <input type="email" placeholder="sara@entreprise.ma" value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">Téléphone</label>
                        <input type="tel" placeholder="+212 6XX XXX XXX" value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">Taille de l'équipe</label>
                      <div className="grid grid-cols-4 gap-2">
                        {COMPANY_SIZES.map(({ id, label }) => (
                          <button key={id} onClick={() => setForm(f => ({ ...f, size: id }))}
                            className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                              form.size === id
                                ? 'border-orange/50 bg-orange/8 text-white'
                                : 'border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15'
                            }`}>
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 2: Date & time ── */}
              {step === 2 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">Choisissez un créneau</h2>
                  <p className="text-sm text-white/35 mb-6">Notre équipe confirmera la disponibilité sous 2h</p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">Date souhaitée</label>
                      <input
                        type="date"
                        min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                        value={form.day}
                        onChange={e => setForm(f => ({ ...f, day: e.target.value }))}
                        className={`${inputClass} [color-scheme:dark]`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">Heure préférée</label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {TIME_SLOTS.map(slot => (
                          <button key={slot} onClick={() => setForm(f => ({ ...f, time: slot }))}
                            className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                              form.time === slot
                                ? 'border-orange/50 bg-orange/8 text-white'
                                : 'border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15'
                            }`}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">Notes (optionnel)</label>
                      <textarea rows={3} placeholder="Précisions sur votre projet, vos flux actuels..."
                        value={form.notes}
                        onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                        className={`${inputClass} resize-none`} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Step 3: Confirm ── */}
              {step === 3 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">Récapitulatif</h2>
                  <p className="text-sm text-white/35 mb-6">Vérifiez vos informations avant de confirmer</p>
                  <div className="space-y-3">
                    {[
                      { icon: Headphones, label: 'Solutions', value: form.products.map(id => PRODUCTS.find(p => p.id === id)?.label).join(', ') },
                      { icon: Building2,  label: 'Entreprise', value: `${form.name} — ${form.company} (${form.size} employés)` },
                      { icon: Mail,       label: 'Contact',    value: `${form.email}${form.phone ? ' · ' + form.phone : ''}` },
                      { icon: Calendar,   label: 'Créneau',    value: `${form.day} à ${form.time}` },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                        <Icon size={15} className="text-orange mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-white/35 mb-0.5">{label}</div>
                          <div className="text-sm text-white/80">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Footer nav */}
          <div className="px-8 pb-8 flex items-center justify-between gap-4">
            {step > 0 ? (
              <button onClick={back} className="btn-secondary">
                <ArrowLeft size={15} /> Retour
              </button>
            ) : (
              <Link to="/" className="btn-ghost text-sm">
                <ArrowLeft size={14} /> Accueil
              </Link>
            )}

            {step < 3 ? (
              <button
                onClick={next}
                disabled={!canNext}
                className={`btn-primary transition-opacity ${!canNext ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                Suivant <ArrowRight size={15} />
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn-primary px-8">
                <CheckCircle2 size={15} />
                Confirmer la démo
              </button>
            )}
          </div>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
          {[
            { icon: Clock,  text: 'Confirmation sous 2h' },
            { icon: Users,  text: 'Démo personnalisée Teams' },
            { icon: Phone,  text: t('common.phone') },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-xs text-white/25">
              <Icon size={12} className="text-orange/60" /> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
