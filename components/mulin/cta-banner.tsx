'use client'

import { TropicalLeaf, MonsteraLeaf } from './svg-assets'

export function CTABanner() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1A2416 0%, #0D160B 100%)',
        }}
      />

      {/* Grain Texture */}
      <div 
        className="absolute inset-0 opacity-30 animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Floating Botanical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] animate-gentle-float" style={{ animationDelay: '0s' }}>
          <TropicalLeaf className="w-16 h-32 text-sage/20 rotate-[-15deg]" />
        </div>
        <div className="absolute bottom-20 right-[15%] animate-gentle-float" style={{ animationDelay: '2s' }}>
          <MonsteraLeaf className="w-20 h-24 text-gold/15 rotate-[20deg]" />
        </div>
        <div className="absolute top-1/3 right-[5%] animate-gentle-float" style={{ animationDelay: '1s' }}>
          <TropicalLeaf className="w-12 h-24 text-sage/15 rotate-[45deg]" />
        </div>
        <div className="absolute bottom-1/4 left-[5%] animate-gentle-float" style={{ animationDelay: '3s' }}>
          <MonsteraLeaf className="w-16 h-20 text-gold/10 rotate-[-30deg]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-[clamp(20px,5vw,80px)] py-20" data-aos="fade-up">
        <h2 
          className="font-serif text-white mb-6"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
        >
          Bring Nature Into Your Habitat
        </h2>
        <p className="font-sans font-light text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Start your botanical journey today. Every plant we create is a unique expression 
          of your space and style.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#customize"
            className="px-8 py-4 bg-gold text-moss rounded-full text-sm tracking-[0.05em] font-medium hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Customize Now
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white text-white rounded-full text-sm tracking-[0.05em] font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Browse Plants
          </a>
        </div>
      </div>
    </section>
  )
}
