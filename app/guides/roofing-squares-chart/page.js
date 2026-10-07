import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Squares of Shingles Do I Need? (Chart)",
  description:
    "Roofing squares chart by home size: find how many squares — and bundles — your roof needs, adjusted for pitch.",
  keywords: [
    "how many squares of shingles do i need",
    "roofing squares chart",
    "how many squares is my roof",
    "shingles needed chart",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roofing-squares-chart" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How Many Squares of Shingles Do I Need? (Chart) | CalcBid",
    description:
      "Roofing squares by home size, pitch-adjusted — plus the bundle math.",
    url: "https://calcbid.com/guides/roofing-squares-chart",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Squares of Shingles Do I Need? (Chart) | CalcBid",
    description: "Roofing squares by home size, pitch-adjusted — plus the bundle math.",
  },
};

const rows = [
  ["1,000", "12–14", "15–18", "36–54"],
  ["1,200", "14–17", "18–22", "54–66"],
  ["1,500", "18–21", "22–27", "66–81"],
  ["1,800", "21–25", "27–32", "81–96"],
  ["2,000", "24–28", "30–36", "90–108"],
  ["2,500", "30–35", "37–45", "111–135"],
  ["3,000", "36–42", "45–54", "135–162"],
];

const faqs = [
  {
    q: "How many bundles are in a roofing square?",
    a: "Three bundles per square for standard architectural shingles. Three-tab shingles also run 3 bundles per square; heavier designer shingles can run 4–5 bundles per square, so check the wrapper — bundle count per square is printed on every package.",
  },
  {
    q: "How many squares is a 1,500 sq ft house?",
    a: "Roughly 18–21 squares before waste, 22–27 with 10% waste factored in — but that's the footprint talking, not the roof. A steep pitch adds 20–40% more area, so measure or apply your pitch multiplier before ordering.",
  },
  {
    q: "How much ridge cap do I need?",
    a: "Measure your total ridge length in linear feet and divide by 30–35 — that's roughly how many bundles of ridge cap you need. A typical home has 40–60 feet of ridge, so 2 bundles covers most houses. Ridge cap is sold separately from field shingles.",
  },
  {
    q: "Do I add waste on top of the squares?",
    a: "Yes — 10% for simple gable roofs, 15% for hips, valleys, and dormers, up to 20% for very cut-up rooflines. The chart above shows a 'with 10% waste' column; bump it up for complex roofs. Running short mid-job means a second delivery and a possible dye-lot mismatch.",
  },
  {
    q: "How many nails per square of shingles?",
    a: "About 320 nails per square hand-nailed (4 nails per shingle, ~80 shingles per square). With a coil nailer, plan roughly 3 coils per square — coils hold 120 nails each. High-wind zones requiring 6 nails per shingle need about 50% more.",
  },
  {
    q: "What is a roofing square in square feet?",
    a: "Exactly 100 square feet of roof area. It's the industry's unit for materials and pricing — shingles are sold by the bundle (3 bundles = 1 square), and roofers quote installed price per square.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Squares of Shingles Do I Need?"
      description="One roofing square = 100 sq ft of roof. Find your home size below, adjust for pitch, and you've got your squares — and your bundle count."
      slug="roofing-squares-chart"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Measure your exact roof"
    >
      <p>
        One roofing square equals <strong>100 square feet of roof
        area</strong> — it&apos;s the unit the entire industry buys, sells,
        and quotes in. Standard architectural shingles come{" "}
        <strong>3 bundles per square</strong>. Find your home&apos;s footprint
        in the chart below, adjust for pitch, add waste, and you have your
        order quantity. The chart gets you close; the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> gets
        you exact.
      </p>
      <h2>Squares by home size</h2>
      <p>
        These ranges assume a typical gable or hip roof. The low end is a
        simple roof at a walkable pitch; the high end covers steeper pitches
        and more complex rooflines.
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Home size (sq ft)</th>
              <th style={{ padding: "10px 8px" }}>Roof squares</th>
              <th style={{ padding: "10px 8px" }}>With 10% waste</th>
              <th style={{ padding: "10px 8px" }}>Bundles to order</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} style={{ borderBottom: "1px solid var(--line)" }}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "10px 8px" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Adjusting for pitch</h2>
      <p>
        Roof area is always bigger than the home&apos;s footprint — pitch
        stretches it. Multiply the footprint-based number by your{" "}
        <a href="/guides/roof-pitch-multiplier-chart">pitch multiplier</a>: a
        6/12 roof adds ~12%, a 10/12 adds ~30%. That&apos;s the difference
        between ordering 27 squares and 35. Here&apos;s what that looks like
        on a 2,000 sq ft footprint:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>Multiplier</th>
              <th style={{ padding: "10px 8px" }}>True roof area</th>
              <th style={{ padding: "10px 8px" }}>Squares + 10% waste</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>4/12 (low)</td>
              <td style={{ padding: "10px 8px" }}>1.054</td>
              <td style={{ padding: "10px 8px" }}>2,108 sq ft</td>
              <td style={{ padding: "10px 8px" }}>~23</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>6/12 (medium)</td>
              <td style={{ padding: "10px 8px" }}>1.118</td>
              <td style={{ padding: "10px 8px" }}>2,236 sq ft</td>
              <td style={{ padding: "10px 8px" }}>~25</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>8/12 (steep)</td>
              <td style={{ padding: "10px 8px" }}>1.202</td>
              <td style={{ padding: "10px 8px" }}>2,404 sq ft</td>
              <td style={{ padding: "10px 8px" }}>~27</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>10/12 (very steep)</td>
              <td style={{ padding: "10px 8px" }}>1.302</td>
              <td style={{ padding: "10px 8px" }}>2,604 sq ft</td>
              <td style={{ padding: "10px 8px" }}>~29</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Waste factors by roof complexity</h2>
      <p>
        Waste isn&apos;t padding — it&apos;s the shingles consumed by cutting
        around hips, valleys, dormers, and rake edges. Underestimate it and
        you&apos;re paying for a second delivery (and risking a dye-lot
        mismatch on the last slope):
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Roof type</th>
              <th style={{ padding: "10px 8px" }}>Waste factor</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Simple gable, no dormers</td>
              <td style={{ padding: "10px 8px" }}>10%</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Hip roof</td>
              <td style={{ padding: "10px 8px" }}>15%</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Gable with dormers / valleys</td>
              <td style={{ padding: "10px 8px" }}>15%</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Cut-up roof, multiple facets</td>
              <td style={{ padding: "10px 8px" }}>15–20%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Don&apos;t forget the accessories</h2>
      <p>
        Squares cover the field shingles. Everything below is ordered
        separately, and forgetting any of them stalls the crew:
      </p>
      <ul>
        <li><strong>Ridge cap:</strong> about 1 bundle per 30–35 linear feet of ridge. A typical home needs 2 bundles.</li>
        <li><strong>Starter strip:</strong> one bundle covers roughly 100–120 linear feet of eave.</li>
        <li><strong>Underlayment:</strong> one roll of synthetic underlayment covers about 4 squares (1,000 sq ft per roll is common).</li>
        <li><strong>Ice and water shield:</strong> plan 1–2 rolls for eaves and valleys on most homes; more in cold climates.</li>
        <li><strong>Drip edge:</strong> measure all eaves and rakes in linear feet — 10-foot sticks, so round up.</li>
        <li><strong>Nails:</strong> ~320 per square hand-nailed; with a coil nailer, roughly 3 coils (120 nails each) per square. High-wind 6-nail patterns need ~50% more.</li>
        <li><strong>Pipe boots and flashing:</strong> count every penetration — plumbing vents, exhausts, chimney — and replace boots rather than reusing.</li>
      </ul>
      <h2>Ordering tips from the supply house</h2>
      <ul>
        <li><strong>Order all shingles at once, same dye lot.</strong> Bundles from different production runs can vary visibly. Check the lot codes on delivery.</li>
        <li><strong>Round up, not down.</strong> A leftover bundle or two is cheap insurance; a short order costs a delivery fee and a schedule slip.</li>
        <li><strong>Confirm delivery access.</strong> A 30-square order is ~90 bundles at 60–80 lbs each — over 3 tons. Make sure the boom truck can reach the roof.</li>
        <li><strong>Stage by slope.</strong> Have the supplier drop bundles near where they&apos;ll be installed — carrying 80-lb bundles across a roof wastes crew hours.</li>
      </ul>
      <h2>Costly measuring mistakes</h2>
      <ul>
        <li><strong>Measuring the footprint as the roof.</strong> The #1 error — always apply the pitch multiplier.</li>
        <li><strong>Forgetting the garage.</strong> Attached garages add footprint. Detached structures need their own count.</li>
        <li><strong>Ignoring overhangs.</strong> Eave overhangs add real area; most estimators fold 2–3% into waste rather than measuring each one.</li>
        <li><strong>Counting ridge cap in field squares.</strong> Ridge is separate product, separate math.</li>
      </ul>
      <p>
        For per-bundle material counts, see{" "}
        <a href="/guides/bundles-per-square">bundles per roofing square</a>;
        for what it all costs installed,{" "}
        <a href="/guides/roof-replacement-cost-2026">roof replacement cost in
        2026</a>.
      </p>
      <h2>Measuring a roof without climbing it</h2>
      <p>
        You don&apos;t need to walk the roof to measure it. Three reliable
        methods, in order of accuracy:
      </p>
      <ul>
        <li><strong>Ridge-to-eave + rake (best):</strong> from a ladder at the gable end, measure the rake length (ridge to eave along the slope) and the ridge length. One slope&apos;s area = rake × ridge; double it for both slopes. This captures the true sloped area directly — no multiplier needed.</li>
        <li><strong>Footprint + pitch (good):</strong> measure the house footprint from the ground (length × width, including the garage), apply the <a href="/guides/roof-pitch-multiplier-chart">pitch multiplier</a>, and add waste. Fast and accurate within a few percent.</li>
        <li><strong>Satellite measurement (decent):</strong> Google Earth&apos;s measuring tool on recent imagery gets the footprint within a couple of feet. Verify the pitch separately — imagery can&apos;t tell you that.</li>
      </ul>
      <h2>Squares by roof style</h2>
      <p>
        Style changes the waste factor and the accessory count more than the
        base area. For the same 2,000 sq ft footprint at 6/12 pitch (~25
        squares base):
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Roof style</th>
              <th style={{ padding: "10px 8px" }}>Waste</th>
              <th style={{ padding: "10px 8px" }}>Squares to order</th>
              <th style={{ padding: "10px 8px" }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Simple gable</td>
              <td style={{ padding: "10px 8px" }}>10%</td>
              <td style={{ padding: "10px 8px" }}>~28</td>
              <td style={{ padding: "10px 8px" }}>Two slopes, minimal cutting</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Hip roof</td>
              <td style={{ padding: "10px 8px" }}>15%</td>
              <td style={{ padding: "10px 8px" }}>~29</td>
              <td style={{ padding: "10px 8px" }}>Cuts on all four slopes; more ridge cap</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Gable + 2 dormers</td>
              <td style={{ padding: "10px 8px" }}>15%</td>
              <td style={{ padding: "10px 8px" }}>~29</td>
              <td style={{ padding: "10px 8px" }}>Valley metal + extra flashing per dormer</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Cut-up / multi-gable</td>
              <td style={{ padding: "10px 8px" }}>20%</td>
              <td style={{ padding: "10px 8px" }}>~30</td>
              <td style={{ padding: "10px 8px" }}>Valleys everywhere; longest install time</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Underlayment, drip edge, and ventilation quantities</h2>
      <p>
        The accessories have their own math — get these wrong and the crew
        stands around waiting for a supply-house run:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Item</th>
              <th style={{ padding: "10px 8px" }}>Coverage / unit</th>
              <th style={{ padding: "10px 8px" }}>For a 25-square roof</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Synthetic underlayment</td>
              <td style={{ padding: "10px 8px" }}>~10 squares per roll</td>
              <td style={{ padding: "10px 8px" }}>3 rolls</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Ice &amp; water shield</td>
              <td style={{ padding: "10px 8px" }}>~2 squares per roll</td>
              <td style={{ padding: "10px 8px" }}>2–4 rolls (eaves + valleys)</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Drip edge (10-ft sticks)</td>
              <td style={{ padding: "10px 8px" }}>10 lin ft per stick</td>
              <td style={{ padding: "10px 8px" }}>Measure all eaves + rakes, ÷ 10, round up</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Ridge vent (4-ft sections)</td>
              <td style={{ padding: "10px 8px" }}>4 lin ft per section</td>
              <td style={{ padding: "10px 8px" }}>Ridge length ÷ 4</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Coil nails</td>
              <td style={{ padding: "10px 8px" }}>120 nails per coil, ~3 coils/square</td>
              <td style={{ padding: "10px 8px" }}>~75 coils (4-nail pattern)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Tear-off: dumpster sizing</h2>
      <p>
        Old shingles are heavy — roughly 250 lbs per square per layer. A
        25-square tear-off of one layer is over 3 tons of debris:
      </p>
      <ul>
        <li><strong>Up to 15 squares, 1 layer:</strong> 10-yard dumpster usually suffices.</li>
        <li><strong>15–30 squares, 1 layer:</strong> 20-yard dumpster is the standard.</li>
        <li><strong>30+ squares or 2 layers:</strong> 30-yard dumpster, or two 20-yard swaps.</li>
      </ul>
      <p>
        Dumpster rental runs $400–$800 depending on market and rental length.
        Confirm the hauler&apos;s weight limit — shingle tear-off hits weight
        caps before volume caps, and overage fees are $75–$100 per ton.
      </p>
      <h2>What suppliers charge per square</h2>
      <p>
        Material cost per square varies wildly by product line — here&apos;s
        what the supply house charges in 2026 (materials only, before labor):
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Product</th>
              <th style={{ padding: "10px 8px" }}>$/square (materials)</th>
              <th style={{ padding: "10px 8px" }}>Bundles/square</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>3-tab (where still stocked)</td>
              <td style={{ padding: "10px 8px" }}>$90–$130</td>
              <td style={{ padding: "10px 8px" }}>3</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Architectural, builder grade</td>
              <td style={{ padding: "10px 8px" }}>$110–$150</td>
              <td style={{ padding: "10px 8px" }}>3</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Architectural, premium</td>
              <td style={{ padding: "10px 8px" }}>$150–$220</td>
              <td style={{ padding: "10px 8px" }}>3</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Designer / luxury asphalt</td>
              <td style={{ padding: "10px 8px" }}>$220–$350</td>
              <td style={{ padding: "10px 8px" }}>4–5</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Impact-rated (Class 4)</td>
              <td style={{ padding: "10px 8px" }}>$160–$240</td>
              <td style={{ padding: "10px 8px" }}>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Estimating for insurance scopes</h2>
      <p>
        Insurance work is estimated in Xactimate-style line items, not
        lump sums — and the adjuster&apos;s scope is a starting offer, not a
        final number. Common supplements roofers file:
      </p>
      <ul>
        <li><strong>Ridge vent replacement</strong> — often omitted from the initial scope.</li>
        <li><strong>Drip edge</strong> — code-required in most jurisdictions; adjusters sometimes &ldquo;forget&rdquo; it.</li>
        <li><strong>Decking</strong> — the adjuster can&apos;t see rot until tear-off; document every replaced sheet with photos.</li>
        <li><strong>Steep-slope charges</strong> — Xactimate has steep and high-roof surcharges; make sure they&apos;re applied on 8/12+ roofs.</li>
        <li><strong>Waste factor</strong> — carrier scopes sometimes use 10% on complex roofs that need 15%. Push back with photos of the hips and valleys.</li>
      </ul>
      <p>
        Photo-document everything before, during, and after. Supplements with
        photos get paid; supplements without them get argued.
      </p>
      <h2>Reading a supplier quote</h2>
      <p>
        Supply-house quotes list materials by the square with cryptic
        abbreviations. Here&apos;s how to read one:
      </p>
      <ul>
        <li><strong>Verify the square count first.</strong> If their squares don&apos;t match your takeoff within a square or two, find out why before discussing price — a &ldquo;cheap&rdquo; quote built on 25 squares when you need 29 isn&apos;t cheap.</li>
        <li><strong>Check the shingle line item.</strong> &ldquo;Architectural&rdquo; spans $110–$220/square in materials. The quote should name the manufacturer and product line, not just the category.</li>
        <li><strong>Look for the accessories.</strong> A materials quote with no underlayment, starter, ridge cap, or nails isn&apos;t complete — it&apos;s just the headline items.</li>
        <li><strong>Ask about price validity.</strong> Shingle prices move with petroleum costs; most quotes hold 30 days. Lock pricing when you sign the job, not when you start it.</li>
        <li><strong>Delivery fees.</strong> Boom-truck delivery is often free over a minimum order (commonly 15–20 squares); rooftop delivery to a difficult lot may carry a surcharge.</li>
      </ul>
      <h2>Delivery and staging logistics</h2>
      <p>
        Material handling is where jobs lose hours. Plan it before the truck
        arrives:
      </p>
      <ul>
        <li><strong>Boom it to the roof.</strong> Ground-dropped bundles mean hand-carrying 80-lb packages up a ladder all day. Rooftop delivery pays for itself in crew hours.</li>
        <li><strong>Stage by slope.</strong> Have the driver distribute bundles near where they&apos;ll be installed — ridge stacks for ridge work, eave stacks for starters.</li>
        <li><strong>Protect the landscaping.</strong> Tarps over beds and AC units before tear-off starts. A crushed condenser costs more than the whole dumpster.</li>
        <li><strong>Sequence the dumpster.</strong> On tear-off day the dumpster fills first — schedule the swap before the crew runs out of somewhere to throw debris.</li>
        <li><strong>Secure the site overnight.</strong> Staged materials walk away in some neighborhoods. A few hundred dollars of shingles is an easy target; lock the trailer and the leftover bundles.</li>
      </ul>
      <h2>Layout math: exposure, starter course, and chalk lines</h2>
      <p>
        Ordering the right squares is half the job; laying them out right is
        the other half. The numbers that matter on the roof:
      </p>
      <ul>
        <li><strong>Exposure:</strong> standard architectural shingles expose 5-5/8&quot; per course. Divide the rake length by the exposure to get the course count — a 14-foot rake needs about 30 courses.</li>
        <li><strong>Starter course:</strong> the first course at the eave is installed upside-down (or with dedicated starter strip) so the adhesive seals the bottom edge against wind uplift. Skipping it is the most common shortcut on cheap jobs — and the first thing to fail in a windstorm.</li>
        <li><strong>Chalk lines:</strong> snap horizontal lines every few courses to keep reveals straight, especially on long runs where drift compounds. A roof that&apos;s 1/4&quot; off at the eave is 2&quot; off at the ridge.</li>
        <li><strong>Valley method:</strong> closed-cut valleys use ~10% more shingle than woven; open metal valleys use less shingle but add the metal cost. Match the method to the estimate.</li>
        <li><strong>Ridge ventilation math:</strong> code typically requires 1 sq ft of net free ventilation per 150 sq ft of attic (1:300 with balanced soffit+ridge). A 25-square roof needs ~16–17 sq ft of total venting — the ridge vent sections in the table above plus matching soffit intake.</li>
      </ul>
      <JsonLd data={faqJsonLd(faqs)} />
      <Faq items={faqs} heading="Questions roofers actually ask about squares" />
    </GuideArticle>
  );
}
