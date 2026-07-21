'use client'

import { ArrowRight, MonsteraLeaf, SproutIcon } from './svg-assets'

export function BentoServices() {
  return (
    <section id="services" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-330 mx-auto px-[clamp(20px,5vw,80px)]">

        {/* Section Header */}
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
          <p className="font-sans font-light text-ink-soft max-w-xs leading-relaxed text-sm md:text-right">
            End-to-end biophilic services for healthier interiors, stronger biodiversity, and measurable climate impact.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-3">

          {/* 01 — Biophilic Design (Hero, 2 rows) */}
          <div
            className="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-[28px] min-h-115 md:min-h-0"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80"
              alt="Lush indoor garden with layered tropical foliage designed for a residential space"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-moss via-moss/35 to-transparent" />
            <div className="absolute top-7 left-7">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/40 font-sans">01</span>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <div className="h-px w-10 bg-gold/50 mb-6" />
              <h3
                className="font-serif text-white leading-[1.08] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 3vw, 2.9rem)' }}
              >
                Biophilic<br />Design
              </h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed max-w-75 mb-7">
                End-to-end design that places nature at the center of material, planting, light, texture, and airflow decisions.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-white transition-colors group/link"
              >
                <span className="font-medium tracking-wide">Explore Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 02 — Landscape and Rooftop Greening */}
          <div
            className="md:col-span-5 group relative overflow-hidden rounded-[28px] min-h-65"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <img
              src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1600&q=80"
              alt="Potted plants arranged on a wooden table during a professional installation"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/15 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/35 font-sans self-end">02</span>
              <div>
                <h3 className="font-serif text-white text-2xl leading-tight mb-2">Landscape &amp; Rooftop Greening</h3>
                <p className="font-sans text-white/60 text-xs leading-relaxed max-w-65">
                  Transform rooftops and exterior spaces into productive green environments that support local ecology.
                </p>
              </div>
            </div>
          </div>

          {/* 03 — Green Building Rating System */}
          <div
            className="md:col-span-3 group relative overflow-hidden rounded-[28px] min-h-65 border border-sage/20"
            style={{ background: 'linear-gradient(135deg, #f0f4f0 0%, #e8f0e8 100%)' }}
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <div className="absolute -right-10 -top-10 text-sage opacity-[0.08] pointer-events-none">
              <MonsteraLeaf className="w-48 h-48" />
            </div>
            <div className="relative h-full flex flex-col justify-between p-7">
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.32em] text-sage/50 font-sans">03</span>
                <div className="w-8 h-8 rounded-full border border-sage/25 flex items-center justify-center">
                  <SproutIcon className="w-4 h-4 text-sage" />
                </div>
              </div>
              <div>
                <div className="h-px w-8 bg-sage/35 mb-4" />
                <h3 className="font-serif text-ink text-2xl leading-tight mb-2">Green Building<br />Rating System</h3>
                <p className="font-sans text-ink-soft text-[11px] leading-relaxed">
                  Assess carbon footprint, biodiversity impact, and nature-based solution potential with structured guidance.
                </p>
              </div>
            </div>
          </div>

          {/* 04 — Plant Art Workshops */}
          <div
            className="md:col-span-2 group relative overflow-hidden rounded-[28px] bg-moss min-h-65"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <div className="absolute -bottom-8 -left-4 text-sage-dark opacity-[0.12] pointer-events-none">
              <MonsteraLeaf className="w-36 h-36" />
            </div>
            <div className="relative h-full flex flex-col justify-between p-6">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/25 font-sans">04</span>
              <div>
                <div className="h-px w-6 bg-gold/45 mb-4" />
                <h3 className="font-serif text-gold text-xl leading-tight mb-2">Plant Art<br />Workshops</h3>
                <p className="font-sans text-white/45 text-[11px] leading-relaxed">
                  Hands-on learning experiences for schools, organizations, and communities.
                </p>
              </div>
            </div>
          </div>

          {/* 05 — Garden Maintenance */}
          <div
            className="md:col-span-4 group relative overflow-hidden rounded-[28px] min-h-85"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
              alt="Dense green leaves covering a vertical surface like a living wall"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-moss/92 via-moss/18 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/35 font-sans">05</span>
              <div>
                <h3 className="font-serif text-white text-2xl leading-tight mb-2">Garden Maintenance</h3>
                <p className="font-sans text-white/60 text-xs leading-relaxed">
                  Ongoing care for living walls, rooftop gardens, and planted interiors so every system stays healthy.
                </p>
              </div>
            </div>
          </div>

          {/* 06 — Living Walls and Plant Systems */}
          <div
            className="md:col-span-4 group relative overflow-hidden rounded-[28px] bg-cream-dark border border-sage/15 min-h-85"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="absolute -right-3 top-2 font-serif leading-none text-sage/6 pointer-events-none select-none"
              style={{ fontSize: '140px' }}>
              12
            </div>
            <div className="relative h-full flex flex-col justify-between p-7">
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.32em] text-sage/50 font-sans">06</span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-gold font-sans border border-gold/25 rounded-full px-3 py-1">
                  Ongoing
                </span>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-ink leading-none" style={{ fontSize: '3.2rem' }}>24/7</span>
                  <span className="font-sans text-[11px] text-ink-soft">care and<br />monitoring</span>
                </div>
                <div className="h-px w-full bg-sage/15 mb-5" />
                <h3 className="font-serif text-ink text-xl leading-tight mb-2">Living Walls &amp;<br />Plant Systems</h3>
                <p className="font-sans text-ink-soft text-[11px] leading-relaxed">
                  Moss walls and fully living walls that improve ambience, acoustics, and indoor air quality.
                </p>
              </div>
            </div>
          </div>

          {/* 07 — Biodiversity Toolkit */}
          <div
            className="md:col-span-4 group relative overflow-hidden rounded-[28px] min-h-85"
            style={{ backgroundColor: '#454C23' }}
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <div className="absolute top-7 right-7 w-28 h-28 rounded-full border border-white/8 pointer-events-none" />
            <div className="absolute top-11 right-11 w-20 h-20 rounded-full border border-white/8 pointer-events-none" />
            <div className="absolute top-16 right-16 w-8 h-8 rounded-full pointer-events-none" style={{ background: 'rgba(201,169,110,0.22)' }} />
            <div className="relative h-full flex flex-col justify-between p-7">
              <span className="text-[10px] uppercase tracking-[0.32em] text-white/25 font-sans">07</span>
              <div>
                <div className="h-px w-8 bg-gold/45 mb-4" />
                <h3 className="font-serif text-white text-2xl leading-tight mb-2">Biodiversity Toolkit</h3>
                <p className="font-sans text-white/60 text-xs leading-relaxed max-w-55">
                  Practical resources to help people support native species in schools, homes, and organizations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-5 text-[11px] text-gold/75 hover:text-gold transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 08 — Community Collaboration (Full Width Banner) */}
          <div
            className="md:col-span-12 group relative overflow-hidden rounded-[28px] min-h-40"
            style={{ backgroundColor: '#FFE871' }}
            data-aos="fade-up"
            data-aos-delay="0"
          >
            {/* Subtle texture: repeating leaf watermarks */}
            <div className="absolute right-0 top-0 h-full w-64 opacity-[0.08] pointer-events-none flex items-center justify-end pr-6">
              <MonsteraLeaf className="h-full w-auto text-moss" />
            </div>
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/25" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-10 py-9">
              <div className="flex items-center gap-8">
                <span className="text-[10px] uppercase tracking-[0.32em] text-ink/30 font-sans">08</span>
                <div>
                  <h3
                    className="font-serif text-ink leading-tight mb-1"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
                  >
                    Community Collaboration
                  </h3>
                  <p className="font-sans text-ink-soft text-sm leading-relaxed max-w-md">
                    Co-create projects rooted in local and indigenous ecological knowledge to restore connection with nature.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 inline-flex items-center gap-2 border border-ink/20 rounded-full px-7 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-cream transition-all duration-300 group/btn self-start md:self-auto"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
