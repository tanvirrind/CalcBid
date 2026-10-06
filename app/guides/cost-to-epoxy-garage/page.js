import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Cost to Epoxy a 2-Car Garage in 2026",
  description:
    "What it costs to epoxy a 2-car garage in 2026: DIY kit math vs pro installed pricing, and what drives the bid.",
  keywords: [
    "cost to epoxy a 2 car garage",
    "how much does it cost to epoxy a garage floor",
    "garage floor epoxy cost",
    "epoxy garage floor price",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-epoxy-garage" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Epoxy a 2-Car Garage (2026) | CalcBid",
    description:
      "DIY kit math vs pro installed pricing — and what drives the bid.",
    url: "https://calcbid.com/guides/cost-to-epoxy-garage",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Epoxy a 2-Car Garage (2026) | CalcBid",
    description: "DIY kit math vs pro installed pricing — and what drives the bid.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does It Cost to Epoxy a 2-Car Garage?"
      description="2026 epoxy garage floor costs: the DIY kit breakdown, what pros charge, and why the prep work is where bids are won or lost."
      slug="cost-to-epoxy-garage"
      calculatorHref="/calculators/epoxy-garage-floor-calculator"
      calculatorLabel="Price the job"
    >
      <h2>The short answer</h2>
      <p>
        A 2-car garage (400–500 sq ft) costs <strong>$500–$1,000 DIY</strong>{" "}
        with quality kits, or <strong>$1,500–$5,000+ pro-installed</strong> —
        $3–$12 per sq ft depending on the coating system and prep. The gap
        between those numbers is your entire sales pitch.
      </p>
      <h2>DIY cost breakdown</h2>
      <ul>
        <li><strong>Epoxy kits:</strong> $100–$180 each, ~250 sq ft coverage → 2 kits for most garages</li>
        <li><strong>Prep supplies:</strong> $200–$400 — grinder rental, degreaser, etch, crack filler</li>
        <li><strong>Total DIY:</strong> $500–$1,000 and a weekend</li>
      </ul>
      <h2>Pro pricing tiers</h2>
      <ul>
        <li><strong>Water-based epoxy:</strong> $3–$5/sq ft — budget pro jobs</li>
        <li><strong>100% solids epoxy:</strong> $5–$9/sq ft — the professional standard</li>
        <li><strong>Polyaspartic:</strong> $8–$12/sq ft — fastest cure, premium price</li>
      </ul>
      <h2>What drives the bid</h2>
      <ul>
        <li><strong>Prep:</strong> grinding vs. etching — grinding costs more and lasts longer; never skip it in the bid.</li>
        <li><strong>Concrete condition:</strong> oil stains, cracks, and moisture issues add $300–$1,000 in prep.</li>
        <li><strong>Flake broadcast:</strong> decorative flakes add $1–$2/sq ft and most clients want them once they see a sample.</li>
        <li><strong>Cove base:</strong> running epoxy up the stem wall — easy upsell, clean look.</li>
      </ul>
      <p>
        <strong>Contractors:</strong> the DIY-vs-pro gap sells the job for
        you — show both numbers. Run it in the{" "}
        <a href="/calculators/epoxy-garage-floor-calculator">epoxy calculator</a>{" "}
        and send the <a href="/quote">quote</a> with both options itemized.
      </p>
    </GuideArticle>
  );
}
