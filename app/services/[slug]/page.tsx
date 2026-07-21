import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/mulin/service-page'
import { getServicePageContent, serviceHubItems } from '@/components/mulin/service-page-data'

export function generateStaticParams() {
  return serviceHubItems.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = getServicePageContent(slug)
  if (!content) return {}

  return {
    title: { absolute: `${content.title} in Nepal | Mulin Venture` },
    description: content.summary,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = getServicePageContent(slug)
  if (!content) notFound()
  return <ServicePage content={content} />
}
