'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { SproutIcon, MenuIcon, CloseIcon } from './svg-assets'

const navLinks = [
  { label: 'Research', href: '#research' },
  {
    label: 'Services',
    href: '#services',
    dropdownItems: [
      { label: 'LEED Certification', href: '#leed-certification' },
      { label: 'WELL Certification', href: '#well-certification' },
      { label: 'Sustainable Building Design', href: '#sustainable-building-design' },
      { label: 'Air Quality', href: '#air-quality', comingSoon: true },
      { label: 'Water Safety', href: '#water-safety', comingSoon: true },
      { label: 'Light Optimization', href: '#light-optimization', comingSoon: true },
      { label: 'Soil Health', href: '#soil-health', comingSoon: true },
      { label: 'Noise Mapping', href: '#noise-mapping', comingSoon: true },
    ],
  },
  {
    label: 'Products',
    href: '#products',
    dropdownItems: [
      { label: 'Green Wall Systems', href: '#green-wall-systems' },
      { label: 'Roof Gardens', href: '#roof-gardens', comingSoon: true },
    ],
  },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
          ? 'bg-cream/92 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-[1320px] mx-auto px-[clamp(20px,5vw,80px)] py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className={`flex items-center gap-3 transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'
                }`}
            >
              <Image
                src="/logo.jpeg"
                alt="Mulin Venture logo"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="font-serif font-semibold text-xl tracking-[0.15em]">MULIN</span>
              <SproutIcon className="w-5 h-5" />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className={`relative inline-flex items-center gap-1 text-[13px] tracking-[0.08em] font-normal transition-colors duration-300 group-hover:text-sage ${scrolled ? 'text-ink' : 'text-white'
                      }`}
                  >
                    {link.label}
                    {link.dropdownItems && (
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-3 w-3 rotate-180 transition-transform duration-200 group-hover:rotate-0"
                        fill="none"
                      >
                        <path
                          d="M5 12L10 7L15 12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sage transition-all duration-300 group-hover:w-full" />
                  </a>

                  {link.dropdownItems && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="rounded-2xl border border-ink/10 bg-cream/95 p-2 shadow-xl backdrop-blur-md">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[13px] tracking-[0.03em] text-ink transition-colors duration-200 hover:bg-sage/10 hover:text-sage-dark"
                          >
                            <span>{item.label}</span>
                            {item.comingSoon && (
                              <span className="rounded-md bg-ink/10 px-2 py-1 text-[11px] text-ink/70">
                                Coming Soon
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#customize"
              className={`hidden lg:inline-flex items-center px-[22px] py-[10px] rounded-full text-sm tracking-[0.05em] border transition-all duration-300 ${scrolled
                ? 'border-ink text-ink hover:bg-sage-dark hover:text-white hover:border-transparent'
                : 'border-white text-white hover:bg-sage-dark hover:text-white hover:border-transparent'
                }`}
            >
              Start Customizing →
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-ink' : 'text-white'
                }`}
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-moss transition-opacity duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl text-white hover:text-gold transition-colors duration-300"
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: 'transform 0.4s ease, opacity 0.4s ease, color 0.3s ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-8 text-center">
            <a
              href="#customize"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block px-8 py-4 bg-sage text-white rounded-full text-lg"
            >
              Start Customizing
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
