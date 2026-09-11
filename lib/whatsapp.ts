const WHATSAPP_NUMBER = '9779847519689'
const SITE_URL = 'https://www.mulinventure.com'

export function getWhatsAppLink(): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text = encodeURIComponent('Hi, I would like to inquire about your services.')
  return `${base}?text=${text}`
}

export function getProductWhatsAppLink(item: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text = encodeURIComponent(`Hi, I want to inquire about ${item}. ${SITE_URL}`)
  return `${base}?text=${text}`
}
