import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
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
  title: 'Mulin Venture | Indoor Plant Atelier',
  description: 'Bespoke indoor plants paired with hand-crafted vessels — designed for the spaces you live in. Custom vessels, rare species, and artisan planters.',
  keywords: ['indoor plants', 'custom planters', 'biophilic design', 'luxury plants', 'botanical atelier'],
  authors: [{ name: 'Mulin Venture' }],
  openGraph: {
    title: 'Mulin Venture | Indoor Plant Atelier',
    description: 'Bespoke indoor plants paired with hand-crafted vessels — designed for the spaces you live in.',
    type: 'website',
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
        {children}
        <Toaster richColors closeButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
