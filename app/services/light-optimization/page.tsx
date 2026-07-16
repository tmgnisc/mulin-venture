import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export const metadata: Metadata = {
  title: { absolute: 'Light Optimization Services in Nepal | Mulin Venture' },
  description:
    'Daylight & lighting design in Nepal — glare control, visual comfort & layered light strategy for healthier spaces. Get in touch today!',
  alternates: { canonical: '/services/light-optimization' },
}

export default function Page() {
  const content = getServicePageContent('light-optimization')
  if (!content) notFound()
  return <ServicePage content={content} />
}
