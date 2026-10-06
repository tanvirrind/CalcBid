import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Bid a Concrete Slab Job (2026)",
  description:
    "How to bid concrete slab work: yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
  keywords: [
    "how to bid a concrete slab job",
    "how to quote concrete work",
    "concrete slab bidding",
    "how to estimate concrete",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-concrete-slab" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Concrete Slab Job | CalcBid",
    description:
      "Yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
    url: "https://calcbid.com/guides/how-to-bid-concrete-slab",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Concrete Slab Job | CalcBid",
    description: "Yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Bid a Concrete Slab Job"
      description="The concrete contractor's bidding walkthrough: get the yardage right, price the forming and finishing honestly, and never eat the site conditions."
      slug="how-to-bid-concrete-slab"
      calculatorHref="/calculators/concrete-drywall-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Step 1: Get the yardage right</h2>
      <p>
        Yards = (length × width × thickness in feet) ÷ 27. A 20×20 slab at
        4 inches: (20 × 20 × 0.33) ÷ 27 ≈ 5 yards. Order 5–10% over —
        coming up short mid-pour is the most expensive mistake in concrete.
        Pump fees ($500–$1,000) apply when the truck can&apos;t reach.
      </p>
      <h2>Step 2: Price the whole job, not just the mud</h2>
      <ul>
        <li><strong>Concrete:</strong> $140–$180/yard delivered (2026) — the part everyone remembers</li>
        <li><strong>Forming:</strong> $2–$4/sq ft — lumber, stakes, labor to set and strip</li>
        <li><strong>Base & rebar/wire:</strong> $1–$3/sq ft — gravel base, rebar or mesh</li>
        <li><strong>Finishing:</strong> $2–$4/sq ft — screed, float, broom or trowel finish</li>
      </ul>
      <p>
        All-in, flatwork bids land at <strong>$6–$12/sq ft</strong> in most
        US markets. If your number is under $6, you forgot something.
      </p>
      <h2>Step 3: Walk the site — then adjust</h2>
      <ul>
        <li><strong>Access:</strong> can the mixer reach, or is it wheelbarrow/pump work? (+$500–$1,500)</li>
        <li><strong>Grade:</strong> sloped sites need more forming and more mud than the math says.</li>
        <li><strong>Demo:</strong> removing old concrete runs $2–$4/sq ft — separate line, always.</li>
        <li><strong>Weather:</strong> hot-weather pours need retarders and bigger crews; cold needs blankets.</li>
      </ul>
      <h2>Step 4: Protect the bid in writing</h2>
      <p>
        State the thickness, PSI, finish type, and what&apos;s excluded
        (demo, permits, pump if access changes). Concrete has no undo button —
        the written scope is the only thing between you and a free re-pour.
      </p>
      <p>
        Run the yardage in the{" "}
        <a href="/calculators/concrete-drywall-calculator">concrete calculator</a>{" "}
        and build the itemized <a href="/quote">quote</a> before you leave the site.
      </p>
    </GuideArticle>
  );
}
