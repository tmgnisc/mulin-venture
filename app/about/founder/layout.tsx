import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder | Mulin Venture',
  description: 'Meet Monica Neupane, founder of Mulin Venture. Learn about her journey in biophilic design and social entrepreneurship.',
  alternates: { canonical: '/about/founder' },
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
