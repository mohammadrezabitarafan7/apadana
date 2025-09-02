/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/:path*", // آدرس روی کلاینت
  //         destination: "https://app.irb2b.com/:path*", // آدرس سرور اصلی
  //       },
  //     ];
  //   },
};

export default nextConfig;
