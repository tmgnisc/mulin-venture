'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What services does Mulin Venture offer?',
    answer:
      'We provide biophilic design, landscape and rooftop greening, green building rating support, plant art workshops, and ongoing garden maintenance.',
  },
  {
    question: 'Do you provide ongoing maintenance after installation?',
    answer:
      'Yes. We provide ongoing maintenance for living walls, rooftop gardens, and planted interiors to keep systems healthy over time.',
  },
  {
    question: 'What products do you offer?',
    answer:
      'Our product range includes plant art products, moss and living walls, and a biodiversity toolkit for homes, schools, and organizations.',
  },
  {
    question: 'Do you run workshops for schools and organizations?',
    answer:
      'Yes. Our plant art workshops are available for schools, organizations, and public events, with biophilic design and biodiversity learning built in.',
  },
  {
    question: 'How do you measure environmental impact?',
    answer:
      'We use our Green Building Rating System to assess carbon footprint, biodiversity impact, and nature-based solution potential, then provide practical improvement guidance.',
  },
  {
    question: 'How do I get started on a project?',
    answer:
      'Book a biophilic consultation and we will map your goals, site context, and budget into a phased plan for products, services, and long-term care.',
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
                      isOpen ? 'border-sage bg-sage text-cream' : 'border-sage/25 text-sage'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      {!isOpen && <path d="M12 5v14" strokeLinecap="round" />}
                      <path d="M5 12h14" strokeLinecap="round" />
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
