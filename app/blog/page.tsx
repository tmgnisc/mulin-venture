'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { PageBreadcrumb } from '@/components/mulin/page-breadcrumb'
import { blogPosts, blogCategories } from '@/lib/blog-data'

const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const sectionRise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return blogPosts
    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-moss pb-20 pt-24">
          <PageBreadcrumb segments={['blog']} />
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80"
              alt="Decorative background pattern representing botanical growth and natural forms"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-[0.08em] text-gold"
            >
              Mulin Journal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="font-serif text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-sm text-white/70 leading-relaxed"
            >
              Stories, guides, and insights at the intersection of biophilic design, plant care, and sustainable living.
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-cream border-b border-border-sage">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-6">
            <div className="flex flex-wrap items-center gap-2 justify-center">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-sage text-white'
                      : 'bg-cream-dark text-ink-soft hover:bg-sage/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-cream py-[clamp(60px,8vw,100px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionRise}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                        <Image
                          src={post.image}
                          alt={post.alt}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-moss/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-sage font-sans">
                          {post.category}
                        </span>
                        <span className="w-px h-3 bg-sage/30" />
                        <span className="text-[10px] text-ink-soft/60 font-sans">
                          {post.date}
                        </span>
                      </div>
                      <h2
                        className="font-serif text-ink leading-[1.15] mb-2 group-hover:text-sage transition-colors"
                        style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)' }}
                      >
                        {post.title}
                      </h2>
                      <p className="font-sans text-sm text-ink-soft leading-relaxed line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sage text-xs">
                        <span className="font-medium tracking-wide">Read Article</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-ink-soft text-sm">No articles found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
