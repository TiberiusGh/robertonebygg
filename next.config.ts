import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kvalitetspartner.se',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/pages/omoss.html',
        destination: '/om-oss',
        permanent: true,
      },
      {
        source: '/pages/tidigareProjekt.html',
        destination: '/tidigare-projekt',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
