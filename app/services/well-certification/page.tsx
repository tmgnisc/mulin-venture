import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Green Building Rating & WELL Support in Nepal | Mulin Venture' },
  description:
    'Green building rating and WELL certification support in Nepal — healthier interiors, better air, light & acoustic comfort. Contact Mulin Venture today!',
  alternates: { canonical: '/services/well-certification' },
}

export default function Page() {
  const content = getServicePageContent('well-certification')
  if (!content) notFound()
  return <ServicePage content={content} slugArr={['services', "well-certification"]} />
}
