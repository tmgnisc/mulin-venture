'use client'

const articles = [
  {
    id: 1,
    title: 'The Art of Moss Walls: A Complete Guide',
    category: 'Care Guide',
    date: 'March 15, 2026',
    readTime: '8 min read',
    excerpt: 'Discover how preserved moss walls can transform your space with minimal maintenance and maximum impact.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e6713bbf2132f62e71a5389/1588878556739-1VFN907TT7784A0YKJ26/DSC_0369.jpg?format=2500w',
  },
  {
    id: 2,
    title: 'Choosing the Right Vessel for Your Plant',
    category: 'Design Tips',
    date: 'March 8, 2026',
    readTime: '6 min read',
    excerpt: 'From ceramic to concrete, learn how to match your plant with the perfect vessel for both style and health.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e6713bbf2132f62e71a5389/1588878556739-1VFN907TT7784A0YKJ26/DSC_0369.jpg?format=2500w',
  },
  {
    id: 3,
    title: 'How Indoor Plants Improve Air Quality',
    category: 'Wellness',
    date: 'February 28, 2026',
    readTime: '5 min read',
    excerpt: 'The science behind how certain plant species can purify your indoor air and boost your well-being.',
    image: 'https://images.squarespace-cdn.com/content/v1/5e6713bbf2132f62e71a5389/1588878556739-1VFN907TT7784A0YKJ26/DSC_0369.jpg?format=2500w',
  },
]

export function JournalSection() {
  return (
    <section id="journal" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Botanical Journal
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-moss/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-gold text-sm tracking-wide border border-gold px-6 py-3 rounded-full">
                    Read Article
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-2">
                  {article.category}
                </span>
                <h3 
                  className="font-serif text-ink mb-3 group-hover:text-sage transition-colors"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                >
                  {article.title}
                </h3>
                <p className="font-sans text-xs text-ink-soft mb-3">
                  {article.date} · {article.readTime}
                </p>
                <p className="font-sans font-light text-ink-soft leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-sage text-sm tracking-wide hover:text-sage-dark transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
