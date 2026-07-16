import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'About Mulin Venture | Green Mission in Nepal' },
  description:
    'Mulin Venture restores rivers, reduces waste & educates communities in Nepal. Meet our team and mission. Contact us today to get involved!',
  alternates: { canonical: '/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
