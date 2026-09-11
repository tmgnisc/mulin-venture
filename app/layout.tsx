import type { Metadata, Viewport } from 'next'
import { League_Spartan } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { JsonLd, organizationSchema } from '@/components/seo/structured-data'
import { WhatsAppFloat } from '@/components/mulin/whatsapp-float'
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
    default: 'Mulin Venture | Biophilic Design & Green Spaces in Nepal',
    template: '%s | Mulin Venture',
  },
  description:
    'Biophilic design studio in Kathmandu — green roofs, living walls, plant art, and sustainable landscapes. Book a free consultation!',
  keywords: ['biophilic design Nepal', 'green roof Kathmandu', 'living walls Nepal', 'landscape design Nepal', 'plant art workshop Kathmandu', 'sustainable building design Nepal', 'moss walls Nepal', 'biodiversity toolkit', 'Mulin Venture'],
  authors: [{ name: 'Mulin Venture', url: 'https://www.mulinventure.com' }],
  other: { publisher: 'Nirvix Technology' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mulin Venture | Biophilic Design Studio in Nepal',
    description: 'Biophilic design, green roofs, living walls, plant art, and sustainable landscapes in Nepal — rooted in science, biodiversity, and community.',
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
    card: 'summary_large_image',
    title: 'Mulin Venture | Biophilic Design Studio in Nepal',
    description: 'Biophilic design, green roofs, living walls, plant art, and sustainable landscapes in Nepal — rooted in science, biodiversity, and community.',
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
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
