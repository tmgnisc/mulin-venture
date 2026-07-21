export type ServicePageContent = {
  slug: string
  eyebrow: string
  title: string
  summary: string
  heroImage: string
  heroAlt: string
  heroNote: string
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

const servicePages: Record<string, ServicePageContent> = {
  'biophilic-design': {
    slug: 'biophilic-design',
    eyebrow: 'Core Service / Nature-Led Spaces',
    title: 'Biophilic Design',
    summary:
      'End-to-end design that places nature at the heart of every decision from material selection and plant placement to lighting, texture, and air flow.',
    heroImage:
      'https://images.unsplash.com/photo-1523419409543-5d3f8f9f5a4f?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Nature-integrated interior space with layered planting and natural materials',
    heroNote:
      'We design spaces that are measurably better for the people who use them.',
    accent: '#737F3C',
    stats: [
      { value: '01', label: 'materials' },
      { value: '02', label: 'planting' },
      { value: '03', label: 'air + light' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Biophilic Design aligns spatial planning, materiality, planting, and sensory quality so built environments feel alive and support daily wellbeing.',
    featuresTitle: 'Scope of support',
    features: [
      { title: 'Material and texture strategy', body: 'We select finishes and tactile layers that support a nature-connected atmosphere.' },
      { title: 'Plant placement logic', body: 'Plant systems are positioned for both ecological value and spatial experience.' },
      { title: 'Airflow and light integration', body: 'We tune air and lighting relationships to support comfort and performance.' },
    ],
    processTitle: 'How the work unfolds',
    process: [
      { step: '01', title: 'Discovery', body: 'We map goals, users, and environmental conditions.' },
      { step: '02', title: 'Design development', body: 'Nature-led concepts are translated into actionable layouts and specifications.' },
      { step: '03', title: 'Implementation support', body: 'We guide delivery and refinements to protect design intent.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Healthier daily experience', body: 'Users feel better supported by the physical environment.' },
      { title: 'Stronger spatial identity', body: 'Spaces communicate a clear, nature-positive brand and atmosphere.' },
      { title: 'Measurable quality gains', body: 'Environmental and experiential performance improves with intent.' },
    ],
  },
  'landscape-rooftop-greening-design': {
    slug: 'landscape-rooftop-greening-design',
    eyebrow: 'Exterior Systems / Urban Ecology',
    title: 'Landscape & Rooftop Greening Design',
    summary:
      'Transforming underused rooftops and exterior spaces into productive green environments.',
    heroImage:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Rooftop and landscape greenery in an urban setting',
    heroNote:
      'Our landscape designs combine aesthetic vision with ecological function, supporting native species while creating spaces people love.',
    accent: '#5F8F74',
    stats: [
      { value: '01', label: 'rooftop use' },
      { value: '02', label: 'native species' },
      { value: '03', label: 'ecological function' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'We turn roofs and exterior zones into high-value green systems that support biodiversity, climate resilience, and better place quality.',
    featuresTitle: 'Scope of support',
    features: [
      { title: 'Rooftop transformation planning', body: 'We convert underused roof areas into productive living environments.' },
      { title: 'Ecological planting strategy', body: 'Plant palettes are selected for native support and long-term performance.' },
      { title: 'Experience-driven landscape design', body: 'Spaces are built to be both ecologically useful and socially welcoming.' },
    ],
    processTitle: 'How the work unfolds',
    process: [
      { step: '01', title: 'Site assessment', body: 'We review structural, climatic, and ecological opportunities.' },
      { step: '02', title: 'Design integration', body: 'Landscape vision and ecological requirements are combined into one scheme.' },
      { step: '03', title: 'Installation roadmap', body: 'Phased implementation is defined for practical delivery and care.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Higher biodiversity value', body: 'Urban spaces begin supporting species that were previously displaced.' },
      { title: 'Better social use', body: 'People gain usable, restorative green areas in dense environments.' },
      { title: 'Long-term ecological performance', body: 'Design decisions support sustained growth and resilience.' },
    ],
  },
  'green-building-rating-system': {
    slug: 'green-building-rating-system',
    eyebrow: 'Assessment / Advisory',
    title: 'Green Building Rating System',
    summary:
      'A structured assessment and advisory service that measures the environmental performance of interior and exterior spaces.',
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Modern sustainable building facade',
    heroNote:
      'We help clients understand their carbon footprint, biodiversity impact, and nature-based solution potential and how to improve each one.',
    accent: '#FFBE71',
    stats: [
      { value: '01', label: 'carbon footprint' },
      { value: '02', label: 'biodiversity impact' },
      { value: '03', label: 'improvement roadmap' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Our rating system makes environmental performance visible, comparable, and actionable so clients can make informed design and operations decisions.',
    featuresTitle: 'Scope of support',
    features: [
      { title: 'Performance diagnostics', body: 'We assess existing conditions across carbon, biodiversity, and nature-based indicators.' },
      { title: 'Scored evaluation framework', body: 'A consistent structure helps teams benchmark and track progress over time.' },
      { title: 'Action-oriented recommendations', body: 'Clients receive clear steps to improve outcomes in each impact area.' },
    ],
    processTitle: 'How the work unfolds',
    process: [
      { step: '01', title: 'Data collection', body: 'We gather key environmental and spatial inputs from the project.' },
      { step: '02', title: 'Assessment and scoring', body: 'Performance is evaluated against the rating framework.' },
      { step: '03', title: 'Advisory handoff', body: 'We deliver a practical pathway for targeted improvements.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Clear environmental visibility', body: 'Clients understand where performance is strong and where it must improve.' },
      { title: 'Better decision quality', body: 'Investment and design choices are guided by measurable evidence.' },
      { title: 'Accountable progress', body: 'Impact improvements can be tracked and communicated confidently.' },
    ],
  },
  'plant-art-workshops': {
    slug: 'plant-art-workshops',
    eyebrow: 'Community Learning / Hands-On',
    title: 'Plant Art Workshops',
    summary:
      'Hands-on community workshops where participants create their own plant art pieces while learning about biophilic design, indigenous plant knowledge, and the benefits of living with nature.',
    heroImage:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Participants creating plant art in a workshop setting',
    heroNote:
      'Available for schools, organisations, and public events.',
    accent: '#8C9A4B',
    stats: [
      { value: '01', label: 'hands-on craft' },
      { value: '02', label: 'biophilic learning' },
      { value: '03', label: 'community format' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'These workshops build practical confidence through making, learning, and shared community participation around nature-connected living.',
    featuresTitle: 'Scope of support',
    features: [
      { title: 'Guided plant art creation', body: 'Participants produce their own living plant art with step-by-step support.' },
      { title: 'Biophilic education', body: 'Sessions explain why nature-integrated spaces support human wellbeing.' },
      { title: 'Indigenous knowledge connection', body: 'Learning includes local ecological wisdom and culturally grounded practice.' },
    ],
    processTitle: 'How the work unfolds',
    process: [
      { step: '01', title: 'Program planning', body: 'We align workshop format to audience type and learning outcomes.' },
      { step: '02', title: 'Facilitated session', body: 'Participants create, discuss, and practice nature-connected techniques.' },
      { step: '03', title: 'Take-home continuity', body: 'Care guidance and resources support continued practice after the event.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Practical skill growth', body: 'Participants leave with real making and care confidence.' },
      { title: 'Stronger nature connection', body: 'People build personal relationships with living systems.' },
      { title: 'Community-level engagement', body: 'Groups sustain shared action beyond one-time activities.' },
    ],
  },
  'garden-maintenance': {
    slug: 'garden-maintenance',
    eyebrow: 'Stewardship / Ongoing Care',
    title: 'Garden Maintenance',
    summary:
      'Ongoing care and maintenance for living walls, rooftop gardens, and planted interiors.',
    heroImage:
      'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Gardener maintaining healthy planted systems',
    heroNote:
      'We ensure every green space we create continues to thrive, keeping ecosystems healthy and clients confident.',
    accent: '#5F6F68',
    stats: [
      { value: '01', label: 'health monitoring' },
      { value: '02', label: 'preventive care' },
      { value: '03', label: 'system longevity' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Maintenance is treated as ecological stewardship, protecting plant health, visual quality, and long-term performance across all installed systems.',
    featuresTitle: 'Scope of support',
    features: [
      { title: 'Routine ecosystem care', body: 'Scheduled care protects plant vitality and system stability.' },
      { title: 'Issue prevention and correction', body: 'Early diagnosis and targeted interventions reduce long-term risk.' },
      { title: 'Client confidence support', body: 'Clear communication and reporting keep care outcomes transparent.' },
    ],
    processTitle: 'How the work unfolds',
    process: [
      { step: '01', title: 'Baseline check', body: 'We assess current health status and care needs across the site.' },
      { step: '02', title: 'Care execution', body: 'Maintenance tasks are delivered on a structured rhythm.' },
      { step: '03', title: 'Performance follow-up', body: 'We track outcomes and adjust plans as conditions change.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Thriving green systems', body: 'Installed spaces remain healthy, attractive, and resilient.' },
      { title: 'Reduced replacement waste', body: 'Preventive care lowers avoidable loss and rework.' },
      { title: 'Reliable long-term value', body: 'Clients retain confidence that investments continue to perform.' },
    ],
  },
}

export function getServicePageContent(slug: string) {
  return servicePages[slug]
}

export const serviceHubItems = Object.values(servicePages).map((page, index) => ({
  id: page.slug,
  href: `/services/${page.slug}`,
  order: String(index + 1).padStart(2, '0'),
  eyebrow: page.eyebrow,
  title: page.title,
  summary: page.summary,
  accent: page.accent,
}))
