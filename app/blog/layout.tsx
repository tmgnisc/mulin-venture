import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Blog | Biophilic Design & Plant Care Tips in Nepal | Mulin Venture' },
  description:
    'Articles on biophilic design, plant care, green roofs, and sustainable landscaping in Nepal by Mulin Venture. Read tips and insights today!',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Biophilic Design & Plant Care Tips in Nepal | Mulin Venture',
    description:
      'Read articles on biophilic design, plant care, green roofs, living walls, and sustainable landscaping in Nepal from the Mulin Venture team.',
    url: 'https://www.mulinventure.com/blog',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Biophilic Design & Plant Care Tips in Nepal | Mulin Venture',
    description:
      'Read articles on biophilic design, plant care, green roofs, living walls, and sustainable landscaping in Nepal from the Mulin Venture team.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
