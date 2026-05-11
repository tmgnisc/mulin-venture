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
  'leed-certification': {
    slug: 'leed-certification',
    eyebrow: 'Building Performance / LEED',
    title: 'LEED Certification',
    summary:
      'A structured path for projects that need a clear certification roadmap, documentation discipline, and measurable environmental performance.',
    heroImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Modern sustainable building exterior',
    heroNote: 'Credit strategy, submittal prep, and review-ready coordination for project teams.',
    accent: '#c6a96a',
    stats: [
      { value: '01', label: 'scorecard review' },
      { value: '02', label: 'credit alignment' },
      { value: '03', label: 'submission support' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'We translate design intent into a certification plan that is practical for architects, consultants, and owners. The goal is a cleaner path from concept to closeout, with fewer surprises when documentation starts to move.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Credit Strategy',
        body: 'Map prerequisites, optional credits, and documentation responsibilities early so the team can plan with confidence.',
      },
      {
        title: 'Documentation Review',
        body: 'Track narratives, product data, and compliance evidence so every package is ready for the next reviewer step.',
      },
      {
        title: 'Project Coordination',
        body: 'Align design, procurement, and execution teams around the same performance targets instead of isolated checklists.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Assessment',
        body: 'We review the project brief, program goals, and current design documents to identify the certification path.',
      },
      {
        step: '02',
        title: 'Roadmap',
        body: 'A practical action plan defines milestones, materials, and responsibilities for each credit category.',
      },
      {
        step: '03',
        title: 'Submission',
        body: 'We coordinate review-ready packages and help the team resolve questions before they become delays.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Clearer scope',
        body: 'The team understands what is needed, when it is needed, and who owns each deliverable.',
      },
      {
        title: 'Fewer revisions',
        body: 'Documentation is prepared with review expectations in mind, which reduces late-stage cleanup.',
      },
      {
        title: 'Stronger performance',
        body: 'The certification process becomes a tool for design quality rather than a burden on the schedule.',
      },
    ],
  },
  'well-certification': {
    slug: 'well-certification',
    eyebrow: 'Occupant Health / WELL',
    title: 'WELL Certification',
    summary:
      'Design support for healthier interiors, occupant comfort, and performance criteria that put people at the center of the space.',
    heroImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Calm interior with natural light and planting',
    heroNote: 'Indoor comfort, wellness features, and evidence-led design decisions.',
    accent: '#86a89a',
    stats: [
      { value: '01', label: 'wellness map' },
      { value: '02', label: 'comfort review' },
      { value: '03', label: 'occupant focus' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'This service centers indoor air, light, acoustics, thermal comfort, and the daily experience of occupants. We help teams create calm, healthy interiors that feel intentional rather than overdesigned.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Air and ventilation',
        body: 'Review fresh-air strategy, filtration, and low-emission material decisions that support healthier interiors.',
      },
      {
        title: 'Light and comfort',
        body: 'Balance daylight, glare control, and layered artificial lighting to support the way people actually use a space.',
      },
      {
        title: 'Acoustic quality',
        body: 'Identify the sound-sensitive zones that need more control, privacy, or material treatment.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Occupant profile',
        body: 'We define who uses the building, how long they stay, and which comfort factors matter most.',
      },
      {
        step: '02',
        title: 'Design tuning',
        body: 'Targets for air, light, and acoustic performance are translated into practical interventions.',
      },
      {
        step: '03',
        title: 'Verification',
        body: 'We help the team document what was implemented and where further tuning may be needed.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Better daily comfort',
        body: 'Spaces feel easier to occupy because wellness concerns are addressed early.',
      },
      {
        title: 'Stronger user trust',
        body: 'People notice when a space supports focus, rest, and movement without distraction.',
      },
      {
        title: 'Measured improvements',
        body: 'Health-related decisions are documented with enough clarity to support certification goals.',
      },
    ],
  },
  'sustainable-building-design': {
    slug: 'sustainable-building-design',
    eyebrow: 'Concept / Sustainable Design',
    title: 'Sustainable Building Design',
    summary:
      'Integrated design guidance for projects that want energy, material, and spatial decisions to work together from the start.',
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Architectural model and design materials on a table',
    heroNote: 'Early-stage planning, envelope thinking, and material strategy in one workflow.',
    accent: '#6f8b66',
    stats: [
      { value: '01', label: 'concept framing' },
      { value: '02', label: 'material logic' },
      { value: '03', label: 'energy intent' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'We look at the building as a connected system. The result is a cleaner design narrative where envelope, daylight, ventilation, structure, and material selection support the same sustainability goals.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Integrated planning',
        body: 'Bring sustainability into the first design conversations instead of treating it like a final checklist.',
      },
      {
        title: 'Material direction',
        body: 'Evaluate low-impact materials, sourcing, durability, and maintenance implications together.',
      },
      {
        title: 'System alignment',
        body: 'Coordinate massing, shading, and ventilation decisions with the project’s long-term performance goals.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Brief review',
        body: 'We map the project’s aspirations, constraints, and sustainability targets before design decisions harden.',
      },
      {
        step: '02',
        title: 'Concept options',
        body: 'We compare strategies that shape energy use, comfort, and construction impact in parallel.',
      },
      {
        step: '03',
        title: 'Refinement',
        body: 'The preferred direction is tuned so it stays practical for consultants and contractors.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Better coordination',
        body: 'Teams make fewer disconnected decisions because the sustainability logic is visible early.',
      },
      {
        title: 'Lower friction',
        body: 'Concepts are easier to defend because they come with an implementation path.',
      },
      {
        title: 'Stronger identity',
        body: 'The building’s story becomes coherent, not just efficient.',
      },
    ],
  },
  'air-quality': {
    slug: 'air-quality',
    eyebrow: 'Indoor Environment / Air',
    title: 'Air Quality',
    summary:
      'Monitoring and mitigation planning for spaces where ventilation, filtration, and occupant well-being need more attention.',
    heroImage:
      'https://images.unsplash.com/photo-1509388260858-7a5ae74f3c3d?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Sunlit interior with greenery and clean finishes',
    heroNote: 'Ventilation review, filtration logic, and low-emission material strategy.',
    accent: '#6aa8a0',
    stats: [
      { value: '01', label: 'iaq review' },
      { value: '02', label: 'source mapping' },
      { value: '03', label: 'mitigation plan' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'We identify the likely sources of poor indoor air quality and prioritize the fixes that matter most. That includes ventilation, emissions, filtration, and the way a space is operated after handover.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Source review',
        body: 'Identify odor, VOC, and pollutant sources coming from materials, equipment, or maintenance habits.',
      },
      {
        title: 'Ventilation strategy',
        body: 'Check air delivery, exhaust, and filtration assumptions against how the building is actually used.',
      },
      {
        title: 'Operational guidance',
        body: 'Offer simple monitoring and maintenance actions so performance stays stable over time.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Survey',
        body: 'We review the space, building systems, and known occupant concerns.',
      },
      {
        step: '02',
        title: 'Diagnosis',
        body: 'Potential indoor air issues are ranked by urgency and fixability.',
      },
      {
        step: '03',
        title: 'Response',
        body: 'Mitigation measures are laid out in a sequence that teams can actually execute.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Cleaner indoor experience',
        body: 'Spaces become easier to occupy because irritation and uncertainty go down.',
      },
      {
        title: 'Targeted fixes',
        body: 'Instead of generic advice, teams get focused actions tied to the building’s conditions.',
      },
      {
        title: 'Ongoing confidence',
        body: 'Monitoring becomes part of routine operations, not a one-time event.',
      },
    ],
  },
  'water-safety': {
    slug: 'water-safety',
    eyebrow: 'Building Health / Water',
    title: 'Water Safety',
    summary:
      'Planning and review support for water systems that need cleaner operation, better control, and more confidence from end users.',
    heroImage:
      'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Water droplets on a clean blue surface',
    heroNote: 'Filtration, plumbing hygiene, and monitoring strategy for building systems.',
    accent: '#5f8fb0',
    stats: [
      { value: '01', label: 'system review' },
      { value: '02', label: 'risk mapping' },
      { value: '03', label: 'monitoring plan' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Water safety is about more than treatment equipment. We look at plumbing hygiene, stagnation risk, fixture use, maintenance rhythm, and the operational habits that keep a system stable.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'System hygiene',
        body: 'Review design and maintenance decisions that influence cleanliness, stagnation, and user confidence.',
      },
      {
        title: 'Filter logic',
        body: 'Assess whether filtration and treatment strategies align with the building’s use and water source.',
      },
      {
        title: 'Operational checks',
        body: 'Document the tasks that should happen regularly so the system remains predictable after handover.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Review',
        body: 'We map the water system, users, and known operational pain points.',
      },
      {
        step: '02',
        title: 'Safeguards',
        body: 'Risk-reduction measures are organized from highest impact to easiest implementation.',
      },
      {
        step: '03',
        title: 'Follow-through',
        body: 'The team receives a monitoring rhythm they can sustain without extra overhead.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'More reliable systems',
        body: 'The building has a clearer path to stable water performance.',
      },
      {
        title: 'Lower uncertainty',
        body: 'Owners and operators know what to check and when to check it.',
      },
      {
        title: 'Better trust',
        body: 'Water-related concerns are handled with a documented process rather than guesswork.',
      },
    ],
  },
  'light-optimization': {
    slug: 'light-optimization',
    eyebrow: 'Daylight / Lighting',
    title: 'Light Optimization',
    summary:
      'A daylight-and-lighting approach that supports visual comfort, circadian rhythm, and better use of natural light.',
    heroImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Interior filled with strong natural daylight',
    heroNote: 'Daylight control, glare strategy, and layered lighting recommendations.',
    accent: '#d3b56d',
    stats: [
      { value: '01', label: 'daylight study' },
      { value: '02', label: 'glare control' },
      { value: '03', label: 'layered output' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Good lighting is not only about brightness. We shape a layered experience where daylight is welcomed, glare is managed, and artificial lighting supports how the space is actually used.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Daylight use',
        body: 'Identify where natural light is an asset and where it needs shaping or moderation.',
      },
      {
        title: 'Glare reduction',
        body: 'Recommend shading, finish, and layout changes that keep visual comfort intact.',
      },
      {
        title: 'Lighting layers',
        body: 'Combine ambient, task, and accent lighting so the interior feels intentional through the day.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Analysis',
        body: 'We look at orientation, openings, occupancy patterns, and the current lighting strategy.',
      },
      {
        step: '02',
        title: 'Scenarios',
        body: 'Several options are compared to find a practical balance between comfort and performance.',
      },
      {
        step: '03',
        title: 'Calibration',
        body: 'The selected direction is tuned so the final result stays usable, not overlit.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Better visual comfort',
        body: 'Users can work or rest without fighting glare or uneven brightness.',
      },
      {
        title: 'More efficient lighting',
        body: 'Light is placed where it helps most instead of being spread indiscriminately.',
      },
      {
        title: 'A calmer atmosphere',
        body: 'The interior feels composed, warm, and legible throughout the day.',
      },
    ],
  },
  'soil-health': {
    slug: 'soil-health',
    eyebrow: 'Living Systems / Soil',
    title: 'Soil Health',
    summary:
      'Support for planting systems where substrate quality, nutrition, drainage, and root conditions need to work together.',
    heroImage:
      'https://images.unsplash.com/photo-1625066708174-d9f7e3a94d1c?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Healthy soil and plant roots in a cultivation bed',
    heroNote: 'Substrate balance, drainage review, and plant performance planning.',
    accent: '#8a6f4f',
    stats: [
      { value: '01', label: 'substrate check' },
      { value: '02', label: 'root health' },
      { value: '03', label: 'care routine' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Healthy planting starts below the surface. We review soil composition, moisture behavior, drainage, and nutrient support so plants can thrive rather than merely survive.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Soil balance',
        body: 'Check texture, structure, and nutrient conditions against the plant palette and maintenance plan.',
      },
      {
        title: 'Drainage logic',
        body: 'Reduce water stress by making sure the substrate and container system move moisture correctly.',
      },
      {
        title: 'Care rhythm',
        body: 'Build a maintenance cadence that is realistic for the site and the people looking after it.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Sampling',
        body: 'We inspect soil and planting conditions to identify the current limits of the system.',
      },
      {
        step: '02',
        title: 'Adjustment',
        body: 'Substrate, irrigation, and nutrient decisions are aligned with the intended planting outcome.',
      },
      {
        step: '03',
        title: 'Stewardship',
        body: 'A care plan is left behind so the planting system stays healthy after installation.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'Stronger growth',
        body: 'Plants establish more reliably when the soil system is tuned properly.',
      },
      {
        title: 'Less waste',
        body: 'Healthier substrates and better watering habits reduce replacement cycles.',
      },
      {
        title: 'Better resilience',
        body: 'The planting system is more adaptable to changing conditions and care schedules.',
      },
    ],
  },
  'noise-mapping': {
    slug: 'noise-mapping',
    eyebrow: 'Acoustics / Noise',
    title: 'Noise Mapping',
    summary:
      'A practical acoustic review for spaces where sound privacy, comfort, and circulation noise affect the experience of the building.',
    heroImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Modern workspace with layered interior surfaces',
    heroNote: 'Sound-sensitive zoning, material tuning, and mitigation recommendations.',
    accent: '#5f6f68',
    stats: [
      { value: '01', label: 'sound scan' },
      { value: '02', label: 'hotspot map' },
      { value: '03', label: 'mitigation list' },
    ],
    overviewTitle: 'What we focus on',
    overviewBody:
      'Noise issues often come from circulation paths, hard finishes, or shared systems that were not treated early enough. We identify those pressure points and turn them into a clear action map.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Hotspot mapping',
        body: 'Identify where sound leakage, reflection, or crowding is most likely to occur.',
      },
      {
        title: 'Material response',
        body: 'Recommend finishes and partitions that improve privacy without overcomplicating the design.',
      },
      {
        title: 'Use-case planning',
        body: 'Separate quiet, collaborative, and service zones so the building works with its own rhythm.',
      },
    ],
    processTitle: 'How the work unfolds',
    process: [
      {
        step: '01',
        title: 'Listening',
        body: 'We understand where users feel distracted, exposed, or overloaded by sound.',
      },
      {
        step: '02',
        title: 'Mapping',
        body: 'The building is traced into zones where noise moves, accumulates, or escapes.',
      },
      {
        step: '03',
        title: 'Control plan',
        body: 'A practical sequence of interventions is created for design, construction, or operations.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'More usable space',
        body: 'Rooms feel calmer and more functional because sound is managed intentionally.',
      },
      {
        title: 'Better privacy',
        body: 'Sensitive conversations and focused work get the acoustic support they need.',
      },
      {
        title: 'Easier decisions',
        body: 'The team can choose materials and layouts with a clearer understanding of their impact.',
      },
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
