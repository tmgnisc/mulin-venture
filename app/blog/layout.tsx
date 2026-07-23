import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Blog | Mulin Venture' },
  description:
    'Read articles on biophilic design, plant care, sustainable landscaping, and biodiversity from the Mulin Venture team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Mulin Venture',
    description:
      'Read articles on biophilic design, plant care, sustainable landscaping, and biodiversity from the Mulin Venture team.',
    url: 'https://www.mulinventure.com/blog',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Mulin Venture',
    description:
      'Read articles on biophilic design, plant care, sustainable landscaping, and biodiversity from the Mulin Venture team.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
