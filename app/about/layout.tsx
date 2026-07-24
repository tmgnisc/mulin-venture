import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'About Mulin Venture | Biophilic Design Studio in Nepal' },
  description:
    'Biophilic design studio in Kathmandu, Nepal — green roofs, living walls, plant art, and sustainable landscapes. Book a free consultation today!',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Mulin Venture | Biophilic Design Studio in Nepal',
    description:
      'Mulin Venture is a biophilic design studio in Kathmandu, Nepal — creating green roofs, living walls, plant art, and sustainable landscapes.',
    url: 'https://www.mulinventure.com/about',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mulin Venture | Biophilic Design Studio in Nepal',
    description:
      'Mulin Venture is a biophilic design studio in Kathmandu, Nepal — creating green roofs, living walls, plant art, and sustainable landscapes.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
