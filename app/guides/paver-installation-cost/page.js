import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Paver Installation Cost Per Square Foot (2026)",
  description:
    "Paver installation cost per sq ft in 2026: materials, base, and labor breakdown for patios, walkways, and driveways.",
  keywords: [
    "paver installation cost per square foot",
    "how much do pavers cost",
    "paver patio cost",
    "cost to install pavers",
  ],
  alternates: { canonical: "https://calcbid.com/guides/paver-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Paver Installation Cost Per Square Foot (2026) | CalcBid",
    description:
      "Materials, base, and labor breakdown for patios, walkways, and driveways.",
    url: "https://calcbid.com/guides/paver-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paver Installation Cost Per Square Foot (2026) | CalcBid",
    description: "Materials, base, and labor breakdown for patios, walkways, and driveways.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="Paver Installation Cost Per Square Foot (2026)"
      description="What paver patios, walkways, and driveways really cost in 2026 — the full materials/labor/base breakdown contractors should bid from."
      slug="paver-installation-cost"
      calculatorHref="/calculators/paver-calculator"
      calculatorLabel="Price the job"
    >
      <h2>The short answer</h2>
      <p>
        Installed paver work runs <strong>$10–$25 per sq ft</strong> in 2026.
        A 400 sq ft patio: <strong>$4,000–$10,000</strong>. Walkways run
        higher per foot (more cuts, more edging); driveways run higher
        overall (deeper base, heavier pavers).
      </p>
      <h2>Where the money goes</h2>
      <ul>
        <li><strong>Pavers:</strong> $3–$8/sq ft materials — the visible choice, and the easiest upsell</li>
        <li><strong>Base & sand:</strong> $2–$4/sq ft installed — 4–6&quot; compacted gravel + 1&quot; bedding sand</li>
        <li><strong>Edge restraints:</strong> $2–$3 per linear foot of perimeter</li>
        <li><strong>Labor:</strong> $6–$14/sq ft — setting, cutting, compacting, sweeping polymeric sand</li>
      </ul>
      <h2>What moves the bid</h2>
      <ul>
        <li><strong>Pattern complexity:</strong> herringbone and circular patterns add 20–30% labor over running bond.</li>
        <li><strong>Driveway vs. patio:</strong> driveways need 8–12&quot; of base and thicker pavers — bid them as a different animal.</li>
        <li><strong>Demo:</strong> tearing out old concrete adds $2–$4/sq ft — separate line.</li>
        <li><strong>Sealer:</strong> $1–$2/sq ft add-on with excellent margin — quote it on every job.</li>
      </ul>
      <h2>Bidding tips</h2>
      <ul>
        <li><strong>Never skimp the base in the bid</strong> — callbacks from settling pavers cost more than the gravel you saved.</li>
        <li><strong>Quote the sealer separately</strong> — it keeps your base price competitive and captures the upsell.</li>
        <li><strong>Show two paver tiers</strong> — standard vs. premium. The upgrade take-rate will surprise you.</li>
      </ul>
      <p>
        Run the paver count and base yards in the{" "}
        <a href="/calculators/paver-calculator">paver calculator</a> and
        send the itemized <a href="/quote">quote</a> the same day you measure.
      </p>
    </GuideArticle>
  );
}
