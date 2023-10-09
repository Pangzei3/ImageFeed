/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["rickandmortyapi.com"]
  },
  experimental: {
    serverActions: true,
    appDir: true
  },
}

module.exports = nextConfig
