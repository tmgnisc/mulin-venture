'use client'

export function BiophilicSection() {
  return (
    <section id="about" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
        <div 
          className="bg-cream-dark rounded-[20px] p-8 md:p-12 lg:p-16"
          data-aos="fade-up"
        >
          {/* Right - Content */}
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">
              ✦ Learn
            </span>
            <h2 
              className="font-serif text-ink mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              What is Biophilic Design?
            </h2>
            <p className="font-sans font-light text-ink-soft leading-relaxed mb-6">
              Biophilic design is an approach to architecture and interior design that seeks to connect 
              building occupants more closely to nature. It incorporates natural materials, views, 
              vegetation, and other elements to create a human-centered approach that improves many 
              of the spaces we live and work in.
            </p>
            <p className="font-sans font-light text-ink-soft leading-relaxed mb-8">
              By integrating natural elements into our built environments, we can reduce stress, 
              enhance creativity and clarity of thought, improve our well-being, and expedite healing.
            </p>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-sage pl-6 my-8">
              <p className="font-serif italic text-sage text-xl md:text-2xl leading-relaxed">
                &ldquo;Biophilic spaces reduce stress by 37% and increase productivity by up to 15%.&rdquo;
              </p>
            </blockquote>

            <a
              href="#"
              className="inline-flex items-center text-sage hover:text-sage-dark text-sm tracking-wide transition-colors"
            >
              Read the Research →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
