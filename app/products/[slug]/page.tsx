import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/mulin/product-page'
import { getProductPageContent, productSlugs } from '@/components/mulin/product-page-data'

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }))
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
