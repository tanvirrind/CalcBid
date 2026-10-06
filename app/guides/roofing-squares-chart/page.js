import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How Many Squares of Shingles Do I Need? (Chart)",
  description:
    "Roofing squares chart by home size: find how many squares — and bundles — your roof needs, adjusted for pitch.",
  keywords: [
    "how many squares of shingles do i need",
    "roofing squares chart",
    "how many squares is my roof",
    "shingles needed chart",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roofing-squares-chart" },
  openGraph: {
    title: "How Many Squares of Shingles Do I Need? (Chart) | CalcBid",
    description:
      "Roofing squares by home size, pitch-adjusted — plus the bundle math.",
    url: "https://calcbid.com/guides/roofing-squares-chart",
  },
};

const rows = [
  ["1,000", "12–14", "15–18", "36–54"],
  ["1,200", "14–17", "18–22", "54–66"],
  ["1,500", "18–21", "22–27", "66–81"],
  ["1,800", "21–25", "27–32", "81–96"],
  ["2,000", "24–28", "30–36", "90–108"],
  ["2,500", "30–35", "37–45", "111–135"],
  ["3,000", "36–42", "45–54", "135–162"],
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Squares of Shingles Do I Need?"
      description="One roofing square = 100 sq ft of roof. Find your home size below, adjust for pitch, and you've got your squares — and your bundle count."
      slug="roofing-squares-chart"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Measure your exact roof"
    >
      <h2>Squares by home size</h2>
      <p>
        These ranges assume a typical gable or hip roof. The low end is a
        simple roof at a walkable pitch; the high end covers steeper pitches
        and complex rooflines. One square = 100 sq ft, and standard
        architectural shingles come <strong>3 bundles per square</strong>.
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Home size (sq ft)</th>
              <th style={{ padding: "10px 8px" }}>Roof squares</th>
              <th style={{ padding: "10px 8px" }}>With 10% waste</th>
              <th style={{ padding: "10px 8px" }}>Bundles to order</th>
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
      <h2>Adjusting for pitch</h2>
      <p>
        Roof area is always bigger than the home&apos;s footprint — pitch
        stretches it. Multiply the footprint-based number by your{" "}
        <a href="/guides/roof-pitch-multiplier-chart">pitch multiplier</a>: a
        6/12 roof adds ~12%, a 10/12 adds ~30%. That&apos;s the difference
        between ordering 27 squares and 35.
      </p>
      <h2>Don&apos;t forget</h2>
      <ul>
        <li><strong>Waste:</strong> 10% for simple roofs, 15% for hips, valleys, and dormers.</li>
        <li><strong>Ridge cap:</strong> usually sold separately — about 1 bundle per 30–35 linear feet of ridge.</li>
        <li><strong>Starter strip:</strong> one bundle covers roughly 100–120 linear feet of eave.</li>
      </ul>
      <p>
        <strong>Roofers:</strong> skip the chart guesswork — the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> takes
        footprint and pitch and returns exact squares, bundles, tear-off, and
        labor, ready to <a href="/quote">send as a quote</a>.
      </p>
    </GuideArticle>
  );
}
