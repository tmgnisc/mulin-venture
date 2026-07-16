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
import { FounderSection } from '@/components/mulin/founder-section'
import { InstagramGallery } from '@/components/mulin/instagram-gallery'
import { TestimonialsSection } from '@/components/mulin/testimonials-section'
import { Footer } from '@/components/mulin/footer'
import { SectionDivider } from '@/components/mulin/section-divider'
import { CustomCursor } from '@/components/mulin/custom-cursor'
import { AOSInit } from '@/components/mulin/aos-init'
import { JsonLd, faqSchema, testimonialsSchema } from '@/components/seo/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Mulin Venture | Indoor Plant Atelier in Nepal' },
  description:
    'Bespoke indoor plants, kokedama & green walls in Nepal — crafted for homes & offices. Contact us today for a free consultation!',
  alternates: { canonical: '/' },
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
        <FounderSection />
        <CTABanner />
        <InstagramGallery />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  )
}
