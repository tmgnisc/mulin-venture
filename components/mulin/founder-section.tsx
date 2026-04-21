'use client'

import Image from 'next/image'

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
                  src="/founder.jpeg"
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
                &ldquo;Educate, connect, and empower — that is the heart of everything we do.&rdquo;
              </p>
            </blockquote>

            <p className="font-sans font-light text-ink-soft leading-relaxed mb-5">
              Monica is the Executive Director of <strong className="text-ink font-medium">Nepal Climate Hub</strong> — a centralised platform for youth in Nepal. The Hub educates, connects, and empowers them. It links youth with climate champions, organisations, and resources, and provides practical guidance for climate action.
            </p>

            <p className="font-sans font-light text-ink-soft leading-relaxed mb-8">
              Monica is also the Founder of <strong className="text-ink font-medium">Mulin Venture</strong>, an initiative that pioneers Green Urbanisation and sustainable, inclusive design — bridging environmental action with the built environment.
            </p>

            <div className="flex flex-col gap-1">
              <span className="font-serif text-ink text-lg">Monica</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-sage">
                Executive Director, Nepal Climate Hub · Founder, Mulin Venture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
