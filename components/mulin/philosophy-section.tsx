'use client'

const philosophyItems = [
  {
    title: 'Design',
    description: 'We craft each plant arrangement with spatial intention — color, texture, and form considered together.',
  },
  {
    title: 'Customize',
    description: 'Choose your plant species, vessel material, soil blend, and finishing details. Every piece is made to order.',
  },
  {
    title: 'Care',
    description: 'Receive a care card, watering schedule, and lifetime support from our plant specialists.',
  },
]

const marqueeText = 'CUSTOM VESSELS · RARE SPECIES · BESPOKE ARRANGEMENTS · ARTISAN PLANTERS · LIVING WALLS · GIFTING · BOTANICAL DESIGN · MOSS ART · TERRARIUMS · '

export function PhilosophySection() {
  return (
    <section className="bg-cream-dark">
      {/* Philosophy Grid */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] py-[clamp(60px,8vw,100px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {philosophyItems.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 md:p-10 transition-colors duration-300 hover:bg-gold-light/30 ${
                index < philosophyItems.length - 1 ? 'md:border-r border-gold/30' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
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
