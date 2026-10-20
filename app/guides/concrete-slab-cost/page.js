import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Concrete Slab Cost (2026): Per Sq Ft Guide",
  description:
    "Concrete slab cost (2026): $6–$12 per sq ft installed. Patio, driveway & garage prices by size, ready-mix rates, DIY vs pro breakdown.",
  keywords: [
    "concrete slab cost",
    "concrete slab cost per square foot",
    "cost to pour a concrete slab",
    "concrete patio cost 2026",
    "concrete driveway cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/concrete-slab-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Concrete Slab Cost (2026): Per Sq Ft Guide | CalcBid",
    description:
      "$6–$12 per sq ft installed. Patio, driveway & garage prices by size, ready-mix rates, DIY vs pro breakdown.",
    url: "https://calcbid.com/guides/concrete-slab-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Slab Cost (2026): Per Sq Ft Guide | CalcBid",
    description:
      "$6–$12 per sq ft installed. Patio, driveway & garage prices by size, ready-mix rates, DIY vs pro breakdown.",
  },
};

const faqs = [
  {
    q: "How much does a 20×20 concrete slab cost?",
    a: "A 20×20 ft slab (400 sq ft) costs $2,400–$4,800 installed in the 2026 US range at a plain broom finish — most projects land around $8 per sq ft, or about $3,200. Going thicker (5–6 in for a driveway or garage), adding rebar, or choosing stamped/decorative finishes moves it toward the top of the range.",
  },
  {
    q: "How much does concrete cost per yard delivered in 2026?",
    a: "Ready-mix concrete runs $125–$195 per cubic yard delivered in 2026, within the usual delivery radius. That price covers the concrete only — the $6–$12 per sq ft installed price is mostly labor, forms, base, and finishing. Small orders under 3–4 yards often trigger short-load fees that push the effective per-yard price 20–50% higher.",
  },
  {
    q: "How thick should a concrete patio or driveway be?",
    a: "Patios and walkways are standard at 4 inches; driveways and garage floors need 5–6 inches to carry vehicle weight, typically with a 3,500–4,000 PSI mix and rebar instead of just wire mesh. Building codes commonly require a minimum of 3½ inches, and some jurisdictions require 6 inches for driveways regardless of use — confirm with your contractor.",
  },
  {
    q: "Is it cheaper to pour a concrete slab yourself?",
    a: "Yes — DIY concrete work is usually 40–65% cheaper in material cost. A 10×10 patio costs roughly $500–$600 DIY vs. $700–$1,200 hired out. But tool rentals ($200–$400), a full weekend of physical labor, and the risk of a bad finish eat into the savings. For driveways, garage floors, or structural slabs, hiring a professional typically delivers better long-term value.",
  },
  {
    q: "Why do concrete slab quotes for the same project vary so much?",
    a: "Because contractors are often pricing different slabs under the same name. One quote may assume 4 inches with wire mesh and minimal base prep, while another prices 5 inches with a rebar grid, compacted gravel base, and vapor barrier. Ask each bidder for thickness, PSI, reinforcement type, base depth, and finish in writing — then compare the specs, not just the totals.",
  },
  {
    q: "How long before I can use a new concrete slab?",
    a: "Foot traffic is fine after 24–48 hours, vehicles after about 7 days, and heavy equipment only after 28 days — concrete keeps gaining strength for a full month. Keep the surface moist (mist it or keep plastic over it) for the first 7 days; fast drying is one of the top causes of surface cracking.",
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
      title="Concrete Slab Cost (2026)"
      description="The 2026 US cost of pouring a concrete slab — per square foot, by size and project type — so you know what a fair quote looks like before your contractor arrives."
      slug="concrete-slab-cost"
      updated="October 2026"
      calculatorHref="/calculators/concrete-slab-calculator"
      calculatorLabel="Concrete Slab Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        In 2026, a concrete slab costs <strong>$6–$12 per square foot
        installed</strong> in most of the US, with a national average near{" "}
        <strong>$8/sq ft</strong>. That covers the concrete, gravel base,
        forms, reinforcement, labor, and a broom finish. A standard 20×20
        patio lands around $2,400–$4,800; a two-car driveway runs $4,800–$9,000;
        stamped or decorative finishes push costs to $12–$30/sq ft. Ready-mix
        concrete alone is $125–$195 per cubic yard delivered — but the concrete
        itself is only about a third of what you pay; the rest is labor, prep,
        and finishing.
      </p>

      <h2>Concrete slab cost per square foot (2026)</h2>
      <p>
        Installed price by project type. The same &ldquo;slab&rdquo; prices
        differently depending on thickness, reinforcement, and finish — which
        is why two quotes for the same patch of ground can look wildly
        different.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Project type</th>
            <th style={thStyle}>Typical thickness</th>
            <th style={thStyle}>Installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Patio, plain broom finish</td>
            <td style={tdStyle}>4 in</td>
            <td style={tdStyle}>$6–$12/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Garage floor</td>
            <td style={tdStyle}>4–6 in</td>
            <td style={tdStyle}>$6–$12/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Shed or hot-tub pad</td>
            <td style={tdStyle}>4 in</td>
            <td style={tdStyle}>$7–$15/sq ft*</td>
          </tr>
          <tr>
            <td style={tdStyle}>Standard driveway</td>
            <td style={tdStyle}>5 in</td>
            <td style={tdStyle}>$7–$13/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stamped / stained patio</td>
            <td style={tdStyle}>4 in</td>
            <td style={tdStyle}>$12–$20/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Exposed aggregate</td>
            <td style={tdStyle}>4 in</td>
            <td style={tdStyle}>$12–$18/sq ft</td>
          </tr>
        </tbody>
      </table>
      <p>
        *Small pads run more per square foot because most contractors have an
        $800–$1,200 minimum — the crew, truck, and forms cost the same whether
        the pad is 100 or 400 sq ft.
      </p>
      <p>
        Roughly half the installed price is labor ($3–$5/sq ft). The rest is
        concrete, gravel base, reinforcement, forms, and finish. Contractors
        price by the project, not by the yard of concrete — so when a quote
        looks high, it&apos;s usually the site prep or the finish driving it,
        not the material.
      </p>

      <h2>Concrete slab cost by size</h2>
      <p>
        Quick estimates at the $6–$12/sq ft installed range, plain 4-inch
        broom-finish slab:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Slab size</th>
            <th style={thStyle}>Sq ft</th>
            <th style={thStyle}>Yards of concrete</th>
            <th style={thStyle}>Installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10×10 (shed pad)</td>
            <td style={tdStyle}>100</td>
            <td style={tdStyle}>~1.25</td>
            <td style={tdStyle}>$600–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>12×12 (patio)</td>
            <td style={tdStyle}>144</td>
            <td style={tdStyle}>~1.75</td>
            <td style={tdStyle}>$864–$1,728</td>
          </tr>
          <tr>
            <td style={tdStyle}>12×16 (patio)</td>
            <td style={tdStyle}>192</td>
            <td style={tdStyle}>~2.4</td>
            <td style={tdStyle}>$1,150–$2,300</td>
          </tr>
          <tr>
            <td style={tdStyle}>16×20 (patio)</td>
            <td style={tdStyle}>320</td>
            <td style={tdStyle}>~4</td>
            <td style={tdStyle}>$1,920–$3,840</td>
          </tr>
          <tr>
            <td style={tdStyle}>20×20 (garage / patio)</td>
            <td style={tdStyle}>400</td>
            <td style={tdStyle}>~5</td>
            <td style={tdStyle}>$2,400–$4,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>20×30 (double driveway)</td>
            <td style={tdStyle}>600</td>
            <td style={tdStyle}>~9 at 5 in</td>
            <td style={tdStyle}>$4,200–$7,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>30×30 (workshop slab)</td>
            <td style={tdStyle}>900</td>
            <td style={tdStyle}>~11</td>
            <td style={tdStyle}>$5,400–$10,800</td>
          </tr>
        </tbody>
      </table>
      <p>
        Add 10–25% for rebar reinforcement, vapor barrier, or thickened
        edges. Sites needing heavy grading, excavation, or demolition of old
        concrete add another $2–$4/sq ft. Run your exact dimensions through
        the{" "}
        <a href="/calculators/concrete-slab-calculator">
          concrete slab calculator
        </a>{" "}
        for a project-specific number.
      </p>

      <h2>How your slab gets installed (step by step)</h2>
      <p>
        Knowing the process matters for one reason: when something is skipped,
        the slab fails years early. Here&apos;s what a proper install looks
        like, so you can tell whether your contractor is doing the work or
        cutting corners.
      </p>
      <ol>
        <li>
          <strong>Excavation and grading.</strong> The crew digs to slab
          thickness + base depth + form allowance — about 10 inches deep for
          a 4-inch slab on 4 inches of gravel. The site is graded to slope
          ¼ inch per foot away from the house so water runs off, not
          underneath.
        </li>
        <li>
          <strong>Subgrade compaction.</strong> The native soil is compacted —
          non-negotiable on clay or recently disturbed ground. A slab poured
          on soft soil settles unevenly and cracks within a season or two.
        </li>
        <li>
          <strong>Gravel base.</strong> 4 inches of crushed stone, compacted
          in 2-inch lifts. This is the foundation your slab actually sits on;
          it distributes weight and drains water.
        </li>
        <li>
          <strong>Forms and reinforcement.</strong> Lumber forms define the
          edges and are staked every 4 feet. Wire mesh or a rebar grid is set
          on chairs so it sits mid-slab — steel lying on the bottom of the
          pour does nothing. A 6-mil plastic vapor barrier goes under garage
          and interior slabs.
        </li>
        <li>
          <strong>Pour and screed.</strong> Ready-mix arrives and is placed
          from the far end backward, then struck level with a straight
          2×4 across the forms. This is timed work — concrete starts setting
          in about 90 minutes, so the crew size has to match the pour size.
        </li>
        <li>
          <strong>Float, edge, and joint.</strong> Once the water sheen
          disappears, the surface is bull-floated, edges are rounded with an
          edging tool, and control joints are cut every 8–10 feet to give
          shrinkage cracks somewhere harmless to go.
        </li>
        <li>
          <strong>Finish and cure.</strong> Broom finish for traction (patios,
          driveways) or trowel for smooth (garages). Then it&apos;s kept
          moist — misted or covered in plastic — for 7 days minimum. Foot
          traffic after 24–48 hours, vehicles after 7 days, heavy equipment
          after 28.
        </li>
      </ol>
      <p>
        If a contractor proposes to skip the gravel base, skip compaction,
        or pour without control joints, that&apos;s a bid to reject — the
        $500 you save today becomes a cracked slab you live with for 25
        years.
      </p>

      <h2>Plain vs. stamped vs. other finishes</h2>
      <p>
        The finish is the single biggest lever on your price. The slab is the
        same; what happens to the surface decides whether it costs $8 or $18
        per square foot.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Finish</th>
            <th style={thStyle}>Installed cost</th>
            <th style={thStyle}>The trade-off</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Broom finish</td>
            <td style={tdStyle}>Included (base price)</td>
            <td style={tdStyle}>Standard traction; what most quotes assume</td>
          </tr>
          <tr>
            <td style={tdStyle}>Smooth trowel</td>
            <td style={tdStyle}>Included to +$1/sq ft</td>
            <td style={tdStyle}>Garages and workshops; slippery when wet</td>
          </tr>
          <tr>
            <td style={tdStyle}>Integral color</td>
            <td style={tdStyle}>+$1–$3/sq ft</td>
            <td style={tdStyle}>Color through the whole slab; subtle earth tones</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stained (acid or water-based)</td>
            <td style={tdStyle}>$9–$14/sq ft total</td>
            <td style={tdStyle}>Mottled, variegated color; needs resealing</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stamped pattern</td>
            <td style={tdStyle}>$10–$18/sq ft total</td>
            <td style={tdStyle}>Mimics stone, brick, slate; reseal every 2–3 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Exposed aggregate</td>
            <td style={tdStyle}>$12–$18/sq ft total</td>
            <td style={tdStyle}>Durable, slip-resistant; washing off the surface paste is slow work</td>
          </tr>
        </tbody>
      </table>
      <p>
        Decorative finishes are a cosmetic upgrade with a maintenance tail:
        stamped and stained concrete need resealing every 2–3 years ($0.50–$2/sq
        ft when you hire it out). They&apos;re also harder to repair —
        patching a stamped pattern invisibly is a specialist skill. If budget
        matters more than looks, a plain broom finish with a colored sealer
        gives you 80% of the curb appeal for 10% of the upgrade cost.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        DIY concrete is genuinely cheaper — 40–65% cheaper on materials. But
        the savings concentrate in small projects and shrink fast as the slab
        gets bigger.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Project (4 in thick)</th>
            <th style={thStyle}>DIY material cost</th>
            <th style={thStyle}>Pro installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10×12 patio (120 sq ft)</td>
            <td style={tdStyle}>$280–$450</td>
            <td style={tdStyle}>$960–$1,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>3×30 sidewalk (90 sq ft)</td>
            <td style={tdStyle}>$220–$330</td>
            <td style={tdStyle}>$540–$1,170</td>
          </tr>
          <tr>
            <td style={tdStyle}>10×30 driveway (300 sq ft)</td>
            <td style={tdStyle}>$650–$1,050</td>
            <td style={tdStyle}>$2,400–$4,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>20×20 garage pad (400 sq ft)</td>
            <td style={tdStyle}>$2,300–$2,700</td>
            <td style={tdStyle}>$2,400–$4,800</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>DIY is realistic when:</strong> the slab is 200 sq ft or less
        (shed pad, hot-tub pad, small patio), 4 inches thick, and at grade.
        Under 1 cubic yard (27 cubic feet), bagged mix from the home center is
        cheaper than a ready-mix truck. Budget $200–$400 for tool rentals —
        a plate compactor, bull float, edger, and groover — and a full
        weekend of hard labor.
      </p>
      <p>
        <strong>Hire a pro when:</strong> a garage, driveway, or anything a
        structure sits on is involved (footings, vapor barrier, and inspections
        enter the picture); the project needs more than one yard of concrete
        placed in a single pour; or the finish matters to you. A driveway that
        scales, pits, or slopes the wrong way is a $5,000 mistake you look at
        every day. Small-load delivery fees and line-pump charges ($600–$1,100
        when the truck can&apos;t reach the forms) also erode DIY savings on
        awkward sites.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Usually not for a plain patio — usually yes for anything structural or
        in the public right-of-way. The typical pattern under US building
        codes (most cities follow the IRC):
      </p>
      <ul>
        <li>
          <strong>At-grade patio under ~200 sq ft:</strong> generally exempt
          from a building permit in most jurisdictions, as long as it&apos;s
          not more than 30 inches above grade and not attached to the house.
        </li>
        <li>
          <strong>Sidewalks and driveways on your property:</strong> typically
          permit-free under the IRC — but some cities require permits for all
          concrete flatwork, and nearly all require a separate right-of-way
          permit where the driveway meets the street.
        </li>
        <li>
          <strong>Slabs a structure sits on:</strong> need a permit, usually
          with thickened-edge or footing details and an inspection before the
          pour. In cold climates, frost-protection requirements add
          $800–$3,000.
        </li>
        <li>
          <strong>Covered patios (roof or pergola attached):</strong> almost
          always need a building permit as a structure.
        </li>
      </ul>
      <p>
        Where permits are required, fees typically run $75–$350 for simple
        flatwork. Ask your contractor whether they pull the permit — a good
        one does it as standard practice and folds the fee into the quote.
        And check your HOA before any of this: HOAs can restrict placement,
        materials, and size, and can order a permitted-by-the-city patio torn
        out if it violates the covenants.
      </p>

      <h2>Homeowner tips for a fair quote</h2>
      <ul>
        <li><strong>Get 3 quotes and compare specs, not totals.</strong> Demand thickness, PSI, reinforcement type, base depth, and finish in writing from every bidder. The cheapest quote usually has the thinnest slab and the least base.</li>
        <li><strong>Ask about the base.</strong> &ldquo;Four inches of compacted gravel&rdquo; should be a line item, not an assumption. Slabs poured directly on dirt are the ones that crack first.</li>
        <li><strong>Confirm reinforcement.</strong> Wire mesh is the baseline for patios; a rebar grid on 12–18-inch centers adds $0.50–$1.50/sq ft and is the right call for driveways, garages, and shifting soils. Fiber-reinforced mix is a cheap add-on that limits surface cracking but doesn&apos;t replace steel.</li>
        <li><strong>Watch for the small-load trap.</strong> Orders under 3–4 yards trigger short-load fees that inflate the effective per-yard price 20–50%. For a small pad, this can make bagged mix or a volunteer crew day genuinely cheaper.</li>
        <li><strong>Schedule for mild weather.</strong> Concrete can&apos;t be poured on frozen ground, and pours below ~40°F need accelerators or blankets — winter premiums are real. Spring and fall pours cure slower and stronger.</li>
        <li><strong>Keep water off it for a week.</strong> Whoever pours it, keep the surface moist and stay off it: 24–48 hours for feet, 7 days for cars. A $20 sprinkler timer beats a $2,000 resurface.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Comparing quotes without the specs.</strong> &ldquo;$6,000 for the driveway&rdquo; means nothing until you know the thickness, mix strength, and reinforcement behind each number.</li>
        <li><strong>Skipping the base.</strong> Four inches of compacted gravel costs a few hundred dollars and decides whether your slab lasts 25 years or 5.</li>
        <li><strong>Too little concrete at too much pump.</strong> If the ready-mix truck can&apos;t get within ~20 feet of the forms, you need a line pump ($600–$1,100) or wheelbarrows and a bigger crew — price this before the pour day, not on it.</li>
        <li><strong>No control joints.</strong> Concrete shrinks; joints every 8–10 feet give cracks a planned place to appear. Skipping them doesn&apos;t prevent cracks — it just lets them wander wherever they want.</li>
        <li><strong>Pouring in bad weather.</strong> Rain on fresh concrete ruins the finish; freezing temperatures stop curing entirely. A good contractor reschedules — a cheap one pours anyway.</li>
        <li><strong>Paying too much up front.</strong> 30–50% deposit is standard; the balance on completion. Full payment before the pour is a red flag no good contractor waves.</li>
      </ul>
      <p>
        Considering alternatives? A comparable paver patio runs $10–$25/sq
        ft — more than concrete, but easier to repair section by section.
        See our <a href="/guides/paver-installation-cost">paver installation
        cost guide</a> for the full comparison, or the{" "}
        <a href="/guides/cost-to-build-a-deck">deck cost guide</a> if
        you&apos;re weighing concrete against wood. Planning a garage slab
        and want the floor to look sharp? Our{" "}
        <a href="/guides/cost-to-epoxy-garage">epoxy garage floor cost
        guide</a> covers that next step.
      </p>
      <p>
        Run your dimensions in the{" "}
        <a href="/calculators/concrete-slab-calculator">concrete slab
        calculator</a> to get a materials estimate, then push it into a{" "}
        <a href="/quote">quote</a> — knowing your numbers before the
        contractor arrives is the single best negotiating position a
        homeowner can have.
      </p>

      <Faq items={faqs} heading="Concrete slab cost questions, answered" />
    </GuideArticle>
  );
}
