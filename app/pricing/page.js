import Link from "next/link";
import Faq, { faqJsonLd } from "../../components/Faq";
import JsonLd from "../../components/JsonLd";

export const metadata = {
  title: "Pricing — Free, Solo $19, Crew $49",
  description:
    "CalcBid pricing: free calculators and quote builder forever. Solo $19/mo and Crew $49/mo add saved quotes, customers, and pipeline tracking.",
  keywords: [
    "calcbid pricing",
    "contractor quote software pricing",
    "painting estimate software cost",
    "free contractor quote builder",
  ],
  alternates: { canonical: "https://calcbid.com/pricing" },
  openGraph: {
    title: "Pricing — Free, Solo $19, Crew $49 | CalcBid",
    description:
      "Free calculators and quote builder forever. Paid plans add saved quotes, customers, and pipeline tracking.",
    url: "https://calcbid.com/pricing",
  },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    tag: "Start here",
    cta: "Start free",
    href: "/signup",
    note: "No card required",
    features: [
      "All 6 trade calculators",
      "Quote builder with shareable links",
      "Print / PDF quotes",
      "Send via your own email app",
      "All contractor guides",
    ],
  },
  {
    name: "Solo",
    price: "$19",
    per: "/month",
    tag: "Most popular",
    cta: "Join free — get notified",
    href: "/signup",
    note: "Launching soon",
    popular: true,
    features: [
      "Everything in Free",
      "Saved quotes & customers dashboard",
      "Quote status pipeline (draft → approved)",
      "Unlimited saved quotes",
      "Pipeline value at a glance",
    ],
  },
  {
    name: "Crew",
    price: "$49",
    per: "/month",
    tag: "For teams",
    cta: "Join free — get notified",
    href: "/signup",
    note: "Launching soon",
    features: [
      "Everything in Solo",
      "5 team seats included",
      "Shared quotes & customers",
      "One pipeline for the whole crew",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    q: "Is the Free plan really free?",
    a: "Yes — free forever. All six calculators, the quote builder with shareable links, print/PDF, and every guide. No card required, no trial that quietly expires.",
  },
  {
    q: "When do Solo and Crew launch?",
    a: "Soon. Create a free account now and you'll be first in line — early members lock in launch pricing, and your saved quotes and customers carry over automatically.",
  },
  {
    q: "Why pay when the calculators are free?",
    a: "The free tools help you win the job. Solo keeps the business organized behind it: every quote saved, every customer in one place, and your open pipeline value visible the moment you log in.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly billing, cancel in two clicks from your dashboard. Your quotes and customers stay exportable — we don't hold your business hostage.",
  },
  {
    q: "Is there an annual discount?",
    a: "Planned at launch: pay yearly and get two months free on both Solo and Crew.",
  },
  {
    q: "I'm a one-person shop. Which plan is for me?",
    a: "Solo. It's built for owner-operators who want their quotes, customers, and pipeline in one place. Crew is for teams that share quotes and customers across multiple people.",
  },
];

export default function PricingPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Pricing</div>
        <h1 className="h2">Simple pricing, honest math</h1>
        <p className="sub">
          The calculators are free forever. Pay only when you want your
          quotes, customers, and pipeline organized in one place.
        </p>

        <div className="grid3" style={{ marginTop: 32, alignItems: "stretch" }}>
          {tiers.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                border: t.popular
                  ? "3px solid var(--accent)"
                  : undefined,
                position: "relative",
              }}
            >
              {t.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    padding: "4px 14px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.tag}
                </div>
              )}
              {!t.popular && (
                <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--muted)" }}>
                  {t.tag}
                </div>
              )}
              <h2 style={{ fontSize: 24, margin: "10px 0 0" }}>{t.name}</h2>
              <div style={{ margin: "10px 0 4px" }}>
                <span style={{ fontSize: 44, fontWeight: 800 }}>{t.price}</span>
                <span style={{ color: "var(--muted)", fontWeight: 600 }}> {t.per}</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 700, marginBottom: 16 }}>
                {t.note}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "grid", gap: 10, flex: 1 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, fontSize: 15 }}>
                    <span style={{ color: "var(--accent-deep)", fontWeight: 800 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className={`btn ${t.popular ? "btn-primary" : "btn-ghost"}`}
                style={{ textAlign: "center" }}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 22, maxWidth: 720 }}>
          Solo and Crew are in final testing. Join free now — your account,
          quotes, and customers are already waiting when billing opens, and
          early members lock in the prices above.
        </p>

        <Faq items={faqs} heading="Pricing questions, answered" />
      </div>
    </section>
  );
}
