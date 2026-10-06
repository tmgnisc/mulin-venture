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
    ]
  },
}

export default nextConfig
