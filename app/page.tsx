import { Navigation } from '@/components/mulin/navigation'
import { HeroSection } from '@/components/mulin/hero-section'
import { PhilosophySection } from '@/components/mulin/philosophy-section'
import { EditorialBanner } from '@/components/mulin/editorial-banner'
import { BentoServices } from '@/components/mulin/bento-services'
//import { CustomizationSection } from '@/components/mulin/customization-section'
import { BiophilicSection } from '@/components/mulin/biophilic-section'
import { JournalSection } from '@/components/mulin/journal-section'
import { CTABanner } from '@/components/mulin/cta-banner'
import { FounderSection } from '@/components/mulin/founder-section'
import { InstagramGallery } from '@/components/mulin/instagram-gallery'
import { TestimonialsSection } from '@/components/mulin/testimonials-section'
import { Footer } from '@/components/mulin/footer'
import { SectionDivider } from '@/components/mulin/section-divider'
import { CustomCursor } from '@/components/mulin/custom-cursor'
import { AOSInit } from '@/components/mulin/aos-init'

export default function MulinVenturePage() {
  return (
    <>
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
        <BiophilicSection />
        <SectionDivider />
        <JournalSection />
        <FounderSection />
        <CTABanner />
        <InstagramGallery />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  )
}
