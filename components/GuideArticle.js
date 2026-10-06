import Link from "next/link";
import JsonLd from "./JsonLd";

// Shared shell for /guides articles: breadcrumb, headline, Article schema,
// and CTA boxes pointing at the calculators and quote builder.
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
    dateModified: updated || "2026-10-06",
    author: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
    publisher: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
  };

  return (
    <article className="section">
      <div className="wrap">
        <JsonLd data={articleJsonLd} />
        <nav style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}>
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          {"  →  "}
          <Link href="/guides" style={{ color: "inherit" }}>Guides</Link>
        </nav>
        <div className="kicker">Contractor guide</div>
        <h1 className="h2" style={{ maxWidth: 720 }}>{title}</h1>
        <p className="sub" style={{ maxWidth: 680 }}>{description}</p>
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
