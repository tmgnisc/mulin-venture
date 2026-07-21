const SITE_URL = 'https://www.mulinventure.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mulin Venture',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mulin.png`,
  slogan: 'Nurture through Nature',
  description:
    'Mulin Venture — Nurture through Nature. Biophilic design, sustainable built environments, and biodiversity-first consulting in Kathmandu, Nepal — indoor plants, kokedama, green walls, and plant care for homes and businesses.',
  email: 'info@mulinventure.com',
  telephone: '+977-9847519689',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'NP',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nepal',
  },
  sameAs: [
    'https://www.instagram.com/mulinventure/',
    'https://www.tiktok.com/@muliin_06',
    'https://www.facebook.com/profile.php?id=61591035293534',
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Mulin Venture offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer full-scale botanical design services in Nepal including landscape architecture, installation, biophilic design, green walls, botanical branding, maintenance programs, biophilic art, and event rentals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing plant maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our maintenance programs are ongoing care subscriptions designed to keep your plants thriving year-round, backed by over 12 years of expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a kokedama and how do I care for it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kokedama is a handcrafted Japanese moss-ball planting that frees greenery from the pot. Care is simple — a weekly soak and indirect light. Each kokedama comes with a manual book and a reusable holder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent plants for a wedding or event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer short-term plant rentals across Nepal for weddings, product launches, and special occasions — delivered, styled, and collected by our team.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the Kokedama Workshop held?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Kokedama Workshop runs every Saturday in Kathmandu. You will craft your own moss-ball planting with guidance from our team, enjoy snacks, and join in games and fun activities. Seats are limited — contact us to reserve your spot.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started on a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply request a consultation. We will discuss your space, your vision, and your budget, then craft a botanical design proposal tailored to you — from a single arrangement to a large-scale installation.',
      },
    },
  ],
}

export const testimonialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mulin Venture',
  review: [
    {
      '@type': 'Review',
      reviewBody:
        "The Monstera arrived in the most stunning matte white ceramic vessel — it's the statement piece our living room needed.",
      author: { '@type': 'Person', name: 'Priya S.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "Mulin Venture's team helped me design a green wall for my entire office. The transformation was incredible.",
      author: { '@type': 'Person', name: 'James T.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "The custom terrarium they created for my partner was the most thoughtful gift I've ever given.",
      author: { '@type': 'Person', name: 'Ananya R.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        'Exceptional quality and service. Every detail was considered, from the soil blend to the handwritten care card.',
      author: { '@type': 'Person', name: 'Michael C.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "We ordered 30 custom plants for our hotel lobby. Six months later, they're all thriving beautifully.",
      author: { '@type': 'Person', name: 'Elena K.' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 5,
    bestRating: 5,
  },
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
