import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { serviceHubItems } from '@/components/mulin/service-page-data'
import { productSlugs } from '@/components/mulin/product-page-data'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.mulinventure.com'

const today = '2026-07-24'

const pages: {
  path: string
  lastModified: string
  changeFrequency: 'weekly' | 'monthly'
  priority: number
}[] = [
  { path: '', lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })),
  { path: '/services', lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
  ...serviceHubItems.map((s) => ({
    path: s.href,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })),
  { path: '/products', lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  ...productSlugs.map((slug) => ({
    path: `/products/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })),
  { path: '/consultation', lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
  { path: '/community', lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/research', lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
