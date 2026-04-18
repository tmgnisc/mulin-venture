'use client'

import { useEffect } from 'react'
import AOS from 'aos'

import { Navigation } from '@/components/mulin/navigation'
import { HeroSection } from '@/components/mulin/hero-section'
import { PhilosophySection } from '@/components/mulin/philosophy-section'
import { EditorialBanner } from '@/components/mulin/editorial-banner'
import { BentoServices } from '@/components/mulin/bento-services'
import { CustomizationSection } from '@/components/mulin/customization-section'
import { BiophilicSection } from '@/components/mulin/biophilic-section'
import { JournalSection } from '@/components/mulin/journal-section'
import { CTABanner } from '@/components/mulin/cta-banner'
import { InstagramGallery } from '@/components/mulin/instagram-gallery'
import { TestimonialsSection } from '@/components/mulin/testimonials-section'
import { Footer } from '@/components/mulin/footer'
import { SectionDivider } from '@/components/mulin/section-divider'
import { CustomCursor } from '@/components/mulin/custom-cursor'

export default function MulinVenturePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <>
      <CustomCursor />
      <Navigation />
      
      <main>
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Brand Philosophy */}
        <PhilosophySection />
        
        {/* Section 3: Editorial Banner */}
        <EditorialBanner />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Section 4: Bento Grid Services */}
        <BentoServices />
        
        {/* Section 5: Customization Showcase */}
        <CustomizationSection />
        
        {/* Section 6: Biophilic Design */}
        <BiophilicSection />
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Section 7: Botanical Journal */}
        <JournalSection />
        
        {/* Section 8: CTA Banner */}
        <CTABanner />
        
        {/* Section 9: Instagram Gallery */}
        <InstagramGallery />
        
        {/* Section 10: Testimonials */}
        <TestimonialsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
}
