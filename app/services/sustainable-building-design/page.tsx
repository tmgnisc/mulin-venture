import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Sustainable Building Design in Nepal | Mulin Venture' },
  description:
    'Integrated sustainable building design in Nepal — energy, material & spatial strategy from concept to completion. Request a free consultation!',
  alternates: { canonical: '/services/sustainable-building-design' },
}

export default function Page() {
  const content = getServicePageContent('sustainable-building-design')
  if (!content) notFound()
  return <ServicePage content={content} />
}
