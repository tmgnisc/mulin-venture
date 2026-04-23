'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: connect to backend or form service.
    setFormData({
      fullName: '',
      organizationName: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    })
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <>
      <Navigation />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#1f3a34_0%,#2d4e45_16%,#d5e4d2_36%,#f7f3e8_100%)] pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-[#89b29f]/25 blur-3xl" />
          <div className="absolute top-0 left-[-8%] h-64 w-64 rounded-full bg-[#bfd3c5]/20 blur-3xl" />
        </div>

        <section className="relative pt-[clamp(36px,6vw,72px)] pb-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mx-auto mb-10 max-w-3xl text-center"
            >
              <motion.span className="mb-4 inline-block rounded-full border border-white/35 bg-white/12 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-sm" variants={item}>
                Request Consultation
              </motion.span>
              <motion.h1 variants={item} className="font-serif text-ink" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Tell us what you want to build
              </motion.h1>
              <motion.p variants={item} className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
                Share your space, preferred style, and goals. Our team will prepare a tailored plan for your project.
              </motion.p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 rounded-3xl border border-white/50 bg-white/82 p-6 shadow-[0_24px_60px_rgba(17,31,24,0.16)] backdrop-blur-md md:grid-cols-2 md:p-8"
            >
              <motion.label variants={item} className="text-sm text-ink/80">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Your name"
                />
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Organization Name
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Your organization"
                />
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="you@example.com"
                />
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="+977..."
                />
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Service
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                >
                  <option value="">Choose a service</option>
                  <option value="leed-certification">LEED Certification</option>
                  <option value="well-certification">WELL Certification</option>
                  <option value="sustainable-building-design">Sustainable Building Design</option>
                  <option value="green-wall-systems">Green Wall Systems</option>
                  <option value="roof-gardens">Roof Gardens</option>
                </select>
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80 md:col-span-2">
                Project Details
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Tell us about your space, timeline, and goals..."
                />
              </motion.label>

              <motion.div variants={item} className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex rounded-full bg-sage-dark px-7 py-3 text-sm tracking-[0.05em] text-white shadow-[0_10px_22px_rgba(31,58,52,0.28)] transition hover:-translate-y-0.5 hover:bg-moss"
                >
                  Submit Consultation
                </button>
              </motion.div>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
