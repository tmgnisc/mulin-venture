'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What services does Mulin Venture offer?',
    answer:
      'We offer full-scale botanical design services including landscape architecture, installation, biophilic design, green walls, botanical branding, maintenance programs, biophilic art, and event rentals — botanical beauty for every space.',
  },
  {
    question: 'Do you provide ongoing plant maintenance?',
    answer:
      'Yes. Our maintenance programs are ongoing care subscriptions designed to keep your plants thriving year-round, backed by over 12 years of expertise.',
  },
  {
    question: 'What is a kokedama and how do I care for it?',
    answer:
      'Kokedama is a handcrafted Japanese moss-ball planting that frees greenery from the pot. Care is simple — a weekly soak and indirect light. Each kokedama comes with a manual book and a reusable holder.',
  },
  {
    question: 'Can I rent plants for a wedding or event?',
    answer:
      'Absolutely. We offer short-term plant rentals for weddings, product launches, and special occasions — delivered, styled, and collected by our team so your event leaves a lasting impression.',
  },
  {
    question: 'When is the Kokedama Workshop held?',
    answer:
      'Our Kokedama Workshop runs every Saturday. You’ll craft your own moss-ball planting with guidance from our team, enjoy snacks, and join in games and fun activities. Seats are limited — contact us to reserve your spot.',
  },
  {
    question: 'How do I get started on a project?',
    answer:
      'Simply request a consultation. We’ll discuss your space, your vision, and your budget, then craft a botanical design proposal tailored to you — from a single arrangement to a large-scale installation.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-[clamp(80px,10vw,140px)] bg-cream">
      <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,80px)]">

        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-sage inline-block" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-sage font-sans">Good to Know</span>
            <span className="h-px w-8 bg-sage inline-block" />
          </div>
          <h2
            className="font-serif text-ink leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-sage/15 border-y border-sage/15" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-sage/50 font-sans shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-serif leading-snug transition-colors ${isOpen ? 'text-sage-dark' : 'text-ink group-hover:text-sage-dark'}`}
                      style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)' }}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className={`relative shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'border-sage bg-sage text-cream rotate-45' : 'border-sage/25 text-sage'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans font-light text-ink-soft text-sm leading-relaxed pb-7 pl-0 md:pl-12 max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
