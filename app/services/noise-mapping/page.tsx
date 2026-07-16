import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Acoustic Noise Mapping in Nepal | Mulin Venture' },
  description:
    'Acoustic noise mapping & sound privacy solutions for buildings in Nepal — hotspot review, material & zoning recommendations. Contact us today!',
  alternates: { canonical: '/services/noise-mapping' },
}

export default function Page() {
  const content = getServicePageContent('noise-mapping')
  if (!content) notFound()
  return <ServicePage content={content} />
}
