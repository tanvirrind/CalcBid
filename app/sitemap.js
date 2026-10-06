const SITE_URL = "https://calcbid.com";

// Public, indexable routes. Auth pages are intentionally excluded.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/calculators/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/paint-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/roofing-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/tile-flooring-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/quote", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
