import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Fence Staining Job (2026)",
  description:
    "How to bid fence staining: per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
  keywords: [
    "how to bid a fence staining job",
    "how to quote fence staining",
    "fence staining bid",
    "how much to charge to stain a fence",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-fence-staining-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Fence Staining Job | CalcBid",
    description:
      "Per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
    url: "https://calcbid.com/guides/how-to-bid-fence-staining-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Fence Staining Job | CalcBid",
    description: "Per-linear-foot pricing, stain math, and the upsells that turn a $600 job into a $1,200 one.",
  },
};

const faqs = [
  {
    q: "How much stain do I need per linear foot of fence?",
    a: "A quick rule: one gallon covers roughly 40–80 linear feet of a 6-foot fence (both sides), depending on the stain's coverage rating. At 250 sq ft per gallon, a 150-foot fence stained both sides needs about 8 gallons including waste. Always round up — running out mid-job means a visible lap line where the new batch starts.",
  },
  {
    q: "Should fence staining be quoted per linear foot or per square foot?",
    a: "Per linear foot for the client-facing quote — homeowners measure fences in feet and the number is instantly comparable. Do your internal math per square foot (stain coverage and labor both price that way), then convert. For a 6-foot fence, multiply your per-square-foot cost by 12 (6 ft height × 2 sides) to get the per-foot price.",
  },
  {
    q: "How long does it take to stain 150 feet of fence?",
    a: "A two-person crew sprays and back-brushes 150 linear feet (both sides) in 4–6 hours including setup, masking, and cleanup — assuming the fence is in decent shape. Add a half day for washing the day before (stain needs dry wood), and a full day if you're stripping old finish first.",
  },
  {
    q: "Can you stain a fence in cold or hot weather?",
    a: "Stain between 50°F and 90°F on dry wood with no rain for 24–48 hours after. Below 50°F most stains won't cure properly; above 90°F (or in direct midday sun) the stain flashes dry before it penetrates, leaving a blotchy film. Start on the shaded side in the morning and chase the shade around the yard.",
  },
  {
    q: "Do I need to pressure wash before staining a fence?",
    a: "Almost always, yes. Stain bonds to clean wood — dirt, mildew, and gray oxidation block penetration and the finish fails early. Wash 24–48 hours before staining so the wood dries to below ~15% moisture. Bid the wash as a separate $0.50–$1 per foot line item; it's real work with real chemical cost.",
  },
  {
    q: "Why did the stain peel off the fence I did last year?",
    a: "Peeling is almost always a prep or product failure: staining over a previous incompatible finish, staining dirty or damp wood, or using a film-forming solid stain on wood that needed a penetrating one. The fix is stripping back to bare wood and starting over — which is why the prep line item on your bid is the most important one.",
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
      title="How to Bid a Fence Staining Job"
      description="Price per linear foot, nail the stain math, and stack the upsells — fence staining is one of the highest-margin jobs in exterior work."
      slug="how-to-bid-fence-staining-job"
      calculatorHref="/calculators/fence-staining-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid fence staining <strong>per linear foot</strong> — clients measure
        fences in feet and the number is instantly comparable. The 2026 US
        range for a 6-foot fence, both sides, one coat:{" "}
        <strong>$3–$7 per linear foot</strong>. A 150-foot fence at $5/ft is a
        $750 job; one side only runs about 60% of the two-side price. Behind
        that simple number sits the real work: accurate stain math
        (area ÷ coverage + waste), reading the fence&apos;s condition before
        you price, and bidding prep as its own line item. Get those right and
        fence staining is one of the highest-margin jobs in exterior work —
        50–65% gross margins are normal.
      </p>

      <h2>2026 fence staining prices</h2>
      <p>
        Per-linear-foot pricing for a standard 6-foot privacy fence, one coat,
        both sides unless noted. Taller fences and second coats scale roughly
        with the added square footage.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Job</th>
            <th style={thStyle}>Per linear ft</th>
            <th style={thStyle}>150-ft fence total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Stain, one side, 6-ft fence</td>
            <td style={tdStyle}>$2–$4</td>
            <td style={tdStyle}>$300–$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stain, both sides, 6-ft fence</td>
            <td style={tdStyle}>$3–$7</td>
            <td style={tdStyle}>$450–$1,050</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stain, both sides, 8-ft fence</td>
            <td style={tdStyle}>$4–$9</td>
            <td style={tdStyle}>$600–$1,350</td>
          </tr>
          <tr>
            <td style={tdStyle}>Second coat (add-on)</td>
            <td style={tdStyle}>+$1.50–$3</td>
            <td style={tdStyle}>+$225–$450</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wash prep (add-on)</td>
            <td style={tdStyle}>+$0.50–$1</td>
            <td style={tdStyle}>+$75–$150</td>
          </tr>
          <tr>
            <td style={tdStyle}>Strip old finish (add-on)</td>
            <td style={tdStyle}>+$2–$4</td>
            <td style={tdStyle}>+$300–$600</td>
          </tr>
        </tbody>
      </table>
      <p>
        Labor is the bulk of the price — roughly $1.50–$3.50 per square foot of
        fence surface, with stain itself running $0.50–$1.00 per square foot.
        That labor-heavy mix is exactly why the margins are good: your costs
        are mostly time, and time gets faster with a sprayer and a system.
      </p>

      <h2>Do the stain math (don&apos;t guess)</h2>
      <p>
        Every bid starts with square footage:{" "}
        <strong>length × height × sides</strong>. A 150-foot × 6-foot fence,
        both sides = 1,800 sq ft. Divide by the stain&apos;s coverage rating —
        <strong>150–300 sq ft per gallon</strong>, printed on the can, not in
        your memory — and add 10% waste for overlap and touch-ups. At 250 sq
        ft/gal: 1,800 ÷ 250 = 7.2 gallons, × 1.1 = 8 gallons. At $45/gallon,
        that&apos;s $360 in stain. Know this number cold before you name a
        price, because it&apos;s the one cost you can&apos;t negotiate after
        the fact.
      </p>
      <p>
        Coverage varies by stain type, and the type changes both your material
        cost and your labor:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Stain type</th>
            <th style={thStyle}>Coverage</th>
            <th style={thStyle}>$/gal</th>
            <th style={thStyle}>Notes for bidding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Transparent / clear sealer</td>
            <td style={tdStyle}>250–350 sq ft</td>
            <td style={tdStyle}>$35–$50</td>
            <td style={tdStyle}>One coat, fastest application; shows wood grain</td>
          </tr>
          <tr>
            <td style={tdStyle}>Semi-transparent</td>
            <td style={tdStyle}>200–300 sq ft</td>
            <td style={tdStyle}>$40–$60</td>
            <td style={tdStyle}>The sweet spot — color + grain, 2–3 yr life</td>
          </tr>
          <tr>
            <td style={tdStyle}>Solid / opaque stain</td>
            <td style={tdStyle}>150–250 sq ft</td>
            <td style={tdStyle}>$40–$60</td>
            <td style={tdStyle}>Covers gray wood; often needs 2 coats</td>
          </tr>
        </tbody>
      </table>
      <p>
        Oil-based vs. water-based matters for your process, not just the
        price. Oil penetrates deeper and is more forgiving on weathered wood,
        but cleanup needs mineral spirits and dry times run 24–48 hours.
        Water-based dries in 4–6 hours (faster job turnaround), cleans up with
        soap and water, and is required in some low-VOC jurisdictions — check
        local rules before you stock up. Never apply oil over water-based
        (or vice versa) without stripping; incompatible layers are the #1
        cause of peeling callbacks.
      </p>

      <h2>Read the fence before you bid</h2>
      <p>
        Walk the entire fence line before naming a number. The condition sets
        your prep scope, and prep is where bids are won or lost:
      </p>
      <ul>
        <li><strong>New cedar or pressure-treated (under a year):</strong> easiest money. One coat, fast application, minimal prep. Bid confidently at the low end of your range.</li>
        <li><strong>Gray and weathered:</strong> oxidized wood drinks stain — budget 20–30% extra material, or price a solid stain that covers the gray. Two thin coats beat one heavy one.</li>
        <li><strong>Green with mildew:</strong> add a wash step ($0.50–$1/ft) with a mildewcide detergent. Staining over mildew seals it in and guarantees a callback within a year.</li>
        <li><strong>Peeling or flaking old stain:</strong> this is a strip job. Chemical stripper or sanding can double the labor — bid it as a separate $2–$4/ft line item, never buried in the stain price.</li>
        <li><strong>Damaged pickets or leaning posts:</strong> flag repairs before staining. Replacing a few pickets ($5–$15 each installed) or resetting a post is easy upsell revenue and the stain looks twice as good.</li>
      </ul>
      <p>
        Moisture-check the wood if you can — a $30 pin meter pays for itself
        the first time it stops you staining damp wood. Stain needs wood below
        roughly 15% moisture content; after rain or washing, give it 24–48
        hours of dry weather.
      </p>

      <h2>Application method: spray, brush, or both</h2>
      <p>
        <strong>Spray then back-brush</strong> is the professional standard and
        what your labor rate should assume. Spraying alone is fast but leaves
        a thin, uneven film that fails early; brushing alone gives great
        penetration but takes 2–3× longer. The combo — spray a section, then
        immediately work it in with a brush — pushes stain into the grain,
        evens out lap marks, and hits the labor productivity your bid was
        priced on. A two-person crew (one spraying, one back-brushing) does
        150 linear feet, both sides, in 4–6 hours.
      </p>
      <p>
        Mask or shield everything adjacent: house siding, concrete, plants.
        Overspray on a neighbor&apos;s white fence is a relationship problem
        and a repaint bill. Cardboard shields are cheap; apologies are
        expensive.
      </p>

      <h2>Stain gallons by fence size (quick reference)</h2>
      <p>
        For semi-transparent stain at 250 sq ft per gallon, both sides, one
        coat, including 10% waste:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fence length</th>
            <th style={thStyle}>4-ft fence</th>
            <th style={thStyle}>6-ft fence</th>
            <th style={thStyle}>8-ft fence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>100 linear ft</td>
            <td style={tdStyle}>4 gal</td>
            <td style={tdStyle}>6 gal</td>
            <td style={tdStyle}>8 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>150 linear ft</td>
            <td style={tdStyle}>6 gal</td>
            <td style={tdStyle}>8 gal</td>
            <td style={tdStyle}>11 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>200 linear ft</td>
            <td style={tdStyle}>8 gal</td>
            <td style={tdStyle}>11 gal</td>
            <td style={tdStyle}>15 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>300 linear ft</td>
            <td style={tdStyle}>11 gal</td>
            <td style={tdStyle}>16 gal</td>
            <td style={tdStyle}>22 gal</td>
          </tr>
        </tbody>
      </table>
      <p>
        Halve the numbers for one side only; add ~50% for solid stains at 175
        sq ft/gal coverage. Buy all gallons at once — stain tint varies
        slightly between batches, and a mid-fence color shift is visible in
        raking light. If you must buy more mid-job, box (mix) the old and new
        gallons together in a 5-gallon bucket before continuing.
      </p>

      <h2>Stack the upsells</h2>
      <ul>
        <li><strong>Both sides</strong> when they asked for one (+40%) — the neighbor&apos;s side sells itself once you mention curb appeal and HOA letters.</li>
        <li><strong>Wash prep</strong> as its own line — real work, real chemical cost, and it&apos;s the difference between a 2-year and a 4-year finish. See our <a href="/guides/how-to-quote-pressure-washing-job">pressure washing quoting guide</a> for the method.</li>
        <li><strong>Gate hardware</strong> — hinges and latches while you&apos;re there. $25–$60 in parts, quick install, high perceived value.</li>
        <li><strong>Deck staining</strong> — same crew, same stain, same trip. The <a href="/calculators/deck-fence-calculator">deck & fence calculator</a> prices the materials.</li>
        <li><strong>Maintenance plan:</strong> restain every 2–4 years, booked now at a small discount. This is the real money — every finished job is a future job you&apos;ve already won if you write the date down.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Guessing coverage.</strong> &ldquo;About 5 gallons&rdquo; on an 1,800 sq ft fence is a mid-job supply run and a visible lap line. Do the math.</li>
        <li><strong>Burying prep in the stain price.</strong> When the fence needs stripping, the job is two jobs. Bid two lines.</li>
        <li><strong>Staining damp wood.</strong> Blistering and peeling within months — and it&apos;s your warranty call.</li>
        <li><strong>Spraying without back-brushing.</strong> Faster today, callback in 18 months.</li>
        <li><strong>Forgetting the weather window.</strong> Stain between 50°F and 90°F, no rain 24–48 hours after. A rained-on fresh coat is a re-do on your dime.</li>
        <li><strong>No maintenance follow-up.</strong> The cheapest marketing in the business is a calendar reminder. Fences need restaining every 2–4 years — be the one who calls.</li>
      </ul>
      <p>
        Run the exact numbers in the{" "}
        <a href="/calculators/fence-staining-calculator">fence staining calculator</a>,
        push them into a <a href="/quote">quote</a>, and fire it off from the
        driveway. Same-day quotes close at roughly double the rate of
        next-day ones.
      </p>
      <p>
        One last check before you quote: HOA rules. Many HOAs restrict stain
        colors to a pre-approved palette, and some require an application
        before exterior work begins. A five-minute question during the
        walkthrough — &ldquo;any HOA color restrictions I should know
        about?&rdquo; — prevents the nightmare of staining a fence the HOA
        then orders repainted.
      </p>

      <Faq items={faqs} heading="Fence staining questions, answered" />
    </GuideArticle>
  );
}
