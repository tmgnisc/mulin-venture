'use client'

import Link from 'next/link'
import { ArrowRight, MonsteraLeaf } from './svg-assets'

const services = [
  {
    slug: 'biophilic-design',
    title: 'Biophilic Design',
    eyebrow: 'Core Service',
    tone: 'dark',
    layout: 'md:col-span-7 md:row-span-2 min-h-[460px]',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    summary:
      'End-to-end design that places nature at the heart of every decision from material selection and plant placement to lighting, texture, and air flow. We design spaces that are measurably better for the people who use them.',
  },
  {
    slug: 'landscape-rooftop-greening-design',
    title: 'Landscape & Rooftop Greening Design',
    eyebrow: 'Urban Ecology',
    tone: 'image',
    layout: 'md:col-span-5 min-h-[220px]',
    summary:
      'Transforming underused rooftops and exterior spaces into productive green environments. Our landscape designs combine aesthetic vision with ecological function, supporting native species while creating spaces people love.',
  },
  {
    slug: 'green-building-rating-system',
    title: 'Green Building Rating System',
    eyebrow: 'Assessment',
    tone: 'light',
    layout: 'md:col-span-4 min-h-[280px]',
    summary:
      'A structured assessment and advisory service that measures the environmental performance of interior and exterior spaces. We help clients understand their carbon footprint, biodiversity impact, and nature-based solution potential and how to improve each one.',
  },
  {
    slug: 'plant-art-workshops',
    title: 'Plant Art Workshops',
    eyebrow: 'Community Learning',
    tone: 'accent',
    layout: 'md:col-span-4 min-h-[280px]',
    summary:
      'Hands-on community workshops where participants create their own plant art pieces while learning about biophilic design, indigenous plant knowledge, and the benefits of living with nature. Available for schools, organisations, and public events.',
  },
  {
    slug: 'garden-maintenance',
    title: 'Garden Maintenance',
    eyebrow: 'Long-Term Care',
    tone: 'banner',
    layout: 'md:col-span-4 min-h-[280px]',
    summary:
      'Ongoing care and maintenance for living walls, rooftop gardens, and planted interiors. We ensure every green space we create continues to thrive, keeping ecosystems healthy and clients confident.',
  },
]

export function BentoServices() {
  return (
    <section id="services" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-330 mx-auto px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-sage inline-block" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-sage font-sans">What We Do</span>
            </div>
            <h2
              className="font-serif text-ink leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Our Services
            </h2>
          </div>
          <p className="font-sans font-light text-ink-soft max-w-md leading-relaxed text-sm md:text-right">
            Five core services built to integrate nature into cities, improve wellbeing, and deliver measurable environmental outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`group relative overflow-hidden rounded-[28px] border border-sage/15 p-7 shadow-[0_14px_32px_rgba(18,31,25,0.05)] ${service.layout} ${
                service.tone === 'dark'
                  ? 'bg-[#454C23] text-white border-[#454C23]'
                  : service.tone === 'image'
                  ? 'text-white border-transparent'
                  : service.tone === 'accent'
                  ? 'bg-[#eaf1e3]'
                  : service.tone === 'banner'
                  ? 'bg-[#fff5d9]'
                  : 'bg-white'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {(service.tone === 'image' || service.image) && (
                <>
                  <img
                    src={service.image ?? 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80'}
                    alt={
  service.slug === 'biophilic-design'
    ? 'Biophilic interior with layered greenery, natural light, and sustainable materials'
    : service.slug === 'landscape-rooftop-greening-design'
    ? 'Rooftop garden with native plants in an urban Nepali setting'
    : service.slug === 'green-building-rating-system'
    ? 'Modern sustainable building facade with green certification features'
    : service.slug === 'plant-art-workshops'
    ? 'Participants creating living plant art during a hands-on workshop'
    : 'Gardener pruning and maintaining a lush planted garden'
}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className={`absolute inset-0 ${
                    service.slug === 'biophilic-design'
                      ? 'bg-linear-to-t from-[#0f170d]/90 via-[#1c2a17]/62 to-[#1c2a17]/45'
                      : 'bg-linear-to-t from-[#1d2818]/92 via-[#1d2818]/45 to-transparent'
                  }`} />
                </>
              )}

              {service.tone !== 'image' && (
                <div className="pointer-events-none absolute -right-8 -bottom-8 text-sage/10">
                  <MonsteraLeaf className="w-32 h-32" />
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] uppercase tracking-[0.3em] font-sans ${
                    service.tone === 'dark' || service.tone === 'image' ? 'text-white/55' : 'text-sage/55'
                  }`}>
                    {service.eyebrow}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                    service.tone === 'dark' || service.tone === 'image'
                      ? 'border border-white/20 text-white/75'
                      : 'border border-sage/20 text-sage-dark'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className={`mt-5 font-serif leading-[1.05] ${
                  index === 0 ? 'text-[clamp(2rem,3vw,2.9rem)]' : 'text-[clamp(1.45rem,2vw,2rem)]'
                } ${
                  service.tone === 'dark' || service.tone === 'image' ? 'text-white' : 'text-ink'
                }`}>
                  {service.title}
                </h3>

                <p className={`mt-4 font-sans text-sm leading-relaxed ${index === 0 ? 'max-w-xl' : ''} ${
                  service.tone === 'dark'
                    ? 'text-white/72'
                    : service.tone === 'image'
                    ? 'text-white/80'
                    : 'text-ink-soft'
                }`}>
                  {service.summary}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className={`mt-6 inline-flex items-center gap-2 text-sm transition-colors ${
                    service.tone === 'dark' || service.tone === 'image'
                      ? 'text-gold hover:text-white'
                      : 'text-sage-dark hover:text-ink'
                  }`}
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
