'use client'

const philosophyItems = [
  {
    title: 'Integrate',
    description:
      'Design and deliver eco-friendly spaces that seamlessly weave nature into urban living, promoting health and sustainability.',
  },
  {
    title: 'Educate',
    description:
      'Educate clients and communities on the benefits of biophilic design, fostering a deeper connection between people and nature within built environments.',
  },
  {
    title: 'Innovate',
    description:
      'Pioneer carbon-neutral and regenerative materials, setting a higher standard for sustainable design practice.',
  },
]

const marqueeText =
  'NATURAL NURTURING · BIOPHILIC BALANCE · COMMUNITY COLLABORATION · EDUCATIONAL EMPOWERMENT · NATURE-INTEGRATED SPACES · CARBON-ABSORBING HAVENS · '

export function PhilosophySection() {
  return (
    <section className="bg-cream-dark">
      {/* Mission Heading */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] pt-[clamp(60px,8vw,100px)]">
        <div className="text-center mb-12" id="mission" data-aos="fade-up">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">✦ Our Mission</span>
          <h2 className="font-serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Nurture through Nature
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-sans font-light text-ink-soft leading-relaxed">
            To create environmentally responsible and socially conscious green spaces that
            actively contribute to sustainable carbon-absorbing havens.
          </p>
          <p className="mx-auto mt-3 text-sm uppercase tracking-[0.16em] text-sage">
            Vision: Sustainable cities where nature exists in every space.
          </p>
        </div>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] pb-[clamp(60px,8vw,100px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gold/20 rounded-2xl overflow-hidden">
          {philosophyItems.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 md:p-10 transition-colors duration-300 hover:bg-gold-light/30 border-gold/20 ${
                index < philosophyItems.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span className="inline-block text-gold font-serif text-xl mb-3">0{index + 1}</span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{item.title}</h3>
              <p className="font-sans font-light text-ink-soft leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="overflow-hidden border-t border-b border-sage/20 py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-xs tracking-[0.2em] uppercase text-sage mx-4">
            {marqueeText}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-sage mx-4">
            {marqueeText}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-sage mx-4">
            {marqueeText}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-sage mx-4">
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  )
}
