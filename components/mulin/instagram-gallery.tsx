'use client'

import { HeartIcon, InstagramIcon } from './svg-assets'

const galleryItems = [
  { id: 1, size: 'large', gradient: 'from-sage to-sage-dark' },
  { id: 2, size: 'small', gradient: 'from-moss to-sage-dark' },
  { id: 3, size: 'small', gradient: 'from-sage-dark to-moss' },
  { id: 4, size: 'large', gradient: 'from-gold/40 to-sage' },
  { id: 5, size: 'text', gradient: '' },
  { id: 6, size: 'small', gradient: 'from-moss to-ink' },
  { id: 7, size: 'large', gradient: 'from-sage to-moss' },
  { id: 8, size: 'small', gradient: 'from-sage-dark to-sage' },
  { id: 9, size: 'small', gradient: 'from-moss to-sage-dark' },
  { id: 10, size: 'large', gradient: 'from-sage to-sage-dark' },
  { id: 11, size: 'small', gradient: 'from-sage-dark to-moss' },
  { id: 12, size: 'small', gradient: 'from-moss to-sage' },
]

export function InstagramGallery() {
  return (
    <section id="collections" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">
            ✦ Connecting People With Nature
          </span>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-serif text-ink hover:text-sage transition-colors flex items-center justify-center gap-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <InstagramIcon className="w-8 h-8 md:w-10 md:h-10" />
            @mulinventure
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-[0.98] ${
                item.size === 'large' ? 'aspect-[1/1.3]' : 'aspect-square'
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50}
            >
              {item.size === 'text' ? (
                /* Special Text Tile */
                <div className="w-full h-full bg-gold flex flex-col items-center justify-center p-8 text-center">
                  <p className="font-sans text-sm text-moss/70 mb-2">
                    Follow us for daily botanical inspiration
                  </p>
                  <p className="font-serif italic text-2xl md:text-3xl text-moss">
                    @mulinventure
                  </p>
                </div>
              ) : (
                /* Image Tiles */
                <>
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-moss/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <HeartIcon className="w-8 h-8 text-white" />
                    <span className="text-white text-sm tracking-wide">
                      View on Instagram
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
