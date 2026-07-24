import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Biophilic & Sustainable Building Design in Nepal | Mulin Venture' },
  description:
    'Biophilic and sustainable building design in Nepal — nature-led material strategy, spatial planning, and plant integration. Request a free consultation today!',
  alternates: { canonical: '/services/sustainable-building-design' },
}

export default function Page() {
  const content = getServicePageContent('sustainable-building-design')
  if (!content) notFound()
  return <ServicePage content={content} />
}
