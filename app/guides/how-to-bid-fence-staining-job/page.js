import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Bid a Fence Staining Job (2026)",
  description:
    "How to bid fence staining: per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
  keywords: [
    "how to bid a fence staining job",
    "how to quote fence staining",
    "fence staining bid",
    "how much to charge to stain a fence",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-fence-staining-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Fence Staining Job | CalcBid",
    description:
      "Per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
    url: "https://calcbid.com/guides/how-to-bid-fence-staining-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Fence Staining Job | CalcBid",
    description: "Per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Bid a Fence Staining Job"
      description="Price per linear foot, nail the stain math, and stack the upsells — fence staining is one of the highest-margin jobs in exterior work."
      slug="how-to-bid-fence-staining-job"
      calculatorHref="/calculators/fence-staining-calculator"
      calculatorLabel="Price the job"
    >
      <h2>The per-foot formula</h2>
      <p>
        Bid fence staining <strong>per linear foot</strong> — clients get it
        instantly. For a 6-foot fence, both sides, one coat:{" "}
        <strong>$3–$7 per linear foot</strong> is the 2026 range. A 150-foot
        fence at $5/ft is a $750 job. One side only? Roughly 60% of the
        two-side price.
      </p>
      <h2>Do the stain math (don't guess)</h2>
      <p>
        Area = length × height × sides. Divide by the stain&apos;s coverage
        (150–300 sq ft per gallon — check the can, not your memory), add 10%
        waste. A 150-foot × 6-foot fence, both sides = 1,800 sq ft ≈ 8
        gallons at 250 sq ft/gal. At $45/gallon that&apos;s $360 in stain —
        know this number cold before you name a price.
      </p>
      <h2>Read the fence before you bid</h2>
      <ul>
        <li><strong>Gray and weathered:</strong> drinks stain — budget extra material or a second coat in the bid.</li>
        <li><strong>Green with mildew:</strong> add a wash step ($0.50–$1/ft) — staining over mildew is a callback.</li>
        <li><strong>New cedar:</strong> easiest money; one coat, fast application.</li>
        <li><strong>Peeling old stain:</strong> stripping or sanding can double the labor — bid it as a separate line.</li>
      </ul>
      <h2>Stack the upsells</h2>
      <ul>
        <li><strong>Both sides</strong> when they asked for one (+40%)</li>
        <li><strong>Gate hardware</strong> replacement while you&apos;re there</li>
        <li><strong>Deck staining</strong> — same crew, same stain, same trip</li>
        <li><strong>Maintenance plan:</strong> restain every 3 years, booked now at a small discount</li>
      </ul>
      <p>
        That last one is the real money. Fences need restaining every 2–4
        years — every job you finish is a future job you&apos;ve already won
        if you write the date down.
      </p>
      <p>
        Run the exact numbers in the{" "}
        <a href="/calculators/fence-staining-calculator">fence staining calculator</a>{" "}
        and fire the <a href="/quote">quote</a> off from the driveway.
      </p>
    </GuideArticle>
  );
}
