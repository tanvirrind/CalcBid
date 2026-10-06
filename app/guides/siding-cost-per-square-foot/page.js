import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Siding Installation Cost Per Square Foot (2026)",
  description:
    "Siding installation cost per sq ft in 2026: vinyl, fiber cement, wood, and metal pricing plus tear-off and trim.",
  keywords: [
    "siding installation cost per square foot",
    "how much does siding cost",
    "cost to side a house",
    "vinyl siding cost per square foot",
    "house siding cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/siding-cost-per-square-foot" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Siding Installation Cost Per Square Foot (2026) | CalcBid",
    description:
      "Vinyl, fiber cement, wood, and metal pricing — plus tear-off and trim.",
    url: "https://calcbid.com/guides/siding-cost-per-square-foot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Cost Per Square Foot (2026) | CalcBid",
    description: "Vinyl, fiber cement, wood, and metal pricing — plus tear-off and trim.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="Siding Installation Cost Per Square Foot (2026)"
      description="What house siding really costs in 2026 — per-square-foot pricing for all four major materials, plus the tear-off and trim math."
      slug="siding-cost-per-square-foot"
      calculatorHref="/calculators/siding-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Cost per square foot, installed</h2>
      <ul>
        <li><strong>Vinyl:</strong> $8–$12/sq ft — the volume choice</li>
        <li><strong>Fiber cement:</strong> $12–$18/sq ft — the durability upsell</li>
        <li><strong>Wood / cedar:</strong> $15–$22/sq ft — premium looks, premium maintenance</li>
        <li><strong>Metal / aluminum:</strong> $12–$16/sq ft — modern profiles, clean lines</li>
      </ul>
      <p>
        A 1,500 sq ft wall area (about 15 squares net):{" "}
        <strong>$12,000–$18,000</strong> in vinyl,{" "}
        <strong>$18,000–$27,000</strong> in fiber cement.
      </p>
      <h2>Beyond the per-foot price</h2>
      <ul>
        <li><strong>Tear-off:</strong> $1–$3/sq ft to remove old siding — always separate on the bid.</li>
        <li><strong>Trim & accessories:</strong> ~$85 per 500 sq ft for J-channel, corners, starter.</li>
        <li><strong>House wrap:</strong> $0.50–$1/sq ft if the old barrier is shot.</li>
        <li><strong>Fascia/soffit:</strong> inspect while you&apos;re there — the natural add-on.</li>
      </ul>
      <h2>For contractors: bid it to win</h2>
      <ul>
        <li><strong>Three tiers, one page:</strong> good/better/best side by side doubles close rates.</li>
        <li><strong>Itemize tear-off</strong> — &ldquo;includes removal&rdquo; gets haggled; a visible line gets respected.</li>
        <li><strong>Sell the wrap:</strong> once the old siding is off, the upsell conversation is easy.</li>
      </ul>
      <p>
        Run the squares in the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a> and
        send all three tiers in one <a href="/quote">quote</a>.
      </p>
    </GuideArticle>
  );
}
