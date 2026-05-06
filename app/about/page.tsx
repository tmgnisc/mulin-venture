'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const priorities = [
  {
    title: 'Our Priorities',
    text: 'Restore rivers, reduce waste, and empower communities with practical systems that can be sustained locally.',
  },
  {
    title: 'Blogs',
    text: 'Read our latest writing on environmental challenges, project updates, and ideas for a more sustainable Nepal.',
  },
  {
    title: 'How You Can Help',
    text: 'Volunteer, attend workshops, support student-led efforts, and bring everyday sustainable practices into your routine.',
  },
  {
    title: 'Donate to Our Mission',
    text: 'Your support helps fund restoration work, waste diversion, and environmental education where it is needed most.',
  },
]

const team = [
  {
    title: 'Environmental Strategy',
    text: 'Guiding projects that connect conservation goals with practical implementation in schools and neighborhoods.',
  },
  {
    title: 'Community Outreach',
    text: 'Working closely with students, families, and local groups to build participation and long-term stewardship.',
  },
  {
    title: 'Research & Advocacy',
    text: 'Turning field observations into research-backed programs and public-facing environmental awareness.',
  },
]

const blogHighlights = [
  {
    title: 'The Flow of a Crisis',
    text: 'An assessment of water and sanitation in Kathmandu Valley and the public health consequences of system failure.',
  },
  {
    title: 'Nepal’s Environmental Crossroads',
    text: 'A broader look at the country’s air, water, waste, and climate pressures and where action matters most.',
  },
  {
    title: 'Why River Pollution Matters',
    text: 'A practical summary of the causes behind river pollution and the actions needed to reverse the trend.',
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
      <main className="bg-[#edf2ed] text-[#1d2d25]">
        <section className="relative overflow-hidden border-b border-[#cfd9d2] bg-[#123327]">
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
                Mulin Venture is a non-profit organization dedicated to fostering environmental sustainability through innovative solutions and community engagement.
              </motion.p>
              <motion.p variants={rise} className="mt-4 max-w-3xl text-base leading-relaxed text-[#d8e8dd] md:text-lg">
                Founded in Nepal with a mission to protect and restore the natural environment, the organization centers waste reduction, river restoration, and environmental education.
              </motion.p>
            </div>

            <motion.div variants={rise} className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-[460px]">
              <Image
                src="/plant.jpg"
                alt="Environmental restoration in Nepal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs tracking-[0.2em] text-[#dbe8de]">RESTORATION IN ACTION</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  Community-led programs that connect education, stewardship, and practical change.
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
              <p className="text-xs tracking-[0.16em] text-[#5f7568]">OUR MISSION / VISION</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-[#203328] md:text-5xl">
                Restore rivers, reduce waste, and empower communities through practical action.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-[#3d5145]">
                We are focused on environmental sustainability, community participation, and education that creates measurable change on the ground.
              </p>

              <div className="mt-8 border-l border-[#d1ddd3] pl-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">Our Mission</p>
                <p className="mt-2 text-base leading-relaxed text-[#2f4137]">
                  To restore Nepal&apos;s rivers, reduce waste going into landfills, and empower students and local communities to become stewards of change.
                </p>
              </div>

              <div className="mt-6 border-l border-[#d1ddd3] pl-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">Our Vision</p>
                <p className="mt-2 text-base leading-relaxed text-[#2f4137]">
                  A future where rivers flow clean and clear, students lead environmental innovation, and communities embrace sustainable waste systems.
                </p>
              </div>
            </motion.div>

            <motion.div variants={rise} className="grid gap-4 sm:grid-cols-[1.08fr_0.72fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
                <Image
                  src="/plant.jpg"
                  alt="Environmental restoration work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">River restoration</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                    Working with communities to protect waterways and strengthen public stewardship.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative min-h-[200px] overflow-hidden rounded-[24px]">
                  <Image
                    src="/leaf.jpg"
                    alt="Environmental education"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                </div>
                <div className="rounded-[24px] border border-[#d8e2d7] bg-[#f7faf6] p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">What we believe</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#355043]">
                    Change happens when education, systems, and community ownership move together.
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
            ONE PLANET, ONE MISSION
          </motion.p>
          <motion.h2 variants={rise} className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#203328] md:text-5xl">
            We confront pollution and environmental degradation with practical, community-led action.
          </motion.h2>

          <motion.div variants={container} className="mt-8 grid gap-4 md:grid-cols-2">
            {priorities.map((item) => (
              <motion.article
                key={item.title}
                variants={rise}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-[#c7d5cb] bg-[#f7faf6] p-6"
              >
                <h3 className="font-sans text-xl font-semibold text-[#1f3128]">{item.title}</h3>
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
            <p className="text-xs tracking-[0.16em] text-[#5f7568]">OUR TEAM</p>
            <h2 className="mt-3 font-serif text-4xl text-[#203328] md:text-5xl">Meet Our Team</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              A small but committed network of environmental advocates, educators, and community partners working toward cleaner rivers, better systems, and stronger public awareness.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {team.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                  <h3 className="font-sans text-lg font-semibold text-[#1f3128]">{item.title}</h3>
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
          <motion.div variants={rise} className="rounded-3xl bg-[#8a6a47] px-7 py-10 text-white md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#f4e8d9]">OUR STORY</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The Heart of Our Mission</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#f9f1e8]">
              Our journey began with school-based recycling efforts and grew into a broader mission to rehabilitate rivers, reduce waste, and expand environmental education.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-[#2f4a3a] hover:bg-[#eef5ef]">
                <Link href="/community">See Community Impact</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                <Link href="/research">Our Science &amp; Research</Link>
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
            <p className="text-xs tracking-[0.16em] text-[#5f7568]">BLOGS</p>
            <h2 className="mt-3 font-serif text-4xl text-[#203328] md:text-5xl">Our Latest Writing</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              Looking for more insight? Explore our recent articles to learn more about the projects, environmental tips, and research shaping our work.
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
                <h3 className="font-sans text-lg font-semibold text-[#1f3128]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435a4d]">{item.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild className="rounded-full bg-[#1a5845] px-6 text-white hover:bg-[#144535]">
              <Link href="/research">See Research</Link>
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
          <motion.div variants={rise} className="rounded-[22px] bg-[#17392d] px-7 py-9 text-white md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#c7ddd0]">OUR SCIENCE & RESEARCH</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Evidence guides every project we build.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
              We translate field observations, environmental research, and community feedback into practical action plans for river restoration, waste diversion, and education.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-[#1f3128] hover:bg-[#eef5ef]">
                <Link href="/research">Open Research</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                <Link href="/community">Community Impact</Link>
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
            <p className="text-xs tracking-[0.16em] text-[#5f7568]">CONTACT INFORMATION</p>
            <h2 className="mt-3 font-serif text-4xl text-[#203328] md:text-5xl">Feel free to contact and reach us.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">Phone</p>
                <p className="mt-3 text-sm text-[#31443a]">+977 980000000</p>
              </div>
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">Email</p>
                <p className="mt-3 text-sm text-[#31443a]">info@mulinventure.org</p>
              </div>
              <div className="rounded-2xl border border-[#d7e0d5] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#5f7568]">Location</p>
                <p className="mt-3 text-sm text-[#31443a]">Kathmandu, Nepal</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
