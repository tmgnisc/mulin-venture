'use client'

import { MoonPhases } from './svg-assets'

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8 bg-cream">
      <div className="flex-1 h-px bg-sage/20 max-w-[200px]" />
      <MoonPhases className="w-32 h-6 mx-6 text-sage/50" />
      <div className="flex-1 h-px bg-sage/20 max-w-[200px]" />
    </div>
  )
}
