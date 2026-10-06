export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/signin", "/signup", "/api/"],
      },
    ],
    sitemap: "https://calcbid.com/sitemap.xml",
  };
}
