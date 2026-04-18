'use client'

export function MonsteraLeaf({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M50 0C55 20 70 35 75 55C80 75 70 95 50 120C30 95 20 75 25 55C30 35 45 20 50 0Z M45 40C40 50 42 65 50 80 M55 40C60 50 58 65 50 80 M35 55C45 55 50 60 50 70 M65 55C55 55 50 60 50 70" 
        strokeWidth="1" 
        stroke="currentColor" 
        fillOpacity="0.8"
      />
    </svg>
  )
}

export function TropicalLeaf({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 100" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M20 0C25 10 30 30 30 50C30 70 25 90 20 100C15 90 10 70 10 50C10 30 15 10 20 0Z" 
        fillOpacity="0.9"
      />
      <path d="M20 10L20 90" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
  )
}

export function SproutIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22V12" strokeLinecap="round" />
      <path d="M12 12C12 8 16 4 20 4C20 8 16 12 12 12Z" />
      <path d="M12 15C12 11 8 7 4 7C4 11 8 15 12 15Z" />
    </svg>
  )
}

export function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M10 20C10 14 14 10 20 10V14C17 14 15 17 15 20V30H5V20H10ZM25 20C25 14 29 10 35 10V14C32 14 30 17 30 20V30H20V20H25Z" />
    </svg>
  )
}

export function MoonPhases({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 24" 
      className={className}
      aria-hidden="true"
    >
      {/* Empty moon */}
      <circle cx="20" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Waxing */}
      <circle cx="60" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M60 4A8 8 0 0 1 60 20A4 8 0 0 0 60 4Z" fill="currentColor" />
      {/* Full moon */}
      <circle cx="100" cy="12" r="8" fill="currentColor" />
      {/* Waning */}
      <circle cx="140" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M140 4A8 8 0 0 0 140 20A4 8 0 0 1 140 4Z" fill="currentColor" />
      {/* Empty moon */}
      <circle cx="180" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function StarIcon({ className = '', filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill={filled ? 'currentColor' : 'none'} 
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

export function HeartIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
    </svg>
  )
}

export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
    </svg>
  )
}

export function ArrowDown({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5V19M12 19L5 12M12 19L19 12" />
    </svg>
  )
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export function PinterestIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  )
}

export function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
