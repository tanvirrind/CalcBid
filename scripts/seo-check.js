// SEO regression checks for CalcBid.
// Usage: node scripts/seo-check.js [baseUrl]   (default: https://calcbid.com)
// Validates: title/description length, canonical consistency, OG/Twitter
// completeness, sitemap-route coverage, and HTTP status of sitemap URLs.

const BASE = (process.argv[2] || "https://calcbid.com").replace(/\/$/, "");
const { execSync } = require("child_process");
const path = require("path");

const failures = [];
const passes = [];
function check(name, ok, detail = "") {
  (ok ? passes : failures).push(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
}

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  const html = res.status === 200 ? await res.text() : "";
  return { res, html };
}

const decodeEntities = (t) =>
  t
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
const tag = (html, re) => {
  const m = html.match(re);
  return m ? decodeEntities(m[1]).trim() : null;
};

(async () => {
  // 1. Sitemap: fetch + parse
  const { res: smRes, html: smXml } = await get(`${BASE}/sitemap.xml`);
  check("sitemap.xml returns 200", smRes.status === 200, `got ${smRes.status}`);
  const urls = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check("sitemap has URLs", urls.length > 0, `${urls.length} URLs`);

  // 2. Route coverage: every app route (page.js) should be in the sitemap
  const root = path.join(__dirname, "..");
  const PROD = "https://calcbid.com";
  let routes = execSync(`cd ${root} && find app -name page.js`, { encoding: "utf8" })
    .split("\n")
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) => r.replace(/^app/, "").replace(/\/page\.js$/, "") || "/")
    .filter((r) => !r.startsWith("/api/"))
    .map((r) => (r === "/" ? `${PROD}/` : `${PROD}${r}`));
  // Exclude non-indexed / non-public routes
  const excluded = ["/signin", "/signup", "/dashboard", "/og-image"];
  routes = routes.filter((u) => !excluded.some((e) => u.endsWith(e)));
  const missing = routes.filter((r) => !urls.includes(r));
  check(
    "all public routes in sitemap",
    missing.length === 0,
    missing.length ? `missing: ${missing.join(", ")}` : `${routes.length} routes covered`
  );

  // 3. Per-URL checks (fetch via BASE origin, but canonicals should stay production)
  for (const prodUrl of urls) {
    const fetchUrl = prodUrl.replace(PROD, BASE);
    const { res, html } = await get(fetchUrl);
    const label = prodUrl.replace(PROD, "") || "/";
    check(`[${label}] status 200`, res.status === 200, `got ${res.status}`);
    if (res.status !== 200) continue;

    const title = tag(html, /<title>([^<]*)<\/title>/);
    check(`[${label}] title ≤ 60 chars`, !!title && title.length <= 60, title ? `${title.length} chars` : "missing");

    const desc = tag(html, /<meta name="description" content="([^"]*)"/);
    check(`[${label}] description ≤ 155 chars`, !!desc && desc.length <= 155, desc ? `${desc.length} chars` : "missing");

    const canon = tag(html, /<link rel="canonical" href="([^"]*)"/);
    const norm = (u) => u.replace(/\/$/, "") || "/";
    check(`[${label}] canonical matches URL`, !!canon && norm(canon) === norm(prodUrl), canon || "missing");

    const ogImage = tag(html, /<meta property="og:image" content="([^"]*)"/);
    check(`[${label}] og:image present`, !!ogImage, ogImage || "missing");

    const twImage = tag(html, /<meta name="twitter:image" content="([^"]*)"/);
    check(`[${label}] twitter:image present`, !!twImage, twImage || "missing");

    const twTitle = tag(html, /<meta name="twitter:title" content="([^"]*)"/);
    const ogTitle = tag(html, /<meta property="og:title" content="([^"]*)"/);
    const isHome = prodUrl === PROD || prodUrl === `${PROD}/`;
    check(
      `[${label}] twitter:title page-specific`,
      !!twTitle && (isHome || twTitle !== "CalcBid — Free Contractor Calculators & Quote Builder"),
      twTitle ? (twTitle === ogTitle ? "matches og:title" : twTitle.slice(0, 50)) : "missing"
    );

    const h1s = (html.match(/<h1[^>]*>/g) || []).length;
    check(`[${label}] exactly one h1`, h1s === 1, `${h1s} found`);
  }

  console.log(`\n${passes.length} passed, ${failures.length} failed\n`);
  for (const f of failures) console.log(f);
  if (process.env.VERBOSE) for (const p of passes) console.log(p);
  process.exit(failures.length ? 1 : 0);
})().catch((e) => {
  console.error("seo-check crashed:", e.message);
  process.exit(2);
});
