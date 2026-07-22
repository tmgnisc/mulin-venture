'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from './svg-assets'
import { productHubItems } from './product-page-data'

export function HomeProductsSection() {
  return (
    <section id="products" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-330 mx-auto px-[clamp(20px,5vw,80px)]">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-sage inline-block" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-sage font-sans">What We Make</span>
            </div>
            <h2
              className="font-serif text-ink leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Our Products
            </h2>
          </div>
          <p className="font-sans font-light text-ink-soft max-w-xs leading-relaxed text-sm md:text-right">
            Three core product lines built for living aesthetics, biodiversity action, and community learning.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productHubItems.map((product, index) => (
            <Link
              key={product.slug}
              href={product.href}
              className="group relative overflow-hidden rounded-[28px] min-h-115 block"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-moss via-moss/30 to-transparent" />
              <div className="absolute top-7 left-7">
                <span className="text-[10px] uppercase tracking-[0.32em] text-white/40 font-sans">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <div className="h-px w-10 bg-gold/50 mb-6" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3 font-sans">
                  {product.eyebrow}
                </span>
                <h3
                  className="font-serif text-white leading-[1.08] mb-3"
                  style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)' }}
                >
                  {product.title}
                </h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed max-w-95 mb-7 line-clamp-3">
                  {product.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-gold group-hover:text-white transition-colors">
                  <span className="font-medium tracking-wide">View Product</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-ink/20 rounded-full px-7 py-3 text-sm font-medium text-ink hover:bg-ink hover:text-cream transition-all duration-300 group/btn"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
