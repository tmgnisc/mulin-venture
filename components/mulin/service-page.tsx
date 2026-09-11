'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, CheckIcon, MonsteraLeaf } from './svg-assets'
import { getProductWhatsAppLink } from '@/lib/whatsapp'
import type { ServicePageContent } from './service-page-data'
import { ApproachSection } from './approach-section'
import { Footer } from './footer'
import { Lightbox, useLightbox } from './lightbox'
import { Navigation } from './navigation'
import { PageBreadcrumb } from './page-breadcrumb'

type ServicePageProps = {
  content: ServicePageContent
  slugArr?: string[]
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

export function ServicePage({ content, slugArr }: ServicePageProps) {
  const breadcrumbSegments = slugArr ?? [content.slug]
  const pagePath = breadcrumbSegments.length > 0 ? `/${breadcrumbSegments.join('/')}` : undefined
  const showcaseImages = content.showcase?.items.map((s) => ({ src: s.image, alt: s.alt })) ?? []
  const showcaseLightbox = useLightbox(showcaseImages)
  return (
    <>
      <Navigation />
      <main className="bg-[#FFFFFF] text-[#454C23]">
        <section className="relative overflow-hidden border-b border-[#d8ddd7] bg-[#454C23] pt-20">
          {breadcrumbSegments.length > 0 && <PageBreadcrumb segments={breadcrumbSegments} />}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.1),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(198,169,106,0.16),transparent_30%),linear-gradient(180deg,rgba(9,20,17,0.16),rgba(9,20,17,0.56))]" />
          <div className="absolute -left-24 top-24 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: `${content.accent}1a` }} />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

          <motion.div
            className="relative mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={rise} className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                {content.eyebrow}
              </p>
              <h1 className="mt-5 font-serif leading-[0.96] text-white" style={{ fontSize: 'clamp(2.7rem, 5.6vw, 5.2rem)' }}>
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-white/80">
                {content.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={getProductWhatsAppLink(content.title, pagePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFBE71] px-6 py-3 text-sm font-medium text-[#2B2F16] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/90 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Back to Services
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {content.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={rise}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                    whileHover={{ y: -3 }}
                  >
                    <div className="font-serif text-3xl leading-none text-white">{stat.value}</div>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={rise} className="relative">
              <div className="absolute -left-8 top-8 h-32 w-32 rounded-full blur-3xl" style={{ backgroundColor: `${content.accent}26` }} />
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.26)] backdrop-blur-md">
                <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/10 md:h-[520px]">
                  <Image src={content.heroImage} alt={content.heroAlt} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-linear-to-t from-black/56 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div className="max-w-sm">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">Service Preview</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">
                        {content.heroNote}
                      </p>
                    </div>
                    <div className="hidden h-14 w-14 rounded-full border border-white/20 bg-white/10 p-3 text-white/80 md:block">
                      <MonsteraLeaf className="h-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={container}
          >
            <motion.div variants={rise} className="lg:sticky lg:top-28 self-start">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6f7f77]">{content.overviewTitle}</p>
              <h2 className="mt-3 max-w-xl font-serif text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.02] text-[#454C23]">
                {content.title} with context, not decoration.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#496055]">
                {content.overviewBody}
              </p>
              <div className="mt-8 space-y-3">
                {content.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={rise}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="flex items-start gap-4 rounded-[18px] border border-[#d7dfda] bg-white/75 p-4 shadow-[0_12px_28px_rgba(18,31,25,0.04)]"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#454C23] text-[11px] text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl leading-tight text-[#454C23]">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#737F3C]">{feature.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="grid gap-4 md:grid-cols-2" variants={container}>
              <motion.article
                variants={rise}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="md:col-span-2 overflow-hidden rounded-[30px] border border-[#d7dfda] bg-white shadow-[0_18px_45px_rgba(18,31,25,0.05)]"
              >
                <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-7 md:p-8">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#7a8c83]">01</span>
                    <h3 className="mt-4 font-serif text-[clamp(1.75rem,2.4vw,2.6rem)] leading-[1.02] text-[#454C23]">
                      {content.features[0].title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#737F3C]">
                      {content.features[0].body}
                    </p>
                  </div>
                  <div className="relative min-h-52 overflow-hidden bg-[#454C23]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(198,169,106,0.25),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_34%)]" />
                    <div className="absolute inset-0 p-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">Foundation</p>
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/76">
                        A focused starting point that defines the standards before the rest of the project decisions lock in.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>

              {content.features.slice(1).map((feature, index) => (
                <motion.article
                  key={feature.title}
                  variants={rise}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  className={`overflow-hidden rounded-[26px] border p-6 shadow-[0_16px_35px_rgba(18,31,25,0.05)] ${
                    index === 0 ? 'border-[#dfe5df] bg-[#f7f9f5]' : 'border-[#d7dfda] bg-[#FFFFFF]'
                  }`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#7a8c83]">0{index + 2}</span>
                    <span className="rounded-full border border-[#454C23]/10 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#55665d]">
                      Detail
                    </span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.45rem,1.9vw,2rem)] leading-[1.02] text-[#454C23]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#737F3C]">{feature.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {content.approach && (
          <ApproachSection
            title={content.approach.title}
            subtitle={content.approach.subtitle}
            items={content.approach.items}
            accent={content.accent}
          />
        )}

        <section className="border-y border-[#d8ddd7] bg-[#eef2ed]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
            <motion.div
              className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div variants={rise}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#6f7f77]">{content.featuresTitle}</p>
                <h2 className="mt-3 font-serif text-[clamp(2rem,3.4vw,3rem)] leading-[1.02] text-[#454C23]">
                  {content.processTitle}
                </h2>
              </motion.div>
              <motion.div variants={rise} className="rounded-[24px] border border-[#d6ddd7] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(18,31,25,0.05)]">
                <p className="text-sm leading-relaxed text-[#52665c]">
                  {content.approach?.subtitle || 'Our approach combines ecological science with thoughtful design to create spaces that thrive.'}
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="mt-10 grid gap-4 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} variants={container}>
              {content.process.map((item, index) => (
                <motion.article
                  key={item.step}
                  variants={rise}
                  whileHover={{ y: -7 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className={`relative overflow-hidden rounded-[28px] border p-6 shadow-[0_16px_35px_rgba(18,31,25,0.05)] ${
                    index === 1 ? 'border-[#454C23] bg-[#454C23] text-white' : index === 2 ? 'border-[#E5ECFF] bg-[#FFFFFF]' : 'border-[#d4ddd8] bg-white'
                  }`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 ${index === 1 ? 'bg-[#FFBE71]' : 'bg-[#454C23]/10'}`} />
                  <div className="mb-8 flex items-center justify-between">
                    <span className={`text-[11px] uppercase tracking-[0.22em] ${index === 1 ? 'text-white/55' : 'text-[#7a8c83]'}`}>{item.step}</span>
                    <span className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${index === 1 ? 'border-white/15 bg-white/10 text-white/80' : 'border-[#454C23]/10 bg-[#f3f6f1] text-[#55665d]'}`}>
                      Stage {index + 1}
                    </span>
                  </div>
                  <h3 className={`font-serif text-2xl ${index === 1 ? 'text-white' : 'text-[#454C23]'}`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index === 1 ? 'text-white/76' : 'text-[#52665c]'}`}>{item.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <motion.div
            className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={container}
          >
            <motion.div
              variants={rise}
              className="relative overflow-hidden rounded-[28px] bg-[#454C23] p-8 text-white shadow-[0_22px_50px_rgba(18,31,25,0.18)]"
            >
              <div className="absolute -right-10 -top-12 text-white/10">
                <MonsteraLeaf className="h-44 w-44" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">{content.outcomesTitle}</p>
              <h2 className="mt-3 max-w-md font-serif text-[clamp(2rem,3.2vw,3rem)] leading-[1.02]">
                Practical outcomes, not abstract promises.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/76">
                The page structure is intentionally calm so the content reads like a real project brief, even while the route is still being built out.
              </p>
              <a
                href={getProductWhatsAppLink(content.title, pagePath)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#454C23] transition-transform hover:-translate-y-0.5"
              >
                Start the conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" variants={container}>
              {content.outcomes.map((outcome, index) => (
                <motion.article
                  key={outcome.title}
                  variants={rise}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                  className={`relative overflow-hidden rounded-[24px] border p-6 ${
                    index === 0 ? 'sm:col-span-2 border-[#454C23] bg-[#454C23] text-white' : index === 1 ? 'border-[#d7dfda] bg-[#FFFFFF]' : 'border-[#E5ECFF] bg-[#FFFFFF]'
                  }`}
                  style={{
                    background:
                      index === 0
                        ? 'linear-gradient(180deg, #454C23 0%, #1d3d34 100%)'
                        : index === 1
                          ? `linear-gradient(180deg, ${content.accent}18 0%, rgba(251,250,245,0.98) 58%, rgba(251,250,245,1) 100%)`
                          : `linear-gradient(180deg, ${content.accent}16 0%, rgba(247,241,230,0.98) 58%, rgba(247,241,230,1) 100%)`,
                  }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${index === 0 ? 'bg-white/12 text-white' : 'bg-[#e6efe8] text-[#454C23]'}`}>
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-5 font-serif text-[clamp(1.45rem,1.8vw,2rem)] leading-tight ${index === 0 ? 'text-white' : 'text-[#454C23]'}`}>
                    {outcome.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index === 0 ? 'text-white/76' : 'text-[#737F3C]'}`}>{outcome.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {content.showcase && content.showcase.items.length > 0 && (
          <section className="border-t border-[#d8ddd7] bg-[#f7f9f5]">
            <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
              <motion.div
                className="mx-auto max-w-2xl text-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
              >
                <motion.p
                  variants={rise}
                  className="text-[11px] uppercase tracking-[0.22em] text-[#6f7f77]"
                >
                  {content.showcase.title}
                </motion.p>
                <motion.h2
                  variants={rise}
                  className="mt-4 font-serif leading-[1.04] text-[#454C23]"
                  style={{ fontSize: 'clamp(2rem, 3.6vw, 3.4rem)' }}
                >
                  {content.showcase.subtitle}
                </motion.h2>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-3 gap-3 md:gap-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={container}
              >
                {content.showcase.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={rise}
                    className="group relative cursor-pointer overflow-hidden rounded-[20px] md:rounded-[28px] transition-transform hover:scale-[1.02]"
                    onClick={() => showcaseLightbox.open(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-6">
                      <h3 className="font-serif text-sm md:text-lg leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 hidden text-xs leading-relaxed text-white/78 md:block">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        <Lightbox
          images={showcaseImages}
          index={showcaseLightbox.index}
          isOpen={showcaseLightbox.isOpen}
          onClose={showcaseLightbox.close}
          onPrev={showcaseLightbox.prev}
          onNext={showcaseLightbox.next}
        />
      </main>
      <Footer />
    </>
  )
}
