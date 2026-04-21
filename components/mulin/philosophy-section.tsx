'use client'

const philosophyItems = [
  {
    title: 'Empower Action',
    description: 'Equipping individuals, particularly youth, with the knowledge, skills, and emotional resilience to transform climate anxiety into constructive climate action.',
  },
  {
    title: 'Foster Literacy',
    description: 'Developing and implementing engaging environmental education programs that build a foundational understanding of ecological principles, climate science, and sustainable practices.',
  },
  {
    title: 'Promote Solutions',
    description: 'Shifting narratives from doom and gloom to possibility and agency — highlighting viable solutions, success stories, and pathways for individual and collective impact.',
  },
  {
    title: 'Build Community',
    description: 'Facilitating connections among individuals and organisations, fostering a sense of shared purpose and collective efficacy in addressing environmental challenges.',
  },
  {
    title: 'Advocate Change',
    description: 'Advocating for policies and practices that support environmental education, mental health resources for climate anxiety, and sustainable development at local, national, and global levels.',
  },
]

const marqueeText = 'CLIMATE ACTION · ENVIRONMENTAL EDUCATION · YOUTH EMPOWERMENT · CLIMATE ANXIETY · SUSTAINABILITY · ECOLOGICAL LITERACY · SYSTEMIC CHANGE · COMMUNITY BUILDING · SOLUTIONS-ORIENTED · '

export function PhilosophySection() {
  return (
    <section className="bg-cream-dark">
      {/* Mission Heading */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] pt-[clamp(60px,8vw,100px)]">
        <div className="text-center mb-12" id="mission" data-aos="fade-up">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">✦ Our Mission</span>
          <h2 className="font-serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Five Pillars of Action
          </h2>
        </div>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] pb-[clamp(60px,8vw,100px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gold/20 rounded-2xl overflow-hidden">
          {philosophyItems.map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 md:p-10 transition-colors duration-300 hover:bg-gold-light/30 border-gold/20 ${
                index < philosophyItems.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
              } ${index === 2 ? 'md:border-b lg:border-b-0' : ''} ${index === 3 ? 'md:border-r lg:border-r' : ''}`}
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
