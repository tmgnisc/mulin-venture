import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Water Safety & Landscape Design in Nepal | Mulin Venture' },
  description:
    'Water safety planning, drainage strategy, and water-efficient landscape design for buildings in Nepal. Contact Mulin Venture today!',
  alternates: { canonical: '/services/water-safety' },
}

export default function Page() {
  const content = getServicePageContent('water-safety')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={['services', "water-safety"]} />
}
