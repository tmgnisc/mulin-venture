import type { Metadata, Viewport } from 'next'
import { League_Spartan } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { JsonLd, organizationSchema } from '@/components/seo/structured-data'
import './globals.css'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-league-spartan',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mulinventure.com'),
  title: {
    default: 'Mulin Venture | Nurture through Nature',
    template: '%s | Mulin Venture',
  },
  description:
    'Mulin Venture — Nurture through Nature. Biophilic design, sustainable built environments, and biodiversity-first consulting in Nepal. LEED & WELL optimization with profits channeled into environmental education.',
  keywords: ['biophilic design Nepal', 'sustainable building design', 'LEED certification Nepal', 'WELL certification', 'biodiversity design', 'green building Kathmandu', 'indoor plants Nepal', 'kokedama Nepal'],
  authors: [{ name: 'Mulin Venture' }],
  openGraph: {
    title: 'Mulin Venture | Nurture through Nature',
    description: 'Biophilic design and sustainable built environments — rooted in science, biodiversity, and community. Designed in Kathmandu.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mulin Venture',
    images: [
      {
        url: '/logo-mulin.png',
        width: 1650,
        height: 1515,
        alt: 'Mulin Venture logo — Nurture through Nature',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mulin Venture | Nurture through Nature',
    description: 'Biophilic design and sustainable built environments — rooted in science, biodiversity, and community. Designed in Kathmandu.',
    images: ['/logo-mulin.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#737F3C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} bg-cream`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationSchema} />
        {children}
        <Toaster richColors closeButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
