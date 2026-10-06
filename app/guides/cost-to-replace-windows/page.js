import GuideArticle from "../../../components/GuideArticle";

export const metadata = {
  title: "Cost to Replace All Windows in a House (2026)",
  description:
    "What it costs to replace every window in a house in 2026: per-window prices by material, whole-house ranges, and what moves the bid.",
  keywords: [
    "cost to replace all windows in a house",
    "how much does it cost to replace windows",
    "whole house window replacement cost",
    "average cost to replace windows",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-replace-windows" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Replace All Windows in a House (2026) | CalcBid",
    description:
      "Per-window prices by material, whole-house ranges, and what moves the bid.",
    url: "https://calcbid.com/guides/cost-to-replace-windows",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Replace All Windows in a House (2026) | CalcBid",
    description: "Per-window prices by material, whole-house ranges, and what moves the bid.",
  },
};

export default function Guide() {
  return (
    <GuideArticle
      title="How Much Does It Cost to Replace All the Windows in a House?"
      description="2026 whole-house window replacement costs: what 10 windows really costs in vinyl vs. fiberglass vs. wood — and the line items that surprise homeowners."
      slug="cost-to-replace-windows"
      calculatorHref="/calculators/window-replacement-calculator"
      calculatorLabel="Price the job"
    >
      <h2>The short answer</h2>
      <p>
        Replacing 10 windows costs <strong>$5,000–$9,000</strong> in vinyl,{" "}
        <strong>$8,000–$14,000</strong> in fiberglass, and{" "}
        <strong>$12,000–$20,000+</strong> in wood/clad — installed, 2026 US
        pricing. Per window, expect $400–$800 (vinyl), $700–$1,200
        (fiberglass), $900–$1,600 (wood).
      </p>
      <h2>What moves the number</h2>
      <ul>
        <li><strong>Material:</strong> the single biggest lever — vinyl to wood roughly doubles the job.</li>
        <li><strong>Retrofit vs. full-frame:</strong> full-frame adds 30–50% but fixes rot and air leaks.</li>
        <li><strong>Window type:</strong> bays, bows, and large pictures cost 2–3× a standard double-hung.</li>
        <li><strong>Glazing upgrades:</strong> triple-pane and laminated glass add $100–$300 per window.</li>
        <li><strong>Second story:</strong> ladder and staging time adds ~15–25% on labor.</li>
      </ul>
      <h2>The line items homeowners forget</h2>
      <ul>
        <li>Interior/exterior trim and casing repair</li>
        <li>Disposal of old windows ($25–$50 each if not included)</li>
        <li>Lead-safe practices in pre-1978 homes (EPA RRP — price it in)</li>
        <li>Permit fees, where required</li>
      </ul>
      <h2>For contractors: how to bid it</h2>
      <p>
        Price per window, show the material tiers side by side, and always
        quote the disposal and trim work as visible lines — &ldquo;included&rdquo;
        gets forgotten, itemized gets respected. Run the exact count through
        the <a href="/calculators/window-replacement-calculator">window calculator</a>{" "}
        and send the <a href="/quote">quote</a> the same day you measure.
      </p>
    </GuideArticle>
  );
}
