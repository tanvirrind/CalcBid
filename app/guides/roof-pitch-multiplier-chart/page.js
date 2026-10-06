import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Roof Pitch Multiplier Chart (3/12–12/12)",
  description:
    "Roof pitch multiplier chart: convert footprint square footage to true roof area for any pitch from 3/12 to 12/12.",
  keywords: [
    "roof pitch multiplier chart",
    "roof pitch multiplier",
    "pitch factor chart roofing",
    "how to calculate roof pitch area",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roof-pitch-multiplier-chart" },
  openGraph: {
    title: "Roof Pitch Multiplier Chart (3/12–12/12) | CalcBid",
    description:
      "Footprint to true roof area for every common pitch — the chart roofers actually use.",
    url: "https://calcbid.com/guides/roof-pitch-multiplier-chart",
  },
};

const rows = [
  ["3/12", "1.031", "+3%"],
  ["4/12", "1.054", "+5%"],
  ["5/12", "1.083", "+8%"],
  ["6/12", "1.118", "+12%"],
  ["7/12", "1.158", "+16%"],
  ["8/12", "1.202", "+20%"],
  ["9/12", "1.250", "+25%"],
  ["10/12", "1.302", "+30%"],
  ["11/12", "1.357", "+36%"],
  ["12/12", "1.414", "+41%"],
];

export default function Guide() {
  return (
    <GuideArticle
      title="Roof Pitch Multiplier Chart"
      description="A roof's true area is always bigger than its footprint. Find your pitch, multiply, and you've got the real number to order and price from."
      slug="roof-pitch-multiplier-chart"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Calculate your roof"
    >
      <h2>The chart</h2>
      <p>
        Multiply the roof&apos;s footprint area (length × width of the house)
        by the multiplier for your pitch. A 2,000 sq ft footprint under a
        8/12 roof is really 2,404 sq ft of roofing — that&apos;s 24 squares,
        not 20.
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>Multiplier</th>
              <th style={{ padding: "10px 8px" }}>Area added</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} style={{ borderBottom: "1px solid var(--line)" }}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "10px 8px" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Where the number comes from</h2>
      <p>
        The multiplier is √(12² + rise²) ÷ 12 — the ratio of the sloped rafter
        length to its horizontal run. For 12/12 that&apos;s √288 ÷ 12 =
        1.414. Steeper pitch, longer slope, more shingles. Simple geometry,
        expensive to ignore.
      </p>
      <h2>What the multiplier doesn&apos;t cover</h2>
      <ul>
        <li><strong>Waste:</strong> add 10% for simple roofs, 15%+ for hips, valleys, and dormers — on top of the pitch adjustment.</li>
        <li><strong>Overhangs:</strong> the footprint math above assumes the roof edge meets the wall; eave overhangs add area most estimators fold into waste.</li>
        <li><strong>Labor:</strong> steep roofs cost more per square to install — staging, safety, and slower crews. Price the pitch, not just the materials.</li>
      </ul>
      <p>
        <strong>Roofers:</strong> the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> bakes
        the pitch multiplier in automatically — footprint and pitch in,
        squares, bundles, and labor out, ready to{" "}
        <a href="/quote">quote</a>.
      </p>
    </GuideArticle>
  );
}
