import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Light Optimization & Biophilic Design in Nepal | Mulin Venture' },
  description:
    'Daylight, glare control, and layered lighting design as part of biophilic spaces in Nepal. Get in touch with Mulin Venture today!',
  alternates: { canonical: '/services/light-optimization' },
}

export default function Page() {
  const content = getServicePageContent('light-optimization')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={['services', "light-optimization"]} />
}
