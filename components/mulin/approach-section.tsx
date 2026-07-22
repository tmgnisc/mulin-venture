'use client'

import { motion, type Variants } from 'framer-motion'
import type { ApproachItem } from './service-page-data'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

type ApproachSectionProps = {
  title: string
  subtitle: string
  items: ApproachItem[]
  accent?: string
}

export function ApproachSection({ title, subtitle, items, accent = '#737F3C' }: ApproachSectionProps) {
  return (
    <section className="border-t border-[#d8ddd7] bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.p
            variants={rise}
            className="text-[11px] uppercase tracking-[0.22em] text-[#6f7f77]"
          >
            {title}
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-4 font-serif leading-[1.04] text-[#454C23]"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.4rem)' }}
          >
            {subtitle}
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-14 space-y-16 md:space-y-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={rise}
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    backgroundColor: `${accent}18`,
                    color: accent,
                  }}
                >
                  0{index + 1}
                </span>
                <h3
                  className="mt-4 font-serif leading-[1.06] text-[#454C23]"
                  style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.4rem)' }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#496055]">
                  {item.body}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#7a8c83]">
                  {item.caption}
                </p>
              </div>

              <div className={`overflow-hidden rounded-[28px] border border-[#d8ddd7] bg-[#f7f9f5] shadow-[0_18px_40px_rgba(18,31,25,0.06)] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
