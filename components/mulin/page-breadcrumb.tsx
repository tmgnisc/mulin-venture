import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type Crumb = {
  label: string
  href?: string
}

const labelMap: Record<string, string> = {
  products: 'Products',
  services: 'Services',
  blog: 'Blog',
  'plant-art-products': 'Plant Art Products',
  kokedama: 'Kokedama',
  'moss-walls-living-walls': 'Moss Walls & Living Walls',
  'biodiversity-toolkit': 'Biodiversity Toolkit',
  tippy: 'Tippy',
  'biophilic-design': 'Biophilic Design',
  'landscape-rooftop-greening-design': 'Landscape & Rooftop Greening',
  'green-building-rating-system': 'Green Building Rating',
  'plant-art-workshops': 'Plant Art Workshops',
  'garden-maintenance': 'Garden Maintenance',
  about: 'About',
  community: 'Community',
  research: 'Research',
}

function resolveLabel(segment: string): string {
  return labelMap[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function PageBreadcrumb({ segments }: { segments: string[] }) {
  const crumbs: Crumb[] = [{ label: 'Home', href: '/' }]

  let accumulated = ''
  for (let i = 0; i < segments.length; i++) {
    accumulated += '/' + segments[i]
    const isLast = i === segments.length - 1
    crumbs.push({
      label: resolveLabel(segments[i]),
      ...(isLast ? {} : { href: accumulated }),
    })
  }

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70 sm:gap-2.5">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3 w-3 shrink-0 opacity-60" />}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                <span>{crumb.label}</span>
              </Link>
            ) : (
              <span className="text-white font-medium" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
