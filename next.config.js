/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Preferred host: www -> apex (permanent, preserves path)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.calcbid.com" }],
        destination: "https://calcbid.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
