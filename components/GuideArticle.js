import Link from "next/link";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import GuideByline from "./GuideByline";

// Month-name "updated" prop (e.g. "October 2026") -> ISO date for schema.
// All guides were published October 2026; the month is all we record.
function monthToIso(monthName) {
  const months = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12",
  };
  const m = /^(\w+)\s+(\d{4})$/.exec(String(monthName || "").trim());
  if (m && months[m[1]] && m[2]) return `${m[2]}-${months[m[1]]}-01`;
  return "2026-10-01";
}

// Shared shell for /guides articles: breadcrumb, headline, byline, Article
// schema, and CTA boxes pointing at the calculators and quote builder.
export default function GuideArticle({
  title,
  description,
  slug,
  updated,
  calculatorHref,
  calculatorLabel,
  children,
}) {
  const url = `https://calcbid.com/guides/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    inLanguage: "en-US",
    datePublished: "2026-10-06",
    dateModified: monthToIso(updated),
    author: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
    publisher: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
  };

  return (
    <article className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: title, href: `/guides/${slug}` },
          ]}
        />
        <div className="kicker">Contractor guide</div>
        <h1 className="h2" style={{ maxWidth: 720 }}>{title}</h1>
        <p className="sub" style={{ maxWidth: 680 }}>{description}</p>
        <GuideByline updated={updated} />
        <div className="guide-body" style={{ maxWidth: 720, lineHeight: 1.75, fontSize: 17 }}>
          {children}
        </div>
        <div className="card" style={{ marginTop: 44, maxWidth: 720, padding: "28px 30px" }}>
          <h3 style={{ marginTop: 0 }}>Run your own numbers</h3>
          <p style={{ color: "var(--ink-soft)" }}>
            Reading is good. Math is better. Punch your job into the free
            calculator and turn it into a client-ready quote in minutes.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Link href={calculatorHref} className="btn btn-primary">
              {calculatorLabel}
            </Link>
            <Link href="/quote" className="btn btn-ghost">
              Build a quote
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
