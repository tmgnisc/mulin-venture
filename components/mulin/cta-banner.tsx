'use client'

import { TropicalLeaf, MonsteraLeaf } from './svg-assets'

export function CTABanner() {
  return (
    <section
      className="relative overflow-hidden px-[clamp(20px,5vw,80px)] py-[clamp(64px,10vw,110px)]"
      style={{ background: 'linear-gradient(180deg, #EEF2EF 0%, #E7ECE8 100%)' }}
    >
      <div className="mx-auto w-full max-w-[1280px]" data-aos="fade-up">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-serif text-moss mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            Bring Nature Into Your Habitat
          </h2>

          <p className="font-sans font-light text-moss/60 max-w-[620px] mx-auto mb-12 leading-relaxed text-[clamp(1rem,1.35vw,1.25rem)]">
            Start your botanical journey today. Every plant we create is a unique expression
            of your space and style.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <article
            className="rounded-2xl border border-moss/8 bg-white/80 p-7 shadow-[0_10px_24px_rgba(16,28,20,0.06)] backdrop-blur-sm transform-gpu will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(16,28,20,0.10)]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/12 bg-[#f3f5f1]">
              <TropicalLeaf className="h-4 w-4 text-sage/75" />
            </span>
            <h3 className="mb-3 font-serif text-[clamp(1.15rem,1.5vw,1.4rem)] text-moss">
              Climate Change Education
            </h3>
            <p className="font-sans font-light leading-relaxed text-moss/65">
              Interactive sessions help students understand climate science, impacts, and
              real-world solutions.
            </p>
          </article>

          <article
            className="rounded-2xl border border-moss/8 bg-white/80 p-7 shadow-[0_10px_24px_rgba(16,28,20,0.06)] backdrop-blur-sm transform-gpu will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(16,28,20,0.10)]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/12 bg-[#f3f5f1]">
              <MonsteraLeaf className="h-4 w-4 text-[#8E8A74]" />
            </span>
            <h3 className="mb-3 font-serif text-[clamp(1.15rem,1.5vw,1.4rem)] text-moss">Waste Auditing</h3>
            <p className="font-sans font-light leading-relaxed text-moss/65">
              Hands-on training in waste auditing techniques helps teams measure and reduce
              school waste.
            </p>
          </article>

          <article
            className="rounded-2xl border border-moss/8 bg-white/80 p-7 shadow-[0_10px_24px_rgba(16,28,20,0.06)] backdrop-blur-sm transform-gpu will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(16,28,20,0.10)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-moss/12 bg-[#f3f5f1]">
              <TropicalLeaf className="h-4 w-4 text-moss/60" />
            </span>
            <h3 className="mb-3 font-serif text-[clamp(1.15rem,1.5vw,1.4rem)] text-moss">
              School Green Programs
            </h3>
            <p className="font-sans font-light leading-relaxed text-moss/65">
              We co-design simple school initiatives that support segregation, recycling, and
              long-term eco habits.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
