export const metadata = {
  title: "About CalcBid",
  description:
    "CalcBid is the calculator-and-quote pad for contractors: free trade calculators plus a quote builder that turns estimates into signed jobs.",
  alternates: { canonical: "https://calcbid.com/about" },
  openGraph: {
    title: "About CalcBid",
    description:
      "Free trade calculators plus a quote builder for contractors — estimate the job, send the quote, get paid.",
    url: "https://calcbid.com/about",
  },
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">About</div>
        <h1 className="h2">Built for contractors who hate spreadsheets</h1>
        <div style={{ maxWidth: 680, lineHeight: 1.75, fontSize: 17 }}>
          <p>
            CalcBid started with a simple observation: most contractors still
            estimate jobs in Excel, on paper, or in their head — then lose
            evenings turning those numbers into quotes clients take seriously.
          </p>
          <p>
            So we built the pad we wished existed: free calculators for the
            trades that price by the job — paint, roofing, tile &amp; flooring,
            deck &amp; fence, HVAC, and concrete &amp; drywall — each one
            feeding straight into a quote builder with line items, tax,
            discounts, and expiry dates.
          </p>
          <p>
            The calculators are free, forever. No account, no catch. When you
            want unlimited branded quotes with your logo, plans start at $19 a
            month.
          </p>
          <p>
            Questions, feedback, or a trade we should cover next?{" "}
            <a
              href="mailto:info@calcbid.com"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              info@calcbid.com
            </a>{" "}
            — we read everything.
          </p>
        </div>
      </div>
    </section>
  );
}
