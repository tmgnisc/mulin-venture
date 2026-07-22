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
    'plant-art-products':
      'Handcrafted decorative plant art pieces integrating living plants into walls, sculptures, and installations.',
    'moss-walls-living-walls':
      'Moss and living wall systems for indoor and outdoor spaces with strong visual and acoustic benefits.',
    'biodiversity-toolkit':
      'Educational biodiversity toolkit with native guides, planting resources, and community learning materials.',
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
