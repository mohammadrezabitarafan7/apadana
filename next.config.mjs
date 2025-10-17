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
        source: "/component/:path*",
        destination: "/",
        permanent: true, // 301
      },
      {
        source: "/images/:path*",
        destination: "https://media.apadanacalendar.com/images/:path*",
        permanent: true,
      },
      {
        source: "/templates/:path*",
        destination: "https://media.apadanacalendar.com/templates/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
