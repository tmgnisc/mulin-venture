'use client'

import { useState } from 'react'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
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
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    })
  }

  return (
    <>
      <Navigation />

      <main className="bg-[linear-gradient(180deg,#d2e0cf_0%,#e7efe4_18%,#f7f3e8_40%,#f7f3e8_100%)] pt-20">
        <section className="pt-[clamp(36px,6vw,72px)] pb-[clamp(72px,9vw,120px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-4 inline-block text-[11px] uppercase tracking-[0.2em] text-sage-dark">
                Request Consultation
              </span>
              <h1 className="font-serif text-ink" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
                Tell us what you want to build
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">
                Share your space, preferred style, and goals. Our team will prepare a tailored plan for your project.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 rounded-2xl border border-ink/10 bg-white/70 p-6 backdrop-blur-sm md:grid-cols-2 md:p-8"
            >
              <label className="text-sm text-ink/80">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sage"
                  placeholder="Your name"
                />
              </label>

              <label className="text-sm text-ink/80">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sage"
                  placeholder="you@example.com"
                />
              </label>

              <label className="text-sm text-ink/80">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sage"
                  placeholder="+977..."
                />
              </label>

              <label className="text-sm text-ink/80">
                Service
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sage"
                >
                  <option value="">Choose a service</option>
                  <option value="leed-certification">LEED Certification</option>
                  <option value="well-certification">WELL Certification</option>
                  <option value="sustainable-building-design">Sustainable Building Design</option>
                  <option value="green-wall-systems">Green Wall Systems</option>
                  <option value="roof-gardens">Roof Gardens</option>
                </select>
              </label>

              <label className="text-sm text-ink/80 md:col-span-2">
                Project Details
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-sage"
                  placeholder="Tell us about your space, timeline, and goals..."
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex rounded-full bg-sage-dark px-7 py-3 text-sm tracking-[0.05em] text-white transition hover:bg-moss"
                >
                  Submit Consultation
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
