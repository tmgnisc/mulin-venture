'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, MonsteraLeaf, TropicalLeaf } from './svg-assets'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMG = '/leaf.jpg'
const HERO_VIDEO = '/videos/video.mp4'

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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoDelayPassed, setVideoDelayPassed] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVideoDelayPassed(true)
    }, 2500)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Entry animation ─────────────────────────────── */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl
        .fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.5 })
        .fromTo(heading1Ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, '-=0.35')
        .fromTo(heading2Ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }, '-=0.65')
        .fromTo(subheadingRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.45')
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo(statsRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

      const st = {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      }

      /* ── Parallax layer 0: background photo (slowest) ── */
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

  /* ── Video readiness ─────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const markReady = () => setVideoReady(true)

    if (video.readyState >= 3) {
      markReady()
    } else {
      video.addEventListener('canplaythrough', markReady)
      video.addEventListener('loadeddata', markReady)
    }

    return () => {
      video.removeEventListener('canplaythrough', markReady)
      video.removeEventListener('loadeddata', markReady)
    }
  }, [])

  /* ── Start playback only after delay + readiness ─── */
  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoDelayPassed || !videoReady) return

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* autoplay blocked — image remains visible */
      })
    }
  }, [videoDelayPassed, videoReady])

  const showVideo = videoDelayPassed && videoReady

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >

      {/* ── Layer 0: Background photo + video (parallax slowest) ── */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ top: '-20%', bottom: '-20%', left: 0, right: 0 }}
      >
        {/* Fallback image — always visible until video loads */}
        <img
          src={HERO_IMG}
          alt="Botanical indoor installation"
          crossOrigin="anonymous"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Background video — fades in over the image when ready */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ${showVideo ? 'opacity-100' : 'opacity-0'
            }`}
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_IMG}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
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
      {/* <div */}
      {/*   ref={leafMidLeftRef} */}
      {/*   className="absolute -left-20 bottom-[-5%] z-[2] pointer-events-none will-change-transform" */}
      {/*   style={{ opacity: 0.18 }} */}
      {/* > */}
      {/*   <MonsteraLeaf className="w-80 h-[440px] text-sage" /> */}
      {/* </div> */}
      {/**/}
      {/* {/* ── Layer 2: Mid-depth leaf cluster — right top ── */}
      {/* <div */}
      {/*   ref={leafMidRightRef} */}
      {/*   className="absolute -right-10 top-[-2%] z-[2] pointer-events-none will-change-transform" */}
      {/*   style={{ opacity: 0.12 }} */}
      {/* > */}
      {/*   <TropicalLeaf className="w-44 h-[420px] text-gold" /> */}
      {/* </div> */}
      {/**/}
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
      <div className="relative z-10 mx-auto max-w-5xl px-[clamp(16px,5vw,80px)] pt-24 sm:pt-28 lg:pt-32 text-center">

        {/* Heading */}
        <h1 className="mb-6 flex flex-col items-center font-serif font-light leading-[1.08] text-white sm:mb-8 sm:leading-[1.04]">
          <span
            ref={heading1Ref}
            className="block opacity-0"
            style={{ fontSize: 'clamp(1.9rem, 9.2vw, 7rem)' }}
          >
            Sustainable Engineering.
          </span>
          <span
            ref={heading2Ref}
            className="block italic text-gold opacity-0"
            style={{ fontSize: 'clamp(1.9rem, 9.2vw, 7rem)' }}
          >
            Biophilic Design.          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="mx-auto mb-8 max-w-[92%] font-sans font-light leading-relaxed text-white/70 opacity-0 sm:mb-10 sm:max-w-xl"
          style={{ fontSize: 'clamp(0.92rem, 3.4vw, 1.05rem)' }}
        >
          We are a consulting non-profit. We optimize spaces using LEED & WELL principles, and channel our profits into environmental education for schools.</p>

        {/* CTAs */}
        <div
          ref={buttonsRef}
          className="mb-10 flex flex-col items-stretch justify-center gap-3 opacity-0 sm:mb-14 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#mission"
            className="rounded-full bg-sage px-6 py-3 text-center text-sm font-medium tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-[0_12px_32px_rgba(74,103,65,0.45)] sm:px-8 sm:py-[14px] sm:tracking-[0.07em]"
          >
            Our Mission
          </a>
        </div>

        {/* Nature stats strip */}
        <div
          ref={statsRef}
          className="mx-auto grid w-full max-w-[360px] grid-cols-2 rounded-3xl border border-white/10 bg-white/5 px-2 py-2 opacity-0 backdrop-blur-md sm:inline-flex sm:w-auto sm:max-w-none sm:grid-cols-none sm:items-center sm:rounded-full"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="px-3 py-2 text-center sm:px-5 sm:py-0">
                <div className="font-serif text-white/90 text-base leading-none mb-0.5">{stat.value}</div>
                <div className="font-sans text-white/38 text-[8.5px] uppercase tracking-[0.22em]">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden h-6 w-px bg-white/12 sm:block" />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Layer 6: Foreground leaves (parallax fastest) ─ */}
      {/* Bottom-right — largest, closest to viewer */}
      {/* <div */}
      {/*   ref={leafFrontRightRef} */}
      {/*   className="pointer-events-none absolute -right-20 -bottom-24 z-[15] will-change-transform sm:-right-14 sm:-bottom-16" */}
      {/*   style={{ opacity: 0.28 }} */}
      {/* > */}
      {/*   <MonsteraLeaf className="h-[300px] w-[220px] text-sage-dark sm:h-[480px] sm:w-[340px]" /> */}
      {/* </div> */}
      {/* {/* Bottom-left — tropical frond */}
      {/* <div */}
      {/*   ref={leafFrontLeftRef} */}
      {/*   className="pointer-events-none absolute -bottom-16 -left-16 z-[15] will-change-transform sm:-bottom-10 sm:-left-10" */}
      {/*   style={{ opacity: 0.2 }} */}
      {/* > */}
      {/*   <TropicalLeaf className="h-[250px] w-20 text-sage sm:h-[380px] sm:w-28" /> */}
      {/* </div> */}
      {/**/}
      {/* ── Scroll indicator ────────────────────────────── */}
      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 animate-scroll-bounce sm:flex">
        <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Scroll</span>
        <ArrowDown className="w-4 h-4 text-white/35" />
      </div>

    </section>
  )
}
