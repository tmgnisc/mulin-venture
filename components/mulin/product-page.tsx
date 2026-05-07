'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, CheckIcon, MonsteraLeaf } from './svg-assets'
import type { ProductPageContent } from './product-page-data'
import { Footer } from './footer'
import { Navigation } from './navigation'

type ProductPageProps = {
  content: ProductPageContent
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function ProductPage({ content }: ProductPageProps) {
  return (
    <>
      <Navigation />
      <main className="bg-[#f3efe6] text-[#1e241f]">
        <section className="relative overflow-hidden bg-[#17342c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_86%_14%,rgba(198,169,106,0.18),transparent_22%),linear-gradient(180deg,#17342c_0%,#214136_100%)]" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#7a9e7e]/12 blur-3xl" />
          <div className="absolute right-[-5rem] top-16 h-80 w-80 rounded-full bg-[#c9a96e]/12 blur-3xl" />

          <motion.div
            className="relative mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-18 lg:grid-cols-[0.96fr_1.04fr] lg:items-center"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={rise} className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                Product Detail
              </p>
              <h1 className="mt-5 font-serif font-light leading-[1.02] text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6.6rem)' }}>
                {content.title}
              </h1>
              <p className="mt-6 max-w-xl font-sans font-light text-[clamp(1rem,1.12vw,1.15rem)] leading-relaxed text-white/78">
                {content.summary}
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
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm text-white/90 transition-colors hover:bg-white/12"
                >
                  Back to Products
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm text-white/72">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <span className="font-serif font-light text-2xl text-white">{stat.value}</span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={rise} className="relative">
              <div className="overflow-hidden rounded-[44px] border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <div className="relative min-h-[430px]">
                  <Image src={content.heroImage} alt={content.heroAlt} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,10,0.08),rgba(6,15,10,0.42))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Product preview</p>
                    <p className="mt-3 max-w-md font-sans font-light text-sm leading-relaxed text-white/84">
                      {content.heroNote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            variants={container}
          >
            <motion.div variants={rise} className="lg:sticky lg:top-28">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#748072]">{content.overviewTitle}</p>
              <h2 className="mt-3 font-serif font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] text-[#1e241f]">
                {content.title} as living structure.
              </h2>
              <p className="mt-5 font-sans font-light text-[15px] leading-relaxed text-[#4a564d]">
                {content.overviewBody}
              </p>
              <p className="mt-6 font-sans font-light text-sm leading-relaxed text-[#5a6a60]">
                The layout stays product-led: a strong hero, a compact spec lead, and a clear feature hierarchy.
              </p>
            </motion.div>

            <motion.div className="relative" variants={rise}>
              <div className="overflow-hidden rounded-[44px] bg-[#f7f3ea] shadow-[0_18px_44px_rgba(18,26,20,0.06)]">
                <div className="relative min-h-[520px]">
                  <Image src={content.bodyImage ?? content.heroImage} alt={content.bodyAlt ?? content.heroAlt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,19,14,0.08),rgba(13,19,14,0.42))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(122,158,126,0.14),transparent_32%),radial-gradient(circle_at_70%_72%,rgba(201,169,110,0.16),transparent_28%)]" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    Product visual
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Primary product view</p>
                    <p className="mt-3 max-w-md font-sans font-light text-sm leading-relaxed text-white/84">
                      The right side now holds a single image, so this row reads like a proper product showcase.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {content.features.map((feature, index) => (
                  <div key={feature.title} className="rounded-[28px] bg-[#f7f3ea] px-4 py-4 shadow-[0_12px_30px_rgba(18,26,20,0.04)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#7f8a79]">0{index + 1}</p>
                    <p className="mt-2 font-serif font-light text-[clamp(1rem,1.2vw,1.2rem)] leading-[1.05] text-[#1e241f]">{feature.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#e9eedf]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(48px,7vw,84px)]">
            <motion.div
              className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.16 }}
              variants={container}
            >
              <motion.div variants={rise}>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#748072]">{content.processTitle}</p>
                <h2 className="mt-3 font-serif font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] text-[#1e241f]">
                  A slower, more natural process.
                </h2>
              </motion.div>
              <motion.div variants={rise} className="max-w-xl font-sans font-light text-sm leading-relaxed text-[#4a564d]">
                The process feels like an installation and decision path, which reads more like a product journey.
              </motion.div>
            </motion.div>

            <motion.div className="mt-10 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} variants={container}>
              {content.process.map((item, index) => (
                <motion.article
                  key={item.step}
                  variants={rise}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="rounded-[36px] bg-[#f7f3ea] p-6 shadow-[0_16px_36px_rgba(18,26,20,0.05)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8a79]">{item.step}</p>
                  <h3 className="mt-4 font-serif font-light text-[clamp(1.55rem,2vw,2.2rem)] leading-[1.02] text-[#1e241f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans font-light text-sm leading-relaxed text-[#4a564d]">{item.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#6f7d6d]">
                    Growth {index + 1}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_1.08fr]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            variants={container}
          >
            <motion.div
              variants={rise}
              className="relative overflow-hidden rounded-[44px] bg-[#17342c] p-8 text-[#f7f1e7] shadow-[0_22px_50px_rgba(18,26,20,0.14)]"
            >
              <div className="absolute -right-8 -top-10 text-white/10">
                <MonsteraLeaf className="h-44 w-44" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">{content.outcomesTitle}</p>
              <h2 className="mt-3 max-w-md font-serif font-light text-[clamp(2rem,4vw,3.5rem)] leading-[1.02]">
                Outcomes that feel like a finished product.
              </h2>
              <p className="mt-4 max-w-xl font-sans font-light text-sm leading-relaxed text-white/78">
                The ending stays product-like and conclusive, with enough visual weight to feel intentional.
              </p>
              <Link
                href="/consultation"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f7f1e7] px-5 py-3 text-sm font-medium text-[#1e241f] transition-transform hover:-translate-y-0.5"
              >
                Start the conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div className="grid gap-4 sm:grid-cols-2" variants={container}>
              {content.outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.title}
                  variants={rise}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  className={`rounded-[34px] p-6 shadow-[0_16px_36px_rgba(18,26,20,0.05)] ${index === 0 ? 'sm:col-span-2 bg-[#17342c] text-[#f7f1e7]' : 'bg-[#f7f3ea]'
                    }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${index === 0 ? 'bg-white/12 text-white' : 'bg-[#eef2ea] text-[#1e241f]'}`}>
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-5 font-serif font-light text-[clamp(1.55rem,2vw,2.2rem)] leading-[1.02] ${index === 0 ? 'text-white' : 'text-[#1e241f]'}`}>
                    {outcome.title}
                  </h3>
                  <p className={`mt-3 font-sans font-light text-sm leading-relaxed ${index === 0 ? 'text-white/78' : 'text-[#4a564d]'}`}>{outcome.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
