/**
 * HeroCards.jsx
 * Custom animated hero card components for each product page.
 * Each card is a realistic mock UI that illustrates what the product does.
 */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Phone, PhoneOff, Mic, MicOff, Clock, Users, TrendingUp,
  CheckCircle2, AlertCircle, BarChart3, Activity, Zap,
  MessageSquare, Mail, Globe, Bot, Brain, Star,
  FileText, Download, Search, ChevronRight, Play,
  ArrowUpRight, Inbox, Send,
} from 'lucide-react'

// ─── Shared primitives ───────────────────────────────────────────────────────

function Card({ children, className = '' }) {
  return (
    <div className={`relative card shimmer-line p-6 ${className}`}>
      {children}
    </div>
  )
}

function LiveBadge({ label = 'Live' }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-green-400 bg-green-500/10 border border-green-500/15 rounded-full px-2.5 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      {label}
    </span>
  )
}

function CardHeader({ title, right }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <span className="text-[11px] font-bold text-white/35 tracking-widest uppercase">{title}</span>
      {right}
    </div>
  )
}

function MetricBox({ value, label, color = 'text-orange', sub }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
      <div className={`font-display font-bold text-2xl ${color} leading-none mb-1`}>{value}</div>
      <div className="text-[11px] text-white/30">{label}</div>
      {sub && <div className={`text-[10px] mt-1 ${color} opacity-70`}>{sub}</div>}
    </div>
  )
}

// ─── 1. Contact Centre ───────────────────────────────────────────────────────

