import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Book a Consultation in Nepal | Mulin Venture' },
  description:
    'Book a biophilic design consultation in Nepal — green roofs, living walls, landscape greening, and plant art. Tell us about your space. Contact us today!',
  alternates: { canonical: '/consultation' },
  openGraph: {
    title: 'Book a Consultation in Nepal | Mulin Venture',
    description:
      'Book a biophilic design consultation in Nepal — green roofs, living walls, landscape greening, plant art, and more.',
    url: 'https://www.mulinventure.com/consultation',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation in Nepal | Mulin Venture',
    description:
      'Book a biophilic design consultation in Nepal — green roofs, living walls, landscape greening, plant art, and more.',
  },
}

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children
}
