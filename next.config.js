const hostnames = [
  'alpaslan-datasance.github.io/datasanceWeb/']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname
    }))
  }
}