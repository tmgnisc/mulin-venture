import type { ApproachItem } from './service-page-data'

export type SubcategoryLink = {
  slug: string
  title: string
  href: string
  summary: string
}

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
  approach?: {
    title: string
    subtitle: string
    items: ApproachItem[]
  }
  processTitle: string
  process: { step: string; title: string; body: string }[]
  outcomesTitle: string
  outcomes: { title: string; body: string }[]
  subcategories?: SubcategoryLink[]
  parent?: { slug: string; title: string; href: string }
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
    slug: 'plant-art-products',
    href: '/products/plant-art-products',
    eyebrow: 'Living Craft',
    title: 'Plant Art Products',
    summary:
      'Handcrafted decorative pieces that integrate living plants into wall art, sculptures, and installations for sensory wellbeing.',
    image: '/kokedama-2.png',
    alt: 'Handcrafted plant art featuring living plants',
    accent: '#737F3C',
    detail: 'Includes Kokedama as a subcategory under Plant Art.',
    metric: 'includes kokedama →',
  },
  {
    slug: 'moss-walls-living-walls',
    href: '/products/moss-walls-living-walls',
    eyebrow: 'Biophilic Installations',
    title: 'Moss Walls & Living Walls',
    summary:
      'Moss panels and fully living plant walls for indoor and outdoor spaces that are visually striking, acoustically beneficial, and deeply calming.',
    image: '/livingmosswall.jpg',
    alt: 'Living wall installation with dense layered greenery',
    accent: '#5F8F74',
    detail: 'Centerpiece installations designed to anchor biophilic spaces.',
    metric: 'indoor + outdoor',
  },
  {
    slug: 'biodiversity-toolkit',
    href: '/products/biodiversity-toolkit',
    eyebrow: 'Education & Action',
    title: 'Biodiversity Toolkit',
    summary:
      'A practical educational resource for individuals, schools, and organisations to support biodiversity through native planting and community learning.',
    image: '/tippy.jpeg',
    alt: 'Biodiversity toolkit resources with child-friendly gardening tools',
    accent: '#8C9A4B',
    detail: 'Includes Tippy as a subcategory within the Biodiversity Toolkit.',
    metric: 'includes tippy →',
  },
]

