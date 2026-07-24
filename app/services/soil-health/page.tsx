import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Soil Health & Garden Maintenance in Nepal | Mulin Venture' },
  description:
    'Soil health, substrate balance, and drainage planning for gardens, living walls, and green roofs in Nepal. Contact Mulin Venture for a free consultation!',
  alternates: { canonical: '/services/soil-health' },
}

export default function Page() {
  const content = getServicePageContent('soil-health')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={['services', "soil-health"]} />
}
