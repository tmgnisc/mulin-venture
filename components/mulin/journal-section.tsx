'use client'

import { blogPosts } from '@/lib/blog-data'

export function JournalSection() {
  const articles = blogPosts.slice(0, 3)

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
              key={article.slug}
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <a href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-moss/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-gold text-sm tracking-wide border border-gold px-6 py-3 rounded-full">
                      Read Article
                    </span>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-2">
                  {article.category}
                </span>
                <h3 
                  className="font-serif text-ink mb-3 group-hover:text-sage transition-colors"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                >
                  <a href={`/blog/${article.slug}`}>{article.title}</a>
                </h3>
                <p className="font-sans text-xs text-ink-soft mb-3">
                  {article.date} · {article.readTime}
                </p>
                <p className="font-sans font-light text-ink-soft leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <a
                  href={`/blog/${article.slug}`}
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
