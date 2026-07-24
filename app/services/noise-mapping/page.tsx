import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Acoustic Design & Green Building Rating in Nepal | Mulin Venture' },
  description:
    'Acoustic comfort, noise mapping, and sound privacy solutions as part of green building design in Nepal. Contact Mulin Venture today!',
  alternates: { canonical: '/services/noise-mapping' },
}

export default function Page() {
  const content = getServicePageContent('noise-mapping')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={["noise-mapping"]} />
}
