/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'directorsinsurance.co.nz' }],
        destination: 'https://www.directorsinsurance.co.nz/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
