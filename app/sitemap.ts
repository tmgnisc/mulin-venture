import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.mulinventure.com'

// Update a page's date only when its content actually changes.
const pages: {
  path: string
  lastModified: string
  changeFrequency: 'weekly' | 'monthly'
  priority: number
}[] = [
  { path: '', lastModified: '2026-07-17', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/leed-certification', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/well-certification', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/sustainable-building-design', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/air-quality', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/water-safety', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/light-optimization', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/soil-health', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services/noise-mapping', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/products/kokedama', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/products/tippy', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/consultation', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/community', lastModified: '2026-07-17', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/research', lastModified: '2026-07-17', changeFrequency: 'weekly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
