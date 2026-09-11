'use client'

import Image from 'next/image'
import { useState } from 'react'
import { GrowingPlantIcon, InstagramIcon, FacebookIcon, TikTokIcon, ArrowRight } from './svg-assets'

const shopLinks = [
  { label: 'Our Plants', href: '#' },
  { label: 'Custom Orders', href: '/consultation' },
  { label: 'Gift Sets', href: '#' },
  { label: 'Corporate & Office', href: '#' },
  { label: 'Event Rentals', href: '#' },
]

const companyLinks = [
  { label: 'About Mulin Venture', href: '#about' },
  { label: 'Our Process', href: '#' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Press & Media', href: '#' },
  { label: 'Careers', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <footer className="bg-ink text-white/70">
      {/* Main Footer */}
      <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] py-16 md:py-20">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon-mulin.png"
              alt="Mulin Venture logo — biophilic design studio in Nepal"
              width={50}
              height={50}
              className="rounded-full object-contain"
            />
            <span className="font-serif font-bold text-2xl tracking-[0.15em] text-white">Mulin Venture</span>
          </div>
          <p className="font-serif text-lg tracking-[0.12em] uppercase text-white/60 flex items-center gap-3">
            Nurture through Nature
            <GrowingPlantIcon className="w-7 h-7 text-sage" />
          </p>
        </div>

        {/* Gold Divider */}
        <div className="h-px bg-gold/30 mb-12" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <p className="font-sans font-light text-sm leading-relaxed mb-6">
              Environmentally responsible design, living plant systems, and community-centered
              learning that help cities reconnect with nature.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mulinventure/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1aHW7G3oTv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@muliin_06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white mb-6">
              Get In Touch
            </h4>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex items-center border-b border-white/30 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent font-sans text-sm text-white placeholder:text-white/40 outline-none"
                  aria-label="Email address"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="space-y-2">
              <p className="font-sans text-sm">Kathmandu, Nepal</p>
              <a
                href="tel:+9779847519689"
                className="block font-sans text-sm hover:text-gold transition-colors"
              >
                +977 984-7519689
              </a>
              <a
                href="mailto:info@mulinventure.com"
                className="block font-sans text-sm hover:text-gold transition-colors"
              >
                info@mulinventure.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] py-6">
          <div className="flex items-center justify-center">
            <p className="text-center font-sans text-xs text-white/40">
              © 2026 Mulin Venture. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <span className="mx-2">|</span>
              Developed by <a href="https://nirvixtech.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Nirvix Technology</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
