export const metadata = {
  title: "How CalcBid Calculates Costs",
  description:
    "How CalcBid builds cost ranges: retail material pricing, labor benchmarks, and industry references — plus what the numbers mean.",
  alternates: { canonical: "https://calcbid.com/methodology" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How CalcBid Calculates Costs | CalcBid",
    url: "https://calcbid.com/methodology",
  },
  twitter: {
    card: "summary_large_image",
    title: "How CalcBid Calculates Costs | CalcBid",
    description:
      "How CalcBid compiles material and labor cost ranges — and what the numbers mean.",
  },
};

const S = ({ children }) => (
  <p style={{ lineHeight: 1.75, fontSize: 17 }}>{children}</p>
);
const H = ({ children }) => (
  <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 8 }}>{children}</h2>
);
const LI = ({ children }) => (
  <li style={{ lineHeight: 1.75, fontSize: 17, marginBottom: 6 }}>{children}</li>
);

export default function MethodologyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">How it works</div>
        <h1 className="h2">How CalcBid calculates costs</h1>
        <p className="sub">Last updated: October 2026</p>
        <div style={{ maxWidth: 720 }}>
          <S>
            Every cost range on CalcBid — in our guides, our calculators, and
            the numbers we suggest in the quote builder — is a{" "}
            <strong>planning estimate</strong>, not a bid. This page explains
            where the numbers come from, how we keep them current, and what
            they can and can&apos;t tell you.
          </S>

          <H>Where the numbers come from</H>
          <S>
            We compile each trade&apos;s cost ranges from publicly available
            sources that any reader can check:
          </S>
          <ul style={{ paddingLeft: 20 }}>
            <LI>
              <strong>Retail material pricing.</strong> Published prices for
              lumber, tile, paint, shingles, fasteners, and other materials
              from national home-improvement retailers such as Home Depot and
              Lowe&apos;s, plus manufacturer list pricing where retail prices
              aren&apos;t published.
            </LI>
            <LI>
              <strong>Labor-rate benchmarks.</strong> Published wage data such
              as the Bureau of Labor Statistics&apos; occupational wage surveys
              for construction trades, adjusted to reflect contractor billing
              rates — which run above hourly wages because they carry
              insurance, equipment, overhead, and profit.
            </LI>
            <LI>
              <strong>Industry cost references.</strong> Established remodeling
              and construction cost references that publish per-unit and
              per-square-foot ranges by trade and region.
            </LI>
          </ul>
          <S>
            We do not scrape competitors, and we don&apos;t present
            contractor-submitted leads data as if it were a national average.
            When a source informs a specific figure, the guide says so.
          </S>

          <H>How ranges are built</H>
          <ul style={{ paddingLeft: 20 }}>
            <LI>
              <strong>Low–high, not a single number.</strong> A &ldquo;$5,000
              roof&rdquo; means nothing without the roof. We publish ranges
              (e.g. $8,000–$14,000) that reflect real-world variation in
              materials, scope, and market.
            </LI>
            <LI>
              <strong>Material, labor, and total are separated</strong> wherever
              the split is meaningful, so homeowners can see what&apos;s
              negotiable and contractors can see what their crews actually
              cost.
            </LI>
            <LI>
              <strong>Regional variation is real.</strong> The same job costs
              meaningfully more in coastal metros than in the rural Midwest.
              Our ranges reflect the national middle; the{" "}
              <a
                href="/calculators"
                style={{ color: "var(--accent-deep)", fontWeight: 700 }}
              >
                calculators
              </a>{" "}
              let you dial in your own material and labor rates for your
              market.
            </LI>
          </ul>

          <H>How guides are reviewed and updated</H>
          <S>
            Each guide is researched and written by the CalcBid Research Team,
            then checked against the calculator defaults for that trade so the
            two never disagree. We review cost figures on a rolling basis —
            the &ldquo;Last updated&rdquo; date on every guide tells you when
            its numbers were last checked. When material prices move sharply
            (lumber is the classic case), we re-verify the affected guides
            out of cycle.
          </S>

          <H>What the numbers aren&apos;t</H>
          <ul style={{ paddingLeft: 20 }}>
            <LI>
              <strong>Not a quote.</strong> A guide range is a starting point
              for budgeting or for sanity-checking a contractor&apos;s bid. It
              can&apos;t see your site conditions, access constraints, or the
              existing structure.
            </LI>
            <LI>
              <strong>Not a substitute for licensed advice.</strong> Structural,
              electrical, plumbing, and roofing work carries safety and code
              requirements that no calculator can assess. See our{" "}
              <a
                href="/disclaimer"
                style={{ color: "var(--accent-deep)", fontWeight: 700 }}
              >
                disclaimer
              </a>
              .
            </LI>
          </ul>

          <H>Run your own numbers</H>
          <S>
            The fastest way to beat the national average is to price your own
            job. Our free calculators use the same ranges, adjustable to your
            rates — then feed straight into the{" "}
            <a
              href="/quote"
              style={{ color: "var(--accent-deep)", fontWeight: 700 }}
            >
              quote builder
            </a>
            , no marketplace taking a cut in the middle.
          </S>
        </div>
      </div>
    </section>
  );
}
