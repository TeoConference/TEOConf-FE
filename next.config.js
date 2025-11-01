/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'
const basePath = isDev ? '' : '/TEOConf-FE'
const assetPrefix = isDev ? '' : '/TEOConf-FE/'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img1.daumcdn.net',
        port: '',
        pathname: '/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.kakaocdn.net',
        port: '',
        pathname: '/dna/**',
      },
    ],
    basePath,
    assetPrefix,
    images: {
      unoptimized: true,
    },
  },
}
module.exports = nextConfig
