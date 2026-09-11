'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { PageBreadcrumb } from '@/components/mulin/page-breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { getWhatsAppLink } from '@/lib/whatsapp'

const values = [
  {
    title: 'Ecological Integrity',
    text: 'Every design decision is grounded in native ecology and biodiversity science, ensuring our work benefits both people and the planet.',
  },
  {
    title: 'Community Empowerment',
    text: 'We believe in sharing knowledge and skills through workshops and education, empowering communities to create their own green spaces.',
  },
  {
    title: 'Sustainable Innovation',
    text: 'We continuously explore new materials, techniques, and systems that reduce environmental impact while enhancing design quality.',
  },
  {
    title: 'Cultural Sensitivity',
    text: 'We respect and integrate indigenous ecological knowledge, honoring Nepal\'s rich botanical heritage in every project.',
  },
]

const team = [
  {
    name: 'Aneel Magar',
    role: 'Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    alt: 'Aneel Magar — Manager',
  },
  {
    name: 'Sudip Pradhan',
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    alt: 'Sudip Pradhan — Developer',
  },
  {
    name: 'Saurav Shrestha',
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    alt: 'Saurav Shrestha — Developer',
  },
  {
    name: 'Aiska Karki',
    role: 'Social Media Intern',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    alt: 'Aiska Karki — Social Media Intern',
  },
]

