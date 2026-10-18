import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Bathroom Remodel Cost in 2026",
  description:
    "Bathroom remodel cost in 2026: $6,500–$35,000 by type and tier, full cost breakdown by element, timelines, and ROI.",
  keywords: [
    "bathroom remodel cost",
    "how much does a bathroom remodel cost",
    "average bathroom remodel cost",
    "bathroom renovation cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/bathroom-remodel-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Bathroom Remodel Cost in 2026 | CalcBid",
    description:
      "Full cost breakdown by bathroom type, finish tier, and every line item.",
    url: "https://calcbid.com/guides/bathroom-remodel-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Cost in 2026 | CalcBid",
    description:
      "Full cost breakdown by bathroom type, finish tier, and every line item.",
  },
};

const faqs = [
  {
    q: "What is the average cost of a bathroom remodel in 2026?",
    a: "The US average for a full bathroom remodel in 2026 is about $10,000–$20,000 for a hall/guest bath and $15,000–$35,000 for a primary suite, including labor and fixtures. A cosmetic refresh (paint, vanity, lighting) runs $3,000–$8,000, while luxury primary baths with custom tile, freestanding tubs, and relocated plumbing can reach $40,000–$60,000. The bathroom's size and the finish tier move the number more than the zip code does.",
  },
  {
    q: "Why are bathroom remodels so expensive per square foot?",
    a: "Bathrooms are the densest rooms in the house: plumbing, waterproofing, tile, ventilation, and electrical all stack into 35–100 square feet. Fixtures have big fixed costs regardless of size — a $900 toilet costs the same in a 35 sq ft bath and a 200 sq ft bath. That density is why small bathrooms actually cost MORE per square foot ($200–$350) than large ones ($120–$220).",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "A hall or guest bathroom takes 2–3 weeks of active work; a primary bath with layout changes takes 4–6 weeks. Add 2–4 weeks of lead time for ordering tile, vanities, and fixtures before demolition starts — special-order items are the most common cause of schedule overruns. One-day conversion companies exist but only handle tub/shower swaps, not full remodels.",
  },
  {
    q: "Does a bathroom remodel increase home value?",
    a: "A midrange bathroom remodel returns roughly 60–65% of its cost at resale, per the industry Cost vs. Value reporting — and it's one of the highest-return interior projects after kitchens. But the ROI story is really about salability: a dated bath can cost you a sale, while a fresh one photographs well and shortens days on market. Don't remodel to a luxury tier the neighborhood can't support.",
  },
  {
    q: "Can I remodel a bathroom in phases?",
    a: "Yes — this is the smart way to handle a limited budget. Phase 1 (cosmetic): paint, lighting, mirror, hardware. Phase 2: vanity, toilet, faucets. Phase 3 (the big one): tile, tub/shower, flooring. Just don't split the tile/wet work across phases — demoing twice doubles the cost of the tile phase. Plan the full design up front, then execute in stages.",
  },
  {
    q: "What is the biggest hidden cost in a bathroom remodel?",
    a: "Water damage behind the old shower or tub. Once demo exposes rotted subfloor or moldy wall cavities, you're looking at $1,000–$4,000 of repair before the remodel can continue — and it stops the job cold until it's fixed. A responsible bid includes a contingency line (10–15%) or explicitly excludes concealed damage; the surprise is only a problem when nobody planned for it.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Bathroom Remodel Cost in 2026: Full Breakdown"
      description="What a bathroom remodel really costs in 2026 — by bathroom type, finish tier, and every line item, with timelines and what actually drives the bid."
      slug="bathroom-remodel-cost"
      updated="October 2026"
      calculatorHref="/calculators/tile-flooring-calculator"
      calculatorLabel="Estimate the tile"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        A full bathroom remodel in 2026 costs <strong>$10,000–$20,000</strong>{" "}
        for a hall or guest bath and <strong>$15,000–$35,000</strong> for a
        primary suite. A cosmetic refresh — paint, vanity, lighting, fixtures —
        runs <strong>$3,000–$8,000</strong>. Labor is <strong>40–60%</strong> of
        the total, tile and plumbing are the two line items that make or break
        the budget, and the finish tier moves the number more than anything
        else.
      </p>
      <p>
        Bathrooms are the most expensive rooms in the house per square foot,
        and that&apos;s not changing. This guide breaks down what every
        bathroom type costs, where the money actually goes, and how to read a
        bid like a contractor. If you&apos;re pricing the tub-to-shower swap
        specifically, see our{" "}
        <a href="/guides/tub-to-shower-conversion-cost">
          tub-to-shower conversion cost
        </a>{" "}
        guide; for tight spaces, the{" "}
        <a href="/guides/small-bathroom-remodel-cost">
          small bathroom remodel cost
        </a>{" "}
        guide has the space-by-space math.
      </p>
      <p>
        For the individual fixture lines, see our{" "}
        <a href="/guides/bathtub-replacement-cost">
          bathtub replacement cost
        </a>
        ,{" "}
        <a href="/guides/bathroom-vanity-installation-cost">
          bathroom vanity installation cost
        </a>
        , and{" "}
        <a href="/guides/walk-in-shower-cost">walk in shower cost</a> guides —
        each one prices its project from the tub or vanity unit through the
        plumbing and finish work.
      </p>

      <h2>Cost by bathroom type</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Bathroom type</th>
            <th>Typical size</th>
            <th>2026 remodel range</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Powder room (half bath)</td>
            <td className="num">20–40 sq ft</td>
            <td className="num">$5,000–$12,000</td>
            <td>No shower/tub = cheapest full remodel</td>
          </tr>
          <tr>
            <td>Hall / guest bath (full)</td>
            <td className="num">40–70 sq ft</td>
            <td className="num">$10,000–$20,000</td>
            <td>The classic tub + single vanity bath</td>
          </tr>
          <tr>
            <td>Primary (master) bath</td>
            <td className="num">100–200+ sq ft</td>
            <td className="num">$15,000–$35,000</td>
            <td>Double vanity, walk-in shower, soaking tub</td>
          </tr>
          <tr>
            <td>Luxury primary suite</td>
            <td className="num">150–250+ sq ft</td>
            <td className="num">$35,000–$60,000+</td>
            <td>Custom tile, steam, radiant heat, relocated plumbing</td>
          </tr>
        </tbody>
      </table>
      <p>
        The powder room is the best-value project in the house: it&apos;s the
        bathroom guests see, it has no wet-area work, and a $7,000 refresh
        there photographs like a $20,000 remodel. Primary suites are where
        budgets die — every square foot of custom tile and every moved drain
        compounds.
      </p>

      <h2>Cost by finish tier</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>What it means</th>
            <th>Typical hall-bath cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cosmetic refresh</td>
            <td>Paint, lighting, mirror, hardware, toilet, faucet — no tile or layout changes</td>
            <td className="num">$3,000–$8,000</td>
          </tr>
          <tr>
            <td>Budget remodel</td>
            <td>Prefab tub/shower, stock vanity, ceramic tile, vinyl or basic tile floor</td>
            <td className="num">$8,000–$14,000</td>
          </tr>
          <tr>
            <td>Mid-range remodel</td>
            <td>Tile shower, semi-custom vanity, porcelain tile, new lighting + fan, comfort-height toilet</td>
            <td className="num">$14,000–$24,000</td>
          </tr>
          <tr>
            <td>Luxury remodel</td>
            <td>Custom tile throughout, frameless glass, freestanding tub, heated floor, smart fixtures</td>
            <td className="num">$25,000–$45,000+</td>
          </tr>
        </tbody>
      </table>
      <p>
        The tier decision is the single biggest cost lever — bigger than the
        bathroom&apos;s size. A mid-range hall bath and a luxury hall bath can
        differ by $20,000 in the same 60 square feet. Decide the tier before
        picking a single fixture, because everything downstream flows from it.
      </p>

      <h2>Where the money goes: line-by-line breakdown</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>Share of total</th>
            <th>2026 price range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Labor</td>
            <td className="num">40–60%</td>
            <td>Demo, plumbing, electrical, tile set, paint</td>
          </tr>
          <tr>
            <td>Shower / tub (installed)</td>
            <td className="num">15–30%</td>
            <td className="num">$2,500–$12,000</td>
          </tr>
          <tr>
            <td>Tile (walls + floor, installed)</td>
            <td className="num">15–25%</td>
            <td className="num">$15–$35 / sq ft</td>
          </tr>
          <tr>
            <td>Vanity + top + faucets</td>
            <td className="num">10–15%</td>
            <td className="num">$800–$5,000</td>
          </tr>
          <tr>
            <td>Toilet (installed)</td>
            <td className="num">3–5%</td>
            <td className="num">$400–$900</td>
          </tr>
          <tr>
            <td>Plumbing rough-in changes</td>
            <td className="num">5–15%</td>
            <td className="num">$1,500–$5,000</td>
          </tr>
          <tr>
            <td>Lighting, fan, electrical</td>
            <td className="num">5–8%</td>
            <td className="num">$800–$2,500</td>
          </tr>
          <tr>
            <td>Permits + inspections</td>
            <td className="num">2–4%</td>
            <td className="num">$300–$1,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two truths fall out of this table. First: <strong>plumbing moves are
        the budget bomb.</strong> Keeping the toilet, tub, and vanity on their
        existing drains is the cheapest decision in any bathroom remodel —
        moving a drain line through a slab can cost $2,000–$4,000 by itself.
        Second: <strong>tile is the labor multiplier.</strong> A $6/sq ft
        porcelain becomes a $30/sq ft installed wall; mosaic accent bands and
        niche details add hours faster than they add square feet. For the
        tile math, run the{" "}
        <a href="/calculators/tile-flooring-calculator">tile calculator</a>{" "}
        against your measured area.
      </p>

      <h2>The remodel process, step by step</h2>
      <ul>
        <li><strong>1. Design and fixture selection (2–4 weeks).</strong> Lock the layout, pick every fixture, and order long-lead items (vanities, specialty tile, freestanding tubs) BEFORE demo. Nothing starts until the materials are on site or scheduled.</li>
        <li><strong>2. Demo (1–3 days).</strong> Gut to studs in the wet areas; protect floors and adjacent rooms. This is when hidden water damage is discovered — budget 10–15% contingency or acknowledge it in writing.</li>
        <li><strong>3. Rough plumbing and electrical (3–5 days).</strong> Move or replace drains and supplies, add circuits for fans/heaters, rewire lighting. Then the rough inspection.</li>
        <li><strong>4. Waterproofing and substrate (2–4 days).</strong> Cement board or waterproof membrane systems in wet areas, subfloor repair, wall prep. This layer is invisible and non-negotiable.</li>
        <li><strong>5. Tile (5–10 days).</strong> Floors first, then shower/tub surround. Grout, seal, and let cure — this is the longest visible phase.</li>
        <li><strong>6. Fixture set and finish (3–5 days).</strong> Vanity, toilet, faucets, glass, lighting, mirrors, paint, caulk. Final inspection and punch list.</li>
      </ul>
      <p>
        A hall bath is a <strong>2–3 week</strong> active job; a primary with
        layout changes runs <strong>4–6 weeks</strong>. The schedule-killer is
        never labor — it&apos;s material lead times. That $2,200 vanity with
        an 8-week lead time is a schedule, not just a line item.
      </p>

      <h2>Refresh vs. full remodel: the comparison</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Approach</th>
            <th>Cost</th>
            <th>Best when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cosmetic refresh</td>
            <td className="num">$3,000–$8,000</td>
            <td>Layout works, plumbing is sound, finishes are just dated</td>
          </tr>
          <tr>
            <td>Full remodel (same layout)</td>
            <td className="num">$10,000–$25,000</td>
            <td>Fixtures are worn out, tile is failing, waterproofing is suspect</td>
          </tr>
          <tr>
            <td>Full remodel (new layout)</td>
            <td className="num">$20,000–$45,000+</td>
            <td>The room genuinely doesn&apos;t work — or it&apos;s the primary suite</td>
          </tr>
          <tr>
            <td>Tub-to-shower conversion only</td>
            <td className="num">$2,000–$12,000</td>
            <td>The tub is unused and everything else is fine — see the{" "}
              <a href="/guides/tub-to-shower-conversion-cost">conversion guide</a></td>
          </tr>
        </tbody>
      </table>

      <h2>What moves the bid</h2>
      <ul>
        <li><strong>Plumbing relocation:</strong> moving the toilet drain is $1,500–$3,500; moving a shower drain through a slab is $2,000–$4,000. The cheapest layout is the existing one.</li>
        <li><strong>Tile scope:</strong> a tile wainscot vs. floor-to-ceiling tile in the shower can differ by $3,000 in labor alone. Mosaic, patterns, and niches are priced by the hour, not the foot.</li>
        <li><strong>Fixture grade:</strong> a $180 alcove tub and a $4,000 freestanding tub are both &ldquo;a tub&rdquo; on a bid — insist on model numbers.</li>
        <li><strong>Hidden damage:</strong> rotted subfloor, mold, corroded supply lines. Assume it in houses 25+ years old and budget 10–15% contingency.</li>
        <li><strong>Ventilation and electrical:</strong> a new bath fan with proper ducting ($300–$600), GFCI circuits, heated floors ($10–$15/sq ft installed) — small lines that add up.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Skipping waterproofing behind tile.</strong> Greenboard and mastic in a shower is a 3-year remodel. Waterproof membrane systems cost a few hundred more and are the entire difference between a remodel that lasts 5 years and one that lasts 25.</li>
        <li><strong>Ordering fixtures after demo.</strong> The 8-week vanity lead time starts when you order, not when you notice the hole in your schedule. Order first, demo second.</li>
        <li><strong>No contingency line.</strong> A bathroom bid without a 10–15% contingency is a fiction. Concealed damage, code upgrades, and out-of-stock substitutions are the norm, not the exception.</li>
        <li><strong>Over-improving for the neighborhood.</strong> A $45,000 primary bath in a $250,000 house doesn&apos;t appraise. Match the tier to the home&apos;s value.</li>
        <li><strong>Undersizing the fan.</strong> The building code minimum is 50 CFM (intermittent) — but a steamy primary bath wants 1 CFM per square foot. Moisture is what kills bathrooms; the $200 fan upgrade is the cheapest insurance in the project.</li>
        <li><strong>Ignoring the door swing and clearances.</strong> A 32-inch door replaced with a 24-inch vanity door that hits the toilet is a layout failure discovered on install day. Draw clearances on the plan: 21 inches in front of the toilet, 30 inches of clear floor in front of the shower entry.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Bathrooms sit in the middle of the DIY spectrum — parts are genuinely
        DIY-able, parts are genuinely not:
      </p>
      <ul>
        <li><strong>DIY-friendly:</strong> demo, painting (use the <a href="/calculators/paint-calculator">paint calculator</a> for quantities), vanity and mirror swaps, toilet replacement, lighting fixtures, hardware. A homeowner can realistically do 30–40% of a cosmetic refresh and save $2,000–$5,000.</li>
        <li><strong>Hire a pro:</strong> shower waterproofing and tile (the failure cost is catastrophic — a leaking shower pan rots the floor below), plumbing rough-in moves, anything involving the drain or supply lines behind walls, electrical work in wet zones (GFCI and fan circuits fall under strict code).</li>
        <li><strong>The gray zone:</strong> floor tile. A handy homeowner can tile a small bathroom floor, but shower walls and niches are where amateur work shows — and where it fails. Many contractors will let you demo and paint to cut the bid while keeping the wet work themselves.</li>
      </ul>
      <p>
        For the full room-by-room math, see our <a href="/guides/diy-vs-pro-home-renovation-cost">DIY vs pro renovation costs</a> guide — it prices the DIY savings against the rework risk for every project type.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Almost always, yes — for anything beyond cosmetics. Fixture swaps
        (toilet, vanity, faucets) in the same location generally don&apos;t
        need one, but <strong>plumbing changes, electrical work, structural
        changes, and shower/tub replacements typically require a building
        permit</strong> ($200–$600 in most municipalities, more in major
        metros). The permit triggers inspections of the rough plumbing and
        electrical — which is exactly the work you want inspected. Unpermitted
        bath work is a resale problem: buyers&apos; inspectors flag it, and
        you&apos;ll be opening walls to prove what&apos;s behind them. Check
        your municipality&apos;s rules before demo day.
      </p>
      <p>
        Price the job in the{" "}
        <a href="/calculators/tile-flooring-calculator">tile calculator</a>{" "}
        and the <a href="/calculators/paint-calculator">paint calculator</a>,
        then build the full project <a href="/quote">quote</a> from the line
        items. Bathroom clients compare bids line by line — be the detailed
        one.
      </p>

      <Faq items={faqs} heading="Bathroom remodel questions, answered" />
    </GuideArticle>
  );
}
