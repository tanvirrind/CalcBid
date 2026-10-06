import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Quote a Pressure Washing Job (2026)",
  description:
    "How to quote pressure washing: per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
  keywords: [
    "how to quote a pressure washing job",
    "how to price pressure washing",
    "pressure washing quote",
    "how much to charge for pressure washing",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-pressure-washing-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Pressure Washing Job | CalcBid",
    description:
      "Per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
    url: "https://calcbid.com/guides/how-to-quote-pressure-washing-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Pressure Washing Job | CalcBid",
    description: "Per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Quote a Pressure Washing Job"
      description="The walkthrough working pros use: measure, pick your rate by surface, protect yourself with a minimum charge, and send the quote before you leave."
      slug="how-to-quote-pressure-washing-job"
      calculatorHref="/calculators/pressure-washing-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Step 1: Measure the area</h2>
      <p>
        Pace it off or use a measuring wheel — length × width for driveways
        and patios, wall length × height for siding. You don&apos;t need
        survey precision; within 10% is fine for quoting.
      </p>
      <h2>Step 2: Pick your rate by surface</h2>
      <ul>
        <li><strong>Concrete / driveways:</strong> $0.15–$0.35 per sq ft</li>
        <li><strong>House siding:</strong> $0.20–$0.40 per sq ft</li>
        <li><strong>Wood decks:</strong> $0.25–$0.50 per sq ft</li>
        <li><strong>Roof soft wash:</strong> $0.30–$0.60 per sq ft</li>
      </ul>
      <p>
        New operators start at the low end to win reviews; established pros
        with photos and insurance charge the top end without apology.
      </p>
      <h2>Step 3: Set a minimum charge</h2>
      <p>
        This is the step beginners skip — and lose money on. A $125–$200
        minimum means small jobs (a walkway, a patio) still cover fuel,
        setup, and your time. Put it on every quote; clients expect it.
      </p>
      <h2>Step 4: Adjust for the ugly stuff</h2>
      <ul>
        <li><strong>Heavy mold/mildew:</strong> +20–30% (more chemical, more passes)</li>
        <li><strong>Multi-story:</strong> +25% (ladders, slower work)</li>
        <li><strong>No water spigot:</strong> add your tank-fill time</li>
        <li><strong>Delicate surfaces:</strong> charge soft-wash rates, not pressure rates</li>
      </ul>
      <h2>Step 5: Send the quote on the spot</h2>
      <p>
        Speed wins pressure washing jobs — most clients take the first fair
        quote they get. Run the numbers through the{" "}
        <a href="/calculators/pressure-washing-calculator">pressure washing calculator</a>,
        push it into the <a href="/quote">quote builder</a>, and text or email
        the link before you drive away. Same-day quotes close at roughly
        double the rate of next-day ones.
      </p>
    </GuideArticle>
  );
}
