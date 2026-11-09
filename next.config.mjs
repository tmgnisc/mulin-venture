/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/wellness-workshop-kathmandu-kokedama',
        destination: '/blog/wellness-workshop-kathmandu-kokedama',
        permanent: true,
      },
      {
        source: '/kokedama-workshop-nepal',
        destination: '/blog/kokedama-workshop-nepal',
        permanent: true,
      },
      {
        source: '/kokedama-workshop-kathmandu',
        destination: '/blog/kokedama-workshop-kathmandu',
        permanent: true,
      },
      {
        source: '/plant-art-workshop-lalitpur',
        destination: '/blog/plant-art-workshop-lalitpur',
        permanent: true,
      },
      {
        source: '/what-to-expect-plant-art-workshop-lalitpur',
        destination: '/blog/what-to-expect-plant-art-workshop-lalitpur',
        permanent: true,
      },
      {
        source: '/kokedama-care-guide',
        destination: '/blog/kokedama-care-guide',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
