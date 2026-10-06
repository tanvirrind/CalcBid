import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Quote a Painting Job (Without Underbidding)",
  description:
    "A contractor's walkthrough for quoting painting jobs: measure the room, price materials and labor, add markup for profit, and send a quote clients sign.",
  keywords: [
    "how to quote a painting job",
    "how to bid a paint job",
    "painting quote",
    "how to estimate a painting job",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-a-painting-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 1200,
        height: 630,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Painting Job (Without Underbidding) | CalcBid",
    description:
      "Measure, price materials and labor, add markup, send the quote — the full walkthrough for painting contractors.",
    url: "https://calcbid.com/guides/how-to-quote-a-painting-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Painting Job (Without Underbidding) | CalcBid",
    description: "Measure, price materials and labor, add markup, send the quote — the full walkthrough for painting contractors.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Quote a Painting Job (Without Underbidding)"
      description="Most painting quotes go wrong in the same three places: the measurements, the labor hours, and the missing markup. Here's the full process, step by step."
      slug="how-to-quote-a-painting-job"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Try the paint calculator"
    >
      <h2>Step 1: Measure the actual paintable area</h2>
      <p>
        Walk the room with a tape measure. For each wall, multiply length by
        height, then subtract about 21 square feet per door and 15 per window.
        A 12×10 room with 8-foot ceilings and one door plus two windows works
        out to roughly 400 square feet of paintable wall — not the 440
        you&apos;d get skipping the deductions.
      </p>
      <h2>Step 2: Price the materials honestly</h2>
      <p>
        Divide the paintable area by your paint&apos;s coverage (about 350 sq
        ft per gallon for interior wall paint), multiply by coats, and round
        up — then add 10% waste. Multiply gallons by your real price per
        gallon, and don&apos;t forget primer, tape, caulk, and sundries. Most
        underbids die here: the &ldquo;small stuff&rdquo; routinely adds
        $50–$150 to a room.
      </p>
      <h2>Step 3: Estimate labor, then add a buffer</h2>
      <p>
        A pro covers roughly 150–200 square feet per hour including prep.
        Take your hours, multiply by your hourly rate, then add 10–15% buffer
        for the things you can&apos;t see yet — heavy patching, furniture
        moving, the ceiling that turns out to need two coats. If you consistently
        finish &ldquo;faster than estimated,&rdquo; your estimates are fiction.
      </p>
      <h2>Step 4: Add markup — this is the step everyone skips</h2>
      <p>
        Materials plus labor is your <em>cost</em>, not your <em>price</em>.
        Add overhead (insurance, vehicle, phone, the hours you spend quoting
        for free) and a profit margin on top — 20–30% markup over cost is the
        minimum for a sustainable one-person operation. A quote with no margin
        isn&apos;t competitive pricing; it&apos;s a slow leak.
      </p>
      <h2>Step 5: Send a quote worth signing</h2>
      <p>
        Put it on paper with line items (prep, paint, labor shown separately),
        a total, a validity window (30 days is standard), and your terms.
        Clients trust itemized quotes more than single numbers, and they sign
        faster when the expiry date is printed on the page.
      </p>
      <p>
        <strong>The shortcut:</strong> the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a> does steps
        1–3 in about a minute, and the{" "}
        <a href="/quote">quote builder</a> turns the numbers into a
        client-ready document with line items, tax, and an expiry date.
      </p>
    </GuideArticle>
  );
}
