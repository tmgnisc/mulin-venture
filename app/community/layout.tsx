import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Community Impact in Nepal | Mulin Venture' },
  description:
    'See how Mulin Venture is building a greener Nepal — school programs, river cleanups & recycling drives. Join us today and make a difference!',
  alternates: { canonical: '/community' },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
