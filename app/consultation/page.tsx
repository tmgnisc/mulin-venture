'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, type Variants } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
// import ReCAPTCHA from 'react-google-recaptcha'
import { Navigation } from '@/components/mulin/navigation'
import { Footer } from '@/components/mulin/footer'
import { consultationSchema, consultationServiceTypes, type ConsultationFormValues } from '@/lib/schema'

export default function ConsultationPage() {
  // const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  // const recaptchaRef = useRef<ReCAPTCHA | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      organizationName: '',
      email: '',
      phone: '',
      serviceType: consultationServiceTypes[0],
      message: '',
    },
  })

  const onSubmit = async (values: ConsultationFormValues) => {
    // if (!recaptchaSiteKey) {
    //   setSubmitMessage('reCAPTCHA is not configured. Please contact support.')
    //   return
    // }

    // if (!recaptchaToken) {
    //   setSubmitMessage('Please complete the reCAPTCHA check before submitting.')
    //   return
    // }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          // recaptchaToken,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit consultation request')
      }

      toast.success('Consultation request sent successfully.', { duration: 12000 })
      reset({
        fullName: '',
        organizationName: '',
        email: '',
        phone: '',
        serviceType: consultationServiceTypes[0],
        message: '',
      })
      // setRecaptchaToken(null)
      // recaptchaRef.current?.reset()
    } catch {
      toast.error('Failed to send request. Please try again.', { duration: 12000 })
      // recaptchaRef.current?.reset()
      // setRecaptchaToken(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  const filterFullName = (value: string) => value.replace(/[^A-Za-z '-]/g, '')
  const filterBusinessName = (value: string) => value.replace(/[^A-Za-z0-9&.,' -]/g, '')
  const filterEmail = (value: string) => value.replace(/[^\x20-\x7E]/g, '').replace(/\s/g, '')
  const filterPhone = (value: string) => value.replace(/[^\d+ -]/g, '')

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
              onSubmit={handleSubmit(onSubmit)}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 rounded-3xl border border-white/50 bg-white/82 p-6 shadow-[0_24px_60px_rgba(17,31,24,0.16)] backdrop-blur-md md:grid-cols-2 md:p-8"
            >
              <motion.label variants={item} className="text-sm text-ink/80">
                Full Name <span className="text-red-700">*</span>
                <input
                  type="text"
                  {...register('fullName', {
                    onChange: (event) => {
                      event.target.value = filterFullName(event.target.value)
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Your name"
                />
                {errors.fullName ? <p className="mt-1 text-xs text-red-700">{errors.fullName.message}</p> : null}
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Organization Name
                <input
                  type="text"
                  {...register('organizationName', {
                    onChange: (event) => {
                      event.target.value = filterBusinessName(event.target.value)
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Your organization"
                />
                {errors.organizationName ? <p className="mt-1 text-xs text-red-700">{errors.organizationName.message}</p> : null}
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Email <span className="text-red-700">*</span>
                <input
                  type="email"
                  {...register('email', {
                    onChange: (event) => {
                      event.target.value = filterEmail(event.target.value)
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="mt-1 text-xs text-red-700">{errors.email.message}</p> : null}
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Phone
                <input
                  type="tel"
                  {...register('phone', {
                    onChange: (event) => {
                      event.target.value = filterPhone(event.target.value)
                    },
                  })}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="+977..."
                />
                {errors.phone ? <p className="mt-1 text-xs text-red-700">{errors.phone.message}</p> : null}
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80">
                Service <span className="text-red-700">*</span>
                <select
                  {...register('serviceType')}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                >
                  <option value="leed-certification">LEED Certification</option>
                  <option value="well-certification">WELL Certification</option>
                  <option value="sustainable-building-design">Sustainable Building Design</option>
                  <option value="green-wall-systems">Green Wall Systems</option>
                  <option value="roof-gardens">Roof Gardens</option>
                </select>
                {errors.serviceType ? <p className="mt-1 text-xs text-red-700">{errors.serviceType.message}</p> : null}
              </motion.label>

              <motion.label variants={item} className="text-sm text-ink/80 md:col-span-2">
                Project Details <span className="text-red-700">*</span>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-ink/15 bg-white/95 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
                  placeholder="Tell us about your space, timeline, and goals..."
                />
                {errors.message ? <p className="mt-1 text-xs text-red-700">{errors.message.message}</p> : null}
              </motion.label>

              <motion.div variants={item} className="md:col-span-2">
                {/* <div className="mb-4">
                  {recaptchaSiteKey ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaSiteKey}
                      onChange={(token) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                      onErrored={() => setRecaptchaToken(null)}
                    />
                  ) : (
                    <p className="text-sm text-red-700">
                      reCAPTCHA site key is missing. Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
                    </p>
                  )}
                </div> */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex rounded-full bg-sage-dark px-7 py-3 text-sm tracking-[0.05em] text-white shadow-[0_10px_22px_rgba(31,58,52,0.28)] transition hover:-translate-y-0.5 hover:bg-moss"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Consultation'}
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
