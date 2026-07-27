import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Community Programs in Nepal | Mulin Venture' },
  description:
    'Join Mulin Venture\'s community programs — plant art workshops, school greening, pocket parks, and biophilic design talks across Nepal. Get involved today!',
  alternates: { canonical: '/community' },
  openGraph: {
    title: 'Community Programs in Nepal | Mulin Venture',
    description:
      'Join Mulin Venture\'s community programs — plant art workshops, school greening, pocket parks, and biophilic design talks across Nepal.',
    url: 'https://www.mulinventure.com/community',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Programs in Nepal | Mulin Venture',
    description:
      'Join Mulin Venture\'s community programs — plant art workshops, school greening, pocket parks, and biophilic design talks across Nepal.',
  },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
