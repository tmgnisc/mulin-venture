import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Indoor Air Quality & Biophilic Design in Nepal | Mulin Venture' },
  description:
    'Indoor air quality review, ventilation strategy, and biophilic planting design in Nepal. Breathe easier — contact Mulin Venture for a free consultation!',
  alternates: { canonical: '/services/air-quality' },
}

export default function Page() {
  const content = getServicePageContent('air-quality')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={["air-quality"]} />
}
