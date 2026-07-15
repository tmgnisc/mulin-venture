'use client'

import { InstagramIcon } from './svg-assets'

const instagramPosts = [
  { permalink: 'https://www.instagram.com/reel/Dak1pBvvrZ_/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DavKyzIP1vb/', type: 'reel' },
  { permalink: 'https://www.instagram.com/p/DaIcHk_jyqa/', type: 'post' },
  { permalink: 'https://www.instagram.com/reel/Daw4E5hOH0W/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DafpTzIP4nQ/', type: 'reel' },
  { permalink: 'https://www.instagram.com/p/Dab3nZ-jzvD/', type: 'post' },
  { permalink: 'https://www.instagram.com/reel/DaLBq6_vb2X/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DUnj75rj1ws/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DTcWRG4j-BX/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DUTNvrND1fo/', type: 'reel' },
  { permalink: 'https://www.instagram.com/reel/DVa9P83j-7_/', type: 'reel' },
] as const

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
            href="https://www.instagram.com/mulinventure/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-ink hover:text-sage transition-colors flex items-center justify-center gap-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <InstagramIcon className="w-8 h-8 md:w-10 md:h-10" />
            @mulinventure
          </a>
        </div>

        {/* Masonry Grid of Instagram Embeds */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {instagramPosts.map((post, index) => (
            <div
              key={post.permalink}
              className={`relative break-inside-avoid overflow-hidden rounded-xl bg-white shadow-[0_1px_10px_rgba(0,0,0,0.08)] ${
                post.type === 'reel' ? 'aspect-[9/16]' : 'aspect-square'
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50}
            >
              {/* Tile aspect matches the media itself. The iframe is shifted up by the
                  54px embed header and extended past the tile bottom, so both the
                  header and all bottom chrome (View more, likes) are cropped away. */}
              <iframe
                src={`${post.permalink}embed/`}
                title="Instagram post by @mulinventure"
                className="absolute inset-x-0 w-full border-0"
                style={{ top: '-54px', height: 'calc(100% + 454px)' }}
                loading="lazy"
                referrerPolicy="origin"
                allowFullScreen
                scrolling="no"
              />
            </div>
          ))}

          {/* Follow Tile */}
          <div
            className="break-inside-avoid overflow-hidden rounded-xl aspect-square bg-gold flex flex-col items-center justify-center p-8 text-center"
            data-aos="fade-up"
          >
            <p className="font-sans text-sm text-moss/70 mb-2">
              Follow us for daily botanical inspiration
            </p>
            <a
              href="https://www.instagram.com/mulinventure/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-2xl md:text-3xl text-moss hover:text-ink transition-colors"
            >
              @mulinventure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
