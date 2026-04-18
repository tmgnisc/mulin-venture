'use client'

import { useRef, useState, useEffect } from 'react'
import { QuoteMark, StarIcon, ArrowRight } from './svg-assets'

const testimonials = [
  {
    id: 1,
    quote: 'The Monstera arrived in the most stunning matte white ceramic vessel — it\'s the statement piece our living room needed.',
    author: 'Priya S.',
    location: 'New Delhi',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Mulin\'s team helped me design a green wall for my entire office. The transformation was incredible.',
    author: 'James T.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    quote: 'The custom terrarium they created for my partner was the most thoughtful gift I\'ve ever given.',
    author: 'Ananya R.',
    location: 'Mumbai',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Exceptional quality and service. Every detail was considered, from the soil blend to the handwritten care card.',
    author: 'Michael C.',
    location: 'Singapore',
    rating: 5,
  },
  {
    id: 5,
    quote: 'We ordered 30 custom plants for our hotel lobby. Six months later, they\'re all thriving beautifully.',
    author: 'Elena K.',
    location: 'Dubai',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoScrolling])

  useEffect(() => {
    if (!scrollRef.current) return
    const scrollContainer = scrollRef.current
    const cardWidth = scrollContainer.children[0]?.clientWidth || 0
    const gap = 32
    scrollContainer.scrollTo({
      left: activeIndex * (cardWidth + gap),
      behavior: 'smooth',
    })
  }, [activeIndex])

  const handlePrev = () => {
    setIsAutoScrolling(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoScrolling(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-[clamp(80px,10vw,140px)] bg-cream-dark overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)]">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-sage mb-4">
            ✦ What Our Clients Say
          </span>
          <h2 
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)] snap-start"
            >
              <div className="relative bg-cream border border-border-sage rounded-xl p-8 md:p-9 h-full">
                {/* Quote Mark */}
                <QuoteMark className="absolute top-6 left-6 w-16 h-16 text-gold-light/50" />

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" filled />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif italic text-ink text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="relative z-10">
                  <p className="font-sans text-sm text-ink-soft">
                    — {testimonial.author}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8" data-aos="fade-up">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-sage/30 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false)
                  setActiveIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-sage w-6' : 'bg-sage/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-sage/30 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
