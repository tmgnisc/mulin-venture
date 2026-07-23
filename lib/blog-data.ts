export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  image: string
  alt: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'art-of-moss-walls',
    title: 'The Art of Moss Walls: A Complete Guide',
    excerpt: 'Discover how preserved moss walls can transform your space with minimal maintenance and maximum impact.',
    content: `Moss walls have emerged as one of the most compelling biophilic design elements for modern interiors. Unlike living plant walls, preserved moss requires no watering, no sunlight, and minimal upkeep — making it an ideal solution for spaces where natural light is limited or maintenance access is challenging.

What makes moss walls particularly special is their ability to bring texture, depth, and a sense of ancient calm to any environment. The velvety surface of preserved moss creates a visual softness that contrasts beautifully with hard architectural surfaces like glass, concrete, and steel.

## Why Choose Preserved Moss?

Preserved moss is real moss that has been treated with a eco-friendly glycerin solution to maintain its supple texture and vibrant green colour indefinitely. The preservation process stops the natural decay cycle while retaining the moss's cellular structure and visual characteristics.

The benefits are substantial:
- Zero maintenance — no watering, pruning, or fertilising
- No light requirements — install in windowless rooms, corridors, or basements
- Hypoallergenic — preserved moss doesn't grow mold or release pollen
- Acoustically beneficial — the dense surface helps absorb sound
- Fire retardant — treated to meet fire safety standards

## Design Possibilities

Moss walls can be customised to suit any aesthetic. From geometric patterns that feel contemporary and crisp to organic, free-flowing shapes that mimic natural landscapes, the design vocabulary is remarkably versatile.

Consider incorporating your brand colours by mixing different moss varieties or by framing the moss within painted backboards. Some clients choose to integrate preserved ferns, lichen, or branches to create richer biodiversity in the installation.

## Installation Considerations

A professional moss wall installation typically begins with assessing the wall surface and ensuring proper mounting. The moss is adhered to panels that are securely fastened to the wall. Most installations are completed within a single day, depending on the scale and complexity of the design.

For best results, avoid direct sunlight exposure, which can fade the colour over time, and maintain a stable indoor humidity level. With these simple considerations, your moss wall will remain beautiful for years.`,
    category: 'Care Guide',
    date: 'March 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80',
    alt: 'Preserved moss wall installation in a modern interior',
    author: 'Mulin Editorial',
  },
  {
    slug: 'choosing-right-vessel',
    title: 'Choosing the Right Vessel for Your Plant',
    excerpt: 'From ceramic to concrete, learn how to match your plant with the perfect vessel for both style and health.',
    content: `The vessel you choose for your plant is more than a decorative container — it plays a critical role in your plant's health and growth. Understanding the relationship between plant species, pot material, and drainage can mean the difference between a thriving plant and one that struggles.

## Material Matters

Each pot material offers distinct advantages:

**Ceramic and Terracotta:** These porous materials allow air and moisture to pass through the walls, helping prevent root rot. Terracotta is especially suited for plants that prefer drier soil, such as succulents and cacti. Glazed ceramic retains more moisture and works well for tropical plants that like consistent humidity.

**Concrete:** Concrete planters are trendy and provide excellent stability for tall or top-heavy plants. The material is porous but less so than terracotta, so be mindful of watering frequency. Concrete also stays cooler, which benefits root systems in warm climates.

**Fibreglass and Resin:** Lightweight and durable, these modern materials come in endless shapes and finishes. They are non-porous, so proper drainage holes are essential. Great for large floor plants where weight is a concern.

## Drainage Is Non-Negotiable

Regardless of material, drainage holes are essential. Stagnant water leads to root rot, the most common cause of indoor plant death. If you fall in love with a pot without drainage, use it as a cachepot — place your plant in a plain nursery pot inside the decorative vessel.

## Size and Proportion

A good rule of thumb is to choose a pot that is 2-4 inches larger in diameter than your plant's current root ball. Too large a pot can cause the soil to stay wet for too long; too small a pot will restrict root growth and require more frequent watering.

## Aesthetic Harmony

Beyond health considerations, your vessel should complement your space. Consider the colour palette, material texture, and overall design language of your room. A well-chosen pot elevates your plant from a simple houseplant to a design statement.`,
    category: 'Design Tips',
    date: 'March 8, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    alt: 'Ceramic plant vessels arranged on a wooden shelf',
    author: 'Mulin Editorial',
  },
  {
    slug: 'indoor-plants-air-quality',
    title: 'How Indoor Plants Improve Air Quality',
    excerpt: 'The science behind how certain plant species can purify your indoor air and boost your well-being.',
    content: `The idea that indoor plants improve air quality has moved from anecdotal belief to well-documented science. While the famous NASA Clean Air Study from the 1980s is often cited, modern research has refined our understanding of how plants interact with indoor environments.

## How Plants Purify Air

Plants absorb carbon dioxide and release oxygen through photosynthesis, but their air-cleaning abilities go further. Through a process called phytoremediation, plants can absorb volatile organic compounds (VOCs) such as formaldehyde, benzene, and trichloroethylene through their leaves and roots. Soil microorganisms in the potting mix also play a significant role in breaking down these pollutants.

## Most Effective Air-Purifying Plants

Not all plants are equally effective. The following species have demonstrated superior air-purifying capabilities:

**Snake Plant (Sansevieria):** Exceptionally hardy and effective at removing formaldehyde. It continues producing oxygen at night, making it ideal for bedrooms.

**Spider Plant (Chlorophytum):** Excellent at removing carbon monoxide and xylene. Easy to propagate and nearly impossible to kill.

**Peace Lily (Spathiphyllum):** Removes ammonia, benzene, and formaldehyde effectively. Its white blooms add visual appeal.

**Pothos (Epipremnum):** Rapid-growing vine that effectively clears formaldehyde and carbon monoxide. Thrives in low light.

## Realistic Expectations

While plants do improve air quality, achieving the purification levels seen in laboratory studies would require a large number of plants in a sealed environment. In practical terms, a room with several well-chosen plants will experience measurable but modest improvements in air quality. The greater benefit may be psychological — plants reduce stress, increase productivity, and create a sense of connection to nature.

## Best Practices

To maximise the air-purifying benefits of indoor plants, dust leaves regularly, ensure proper watering to keep soil microorganisms active, and provide adequate light for photosynthesis. Grouping plants together can create a more significant cumulative effect and also increases local humidity through transpiration.`,
    category: 'Wellness',
    date: 'February 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?auto=format&fit=crop&w=900&q=80',
    alt: 'Indoor plants in a bright living room setting',
    author: 'Mulin Editorial',
  },
  {
    slug: 'biophilic-design-workplace',
    title: 'Biophilic Design in the Workplace: Boosting Productivity Through Nature',
    excerpt: 'Research shows that incorporating natural elements into office design can increase productivity, creativity, and employee well-being.',
    content: `The modern workplace is undergoing a transformation. As organisations recognise the link between environment and performance, biophilic design has moved from a niche consideration to a strategic priority. The evidence is compelling: workplaces that incorporate natural elements consistently report higher employee satisfaction, reduced absenteeism, and improved cognitive performance.

## The Science Behind Biophilia

Biophilia, a term popularised by biologist E.O. Wilson, refers to the innate human tendency to seek connections with nature. When this instinct is unmet — as it often is in conventional office environments — we experience measurable declines in well-being and performance.

Studies using EEG and heart rate monitoring have shown that exposure to natural elements reduces cortisol levels, lowers blood pressure, and increases alpha-wave activity associated with relaxed alertness. In practical terms, employees in biophilic offices report 15% higher levels of well-being and 6% higher productivity.

## Key Elements of Biophilic Office Design

**Natural Light:** Access to daylight is the single most important biophilic element. Workstations should be arranged to maximise natural light exposure, and glass partitions can help distribute light deeper into the floor plate.

**Living Plants:** Beyond air purification, plants create visual interest, reduce noise, and provide a sense of vitality. A mix of floor plants, wall-mounted planters, and desktop plants creates layered biophilic experiences.

**Natural Materials:** Wood, stone, bamboo, and wool bring tactile richness and visual warmth. These materials signal comfort and safety on a subconscious level.

**Views of Nature:** Direct sightlines to windows with greenery are ideal. Where this isn't possible, high-quality nature photography or digital nature displays can provide meaningful substitutes.

## Implementation Strategy

Start with a biophilic audit of your current space. Identify areas with the least natural connection — windowless meeting rooms, interior corridors, and cubicle clusters — and prioritise these for intervention. Even modest changes, such as adding a living wall to a reception area or placing plants in shared spaces, can produce meaningful improvements in how people feel and perform.`,
    category: 'Biophilic Design',
    date: 'February 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern office with biophilic design elements including plants and natural light',
    author: 'Mulin Editorial',
  },
  {
    slug: 'kokedama-beginners-guide',
    title: 'Kokedama: A Beginner\'s Guide to Japanese Moss Ball Gardening',
    excerpt: 'Learn the art of kokedama — a beautiful Japanese technique of growing plants in moss balls without traditional pots.',
    content: `Kokedama, which translates literally to "moss ball" in Japanese, is a centuries-old gardening technique that transforms plants into living sculptures. By encasing the root ball in a moss-covered soil sphere, kokedama eliminates the need for a traditional pot and creates a striking display piece that can be hung or placed on a dish.

## The History

Kokedama originated from Japan's bonsai tradition, specifically from a technique called "nearai" that was developed by gardeners who wanted to display plants without heavy ceramic pots. Over time, this practical technique evolved into an art form that embodies the Japanese aesthetic principles of wabi-sabi — finding beauty in imperfection and natural simplicity.

## Creating Your First Kokedama

The process is meditative and rewarding. You will need a small plant, bonsai soil or a mix of akadama and peat moss, sheet moss, and gardening twine.

Start by removing the plant from its nursery pot and gently loosening the root ball. Shape the soil into a compact sphere around the roots, ensuring it holds together firmly. Wrap the sphere in pre-soaked sheet moss, pressing gently to create a smooth, even surface. Secure the moss with twine, wrapping in multiple directions until the moss is firmly bound.

## Choosing the Right Plant

Plants that thrive in kokedama include ferns, pothos, peace lilies, and certain orchids. The key is selecting species that enjoy the moist, well-aerated root environment that the moss ball provides. Succulents and cacti are generally poor candidates as they prefer drier conditions.

## Care and Maintenance

Kokedama care is simple. Water by soaking the moss ball in a bowl of water for 10-15 minutes whenever the moss feels dry to the touch. Mist the moss occasionally to maintain humidity. Provide appropriate light for your chosen plant species, and fertilise monthly during the growing season with a diluted liquid fertiliser.

With proper care, a kokedama can thrive for years, growing and evolving as a living piece of art in your home.`,
    category: 'Care Guide',
    date: 'January 30, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?auto=format&fit=crop&w=900&q=80',
    alt: 'Handcrafted kokedama moss ball plant hanging on a wall',
    author: 'Mulin Editorial',
  },
  {
    slug: 'sustainable-landscaping-nepal',
    title: 'Sustainable Landscaping in Nepal: Native Plants and Water-Wise Design',
    excerpt: 'How Nepali landscapes can be both beautiful and ecologically responsible through native planting and smart water management.',
    content: `Nepal's extraordinary biodiversity — spanning tropical Terai to alpine Himalayas — offers an unparalleled palette for sustainable landscaping. Yet many contemporary landscapes in Nepal rely on non-native species and resource-intensive maintenance practices. The shift toward sustainable landscaping is both an ecological necessity and an opportunity to celebrate Nepal's botanical heritage.

## Why Native Plants Matter

Native plants are adapted to local climate conditions, require less water, and support local wildlife — including birds, butterflies, and beneficial insects. They are naturally resistant to local pests and diseases, reducing or eliminating the need for chemical interventions.

In Kathmandu Valley, native species such as Lali Gurans (Rhododendron), Champa (Magnolia), and Salla (Pine) can form the backbone of a landscape that feels distinctly Nepali while requiring substantially less maintenance than exotic alternatives.

## Water-Wise Design Principles

Nepal faces increasing water stress, particularly in urban areas during the dry season. Sustainable landscapes minimise water demand through several strategies:

**Hydrozoning:** Grouping plants with similar water needs together so irrigation can be targeted efficiently.

**Rainwater Harvesting:** Directing roof runoff into garden beds rather than storm drains. Simple swales and rain gardens can capture and filter water naturally.

**Mulching:** A thick layer of organic mulch reduces evaporation, moderates soil temperature, and slowly adds nutrients to the soil as it decomposes.

**Drought-Tolerant Species:** Many beautiful Nepali plants are naturally drought-tolerant once established, including various species of Barberry, Daphne, and native grasses.

## Creating Habitat

A sustainable landscape functions as a mini-ecosystem. Incorporate plants that provide nectar for pollinators, berries for birds, and shelter for small wildlife. A small water feature — even a simple bird bath — dramatically increases the habitat value of any garden.

## The Economic Case

While sustainable landscapes may require higher initial planning investment, they deliver lower ongoing costs through reduced water bills, fewer chemical inputs, and less maintenance labour. For commercial properties, a well-designed sustainable landscape also enhances property value and brand identity.

Nepal's landscaping industry has an opportunity to lead by example, creating outdoor spaces that are not only beautiful but actively contribute to the health of our environment.`,
    category: 'Sustainability',
    date: 'January 18, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=900&q=80',
    alt: 'Sustainable garden with native Nepali plants',
    author: 'Mulin Editorial',
  },
]

export const blogCategories = [
  'All',
  'Care Guide',
  'Design Tips',
  'Wellness',
  'Biophilic Design',
  'Sustainability',
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogSlugs() {
  return blogPosts.map((post) => post.slug)
}
