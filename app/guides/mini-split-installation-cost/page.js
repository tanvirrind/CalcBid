import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Mini Split Installation Cost in 2026",
  description:
    "Mini split installation cost in 2026: per-zone pricing, what drives the bid up, and when a mini split beats central air.",
  keywords: [
    "mini split installation cost",
    "how much does a mini split cost",
    "ductless mini split cost",
    "mini split install price",
  ],
  alternates: { canonical: "https://calcbid.com/guides/mini-split-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Mini Split Installation Cost (2026) | CalcBid",
    description:
      "Per-zone pricing, what drives the bid up, and when a mini split beats central air.",
    url: "https://calcbid.com/guides/mini-split-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Split Installation Cost (2026) | CalcBid",
    description: "Per-zone pricing, what drives the bid up, and when a mini split beats central air.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="Mini Split Installation Cost in 2026"
      description="What ductless mini splits really cost installed: per-zone pricing, the extras that move the bid, and how to quote them right."
      slug="mini-split-installation-cost"
      calculatorHref="/calculators/hvac-btu-calculator"
      calculatorLabel="Size the system"
    >
      <h2>The short answer</h2>
      <p>
        A single-zone mini split runs <strong>$2,500–$5,000 installed</strong>{" "}
        in 2026. Multi-zone systems run <strong>$5,000–$12,000+</strong> —
        roughly $2,000–$3,000 per additional zone after the first. The
        equipment is about half the total; labor, line sets, and electrical
        make up the rest.
      </p>
      <h2>What moves the bid</h2>
      <ul>
        <li><strong>Number of zones:</strong> the dominant cost driver — each head adds equipment + line set + labor.</li>
        <li><strong>Line set length:</strong> long runs (attic to far bedroom) add copper, condensate routing, and time.</li>
        <li><strong>Electrical:</strong> new dedicated circuit runs $300–$800; panel upgrades are a separate job.</li>
        <li><strong>Brand tier:</strong> Mitsubishi/Daikin/Fujitsu cost 20–40% more than budget brands — and fail less.</li>
        <li><strong>Mounting:</strong> wall mounts are standard; ceiling cassettes and floor units cost more to install.</li>
      </ul>
      <h2>When a mini split beats central air</h2>
      <ul>
        <li>Homes with no ductwork (the #1 case — retrofitting ducts costs more than the mini split)</li>
        <li>Additions, garages, and sunrooms</li>
        <li>Zoning problem rooms that central never gets right</li>
      </ul>
      <h2>Quoting tips for HVAC contractors</h2>
      <ul>
        <li><strong>Size it right:</strong> oversized mini splits short-cycle — run a{" "}
          <a href="/calculators/hvac-btu-calculator">BTU calculation</a> per zone, don&apos;t rule-of-thumb it.</li>
        <li><strong>Show the rebate math:</strong> 2026 federal and utility rebates can take $500–$2,000 off — put the net price on the quote.</li>
        <li><strong>Quote the electrical separately</strong> if you&apos;re subbing it — clients accept it better as its own line.</li>
      </ul>
      <p>
        Build the full job price — equipment, line sets, electrical, labor —
        in the <a href="/quote">quote builder</a> and send it the same day you survey.
      </p>
    </GuideArticle>
  );
}
