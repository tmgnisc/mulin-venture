'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Leaf, MapPin, School, Users } from 'lucide-react'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const programs = [
  {
    title: 'Children for Change',
    text: 'Young students collect recyclable materials and exchange them for practical educational items, turning sustainability into a daily habit.',
  },
  {
    title: 'Community Business Network',
    text: 'Restaurants and local businesses collaborate with the initiative to reduce waste at source and support cleaner public spaces.',
  },
  {
    title: 'Riverbank Renewal',
    text: 'Volunteers, residents, and local groups restore riparian zones through cleanup, planting, and long-term care activities.',
  },
  {
    title: 'Climate Learning Sessions',
    text: 'Interactive awareness sessions introduce climate action, sustainable choices, and environmental responsibility to students and families.',
  },
  {
    title: 'School Waste Audits',
    text: 'Partner schools track and categorize daily waste generation to build practical systems for reduction, reuse, and recycling.',
  },
  {
    title: 'Neighborhood Cleanup Drives',
    text: 'Periodic local drives mobilize youth and residents to clean public areas and strengthen long-term stewardship behavior.',
  },
]

const pillars = [
  { label: 'Waste Management', value: '01' },
  { label: 'River Ecosystems', value: '02' },
  { label: 'Public Awareness', value: '03' },
]

