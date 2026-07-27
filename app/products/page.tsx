import type { Metadata } from 'next'
import { ProductsHub } from '@/components/mulin/products-hub'

export const metadata: Metadata = {
  title: { absolute: 'Products in Nepal | Plant Art, Moss Walls & More | Mulin Venture' },
  description:
    'Shop Mulin Venture\'s products in Nepal — plant art, moss walls, living walls, and the biodiversity toolkit. Bring nature into your space today!',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products in Nepal | Plant Art, Moss Walls & More | Mulin Venture',
    description:
      'Shop Mulin Venture\'s products in Nepal — plant art, moss walls & living walls, and the biodiversity toolkit.',
    url: 'https://www.mulinventure.com/products',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products in Nepal | Plant Art, Moss Walls & More | Mulin Venture',
    description:
      'Shop Mulin Venture\'s products in Nepal — plant art, moss walls & living walls, and the biodiversity toolkit.',
  },
}

export default function ProductsPage() {
  return <ProductsHub />
}

