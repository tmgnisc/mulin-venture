import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Building Water Safety Services in Nepal | Mulin Venture' },
  description:
    'Water safety planning & plumbing hygiene review for buildings in Nepal — filtration, risk mapping & monitoring. Contact us today!',
  alternates: { canonical: '/services/water-safety' },
}

export default function Page() {
  const content = getServicePageContent('water-safety')
  if (!content) notFound()
  return <ServicePage content={content} />
}
