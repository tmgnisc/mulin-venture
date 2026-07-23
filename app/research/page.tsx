'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { Button } from '@/components/ui/button'

const articles = [
  {
    slug: 'smart-irrigation-system',
    image:
      'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=900&q=80',
    title:
      'Smart Multi-Pot Irrigation System: ESP32-Controlled, Rotary-Valve Watering (No Soil Sensors)',
    tag: 'Smart Irrigation & Technology',
    summary:
      'Most home watering systems treat every plant the same way — one schedule, one zone, no exceptions. This project solves that problem using a single pump, a rotating valve, and an ESP32 controller controlled from a phone app — with no soil sensors involved.',
  },
]

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

export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f3f5f4] pb-20">
        <section className="relative overflow-hidden border-b border-[#d8dfdc]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1920&q=80"
              alt="Smart irrigation system with electronic components"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[#06211a]/75 backdrop-blur-[2px]" />
          </div>
          <motion.div
            className="relative mx-auto max-w-[1200px] px-[clamp(20px,5.2vw,80px)] pt-28 pb-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              className="mx-auto mb-5 inline-flex rounded-full bg-white/12 px-4 py-1 text-xs font-medium tracking-[0.08em] text-white/90"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              Mulin Research
            </motion.p>
            <motion.h1
              className="font-sans text-white font-semibold leading-[1.05]"
              style={{ fontSize: 'clamp(1rem, 4vw, 3rem)' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              Our Research
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-3xl text-[clamp(0.95rem,1.3vw,1.75rem)] text-white/80 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              Exploring practical innovations in smart irrigation, sustainable technology, and environmental design.
            </motion.p>
          </motion.div>
        </section>

        <motion.section
          className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,56px)] pt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionContainer}
        >
          <motion.h2
            className="mb-8 font-sans text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold text-[#1e2522]"
            variants={sectionRise}
          >
            Latest Articles
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={sectionContainer}
          >
            {articles.map((article) => (
              <motion.article
                key={article.slug}
                layout
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={sectionRise}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                whileHover={{ y: -2 }}
                className="border-b border-[#d5ddda] pb-8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:items-start">
                  <div className="overflow-hidden rounded-xl">
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
                      <Image src={article.image} alt={article.title} width={260} height={170} className="h-[170px] w-full object-cover" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#454C23]">Research Article <span className="ml-2 font-normal text-[#74847d]">July 2026</span></p>
                    <h3 className="font-sans text-[clamp(1.25rem,2.2vw,2.1rem)] font-semibold leading-[1.2] text-[#1f2724]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.08em] text-[#60716b]">
                      By Mulin Research Division
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#5b6f67]">{article.tag}</p>
                    <p className="mt-3 font-sans text-sm text-[#4f625a] leading-relaxed max-w-2xl">
                      {article.summary}
                    </p>
                    <Button
                      asChild
                      className="mt-5 h-auto rounded-lg bg-[#454C23] px-5 py-2.5 text-[11px] font-semibold tracking-[0.02em] text-white hover:bg-[#454C23]"
                    >
                      <a href="/docs/Smart_Irrigation_System_Documentation_Report.docx" download>
                        ↓ Download Report
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
