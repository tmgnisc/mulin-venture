'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, MonsteraLeaf } from './svg-assets'
import { Footer } from './footer'
import { Navigation } from './navigation'
import { productHubItems } from './product-page-data'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function ProductsHub() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f3efe6] text-[#1e241f]">
        <section className="relative overflow-hidden bg-[#17342c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_86%_14%,rgba(198,169,106,0.18),transparent_22%),linear-gradient(180deg,#17342c_0%,#214136_100%)]" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#7a9e7e]/12 blur-3xl" />
          <div className="absolute right-[-5rem] top-16 h-80 w-80 rounded-full bg-[#c9a96e]/12 blur-3xl" />

          <motion.div
            className="relative mx-auto grid max-w-[1320px] gap-12 px-[clamp(20px,5vw,80px)] pt-28 pb-18 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={rise} className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                Product Section
              </p>
              <h1 className="mt-5 font-serif font-light leading-[1.02] text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6.6rem)' }}>
                Products that grow into the space.
              </h1>
              <p className="mt-6 max-w-xl font-sans font-light text-[clamp(1rem,1.12vw,1.15rem)] leading-relaxed text-white/78">
                A product-first presentation with a strong hero, clear product routes, and enough breathing room to read as a real product section.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c6a96a] px-6 py-3 text-sm font-medium text-[#10211b] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm text-white/90 transition-colors hover:bg-white/12"
                >
                  Back Home
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-white/70">
                <span>living systems</span>
                <span>roof gardens</span>
                <span>installation-ready</span>
              </div>
            </motion.div>

            <motion.div variants={rise} className="relative">
              <div className="overflow-hidden rounded-[44px] border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <div className="relative min-h-[420px]">
                  <Image src="/leaf.jpg" alt="Layered plant texture" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,10,0.08),rgba(6,15,10,0.42))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Product preview</p>
                    <p className="mt-3 max-w-md font-sans font-light text-sm leading-relaxed text-white/84">
                      Two product routes presented with a stronger commercial frame and cleaner product emphasis.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#214136]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-6">
            <div className="flex flex-col gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-white/72 md:flex-row md:items-center md:justify-between">
              <p>featured products</p>
              <p>installation paths</p>
              <p>living systems</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            variants={container}
          >
            {productHubItems.map((product, index) => (
              <motion.article
                key={product.slug}
                variants={rise}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 210, damping: 22 }}
                className={`group overflow-hidden border-b border-[#d7d0c1] py-8 ${index === 0 ? 'pt-0' : ''}`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                  <div className="relative min-h-[360px] overflow-hidden rounded-[40px] lg:min-h-[440px]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,14,0.02),rgba(13,19,14,0.36))]" />
                    <div className="absolute -right-12 -bottom-16 h-52 w-52 rounded-full bg-[#7a9e7e]/18 blur-3xl" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="max-w-md text-sm leading-relaxed text-white/84">{product.detail}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between px-0 py-2 md:py-6">
                    <div className="max-w-xl">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#748072]">{product.eyebrow}</p>
                      <h2 className="mt-3 font-serif font-light text-[clamp(1.55rem,2vw,2.2rem)] leading-[1.02] text-[#1e241f]">
                        {product.title}
                      </h2>
                      <p className="mt-5 font-sans font-light text-[15px] leading-relaxed text-[#49574e]">
                        {product.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#637162]">
                      <span>{product.metric}</span>
                      <span className="h-px w-10 bg-[#7a9e7e]/35" />
                      <span>{product.slug.replace('-', ' ')}</span>
                    </div>

                    <Link
                      href={product.href}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#17342c] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Open product page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="bg-[#e9eedf]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(40px,6vw,72px)]">
            <div className="flex flex-col gap-6 rounded-[40px] bg-[#dfe8d9] px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#72806d]">Need help choosing?</p>
                <h3 className="mt-3 font-serif font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] text-[#1e241f]">
                  The products now feel like they’re growing out of the same garden.
                </h3>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-full bg-[#7a9e7e] px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Plan a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
