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
    slug: 'kokedama',
    href: '/products/kokedama',
    eyebrow: 'Living Craft',
    title: 'Kokedama',
    summary:
      'Handcrafted Japanese moss-ball plantings that free greenery from the pot, bringing a soft, sculptural touch of nature to desks, shelves, and hanging displays.',
    image: '/kokedama-2.png',
    alt: 'Handcrafted kokedama moss ball plantings',
    accent: '#6f8b66',
    detail: 'Best for desks, shelves, and hanging arrangements that need a living focal point without the weight of planters.',
    metric: '02 layers of care logic',
  },
  {
    slug: 'tippy',
    href: '/products/tippy',
    eyebrow: 'Growing Together',
    title: 'Tippy',
    summary:
      'An eco-friendly watering can designed for children, with a gentle pour and easy grip that turns everyday plant care into a habit kids actually look forward to.',
    image: '/tippy.jpeg',
    alt: 'Tippy children’s watering cans in green and turquoise',
    accent: '#86a89a',
    detail: 'Best for homes, schools, and gardens where children are learning to care for plants with their own hands.',
    metric: '03 checks before pour',
  },
]

const productPages: Record<string, ProductPageContent> = {
  kokedama: {
    slug: 'kokedama',
    eyebrow: 'Living Craft / Japanese Botanics',
    title: 'Kokedama by Mulin',
    summary:
      'A hand-bound moss ball that carries a living plant without a pot, letting greenery sit, hang, or gather in ways ordinary planters never allow.',
    heroImage: '/kokedama-hero.png',
    heroAlt: 'Handcrafted kokedama moss balls with living plants',
    heroNote: 'Made from plants of your choice, potting soil, sphagnum moss, and biodegradable jute rope — with a manual book and reusable holder included.',
    bodyImage: '/kokedamas.png',
    bodyAlt: 'A collection of kokedama moss ball plantings',
    accent: '#6f8b66',
    stats: [
      { value: '01', label: 'weekly soak' },
      { value: '02', label: 'indirect light' },
      { value: '03', label: 'monthly feed' },
    ],
    overviewTitle: 'What the craft solves',
    overviewBody:
      'Kokedama works best when plant, moss, and placement are treated as one living object. Each ball starts from a plant of your choice, a soil core shaped by hand, a sphagnum moss wrap, and biodegradable jute rope — and comes with a manual book and reusable holder so caring for it stays simple.',
    featuresTitle: 'Care tips for kokedama',
    features: [
      {
        title: 'Watering by soak',
        body: 'Soak the moss ball in water for 10–15 minutes when it feels dry and light — usually once a week. Let it drain fully before displaying again, and avoid watering from the top.',
      },
      {
        title: 'Light and humidity',
        body: 'Place in bright, indirect light — direct sun can dry the moss and harm the plant. Mist the plant and moss ball once or twice a week, especially for tropical species.',
      },
      {
        title: 'Feeding and temperature',
        body: 'Add a diluted liquid fertilizer to the soak once a month — flowering plants benefit from potassium-rich feeds. Keep the ball at a stable room temperature, away from cold drafts.',
      },
    ],
    processTitle: 'Step by step: how a kokedama is made',
    process: [
      {
        step: '01',
        title: 'Prepare the plant and soil ball',
        body: 'Gently remove the plant from its pot and shake off excess soil from the roots. Mix potting soil with wet hands until it holds together as a ball, sized for your plant and stand.',
      },
      {
        step: '02',
        title: 'Moss time',
        body: 'Form the sphagnum moss into a wrap sheet matched to the size of your soil ball — in a tray or held in your hand, whichever feels natural.',
      },
      {
        step: '03',
        title: 'Bind and water',
        body: 'Wrap the ball firmly with jute rope several times to secure everything, leaving extra string if you want to hang it. Then submerge the finished ball in water for 10–15 minutes and drain the excess.',
      },
    ],
    outcomesTitle: 'Troubleshooting',
    outcomes: [
      {
        title: 'Reading the leaves',
        body: 'Yellowing leaves point to overwatering or a lack of nutrients — adjust the watering rhythm and consider feeding. Dry moss means under-watering or low humidity; soak more often and mist regularly.',
      },
      {
        title: 'A plant that outgrows',
        body: 'When the plant outgrows its ball, unwrap the string, add more soil, and reshape to accommodate the growth.',
      },
      {
        title: 'Roots and moss',
        body: 'Root rot comes from too much water retention — let the ball dry out between waterings. If moss falls off, wrap the string tighter or add more moss to keep it intact.',
      },
    ],
  },
  tippy: {
    slug: 'tippy',
    eyebrow: 'Growing Together / Kids & Garden',
    title: 'Tippy',
    summary:
      'An eco-friendly watering can shaped for small hands, with a gentle pour and playful form that makes daily plant care a habit children want to keep.',
    heroImage: '/tippy-2.jpg',
    heroAlt: 'Tippy watering can closeup with embossed Tippy logo',
    heroNote: 'Sized for small hands, balanced for a gentle pour, and made from eco-friendly materials that are safe to grow up with.',
    bodyImage: '/tippy-inline.jpg',
    bodyAlt: 'A lineup of Tippy watering cans in green, orange, turquoise, and beige',
    accent: '#86a89a',
    stats: [
      { value: '01', label: 'easy grip' },
      { value: '02', label: 'gentle pour' },
      { value: '03', label: 'eco material' },
    ],
    overviewTitle: 'What the product solves',
    overviewBody:
      'Children love watering plants — adult watering cans just aren’t made for them. Tippy is sized, weighted, and balanced for small hands, so kids can pour gently without spills, while the eco-friendly build keeps the whole habit kind to the planet they’re learning to care for.',
    featuresTitle: 'Scope of support',
    features: [
      {
        title: 'Child-first ergonomics',
        body: 'A light body, easy grip, and balanced spout let small hands lift, carry, and pour without help.',
      },
      {
        title: 'Gentle, controlled pour',
        body: 'The long curved spout slows the flow so young gardeners water seedlings without flooding them.',
      },
      {
        title: 'Eco-friendly build',
        body: 'Made from environmentally responsible materials, so the tool teaching care for nature reflects it too.',
      },
    ],
    processTitle: 'How it comes together',
    process: [
      {
        step: '01',
        title: 'Fill together',
        body: 'The wide opening makes filling easy at any tap or bucket, a small ritual kids can own from day one.',
      },
      {
        step: '02',
        title: 'Carry with confidence',
        body: 'The balanced shape keeps water steady on the walk to the plant, even in the smallest hands.',
      },
      {
        step: '03',
        title: 'Pour and watch it grow',
        body: 'The gentle spout rewards patience — a slow, even stream that plants and children both thrive on.',
      },
    ],
    outcomesTitle: 'Expected outcomes',
    outcomes: [
      {
        title: 'A daily green habit',
        body: 'Watering becomes something children ask to do, building a lasting connection with living things.',
      },
      {
        title: 'Independence in the garden',
        body: 'Kids handle real plant care on their own, with a tool that works with them instead of against them.',
      },
      {
        title: 'Care that reflects its values',
        body: 'An eco-friendly product teaching an eco-friendly habit — the lesson and the object agree.',
      },
    ],
  },
}

export function getProductPageContent(slug: string) {
  return productPages[slug]
}

export const productSlugs = Object.keys(productPages)
