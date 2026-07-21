import type { Metadata } from 'next'
import { ServicesHub } from '@/components/mulin/services-hub'

export const metadata: Metadata = {
  title: { absolute: 'Botanical Design Services in Nepal | Mulin Venture' },
  description:
    'Biophilic design, rooftop greening, green building rating, plant art workshops, and garden maintenance in Nepal.',
  alternates: { canonical: '/services' },
}

export default function ServicesLandingPage() {
  return <ServicesHub />
}