const testimonials = [
  {
    quote: 'The Monstera arrived in the most stunning matte white ceramic vessel — it\'s the statement piece our living room needed.',
    author: 'Nischal Tamang',
  },
  {
    quote: 'Mulin\'s team helped me design a green wall for my entire office. The transformation was incredible.',
    author: 'Roshan KC',
  },
  {
    quote: 'The custom terrarium they created for my partner was the most thoughtful gift I\'ve ever given.',
    author: 'Sujan Pun',
  },
  {
    quote: 'Exceptional quality and service. Every detail was considered, from the soil blend to the handwritten care card.',
    author: 'Sonu Thapa Magar',
  },
  {
    quote: 'We ordered 30 custom plants for our hotel lobby. Six months later, they\'re all thriving beautifully.',
    author: 'Sanjeev Magar',
  },
  {
    quote: 'The workshop completely changed how I think about plants and biophilic design.',
    author: 'Sajesh Bajracharya',
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
        <section className="relative overflow-hidden border-b border-[#cfd9d2] bg-[#454C23] pt-20">
          <PageBreadcrumb segments={['about']} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.09),transparent_40%),radial-gradient(circle_at_78%_80%,rgba(255,255,255,0.08),transparent_36%)]" />
          <motion.div
            className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-4 pb-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
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
                Mulin Venture is a sustainable design and wellbeing company built on the belief that nature is not a luxury but a necessity. Rooted in the philosophy &ldquo;Nurture through Nature,&rdquo; the company helps individuals, homes, institutions, and businesses create healthier, greener, and more conscious spaces.
              </motion.p>
              <motion.p variants={rise} className="mt-4 max-w-3xl text-base leading-relaxed text-[#d8e8dd] md:text-lg">
                Through biophilic designs, handcrafted kokedama and living plant art, rooftop and landscape greening, sustainable art workshops, and community-based biodiversity education.
              </motion.p>
              <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-white px-6 text-[#454C23] hover:bg-[#eef5ef]">
                  <Link href="/about/founder">Meet Our Founder</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Get in Touch</a>
                </Button>
              </motion.div>
            </div>

            <motion.div variants={rise} className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-[460px]">
              <Image
                src="/Tippy and kokedama.JPG"
                alt="Tippy and kokedama — Mulin Venture products"
                fill
                className="object-cover"
              />
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
            CORE VALUES
          </motion.p>
          <motion.h2 variants={rise} className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#454C23] md:text-5xl">
            The principles that guide everything we do.
          </motion.h2>

          <motion.div variants={container} className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((item) => (
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
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise}>
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">OUR STORY</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Why We Started</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              Mulin Venture is a sustainable design and wellbeing company built on the belief that nature is not a luxury but a necessity. Rooted in the philosophy &ldquo;Nurture through Nature,&rdquo; the company helps individuals, homes, institutions, and businesses create healthier, greener, and more conscious spaces through biophilic designs, handcrafted kokedama and living plant art, rooftop and landscape greening, sustainable art workshops, and community-based biodiversity education.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              Beyond its products and services, Mulin Venture fosters a deeper connection between people and the natural world, offering spaces and experiences that invite them to slow down, create, and reconnect with themselves amid the pace of urban life.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              To date, the company has served more than 200+ clients. We have been supported with Phase 1st seed fund by Red Cross IFRC Limitless Academy and it is powered by a growing team of six full-time employees incorporating environment sciences, IT and architectural professionals alongside dedicated interns who contribute to project delivery, research, community engagement, and daily operations.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <motion.div variants={rise} className="rounded-2xl border border-[#c7d5cb] bg-[#f7faf6] p-6">
              <p className="text-3xl font-serif text-[#737F3C]">200+</p>
              <p className="mt-2 text-sm text-[#435a4d]">Clients Served</p>
            </motion.div>
            <motion.div variants={rise} className="rounded-2xl border border-[#c7d5cb] bg-[#f7faf6] p-6">
              <p className="text-3xl font-serif text-[#737F3C]">6</p>
              <p className="mt-2 text-sm text-[#435a4d]">Full-Time Team Members</p>
            </motion.div>
            <motion.div variants={rise} className="rounded-2xl border border-[#c7d5cb] bg-[#f7faf6] p-6">
              <p className="text-3xl font-serif text-[#737F3C]">IFRC</p>
              <p className="mt-2 text-sm text-[#435a4d]">Seed Fund Recipient</p>
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
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">WHO WE SERVE</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Our Clients</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#3d5145]">
              We work with homeowners, businesses, schools, and organizations who share our vision for greener, healthier spaces.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Residential', text: 'Homeowners looking to transform their living spaces with biophilic design.' },
              { title: 'Commercial', text: 'Businesses seeking to create healthier, more productive work environments.' },
              { title: 'Education', text: 'Schools and universities wanting to integrate nature into learning spaces.' },
              { title: 'Hospitality', text: 'Hotels and restaurants creating memorable, nature-inspired experiences.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={rise}
                className="rounded-2xl border border-[#c7d5cb] bg-[#f7faf6] p-6"
              >
                <h3 className="font-sans text-lg font-semibold text-[#454C23]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435a4d]">{item.text}</p>
              </motion.div>
            ))}
          </div>
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
              A passionate team of designers, developers, and sustainability advocates working together to make every space greener and more liveable.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#454C23]">{member.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#737F3C]">{member.role}</p>
                </div>
              ))}
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
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">TESTIMONIALS</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">What Our Clients Say</h2>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={index}
                variants={rise}
                className="rounded-2xl border border-[#c7d5cb] bg-[#f7faf6] p-6"
              >
                <div className="mb-4 text-[#737F3C] text-3xl font-serif">&ldquo;</div>
                <p className="font-sans text-sm leading-relaxed text-[#3d5145] italic">{item.quote}</p>
                <div className="mt-6 border-t border-[#d1ddd3] pt-4">
                  <p className="font-sans text-sm font-semibold text-[#454C23]">{item.author}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#737F3C]">{item.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-[22px] border border-[#cfd9d2] bg-[#f8fbf7] px-7 py-9 md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#737F3C]">LOCATION</p>
            <h2 className="mt-3 font-serif text-4xl text-[#454C23] md:text-5xl">Find Us</h2>
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

        <motion.section
          className="mx-auto max-w-6xl px-6 pb-20 md:px-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div variants={rise} className="rounded-3xl bg-[#9A5B3F] px-7 py-10 text-white md:px-10">
            <p className="text-xs tracking-[0.16em] text-[#FFFFFF]">READY TO TRANSFORM YOUR SPACE?</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Let&apos;s Create Something Beautiful Together</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#FFFFFF]">
              Whether you are looking to transform your home, office, or community space, we would love to hear from you. Book a consultation today and take the first step toward a greener, healthier environment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white px-6 text-[#2f4a3a] hover:bg-[#eef5ef]">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/65 bg-transparent text-white hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
