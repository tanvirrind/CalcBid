import Link from "next/link";

export const metadata = {
  title: "Contact CalcBid",
  description:
    "Contact CalcBid — questions, feedback, or a trade we should cover next. Email info@calcbid.com, we read everything.",
  alternates: { canonical: "https://calcbid.com/contact" },
  openGraph: {
    title: "Contact CalcBid",
    description:
      "Questions, feedback, or a trade we should cover next — email info@calcbid.com.",
    url: "https://calcbid.com/contact",
  },
};

const topics = [
  {
    t: "Support",
    d: "Something broken, confusing, or just not working the way you'd expect? Tell us what happened and we'll sort it out.",
  },
  {
    t: "Request a trade",
    d: "Your trade isn't covered yet? Tell us what you estimate every week — it genuinely decides what we build next.",
  },
  {
    t: "Feedback & ideas",
    d: "Used a calculator on a real job? Tell us what the numbers missed. The best improvements come from the field.",
  },
  {
    t: "Business inquiries",
    d: "Partnerships, press, or anything else — same inbox, we'll route it to the right place.",
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Contact</div>
        <h1 className="h2">Talk to a human</h1>
        <p className="sub">
          One inbox for everything. We read every message and reply as fast as
          we can.
        </p>
        <div className="card" style={{ maxWidth: 560, padding: "32px", textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 15, color: "var(--muted)", marginBottom: 8 }}>
            Email us at
          </div>
          <a
            href="mailto:info@calcbid.com"
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "var(--accent-deep)",
              textDecoration: "none",
              wordBreak: "break-all",
            }}
          >
            info@calcbid.com
          </a>
        </div>
        <div className="grid3" style={{ maxWidth: 900 }}>
          {topics.map((x) => (
            <div key={x.t} className="card">
              <div className="t-name" style={{ marginBottom: 6 }}>{x.t}</div>
              <div className="t-note" style={{ lineHeight: 1.6 }}>{x.d}</div>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 28, maxWidth: 640 }}>
          Prefer to just try the tools?{" "}
          <Link href="/calculators" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Browse the calculators
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
