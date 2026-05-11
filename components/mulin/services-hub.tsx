'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, MonsteraLeaf } from './svg-assets'
import { serviceHubItems } from './service-page-data'
import { Footer } from './footer'
import { Navigation } from './navigation'

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

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function ServicesHub() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f4f1e8] text-[#1d2d25]">
        <section className="relative overflow-hidden border-b border-[#d8ddd7] bg-[#17342c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.11),transparent_34%),radial-gradient(circle_at_80%_78%,rgba(198,169,106,0.16),transparent_30%),linear-gradient(180deg,rgba(8,18,15,0.12),rgba(8,18,15,0.62))]" />
          <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#c6a96a]/10 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-[-4rem] h-72 w-72 rounded-full bg-[#86a89a]/10 blur-3xl" />

          <motion.div
            className="relative mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:pb-20"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="max-w-3xl">
              <motion.p
                variants={item}
                className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm"
              >
                Services Hub
              </motion.p>
              <motion.h1
                variants={item}
                className="mt-5 font-serif leading-[0.96] text-white"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.4rem)' }}
              >
                Eight focused pathways, one clear starting point.
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-white/80"
              >
                Explore the service families below to move from the overview into a dedicated detail page, each with its own context, process, and next-step guidance.
              </motion.p>
              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c6a96a] px-6 py-3 text-sm font-medium text-[#10211b] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Back Home
                </Link>
              </motion.div>
            </div>

            <motion.div variants={item} className="grid grid-cols-3 gap-3 rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Detailed pages</p>
                <p className="mt-2 font-serif text-3xl leading-none text-white">08</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Card system</p>
                <p className="mt-2 font-serif text-3xl leading-none text-white">01</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Motion style</p>
                <p className="mt-2 font-serif text-3xl leading-none text-white">FX</p>
              </div>
              <div className="col-span-3 rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">Navigation</p>
                  <MonsteraLeaf className="h-7 w-7 text-white/70" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Each service opens into a matching detail page with a consistent skeleton and a contextual layout.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
          >
            {serviceHubItems.map((service, index) => (
              <motion.article
                key={service.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[28px] border border-[#d6ded9] bg-[#fbfaf5] p-6 shadow-[0_20px_45px_rgba(17,31,24,0.06)]"
                style={{
                  background: `linear-gradient(180deg, ${service.accent}18 0%, rgba(251,250,245,0.95) 54%, rgba(251,250,245,1) 100%)`,
                }}
              >
                <div className="absolute -right-10 -top-12 text-[#17342c] opacity-[0.05] pointer-events-none">
                  <MonsteraLeaf className="h-44 w-44" />
                </div>
                <div className="relative flex h-full min-h-64 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#73837b]">{service.eyebrow}</p>
                      <p className="mt-3 inline-flex rounded-full border border-[#17342c]/10 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#55665d]">
                        {service.order}
                      </p>
                    </div>
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full border border-[#17342c]/10 bg-white/75 text-[#17342c] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="pt-10">
                    <h2 className="font-serif text-[clamp(1.55rem,2vw,2.2rem)] leading-[1.02] text-[#1f2d27]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[#51665c]">
                      {service.summary}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#17342c] px-4 py-2.5 text-xs font-medium tracking-[0.06em] text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore page
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
