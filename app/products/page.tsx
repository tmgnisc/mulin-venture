import type { Metadata } from 'next'
import { ProductsHub } from '@/components/mulin/products-hub'

export const metadata: Metadata = {
  title: { absolute: 'Indoor Plants & Products in Nepal | Mulin Venture' },
  description:
    'Shop handcrafted kokedama, eco-friendly kids\' watering cans & bespoke plants in Nepal. Bring nature indoors — order yours today!',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return <ProductsHub />
}


