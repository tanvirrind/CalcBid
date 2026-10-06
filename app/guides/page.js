import Link from "next/link";
import { guides } from "../../lib/guides";

export const metadata = {
  title: "Contractor Guides — Estimating, Pricing & Quoting",
  description:
    "Practical contractor guides: how to quote a painting job, what painting and roofing really cost, and how to price for profit. No fluff.",
  keywords: [
    "how to quote a painting job",
    "cost to paint a room",
    "roof replacement cost",
    "contractor pricing guides",
    "painting estimate guide",
  ],
  alternates: { canonical: "https://calcbid.com/guides" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Contractor Guides — Estimating, Pricing & Quoting | CalcBid",
    description:
      "Practical guides for contractors: quoting painting jobs, real project costs, and pricing for profit.",
    url: "https://calcbid.com/guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Guides — Estimating, Pricing & Quoting | CalcBid",
    description: "Practical guides for contractors: quoting painting jobs, real project costs, and pricing for profit.",
  },
};

export default function GuidesHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Guides</div>
        <h1 className="h2">Learn the math, keep the margin</h1>
        <p className="sub">
          Short, practical guides on estimating, pricing, and quoting — written
          for contractors who&apos;d rather be on the job than in a spreadsheet.
        </p>
        <div className="grid3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card trade"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <div className="t-name" style={{ fontSize: 20, lineHeight: 1.35 }}>{g.title}</div>
                <div className="t-note">{g.note}</div>
              </div>
              <span className="stamp live">Read</span>
            </Link>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          More guides land every week. Want one on your trade?{" "}
          <Link href="/#waitlist" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Tell us what to write next
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
