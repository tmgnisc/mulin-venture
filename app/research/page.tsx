'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useMemo, useState } from 'react'

const articles = [
  {
    slug: 'walkable-cities-nepal',
    image:
      'https://images.unsplash.com/photo-1694963659943-7b88b7ef4787?auto=format&fit=crop&w=900&q=80',
    title:
      'Creating Walkable Cities in Nepal: Translating Walkability to the Topography of Nepal — A Blueprint for Sustainable Urban Mobility',
    tag: 'Community Impact & Stakeholder Engagement',
  },
  {
    slug: 'green-infrastructure-resilience',
    image:
      'https://images.unsplash.com/photo-1628756168998-f0ab9f39f20c?auto=format&fit=crop&w=900&q=80',
    title:
      'Green Infrastructure Resilience: Vertical Garden Systems for Hospitality, Corporate, and Culinary Sectors in Nepal',
    tag: 'Green Infrastructure & Urban Ecology',
  },
  {
    slug: 'lca-ai-vs-education',
    image:
      'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=900&q=80',
    title:
      'Comparative Life Cycle Assessment: Digital AI Image Generation Versus In-Person Environmental Education',
    tag: 'Material Life Cycle & Circularity',
  },
  {
    slug: 'biogenic-voc-mitigation',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
    title:
      'Biogenic VOC Mitigation in Urban Silviculture: A Comprehensive Analysis of Low-Emission Plant Species for Air Quality Management',
    tag: 'Biomimicry & Architectural Heritage',
  },
  {
    slug: 'luxury-retail-imperative',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    title:
      'The 2026 Imperative: Strategic Recalibration of Luxury Retail for Sustainable Value Creation',
    tag: 'Material Life Cycle & Circularity',
  },
]

const tags = [
  'Green Infrastructure & Urban Ecology',
  'Material Life Cycle & Circularity',
  'Biomimicry & Architectural Heritage',
  'Community Impact & Stakeholder Engagement',
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
  const [activeTag, setActiveTag] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return articles.filter((article) => {
      const tagMatch = activeTag === 'All' || article.tag === activeTag
      const queryMatch =
        normalizedQuery.length === 0 ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.tag.toLowerCase().includes(normalizedQuery)
      return tagMatch && queryMatch
    })
  }, [activeTag, searchQuery])

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
              <Input
                type="text"
                placeholder="Search research papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-lg border-0 bg-transparent px-4 py-0.5 text-base text-[#1f2724] placeholder:text-[#93a19a] shadow-none focus-visible:ring-0"
              />
            </motion.div>
            <motion.div
              className="mt-4 flex flex-wrap justify-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              <motion.div
                whileHover={{ y: -1, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              >
                <Badge
                  onClick={() => setActiveTag('All')}
                  className="cursor-pointer rounded-full px-5 py-2 text-sm text-white transition-colors hover:bg-[#185542]"
                  style={{ backgroundColor: activeTag === 'All' ? '#185542' : '#6f8279' }}
                >
                  All
                </Badge>
              </motion.div>
              <div className="mt-0 flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ y: -1, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  >
                    <Badge
                      onClick={() => setActiveTag(tag)}
                      variant="secondary"
                      className="cursor-pointer rounded-full px-4 py-2 text-sm font-normal text-[#50675e] transition-colors"
                      style={{
                        backgroundColor: activeTag === tag ? '#c7d9d0' : '#e1e6e3',
                      }}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.article
                  key={article.slug}
                  layout
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={sectionRise}
                  exit={{ opacity: 0, y: -10 }}
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
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1b5d49]">Research Article <span className="ml-2 font-normal text-[#74847d]">April 2026</span></p>
                      <h3 className="font-sans text-[clamp(1.25rem,2.2vw,2.1rem)] font-semibold leading-[1.2] text-[#1f2724]">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.08em] text-[#60716b]">
                        By Mulin Research Division
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#5b6f67]">{article.tag}</p>
                      <Button
                        asChild
                        className="mt-5 h-auto rounded-lg bg-[#1a5845] px-5 py-2.5 text-[11px] font-semibold tracking-[0.02em] text-white hover:bg-[#144535]"
                      >
                        <a href={`/research/${article.slug}`}>
                        ↓ Download Report
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-[#d5ddda] bg-[#ebf0ed] px-6 py-10 text-center"
              >
                <p className="text-sm text-[#4f625a]">No research papers match this filter.</p>
              </motion.div>
            )}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Button asChild className="h-auto rounded-lg bg-[#1a5845] px-6 py-3 text-xs font-semibold tracking-[0.02em] text-white hover:bg-[#144535]">
                <a href="#">Read More →</a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