const productPages: Record<string, ProductPageContent> = {
  'plant-art-products': {
    slug: 'plant-art-products',
    eyebrow: 'Living Craft / Decorative Botanics',
    title: 'Plant Art Products',
    summary:
      'Handcrafted decorative pieces that integrate living plants into wall art, sculptures, and installations.',
    heroImage: '/kokedama-hero.png',
    heroAlt: 'Plant art installations featuring living greenery',
    heroNote:
      'Each piece is built to deliver a unique natural aesthetic while contributing to sensory wellbeing in homes and workspaces.',
    bodyImage: '/kokedamas.png',
    bodyAlt: 'Collection of handcrafted living plant art pieces',
    accent: '#737F3C',
    stats: [
      { value: '01', label: 'living material' },
      { value: '02', label: 'crafted by hand' },
      { value: '03', label: 'sensory wellbeing' },
    ],
    overviewTitle: 'What this product line offers',
    overviewBody:
      'Plant Art Products bring together craftsmanship and living systems so decorative pieces remain beautiful and biologically alive. This category includes Kokedama and related handcrafted formats.',
    featuresTitle: 'Core highlights',
    features: [
      {
        title: 'Handcrafted expression',
        body: 'Every piece is made by hand and composed to suit the personality of the space.',
      },
      {
        title: 'Living installation value',
        body: 'Designs do more than decorate, they create a calm, nature-connected atmosphere.',
      },
      {
        title: 'Category includes Kokedama',
        body: 'Kokedama sits within this line as one of the signature plant art formats.',
      },
    ],
    processTitle: 'How we deliver',
    process: [
      { step: '01', title: 'Context review', body: 'We understand where the piece will live and what mood it should create.' },
      { step: '02', title: 'Material crafting', body: 'We build each piece with living components and handcrafted detailing.' },
      { step: '03', title: 'Placement guidance', body: 'We provide setup and care guidance so the piece thrives long-term.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Unique aesthetic identity', body: 'Spaces gain a natural signature that feels intentional and alive.' },
      { title: 'Improved sensory comfort', body: 'Living plant presence supports calm and emotional wellbeing.' },
      { title: 'Long-term connection', body: 'People engage more actively with nature through ongoing care.' },
    ],
    subcategories: [
      { slug: 'kokedama', title: 'Kokedama', href: '/products/plant-art-products/kokedama', summary: 'Japanese moss ball art — handcrafted living sculptures wrapped in moss.' },
    ],
  },
  'kokedama': {
    slug: 'kokedama',
    eyebrow: 'Plant Art / Moss Ball Craft',
    title: 'Kokedama',
    summary:
      'Japanese moss ball art — living plants wrapped in moss and bound with twine, crafted by hand as sculptural natural pieces for your space.',
    heroImage: '/kokedama-hero.png',
    heroAlt: 'Handcrafted kokedama moss ball with lush green foliage',
    heroNote:
      'Kokedama is a signature format within our Plant Art category — each piece is handcrafted and ready to display.',
    bodyImage: '/kokedamas.png',
    bodyAlt: 'Collection of handcrafted kokedama moss ball arrangements',
    accent: '#737F3C',
    stats: [
      { value: '01', label: 'moss ball craft' },
      { value: '02', label: 'hand wrapped' },
      { value: '03', label: 'living sculpture' },
    ],
    overviewTitle: 'What Kokedama offers',
    overviewBody:
      'Kokedama is the Japanese art of wrapping a plant\'s root ball in moss and binding it with natural twine. It sits within our Plant Art line as one of the most accessible and expressive formats — no pot needed, just living form.',
    featuresTitle: 'Core highlights',
    features: [
      {
        title: 'Pot-free display',
        body: 'Kokedama can be placed on a tray, suspended, or mounted — the moss ball is the vessel.',
      },
      {
        title: 'Low-maintenance living art',
        body: 'Simply soak the ball when dry — no complicated care routines required.',
      },
      {
        title: 'Handcrafted in Nepal',
        body: 'Each kokedama is shaped, wrapped, and finished by hand using locally sourced moss and materials.',
      },
    ],
    processTitle: 'How we craft',
    process: [
      { step: '01', title: 'Plant selection', body: 'We choose plants suited to Nepali indoor and outdoor conditions.' },
      { step: '02', title: 'Moss wrapping', body: 'The root ball is encased in living moss and bound with natural jute twine.' },
      { step: '03', title: 'Finishing & care guide', body: 'Each piece is finished with a care card so it thrives in its new home.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Living decor', body: 'A kokedama brings natural texture and life to any corner of a room.' },
      { title: 'Mindful connection', body: 'Caring for a moss ball encourages slower, more attentive engagement with nature.' },
      { title: 'Conversation piece', body: 'Each kokedama is unique and invites curiosity from everyone who sees it.' },
    ],
    parent: { slug: 'plant-art-products', title: 'Plant Art Products', href: '/products/plant-art-products' },
  },
  'moss-walls-living-walls': {
    slug: 'moss-walls-living-walls',
    eyebrow: 'Biophilic Systems / Vertical Greenery',
    title: 'Moss Walls & Living Walls',
    summary:
      'Moss panels and fully living plant walls designed for indoor and outdoor environments.',
    heroImage:
      'https://images.unsplash.com/photo-1761971976133-5b0cbaee8c89?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Lush green living wall installation in a modern interior space',
    heroNote:
      'These installations are visually striking, acoustically beneficial, and deeply calming.',
    accent: '#5F8F74',
    stats: [
      { value: '01', label: 'visual impact' },
      { value: '02', label: 'acoustic value' },
      { value: '03', label: 'calming effect' },
    ],
    overviewTitle: 'What this product line offers',
    overviewBody:
      'Moss walls and living walls function as centerpiece biophilic installations that transform plain surfaces into active ecological systems.',
    featuresTitle: 'Core highlights',
    features: [
      {
        title: 'Indoor and outdoor suitability',
        body: 'Solutions are designed for controlled interiors as well as exterior conditions.',
      },
      {
        title: 'Centerpiece biophilic role',
        body: 'Walls become spatial anchors that define the character of the environment.',
      },
      {
        title: 'Acoustic and emotional comfort',
        body: 'Layered plant surfaces help soften sound and create a calm atmospheric quality.',
      },
    ],
    processTitle: 'How we deliver',
    process: [
      { step: '01', title: 'Site suitability', body: 'We evaluate wall conditions, light, and environmental performance needs.' },
      { step: '02', title: 'System design', body: 'Planting, structural support, and aesthetic direction are integrated as one plan.' },
      { step: '03', title: 'Installation and care setup', body: 'We install the wall and establish practical maintenance routines.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Stronger biophilic identity', body: 'Spaces instantly read as nature-connected and restorative.' },
      { title: 'Better sensory atmosphere', body: 'Users experience more visual richness and calmer soundscapes.' },
      { title: 'Living performance', body: 'The installation continues delivering ecological and emotional value over time.' },
    ],
  },
  'biodiversity-toolkit': {
    slug: 'biodiversity-toolkit',
    eyebrow: 'Education / Community Ecology',
    title: 'Biodiversity Toolkit',
    summary:
      'A practical, educational resource for individuals, schools, and organisations to actively support biodiversity.',
    heroImage: '/tippy-2.jpg',
    heroAlt: 'Biodiversity toolkit materials and kid-friendly plant care resources',
    heroNote:
      'Includes native plant guides, planting materials, and community resources rooted in indigenous ecological knowledge.',
    bodyImage: '/tippy-inline.jpg',
    bodyAlt: 'Community-focused biodiversity toolkit components',
    accent: '#8C9A4B',
    stats: [
      { value: '01', label: 'native guides' },
      { value: '02', label: 'planting materials' },
      { value: '03', label: 'community learning' },
    ],
    overviewTitle: 'What this product line offers',
    overviewBody:
      'The Biodiversity Toolkit helps people move from awareness to action with practical materials and clear local guidance. Tippy is included within this category as a learning-friendly tool.',
    featuresTitle: 'Core highlights',
    features: [
      {
        title: 'Action-ready resources',
        body: 'Tools and guides are designed for immediate application in homes, schools, and organizations.',
      },
      {
        title: 'Indigenous ecological grounding',
        body: 'Learning resources respect local ecological knowledge and cultural context.',
      },
      {
        title: 'Category includes Tippy',
        body: 'Tippy supports child engagement and habit-building within biodiversity learning activities.',
      },
    ],
    approach: {
      title: 'Our philosophy',
      subtitle: 'The Biodiversity Toolkit is built on three core beliefs that guide everything we create.',
      items: [
        {
          title: 'Ignite passion and mindfulness',
          body: 'At Mulin, we believe that nurturing biodiversity starts with seeing, noticing, and caring. Our Biodiversity Toolkit invites people to observe, document, and connect with the life around them — because when we pay attention, we begin to protect. Whether it\'s watching birds, tracking insects, or sketching plants, we encourage everyone to become a part of the landscape\'s story.',
          image: '/brand/toolkit-passion.jpg',
          alt: 'Excerpt from an initial design for Biodiversity Toolkit',
          caption: 'Excerpt from an initial design for Biodiversity Toolkit',
        },
        {
          title: 'We are rooted in science',
          body: 'At Mulin, we believe that caring for nature begins with deep understanding. Our approach to biodiversity is rooted in science, guiding us to see plants not just as decorations, but as living systems that shape and sustain ecosystems. By studying how plants grow, adapt, and interact, we design landscapes that are resilient, regenerative, and rich in life.',
          image: '/brand/toolkit-science.jpg',
          alt: 'Excerpt from an initial design for Biodiversity Toolkit',
          caption: 'Excerpt from an initial design for Biodiversity Toolkit',
        },
        {
          title: 'We Are Current and Activistic',
          body: 'At Mulin, we don\'t see biodiversity as a passive idea — it\'s a living, urgent call to action. Our work is grounded in current environmental realities, and we design with a deep understanding of the crises and opportunities of our time — from habitat loss to climate change. We believe design is a tool for activism. Every plant we choose, every system we restore, is a step toward healing ecosystems.',
          image: '/brand/toolkit-activism.jpg',
          alt: 'Excerpt from an initial design for Biodiversity Toolkit',
          caption: 'Excerpt from an initial design for Biodiversity Toolkit',
        },
      ],
    },
    processTitle: 'How we deliver',
    process: [
      { step: '01', title: 'Context mapping', body: 'We align toolkit components to user type, site conditions, and learning goals.' },
      { step: '02', title: 'Toolkit assembly', body: 'We combine native guidance, materials, and practical learning supports.' },
      { step: '03', title: 'Community activation', body: 'We guide rollout through simple actions and workshop-style engagement.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Higher biodiversity awareness', body: 'People understand local species needs and ecosystem relationships.' },
      { title: 'Practical habitat support', body: 'Communities create and maintain biodiversity-supportive micro-environments.' },
      { title: 'Sustained participation', body: 'Accessible tools help users keep nature-positive habits over time.' },
    ],
    subcategories: [
      { slug: 'tippy', title: 'Tippy', href: '/products/biodiversity-toolkit/tippy', summary: 'A child-friendly biodiversity tool for planting, observation, and hands-on care.' },
    ],
  },
  'tippy': {
    slug: 'tippy',
    eyebrow: 'Biodiversity Toolkit / Child-Friendly Tool',
    title: 'Tippy',
    summary:
      'A child-friendly biodiversity tool designed to help young learners engage with nature through planting, observation, and hands-on care activities.',
    heroImage: '/tippy-2.jpg',
    heroAlt: 'Tippy biodiversity learning tool for children',
    heroNote:
      'Tippy is included within the Biodiversity Toolkit as a learning-friendly tool that makes nature engagement accessible to children.',
    bodyImage: '/tippy-inline.jpg',
    bodyAlt: 'Tippy tool alongside native plant guides and biodiversity resources',
    accent: '#8C9A4B',
    stats: [
      { value: '01', label: 'child friendly' },
      { value: '02', label: 'hands-on learning' },
      { value: '03', label: 'nature connection' },
    ],
    overviewTitle: 'What Tippy offers',
    overviewBody:
      'Tippy is a thoughtfully designed tool that invites children to plant, observe, and care for nature. It sits within our Biodiversity Toolkit category and is ideal for schools, families, and community programmes.',
    featuresTitle: 'Core highlights',
    features: [
      {
        title: 'Engages young learners',
        body: 'Tippy makes biodiversity tangible and accessible for children through simple planting and care activities.',
      },
      {
        title: 'Supports classroom learning',
        body: 'Teachers and facilitators can integrate Tippy into environmental science and outdoor learning sessions.',
      },
      {
        title: 'Part of a bigger toolkit',
        body: 'Tippy pairs with native plant guides and community resources for a complete biodiversity experience.',
      },
    ],
    processTitle: 'How it works',
    process: [
      { step: '01', title: 'Introduce the tool', body: 'Children meet Tippy and learn about its role in helping plants grow.' },
      { step: '02', title: 'Plant and observe', body: 'Hands-on planting activities guided by simple, illustrated instructions.' },
      { step: '03', title: 'Care and grow', body: 'Ongoing observation and care build lasting habits of nature stewardship.' },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      { title: 'Early biodiversity awareness', body: 'Children develop an understanding of local plants and ecosystems.' },
      { title: 'Practical skills', body: 'Kids gain confidence in planting, watering, and caring for living things.' },
      { title: 'Lifelong habits', body: 'Positive early experiences with nature encourage long-term environmental stewardship.' },
    ],
    parent: { slug: 'biodiversity-toolkit', title: 'Biodiversity Toolkit', href: '/products/biodiversity-toolkit' },
  },
}

export function getProductPageContent(slug: string) {
  return productPages[slug]
}

export const topLevelSlugs = ['plant-art-products', 'moss-walls-living-walls', 'biodiversity-toolkit']
export const subcategoryPaths = [
  { parent: 'plant-art-products', child: 'kokedama' },
  { parent: 'biodiversity-toolkit', child: 'tippy' },
]
export const productSlugs = topLevelSlugs
