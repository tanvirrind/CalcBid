import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Roof Installation Cost (2026)",
  description:
    "Roof installation on new builds costs $4.50–$7.50/sq ft for architectural shingles in 2026 — no tear-off. New-build pricing, additions, garage roofs.",
  keywords: [
    "roof installation cost",
    "new roof installation cost",
    "cost to install a roof on new construction",
    "how much to install a roof",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roof-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Roof Installation Cost (2026) | CalcBid",
    description:
      "New-construction roof pricing by material, why it costs less than replacement, and how to bid additions and outbuildings.",
    url: "https://calcbid.com/guides/roof-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Installation Cost (2026) | CalcBid",
    description: "New-build roof pricing by material, why it beats replacement cost, and how to bid additions.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install a roof on a new house?",
    a: "In the 2026 US range, installing a roof on new construction costs roughly $4.50–$7.50 per square foot of roof for architectural shingles — $9,000–$15,000 on a typical 2,000 sq ft roof area. Metal runs $9–$16, clay or concrete tile $10–$20, and wood shake $7–$12 per sq ft installed. These numbers assume clean, new decking — which is what makes installation cheaper than replacement.",
  },
  {
    q: "Is installing a new roof cheaper than replacing one?",
    a: "Yes — typically 10–20% cheaper for the same material, because there's no tear-off. Tear-off and disposal of old roofing runs $1–$3 per square foot ($1,000–$3,000 on a typical home), plus any decking repair the old roof hid. A new build also skips the surprise decking allowance that replacement bids carry.",
  },
  {
    q: "How much does it cost to roof a garage or addition?",
    a: "Small roofs bid higher per square foot — minimums and setup don't shrink. A 400–600 sq ft garage or addition roof typically runs $4,000–$9,000 in architectural shingles ($7–$12 per sq ft effective), metal $7,000–$14,000. The per-square rate looks steep, but the total is what the homeowner compares.",
  },
  {
    q: "What does a roofer need before installing on new construction?",
    a: "Dry-in complete: the framing is done, roof decking (plywood or OSB) is installed and dry, and the building is weather-tight enough for underlayment. The roofer installs ice-and-water shield, underlayment, flashing, ventilation, and the roofing material — sequencing with the builder matters, since siding and gutters follow.",
  },
  {
    q: "How long does a new roof installation take?",
    a: "On new construction, a typical single-family roof takes 1–3 days for shingles once decking is ready — metal and tile take 3–7 days. Additions and garages usually finish in 1–2 days. Weather is the main schedule risk; roofers won't lay underlayment or shingles in rain, and high wind stops work on steep pitches.",
  },
  {
    q: "What warranty comes with a new roof installation?",
    a: "Two separate warranties: the manufacturer's material warranty (25–50 years for shingles, 40–70 for metal, longer for tile/slate) and the contractor's workmanship warranty (typically 2–10 years, covering installation defects). New construction sometimes routes the material warranty through the builder — get in writing whose name the manufacturer warranty is registered under.",
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
      title="Roof Installation Cost"
      description="What a first-time roof installation really costs — new builds, additions, garages and ADUs — and why it beats replacement pricing."
      slug="roof-installation-cost"
      updated="October 2026"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Estimate your roof"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Installing a roof on new construction costs{" "}
        <strong>$4.50–$7.50 per square foot</strong> for architectural
        shingles in the 2026 US range — a typical 2,000 sq ft roof area lands{" "}
        <strong>$9,000–$15,000</strong> installed. First, the distinction this
        guide exists for: <strong>installation</strong> means roofing a
        structure that never had one — a new build, an addition, a garage,
        an ADU. <strong>Replacement</strong> means tearing off an old roof
        and starting over, which adds $1–$3 per sq ft in tear-off and
        disposal plus decking-repair surprises. If you&apos;re re-roofing an
        existing house, use our{" "}
        <a href="/guides/roof-replacement-cost-2026">roof replacement cost
        guide</a> instead — same materials, different (higher) math.
        Here&apos;s the new-build pricing, what&apos;s bundled into it, and
        how additions and outbuildings bid differently.
      </p>

      <h2>2026 roof installation prices by material</h2>
      <p>
        Installed on new decking — underlayment, flashing, and ventilation
        included. No tear-off, no decking repair allowance, which is why these
        run below replacement quotes for the same material.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>Installed $/square</th>
            <th style={thStyle}>Lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>3-tab asphalt</td>
            <td style={tdStyle}>$3.50–$5.50</td>
            <td style={tdStyle}>$350–$550</td>
            <td style={tdStyle}>15–20 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Architectural asphalt</td>
            <td style={tdStyle}>$4.50–$7.50</td>
            <td style={tdStyle}>$450–$750</td>
            <td style={tdStyle}>25–30 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Metal (standing seam)</td>
            <td style={tdStyle}>$9–$16</td>
            <td style={tdStyle}>$900–$1,600</td>
            <td style={tdStyle}>40–70 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Clay / concrete tile</td>
            <td style={tdStyle}>$10–$20</td>
            <td style={tdStyle}>$1,000–$2,000</td>
            <td style={tdStyle}>50+ years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood shake</td>
            <td style={tdStyle}>$7–$12</td>
            <td style={tdStyle}>$700–$1,200</td>
            <td style={tdStyle}>20–30 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        On new construction these are the roofer&apos;s full scope: the{" "}
        <a href="/guides/roofing-squares-chart">squares math</a> for materials,{" "}
        <a href="/guides/roof-pitch-multiplier-chart">pitch-adjusted area</a>{" "}
        for the quote, underlayment and ice-and-water shield, flashing at
        every penetration, ridge vent or equivalent ventilation, and drip
        edge. What&apos;s NOT in the roofer&apos;s number on a new build: the
        decking itself (the builder/framer&apos;s scope) and gutters
        (usually a separate trade afterward).
      </p>

      <h2>Why installation costs less than replacement</h2>
      <p>
        The same crew, same shingles, same roof — replacement bids run
        10–20% higher because of what installation skips:
      </p>
      <ul>
        <li><strong>No tear-off and disposal.</strong> Stripping and hauling old roofing runs $1–$3 per sq ft — $1,000–$3,000 on a typical home — plus dumpster and dump fees.</li>
        <li><strong>No decking surprises.</strong> Replacement bids carry a decking-repair allowance because nobody knows what&apos;s under the old roof until it&apos;s off. New decking is known quantity.</li>
        <li><strong>No working around the old system.</strong> Flashing, vents, and penetrations are designed fresh instead of retrofitted into an existing assembly.</li>
        <li><strong>Better production conditions.</strong> The crew isn&apos;t working around landscaping protection, occupied-home logistics, or a homeowner&apos;s schedule — it&apos;s a construction site.</li>
      </ul>
      <p>
        If you&apos;re comparing a new-build roofing bid against a
        re-roof quote on another property, expect the replacement to be the
        higher number for identical materials — that gap is the tear-off and
        the risk allowance, and it&apos;s legitimate.
      </p>

      <h2>Additions, garages, and ADUs</h2>
      <p>
        Most roof installation work that isn&apos;t tract housing is
        additions and outbuildings — and they bid differently:
      </p>
      <ul>
        <li><strong>Small roofs carry minimums.</strong> A 400–600 sq ft garage roof runs $4,000–$9,000 in shingles — $7–$12 per sq ft effective. The per-square rate looks steep because mobilization, permits, and setup don&apos;t shrink; the total is what&apos;s being compared.</li>
        <li><strong>Tie-ins cost extra.</strong> An addition roof must integrate with the existing roof — valley flashing, step flashing into the old shingles, matching (or deliberately contrasting) materials. Budget 10–20% over a freestanding roof of the same size.</li>
        <li><strong>Structural check first.</strong> Clay and concrete tile weigh 800–1,200 lbs per square — an addition or garage framed for shingles needs an engineer&apos;s sign-off before tile goes on. Metal and shingles are usually fine on standard framing.</li>
        <li><strong>Permits are separate and real.</strong> Additions and detached structures need their own permits and inspections; the roofing bid should state whether permitting is included or owner-handled.</li>
      </ul>

      <h2>The new-build sequencing that protects the warranty</h2>
      <ol>
        <li><strong>Dry-in.</strong> Builder completes framing and decking; the building gets underlayment as weather protection. Roofing material doesn&apos;t go on until the structure is dried in and the decking is dry.</li>
        <li><strong>Underlayment and ice-and-water shield.</strong> Full coverage on low-slope areas, valleys, eaves, and penetrations — the actual waterproofing layer of a modern roof.</li>
        <li><strong>Flashing and ventilation.</strong> Step flashing, chimney/apron flashing, ridge vent or box vents. Ventilation is designed on new builds, not retrofitted — get the intake/exhaust balance in writing.</li>
        <li><strong>Roofing material.</strong> Shingles, panels, or tile per manufacturer spec — nailing pattern, exposure, and fastener type are warranty conditions, not suggestions.</li>
        <li><strong>Registration.</strong> The manufacturer material warranty gets registered — confirm whose name it&apos;s registered under (owner or builder) before final payment.</li>
      </ol>
      <p>
        Two warranties cover every new roof: the manufacturer&apos;s material
        warranty (25–50 years shingles, longer for metal/tile) and the
        contractor&apos;s workmanship warranty (2–10 years). On new
        construction, the workmanship warranty may flow through the general
        contractor — verify it in writing rather than assuming.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Comparing installation quotes to replacement quotes.</strong> They&apos;re different scopes. A new-build bid that "beats" a re-roof quote isn&apos;t a deal — it&apos;s missing the tear-off line.</li>
        <li><strong>Forgetting the decking is someone else&apos;s scope.</strong> On new builds the roofer quotes over finished decking. If the decking isn&apos;t ready, the schedule — and the price — moves.</li>
        <li><strong>Skipping ventilation design.</strong> New builds let you engineer intake and exhaust correctly. Retrofitting ventilation after the roof is done costs multiples of doing it now.</li>
        <li><strong>Unregistered material warranty.</strong> An unregistered warranty defaults to the minimum coverage tier. Register it, and confirm the registrant.</li>
        <li><strong>Tile on unengineered framing.</strong> Clay and concrete tile&apos;s weight needs structural verification on additions and garages. Shingles and metal don&apos;t — know which category you&apos;re in.</li>
        <li><strong>No written tie-in detail on additions.</strong> The valley where new meets old is the highest-leak-risk line on the roof. The bid should describe the flashing method, not just the square footage.</li>
      </ul>
      <p>
        Measure the roof planes in the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> —
        it handles pitch-adjusted squares — then turn the material takeoff
        into a clean, warrantied <a href="/quote">quote</a>.
      </p>

      <h2>Regional pricing for new-construction roofing</h2>
      <p>
        Where the house is built moves you within the $4.50–$7.50 per sq ft
        range for architectural shingles — and sometimes outside it. In
        production-builder markets across the Sun Belt, where subdivisions
        put dozens of similar roofs on the same street, roofing crews work
        from repeat plans, materials arrive in bulk, and there is almost no
        travel between jobs. Those efficiencies price new-construction
        shingles near the bottom of the range, and builders negotiate volume
        rates a one-off custom home will never see.
      </p>
      <p>
        Custom-build regions price differently. In high-cost metros in the
        Northeast and on the West Coast, and in mountain or coastal markets
        where experienced roofers are scarce, labor pushes bids toward — and
        for complex custom roofs, past — the top of the range. Availability
        matters as much as the rate: during a local building boom, a roofer
        who can start this month charges more than one booking two seasons
        out, and specialty materials widen the gap further. Standing seam
        metal at $9–$16 and tile at $10–$20 per sq ft depend on a small pool
        of specialist crews, so in regions without them, expect both higher
        prices and longer lead times. Get the bid for your market, not the
        national average, and ask whether the price assumes production or
        custom conditions.
      </p>

      <h2>Worked example: roofing a 1,800 sq ft new build</h2>
      <p>
        Take a single-story new build with a 1,800 sq ft footprint and a
        6/12 pitch. Applying the pitch multiplier gives roughly 2,012 sq ft
        of actual roof area — about 20 squares. Priced at the architectural
        shingle range above, the roof should land between $9,000 and
        $15,000; here is a mid-range bid at about $12,050, or $5.99 per sq ft
        of roof area:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Dry-in phase: synthetic underlayment + ice-and-water shield at eaves and valleys</td>
            <td style={tdStyle}>$1,900</td>
          </tr>
          <tr>
            <td style={tdStyle}>Architectural shingles, material and install labor (~20 squares)</td>
            <td style={tdStyle}>$8,100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Flashing and drip edge at every penetration and edge</td>
            <td style={tdStyle}>$950</td>
          </tr>
          <tr>
            <td style={tdStyle}>Ventilation: ridge vent plus intake, starter strip, and ridge cap</td>
            <td style={tdStyle}>$1,100</td>
          </tr>
        </tbody>
      </table>
      <p>
        Note what is not in that $12,050: the decking itself, which is the
        builder or framer&apos;s scope on a new build, and gutters, which are
        usually a separate trade afterward. If you are buying the home
        through a general contractor rather than hiring the roofer directly,
        expect the GC&apos;s markup to be applied on top of the roofing
        subcontractor&apos;s price — commonly in the 10–15% range for
        coordinating, scheduling, and warranting the work — which would put
        this roof at roughly $13,250–$13,850 in the contract price. That
        markup is not the roofer charging more; it is the cost of the GC
        standing behind the sequencing and the warranty. Either way, confirm
        before signing whose name the manufacturer warranty is registered
        under, exactly as the sequencing section above advises.
      </p>

      <Faq items={faqs} heading="Roof installation questions, answered" />
    </GuideArticle>
  );
}
