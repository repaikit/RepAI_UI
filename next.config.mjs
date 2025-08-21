/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'olym3.xyz' },
      { protocol: 'https', hostname: 'api.olym3.xyz' },
      { protocol: 'https', hostname: 'jsabc.xyz' },
      { protocol: 'https', hostname: 'aijudge.olym3.xyz' }
    ]
  }
};

export default nextConfig;


