import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'LEED Certification in Nepal | Mulin Venture' },
  description:
    'Expert LEED certification support in Nepal — credit strategy, documentation & submission for sustainable buildings. Contact us today!',
  alternates: { canonical: '/services/leed-certification' },
}

export default function Page() {
  const content = getServicePageContent('leed-certification')
  if (!content) notFound()
  return <ServicePage content={content} />
}

