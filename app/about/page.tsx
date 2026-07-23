'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const priorities = [
  {
    title: 'Biophilic Design',
    text: 'We create spaces that reconnect people with nature — improving wellbeing, air quality, and biodiversity in every project.',
  },
  {
    title: 'Urban Greening',
    text: 'From rooftop gardens to living walls, we transform underused urban surfaces into thriving green ecosystems.',
  },
  {
    title: 'Workshops & Education',
    text: 'Our plant art workshops and community sessions teach hands-on skills for integrating nature into everyday life.',
  },
  {
    title: 'Sustainable Products',
    text: 'We curate and craft biodiversity-friendly products — moss walls, plant art, and tools for greener living.',
  },
]

const team = [
  {
    title: 'Design & Planning',
    text: 'Translating biophilic principles into site-specific designs that harmonize architecture with native ecology.',
  },
  {
    title: 'Installation & Horticulture',
    text: 'Expert execution of green roofs, living walls, and landscape projects with a focus on long-term plant health.',
  },
  {
    title: 'Research & Innovation',
    text: 'Exploring native species, carbon-capture materials, and regenerative systems to push sustainable design forward.',
  },
]

const blogHighlights = [
  {
    title: 'Biophilic Design in Nepal',
    text: 'How nature-integrated architecture is reshaping urban spaces in Kathmandu and beyond.',
  },
  {
    title: 'The Rise of Living Walls',
    text: 'A deep dive into vertical gardens — their ecological benefits, installation process, and maintenance.',
  },
  {
    title: 'Designing for Biodiversity',
    text: 'Practical strategies for incorporating native plants and wildlife habitats into urban landscapes.',
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

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#edf2ed] text-[#454C23]">
        <section className="relative overflow-hidden border-b border-[#cfd9d2] bg-[#454C23]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.09),transparent_40%),radial-gradient(circle_at_78%_80%,rgba(255,255,255,0.08),transparent_36%)]" />
          <motion.div
            className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-28 pb-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div>
              <motion.p variants={rise} className="text-xs tracking-[0.2em] text-[#c7ddd0]">
                ABOUT US
              </motion.p>
              <motion.h1 variants={rise} className="mt-4 font-serif text-5xl leading-tight text-[#f0f5ef] md:text-7xl">
                Who We Are
              </motion.h1>
              <motion.p variants={rise} className="mt-6 max-w-3xl text-base leading-relaxed text-[#d8e8dd] md:text-lg">
                Mulin Venture is a biophilic design studio dedicated to creating green spaces that nurture wellbeing, restore urban biodiversity, and bring nature back into everyday life.
              </motion.p>
              <motion.p variants={rise} className="mt-4 max-w-3xl text-base leading-relaxed text-[#d8e8dd] md:text-lg">
                Founded in Nepal, we specialize in biophilic design, landscape and rooftop greening, plant art, and sustainable products — helping clients transform spaces into carbon-absorbing havens.
              </motion.p>
            </div>

            <motion.div variants={rise} className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&w=1200&q=80"
                alt="A biophilic interior space blending lush greenery with modern architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-[0.2em] text-[#dbe8de]">BIOPHILIC DESIGN IN PRACTICE</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  Every project we build weaves nature into architecture — improving air, mood, and biodiversity.
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
              <p className="text-xs tracking-[0.16em] text-[#737F3C]">OUR MISSION / VISION</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-[#454C23] md:text-5xl">
                Design green spaces that nurture life, restore biodiversity, and inspire connection with nature.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-[#3d5145]">
                We combine biophilic design, native ecology, and sustainable craftsmanship to create spaces that benefit people and the planet.
              </p>

              <div className="mt-8 border-l border-[#d1ddd3] pl-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">Our Mission</p>
                <p className="mt-2 text-base leading-relaxed text-[#454C23]">
                  To integrate nature into every built space — through biophilic design, green infrastructure, and education that empowers lasting change.
                </p>
              </div>

              <div className="mt-6 border-l border-[#d1ddd3] pl-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">Our Vision</p>
                <p className="mt-2 text-base leading-relaxed text-[#454C23]">
                  A future where every building breathes with greenery, cities support thriving ecosystems, and people live in harmony with the natural world.
                </p>
              </div>
            </motion.div>

            <motion.div variants={rise} className="grid gap-4 sm:grid-cols-[1.08fr_0.72fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?auto=format&fit=crop&w=1200&q=80"
                  alt="Lush green rooftop garden overlooking the Kathmandu skyline"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">Urban greening</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                    Transforming rooftops, facades, and underused spaces into thriving green ecosystems.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative min-h-[200px] overflow-hidden rounded-[24px]">
                  <Image
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"
                    alt="Close-up of a moss wall installation with varied textures and shades of green"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </div>
                <div className="rounded-[24px] border border-[#d8e2d7] bg-[#f7faf6] p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">What we believe</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#355043]">
                    Great design restores — it brings life, colour, and ecology back into the places we inhabit.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-16 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.p variants={rise} className="inline-flex rounded-full bg-[#d7e4da] px-4 py-1 text-xs tracking-[0.16em] text-[#4f6a5b]">
            NATURE FIRST, ALWAYS
          </motion.p>
          <motion.h2 variants={rise} className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#454C23] md:text-5xl">
            We bring biophilic thinking to every project — from concept to completion.
          </motion.h2>

          <motion.div variants={container} className="mt-8 grid gap-4 md:grid-cols-2">
            {priorities.map((item) => (
              <motion.article
                key={item.title}
                variants={rise}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-[#c7d5cb] bg-[#f7faf6] p-6"
              >
                <h3 className="font-sans text-xl font-semibold text-[#454C23]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435a4d]">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-16 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-[22px] border border-[#cfd9d2] bg-[#f8fbf7] px-7 py-8 md:px-8 md:py-10">
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">OUR TEAM</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Meet Our Team</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              A passionate team of designers, horticulturists, and sustainability advocates working together to make every space greener and more liveable.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {team.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                  <h3 className="font-sans text-lg font-semibold text-[#454C23]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#435a4d]">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-3xl bg-[#9A5B3F] px-7 py-10 text-white md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#FFFFFF]">OUR STORY</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The Heart of Our Mission</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#FFFFFF]">
              Our journey began with a simple belief — that nature belongs in every space we inhabit. From small residential projects to large-scale green installations, we have grown into a trusted studio for biophilic design in Nepal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-[#2f4a3a] hover:bg-[#eef5ef]">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                <Link href="/products">Our Products</Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise}>
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">BLOGS</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Our Latest Writing</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              Explore our latest articles on biophilic design, urban greening, plant care, and the ideas shaping our approach to sustainable spaces.
            </p>
          </motion.div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {blogHighlights.map((item) => (
              <motion.article
                key={item.title}
                variants={rise}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#c7d5cb] bg-[#f8fbf7] p-6"
              >
                <h3 className="font-sans text-lg font-semibold text-[#454C23]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435a4d]">{item.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild className="rounded-full bg-[#454C23] px-6 text-white hover:bg-[#454C23]">
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-[22px] bg-[#454C23] px-7 py-9 text-white md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#c7ddd0]">OUR APPROACH</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Every project is rooted in ecological thinking.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
              We draw on native plant science, climate-responsive design, and years of hands-on experience to create green spaces that thrive in Nepal&apos;s unique environment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-[#454C23] hover:bg-[#eef5ef]">
                <Link href="/research">Our Research</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-24 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-[22px] border border-[#cfd9d2] bg-[#f8fbf7] px-7 py-9 md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">CONTACT INFORMATION</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Feel free to contact and reach us.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">Phone</p>
                <a href="tel:+9779847519689" className="mt-3 block text-sm text-[#454C23] hover:underline">+977 984-7519689</a>
              </div>
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">Email</p>
                <a href="mailto:info@mulinventure.com" className="mt-3 block text-sm text-[#454C23] hover:underline">info@mulinventure.com</a>
              </div>
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#737F3C]">Location</p>
                <p className="mt-3 text-sm text-[#454C23]">Kathmandu, Nepal</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
