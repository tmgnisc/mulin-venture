export type ProductPageContent = {
  slug: string
  eyebrow: string
  title: string
  summary: string
  heroImage: string
  heroAlt: string
  heroNote: string
  bodyImage?: string
  bodyAlt?: string
  accent: string
  stats: { value: string; label: string }[]
  overviewTitle: string
  overviewBody: string
  featuresTitle: string
  features: { title: string; body: string }[]
  processTitle: string
  process: { step: string; title: string; body: string }[]
  outcomesTitle: string
  outcomes: { title: string; body: string }[]
}

export type ProductHubItem = {
  slug: string
  href: string
  eyebrow: string
  title: string
  summary: string
  image: string
  alt: string
  accent: string
  detail: string
  metric: string
}

export const productHubItems: ProductHubItem[] = [
  {
    slug: 'green-wall-systems',
    href: '/products/green-wall-systems',
    eyebrow: 'Living Architecture',
    title: 'Green Wall Systems',
    summary:
      'Modular vertical planting systems that turn blank walls into living surfaces for calmer interiors, stronger identity, and better spatial atmosphere.',
    image: '/wall.jpg',
    alt: 'Living green wall with dense layered planting',
    accent: '#6f8b66',
    detail: 'Best for hospitality, office interiors, and feature walls that need a clear botanical focal point.',
    metric: '02 layers of care logic',
  },
  {
    slug: 'roof-gardens',
    href: '/products/roof-gardens',
    eyebrow: 'Rooftop Ecology',
    title: 'Roof Gardens',
    summary:
      'Rooftop planting strategies that add usable outdoor space, soften heat gain, and support a more relaxed transition between building and sky.',
    image: '/plant.jpg',
    alt: 'Green planting around a bright outdoor setting',
    accent: '#86a89a',
    detail: 'Best for terraces, private roofs, and amenity decks that need structure, planting, and maintenance to stay aligned.',
    metric: '03 checks before build',
  },
]

const productPages: Record<string, ProductPageContent> = {
  'green-wall-systems': {
    slug: 'green-wall-systems',
    eyebrow: 'Living Architecture / Vertical Greenery',
    title: 'Green Wall Systems',
    summary:
      'A buildable way to introduce lush vertical planting, improve atmosphere, and make a wall read like part of the landscape instead of a blank boundary.',
    heroImage: '/wall.jpg',
    heroAlt: 'Living green wall with dense layered planting',
    heroNote: 'Modular trays, irrigation logic, and plant selection tuned to light, access, and long-term care.',
    bodyImage: '/wall2.jpg',
    bodyAlt: 'Living green wall installed as a vertical planting system',
    accent: '#6f8b66',
    stats: [
      { value: '01', label: 'wall study' },
      { value: '02', label: 'system logic' },
      { value: '03', label: 'care access' },
    ],
    overviewTitle: 'What the system solves',
    overviewBody:
      'Green walls are most successful when design, irrigation, and maintenance are treated as one system. We shape the wall so it feels integrated with the interior, but stays practical to install, service, and keep healthy over time.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Wall and load planning',
        body: 'Check the receiving surface, structure, and mounting approach early so the system feels intentional rather than added on.',
      },
      {
        title: 'Plant palette direction',
        body: 'Choose species that fit light levels, humidity, and visual rhythm so the wall keeps its character after installation.',
      },
      {
        title: 'Access and irrigation',
        body: 'Build in maintenance access, watering logic, and replacement strategy so the wall remains manageable for the long term.',
      },
    ],
    processTitle: 'How it comes together',
    process: [
      {
        step: '01',
        title: 'Site review',
        body: 'We review the wall condition, daylight, and use pattern to define what the system can realistically support.',
      },
      {
        step: '02',
        title: 'System design',
        body: 'The planting layout, support structure, and irrigation route are planned as a single coordinated package.',
      },
      {
        step: '03',
        title: 'Installation tuning',
        body: 'After install, the wall is calibrated so growth, moisture, and access all stay in balance.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Stronger first impression',
        body: 'The wall becomes a clear visual anchor that supports the site’s botanical identity.',
      },
      {
        title: 'Better atmosphere',
        body: 'Layered planting softens hard surfaces and gives the room a more grounded, calm feel.',
      },
      {
        title: 'Sustainable upkeep',
        body: 'The system is organized around real maintenance needs instead of decorative assumptions.',
      },
    ],
  },
  'roof-gardens': {
    slug: 'roof-gardens',
    eyebrow: 'Rooftop Ecology / Outdoor Rooms',
    title: 'Roof Gardens',
    summary:
      'Rooftop garden planning that balances weight, drainage, sun exposure, and planting character so the roof becomes usable, not just green.',
    heroImage: '/roof.jpg',
    heroAlt: 'Roof garden with planted edges and outdoor planting structure',
    heroNote: 'Drainage, shade, circulation, and seasonal planting are aligned into one roof-ready plan.',
    accent: '#86a89a',
    stats: [
      { value: '01', label: 'load check' },
      { value: '02', label: 'drainage path' },
      { value: '03', label: 'seasonal palette' },
    ],
    overviewTitle: 'What the system solves',
    overviewBody:
      'Roof gardens work when the roof behaves like a designed outdoor room. We shape the layout so planting, seating, circulation, and maintenance all support one another while respecting the building’s technical limits.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Structural and drainage review',
        body: 'Plan around load, water movement, and waterproofing requirements before the garden concept hardens.',
      },
      {
        title: 'Spatial composition',
        body: 'Arrange planting, edges, and circulation so the roof feels welcoming and easy to use rather than crowded.',
      },
      {
        title: 'Seasonal planting logic',
        body: 'Select species and maintenance rhythms that keep the roof useful through changing weather and exposure.',
      },
    ],
    processTitle: 'How it comes together',
    process: [
      {
        step: '01',
        title: 'Roof assessment',
        body: 'We review access, sun, drainage, and structure to understand the roof’s real opportunity.',
      },
      {
        step: '02',
        title: 'Terrace planning',
        body: 'We map planting zones, seating edges, and movement paths into a calm and buildable layout.',
      },
      {
        step: '03',
        title: 'Handover and upkeep',
        body: 'The final plan includes maintenance logic so the roof remains practical after opening day.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Usable outdoor space',
        body: 'The roof gains a clear purpose as a place to sit, gather, and look out over the site.',
      },
      {
        title: 'Reduced heat pressure',
        body: 'Planting and surface treatment help the roof feel less exposed and more comfortable.',
      },
      {
        title: 'Clearer maintenance plan',
        body: 'The garden is designed around upkeep so the system stays realistic beyond the reveal.',
      },
    ],
  },
}

export function getProductPageContent(slug: string) {
  return productPages[slug]
}

export const productSlugs = Object.keys(productPages)
