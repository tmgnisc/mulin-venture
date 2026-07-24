'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { ArrowRight } from '@/components/mulin/svg-assets'
import { JsonLd } from '@/components/seo/structured-data'
import { PageBreadcrumb } from '@/components/mulin/page-breadcrumb'
import { blogPosts } from '@/lib/blog-data'
import type { BlogPost } from '@/lib/blog-data'

const SITE_URL = 'https://www.mulinventure.com'

export function BlogPostContent({ post }: { post: BlogPost }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nirvix Technology',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-mulin.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      <Navigation />
      <main>
        <JsonLd data={articleSchema} />
        {/* Hero */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden bg-moss">
          <PageBreadcrumb segments={['blog', post.slug]} />
          <div className="absolute inset-0 opacity-20">
            <Image src={post.image} alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-moss via-moss/80 to-moss/60" />
          <div className="relative mx-auto max-w-[800px] px-[clamp(20px,5vw,80px)] text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs text-gold/70 hover:text-gold transition-colors mb-6"
              >
                ← Back to Blog
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-sans">
                {post.category}
              </span>
              <span className="w-px h-3 bg-gold/30" />
              <span className="text-[10px] text-white/50 font-sans">{post.date}</span>
              <span className="w-px h-3 bg-gold/30" />
              <span className="text-[10px] text-white/50 font-sans">{post.readTime}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              {post.title}
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-[720px] px-[clamp(20px,5vw,80px)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-10">
                <Image src={post.image} alt={post.alt} fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-sm max-w-none"
              style={{
                '--tw-prose-body': 'var(--ink-soft)',
                '--tw-prose-headings': 'var(--ink)',
                '--tw-prose-links': 'var(--sage)',
                '--tw-prose-bold': 'var(--ink)',
                '--tw-prose-quotes': 'var(--ink)',
                '--tw-prose-quote-borders': 'var(--sage)',
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border-sage">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage text-xs font-medium">
                  M
                </div>
                <div>
                  <p className="font-sans text-sm text-ink font-medium">{post.author}</p>
                  <p className="font-sans text-xs text-ink-soft/60">{post.date} · {post.readTime}</p>
                </div>
              </div>
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} className="font-serif text-ink text-xl md:text-2xl mt-10 mb-4 leading-snug">
                      {line.slice(3)}
                    </h2>
                  )
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={i} className="font-sans text-sm text-ink font-semibold mt-6 mb-2">
                      {line.slice(2, -2)}
                    </p>
                  )
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="font-sans text-sm text-ink-soft leading-relaxed ml-4">
                      {line.slice(2)}
                    </li>
                  )
                }
                if (line.trim() === '') return <div key={i} className="h-4" />
                return (
                  <p key={i} className="font-sans text-sm text-ink-soft leading-relaxed mb-4">
                    {line}
                  </p>
                )
              })}
            </motion.div>

            {/* Share / Navigate */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-border-sage">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-sage hover:text-sage-dark transition-colors font-medium"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-cream-dark py-[clamp(60px,8vw,100px)]">
            <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
              <h2
                className="font-serif text-ink mb-10 text-center"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-cream rounded-xl overflow-hidden border border-border-sage hover:shadow-sm transition-shadow"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-sage font-sans">
                        {related.category}
                      </span>
                      <h3 className="font-serif text-ink leading-snug mt-1 group-hover:text-sage transition-colors">
                        {related.title}
                      </h3>
                      <p className="font-sans text-xs text-ink-soft/60 mt-2">
                        {related.date} · {related.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
