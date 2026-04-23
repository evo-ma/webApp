import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, ArrowLeft, CheckCircle2,
  Headphones, BarChart3, PhoneForwarded, Mic,
  MessageSquare, UserCheck, Sparkles, Bot,
  Building2, Mail, Clock, Phone } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'

const PRODUCTS = [
  { id: 'contact_center',     icon: Headphones,    key: 'contact_centre'      },
  { id: 'ai_voice',           icon: Bot,           key: 'voice_agent'         },
  { id: 'ai_digital',         icon: MessageSquare, key: 'digital_agent'       },
  { id: 'ai_receptionist',    icon: UserCheck,     key: 'virtual_receptionist'},
  { id: 'ai_analytics',       icon: Sparkles,      key: 'ai_analytics'        },
  { id: 'auto_attendant',     icon: PhoneForwarded,key: 'auto_attendant'      },
  { id: 'call_recording',     icon: Mic,           key: 'call_recording'      },
  { id: 'call_analytics',     icon: BarChart3,     key: 'call_analytics'      },
]

const COMPANY_SIZES = ['1-10','11-50','51-200','200+']
const TIME_SLOTS = ['09:00','10:00','11:00','14:00','15:00','16:00']

const inputClass = `w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3
  text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange/40
  focus:bg-white/[0.06] transition-all duration-200`

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function DemoPage() {
  const { t } = useTranslation()
  useSEO(t('demo.title'), '')

  const [step, setStep] = useState(0)
  const [dir,  setDir]  = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ products: [], name: '', company: '', size: '', email: '', phone: '', day: '', time: '', notes: '' })

  const STEPS = t('demo.steps', { returnObjects: true })

  const go = (n) => { setDir(n > step ? 1 : -1); setStep(n) }

  const canNext = [
    form.products.length > 0,
    form.name && form.company && form.email && form.size,
    form.day && form.time,
  ][step]

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || '/api'}/demo`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok) setDone(true)
    } catch { setDone(true) }
  }

  const toggleProduct = (id) => setForm(f => ({
    ...f, products: f.products.includes(id) ? f.products.filter(p => p !== id) : [...f.products, id]
  }))

  if (done) {
    return (
      <section className="relative z-10 min-h-screen flex items-center justify-center px-5">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="card p-6 sm:p-12 text-center max-w-md w-full">
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-400" />
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-3">{t('demo.sent_title')}</h2>
          <p className="text-white/45 text-sm leading-relaxed mb-2">{t('demo.sent_sub')}</p>
          <p className="text-white/30 text-xs mb-8">{t('demo.sent_email')} {form.email}</p>
          <Link to="/" className="btn-primary justify-center w-full">{t('common.back_home')}</Link>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-center mb-12">
          <div className="section-tag justify-center">{t('demo.badge')}</div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 leading-tight tracking-tight">{t('demo.title')}</h1>
          <p className="text-white/40 text-base">{t('demo.subtitle')}</p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {Array.isArray(STEPS) && STEPS.map((label, i) => (
            <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
              <button onClick={() => i < step && go(i)} className="flex items-center gap-2 flex-shrink-0">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i < step ? 'bg-green-500/20 border border-green-500/40 text-green-400' :
                  i === step ? 'bg-orange text-white shadow-orange-sm' : 'bg-white/[0.05] border border-white/10 text-white/25'
                }`}>
                  {i < step ? <CheckCircle2 size={14} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block transition-colors ${i === step ? 'text-white' : i < step ? 'text-white/50' : 'text-white/20'}`}>{label}</span>
              </button>
              {i < STEPS.length - 1 && <div className={`flex-1 h-px transition-colors duration-300 ${i < step ? 'bg-green-500/30' : 'bg-white/[0.06]'}`} />}
            </div>
          ))}
        </div>

        <div className="card overflow-hidden" style={{ minHeight: 'auto' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div key={step} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.28, ease: 'easeInOut' }} className="p-5 sm:p-8">

              {step === 0 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">{t('demo.step0_title')}</h2>
                  <p className="text-sm text-white/35 mb-6">{t('demo.step0_sub')}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {PRODUCTS.map(({ id, icon: Icon, key }) => {
                      const selected = form.products.includes(id)
                      const ns = key in (t('solutions', { returnObjects: true }) || {}) ? 'solutions' : 'ai'
                      return (
                        <button key={id} onClick={() => toggleProduct(id)}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 ${
                            selected ? 'border-orange/50 bg-orange/8 text-white' : 'border-white/[0.07] bg-white/[0.02] text-white/40 hover:text-white/70 hover:border-white/15'
                          }`}>
                          <Icon size={20} className={selected ? 'text-orange' : ''} />
                          <span className="text-xs font-medium leading-tight">{t(`${ns}.${key}.name`)}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">{t('demo.step1_title')}</h2>
                  <p className="text-sm text-white/35 mb-6">{t('demo.step1_sub')}</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">{t('contact.field_name')}</label>
                        <input type="text" placeholder="Sara Alami" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">{t('contact.field_company')}</label>
                        <input type="text" value={form.company} onChange={e => setForm(f => ({...f, company: e.target.value}))} className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">{t('contact.field_email')}</label>
                        <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">{t('contact.field_phone')}</label>
                        <input type="tel" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">{t('demo.team_size')}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {COMPANY_SIZES.map(s => (
                          <button key={s} onClick={() => setForm(f => ({...f, size: s}))}
                            className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${form.size === s ? 'border-orange/50 bg-orange/8 text-white' : 'border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15'}`}>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">{t('demo.step2_title')}</h2>
                  <p className="text-sm text-white/35 mb-6">{t('demo.step2_sub')}</p>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">{t('demo.preferred_date')}</label>
                      <input type="date" min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                        value={form.day} onChange={e => setForm(f => ({...f, day: e.target.value}))}
                        className={`${inputClass} [color-scheme:dark]`} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">{t('demo.preferred_time')}</label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map(slot => (
                          <button key={slot} onClick={() => setForm(f => ({...f, time: slot}))}
                            className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${form.time === slot ? 'border-orange/50 bg-orange/8 text-white' : 'border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15'}`}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 uppercase tracking-wide mb-1.5">{t('demo.notes')}</label>
                      <textarea rows={3} placeholder={t('demo.notes_placeholder')} value={form.notes}
                        onChange={e => setForm(f => ({...f, notes: e.target.value}))}
                        className={`${inputClass} resize-none`} />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">{t('demo.step3_title')}</h2>
                  <p className="text-sm text-white/35 mb-6">{t('demo.step3_sub')}</p>
                  <div className="space-y-3">
                    {[
                      { icon: Headphones, label: t('nav.produits'),       value: form.products.join(', ') },
                      { icon: Building2,  label: t('contact.field_company'), value: `${form.name} — ${form.company} (${form.size})` },
                      { icon: Mail,       label: t('contact.field_email'),   value: `${form.email}${form.phone ? ' · ' + form.phone : ''}` },
                      { icon: Calendar,   label: t('demo.preferred_date'),   value: `${form.day} · ${form.time}` },
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

          <div className="px-5 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between gap-3">
            {step > 0
              ? <button onClick={() => go(step - 1)} className="btn-secondary"><ArrowLeft size={15} /> {t('common.back')}</button>
              : <Link to="/" className="btn-ghost text-sm"><ArrowLeft size={14} /> {t('common.back_home')}</Link>
            }
            {step < 3
              ? <button onClick={() => go(step + 1)} disabled={!canNext}
                  className={`btn-primary transition-opacity ${!canNext ? 'opacity-30 cursor-not-allowed' : ''}`}>
                  {t('common.next')} <ArrowRight size={15} />
                </button>
              : <button onClick={handleSubmit} className="btn-primary px-8">
                  <CheckCircle2 size={15} /> {t('common.confirm_demo')}
                </button>
            }
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
          {[
            { icon: Clock, text: t('demo.trust1') },
            { icon: Calendar, text: t('demo.trust2') },
            { icon: Phone, text: t('common.phone') },
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
