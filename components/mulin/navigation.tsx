'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SproutIcon, MenuIcon, CloseIcon } from './svg-assets'

const navLinks = [
  { label: 'Research', href: '/research' },
  {
    label: 'Services',
    href: '/services',
    dropdownItems: [
      { label: 'Biophilic Design', href: '/services/biophilic-design' },
      { label: 'Landscape & Rooftop Greening Design', href: '/services/landscape-rooftop-greening-design' },
      { label: 'Green Building Rating System', href: '/services/green-building-rating-system' },
      { label: 'Plant Art Workshops', href: '/services/plant-art-workshops' },
      { label: 'Garden Maintenance', href: '/services/garden-maintenance' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    dropdownItems: [
      { label: 'Plant Art Products', href: '/products/plant-art-products' },
      { label: 'Moss Walls & Living Walls', href: '/products/moss-walls-living-walls' },
      { label: 'Biodiversity Toolkit', href: '/products/biodiversity-toolkit' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Community', href: '/community' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

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
            <Link
              href="/"
              className={`flex items-center gap-3 transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-white'
                }`}
            >
              <Image
                src="/favicon-mulin.png"
                alt="Mulin Venture logo — biophilic design studio in Kathmandu, Nepal"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="font-serif font-bold text-xl tracking-[0.15em]">Mulin Venture</span>
              <SproutIcon className="w-5 h-5" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.href.startsWith('/') ? (
                    <Link
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
                    </Link>
                  ) : (
                    <Link
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
                    </Link>
                  )}

                  {link.dropdownItems && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="rounded-2xl border border-ink/10 bg-cream/95 p-2 shadow-xl backdrop-blur-md">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[13px] tracking-[0.03em] text-ink transition-colors duration-200 hover:bg-sage/10 hover:text-sage-dark"
                          >
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/consultation"
              className={`hidden lg:inline-flex items-center px-[22px] py-[10px] rounded-full text-sm tracking-[0.05em] border transition-all duration-300 ${scrolled
                ? 'border-ink text-ink hover:bg-sage-dark hover:text-white hover:border-transparent'
                : 'border-white text-white hover:bg-sage-dark hover:text-white hover:border-transparent'
                }`}
            >
              Request Consultation →
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setOpenMobileSubmenu(null)
                setMobileMenuOpen(true)
              }}
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
              onClick={() => {
                setOpenMobileSubmenu(null)
                setMobileMenuOpen(false)
              }}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={link.label}
                className="flex flex-col items-center"
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: 'transform 0.4s ease, opacity 0.4s ease, color 0.3s ease',
                }}
              >
                <div className="flex items-center gap-3">
                  <Link
                    href={link.href}
                    onClick={() => {
                      setOpenMobileSubmenu(null)
                      setMobileMenuOpen(false)
                    }}
                    className="font-serif text-4xl text-white hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>

                  {link.dropdownItems && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSubmenu((current) => (current === link.label ? null : link.label))
                      }
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-gold hover:text-gold"
                      aria-label={`Toggle ${link.label} submenu`}
                      aria-expanded={openMobileSubmenu === link.label}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-200 ${openMobileSubmenu === link.label ? 'rotate-0' : 'rotate-180'
                          }`}
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
                    </button>
                  )}
                </div>

                {link.dropdownItems && openMobileSubmenu === link.label && (
                  <div className="mt-4 flex flex-col items-center gap-3">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setOpenMobileSubmenu(null)
                          setMobileMenuOpen(false)
                        }}
                        className="text-lg text-white/80 transition-colors duration-300 hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-8 text-center">
            <Link
              href="/consultation"
              onClick={() => {
                setOpenMobileSubmenu(null)
                setMobileMenuOpen(false)
              }}
              className="inline-block px-8 py-4 bg-sage text-white rounded-full text-lg"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
