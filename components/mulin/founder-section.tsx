'use client'

import Image from 'next/image'

const journeyMilestones = [
  {
    no: '01',
    logo: '/achievement/Nabil_SSE_logo.jpg',
    logoAlt: 'Nabil School of Social Entrepreneurship logo',
    logoBox: 'h-24 w-24',
    year: '2024',
    org: 'Nabil School of Social Entrepreneurship',
    title: 'Fellowship',
    desc: 'Selected for the 2024 Nabil School of Social Entrepreneurship Fellowship.',
  },
  {
    no: '02',
    logo: '/achievement/IFRC.svg',
    logoAlt: 'IFRC logo',
    logoBox: 'h-14 w-[124px]',
    year: '2024',
    org: 'IFRC Limited Phase 1 Seed Fund',
    title: 'Seed Fund Recipient',
    desc: 'Recognized as an IFRC Limited Phase 1 Seed Fund Recipient.',
  },
]

export function FounderSection() {
  return (
    <section id="founder" className="py-[clamp(80px,10vw,140px)] bg-cream-dark">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">✦ Founder&apos;s Message</span>
          <h2 className="font-serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Meet Our Founder
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sage/10" />
              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Profile Founder.jpg"
                  alt="Monica — Founder"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 320px, 380px"
                />
              </div>
              {/* Accent dot */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gold/20" />
            </div>
          </div>

          {/* Content */}
          <div>
            <blockquote className="border-l-4 border-sage pl-6 mb-8">
              <p className="font-serif italic text-sage text-xl md:text-2xl leading-relaxed">
                &ldquo;Sustainable cities begin when we design every space as part of nature, not apart from it.&rdquo;
              </p>
            </blockquote>
            <p className="font-sans font-light text-ink-soft leading-relaxed mb-8">
              <strong className="text-ink font-medium">Monica Neupane</strong> founded Mulin Venture
              to build environmentally responsible and socially conscious green spaces that nurture
              wellbeing and biodiversity in urban life.
            </p>



            <p className="font-sans font-light text-ink-soft leading-relaxed mb-5">
              Her work bridges biophilic design, community learning, and indigenous ecological
              knowledge, helping clients and communities create spaces that actively support
              climate-positive outcomes.
            </p>

            <div className="flex flex-col gap-1">
              <span className="font-serif text-ink text-lg">Monica</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sage">
                Founder, Mulin Venture
              </span>
            </div>
          </div>
        </div>

        {/* Founder Journey */}
        <div className="mt-[clamp(64px,8vw,110px)]">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">
              ✦ Founder&apos;s Journey
            </span>
            <h2 className="font-serif text-ink leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Recognition, learning, and experiences that shaped the work behind Mulin Venture.
            </h2>
            <p className="font-sans font-light text-ink-soft leading-relaxed mt-5 max-w-2xl mx-auto">
              Milestones from the founder&apos;s journey in social entrepreneurship and impact-oriented work.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Desktop connector */}
            <div aria-hidden="true" className="hidden lg:block absolute top-[5px] left-[12%] right-[12%] h-px bg-sage/25" />
            {/* Mobile rail */}
            <div aria-hidden="true" className="lg:hidden absolute top-1 bottom-1 left-[23px] w-px bg-sage/25" />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {journeyMilestones.map((milestone, index) => (
                <article key={milestone.no} className="relative group" data-aos="fade-up" data-aos-delay={index * 150}>
                  {/* Timeline node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[23px] lg:left-1/2 top-0 lg:top-[3px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sage bg-cream-dark shadow-[0_0_0_5px_rgba(115,127,60,0.12)] transition-transform duration-500 group-hover:scale-125"
                  />

                  <div className="lg:pt-10 pl-14 lg:pl-0">
                    <div className="bg-cream rounded-2xl border border-border-sage p-7 md:p-9 h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-sage/40 hover:shadow-[0_18px_40px_rgba(16,28,20,0.08)]">
                      {/* Logo + meta */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className={`relative overflow-hidden rounded-xl bg-white border border-sage/10 flex items-center justify-center shrink-0 ${milestone.logoBox}`}>
                          <Image
                            src={milestone.logo}
                            alt={milestone.logoAlt}
                            fill
                            sizes="120px"
                            className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                          />
                        </span>
                        <div className="text-right shrink-0">
                          {milestone.year && (
                            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-ink/50">
                              {milestone.year}
                            </span>
                          )}
                          <span className="block text-[10px] uppercase tracking-[0.32em] text-sage/60 mt-1">
                            Milestone {milestone.no}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-ink text-2xl leading-tight">{milestone.org}</h3>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-sage mt-1.5">
                        {milestone.title}
                      </p>
                      <p className="font-sans font-light text-ink-soft leading-relaxed mt-4 text-[15px] max-w-md">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
