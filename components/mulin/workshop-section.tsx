'use client'

import Link from 'next/link'
import { ArrowRight, MonsteraLeaf } from './svg-assets'

const highlights = [
  { title: 'Hands-On Plant Art', body: 'Create your own living plant art guided by our team and take it home.' },
  { title: 'Biophilic Learning', body: 'Learn how biophilic spaces support wellbeing, focus, and emotional calm.' },
  { title: 'Indigenous Knowledge', body: 'Discover local ecological wisdom and practical biodiversity actions for daily life.' },
]

export function WorkshopSection() {
  return (
    <section id="workshop" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-330 mx-auto px-[clamp(20px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1" data-aos="fade-up">
            <div className="relative overflow-hidden rounded-[28px] aspect-[4/5] max-h-140 w-full group">
              <img
                src="/plantartworkshop.jpg"
                alt="Hands shaping a moss ball with soil during a kokedama making workshop"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-moss/70 via-transparent to-transparent" />
              {/* Saturday badge */}
              <div className="absolute top-6 left-6 bg-gold rounded-full px-5 py-2.5">
                <span className="text-[11px] uppercase tracking-[0.2em] text-moss font-sans font-medium">
                  Community Sessions
                </span>
              </div>
            </div>
            {/* Decorative leaf */}
            <div className="absolute -bottom-8 -left-8 text-sage opacity-[0.12] pointer-events-none hidden md:block">
              <MonsteraLeaf className="w-36 h-36" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-sage inline-block" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-sage font-sans">Join Us In Person</span>
            </div>
            <h2
              className="font-serif text-ink leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Plant Art Workshops
            </h2>
            <p className="font-sans font-light text-ink-soft leading-relaxed mb-9 max-w-lg">
              Hands-on workshops where participants build plant art while learning about biophilic
              design, biodiversity, and nature-connected living. Available for schools, organizations,
              and public events.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-10">
              {highlights.map((item, index) => (
                <div key={item.title} className="flex gap-5">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-sage/50 font-sans pt-1.5 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-ink text-lg leading-tight mb-1">{item.title}</h3>
                    <p className="font-sans font-light text-ink-soft text-sm leading-relaxed max-w-md">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScm-Yxm_SAbAaLwAcw_qrb2XZHwlxdkGdFF_jJlu_AXdD4HJA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-moss text-cream rounded-full px-7 py-3.5 text-sm font-medium hover:bg-ink transition-colors duration-300 group/btn"
              >
                Join a Workshop
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
              <span className="font-sans text-xs text-ink-soft">
                Seats are limited — reserve yours early.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
