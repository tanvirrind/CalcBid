import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How Many Bundles of Shingles Per Square?",
  description:
    "Bundles per roofing square: the standard count, the exceptions, and exactly how many bundles to order for your roof.",
  keywords: [
    "how many bundles of shingles per square",
    "bundles per square roofing",
    "how many bundles in a square of shingles",
  ],
  alternates: { canonical: "https://calcbid.com/guides/bundles-per-square" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 1200,
        height: 630,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How Many Bundles of Shingles Per Square? | CalcBid",
    description:
      "The standard bundle count, the exceptions, and the order math.",
    url: "https://calcbid.com/guides/bundles-per-square",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Bundles of Shingles Per Square? | CalcBid",
    description: "The standard bundle count, the exceptions, and the order math.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Bundles of Shingles Per Square?"
      description="The short answer: 3 bundles per square for standard architectural shingles. Here's when that changes — and how many to actually order."
      slug="bundles-per-square"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Calculate your roof"
    >
      <h2>The standard: 3 bundles per square</h2>
      <p>
        One roofing square covers 100 sq ft. Standard 3-tab and architectural
        (dimensional) shingles are packaged <strong>3 bundles to the
        square</strong> — so a 27-square roof needs 81 bundles. This covers
        the vast majority of US residential roofs.
      </p>
      <h2>When it&apos;s not 3</h2>
      <ul>
        <li><strong>4 bundles per square:</strong> some metric shingles and certain specialty lines (e.g., some CertainTeed and GAF designer products) pack 4 to the square — check the wrapper, which always states coverage.</li>
        <li><strong>Ridge cap shingles:</strong> sold separately by the bundle — one bundle covers roughly 30–35 linear feet of ridge.</li>
        <li><strong>Starter strip:</strong> also separate — about 100–120 linear feet of eave per bundle.</li>
      </ul>
      <h2>The order math</h2>
      <p>
        Squares × 3 = bundles, then add waste: 10% for a simple gable roof,
        15% for hips, valleys, and dormers. A 25-square roof with a couple of
        valleys: 25 × 3 = 75 bundles × 1.15 ≈ <strong>87 bundles</strong>.
        Round up to the full bundle — suppliers don&apos;t split them, and a
        leftover bundle is cheap insurance for future repairs.
      </p>
      <h2>Quick reference</h2>
      <ul>
        <li>20 squares → 60 bundles (+waste: 66–69)</li>
        <li>25 squares → 75 bundles (+waste: 83–87)</li>
        <li>30 squares → 90 bundles (+waste: 99–104)</li>
        <li>35 squares → 105 bundles (+waste: 116–121)</li>
      </ul>
      <p>
        <strong>Roofers:</strong> get the exact count for any roof in the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> —
        squares, bundles, tear-off, and labor in one pass, ready to{" "}
        <a href="/quote">quote</a>.
      </p>
    </GuideArticle>
  );
}
