import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "How to Quote a Tile Installation Job",
  description:
    "How to quote tile jobs: measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
  keywords: [
    "how to quote a tile installation job",
    "how to bid tile work",
    "tile installation quote",
    "how much to charge for tile installation",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-tile-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Tile Installation Job | CalcBid",
    description:
      "Measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
    url: "https://calcbid.com/guides/how-to-quote-tile-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Tile Installation Job | CalcBid",
    description: "Measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How to Quote a Tile Installation Job"
      description="The tile contractor's quoting walkthrough: measure right, price the setting materials most bids forget, and protect your margin on the fiddly bits."
      slug="how-to-quote-tile-job"
      calculatorHref="/calculators/tile-flooring-calculator"
      calculatorLabel="Price the job"
    >
      <h2>Step 1: Measure like a setter, not a salesperson</h2>
      <p>
        Measure the actual tile area — not the room. Subtract vanities,
        tubs, and islands, then add 10% waste (15% for diagonal patterns or
        large-format tile). Under-ordering tile mid-job means a dye-lot
        mismatch the client will notice forever.
      </p>
      <h2>Step 2: Price labor per square foot — honestly</h2>
      <ul>
        <li><strong>Floor tile, straightforward:</strong> $5–$10/sq ft labor</li>
        <li><strong>Shower walls / tub surrounds:</strong> $10–$18/sq ft</li>
        <li><strong>Large-format or intricate patterns:</strong> $12–$25/sq ft</li>
      </ul>
      <p>
        Small bathrooms price higher per foot than big open floors — the
        cuts-per-square-foot is what drives your time, not the area.
      </p>
      <h2>Step 3: Itemize the setting materials</h2>
      <p>
        This is where tile bids die. Thinset, grout, backer board, membranes,
        and transitions add $2–$5/sq ft in materials alone. List them. When
        a client compares your $14/sq ft all-in bid against a $9/sq ft
        labor-only bid, the itemization is what saves you.
      </p>
      <h2>Step 4: Call out the extras upfront</h2>
      <ul>
        <li><strong>Demo & disposal:</strong> $1–$3/sq ft — separate line, always.</li>
        <li><strong>Subfloor prep / leveling:</strong> the #1 margin killer; inspect before quoting.</li>
        <li><strong>Niches, benches, curbs:</strong> price per feature ($150–$400 each), not per foot.</li>
        <li><strong>Sealing natural stone:</strong> add it or exclude it in writing.</li>
      </ul>
      <p>
        Run the material math in the{" "}
        <a href="/calculators/tile-flooring-calculator">tile calculator</a>{" "}
        and build the itemized <a href="/quote">quote</a> the same day you measure.
      </p>
    </GuideArticle>
  );
}
