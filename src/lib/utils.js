import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// ── PRODUITS — Téléphonie (8 pages, formerly "Solutions") ──────────────────
export const TELEPHONY = [
  { key: 'contact_centre',    path: '/produits/contact-center',    icon: 'Headphones' },
  { key: 'auto_attendant',    path: '/produits/auto-attendant',    icon: 'PhoneForwarded' },
  { key: 'attendant_console', path: '/produits/attendant-console', icon: 'LayoutDashboard' },
  { key: 'call_recording',    path: '/produits/call-recording',    icon: 'Mic' },
  { key: 'screen_recording',  path: '/produits/screen-recording',  icon: 'Monitor' },
  { key: 'contact_manager',   path: '/produits/contact-manager',   icon: 'Users' },
  { key: 'digital_fax',       path: '/produits/digital-fax',       icon: 'FileText' },
  { key: 'call_analytics',    path: '/produits/call-analytics',    icon: 'BarChart3' },
]

// ── PRODUITS — Intelligence IA (4 pages) ──────────────────────────────────
export const AI_PRODUCTS = [
  { key: 'voice_agent',          path: '/produits/ai/voice-agent',   icon: 'Bot' },
  { key: 'digital_agent',        path: '/produits/ai/digital-agent', icon: 'MessageSquare' },
  { key: 'virtual_receptionist', path: '/produits/ai/receptionist',  icon: 'UserCheck' },
  { key: 'ai_analytics',         path: '/produits/ai/analytics',     icon: 'Sparkles' },
]

// ── SOLUTIONS — ECHO + ECHO Bayling ───────────────────────────────────────
export const SOLUTIONS_EVO = [
  {
    key:     'echo',
    path:    '/solutions/echo',
    icon:    'Globe2',
    badge:   'Solution Phare',
    coming:  false,
  },
  {
    key:     'bayling',
    path:    '/solutions/bayling',
    icon:    'Layers',
    badge:   'Bientôt',
    coming:  true,
  },
]

export const LANGUAGES = [
  { code: 'fr', label: 'FR', name: 'Français', dir: 'ltr' },
  { code: 'en', label: 'EN', name: 'English',  dir: 'ltr' },
  { code: 'ar', label: 'AR', name: 'العربية',  dir: 'rtl' },
]

// Keep old name as alias so nothing else breaks during migration
export const SOLUTIONS = TELEPHONY
