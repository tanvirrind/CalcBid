import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Quote a Siding Job (2026 Guide)",
  description:
    "How to quote siding: measure squares, price by material type, handle trim and tear-off, and present the bid that wins.",
  keywords: [
    "how to quote a siding job",
    "how to bid siding",
    "siding quote",
    "how to estimate siding",
    "siding bid",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-siding-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Siding Job | CalcBid",
    description:
      "Measure squares, price by material, handle trim and tear-off — the bid that wins siding jobs.",
    url: "https://calcbid.com/guides/how-to-quote-siding-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Siding Job | CalcBid",
    description: "Measure squares, price by material, handle trim and tear-off — the bid that wins siding jobs.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Quote a Siding Job"
      description="Squares, material tiers, trim, and tear-off — the complete walkthrough for quoting siding jobs that protect your margin."
      slug="how-to-quote-siding-job"
      calculatorHref="/calculators/siding-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Step 1: Measure in squares</h2>
      <p>
        Measure each wall (length × height), add them up, subtract ~15% for
        windows and doors, divide by 100. That&apos;s your squares — the
        unit the whole industry prices in. A 1,800 sq ft wall area is about
        15 squares net; order 17 with waste.
      </p>
      <h2>Step 2: Price by material tier</h2>
      <p>
        Quote <strong>good / better / best</strong> — it doubles your close
        rate versus a single number:
      </p>
      <ul>
        <li><strong>Vinyl:</strong> $8–$12/sq ft installed — the volume play</li>
        <li><strong>Fiber cement:</strong> $12–$18/sq ft — the upsell sweet spot</li>
        <li><strong>Wood/cedar:</strong> $15–$22/sq ft — premium, high margin</li>
      </ul>
      <h2>Step 3: Don't forget the hidden half</h2>
      <ul>
        <li><strong>Tear-off:</strong> $1–$3/sq ft to remove old siding — always a separate line item.</li>
        <li><strong>Trim & accessories:</strong> J-channel, corners, starter strips — budget ~$85 per 500 sq ft.</li>
        <li><strong>House wrap:</strong> if the old wrap is shot, add it — $0.50–$1/sq ft.</li>
        <li><strong>Fascia & soffit:</strong> check them while you&apos;re up there; easy add-on sale.</li>
      </ul>
      <h2>Step 4: Present it right</h2>
      <p>
        Itemize materials vs. labor vs. tear-off. Homeowners comparing three
        bids choose the one they understand — and itemized bids get 30% fewer
        &ldquo;can you sharpen your pencil&rdquo; calls. Put the three
        material tiers side by side and let them pick their price.
      </p>
      <p>
        Run it through the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a>, push
        the numbers into a <a href="/quote">quote</a>, and send all three
        tiers before you leave.
      </p>
    </GuideArticle>
  );
}
