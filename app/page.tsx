import type { Metadata } from 'next'
import { Navigation } from '@/components/mulin/navigation'
import { HeroSection } from '@/components/mulin/hero-section'
import { PhilosophySection } from '@/components/mulin/philosophy-section'
import { EditorialBanner } from '@/components/mulin/editorial-banner'
import { BentoServices } from '@/components/mulin/bento-services'
//import { CustomizationSection } from '@/components/mulin/customization-section'
import { HomeProductsSection } from '@/components/mulin/home-products-section'
import { WorkshopSection } from '@/components/mulin/workshop-section'
import { FAQSection } from '@/components/mulin/faq-section'
import { CTABanner } from '@/components/mulin/cta-banner'
import { InstagramGallery } from '@/components/mulin/instagram-gallery'
import { TestimonialsSection } from '@/components/mulin/testimonials-section'
import { Footer } from '@/components/mulin/footer'
import { SectionDivider } from '@/components/mulin/section-divider'
import { CustomCursor } from '@/components/mulin/custom-cursor'
import { AOSInit } from '@/components/mulin/aos-init'
import { JsonLd, faqSchema, testimonialsSchema } from '@/components/seo/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Mulin Venture | Biophilic Design & Green Spaces in Nepal' },
  description:
    'Biophilic design studio in Kathmandu, Nepal — green roofs, living walls, landscape greening and plant art workshops. Book a free consultation!',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mulin Venture | Biophilic Design & Green Spaces in Nepal',
    description:
      'Mulin Venture — biophilic design studio in Kathmandu, Nepal. Green roofs, living walls, landscape greening, plant art workshops, and garden maintenance.',
    url: 'https://www.mulinventure.com',
    siteName: 'Mulin Venture',
    type: 'website',
    locale: 'en_US',
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
    title: 'Mulin Venture | Biophilic Design & Green Spaces in Nepal',
    description:
      'Mulin Venture — biophilic design studio in Kathmandu, Nepal. Green roofs, living walls, landscape greening, plant art workshops, and garden maintenance.',
    images: ['/logo-mulin.png'],
  },
}

export default function MulinVenturePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={testimonialsSchema} />
      <AOSInit />
      <CustomCursor />
      <Navigation />

      <main>
        <HeroSection />
        <PhilosophySection />
        <EditorialBanner />
        <SectionDivider />
        <BentoServices />
        {/* <CustomizationSection />*/}
        <SectionDivider />
        <HomeProductsSection />
        <SectionDivider />
        <WorkshopSection />
        <CTABanner />
        <InstagramGallery />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  )
}
