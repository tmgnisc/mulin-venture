import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Soil Health & Plant Care in Nepal | Mulin Venture' },
  description:
    'Soil health, substrate balance & drainage planning for indoor & outdoor planting in Nepal. Contact Mulin Venture for a free consultation!',
  alternates: { canonical: '/services/soil-health' },
}

export default function Page() {
  const content = getServicePageContent('soil-health')
  if (!content) notFound()
  return <ServicePage content={content} />
}
