import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'WELL Certification in Nepal | Mulin Venture' },
  description:
    'WELL certification support in Nepal — healthier interiors, better air, light & acoustic comfort for your building. Contact us today!',
  alternates: { canonical: '/services/well-certification' },
}

export default function Page() {
  const content = getServicePageContent('well-certification')
  if (!content) notFound()
  return <ServicePage content={content} />
}