export function ContactCentreCard() {
  const agents = [
    { init: 'SA', name: 'Sara Alami',    task: 'Support N1',    s: 'online', c: 'from-orange to-orange-700' },
    { init: 'KN', name: 'Karim Naciri',  task: 'Appel entrant', s: 'busy',   c: 'from-navy to-navy-800' },
    { init: 'LB', name: 'Layla B.',      task: 'Après-appel',   s: 'wrap',   c: 'from-violet-500 to-violet-700' },
    { init: 'AM', name: 'Amine Mrani',   task: 'En pause',      s: 'pause',  c: 'from-slate-600 to-slate-700' },
  ]
  const ss = {
    online: 'bg-green-500/15 text-green-400 border-green-500/20',
    busy:   'bg-orange/15 text-orange-300 border-orange/20',
    wrap:   'bg-violet-500/15 text-violet-300 border-violet-500/20',
    pause:  'bg-white/5 text-white/30 border-white/10',
  }
  const sl = { online: 'En ligne', busy: 'En appel', wrap: 'Post-appel', pause: 'Pause' }

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-orange/10 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Contact Center — Live" right={<LiveBadge />} />
        <div className="grid grid-cols-2 gap-3 mb-5">
          <MetricBox value="247" label="Appels actifs" color="text-orange" />
          <MetricBox value="98%" label="Résolution" color="text-green-400" />
          <MetricBox value="1m24" label="Temps moyen" color="text-violet-400" />
          <MetricBox value="18" label="Agents actifs" color="text-sky-400" />
        </div>
        {/* Waveform */}
        <div className="flex items-center gap-[3px] h-7 mb-5">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div key={i} className="flex-1 rounded-full bg-orange"
              style={{ opacity: 0.15 + Math.random() * 0.55 }}
              animate={{ height: [`${20 + Math.random()*60}%`, `${20 + Math.random()*80}%`, `${20 + Math.random()*50}%`] }}
              transition={{ duration: 0.7 + Math.random() * 0.9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: i * 0.04 }}
            />
          ))}
        </div>
        <div className="space-y-2">
          {agents.map(({ init, name, task, s, c }) => (
            <div key={name} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] rounded-xl px-3 py-2">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${c} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}>{init}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white/80 truncate">{name}</div>
                <div className="text-[10px] text-white/30">{task}</div>
              </div>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${ss[s]}`}>{sl[s]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 bg-orange/5 border border-orange/15 rounded-xl px-3 py-2">
          <Activity size={12} className="text-orange flex-shrink-0" />
          <span className="text-[11px] text-white/50"><span className="text-orange font-semibold">IA :</span> Pic détecté — 3 agents recommandés</span>
        </div>
      </Card>
    </div>
  )
}

// ─── 2. Auto Attendant (IVR tree) ────────────────────────────────────────────

export function AutoAttendantCard() {
  const [active, setActive] = useState(null)
  const nodes = [
    { id: 'root', label: 'Bienvenue chez EVO', sub: 'Appuyez sur...', x: '50%', y: 12, w: 160 },
    { id: 'sales', label: '1 — Commercial', x: '20%', y: 42, w: 130 },
    { id: 'support', label: '2 — Support',  x: '50%', y: 42, w: 120 },
    { id: 'admin', label: '3 — Admin',      x: '80%', y: 42, w: 110 },
    { id: 'callback', label: 'Rappel auto', x: '20%', y: 72, w: 110, parent: 'sales' },
    { id: 'queue',    label: 'File d\'attente', x: '50%', y: 72, w: 120, parent: 'support' },
    { id: 'vm',       label: 'Messagerie',  x: '80%', y: 72, w: 100, parent: 'admin' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-orange/8 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Auto Attendant — IVR" right={<LiveBadge label="Actif" />} />
        {/* IVR tree SVG */}
        <div className="relative h-52 mb-4">
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {/* Root → level 2 */}
            {[{ x1: '50%', y1: '18%', x2: '20%', y2: '40%' },
              { x1: '50%', y1: '18%', x2: '50%', y2: '40%' },
              { x1: '50%', y1: '18%', x2: '80%', y2: '40%' }].map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="rgba(247,147,30,0.25)" strokeWidth="1.5" strokeDasharray="4 3" />
            ))}
            {/* Level 2 → level 3 */}
            {[{ x1: '20%', y1: '53%', x2: '20%', y2: '70%' },
              { x1: '50%', y1: '53%', x2: '50%', y2: '70%' },
              { x1: '80%', y1: '53%', x2: '80%', y2: '70%' }].map((l, i) => (
              <line key={`l2-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
            ))}
          </svg>
          {/* Nodes */}
          {[
            { label: 'Bienvenue chez EVO', sub: 'Menu principal', x: '50%', y: '4%', orange: true },
            { label: '1 — Commercial',  x: '16%', y: '37%' },
            { label: '2 — Support',     x: '50%', y: '37%' },
            { label: '3 — Admin',       x: '80%', y: '37%' },
            { label: 'Rappel auto',     x: '16%', y: '68%', dim: true },
            { label: 'File d\'attente', x: '50%', y: '68%', dim: true },
            { label: 'Messagerie',      x: '80%', y: '68%', dim: true },
          ].map(({ label, sub, x, y, orange, dim }) => (
            <div key={label} className="absolute -translate-x-1/2" style={{ left: x, top: y }}>
              <div className={`rounded-lg px-2.5 py-1.5 text-center border transition-all text-[10px] font-semibold whitespace-nowrap ${
                orange ? 'bg-orange/15 border-orange/40 text-orange' :
                dim    ? 'bg-white/[0.02] border-white/[0.06] text-white/30' :
                         'bg-white/[0.04] border-white/[0.08] text-white/70'
              }`}>
                {label}
                {sub && <div className="text-[9px] text-white/30 font-normal">{sub}</div>}
              </div>
            </div>
          ))}
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: '847', l: 'Appels/jour' },
            { v: '4',   l: 'Langues' },
            { v: '99%', l: 'Disponibilité' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center bg-white/[0.02] rounded-xl py-3 border border-white/[0.05]">
              <div className="font-display font-bold text-base text-orange">{v}</div>
              <div className="text-[10px] text-white/30">{l}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ─── 3. Call Recording ───────────────────────────────────────────────────────

export function CallRecordingCard() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(34)

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setProgress(p => p >= 100 ? 0 : p + 0.5), 80)
    return () => clearInterval(t)
  }, [playing])

  const calls = [
    { id: '#4821', name: 'Ahmed Karimi',  dur: '4:32', score: 94, tag: 'Résolu',    tc: 'text-green-400' },
    { id: '#4820', name: 'Sara El Fassi', dur: '7:15', score: 78, tag: 'Escaladé',  tc: 'text-orange' },
    { id: '#4819', name: 'Youssef Idris', dur: '2:08', score: 91, tag: 'Résolu',    tc: 'text-green-400' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-orange/8 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Enregistrement d'appels" right={<LiveBadge label="Enregistrement" />} />

        {/* Active playback */}
        <div className="bg-white/[0.03] border border-orange/15 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-semibold text-white/80">Ahmed Karimi — Support</div>
              <div className="text-[10px] text-white/30">26 Apr 2025 · 10:24</div>
            </div>
            <button onClick={() => setPlaying(p => !p)}
              className="w-8 h-8 rounded-full bg-orange flex items-center justify-center flex-shrink-0 hover:bg-orange-600 transition-colors">
              {playing
                ? <span className="flex gap-0.5"><span className="w-0.5 h-3 bg-white rounded" /><span className="w-0.5 h-3 bg-white rounded" /></span>
                : <Play size={12} className="text-white ml-0.5" />
              }
            </button>
          </div>
          {/* Progress */}
          <div className="relative h-1.5 bg-white/10 rounded-full mb-2 cursor-pointer"
            onClick={e => setProgress(Math.round((e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 100))}>
            <div className="absolute left-0 top-0 h-full bg-orange rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between text-[10px] text-white/25">
            <span>{`${Math.floor(progress * 4.32 / 100)}:${String(Math.floor((progress * 4.32 / 100 % 1) * 60)).padStart(2, '0')}`}</span>
            <span>4:32</span>
          </div>
          {/* AI chips */}
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {['😊 Satisfait', '🔧 Technique', '✅ Résolu'].map(t => (
              <span key={t} className="text-[10px] bg-white/[0.04] border border-white/[0.07] rounded-full px-2 py-0.5 text-white/50">{t}</span>
            ))}
          </div>
        </div>

        {/* Recent recordings */}
        <div className="space-y-2">
          {calls.map(({ id, name, dur, score, tag, tc }) => (
            <div key={id} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] rounded-xl px-3 py-2">
              <Mic size={12} className="text-orange/60 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white/70 truncate">{name}</div>
                <div className="text-[10px] text-white/25">{id} · {dur}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-xs font-bold ${score >= 90 ? 'text-green-400' : 'text-orange'}`}>{score}</div>
                <div className={`text-[9px] ${tc}`}>{tag}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ─── 4. Call Analytics ───────────────────────────────────────────────────────

export function CallAnalyticsCard() {
  const hours = ['8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h']
  const vals  = [12, 28, 45, 62, 38, 24, 55, 70, 48, 22]
  const mx    = Math.max(...vals)

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-orange/8 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Analytics — Aujourd'hui" right={<LiveBadge />} />
        <div className="grid grid-cols-2 gap-3 mb-5">
          <MetricBox value="1,284" label="Appels total" color="text-orange" />
          <MetricBox value="92%" label="Décrochés" color="text-green-400" />
          <MetricBox value="3m08" label="Durée moy." color="text-violet-400" />
          <MetricBox value="4.2/5" label="CSAT moyen" color="text-sky-400" />
        </div>

        {/* Bar chart */}
        <div className="mb-2">
          <div className="text-[10px] text-white/25 mb-2 uppercase tracking-widest">Volume horaire</div>
          <div className="flex items-end gap-1 h-20">
            {vals.map((v, i) => (
              <motion.div key={i} className="flex-1 flex flex-col items-center gap-1"
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
                style={{ originY: 1 }}>
                <div className="w-full rounded-t-sm"
                  style={{ height: `${(v / mx) * 64}px`, background: i === 7 ? '#f7931e' : 'rgba(247,147,30,0.25)' }} />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {hours.map(h => (
              <div key={h} className="flex-1 text-center text-[8px] text-white/20">{h}</div>
            ))}
          </div>
        </div>

        {/* Top agents */}
        <div className="flex items-center gap-2 bg-orange/5 border border-orange/15 rounded-xl px-3 py-2">
          <TrendingUp size={12} className="text-orange flex-shrink-0" />
          <span className="text-[11px] text-white/50"><span className="text-orange font-semibold">+12%</span> vs hier · Pic à 15h00</span>
        </div>
      </Card>
    </div>
  )
}

// ─── 5. AI Voice Agent ───────────────────────────────────────────────────────

export function AIVoiceAgentCard() {
  const [step, setStep] = useState(0)
  const conversation = [
    { from: 'caller', text: 'Bonjour, je voudrais connaître le solde de mon compte.' },
    { from: 'ai',     text: 'Bonjour ! Je suis l\'assistant EVO. Votre numéro de compte se termine par ?', lang: 'AR/FR' },
    { from: 'caller', text: '4821' },
    { from: 'ai',     text: 'Merci. Votre solde disponible est de 12 450 MAD. Puis-je vous aider avec autre chose ?', lang: 'FR' },
  ]

  useEffect(() => {
    if (step >= conversation.length) return
    const t = setTimeout(() => setStep(s => s + 1), 1400)
    return () => clearTimeout(t)
  }, [step])

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-violet-500/10 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Agent IA Vocal — Appel en cours" right={<LiveBadge />} />

        {/* Waveform + timer */}
        <div className="flex items-center gap-3 bg-violet-500/5 border border-violet-500/15 rounded-xl px-4 py-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.div key={i} className="flex-1 rounded-full bg-violet-400"
                  animate={{ height: ['30%', `${40 + Math.random()*60}%`, '30%'] }}
                  transition={{ duration: 0.6 + Math.random()*0.5, repeat: Infinity, repeatType: 'mirror', delay: i * 0.06 }}
                  style={{ minHeight: 3, maxHeight: 20 }}
                />
              ))}
            </div>
            <div className="text-[10px] text-white/30">NLU · AR/FR/Darija/EN</div>
          </div>
          <div className="font-mono text-xs text-violet-400">02:14</div>
        </div>

        {/* Conversation */}
        <div className="space-y-2.5 mb-4" style={{ minHeight: 140 }}>
          {conversation.slice(0, step).map(({ from, text, lang }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }} className={`flex gap-2 ${from === 'ai' ? '' : 'justify-end'}`}>
              {from === 'ai' && (
                <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot size={10} className="text-violet-400" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-xl px-3 py-2 text-[11px] leading-relaxed ${
                from === 'ai'
                  ? 'bg-violet-500/10 border border-violet-500/15 text-white/80'
                  : 'bg-white/[0.05] border border-white/[0.08] text-white/60'
              }`}>
                {text}
                {lang && <span className="ml-2 text-[9px] text-violet-400 font-semibold">{lang}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[{ v: '92%', l: 'Résolution auto' }, { v: '4', l: 'Langues' }, { v: '24/7', l: 'Disponible' }].map(({ v, l }) => (
            <div key={l} className="text-center bg-white/[0.02] rounded-xl py-2.5 border border-white/[0.05]">
              <div className="font-display font-bold text-sm text-violet-400">{v}</div>
              <div className="text-[9px] text-white/25">{l}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ─── 6. AI Digital Agent ─────────────────────────────────────────────────────

export function AIDigitalAgentCard() {
  const [msgIdx, setMsgIdx] = useState(0)
  const messages = [
    { from: 'user', text: 'Où en est ma commande #MA-4821 ?', channel: 'WhatsApp' },
    { from: 'bot',  text: 'Votre commande est en cours de livraison 🚚 Livraison prévue aujourd\'hui entre 14h et 17h.' },
    { from: 'user', text: 'Merci ! Je peux la modifier ?' },
    { from: 'bot',  text: 'Oui, vous pouvez modifier l\'adresse jusqu\'à 12h. Souhaitez-vous que je le fasse maintenant ?' },
  ]

  useEffect(() => {
    if (msgIdx >= messages.length) return
    const t = setTimeout(() => setMsgIdx(i => i + 1), 1200)
    return () => clearTimeout(t)
  }, [msgIdx])

  const channels = [
    { icon: MessageSquare, label: 'WhatsApp', color: 'text-green-400', active: true },
    { icon: Globe,         label: 'Chat web', color: 'text-sky-400',   active: false },
    { icon: Mail,          label: 'Email',    color: 'text-violet-400',active: false },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-sky-500/10 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Agent IA Digital" right={<LiveBadge label="3 canaux actifs" />} />

        {/* Channel tabs */}
        <div className="flex gap-2 mb-4">
          {channels.map(({ icon: Icon, label, color, active }) => (
            <div key={label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
              active ? `bg-white/[0.05] border-white/15 ${color}` : 'border-transparent text-white/25'
            }`}>
              <Icon size={11} /> {label}
            </div>
          ))}
        </div>

        {/* Chat window */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 mb-4" style={{ minHeight: 148 }}>
          <div className="space-y-2">
            {messages.slice(0, msgIdx).map(({ from, text, channel }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }} className={`flex gap-2 ${from === 'bot' ? '' : 'justify-end'}`}>
                {from === 'bot' && (
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={10} className="text-sky-400" />
                  </div>
                )}
                <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[11px] leading-relaxed ${
                  from === 'bot'
                    ? 'bg-sky-500/8 border border-sky-500/15 text-white/75'
                    : 'bg-white/[0.06] text-white/55'
                }`}>
                  {text}
                  {channel && <span className="ml-1 text-[9px] text-green-400">{channel}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[{ v: '88%', l: 'Auto-résolu', c: 'text-sky-400' }, { v: '<30s', l: 'Réponse moy.', c: 'text-green-400' }, { v: '5', l: 'Langues', c: 'text-violet-400' }].map(({ v, l, c }) => (
            <div key={l} className="text-center bg-white/[0.02] rounded-xl py-2.5 border border-white/[0.05]">
              <div className={`font-display font-bold text-sm ${c}`}>{v}</div>
              <div className="text-[9px] text-white/25">{l}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ─── 7. AI Virtual Receptionist ─────────────────────────────────────────────

export function AIVirtualReceptionistCard() {
  const [tick, setTick] = useState(0)
  useEffect(() => { const t = setInterval(() => setTick(n => n + 1), 2000); return () => clearInterval(t) }, [])

  const queue = [
    { name: 'Karim Alaoui',   reason: 'RDV Dr. Benali',     wait: '0:12', status: 'En cours' },
    { name: 'Fatima Zahra',   reason: 'Renseignement',       wait: '0:34', status: 'En attente' },
    { name: 'Omar Tazi',      reason: 'Confirmation RDV',    wait: '1:02', status: 'En attente' },
  ]
  const slots = ['09:30', '10:00', '10:30', '11:00', '14:00', '14:30']
  const booked = [0, 2, 4]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-emerald-500/10 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="Réceptionniste Virtuelle" right={<LiveBadge label="Disponible 24/7" />} />

        {/* Avatar + status */}
        <div className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl px-4 py-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 relative">
            <Bot size={20} className="text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-dark-card" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-white mb-0.5">Assistante EVO</div>
            <div className="text-[10px] text-emerald-400 font-medium">
              {tick % 3 === 0 ? 'Accueil de Karim Alaoui...' : tick % 3 === 1 ? 'Consultation agenda...' : 'Confirmation RDV...'}
            </div>
          </div>
          <div className="font-mono text-xs text-emerald-400">
            {String(Math.floor(tick * 2 / 60)).padStart(2, '0')}:{String((tick * 2) % 60).padStart(2, '0')}
          </div>
        </div>

        {/* Agenda */}
        <div className="mb-4">
          <div className="text-[10px] text-white/25 uppercase tracking-widest mb-2">Créneaux du jour</div>
          <div className="grid grid-cols-3 gap-1.5">
            {slots.map((s, i) => (
              <div key={s} className={`text-center text-[10px] font-medium rounded-lg py-1.5 border ${
                booked.includes(i)
                  ? 'bg-orange/10 border-orange/25 text-orange'
                  : 'bg-white/[0.02] border-white/[0.06] text-white/35'
              }`}>{s}</div>
            ))}
          </div>
        </div>

        {/* Queue */}
        <div className="space-y-1.5">
          {queue.map(({ name, reason, wait, status }) => (
            <div key={name} className="flex items-center gap-2.5 bg-white/[0.02] border border-white/[0.04] rounded-xl px-3 py-2">
              <div className="w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center text-[9px] font-bold text-white/50 flex-shrink-0">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-white/70 truncate">{name}</div>
                <div className="text-[9px] text-white/25 truncate">{reason}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[9px] text-emerald-400 font-mono">{wait}</div>
                <div className={`text-[9px] ${status === 'En cours' ? 'text-emerald-400' : 'text-white/25'}`}>{status}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ─── 8. AI Call Analytics ─────────────────────────────────────────────────────

export function AICallAnalyticsCard() {
  const calls = [
    { id: '#5012', name: 'Sara Benjelloun', score: 94, sentiment: '😊', summary: 'Demande de remboursement résolue' },
    { id: '#5011', name: 'Omar Fassi',      score: 61, sentiment: '😤', summary: 'Réclamation — délai livraison' },
    { id: '#5010', name: 'Nadia Tahiri',    score: 88, sentiment: '😊', summary: 'Souscription offre Premium' },
  ]

  const topics = [
    { label: 'Facturation',  pct: 34 },
    { label: 'Livraison',    pct: 28 },
    { label: 'Technique',    pct: 22 },
    { label: 'Commercial',   pct: 16 },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-violet-500/10 to-transparent rounded-3xl blur-xl pointer-events-none" />
      <Card>
        <CardHeader title="IA Call Analytics" right={<LiveBadge label="Analyse en temps réel" />} />

        {/* Sentiment overview */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { emoji: '😊', label: 'Satisfait',  pct: 71, c: 'text-green-400' },
            { emoji: '😐', label: 'Neutre',     pct: 19, c: 'text-white/40' },
            { emoji: '😤', label: 'Frustré',    pct: 10, c: 'text-red-400' },
          ].map(({ emoji, label, pct, c }) => (
            <div key={label} className="text-center bg-white/[0.02] rounded-xl py-3 border border-white/[0.05]">
              <div className="text-lg mb-0.5">{emoji}</div>
              <div className={`font-display font-bold text-sm ${c}`}>{pct}%</div>
              <div className="text-[9px] text-white/25">{label}</div>
            </div>
          ))}
        </div>

        {/* Topic bars */}
        <div className="mb-4 space-y-2">
          {topics.map(({ label, pct }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="text-[11px] text-white/45 w-20 flex-shrink-0">{label}</div>
              <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div className="h-full bg-violet-400 rounded-full"
                  initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} />
              </div>
              <div className="text-[10px] text-white/30 w-7 text-right">{pct}%</div>
            </div>
          ))}
        </div>

        {/* Recent summaries */}
        <div className="space-y-1.5">
          {calls.map(({ id, name, score, sentiment, summary }) => (
            <div key={id} className="flex items-start gap-2.5 bg-white/[0.02] border border-white/[0.04] rounded-xl px-3 py-2">
              <span className="text-sm mt-0.5">{sentiment}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-white/70">{name} <span className="text-white/25 font-normal">{id}</span></div>
                <div className="text-[10px] text-white/35 truncate">{summary}</div>
              </div>
              <div className={`text-xs font-bold flex-shrink-0 ${score >= 80 ? 'text-green-400' : score >= 60 ? 'text-orange' : 'text-red-400'}`}>{score}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
