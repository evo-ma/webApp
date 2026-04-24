import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2, Calendar, Clock, Loader2, AlertCircle } from 'lucide-react'
import { useWeb3Forms } from '@/hooks/useWeb3Forms'
import { useSEO } from '@/hooks/useSEO'

function FormField({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 mb-2 tracking-wide uppercase">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass = `w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3
  text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange/40
  focus:bg-white/[0.06] transition-all duration-200`

export default function ContactPage() {
  const { t } = useTranslation()
  const { submit } = useWeb3Forms()
  useSEO(t('nav.contact'), '')

  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', message: '', type: 'demo',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await submit({
        // Web3Forms fields
        subject: `[EVO.MA] ${form.type === 'demo' ? t('contact.type_demo') : t('contact.type_quote')} — ${form.name}`,
        // Form data — all shown in the email Web3Forms sends
        Nom:       form.name,
        Entreprise: form.company || '—',
        Email:     form.email,
        Téléphone: form.phone  || '—',
        Type:      form.type === 'demo' ? 'Demande de démo' : 'Demande de devis',
        Message:   form.message || '—',
        // Required for Web3Forms to know where to send
        email:     form.email,
      })
      setSent(true)
    } catch (err) {
      setError(t('common.error_retry') || 'Une erreur est survenue. Réessayez ou appelez-nous.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
          <div className="section-tag">{t('nav.contact')}</div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }} className="lg:col-span-3">

            {sent ? (
              <div className="card p-6 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{t('contact.sent_title')}</h3>
                <p className="text-white/45 text-sm">{t('contact.sent_sub')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-5 sm:p-8 space-y-4 sm:space-y-5">

                {/* Demo / Quote toggle */}
                <div className="flex gap-2 p-1 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                  {[
                    { val: 'demo',  label: t('contact.type_demo'),  icon: Calendar },
                    { val: 'quote', label: t('contact.type_quote'), icon: Send },
                  ].map(({ val, label, icon: Icon }) => (
                    <button key={val} type="button"
                      onClick={() => setForm(f => ({ ...f, type: val }))}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        form.type === val ? 'bg-orange text-white shadow-orange-sm' : 'text-white/40 hover:text-white/70'
                      }`}>
                      <Icon size={14} /> {label}
                    </button>
                  ))}
                </div>

                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label={t('contact.field_name')}>
                    <input required type="text" placeholder="Sara Alami"
                      value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputClass} />
                  </FormField>
                  <FormField label={t('contact.field_company')}>
                    <input type="text" placeholder="Votre société"
                      value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className={inputClass} />
                  </FormField>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label={t('contact.field_email')}>
                    <input required type="email" placeholder="sara@entreprise.ma"
                      value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputClass} />
                  </FormField>
                  <FormField label={t('contact.field_phone')}>
                    <input type="tel" placeholder="+212 6XX XXX XXX"
                      value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className={inputClass} />
                  </FormField>
                </div>

                {/* Message */}
                <FormField label={t('contact.field_message')}>
                  <textarea rows={4} placeholder={t('contact.msg_placeholder')}
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`${inputClass} resize-none`} />
                </FormField>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={15} className="flex-shrink-0" />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading
                    ? <><Loader2 size={16} className="animate-spin" /> {t('common.sending') || 'Envoi...'}</>
                    : <><Send size={16} /> {t('common.send_message')}</>
                  }
                </button>

                <p className="text-xs text-white/25 text-center">{t('contact.consent')}</p>
              </form>
            )}
          </motion.div>

          {/* Info sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }} className="lg:col-span-2 space-y-4">

            {[
              { icon: Phone,  label: t('common.phone'),        value: t('common.phone'),  href: 'tel:+212520999721' },
              { icon: Mail,   label: t('common.email'),        value: t('common.email'),  href: 'mailto:contact@evo.ma' },
              { icon: MapPin, label: 'Casablanca',             value: 'Casablanca, Maroc',href: null },
              { icon: Clock,  label: t('contact.hours'),       value: t('contact.hours'), href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card p-4 flex items-start gap-3">
                <div className="feat-icon w-9 h-9 flex-shrink-0"><Icon size={15} /></div>
                <div>
                  <div className="text-xs text-white/35 mb-0.5 uppercase tracking-wide font-semibold">{label}</div>
                  {href
                    ? <a href={href} className="text-sm text-white hover:text-orange transition-colors">{value}</a>
                    : <span className="text-sm text-white/70">{value}</span>
                  }
                </div>
              </div>
            ))}

            <div className="card p-5">
              <div className="text-xs text-white/35 mb-3 uppercase tracking-wide font-semibold">{t('about.tag')}</div>
              <ul className="space-y-2">
                {[t('contact.trust1'), t('contact.trust2'), t('contact.trust3'), t('contact.trust4')].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckCircle2 size={12} className="text-orange flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
