'use client'

import { useEffect, useRef } from 'react'

export function EditorialBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !bgRef.current) return
      const rect = bannerRef.current.getBoundingClientRect()
      const scrollProgress = -rect.top * 0.5
      bgRef.current.style.transform = `translateY(${scrollProgress}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={bannerRef}
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[100px] -bottom-[100px]"
        style={{
          background: 'linear-gradient(135deg, #2C3B28 0%, #1A2416 50%, #0D160B 100%)',
        }}
      />

      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-[clamp(20px,5vw,80px)]" data-aos="fade-up">
        <p
          className="font-serif font-light italic text-white leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          From Anxiety to Action.
        </p>
        <p
          className="font-serif font-light italic text-gold leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Resilience Through Education.
        </p>
        <p className="font-sans text-sm text-white/60 mt-8 tracking-wide">
          — Climate Anxiety &amp; Environmental Education Mission
        </p>
        <a
          href="#mission"
          className="inline-block mt-8 text-gold text-sm tracking-wide hover:text-gold-light transition-colors underline underline-offset-4"
        >
          Explore Our Mission →
        </a>
      </div>
    </section>
  )
}
