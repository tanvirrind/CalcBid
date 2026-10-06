const SITE_URL = "https://calcbid.com";

// Public, indexable routes. Auth pages are intentionally excluded.
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/calculators/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/paint-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/roofing-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/tile-flooring-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/deck-fence-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/hvac-btu-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculators/concrete-drywall-calculator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.7, changeFrequency: "weekly" },
  { path: "/guides/how-to-quote-a-painting-job", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/cost-to-paint-12x12-room", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/roof-replacement-cost-2026", priority: 0.7, changeFrequency: "monthly" },
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
