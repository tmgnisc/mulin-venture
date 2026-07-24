import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/mulin/product-page'
import { getProductPageContent, topLevelSlugs, subcategoryPaths } from '@/components/mulin/product-page-data'

function resolveSlug(slug: string[]) {
  if (slug.length === 1) return slug[0]
  if (slug.length === 2) return slug[1]
  return undefined
}

export function generateStaticParams() {
  const flat = topLevelSlugs.map((s) => ({ slug: [s] }))
  const nested = subcategoryPaths.map(({ parent, child }) => ({ slug: [parent, child] }))
  return [...flat, ...nested]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug: slugArr } = await params
  const key = resolveSlug(slugArr)
  if (!key) return {}
  const content = getProductPageContent(key)
  if (!content) return {}

  const descMap: Record<string, string> = {
    'plant-art-products':
      'Handcrafted plant art in Nepal — living walls, sculptures, and installations. Includes Kokedama. Order from Mulin Venture today!',
    'kokedama':
      'Kokedama moss ball art in Nepal — handcrafted living sculptures wrapped in moss and twine, perfect for home or office. Order from Mulin Venture today!',
    'moss-walls-living-walls':
      'Moss and living wall systems in Nepal for indoor and outdoor spaces with strong visual and acoustic benefits. Contact us today!',
    'biodiversity-toolkit':
      'Biodiversity toolkit in Nepal — native guides, planting resources, and community learning materials. Includes Tippy. Get yours today!',
    'tippy':
      'Tippy biodiversity tool in Nepal — a child-friendly kit for learning native plants, planting, and hands-on nature care. Order from Mulin Venture today!',
  }

  const path = slugArr.join('/')
  const titleSlug = slugArr.length === 2 ? slugArr[1] : slugArr[0]

  const titleMap: Record<string, string> = {
    'kokedama': 'Handcrafted Kokedama Moss Ball Art in Nepal | Mulin Venture',
    'tippy': 'Tippy Biodiversity Tool for Kids in Nepal | Mulin Venture',
  }

  const title = titleMap[titleSlug] ?? `${content.title} in Nepal | Mulin Venture`

  return {
    title: { absolute: title },
    description:
      descMap[titleSlug] ??
      `${content.summary} Available in Nepal from Mulin Venture — contact us today!`,
    alternates: { canonical: `/products/${path}` },
    openGraph: {
      title,
      description:
        descMap[titleSlug] ??
        `${content.summary} Available in Nepal from Mulin Venture.`,
      url: `https://www.mulinventure.com/products/${path}`,
      siteName: 'Mulin Venture',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description:
        descMap[titleSlug] ??
        `${content.summary} Available in Nepal from Mulin Venture.`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug: slugArr } = await params
  const key = resolveSlug(slugArr)
  if (!key) notFound()
  const content = getProductPageContent(key)
  if (!content) notFound()
  return <ProductPage content={content} slugArr={['products', ...slugArr]} />
}