const communityProjects = [
  {
    category: 'School',
    place: 'Vidhya Sagar School',
    title: 'Leading the Way in Waste Management',
    body: 'Another successful recycling effort where 78 kg of waste was responsibly managed through school-community collaboration and practical sorting education.',
    tags: ['Recycling', 'Waste Management', 'Doko Recyclers'],
    image: '/leaf.jpeg',
  },
  {
    category: 'School',
    place: 'Fairyland International School, Budhanilkantha',
    title: 'Collaboration with Fairyland International School',
    body: 'Supporting a cleaner future through on-campus orientation, waste bins, and student-led sustainability participation.',
    tags: ['Orientation', 'Environmental Science', 'Student Engagement'],
    image: '/placeholder.jpg',
  },
  {
    category: 'School',
    place: 'Jagat Sundar School',
    title: 'Waste to Art - Creative Upcycling',
    body: 'Students transformed waste materials into creative artwork, linking environmental responsibility with imagination.',
    tags: ['Upcycling', 'Art', 'Waste Management', 'Creativity'],
    image: '/placeholder-user.jpg',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function CountUp({
  to,
  suffix = '',
  duration = 1200,
  start,
}: {
  to: number
  suffix?: string
  duration?: number
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame = 0
    const totalFrames = Math.max(1, Math.round(duration / 16))
    const timer = setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = Math.round(to * Math.min(1, eased))
      setValue(next)
      if (frame >= totalFrames) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [duration, start, to])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

export default function CommunityPage() {
  const [startCount, setStartCount] = useState(false)
  const hasStarted = useRef(false)

  return (
    <>
      <Navigation />
      <main className="bg-[#e9efe8] text-[#1d2c24]">
        <section className="relative min-h-[46svh] overflow-hidden">
          <div
            className="absolute will-change-transform"
            style={{ top: '-20%', bottom: '-20%', left: 0, right: 0 }}
          >
            <Image
              src="/plant.jpg"
              alt="Lush green leaves"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(10,18,9,0.88)_0%,rgba(20,32,18,0.62)_50%,rgba(10,18,9,0.92)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_55%,rgba(5,10,4,0.55)_100%)]" />
          <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-10 text-center md:px-10">
            <motion.p variants={rise} className="text-xs tracking-[0.24em] text-[#cbdccc] md:text-sm">
              MULIN COMMUNITY IMPACT
            </motion.p>
            <motion.h1 variants={rise} className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#f3ead7] md:text-7xl">
              Deep Roots, Future Leaders.
            </motion.h1>

            <motion.p variants={rise} className="mt-6 max-w-2xl text-base leading-relaxed text-[#ddebe0] md:text-lg">
              We don't just optimize offices; we transform schools. Every service you book funds environmental education and healthier classrooms for the next generation
            </motion.p>

            <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
              <Link href="/consultation" className="rounded-full bg-[#c3a36e] px-7 py-3 text-sm tracking-[0.06em] text-[#1f3028] transition-transform duration-300 hover:scale-[1.04]">
                Partner With The Program
              </Link>
              <Link href="/research" className="rounded-full border border-white/60 px-7 py-3 text-sm tracking-[0.06em] text-white transition-colors duration-300 hover:bg-white hover:text-[#1f3028]">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onViewportEnter={() => {
            if (hasStarted.current) return
            hasStarted.current = true
            setStartCount(true)
          }}
          className="mt-6 px-6 text-white md:mt-8 md:px-10"
        >
          <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-[#8a6a47]/20 bg-[#8a6a47] px-6 py-7 shadow-[0_10px_30px_rgba(62,38,18,0.18)] md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14">
                <School className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans text-5xl font-semibold leading-none">
                  <CountUp to={5} suffix="+" start={startCount} />
                </p>
                <p className="mt-1 text-sm text-white/85">Schools Partnered</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans text-5xl font-semibold leading-none">
                  <CountUp to={100} suffix="%" start={startCount} />
                </p>
                <p className="mt-1 text-sm text-white/85">Profits Donated</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans text-5xl font-semibold leading-none">
                  <CountUp to={100} suffix="+" start={startCount} />
                </p>
                <p className="mt-1 text-sm text-white/85">Students Educated</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-3 md:px-10"
        >
          {pillars.map((item) => (
            <motion.div
              key={item.label}
              variants={rise}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#28553f]/20 bg-[#f3f7f1] p-6"
            >
              <p className="text-xs tracking-[0.16em] text-[#6a816f]">FOCUS AREA {item.value}</p>
              <p className="mt-3 font-serif text-3xl text-[#224131] md:text-4xl">{item.label}</p>
            </motion.div>
          ))}
        </motion.section>

        <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit rounded-full border border-[#6a816f]/45 bg-[#f3ead7] px-4 py-1 text-center text-sm tracking-[0.18em] text-[#6a816f]"
          >
            OUR WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-center font-serif text-3xl text-[#1f3028] md:text-4xl"
          >
            Community Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#3f5648] md:text-lg"
          >
            From climate education sessions to waste management programs, explore the projects we&apos;ve led with schools and communities across Nepal.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
            className="mt-8 grid gap-4 lg:grid-cols-3"
          >
            {communityProjects.map((project) => (
              <motion.article
                key={project.title}
                variants={rise}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border border-[#264433]/10 bg-[#f1f5f0]"
              >
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f19]/60 via-[#0f1f19]/20 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-[#1b5a42] px-3 py-1 text-xs text-white">{project.category}</div>
                  <p className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm text-white/95">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.place}
                  </p>
                </div>

                <div className="p-4">
                  <h3 className="font-sans text-[1.45rem] font-semibold leading-tight text-[#21362d] md:text-[1.6rem]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a6254] md:text-base">{project.body}</p>
                  <div className="mt-4 border-t border-[#264433]/10 pt-3" />
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#dde6de] px-2.5 py-0.5 text-[11px] text-[#355243]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex justify-center"
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#264433]/30 bg-[#f6faf5] px-6 text-sm tracking-[0.04em] text-[#264433] hover:border-[#264433] hover:bg-[#264433] hover:text-white"
            >
              <Link href="/community" className="inline-flex items-center gap-2">
                See All Our Community Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
        >
          <motion.h2 variants={rise} className="mb-3 text-center font-serif text-3xl md:text-5xl">
            Core community programs
          </motion.h2>
          <motion.p variants={rise} className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-[#3f5648] md:text-base">
            Program design focuses on youth participation, institutional collaboration, and measurable environmental practice.
          </motion.p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.article
                key={program.title}
                variants={rise}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl border border-[#28553f]/15 bg-[#f3f7f1] p-5 transition-colors duration-300 hover:border-[#28553f]/35 hover:bg-[#eef4ec] hover:shadow-[0_10px_30px_rgba(32,61,47,0.08)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs tracking-[0.14em] text-[#5f7768]">PROGRAM 0{index + 1}</span>
                  <Leaf className="h-4 w-4 fill-transparent text-[#5f7768] transition-colors duration-300 group-hover:fill-[#5f7768]" />
                </div>
                <h3 className="font-serif text-[1.55rem] leading-tight text-[#223c30]">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3f5648] md:text-base">{program.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-6 mb-20 rounded-[2rem] bg-[#1f3f31] px-8 py-12 text-white md:mx-10 md:px-14 md:py-16"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs tracking-[0.16em] text-[#dce7de]"
              >
                JOIN THE MOVEMENT
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 max-w-2xl font-serif text-3xl leading-tight md:text-5xl"
              >
                Help scale community-driven recycling and river restoration across more neighborhoods.
              </motion.h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/consultation"
                className="rounded-full bg-[#d6b57b] px-7 py-3 text-sm tracking-[0.06em] text-[#1f3028] transition-transform duration-300 hover:scale-[1.04]"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
