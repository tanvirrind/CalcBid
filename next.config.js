/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
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
