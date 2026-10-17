export const metadata = {
  title: "Disclaimer",
  description:
    "CalcBid's disclaimer: cost figures are planning estimates, not quotes. Verify locally; not licensed contractor advice.",
  alternates: { canonical: "https://calcbid.com/disclaimer" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Disclaimer | CalcBid",
    url: "https://calcbid.com/disclaimer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | CalcBid",
    description:
      "CalcBid's disclaimer: estimates are for planning; verify locally.",
  },
};

const S = ({ children }) => (
  <p style={{ lineHeight: 1.75, fontSize: 17 }}>{children}</p>
);
const H = ({ children }) => (
  <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 8 }}>{children}</h2>
);

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Legal</div>
        <h1 className="h2">Disclaimer</h1>
        <p className="sub">Last updated: October 2026</p>
        <div style={{ maxWidth: 720 }}>
          <S>
            The cost figures, calculators, and guides on calcbid.com are{" "}
            <strong>estimates for planning purposes only</strong>. They are
            compiled from published material pricing, labor-rate benchmarks,
            and industry cost references (see{" "}
            <a
              href="/methodology"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              how we calculate costs
            </a>
            ) and reflect national ranges — not your project.
          </S>

          <H>Not quotes, not bids</H>
          <S>
            Nothing on this site is a quote, a bid, or an offer to perform
            work. Actual project costs vary with site conditions, material
            availability, local labor markets, permits, and the condition of
            the existing structure. Always get written bids from licensed
            contractors in your area before committing to a project.
          </S>

          <H>Verify locally</H>
          <S>
            Prices move. A figure published in October may not match
            December&apos;s shelf price, and labor rates differ between a
            coastal metro and a rural county. Use our numbers to budget and to
            sanity-check bids — then verify with local suppliers and
            contractors.
          </S>

          <H>Not professional or licensed advice</H>
          <S>
            Content on this site is general information, not professional
            advice. Structural, electrical, plumbing, gas, and roofing work
            carries safety and building-code requirements that differ by
            jurisdiction. Where local code or a permit applies, follow it; when
            a job exceeds your skill level, hire a licensed professional.
          </S>

          <H>No liability</H>
          <S>
            CalcBid is not liable for decisions made or outcomes achieved from
            using these estimates — overruns, underbids, failed inspections,
            or property damage. You use the tools and figures at your own
            risk. If you are a contractor, your quotes are your own: review
            every line item before you send it.
          </S>
        </div>
      </div>
    </section>
  );
}
