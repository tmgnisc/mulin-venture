import type { Metadata } from 'next'
import { ProductsHub } from '@/components/mulin/products-hub'

export const metadata: Metadata = {
  title: { absolute: 'Indoor Plants & Products in Nepal | Mulin Venture' },
  description:
    'Explore Plant Art Products, Moss Walls & Living Walls, and Biodiversity Toolkit by Mulin Venture.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return <ProductsHub />
}

