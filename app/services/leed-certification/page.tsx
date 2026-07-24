import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Green Building Rating & LEED Support in Nepal | Mulin Venture' },
  description:
    'Green building rating assessment and LEED certification support in Nepal — carbon footprint, biodiversity impact, and improvement roadmap. Contact Mulin Venture today!',
  alternates: { canonical: '/services/leed-certification' },
}

export default function Page() {
  const content = getServicePageContent('leed-certification')
  if (!content) notFound()
  return <ServicePage content={content} />
}

