/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/appreciation",
        destination: "/yearbook",
        permanent: true, // 301
      },
      {
        source: "/price-list",
        destination: "/",
        permanent: true, // 301
      },
      {
        source: '/component/:path*',
        destination: '/',
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
