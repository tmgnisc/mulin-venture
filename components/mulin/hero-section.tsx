'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, MonsteraLeaf, TropicalLeaf } from './svg-assets'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMG =
  'https://images.squarespace-cdn.com/content/v1/5e6713bbf2132f62e71a5389/1588878556739-1VFN907TT7784A0YKJ26/DSC_0369.jpg?format=2500w'

const stats = [
  { value: 'Youth', label: 'Empowerment' },
  { value: 'Climate', label: 'Education' },
  { value: 'Action', label: 'Not Paralysis' },
  { value: 'Global', label: 'Mission' },
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const leafMidLeftRef = useRef<HTMLDivElement>(null)
  const leafMidRightRef = useRef<HTMLDivElement>(null)
  const leafFrontRightRef = useRef<HTMLDivElement>(null)
  const leafFrontLeftRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const heading1Ref = useRef<HTMLSpanElement>(null)
  const heading2Ref = useRef<HTMLSpanElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Entry animation ─────────────────────────────── */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl
        .fromTo(labelRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.5 })
        .fromTo(heading1Ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 },   '-=0.35')
        .fromTo(heading2Ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 },   '-=0.65')
        .fromTo(subheadingRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.45')
        .fromTo(buttonsRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo(statsRef.current,    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

      const st = {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      }

      /* ── Parallax layer 0: background photo (slowest) ── */
      // container extends ±20% so the image is never clipped
      gsap.to(bgRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: st,
      })

      /* ── Parallax layer 2: mid leaves ───────────────── */
      gsap.to(leafMidLeftRef.current, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: { ...st, scrub: 1.4 },
      })
      gsap.to(leafMidRightRef.current, {
        yPercent: -22,
        ease: 'none',
        scrollTrigger: { ...st, scrub: 1.4 },
      })

      /* ── Parallax layer 4: foreground leaves (fastest) ─ */
      gsap.to(leafFrontRightRef.current, {
        yPercent: -45,
        ease: 'none',
        scrollTrigger: { ...st, scrub: 0.9 },
      })
      gsap.to(leafFrontLeftRef.current, {
        yPercent: -38,
        ease: 'none',
        scrollTrigger: { ...st, scrub: 0.9 },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >

      {/* ── Layer 0: Background photo (parallax slowest) ── */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ top: '-20%', bottom: '-20%', left: 0, right: 0 }}
      >
        <img
          src={HERO_IMG}
          alt="Botanical indoor installation"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* ── Layer 1: Atmospheric gradient overlay ──────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(155deg, rgba(10,18,9,0.88) 0%, rgba(20,32,18,0.62) 50%, rgba(10,18,9,0.92) 100%)',
        }}
      />
      {/* subtle vignette edge */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(5,10,4,0.55) 100%)',
        }}
      />

      {/* ── Layer 2: Mid-depth leaf — left ─────────────── */}
      <div
        ref={leafMidLeftRef}
        className="absolute -left-20 bottom-[-5%] z-[2] pointer-events-none will-change-transform"
        style={{ opacity: 0.18 }}
      >
        <MonsteraLeaf className="w-80 h-[440px] text-sage" />
      </div>

      {/* ── Layer 2: Mid-depth leaf cluster — right top ── */}
      <div
        ref={leafMidRightRef}
        className="absolute -right-10 top-[-2%] z-[2] pointer-events-none will-change-transform"
        style={{ opacity: 0.12 }}
      >
        <TropicalLeaf className="w-44 h-[420px] text-gold" />
      </div>

      {/* ── Layer 3: Floating pollen particles ─────────── */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-up"
            style={{
              left: `${8 + i * 16}%`,
              animationDelay: `${i * 2.2}s`,
              animationDuration: `${13 + i * 2}s`,
            }}
          >
            {i % 2 === 0
              ? <MonsteraLeaf className="w-7 h-10 text-sage/20" />
              : <TropicalLeaf className="w-4 h-9 text-gold/15" />}
          </div>
        ))}
      </div>

      {/* ── Layer 5: Center content ─────────────────────── */}
      <div className="relative z-10 text-center px-[clamp(20px,5vw,80px)] max-w-5xl mx-auto">

        {/* Label pill */}
        <span
          ref={labelRef}
          className="inline-flex items-center gap-2.5 px-5 py-2 border border-gold/45 text-gold text-[10px] uppercase tracking-[0.26em] rounded-full mb-10 opacity-0 font-sans"
        >
          <span className="w-1 h-1 rounded-full bg-gold" />
          Entrepreneur · Environment Educator · Climate Change
          <span className="w-1 h-1 rounded-full bg-gold" />
        </span>

        {/* Heading */}
        <h1 className="font-serif font-light text-white leading-[1.04] mb-8">
          <span
            ref={heading1Ref}
            className="block opacity-0"
            style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7rem)' }}
          >
            Climate Anxiety &amp;
          </span>
          <span
            ref={heading2Ref}
            className="block italic text-gold opacity-0"
            style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7rem)' }}
          >
            Environmental Education
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="font-sans font-light text-white/60 max-w-xl mx-auto mb-10 leading-relaxed opacity-0"
          style={{ fontSize: 'clamp(0.88rem, 1.2vw, 1.05rem)' }}
        >
          Empowering Action, Not Paralysis — equipping individuals, particularly youth, with the knowledge, skills, and emotional resilience to transform climate anxiety into constructive climate action.
        </p>

        {/* CTAs */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap items-center justify-center gap-4 mb-14 opacity-0"
        >
          <a
            href="#mission"
            className="px-8 py-[14px] bg-sage text-white rounded-full text-sm tracking-[0.07em] font-medium hover:bg-sage-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(74,103,65,0.45)]"
          >
            Our Mission
          </a>
          <a
            href="#founder"
            className="px-8 py-[14px] border border-white/35 text-white rounded-full text-sm tracking-[0.07em] font-medium hover:border-white/70 hover:bg-white/8 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Meet the Founder
          </a>
        </div>

        {/* Nature stats strip */}
        <div
          ref={statsRef}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-2 py-2 opacity-0"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <div className="px-5 text-center">
                <div className="font-serif text-white/90 text-base leading-none mb-0.5">{stat.value}</div>
                <div className="font-sans text-white/38 text-[8.5px] uppercase tracking-[0.22em]">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-6 bg-white/12" />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Layer 6: Foreground leaves (parallax fastest) ─ */}
      {/* Bottom-right — largest, closest to viewer */}
      <div
        ref={leafFrontRightRef}
        className="absolute -bottom-16 -right-14 z-[15] pointer-events-none will-change-transform"
        style={{ opacity: 0.28 }}
      >
        <MonsteraLeaf className="w-[340px] h-[480px] text-sage-dark" />
      </div>
      {/* Bottom-left — tropical frond */}
      <div
        ref={leafFrontLeftRef}
        className="absolute -bottom-10 -left-10 z-[15] pointer-events-none will-change-transform"
        style={{ opacity: 0.2 }}
      >
        <TropicalLeaf className="w-28 h-[380px] text-sage" />
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Scroll</span>
        <ArrowDown className="w-4 h-4 text-white/35" />
      </div>

    </section>
  )
}
