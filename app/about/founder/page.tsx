'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { PageBreadcrumb } from '@/components/mulin/page-breadcrumb'
import Image from 'next/image'

const journeyMilestones = [
  {
    no: '01',
    logo: '/achievement/Nabil_SSE_logo.jpg',
    logoAlt: 'Nabil School of Social Entrepreneurship logo',
    logoBox: 'h-24 w-24',
    year: '2024',
    org: 'Nabil School of Social Entrepreneurship',
    title: 'Fellowship',
    desc: 'Selected for the 2024 Nabil School of Social Entrepreneurship Fellowship.',
  },
  {
    no: '02',
    logo: '/achievement/IFRC.svg',
    logoAlt: 'IFRC logo',
    logoBox: 'h-14 w-[124px]',
    year: '2024',
    org: 'IFRC Limited Phase 1 Seed Fund',
    title: 'Seed Fund Recipient',
    desc: 'Recognized as an IFRC Limited Phase 1 Seed Fund Recipient.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function FounderPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#edf2ed] text-[#454C23]">
        <section className="relative overflow-hidden border-b border-[#cfd9d2] bg-[#454C23] pt-20">
          <PageBreadcrumb segments={['about', 'founder']} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.09),transparent_40%),radial-gradient(circle_at_78%_80%,rgba(255,255,255,0.08),transparent_36%)]" />
          <motion.div
            className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-4 pb-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div>
              <motion.p variants={rise} className="text-xs tracking-[0.2em] text-[#c7ddd0]">
                FOUNDER
              </motion.p>
              <motion.h1 variants={rise} className="mt-4 font-serif text-5xl leading-tight text-[#f0f5ef] md:text-7xl">
                Meet Our Founder
              </motion.h1>
              <motion.p variants={rise} className="mt-6 max-w-3xl text-base leading-relaxed text-[#d8e8dd] md:text-lg">
                Monica Neupane founded Mulin Venture to build environmentally responsible and socially conscious green spaces that nurture wellbeing and biodiversity in urban life.
              </motion.p>
            </div>

            <motion.div variants={rise} className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-[460px]">
              <Image
                src="/Profile Founder.jpg"
                alt="Monica Neupane — Founder of Mulin Venture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-[0.2em] text-[#dbe8de]">FOUNDER&apos;S MESSAGE</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  &ldquo;Sustainable cities begin when we design every space as part of nature, not apart from it.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="mx-auto max-w-6xl px-6 py-14 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div variants={rise}>
              <p className="text-xs tracking-[0.16em] text-[#737F3C]">FOUNDER&apos;S MESSAGE</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-[#454C23] md:text-5xl">
                Designing green spaces that nurture life, restore biodiversity, and inspire connection with nature.
              </h2>

              <blockquote className="mt-8 border-l-4 border-[#737F3C] pl-6">
                <p className="font-serif italic text-[#454C23] text-xl md:text-2xl leading-relaxed">
                  &ldquo;Sustainable cities begin when we design every space as part of nature, not apart from it.&rdquo;
                </p>
              </blockquote>

              <p className="mt-6 max-w-xl leading-relaxed text-[#3d5145]">
                Monica Neupane founded Mulin Venture to build environmentally responsible and socially conscious green spaces that nurture wellbeing and biodiversity in urban life.
              </p>

              <p className="mt-4 max-w-xl leading-relaxed text-[#3d5145]">
                Her work bridges biophilic design, community learning, and indigenous ecological knowledge, helping clients and communities create spaces that actively support climate-positive outcomes.
              </p>

              <div className="mt-8 flex flex-col gap-1">
                <span className="font-serif text-[#454C23] text-lg">Monica Neupane</span>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#737F3C]">
                  Founder, Mulin Venture
                </span>
              </div>
            </motion.div>

            <motion.div variants={rise} className="relative min-h-[500px] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=1200&q=80"
                alt="Lush green rooftop garden representing the founder's vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">VISION IN ACTION</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                  Every project we build weaves nature into architecture — improving air, mood, and biodiversity.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise}>
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">FOUNDER&apos;S JOURNEY</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Recognition, learning, and experiences that shaped the work behind Mulin Venture.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              Milestones from the founder&apos;s journey in social entrepreneurship and impact-oriented work.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <div aria-hidden="true" className="hidden lg:block absolute top-[5px] left-[12%] right-[12%] h-px bg-[#737F3C]/25" />
            <div aria-hidden="true" className="lg:hidden absolute top-1 bottom-1 left-[23px] w-px bg-[#737F3C]/25" />

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {journeyMilestones.map((milestone, index) => (
                <motion.article
                  key={milestone.no}
                  variants={rise}
                  className="relative group"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[23px] lg:left-1/2 top-0 lg:top-[3px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#737F3C] bg-[#edf2ed] shadow-[0_0_0_5px_rgba(115,127,60,0.12)] transition-transform duration-500 group-hover:scale-125"
                  />

                  <div className="lg:pt-10 pl-14 lg:pl-0">
                    <div className="bg-[#f7faf6] rounded-2xl border border-[#c7d5cb] p-7 md:p-9 h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#737F3C]/40 hover:shadow-[0_18px_40px_rgba(16,28,20,0.08)]">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className={`relative overflow-hidden rounded-xl bg-white border border-[#737F3C]/10 flex items-center justify-center shrink-0 ${milestone.logoBox}`}>
                          <Image
                            src={milestone.logo}
                            alt={milestone.logoAlt}
                            fill
                            sizes="120px"
                            className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                          />
                        </span>
                        <div className="text-right shrink-0">
                          {milestone.year && (
                            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#454C23]/50">
                              {milestone.year}
                            </span>
                          )}
                          <span className="block text-[10px] uppercase tracking-[0.32em] text-[#737F3C]/60 mt-1">
                            Milestone {milestone.no}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-[#454C23] text-2xl leading-tight">{milestone.org}</h3>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#737F3C] mt-1.5">
                        {milestone.title}
                      </p>
                      <p className="font-sans font-light text-[#3d5145] leading-relaxed mt-4 text-[15px] max-w-md">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
