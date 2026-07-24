import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Research in Nepal | Biophilic Design & Green Tech | Mulin Venture' },
  description:
    'Research on biophilic design, smart irrigation, green roofs, and sustainable tech in Nepal by Mulin Venture. Read our latest articles today!',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research in Nepal | Biophilic Design & Green Tech | Mulin Venture',
    description:
      'Explore Mulin Venture\'s research on biophilic design, smart irrigation, green roofs, and sustainable technology in Nepal.',
    url: 'https://www.mulinventure.com/research',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research in Nepal | Biophilic Design & Green Tech | Mulin Venture',
    description:
      'Explore Mulin Venture\'s research on biophilic design, smart irrigation, green roofs, and sustainable technology in Nepal.',
  },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
