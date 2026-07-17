import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { JsonLd, organizationSchema } from '@/components/seo/structured-data'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mulinventure.com'),
  title: {
    default: 'Mulin Venture | Indoor Plant Atelier in Nepal',
    template: '%s | Mulin Venture Nepal',
  },
  description:
    'Bespoke indoor plants, kokedama & biophilic design in Nepal. Handcrafted greenery for homes & offices. Contact us today for a free consultation!',
  keywords: ['indoor plants Nepal', 'kokedama Nepal', 'biophilic design Nepal', 'green walls Kathmandu', 'plant atelier Nepal', 'custom planters'],
  authors: [{ name: 'Mulin Venture' }],
  openGraph: {
    title: 'Mulin Venture | Indoor Plant Atelier in Nepal',
    description: 'Bespoke indoor plants paired with hand-crafted vessels — designed in Kathmandu for the spaces you live in.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mulin Venture',
    images: [
      {
        url: '/rlogo.png',
        width: 500,
        height: 500,
        alt: 'Mulin Venture logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mulin Venture | Indoor Plant Atelier in Nepal',
    description: 'Bespoke indoor plants paired with hand-crafted vessels — designed in Kathmandu for the spaces you live in.',
    images: ['/rlogo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F2EC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} bg-cream`}>
      <body className="font-sans antialiased">
        <JsonLd data={organizationSchema} />
        {children}
        <Toaster richColors closeButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
