import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Wallpaper Job (2026)",
  description:
    "How to quote wallpaper installation: per-roll and per-sq-ft pricing, pattern-repeat math, prep line items, and 2026 US price ranges.",
  keywords: [
    "how to quote a wallpaper installation job",
    "how to bid wallpaper installation",
    "wallpaper installation pricing",
    "how much to charge to hang wallpaper",
    "wallpaper estimate template",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-a-wallpaper-installation-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Wallpaper Job (2026) | CalcBid",
    description:
      "Per-roll and per-sq-ft pricing, pattern-repeat math, prep line items, and 2026 US price ranges.",
    url: "https://calcbid.com/guides/how-to-quote-a-wallpaper-installation-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Wallpaper Job (2026) | CalcBid",
    description: "Per-roll and per-sq-ft pricing, pattern-repeat math, prep line items, and 2026 US ranges.",
  },
};

const faqs = [
  {
    q: "Should I quote wallpaper per roll or per square foot?",
    a: "Per roll for residential clients — homeowners think in rolls, and the number is instantly comparable across bids. Per square foot for commercial work, multi-room jobs, and anything where you're comparing across different roll sizes. Do the math both ways internally (they should reconcile), then present the one your client understands.",
  },
  {
    q: "How do I calculate how many rolls to order with a pattern repeat?",
    a: "Use the drop formula: strips per roll = floor((roll length minus pattern repeat) divided by wall height); strips needed = ceiling(total wall width divided by roll width); rolls = ceiling(strips needed divided by strips per roll). Then add at least 15% waste. A large repeat eats strips fast — a 12-inch repeat on a 9-foot wall can cost you an entire drop per roll.",
  },
  {
    q: "How much should I charge to remove old wallpaper?",
    a: "Bid removal as its own line item at $1.50–$6 per square foot in the 2026 US range. The low end is single-layer paper over primed drywall that strips dry; the high end is multiple layers, paper painted over, or removal that tears the drywall face and needs skim coating after. Never guess — test a corner during the walkthrough.",
  },
  {
    q: "How long does it take to wallpaper a 12x12 room?",
    a: "One installer typically hangs a standard 12x12 room in one to two days including prep and setup, with accent walls done in half a day. Budget the second day for grasscloth, fabric-backed papers, large repeats, or walls that need skim coating first. At $600–$1,200 in labor for a full room, the day rate should be one of your highest — wallpaper demands a specialist's eye.",
  },
  {
    q: "Why does grasscloth cost more to install than vinyl?",
    a: "Grasscloth has no pattern to hide behind — every seam is visible, the fibers vary panel to panel, and pasting mistakes show as sheen differences. It demands slower, more careful hanging and often a paste-the-wall technique. That's why installed pricing jumps to $5.50–$8 per square foot versus $3–$6 for standard paper. Order all bolts from the same dye lot or the color shift will be your callback.",
  },
  {
    q: "Should I mark up wallpaper materials, or pass through the cost?",
    a: "Mark them up 15–25%. You're doing real work on the material side: ordering the right dye lot, hauling and storing rolls, eating the waste factor, and warranting the result. Contractors who pass paper through at cost end up working for free when a bolt is wrong and has to be reordered. Put the markup on the bid as a materials line — it's standard and clients expect it.",
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
      title="How to Quote a Wallpaper Installation Job"
      description="Price per roll or per square foot, get the pattern-repeat math right, and stop losing money on prep — the full wallpaper bidding playbook."
      slug="how-to-quote-a-wallpaper-installation-job"
      updated="October 2026"
      calculatorHref="/calculators/wallpaper-calculator"
      calculatorLabel="Wallpaper Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quote wallpaper <strong>per roll or per square foot</strong> — per roll
        for homeowners who think in rolls, per square foot for commercial and
        multi-room work. The 2026 US range for labor:{" "}
        <strong>$25–$35 per single roll</strong> and{" "}
        <strong>$30–$50 per double roll</strong> (cut, paste, hang), or{" "}
        <strong>$1–$7 per square foot</strong> of wall depending on
        complexity. All-in installed, standard paper runs{" "}
        <strong>$3–$6/sq ft</strong>; specialty materials — grasscloth,
        fabric-backed, large repeats — run{" "}
        <strong>$5.50–$8/sq ft installed</strong>, with premium and specialty
        fabrics reaching <strong>$5–$10 and $7–$12</strong>. An accent wall
        books <strong>$350–$700 flat</strong>; a full 12×12 room is{" "}
        <strong>$600–$1,200 in labor plus materials</strong>. Prep and removal
        are separate line items at <strong>$1.50–$6/sq ft</strong>. Nail the
        pattern-repeat math, charge for prep, and wallpaper is one of the
        highest-skill, best-margin finishes your crew can sell.
      </p>

      <h2>2026 wallpaper installation prices</h2>
      <p>
        Labor and installed pricing, 2026 US range. Materials are marked up
        15–25% on top of your purchase cost — never passed through at cost.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Job</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Labor per single roll</td>
            <td style={tdStyle}>$25–$35</td>
            <td style={tdStyle}>Cut, paste, hang; standard paper</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor per double roll</td>
            <td style={tdStyle}>$30–$50</td>
            <td style={tdStyle}>Cut, paste, hang; standard paper</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor per square foot</td>
            <td style={tdStyle}>$1–$7</td>
            <td style={tdStyle}>Depends on complexity and material</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full installed, standard paper</td>
            <td style={tdStyle}>$3–$6/sq ft</td>
            <td style={tdStyle}>Materials + labor, typical residential</td>
          </tr>
          <tr>
            <td style={tdStyle}>Installed, specialty (grasscloth, fabric-backed, large repeats)</td>
            <td style={tdStyle}>$5.50–$8/sq ft</td>
            <td style={tdStyle}>Slower hang, seam-critical work</td>
          </tr>
          <tr>
            <td style={tdStyle}>Installed, premium papers</td>
            <td style={tdStyle}>$5–$10/sq ft</td>
            <td style={tdStyle}>High-end prints, murals</td>
          </tr>
          <tr>
            <td style={tdStyle}>Installed, specialty fabrics</td>
            <td style={tdStyle}>$7–$12/sq ft</td>
            <td style={tdStyle}>Silk, hand-painted, commissioned</td>
          </tr>
          <tr>
            <td style={tdStyle}>Accent wall (flat rate)</td>
            <td style={tdStyle}>$350–$700</td>
            <td style={tdStyle}>Single wall, standard paper, includes prep allowance</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full 12×12 room</td>
            <td style={tdStyle}>$600–$1,200 labor + materials</td>
            <td style={tdStyle}>Four walls, 8–9 ft ceilings, standard paper</td>
          </tr>
          <tr>
            <td style={tdStyle}>Removal and prep</td>
            <td style={tdStyle}>$1.50–$6/sq ft</td>
            <td style={tdStyle}>Strip, repair, skim, prime — always a separate line</td>
          </tr>
        </tbody>
      </table>
      <p>
        The labor band is wide because the work is wide: hanging
        paste-the-wall non-woven on a straight 8-foot wall is a different job
        from hanging a 24-inch-repeat grasscloth on a stairwell. Price the
        paper in front of you, not a national average — but let the ranges
        above anchor your estimate so nothing falls through the floor.
      </p>

      <h2>Per roll vs. per square foot: choose deliberately</h2>
      <p>
        <strong>Quote per roll</strong> when the client is a homeowner buying
        rolls off a shelf. They&apos;ve already done the &ldquo;how many
        rolls&rdquo; math in their head, and a per-roll number lets them
        compare your bid to a competitor&apos;s in five seconds. Your
        internal math still runs per square foot — coverage, labor rate, waste
        — then converts.{" "}
        <strong>Quote per square foot</strong> for commercial jobs,
        multi-room projects, hallways, and stairwells, where roll counts get
        confusing and the client wants one number for a big surface.
      </p>
      <p>
        The two must reconcile. If your per-roll quote works out to $4/sq ft
        installed but your per-sq-ft sheet says $6 for the same paper, one of
        them is wrong — usually the per-roll number is undercounting waste
        on pattern repeats. Build both, compare, and present the one that
        fits the client. And always state which roll size your per-roll
        price assumes: a $30 single-roll price and a $50 double-roll price
        are different bids.
      </p>

      <h2>Roll-count math with pattern repeat (step by step)</h2>
      <p>
        Short-counting rolls is the classic wallpaper margin killer: the
        paper is special-ordered, dye lots change, and a mid-job reorder
        costs you days. Do it by drops, not by area:
      </p>
      <ol>
        <li>
          <strong>Know your roll.</strong> A standard US single roll is about
          20.5 inches wide × 33 feet long (roughly 28 sq ft per roll); a
          double roll is about 68 feet (roughly 56 sq ft). European rolls run
          wider and shorter — read the bolt, don&apos;t assume.
        </li>
        <li>
          <strong>Drops per roll.</strong> Strips per roll = floor((roll
          length − pattern repeat) ÷ wall height). A 33-foot roll on a
          9-foot wall with no repeat gives 3 drops; with a 12-inch repeat
          it gives 2. That one number is where repeats bite.
        </li>
        <li>
          <strong>Drops needed.</strong> Strips needed = ceil(total wall
          width ÷ roll width). Measure every wall, subtract nothing for
          doors and windows under ~25 sq ft — the offcuts don&apos;t cover
          the waste they create.
        </li>
        <li>
          <strong>Rolls = ceil(drops needed ÷ drops per roll)</strong>, then
          add at least <strong>15% waste</strong> — more for large repeats,
          stairwells, and rooms with lots of openings.
        </li>
      </ol>
      <p>
        Worked example: a 12×12 room with 9-foot walls and a paper with a
        12-inch repeat. Perimeter is 48 feet = 576 inches; ÷ 20.5 =
        29 drops needed. Roll length 396 inches − 12-inch repeat = 384;
        ÷ 108-inch wall height = 3.5 → 3 drops per roll. 29 ÷ 3 = 10 rolls,
        plus 15% waste = 11–12 rolls to order. At $60/roll retail with your
        15–25% markup, the material line lands around $780–$900 — a number
        you should know before the client asks, not after.
      </p>
      <p>
        Order all bolts from the same dye lot, especially grasscloth — the
        panel-to-panel color shift between lots is visible on the wall and
        it&apos;s your callback. Buy the extra roll; unused rolls returned
        are cheap, a half-wall shortfall is not.
      </p>

      <h2>Material types compared: vinyl vs. non-woven vs. grasscloth</h2>
      <p>
        The material sets your labor rate, your prep scope, and your
        callback risk. Spec it deliberately and price what it actually
        costs to hang:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed (2026 US)</th>
            <th style={thStyle}>Hang characteristics</th>
            <th style={thStyle}>Bidding notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Vinyl / vinyl-coated</strong></td>
            <td style={tdStyle}>$3–$6/sq ft</td>
            <td style={tdStyle}>Durable, scrubbable, paste-the-paper; forgiving on seams</td>
            <td style={tdStyle}>The workhorse — bathrooms, kitchens, kids&apos; rooms; price at standard labor</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Non-woven</strong></td>
            <td style={tdStyle}>$3–$6/sq ft</td>
            <td style={tdStyle}>Paste-the-wall, dimensionally stable, dry-strips at removal</td>
            <td style={tdStyle}>Fastest hang; sell the easy future removal as a feature — it books the re-paper</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Grasscloth / natural fiber</strong></td>
            <td style={tdStyle}>$5.50–$8/sq ft</td>
            <td style={tdStyle}>No pattern to hide seams; fiber and color vary panel to panel; paste-the-wall</td>
            <td style={tdStyle}>Slow, seam-critical work; same dye lot mandatory; never quote at standard rates</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Fabric-backed / murals</strong></td>
            <td style={tdStyle}>$5–$10/sq ft</td>
            <td style={tdStyle}>Heavy, often pasted panels or booked; murals are one-shot alignment</td>
            <td style={tdStyle}>Two-person minimum on wide panels; charge for the second set of hands</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Specialty fabrics (silk, hand-painted)</strong></td>
            <td style={tdStyle}>$7–$12/sq ft</td>
            <td style={tdStyle}>Zero tolerance for paste on the face; often liner-first installation</td>
            <td style={tdStyle}>Bid with a contingency line — one ruined panel can cost hundreds</td>
          </tr>
        </tbody>
      </table>
      <p>
        Peel-and-stick sits outside this table: it&apos;s a different trade
        (easier hang, finicky repositioning, adhesive that ages). If your
        crew offers it, bid it separately — blending peel-and-stick labor
        into your traditional-paper rates underprices both.
      </p>

      <h2>Bid prep as its own line items</h2>
      <p>
        Wallpaper fails on walls, not on paper. Every bid should carry prep
        as visible lines, because prep is where the hours hide:
      </p>
      <ul>
        <li><strong>Removal ($1.50–$6/sq ft):</strong> test a corner during the walkthrough. Single layer over primed drywall strips dry and fast; paper painted over, multiple layers, or paper on unprimed drywall tears the face and becomes a skim-coat job. Price what you find, not what you hope.</li>
        <li><strong>Skim coat:</strong> torn drywall paper, heavy texture, or damaged plaster gets a skim coat before any paper goes up. Bid it per wall or per day — a Level 5 skim is a full trade day, not a &ldquo;while we&apos;re at it&rdquo; task.</li>
        <li><strong>Prime / seal:</strong> new drywall and skimmed walls must be primed with a wallpaper primer or quality primer-sealer. Unprimed drywall bonds to paste permanently — the next removal destroys the wall. A $40 gallon of primer is the cheapest insurance in the trade.</li>
        <li><strong>Wall repair:</strong> cracks, nail pops, out-of-plumb corners. Straighten what the paper will expose: seams telegraph every flaw.</li>
      </ul>
      <p>
        Clients push back on prep lines more than any other part of the bid.
        The answer is the warranty: &ldquo;prep is what I guarantee — the
        paper hangs as well as the wall beneath it.&rdquo; Contractors who
        bury prep lose the argument and then eat the hours anyway.
      </p>

      <h2>Set a minimum job charge</h2>
      <p>
        Never roll the truck for less than a single accent wall: your floor
        is <strong>$350</strong>, and $500–$700 is normal for a
        standard-room accent wall with prep. Small jobs carry the same
        mobilization, setup, cleanup, and scheduling overhead as big ones —
        a half-day you can&apos;t bill elsewhere. Publish the minimum on
        your website and your estimate template so it&apos;s policy, not
        negotiation. For an even simpler rule: one wall minimum, priced as
        an accent wall, with removal as an add-on. If you run a crew, see
        the <a href="/guides/how-to-quote-a-painting-job">painting job
        quoting guide</a> for how the same minimum-charge logic applies
        across the finish trades.
      </p>

      <h2>The quoting process, step by step</h2>
      <ol>
        <li><strong>Walk every wall.</strong> Measure each wall&apos;s width and height, count openings and corners, note ceiling height, and check the existing surface — old paper, paint sheen, texture, damage. Test-strip a corner of any existing paper.</li>
        <li><strong>Spec the material with the client.</strong> Vinyl, non-woven, grasscloth — each sets a different labor rate. Confirm the exact paper and get the dye-lot/bolt commitment in writing before you order.</li>
        <li><strong>Run the drop math.</strong> Drops per roll, drops needed, rolls, plus 15%+ waste. Cross-check against the per-square-foot number — they must reconcile.</li>
        <li><strong>Price prep separately.</strong> Removal, skim, prime — visible lines, each with its own scope note.</li>
        <li><strong>Build materials with 15–25% markup.</strong> Paper, paste, primer, sundries. You&apos;re warranting the material chain, so you price it.</li>
        <li><strong>Add labor.</strong> Per-roll or per-sq-ft, whichever you&apos;ll present — plus the trip minimum if the job is small.</li>
        <li><strong>Present two tiers.</strong> Standard paper vs. an upgrade, removal as an add-on. Tiers close jobs; single take-it-or-leave-it numbers invite shopping.</li>
        <li><strong>Deposit covers the special order.</strong> Paper is ordered to the job and often non-returnable — the deposit should cover the full material order at minimum, taken before you click buy.</li>
      </ol>
      <p>
        Run the room through the{" "}
        <a href="/calculators/wallpaper-calculator">wallpaper calculator</a>{" "}
        before you finalize: it cross-checks your roll count and square
        footage against the ranges above, and it hands the numbers straight
        to a <a href="/quote">quote</a> you can send from the driveway.
        Same-day quotes close at roughly double the rate of next-day ones —
        wallpaper clients are comparison shopping while the inspiration is
        fresh.
      </p>

      <h2>Upsells that protect the margin</h2>
      <ul>
        <li><strong>Accent wall add-on:</strong> once you&apos;re hanging one wall, the second is the easiest sale in the house. Quote the room price alongside the accent-wall price on every bid.</li>
        <li><strong>Removal service:</strong> most DIYers strip half a wall and quit. A removal-only line item at $1.50–$6/sq ft books work your competitors won&apos;t touch.</li>
        <li><strong>Ceiling paper:</strong> &ldquo;fifth wall&rdquo; treatments are trending — same crew, premium per-sq-ft rate, high perceived value.</li>
        <li><strong>Trim and paint touch-up:</strong> wallpaper jobs always scuff baseboards. Coordinate with the <a href="/guides/painting-estimate-template">painting estimate template</a> and keep both trades&apos; revenue with your company.</li>
        <li><strong>Future re-paper booking:</strong> non-woven dry-strips cleanly — write the next room&apos;s date on the invoice. Every finished job is a future job you&apos;ve already won.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Ignoring the pattern repeat.</strong> Area-only roll math on a 24-inch repeat leaves you two rolls short with a changed dye lot. Drops, not square feet.</li>
        <li><strong>Quoting labor before reading the wall.</strong> Paper over unprimed drywall, heavy texture, out-of-plumb 100-year-old plaster — each changes the labor. Walk first, price second.</li>
        <li><strong>Burying removal in the hang price.</strong> When the strip goes bad, the job is two jobs. Bid two lines.</li>
        <li><strong>Mixing dye lots.</strong> One bolt short mid-job plus a new lot equals a visible color band across the wall. Order together, from the same lot, with waste built in.</li>
        <li><strong>Skipping the material markup.</strong> 15–25% on paper isn&apos;t greed — it&apos;s the ordering, hauling, storing, and warranting. Pass-through at cost means you work the material side for free.</li>
        <li><strong>No minimum charge.</strong> A $150 single-wall favor costs you a half-day you can&apos;t schedule. The $350 floor is policy, stated up front.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Be honest with clients about this one — it builds the trust that
        books the hard jobs. A handy homeowner can hang paste-the-wall
        non-woven on a straight 8-foot wall with a plumb first drop; the
        tutorials are decent and the material is forgiving. Where DIY
        falls apart: pattern matching across corners, keeping drops plumb
        on out-of-square walls, stairwells, grasscloth seams, and anything
        over $80/roll where one ruined drop costs real money. Your pitch
        isn&apos;t &ldquo;you can&apos;t&rdquo; — it&apos;s &ldquo;the
        paper you picked costs $90 a roll, and the first two drops are
        where everyone learns.&rdquo; Sell the risk transfer, not the
        skill gap.
      </p>

      <h2>Do you need a permit to hang wallpaper?</h2>
      <p>
        Generally no — hanging wallpaper is cosmetic interior finish work,
        and US municipalities don&apos;t permit finishes. Two exceptions
        worth knowing: if prep involves disturbing painted surfaces in a
        pre-1978 home, EPA RRP lead-safe rules can apply to the sanding
        and scraping portion (certified procedures, containment,
        documentation — check before you bid it as ordinary prep); and
        condos, HOAs, and commercial buildings sometimes require work
        approval or restrict hours, which is a scheduling line item, not a
        permit. When in doubt, check your municipality — a five-minute
        call beats a stop-work order.
      </p>

      <Faq items={faqs} heading="Wallpaper quoting questions, answered" />
    </GuideArticle>
  );
}
