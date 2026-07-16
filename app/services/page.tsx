import type { Metadata } from 'next'
import { ServicesHub } from '@/components/mulin/services-hub'

export const metadata: Metadata = {
  title: { absolute: 'Botanical Design Services in Nepal | Mulin Venture' },
  description:
    'Green walls, biophilic design, landscape architecture & plant care in Nepal. Explore 8 services. Contact us today for a free consultation!',
  alternates: { canonical: '/services' },
}

export default function ServicesLandingPage() {
  return <ServicesHub />
}

