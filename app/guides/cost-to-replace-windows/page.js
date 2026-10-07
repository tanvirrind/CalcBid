import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

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

const faqs = [
  {
    q: "How long does it take to replace all the windows in a house?",
    a: "A two-person crew replaces 10–15 windows per day for standard retrofit installs — so a typical 10-window house is a one-day job, and a 20-window house takes two days. Full-frame replacements run slower (4–8 per day) because of the extra carpentry. Add a day for interior trim and paint touch-up if that's in your scope.",
  },
  {
    q: "Is it cheaper to replace all windows at once?",
    a: "Yes — contractors discount whole-house jobs 10–20% versus doing windows a few at a time. One mobilization, one dumpster, one permit, and efficient crew rhythm all cut the per-window cost. If the budget is tight, prioritize the worst offenders (leaking, broken seals, single-pane) and schedule the rest — but quote the whole house so the client sees the bundle price.",
  },
  {
    q: "What is the average cost to replace a window in 2026?",
    a: "The national average lands around $600–$900 per window installed, but the range is wide: $400–$800 for vinyl double-hung (the most common job), $700–$1,200 for fiberglass, and $900–$1,600 for wood/clad. Specialty shapes, bays, and full-frame installs push individual windows well past $2,000.",
  },
  {
    q: "Do new windows really lower energy bills?",
    a: "Replacing single-pane or failed double-pane windows with Energy Star models typically cuts heating and cooling costs 10–25% on the window portion of the bill — roughly $100–$400 a year for an average home. The payback is slow (10–20 years on energy alone), so sell comfort, noise reduction, and UV protection alongside the savings — that's what actually closes the sale.",
  },
  {
    q: "What does a window warranty actually cover?",
    a: "Two separate warranties: the manufacturer's (20 years to lifetime on frames and glass, often prorated, usually covering seal failure and defects) and the contractor's workmanship warranty (typically 1–5 years covering installation and air/water leaks). Read the exclusions — most manufacturer warranties are voided by improper installation, which is why the contractor's warranty matters more than the brochure suggests.",
  },
  {
    q: "Should I replace windows before selling my house?",
    a: "Only the visibly bad ones. Full window replacement returns roughly 60–70% of its cost at resale — it's a comfort and efficiency upgrade, not a flip investment. Replace fogged, broken, or painted-shut windows (buyers notice those immediately) and leave functioning older windows alone.",
  },
];

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
  fontSize: 16,
};
const thStyle = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "2px solid var(--ink)",
};
const tdStyle = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--line)",
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
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing 10 windows costs <strong>$5,000–$9,000</strong> in vinyl,{" "}
        <strong>$8,000–$14,000</strong> in fiberglass, and{" "}
        <strong>$12,000–$20,000+</strong> in wood/clad — installed, 2026 US
        pricing. Per window, expect $400–$800 (vinyl double-hung, the most
        common job in America), $700–$1,200 (fiberglass), and $900–$1,600
        (wood). The material is the single biggest lever — vinyl to wood
        roughly doubles the job — followed by retrofit vs. full-frame
        installation (+30–50%) and window style. Everything below breaks down
        where the money goes and how contractors should bid it.
      </p>

      <h2>Window replacement cost by type and material</h2>
      <p>
        Installed prices per window, 2026. Retrofit installation (new window
        in the existing frame) is the baseline; full-frame adds 30–50%.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Window type</th>
            <th style={thStyle}>Vinyl</th>
            <th style={thStyle}>Fiberglass</th>
            <th style={thStyle}>Wood / clad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Double-hung</td>
            <td style={tdStyle}>$400–$800</td>
            <td style={tdStyle}>$700–$1,200</td>
            <td style={tdStyle}>$900–$1,600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Single-hung</td>
            <td style={tdStyle}>$350–$700</td>
            <td style={tdStyle}>$600–$1,000</td>
            <td style={tdStyle}>$800–$1,400</td>
          </tr>
          <tr>
            <td style={tdStyle}>Casement</td>
            <td style={tdStyle}>$500–$950</td>
            <td style={tdStyle}>$800–$1,400</td>
            <td style={tdStyle}>$1,000–$1,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Slider</td>
            <td style={tdStyle}>$400–$750</td>
            <td style={tdStyle}>$650–$1,100</td>
            <td style={tdStyle}>$850–$1,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Picture / fixed</td>
            <td style={tdStyle}>$450–$900</td>
            <td style={tdStyle}>$750–$1,300</td>
            <td style={tdStyle}>$950–$1,700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bay / bow</td>
            <td style={tdStyle}>$1,500–$3,500</td>
            <td style={tdStyle}>$2,000–$4,500</td>
            <td style={tdStyle}>$2,500–$6,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Whole-house math: a 10-window vinyl job at $650/window is $6,500; the
        same house in fiberglass at $1,050/window is $10,500. Contractors who
        bid whole-house get 10–20% better per-window economics than
        one-at-a-time work — one mobilization, one dumpster, one permit —
        and should pass some of that through as a bundle incentive.
      </p>

      <h2>Frame materials compared</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Strengths</th>
            <th style={thStyle}>Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Vinyl</strong></td>
            <td style={tdStyle}>Cheapest, zero maintenance, good insulator</td>
            <td style={tdStyle}>Can warp in extreme heat, limited colors, bulkier frames</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Fiberglass</strong></td>
            <td style={tdStyle}>Strongest, paintable, minimal expansion, slim profiles</td>
            <td style={tdStyle}>35–60% more than vinyl; fewer style options</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Wood / clad</strong></td>
            <td style={tdStyle}>Premium look, excellent insulator, historic-match</td>
            <td style={tdStyle}>Priciest; exterior cladding still needs eventual attention</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Aluminum</strong></td>
            <td style={tdStyle}>Slim, strong, cheap — commercial favorite</td>
            <td style={tdStyle}>Poor insulator; condensation issues in cold climates</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Composite</strong></td>
            <td style={tdStyle}>Wood look without wood maintenance</td>
            <td style={tdStyle}>Premium pricing, smaller dealer networks</td>
          </tr>
        </tbody>
      </table>
      <p>
        For most US homes, the real decision is vinyl vs. fiberglass. Vinyl
        wins on price and is perfectly good for 20–30 years; fiberglass wins
        on strength, longevity (30–50 years), and resale perception. Wood is
        for historic homes and clients who specifically want it — never the
        default recommendation.
      </p>

      <h2>Retrofit vs. full-frame: the bid-defining choice</h2>
      <p>
        <strong>Retrofit (insert) replacement</strong> fits the new window
        into the existing frame. It&apos;s faster (30–60 minutes per window),
        cheaper, and right for roughly 70% of jobs — whenever the existing
        frames are square, solid, and rot-free. <strong>Full-frame
        replacement</strong> removes everything down to the studs: more
        carpentry, new interior/exterior trim, and the chance to fix rot, air
        leaks, and insulation gaps. It costs 30–50% more and takes 1–2 hours
        per window — but it&apos;s the only honest option when frames are
        damaged.
      </p>
      <p>
        Bid retrofit by default; sell full-frame where the inspection
        justifies it. The tell-tale signs: soft or discolored wood at the
        sill, visible daylight around the frame, or windows that have been
        painted shut for a decade. Photograph the evidence — &ldquo;your sills
        are rotted, here&apos;s the photo&rdquo; sells the upgrade better than
        any brochure.
      </p>

      <h2>Glass options worth quoting</h2>
      <ul>
        <li><strong>Double-pane Low-E with argon:</strong> the 2026 standard. Good efficiency, reasonable cost — the baseline for every bid.</li>
        <li><strong>Triple-pane:</strong> +$100–$200/window. Worth it in cold climates (Zone 5+) and for noise reduction near highways or airports.</li>
        <li><strong>Laminated glass:</strong> +$150–$300/window. Security, storm protection, and serious sound dampening — an easy upsell on ground-floor street-facing windows.</li>
        <li><strong>Tempered glass:</strong> required by code near doors, in bathrooms, and for large low windows. Know your local code — it&apos;s not optional where it applies.</li>
      </ul>
      <p>
        Federal tax credits and utility rebates for efficient windows change
        year to year — check energystar.gov and the client&apos;s utility
        before quoting, and put any rebate math on the bid as a separate line
        so the gross price stays honest.
      </p>

      <h2>Window energy ratings explained</h2>
      <p>
        Every window sold in the US carries an NFRC label with four numbers.
        Learn them — they&apos;re how you justify the upgrade from
        builder-grade to premium glass:
      </p>
      <ul>
        <li><strong>U-factor (0.20–1.20):</strong> how well the window insulates — <em>lower is better</em>. Double-pane Low-E runs ~0.30; triple-pane hits ~0.20. This is the headline number in cold climates.</li>
        <li><strong>SHGC — Solar Heat Gain Coefficient (0–1):</strong> how much solar heat passes through — lower blocks more heat. Low SHGC (~0.25) for hot climates and west-facing windows; higher SHGC (~0.40+) can help passive solar heating in cold climates on south-facing glass.</li>
        <li><strong>VT — Visible Transmittance (0–1):</strong> how much light comes through. Higher is brighter; Low-E coatings trade a little VT for efficiency. Clients who complain new windows feel &ldquo;dark&rdquo; are reacting to low VT — spec accordingly.</li>
        <li><strong>Air Leakage (≤0.30):</strong> how much air sneaks past the seals — lower is tighter. Casements and awnings (compression seals) beat sliders and double-hungs (sliding seals) here.</li>
      </ul>
      <p>
        Look for the <strong>Energy Star</strong> label matched to your climate
        zone — the requirements differ by region, and a window that qualifies
        in Texas may not in Minnesota. When a client asks &ldquo;are triple-pane
        worth it?&rdquo;, the honest answer is U-factor math: in Zone 6–7
        heating climates, yes; in mild Zone 2–3, the payback stretches past 20
        years and the money is better spent on air sealing.
      </p>

      <h2>What moves the bid (beyond material)</h2>
      <ul>
        <li><strong>Second story:</strong> ladder and staging time adds ~15–25% on labor. Mention it as a line, not a surprise.</li>
        <li><strong>Lead paint (pre-1978 homes):</strong> EPA RRP rules require certified procedures — containment, cleaning verification, documentation. Price it in ($100–$200/window); the fine for skipping it is $40,000+ per day.</li>
        <li><strong>Trim and casing:</strong> interior trim repair/replacement and exterior brickmould or cladding — often $75–$150/window and frequently forgotten in low bids.</li>
        <li><strong>Disposal:</strong> $25–$50 per old window if not included. Old windows are bulky; the dumpster isn&apos;t free.</li>
        <li><strong>Structural surprises:</strong> rot found during full-frame work. Bid an allowance, exactly like siding sheathing — never fixed blind.</li>
        <li><strong>Permits:</strong> required in many jurisdictions for full-frame; rarely for retrofit. Check locally.</li>
      </ul>

      <h2>For contractors: how to bid windows</h2>
      <p>
        Price per window, show material tiers side by side, and make disposal
        and trim visible lines — &ldquo;included&rdquo; gets forgotten,
        itemized gets respected. Walk every window (open it, check the sill,
        look for fog between panes indicating seal failure), photograph
        problems, and note which openings are retrofit vs. full-frame on the
        bid itself. Clients comparing three bids choose the one that proves
        the bidder actually looked.
      </p>
      <p>
        Two high-leverage moves: <strong>bundle the whole house</strong> with
        a visible 10–15% multi-window incentive, and <strong>pair with
        siding</strong> — windows and <a href="/guides/siding-cost-per-square-foot">siding</a> are
        frequently done together, and quoting both keeps the job with you
        instead of splitting it across contractors. Run the exact count through
        the <a href="/calculators/window-replacement-calculator">window calculator</a>{" "}
        and send the <a href="/quote">quote</a> the same day you measure.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <p>
        Not every bad window needs replacing. Repair wins when: the frame is
        solid and only the hardware or weatherstripping failed ($50–$200 per
        window), a single sash is damaged, or the glass is fogged but the
        client just needs a few more years — glass-only replacement runs
        $150–$400 per sash versus $600+ for the whole unit. Replace when:
        frames are rotted, seals have failed across most of the house, or
        single-pane windows are driving real energy costs. Saying
        &ldquo;you don&apos;t need new windows here&rdquo; on the two good
        ones is how you win the other eight.
      </p>
      <ul>
        <li><strong>Quoting without opening every window.</strong> Painted-shut, rotted, or fogged units change the scope — find them during the estimate, not the install.</li>
        <li><strong>Ignoring lead paint rules.</strong> Pre-1978 means RRP compliance. No exceptions, no shortcuts.</li>
        <li><strong>Burying disposal and trim.</strong> They&apos;re real costs; hiding them just makes your bid look padded when the client finds out.</li>
        <li><strong>Promising energy savings you can&apos;t quantify.</strong> &ldquo;Up to 25%&rdquo; on the window portion of the bill is honest; &ldquo;cut your bills in half&rdquo; is a lawsuit.</li>
        <li><strong>One-size-fits-all glass.</strong> Street-facing gets laminated, cold climate gets triple-pane — spec the glass to the orientation.</li>
        <li><strong>Skipping the final walkthrough.</strong> Open, close, and lock every window with the client present. Ten minutes prevents ten callbacks.</li>
      </ul>

      <Faq items={faqs} heading="Window replacement questions, answered" />
    </GuideArticle>
  );
}
