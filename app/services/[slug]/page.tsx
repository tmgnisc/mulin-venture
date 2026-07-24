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

  const cta = ' — Book a free consultation in Nepal today!'
  const desc = content.summary.length + cta.length > 155
    ? content.summary.slice(0, 140 - cta.length).replace(/\s+\S*$/, '') + cta
    : content.summary + cta

  return {
    title: { absolute: `${content.title} in Nepal | Mulin Venture` },
    description: desc,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${content.title} in Nepal | Mulin Venture`,
      description: desc,
      url: `https://www.mulinventure.com/services/${slug}`,
      siteName: 'Mulin Venture',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} in Nepal | Mulin Venture`,
      description: desc,
    },
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
  return <ServicePage content={content} slugArr={['services', slug]} />
}
