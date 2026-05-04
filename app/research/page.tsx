'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'

const articles = [
  {
    slug: 'walkable-cities-nepal',
    image:
      'https://images.unsplash.com/photo-1694963659943-7b88b7ef4787?auto=format&fit=crop&w=900&q=80',
    title:
      'Creating Walkable Cities in Nepal: Translating Walkability to the Topography of Nepal — A Blueprint for Sustainable Urban Mobility',
  },
  {
    slug: 'green-infrastructure-resilience',
    image:
      'https://images.unsplash.com/photo-1628756168998-f0ab9f39f20c?auto=format&fit=crop&w=900&q=80',
    title:
      'Green Infrastructure Resilience: Vertical Garden Systems for Hospitality, Corporate, and Culinary Sectors in Nepal',
  },
  {
    slug: 'lca-ai-vs-education',
    image:
      'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=900&q=80',
    title:
      'Comparative Life Cycle Assessment: Digital AI Image Generation Versus In-Person Environmental Education',
  },
  {
    slug: 'biogenic-voc-mitigation',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
    title:
      'Biogenic VOC Mitigation in Urban Silviculture: A Comprehensive Analysis of Low-Emission Plant Species for Air Quality Management',
  },
  {
    slug: 'luxury-retail-imperative',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    title:
      'The 2026 Imperative: Strategic Recalibration of Luxury Retail for Sustainable Value Creation',
  },
]

const tags = [
  'Green Infrastructure & Urban Ecology',
  'Material Life Cycle & Circularity',
  'Biomimicry & Architectural Heritage',
  'Community Impact & Stakeholder Engagement',
]

export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#f3f5f4] pb-20">
        <section className="relative overflow-hidden border-b border-[#d8dfdc]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1920&q=80"
              alt="Research hero"
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
              Explore our research on sustainable building science, green infrastructure, biomimicry, and community-driven environmental design.
            </motion.p>
            <motion.div
              className="mx-auto mt-12 max-w-[700px] rounded-xl border border-[#c7d1cc] bg-white/95 p-2.5 shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              <input
                type="text"
                placeholder="Search research papers..."
                className="w-full rounded-lg bg-transparent px-4 py-0.5 text-base text-ink placeholder:text-[#93a19a] focus:outline-none"
              />
            </motion.div>
            <motion.div
              className="mt-4 flex flex-wrap justify-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              <motion.span
                className="rounded-full bg-[#185542] px-5 py-2 text-sm text-white"
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              >
                All
              </motion.span>
              <div className="mt-0 flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="rounded-full bg-[#e1e6e3] px-4 py-2 text-sm text-[#50675e]"
                    whileHover={{ y: -1, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,56px)] pt-8">
          <h2 className="mb-8 font-sans text-[clamp(1.8rem,3.2vw,2.7rem)] font-semibold text-[#1e2522]">Latest Articles</h2>

          <div className="space-y-4">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-[#d5ddda] pb-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:items-start">
                  <div className="overflow-hidden rounded-xl">
                    <Image src={article.image} alt={article.title} width={260} height={170} className="h-[170px] w-full object-cover" />
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1b5d49]">Research Article <span className="ml-2 font-normal text-[#74847d]">April 2026</span></p>
                    <h3 className="font-sans text-[clamp(1.25rem,2.2vw,2.1rem)] font-semibold leading-[1.2] text-[#1f2724]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.08em] text-[#60716b]">
                      By Mulin Research Division
                    </p>
                    <a
                      href={`/research/${article.slug}`}
                      className="mt-5 inline-flex items-center rounded-lg bg-[#1a5845] px-5 py-2.5 text-[11px] font-semibold tracking-[0.02em] text-white transition-colors hover:bg-[#144535]"
                    >
                      ↓ Download Report
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-[#1a5845] px-6 py-3 text-xs font-semibold tracking-[0.02em] text-white transition-colors hover:bg-[#144535]"
            >
              Read More →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
