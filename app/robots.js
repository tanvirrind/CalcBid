export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/signin", "/signup", "/api/", "/app"],
      },
    ],
    sitemap: "https://calcbid.com/sitemap.xml",
  };
}
