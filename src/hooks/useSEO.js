import { useEffect } from 'react'

/**
 * useSEO — sets document.title and meta description for each page.
 * No extra dependency needed (no react-helmet) — just direct DOM updates.
 *
 * @param {string} title        — page title (will be appended with " | EVO Technologies")
 * @param {string} description  — meta description (150-160 chars ideal)
 * @param {string} [lang]       — optional lang override for <html> tag
 */
export function useSEO(title, description, lang) {
  useEffect(() => {
    // Title
    document.title = title
      ? `${title} | EVO Technologies`
      : 'EVO Technologies — We Make Collaboration Better'

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description || 'EVO Technologies — Solutions Microsoft Teams, Contact Center et IA pour entreprises au Maroc.')

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', document.title)

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', description || '')

    // Canonical (simple — just uses current path)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://evo.ma${window.location.pathname}`)

    // Lang override
    if (lang) {
      document.documentElement.lang = lang
    }
  }, [title, description, lang])
}
