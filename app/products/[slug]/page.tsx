import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/mulin/product-page'
import { getProductPageContent, productSlugs } from '@/components/mulin/product-page-data'

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = getProductPageContent(slug)
  if (!content) return {}

  const descMap: Record<string, string> = {
    kokedama:
      'Buy handcrafted kokedama moss-ball plantings in Nepal — each made by hand with soil, sphagnum moss & jute. Order yours from Mulin Venture today!',
    tippy:
      'Tippy eco-friendly kids\' watering cans in Nepal — designed for small hands, gentle pour & a love of plants. Shop now at Mulin Venture!',
  }

  return {
    title: { absolute: `${content.title} in Nepal | Mulin Venture` },
    description:
      descMap[slug] ??
      `${content.summary} Available in Nepal from Mulin Venture — contact us today!`,
    alternates: { canonical: `/products/${slug}` },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = getProductPageContent(slug)
  if (!content) notFound()
  return <ProductPage content={content} />
}

