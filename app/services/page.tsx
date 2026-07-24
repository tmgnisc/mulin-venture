import type { Metadata } from 'next'
import { ServicesHub } from '@/components/mulin/services-hub'

export const metadata: Metadata = {
  title: { absolute: 'Services in Nepal | Biophilic Design & Green Spaces | Mulin Venture' },
  description:
    'Mulin Venture services in Nepal — biophilic design, rooftop greening, green building rating, plant art workshops, and garden maintenance. Book now!',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services in Nepal | Biophilic Design & Green Spaces | Mulin Venture',
    description:
      'Explore Mulin Venture\'s services in Nepal — biophilic design, landscape & rooftop greening, green building rating, plant art workshops, and garden maintenance.',
    url: 'https://www.mulinventure.com/services',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services in Nepal | Biophilic Design & Green Spaces | Mulin Venture',
    description:
      'Explore Mulin Venture\'s services in Nepal — biophilic design, landscape & rooftop greening, green building rating, plant art workshops, and garden maintenance.',
  },
}

export default function ServicesLandingPage() {
  return <ServicesHub />
}
