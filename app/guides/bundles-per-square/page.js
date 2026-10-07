import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Many Bundles of Shingles Per Square?",
  description:
    "Bundles per roofing square: the standard count, the exceptions, and exactly how many bundles to order for your roof.",
  keywords: [
    "how many bundles of shingles per square",
    "bundles per square roofing",
    "how many bundles in a square of shingles",
  ],
  alternates: { canonical: "https://calcbid.com/guides/bundles-per-square" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How Many Bundles of Shingles Per Square? | CalcBid",
    description:
      "The standard bundle count, the exceptions, and the order math.",
    url: "https://calcbid.com/guides/bundles-per-square",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Bundles of Shingles Per Square? | CalcBid",
    description: "The standard bundle count, the exceptions, and the order math.",
  },
};

const faqs = [
  {
    q: "How many bundles of shingles do I need for 1,000 square feet?",
    a: "1,000 sq ft is 10 squares. At the standard 3 bundles per square, that\u2019s 30 bundles — plus 10–15% waste, so order 33–35 bundles. Always round up to the full bundle; suppliers don\u2019t split them.",
  },
  {
    q: "Why do some shingles come 4 bundles to a square?",
    a: "Some metric-sized shingles and designer/luxury lines are packaged lighter per bundle — 4 bundles to cover the same 100 sq ft. The wrapper always states the coverage per bundle, so check it before you do the order math. When in doubt, divide 100 by the bundle\u2019s stated coverage.",
  },
  {
    q: "How many bundles of ridge cap do I need?",
    a: "Measure your total ridge length in linear feet and divide by 30–35 (typical coverage per bundle of ridge cap shingles). A 60-foot ridge needs 2 bundles. Ridge cap is sold separately from field shingles — don\u2019t forget it on the order.",
  },
  {
    q: "How much does a bundle of shingles weigh?",
    a: "A standard bundle of architectural shingles weighs 60–80 lbs; 3-tab bundles run 50–65 lbs. That matters for delivery (roof loading) and for dumpster weight limits on tear-offs. Designer shingles can push 90+ lbs per bundle.",
  },
  {
    q: "Can I return extra bundles of shingles?",
    a: "Most suppliers accept returns of full, unopened bundles within 30 days — sometimes with a restocking fee. That\u2019s why rounding up is smart: a leftover bundle costs $35–$60 and doubles as future repair stock, while coming up short mid-job costs you a crew standing around.",
  },
  {
    q: "How many nails per square of shingles?",
    a: "Plan on roughly 320 nails per square for standard 4-nail application (about 2 coils of 120-nail strips per square with waste), or 400 per square for 6-nail high-wind zones. A 25-square roof needs 8,000–10,000 nails — order a full box more than the math says.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How Many Bundles of Shingles Per Square?"
      description="The short answer: 3 bundles per square for standard architectural shingles. Here's when that changes — and how many to actually order."
      slug="bundles-per-square"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Calculate your roof"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        One roofing square covers 100 square feet, and standard 3-tab and
        architectural (dimensional) shingles are packaged{" "}
        <strong>3 bundles to the square</strong>. So a 27-square roof needs
        81 bundles. That single ratio covers the vast majority of US
        residential roofs — but the exceptions, the waste factor, and the
        accessories are where ordering mistakes (and budget overruns) live.
      </p>
      <p>
        This guide covers the standard count, every common exception, the
        full order math including ridge cap and starter strip, and a quick
        reference table you can use on the supplier&apos;s lot.
      </p>

      <h2>The standard: 3 bundles per square</h2>
      <p>
        The 3-bundle standard exists because manufacturers size bundles so
        that three of them — at the specified exposure — cover exactly 100
        sq ft. It applies to 3-tab shingles and architectural/dimensional
        shingles from every major US manufacturer (GAF, Owens Corning,
        CertainTeed, TAMKO). A bundle of architectural shingles typically
        weighs 60–80 lbs and contains 21–33 shingles depending on the
        product.
      </p>

      <h2>When it&apos;s not 3: shingle types compared</h2>
      <table className="q-table">
        <thead>
          <tr><th>Shingle type</th><th>Bundles per square</th><th>Bundle weight</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>3-tab</td><td className="num">3</td><td>50–65 lbs</td><td>Cheapest; shorter lifespan, fading from new installs</td></tr>
          <tr><td>Architectural / dimensional</td><td className="num">3</td><td>60–80 lbs</td><td>The US standard — ~80% of residential re-roofs</td></tr>
          <tr><td>Metric / some designer lines</td><td className="num">4</td><td>45–60 lbs</td><td>Check the wrapper — coverage per bundle is printed on it</td></tr>
          <tr><td>Luxury / premium designer</td><td className="num">4–5</td><td>70–90+ lbs</td><td>Thicker profiles; verify coverage, never assume</td></tr>
          <tr><td>Ridge cap shingles</td><td className="num">—</td><td>~50 lbs</td><td>Sold separately; ~30–35 lin ft of ridge per bundle</td></tr>
          <tr><td>Starter strip</td><td className="num">—</td><td>~50 lbs</td><td>Sold separately; ~100–120 lin ft of eave per bundle</td></tr>
        </tbody>
      </table>
      <p>
        The rule that prevents every mistake on this page:{" "}
        <strong>the wrapper always states coverage</strong>. Before you do
        any math on an unfamiliar product, read the bundle. Divide 100 by
        the bundle&apos;s stated square-foot coverage and you have your
        bundles-per-square for that exact shingle.
      </p>

      <h2>The complete order math, step by step</h2>
      <h3>Step 1: Field shingles</h3>
      <p>
        Squares × bundles-per-square = base bundles. Then add waste:{" "}
        <strong>10%</strong> for a simple gable roof, <strong>15%</strong>{" "}
        for hips, valleys, and dormers. Cut-heavy roofs (lots of valleys,
        turrets, cricket flashing) can justify 17–20% — running short
        mid-job costs far more than two extra bundles.
      </p>
      <p>
        Example: a 25-square roof with a couple of valleys →
        25 × 3 = 75 bundles × 1.15 ≈ <strong>87 bundles</strong>.
      </p>
      <h3>Step 2: Ridge cap</h3>
      <p>
        Measure total ridge length (all hips and ridges) in linear feet and
        divide by 30–35. A 60-foot ridge needs 2 bundles. Order ridge cap in
        the matching color — it&apos;s the most visible shingle on the roof.
      </p>
      <h3>Step 3: Starter strip</h3>
      <p>
        Measure eaves and rakes: one bundle covers roughly 100–120 linear
        feet. A typical 25-square home has ~140 lin ft of eave/rake, so 2
        bundles of starter.
      </p>
      <h3>Step 4: Round everything up</h3>
      <p>
        Suppliers don&apos;t split bundles. Round each line item up to the
        full bundle — a leftover bundle is $35–$60 of cheap insurance and
        future repair stock in the exact dye lot.
      </p>

      <h2>Quick reference: bundles by roof size</h2>
      <table className="q-table">
        <thead>
          <tr><th>Roof size</th><th>Base bundles (×3)</th><th>+10% waste</th><th>+15% waste</th></tr>
        </thead>
        <tbody>
          <tr><td>20 squares</td><td className="num">60</td><td className="num">66</td><td className="num">69</td></tr>
          <tr><td>25 squares</td><td className="num">75</td><td className="num">83</td><td className="num">87</td></tr>
          <tr><td>30 squares</td><td className="num">90</td><td className="num">99</td><td className="num">104</td></tr>
          <tr><td>35 squares</td><td className="num">105</td><td className="num">116</td><td className="num">121</td></tr>
        </tbody>
      </table>
      <p>
        (Add ridge cap and starter strip separately — the table above is field
        shingles only.)
      </p>

      <h2>Don&apos;t forget the rest of the order</h2>
      <p>
        Shingle bundles are the headline, but an incomplete material order
        stalls the crew just as fast. For the same 25-square example, also
        order:
      </p>
      <ul>
        <li>
          <strong>Underlayment:</strong> synthetic underlayment covers ~10
          squares per roll → 3 rolls. Felt (#15) covers ~4 squares per roll
          → 7 rolls.
        </li>
        <li>
          <strong>Ice &amp; water shield:</strong> 2–3 ft past the interior
          wall line in cold climates — typically 2–4 rolls for eaves and
          valleys.
        </li>
        <li>
          <strong>Nails:</strong> ~320 per square (4-nail) or ~400 per
          square (6-nail high-wind) → 8,000–10,000 nails for 25 squares.
        </li>
        <li>
          <strong>Drip edge:</strong> eave + rake linear footage ÷ 10-ft
          sticks, plus 5% waste.
        </li>
        <li>
          <strong>Pipe boots, vents, flashing:</strong> count every
          penetration — the supplier run you avoid is the one you planned
          for.
        </li>
      </ul>

      <h2>Delivery and staging tips</h2>
      <ul>
        <li>
          <strong>Roof-load the bundles</strong> when you order — most
          suppliers will boom-load them onto the roof for a small fee.
          Eighty-seven bundles at 70 lbs is 6,000 lbs; carrying that up a
          ladder by hand is a young crew&apos;s game and an old crew&apos;s
          injury.
        </li>
        <li>
          <strong>Stage by slope:</strong> have the driver distribute
          bundles across ridges, not all on one slope — concentrated weight
          stresses trusses.
        </li>
        <li>
          <strong>Protect from weather:</strong> bundles left in rain absorb
          water and gain weight; keep the plastic wrap on until installation
          day.
        </li>
        <li>
          <strong>Confirm dye lots:</strong> check that all bundles share
          the same manufacturing lot code. Mixed lots can show visible color
          banding across a slope.
        </li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Assuming 3 bundles on a designer product.</strong> Luxury
          lines at 4–5 per square will leave you 25% short if you apply the
          standard ratio. Read the wrapper.
        </li>
        <li>
          <strong>Forgetting ridge cap and starter.</strong> They&apos;re
          separate SKUs, separate math, and the job can&apos;t finish
          without them.
        </li>
        <li>
          <strong>Skimping waste on cut-up roofs.</strong> Every valley is a
          diagonal cut that wastes half a shingle. 10% on a hip roof with
          dormers is how you end up paying Saturday delivery fees.
        </li>
        <li>
          <strong>Ordering exact count, no overage.</strong> Returns on
          unopened bundles (usually within 30 days) make over-ordering
          nearly free. Under-ordering is never free.
        </li>
      </ul>

      <p>
        One last ordering note: shingle prices typically rise once a year,
        usually in late winter or early spring, and suppliers honor quotes
        for 30 days. If you&apos;re bidding a job you won&apos;t start for
        two months, lock the material price with a deposit-backed order or
        build a 3–5% escalation allowance into the bid. And after major
        hailstorms, regional shortages are real — order the day the contract
        signs, not the week the crew shows up.
      </p>

      <p>
        <strong>Roofers:</strong> get the exact count for any roof in the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> —
        squares, bundles, tear-off, and labor in one pass, ready to{" "}
        <a href="/quote">quote</a>. Need the squares first? Start with the{" "}
        <a href="/guides/roofing-squares-chart">roofing squares chart</a>{" "}
        and the{" "}
        <a href="/guides/roof-pitch-multiplier-chart">roof pitch multiplier chart</a>,
        or price the whole job with our{" "}
        <a href="/guides/roof-replacement-cost-2026">2026 roof replacement cost guide</a>.
      </p>

      <h2>Tear-off math: layers, weight, and dumpsters</h2>
      <p>
        New shingles are only half the order on a re-roof. Tear-off debris
        runs roughly 250–400 lbs per square per layer — a 25-square roof
        with two layers generates 12,000–20,000 lbs of waste. That decides
        your dumpster:
      </p>
      <table className="q-table">
        <thead>
          <tr><th>Dumpster size</th><th>Typical capacity</th><th>Handles</th></tr>
        </thead>
        <tbody>
          <tr><td>10-yard</td><td className="num">~2 tons</td><td>Small repairs, partial tear-offs</td></tr>
          <tr><td>20-yard</td><td className="num">~4 tons</td><td>~25–30 squares, single layer</td></tr>
          <tr><td>30-yard</td><td className="num">~6 tons</td><td>Large or double-layer tear-offs</td></tr>
        </tbody>
      </table>
      <p>
        Two cost traps here: overweight fees ($50–$100+ per ton over the
        limit) and a second haul because you ordered too small. When the
        layer count is uncertain — common on older homes — quote the
        dumpster one size up and note &ldquo;additional layers billed at
        $X per square&rdquo; in the estimate. Discovering a third layer of
        shingles mid-job without a price for it is a classic margin killer.
      </p>

      <h2>Reading the bundle wrapper</h2>
      <p>
        Every bundle wrapper is a spec sheet. Before you finalize any
        order, confirm these five things printed on it:
      </p>
      <ul>
        <li><strong>Coverage per bundle</strong> in square feet — this is your bundles-per-square, no guessing.</li>
        <li><strong>Exposure</strong> — the inches of shingle left visible per course (typically 5–5⅝″ for architectural). Wrong exposure voids the warranty and changes coverage.</li>
        <li><strong>Nailing zone</strong> — marked on the shingle; high-wind 6-nail patterns go here, not wherever feels right.</li>
        <li><strong>Manufacturing lot code</strong> — match it across the whole order to avoid color banding.</li>
        <li><strong>Class rating</strong> — Class 3 or 4 impact resistance matters in hail country and can earn the homeowner an insurance discount.</li>
      </ul>

      <h2>Underlayment, ice shield &amp; accessories ordering</h2>
      <table className="q-table">
        <thead>
          <tr><th>Item</th><th>Coverage per unit</th><th>25-square order</th></tr>
        </thead>
        <tbody>
          <tr><td>Synthetic underlayment</td><td>~10 squares / roll</td><td className="num">3 rolls</td></tr>
          <tr><td>#15 felt (if used)</td><td>~4 squares / roll</td><td className="num">7 rolls</td></tr>
          <tr><td>Ice &amp; water shield</td><td>~2 squares / roll</td><td className="num">2–4 rolls (eaves + valleys)</td></tr>
          <tr><td>Drip edge (10-ft sticks)</td><td>10 lin ft / stick</td><td className="num">Eave + rake footage ÷ 10, +5%</td></tr>
          <tr><td>Nails (4-nail pattern)</td><td>~320 / square</td><td className="num">~8,000</td></tr>
          <tr><td>Nails (6-nail high-wind)</td><td>~400 / square</td><td className="num">~10,000</td></tr>
        </tbody>
      </table>

      <h2>Matching shingles for repairs</h2>
      <p>
        Not every shingle order is a full roof. For repairs, the math flips:
        you need the <em>same</em> shingle, not just the same count.
      </p>
      <ul>
        <li>
          <strong>Find the lot code first.</strong> Check leftover bundles
          in the garage or attic for the manufacturer and color name. A
          photo of the wrapper sent to your supplier beats any verbal
          description.
        </li>
        <li>
          <strong>Discontinued lines happen.</strong> Manufacturers retire
          colors every few years. If the exact shingle is gone, the honest
          options are: closest current match (warn the homeowner about
          visible difference), or a larger repair section that reads as
          intentional. Never promise an invisible patch you can&apos;t
          deliver.
        </li>
        <li>
          <strong>Weathering changes color.</strong> Even the right shingle
          in the right color looks different after five years of UV. Pull
          the replacement bundle from the least visible slope if
          you&apos;re robbing shingles from the roof itself.
        </li>
        <li>
          <strong>Minimum order reality.</strong> Suppliers sell by the
          bundle, not the shingle. A three-shingle repair still means buying
          (and billing for) a full bundle — price it as a service call with
          materials, typically $250–$500.
        </li>
      </ul>

      <h2>Warranty paperwork (don&apos;t skip it)</h2>
      <p>
        Manufacturer warranties — 25 years to lifetime on architectural
        shingles — only pay out if the installation followed the spec. That
        means: the right exposure, the right nailing pattern (6 nails in
        high-wind zones), matching manufacturer accessories (ridge cap,
        starter, underlayment) for enhanced warranties, and registration of
        the warranty after installation. Keep the bundle wrappers or at
        least photos of the lot codes with the job file. When a homeowner
        asks &ldquo;is this under warranty?&rdquo; in year 12, that folder
        is your answer.
      </p>

      <Faq items={faqs} heading="Shingle bundle questions, answered" />
    </GuideArticle>
  );
}
