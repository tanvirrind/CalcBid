import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Estimate a Roofing Job (2026)",
  description:
    "Estimate roofing jobs like a pro: measuring squares, pitch math, tear-off, decking allowances, and the line items that protect your margin.",
  keywords: [
    "how to estimate a roofing job",
    "how to bid a roofing job",
    "roofing estimate walkthrough",
    "how to quote a roof replacement",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-estimate-roofing-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Estimate a Roofing Job | CalcBid",
    description:
      "Measuring squares, pitch math, tear-off, decking allowances, and the line items that protect your margin.",
    url: "https://calcbid.com/guides/how-to-estimate-roofing-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Estimate a Roofing Job (Contractor Walkthrough) | CalcBid",
    description: "Measuring squares, pitch math, tear-off, decking allowances, and the line items that protect your margin.",
  },
};

const faqs = [
  {
    q: "How do you measure a roof for an estimate?",
    a: "Measure the footprint (length × width of each plane), then multiply by the pitch multiplier to get true roof area. Divide by 100 to get squares. Count penetrations (vents, chimneys, skylights), note the number of existing layers, check decking condition from the attic, and photograph everything. Never estimate a roof you haven't walked or measured — satellite views miss soft decking, flashing failures, and access problems.",
  },
  {
    q: "How many squares of shingles do I need for a 2,000 sq ft house?",
    a: "A 2,000 sq ft footprint with a typical 6/12 pitch has roughly 2,400 sq ft of roof area — 24 squares before waste. Add 10% waste for simple roofs or 15% for cut-up roofs with dormers and valleys: 27–28 squares total. Use our roofing squares chart for the full breakdown by home size and pitch.",
  },
  {
    q: "How much should I charge per square for roofing labor?",
    a: "Labor typically runs $150–$300 per square for asphalt shingle installation, depending on pitch, height, layers of tear-off, and your market. Steep roofs (8/12+) add 15–25%; two-story adds 10–15%. Price labor per square from your crew's actual production rate — a crew that installs 20 squares a day prices very differently from one that installs 12.",
  },
  {
    q: "Should I include a decking replacement allowance in my roofing estimate?",
    a: "Yes — always. You can't see the full deck until tear-off, so include a per-sheet replacement price ($50–$100 per 4×8 sheet installed) with an estimated quantity, and state that final count is determined at tear-off. This protects you from eating rotted decking and protects the client from surprise lump sums.",
  },
  {
    q: "How do I estimate a roof for an insurance claim?",
    a: "Insurance work uses the same takeoff, but document everything to Xactimate-level detail: photos of all damage, measurements of each slope, line items for every component (tear-off, underlayment, flashing, vents, ridge). Insurers pay per line item — vague lump sums get cut. Price at the carrier's prevailing rate for the market, not your retail rate, unless you're negotiating supplements.",
  },
  {
    q: "What's the biggest mistake contractors make when estimating roofs?",
    a: "Underestimating tear-off and disposal. Multiple layers, stapled shingles, and long carries to the dumpster turn a half-day tear-off into two days. Price tear-off per square per layer ($50–$100/square/layer), verify layer count with a test spot, and confirm dumpster placement and permit requirements before you bid.",
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
      title="How to Estimate a Roofing Job"
      description="The contractor's walkthrough: measure in squares, price every layer of the job, and stop donating tear-off labor."
      slug="how-to-estimate-roofing-job"
      updated="October 2026"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Estimate the roof"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        A roofing estimate has three parts: <strong>the measurement</strong>{" "}
        (squares, pitch, penetrations), <strong>the takeoff</strong> (tear-off,
        materials, flashing, vents, disposal), and{" "}
        <strong>the conditions</strong> (layers, decking, access, height).
        Miss any one and you&apos;re either too expensive to win or too cheap
        to survive. The walkthrough below prices a full replacement the way
        profitable roofers do — every layer of the job as its own line item.
      </p>

      <h2>Step 1: Measure in squares</h2>
      <p>
        Roofing is priced per <strong>square</strong> (100 sq ft). Measure
        each roof plane&apos;s footprint (length × width), multiply by the
        pitch multiplier for true area, and divide by 100:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Pitch</th>
            <th style={thStyle}>Multiplier</th>
            <th style={thStyle}>2,000 sq ft footprint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>4/12</td>
            <td style={tdStyle}>1.054</td>
            <td style={tdStyle}>21.1 squares</td>
          </tr>
          <tr>
            <td style={tdStyle}>6/12</td>
            <td style={tdStyle}>1.118</td>
            <td style={tdStyle}>22.4 squares</td>
          </tr>
          <tr>
            <td style={tdStyle}>8/12</td>
            <td style={tdStyle}>1.202</td>
            <td style={tdStyle}>24.0 squares</td>
          </tr>
          <tr>
            <td style={tdStyle}>10/12</td>
            <td style={tdStyle}>1.302</td>
            <td style={tdStyle}>26.0 squares</td>
          </tr>
          <tr>
            <td style={tdStyle}>12/12</td>
            <td style={tdStyle}>1.414</td>
            <td style={tdStyle}>28.3 squares</td>
          </tr>
        </tbody>
      </table>
      <p>
        Add <strong>10% waste</strong> for simple gable roofs,{" "}
        <strong>15%</strong> for cut-up roofs with dormers, valleys, and hips.
        Our <a href="/guides/roofing-squares-chart">roofing squares chart</a>{" "}
        and <a href="/guides/roof-pitch-multiplier-chart">pitch multiplier
        chart</a> cover every common size — and the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> runs
        the whole takeoff in one pass.
      </p>

      <h2>Step 2: Price the tear-off honestly</h2>
      <p>
        Tear-off is where estimates die. Check the layer count with a test
        spot at the eave — two layers of shingles is twice the tear-off labor
        and twice the dumpster weight:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tear-off item</th>
            <th style={thStyle}>Price range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Tear-off, per square per layer</td>
            <td style={tdStyle}>$50–$100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Disposal / dumpster, per square</td>
            <td style={tdStyle}>$25–$50</td>
          </tr>
          <tr>
            <td style={tdStyle}>Decking replacement, per 4×8 sheet</td>
            <td style={tdStyle}>$50–$100 installed</td>
          </tr>
        </tbody>
      </table>
      <p>
        Always include a <strong>decking allowance</strong> — 5–10 sheets on a
        typical home — priced per sheet with final count determined at
        tear-off. Rotted decking you discover mid-job is either a priced line
        item or a donation. There is no third option.
      </p>

      <h2>Step 3: Take off the materials</h2>
      <ul>
        <li><strong>Shingles:</strong> squares + waste. Three bundles per square for standard architectural shingles — see our <a href="/guides/bundles-per-square">bundles-per-square guide</a> for the exact counts.</li>
        <li><strong>Underlayment:</strong> synthetic underlayment for the field (~$0.15–$0.30/sq ft), ice-and-water shield in valleys and eaves in cold climates.</li>
        <li><strong>Flashing:</strong> step flashing, chimney flashing, pipe boots, drip edge, valley metal. Price per penetration — each chimney is $200–$500 in flashing labor and material.</li>
        <li><strong>Ventilation:</strong> ridge vent by the linear foot, plus intake (soffit) vents. Count existing vents and match or improve.</li>
        <li><strong>Ridge cap:</strong> linear feet of ridge ÷ coverage per bundle. Don&apos;t forget it — it&apos;s the most commonly missed line item.</li>
        <li><strong>Starter strip:</strong> linear feet of eaves and rakes.</li>
      </ul>

      <h2>Step 4: Price labor from production, not hope</h2>
      <p>
        Know your crew&apos;s daily square rate and work backward. A crew
        that installs 15 squares a day on a walkable 6/12 prices a 25-square
        roof at two days of labor. Adjust for reality:
      </p>
      <ul>
        <li><strong>Steep (8/12+):</strong> +15–25% labor — staging, safety, slower production.</li>
        <li><strong>Two-story:</strong> +10–15% — material handling and tear-off take longer.</li>
        <li><strong>Cut-up roof:</strong> +10–20% — valleys, dormers, and flashing eat time.</li>
        <li><strong>Long carry:</strong> dumpster 100 feet from the eave doubles cleanup labor. Walk it during the estimate.</li>
      </ul>

      <h2>Step 5: Add the forgotten line items</h2>
      <ul>
        <li><strong>Permits:</strong> $150–$500 in most jurisdictions. Some require mid-job inspections.</li>
        <li><strong>Satellite dish / solar:</strong> removal and reinstallation — coordinate with the provider or price it yourself.</li>
        <li><strong>Landscaping protection:</strong> tarps, plywood over plantings. One crushed $800 shrub wipes out a day&apos;s margin.</li>
        <li><strong>Magnetic nail sweep:</strong> non-negotiable, and worth naming on the quote — clients remember flat tires.</li>
        <li><strong>Warranty registration:</strong> manufacturer extended warranties require certified installation and registration. Name the warranty tier on the estimate.</li>
      </ul>

      <h2>Present it in tiers</h2>
      <p>
        Good/Better/Best pricing wins roofing jobs: a 25-year 3-tab or basic
        architectural option, a 30-year architectural with upgraded
        underlayment, and a premium designer or impact-resistant shingle with
        extended warranty. Roughly 60% of clients pick the middle tier — which
        is exactly where your best margin lives. Present all three on one
        page from the <a href="/quote">quote builder</a> and let the client
        self-select instead of negotiating you down.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Guessing the layer count.</strong> Pull a test shingle at the eave. Every hidden layer is a day of labor and a ton of disposal.</li>
        <li><strong>No decking allowance.</strong> The one roof in five with rotted decking will remind you why the line item exists.</li>
        <li><strong>Forgetting ridge cap and starter.</strong> Small lines, real money — and embarrassing to add later.</li>
        <li><strong>Pricing steep like walkable.</strong> An 8/12 roof is a different job than a 6/12. Price it like one.</li>
        <li><strong>Skipping the attic.</strong> Five minutes inside shows decking condition, ventilation, and leak history that the exterior hides.</li>
        <li><strong>Lump-sum insurance estimates.</strong> Carriers pay per line item. Itemize everything or watch the adjuster cut your vague total.</li>
      </ul>
      <p>
        Run the takeoff in the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a>, build
        the tiered estimate in <a href="/quote">CalcBid</a>, and send it from
        the driveway. Same-day estimates close at roughly double the rate of
        next-day ones — and nobody out-hustles a roofer who quotes before the
        ladder&apos;s back on the truck.
      </p>

      <h2>Fully worked estimate: a 24-square ranch re-roof</h2>
      <p>
        Take a one-story ranch with a 2,000 sq ft footprint and a walkable
        6/12 pitch. At the 1.118 multiplier from Step 1, true roof area is
        about 2,400 sq ft — <strong>24 squares</strong> before waste. One
        layer of shingles to tear off, one chimney, two pipe boots, and
        average access with the dumpster in the driveway. Here is the takeoff
        priced with the ranges in this guide, using mid-points so you can see
        the arithmetic:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Math</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Tear-off, 1 layer</td>
            <td style={tdStyle}>24 squares × $75/square</td>
            <td style={tdStyle}>$1,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Disposal / dumpster</td>
            <td style={tdStyle}>24 squares × $40/square</td>
            <td style={tdStyle}>$960</td>
          </tr>
          <tr>
            <td style={tdStyle}>Shingles, with waste</td>
            <td style={tdStyle}>24 squares + 10% waste = 27 squares ordered; 3 bundles/square = 81 bundles, plus ridge cap and starter strip</td>
            <td style={tdStyle}>$3,650</td>
          </tr>
          <tr>
            <td style={tdStyle}>Underlayment + ice-and-water shield</td>
            <td style={tdStyle}>2,400 sq ft synthetic field at $0.25/sq ft, plus ice-and-water at eaves and valleys</td>
            <td style={tdStyle}>$900</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drip edge, vents, pipe boots, flashing</td>
            <td style={tdStyle}>Drip edge on eaves and rakes, ridge vent, 2 pipe boots, 1 chimney flashing at $200–$500</td>
            <td style={tdStyle}>$850</td>
          </tr>
          <tr>
            <td style={tdStyle}>Decking allowance</td>
            <td style={tdStyle}>8 sheets × $75/sheet, final count at tear-off</td>
            <td style={tdStyle}>$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Install labor</td>
            <td style={tdStyle}>24 squares × $225/square</td>
            <td style={tdStyle}>$5,400</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permit</td>
            <td style={tdStyle}>Within the $150–$500 range in Step 5</td>
            <td style={tdStyle}>$300</td>
          </tr>
        </tbody>
      </table>
      <p>
        The crew math behind the labor line: at the production rate from
        Step 4 — about 15 squares a day on a walkable 6/12 — installation
        takes roughly 1.6 days, plus most of a day for tear-off and cleanup.
        A four-person crew over about two and a half days is roughly 80
        crew-hours on site, which is what the $225 per square has to cover
        along with staging, the magnetic nail sweep, and warranty
        registration. Subtotal for the lines above is $14,460. Add overhead
        and profit at a combined 15% — $2,170 — and the bid lands at{" "}
        <strong>about $16,600</strong>. Run the per-square check before you
        send it: $16,600 ÷ 24 squares is about $692 per square all-in for a
        tear-off and replacement. If your market will not support that
        number, adjust the tier you present — a basic architectural option
        in the Good tier — rather than quietly deleting the decking
        allowance or the disposal line, because those costs do not disappear
        when they leave the quote.
      </p>

      <h2>How regional labor markets move your bid</h2>
      <p>
        The $150–$300 per square labor range in the FAQ is wide because the
        market sets it. In high-cost metros and on the coasts, experienced
        crews price at or above the top of that range and book out weeks
        ahead; in rural markets with lower overhead, the same work often
        prices near the bottom. Neither number is wrong — quoting a rural
        rate in a metro loses money on every square, and quoting a metro
        rate two counties over loses the job.
      </p>
      <p>
        Storm markets break the range entirely. After a major hail or
        hurricane event, every roofer in the region is busy, tear-off crews
        and dumpsters get scarce, and material prices climb — bids that were
        competitive in spring can be below cost by fall. Re-price labor,
        disposal, and shingles on any estimate older than a few weeks in a
        storm market instead of honoring a stale takeoff. Finally, price
        distance honestly: work beyond your normal radius adds drive time
        that produces zero squares, and multi-day jobs can require lodging
        and meals for the crew. Put travel and lodging in as their own line
        items, the same way you itemize permits — a client can accept or
        decline a visible cost, but absorbed travel quietly turns a won bid
        into a break-even job.
      </p>

      <Faq items={faqs} heading="Roofing estimate questions, answered" />
    </GuideArticle>
  );
}
