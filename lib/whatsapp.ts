const WHATSAPP_NUMBER = '9779847519689'

function getCurrentPageUrl(): string {
  if (typeof window === 'undefined') return 'https://www.mulinventure.com'
  return window.location.href.replace(/^http:/, 'https:')
}

export function getWhatsAppLink(item?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (item) {
    const pageUrl = getCurrentPageUrl()
    const text = encodeURIComponent(`Hi, I want to inquire about ${item}. ${pageUrl}`)
    return `${base}?text=${text}`
  }
  const text = encodeURIComponent('Hi, I would like to inquire about your services.')
  return `${base}?text=${text}`
}
