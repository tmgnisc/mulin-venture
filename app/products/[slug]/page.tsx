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
      'Handcrafted plant art in Nepal — living walls, sculptures, and installations. Includes Kokedama. Order from Mulin Venture today!',
    'moss-walls-living-walls':
      'Moss and living wall systems in Nepal for indoor and outdoor spaces with strong visual and acoustic benefits. Contact us today!',
    'biodiversity-toolkit':
      'Biodiversity toolkit in Nepal — native guides, planting resources, and community learning materials. Includes Tippy. Get yours today!',
  }

  return {
    title: { absolute: `${content.title} in Nepal | Mulin Venture` },
    description:
      descMap[slug] ??
      `${content.summary} Available in Nepal from Mulin Venture — contact us today!`,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${content.title} in Nepal | Mulin Venture`,
      description:
        descMap[slug] ??
        `${content.summary} Available in Nepal from Mulin Venture.`,
      url: `https://www.mulinventure.com/products/${slug}`,
      siteName: 'Mulin Venture',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} in Nepal | Mulin Venture`,
      description:
        descMap[slug] ??
        `${content.summary} Available in Nepal from Mulin Venture.`,
    },
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
