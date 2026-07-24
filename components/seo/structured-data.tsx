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
    'Mulin Venture is a biophilic design studio in Kathmandu, Nepal. We specialize in green roofs, living walls, landscape and rooftop greening, plant art workshops, garden maintenance, and sustainable building design.',
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
  foundingDate: '2023',
  sameAs: [
    'https://www.instagram.com/mulinventure/',
    'https://www.tiktok.com/@muliin_06',
    'https://www.facebook.com/profile.php?id=61591035293534',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Nirvix Technology',
  },
  knowsAbout: [
    'Biophilic Design',
    'Green Roofs',
    'Living Walls',
    'Landscape Design',
    'Plant Art Workshops',
    'Garden Maintenance',
    'Sustainable Building Design',
    'Biodiversity Conservation',
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
        text: 'We provide biophilic design, landscape and rooftop greening, green building rating assessment, plant art workshops, and ongoing garden maintenance in Nepal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing maintenance after installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide ongoing maintenance for living walls, rooftop gardens, and planted interiors to keep systems healthy over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What products do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our product range includes plant art products (including Kokedama), moss and living walls, and a biodiversity toolkit for homes, schools, and organizations across Nepal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run workshops for schools and organizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our plant art workshops are available for schools, organizations, and public events, with biophilic design and biodiversity learning built in.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure environmental impact?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use our Green Building Rating System to assess carbon footprint, biodiversity impact, and nature-based solution potential, then provide practical improvement guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started on a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a biophilic consultation and we will map your goals, site context, and budget into a phased plan for products, services, and long-term care.',
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
      author: { '@type': 'Person', name: 'Nischal Tamang' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "Mulin's team helped me design a green wall for my entire office. The transformation was incredible.",
      author: { '@type': 'Person', name: 'Roshan KC' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "The custom terrarium they created for my partner was the most thoughtful gift I've ever given.",
      author: { '@type': 'Person', name: 'Sujan Pun' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        'Exceptional quality and service. Every detail was considered, from the soil blend to the handwritten care card.',
      author: { '@type': 'Person', name: 'Sonu Thapa Magar' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      reviewBody:
        "We ordered 30 custom plants for our hotel lobby. Six months later, they're all thriving beautifully.",
      author: { '@type': 'Person', name: 'Sanjeev Magar' },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 6,
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
