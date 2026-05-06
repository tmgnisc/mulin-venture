'use client'

import { motion, type Variants } from 'framer-motion'
import { Droplets, Leaf, SunMedium, Volume2, Wind } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const serviceCards = [
  {
    icon: Wind,
    title: 'Air Quality Monitoring',
    lines: ['VOC, CO2 & particulate sensing', 'PM2.5 / PM10'],
  },
  {
    icon: Droplets,
    title: 'Water Monitoring',
    lines: ['Purity & potability testing', 'Lab analysis', 'Contamination checks'],
  },
  {
    icon: SunMedium,
    title: 'Light Measuring & Optimization',
    lines: ['Daylight, lux & circadian tuning', 'Lux mapping', 'Glare control'],
  },
  {
    icon: Volume2,
    title: 'Noise Mapping',
    lines: ['Acoustic comfort & isolation', 'dB analysis', 'Sound zoning'],
  },
  {
    icon: Leaf,
    title: 'Soil Testing',
    lines: ['Nutrient & contamination analysis', 'pH balance', 'Heavy metals'],
  },
]

const container: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ConsultationServicesSection() {
  return (
    <section className="py-[clamp(32px,5vw,72px)]">
      <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.24 }}
          className="relative overflow-hidden "
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(122,158,126,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />

          <motion.div variants={item} className="relative mx-auto mb-8 max-w-[20rem] text-center sm:mb-10 sm:max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-[#cfd7cf] bg-[#f3f6f1] px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-[#74817a] shadow-sm sm:tracking-[0.3em]">
              Consulting Services
            </span>
            <h2
              className="font-serif text-[#202421]"
              style={{ fontSize: 'clamp(1.75rem, 8vw, 3.2rem)' }}
            >
              Environmental Intelligence &amp; Testing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-[#74817a] sm:max-w-2xl sm:text-sm md:text-base">
              Data-driven environmental assessments rooted in measurement, not opinion. We monitor, analyze, and optimize your spaces for health and productivity.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5">
            {serviceCards.map((card, index) => {
              const Icon = card.icon

              return (
                <motion.div
                  key={card.title}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <Card className="group relative h-full overflow-hidden rounded-[18px] border border-[#dfd3bd] bg-[#f7f1e6] shadow-[0_1px_0_rgba(18,28,22,0.02)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(18,28,22,0.06)]">
                    <CardHeader className="px-4 pt-4 pb-0 sm:px-5 sm:pt-5">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#eef2ee] text-sage transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                          <Icon className="h-4 w-4 text-sage sm:h-5 sm:w-5" />
                        </div>
                        <span className="rounded-full bg-[#f2f4f0] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#a1a9a3] sm:tracking-[0.2em]">
                          0{index + 1}
                        </span>
                      </div>
                      <CardTitle className="mt-4 text-[14px] leading-snug text-[#222725] sm:mt-5 sm:text-[15px]">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pt-3 pb-4 sm:px-5 sm:pt-4 sm:pb-5">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {card.lines.map((line, lineIndex) => (
                          <Badge
                            key={`${card.title}-${lineIndex}`}
                            variant="outline"
                            className="max-w-full items-start justify-start whitespace-normal overflow-visible rounded-full border-[#d8ddd7] bg-[#f4f6f2] px-2 py-1 text-left font-mono text-[9px] font-normal leading-tight tracking-normal text-[#7a827d] sm:px-2.5 sm:text-[10px]"
                          >
                            {line}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
