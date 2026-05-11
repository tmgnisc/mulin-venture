import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent } from '@/components/mulin/service-page-data'

export default function Page() {
  const content = getServicePageContent('soil-health')
  if (!content) notFound()
  return <ServicePage content={content} />
}

