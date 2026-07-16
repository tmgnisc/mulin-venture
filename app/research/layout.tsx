import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Environmental Research in Nepal | Mulin Venture' },
  description:
    'Explore Mulin Venture\'s research on green infrastructure, biophilic design & sustainability in Nepal. Read our latest articles and reports today!',
  alternates: { canonical: '/research' },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
