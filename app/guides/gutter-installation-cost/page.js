import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Gutter Installation Cost Per Linear Foot (2026)",
  description:
    "Gutter installation cost per linear foot in 2026: aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
  keywords: [
    "gutter installation cost per linear foot",
    "how much do gutters cost",
    "cost to install gutters",
    "seamless gutter cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/gutter-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Gutter Installation Cost Per Linear Foot (2026) | CalcBid",
    description:
      "Aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
    url: "https://calcbid.com/guides/gutter-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Installation Cost Per Linear Foot (2026) | CalcBid",
    description: "Aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="Gutter Installation Cost Per Linear Foot (2026)"
      description="What gutters really cost installed in 2026 — per-foot pricing by material, the downspout and guard math, and how contractors should bid it."
      slug="gutter-installation-cost"
      calculatorHref="/calculators/gutter-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Cost per linear foot, by material</h2>
      <ul>
        <li><strong>Seamless aluminum:</strong> $8–$12/ft installed — 80%+ of residential jobs</li>
        <li><strong>Galvanized steel:</strong> $10–$16/ft — stronger, heavier, pricier labor</li>
        <li><strong>Copper:</strong> $25–$40/ft — premium looks, premium margin</li>
      </ul>
      <p>
        A typical 180-foot home in seamless aluminum:{" "}
        <strong>$1,500–$2,200</strong> for gutters plus $300–$500 for
        downspouts. Add gutter guards at $5–$10/ft if the home sits under trees.
      </p>
      <h2>The parts bids forget</h2>
      <ul>
        <li><strong>Downspouts:</strong> $75–$125 each installed (aluminum) — one per 30–40 ft of gutter.</li>
        <li><strong>Fascia repair:</strong> rotten fascia behind old gutters is found on half of replacement jobs — inspect and price it separately.</li>
        <li><strong>Second story:</strong> +25% labor for the upper run.</li>
        <li><strong>Removal:</strong> $1–$2/ft to take down old gutters — don&apos;t eat it.</li>
      </ul>
      <h2>Quoting tips</h2>
      <ul>
        <li><strong>Quote guards as an add-on line</strong> — keeps your base price competitive while capturing the upsell.</li>
        <li><strong>Walk the fascia</strong> before quoting — the surprise rot repair is the classic gutter margin-killer.</li>
        <li><strong>Bundle with roofing:</strong> if you do both, gutters quoted alongside a roof job close at a much higher rate.</li>
      </ul>
      <p>
        Run the roofline through the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a> and
        send the <a href="/quote">quote</a> the same day you measure.
      </p>
    </GuideArticle>
  );
}
