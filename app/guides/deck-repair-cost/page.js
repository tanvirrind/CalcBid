import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Deck Repair Cost (2026)",
  description:
    "Deck repair costs $500–$2,500 on average in 2026. Per-square-foot pricing, repair-by-repair costs, and the repair-vs-replace math.",
  keywords: [
    "deck repair cost",
    "deck repair",
    "cost to fix deck",
    "how much does deck repair cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/deck-repair-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Repair Cost (2026) | CalcBid",
    description:
      "$500–$2,500 average repair. Per-square-foot pricing, repair-by-repair costs, and the repair-vs-replace math.",
    url: "https://calcbid.com/guides/deck-repair-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Repair Cost (2026) | CalcBid",
    description: "$500–$2,500 average repair. Per-square-foot pricing, repair-by-repair costs, and the repair-vs-replace math.",
  },
};

const faqs = [
  {
    q: "How much does it cost to repair a deck?",
    a: "Most deck repairs cost $500–$2,500 in 2026, with the national average around $1,200. Minor fixes like replacing a few boards or tightening railings run $100–$500. Structural repairs — rotted posts, joists, or ledger boards — start around $1,000 and can exceed $3,000 when framing is involved.",
  },
  {
    q: "How much does it cost to fix a deck per square foot?",
    a: "Deck repairs typically run $4–$15 per square foot, depending on what needs fixing. Surface repairs like board replacement land at the low end ($4–$8/sq ft). Structural repairs involving joists, beams, or posts run $10–$20+ per square foot because of the labor and engineering involved.",
  },
  {
    q: "How much does it cost to repair a wood deck?",
    a: "Wood deck repairs average $500–$2,000 for pressure-treated pine, which is the most common and cheapest to fix. Cedar repairs cost 20–30% more because the material is pricier. Composite deck repairs average $800–$2,500 — individual boards cost more, though they fail less often than wood.",
  },
  {
    q: "Is it cheaper to repair a deck or replace it?",
    a: "Repair is cheaper up front, but not always the smarter buy. If repairs exceed 50% of replacement cost — or the deck is over 20 years old with structural issues — replacement usually wins. A $2,500 repair on a deck that needs replacing in 3 years is a $2,500 rental payment; a $10,000 replacement resets the clock for 20+ years.",
  },
  {
    q: "How do I fix a sagging or bouncy deck?",
    a: "Sagging and bounce mean the structure is compromised — usually undersized or rotted joists, a failing beam, or posts settling. The fix is sistering or replacing joists, adding a beam, or resetting posts on proper footings, typically $1,000–$3,000. This is not a cosmetic repair; a bouncy deck is a safety issue, so get it inspected before hosting anyone on it.",
  },
  {
    q: "How often do decks need repairs?",
    a: "Pressure-treated decks need attention every 2–3 years — re-staining or sealing, tightening fasteners, and replacing the odd board. Structural inspections should happen every 5 years. Composite decks need less frequent work but aren't maintenance-free: check fasteners and drainage annually. Catching rot early is the difference between a $300 board swap and a $2,000 framing repair.",
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
      title="Deck Repair Cost"
      description="What deck repairs really cost in 2026: the average price, per-square-foot rates, a repair-by-repair price list, and when replacement is the smarter money."
      slug="deck-repair-cost"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate deck materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Most deck repairs cost <strong>$500–$2,500</strong> in 2026, with the
        national average around <strong>$1,200</strong>. Simple fixes —
        swapping a few boards, re-securing railings — run $100–$500, while
        structural work on posts, joists, or the ledger board starts at
        $1,000 and climbs past $3,000. The single biggest factor in your price
        is whether the <em>structure</em> is sound: surface repairs are cheap,
        framing repairs are not. Below is the full 2026 US price picture —
        per-square-foot rates, a repair-by-repair breakdown, and the
        repair-vs-replace math that decides whether the money is well spent.
      </p>

      <h2>Deck repair cost per square foot</h2>
      <p>
        Per-square-foot pricing is how most contractors estimate repair work,
        and it&apos;s the fastest way to sanity-check a quote:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Repair type</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>Typical 300 sq ft deck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Cosmetic / surface repairs (boards, railings)</td>
            <td style={tdStyle}>$4–$8</td>
            <td style={tdStyle}>$300–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moderate repairs (stairs, flashing, trim)</td>
            <td style={tdStyle}>$8–$12</td>
            <td style={tdStyle}>$600–$1,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Structural repairs (joists, beams, posts)</td>
            <td style={tdStyle}>$10–$20+</td>
            <td style={tdStyle}>$1,500–$4,000+</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full replacement (for comparison)</td>
            <td style={tdStyle}>$15–$35</td>
            <td style={tdStyle}>$4,500–$10,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Per-square-foot numbers are most useful for comparing quotes, not for
        small jobs — a contractor&apos;s $350 minimum means a 20 sq ft patch
        won&apos;t price at $4/sq ft. Always ask whether the quote includes
        demolition and disposal of the damaged material; it should, and it
        runs $1–$3 per square foot when broken out.
      </p>

      <h2>Deck repair prices by job</h2>
      <p>
        The 2026 US range for the most common deck repairs, materials and
        labor included:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Repair</th>
            <th style={thStyle}>Typical cost</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Replace a few deck boards</td>
            <td style={tdStyle}>$200–$600</td>
            <td style={tdStyle}>See our <a href="/guides/cost-to-replace-deck-boards">deck board replacement cost guide</a></td>
          </tr>
          <tr>
            <td style={tdStyle}>Re-secure / replace railing section</td>
            <td style={tdStyle}>$150–$500</td>
            <td style={tdStyle}>Railing is a safety item — don&apos;t defer it</td>
          </tr>
          <tr>
            <td style={tdStyle}>Replace one deck post</td>
            <td style={tdStyle}>$200–$500</td>
            <td style={tdStyle}>See <a href="/guides/deck-post-replacement-cost">deck post replacement cost</a></td>
          </tr>
          <tr>
            <td style={tdStyle}>Repair / rebuild stairs</td>
            <td style={tdStyle}>$200–$1,000</td>
            <td style={tdStyle}>Stringers and treads rot first — see our <a href="/guides/deck-stairs-cost">deck stair repair cost guide</a></td>
          </tr>
          <tr>
            <td style={tdStyle}>Replace ledger board / flashing</td>
            <td style={tdStyle}>$500–$1,500</td>
            <td style={tdStyle}>The #1 cause of deck collapse — act fast</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sister or replace joists</td>
            <td style={tdStyle}>$500–$2,000</td>
            <td style={tdStyle}>Bounce and sag live here</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fix sagging / structural settlement</td>
            <td style={tdStyle}>$1,000–$3,000</td>
            <td style={tdStyle}>Often needs new footings</td>
          </tr>
          <tr>
            <td style={tdStyle}>Power wash + re-stain / seal</td>
            <td style={tdStyle}>$500–$1,500</td>
            <td style={tdStyle}>Maintenance, not repair — do every 2–3 years</td>
          </tr>
        </tbody>
      </table>

      <h2>What moves the price</h2>
      <p>
        Five things decide whether your repair lands at $500 or $2,500:
      </p>
      <ul>
        <li><strong>Structure vs. surface.</strong> This is the big one. Replacing boards on a sound frame is half the price of touching the frame. Any quote that doesn&apos;t distinguish the two is a quote you can&apos;t compare.</li>
        <li><strong>Deck material.</strong> Pressure-treated pine is cheapest to repair ($500–$2,000 typical). Cedar costs 20–30% more in materials. Composite boards run $8–$15 per linear foot installed vs. $4–$8 for pine — see <a href="/guides/cost-to-install-deck-boards">deck board installation cost</a> for the material breakdown.</li>
        <li><strong>Access.</strong> Second-story decks, decks over slopes, and decks with no side access add 20–40% in labor. Everything gets carried; nothing gets tossed in a dumpster conveniently placed.</li>
        <li><strong>Matching materials.</strong> Finding boards that match a 15-year-old deck is genuinely hard — weathered wood doesn&apos;t match new wood. Sometimes a full re-deck of the surface (all boards) is cheaper than the labor of hunting matches, and it looks dramatically better.</li>
        <li><strong>Code upgrades.</strong> Touching structural elements often triggers current-code requirements: proper ledger flashing, joist hangers, post-to-beam connections. That&apos;s real money, but it&apos;s also why the repair outlasts the original.</li>
      </ul>

      <h2>Repair vs. replace: the 50% rule</h2>
      <p>
        Contractors use a simple rule of thumb: <strong>if repairs exceed 50%
        of replacement cost, replace.</strong> A full deck replacement runs
        $4,500–$10,500 for a typical 300 sq ft deck (see our{" "}
        <a href="/guides/deck-replacement-cost">deck replacement cost
        guide</a>), so the tipping point for most decks is around
        $2,500–$5,000 in repairs. Three more signals that replacement wins:
      </p>
      <ul>
        <li><strong>Age:</strong> a pressure-treated deck past 20 years has used up its design life. New repairs on a failing frame buy time, not years.</li>
        <li><strong>Scope:</strong> when rot touches posts AND joists AND the ledger, you&apos;re rebuilding the structure anyway — at that point you&apos;re paying for a replacement and getting a patchwork.</li>
        <li><strong>Footings:</strong> if posts are sitting on soil or undersized pads, every repair is cosmetic. Proper footings mean lifting the deck — once you&apos;re there, replacement is usually the honest recommendation.</li>
      </ul>
      <p>
        The honest middle ground is the <strong>re-deck</strong>: keep the
        sound structure, replace all the surface boards (and usually the
        railings). At $2,500–$5,000 for a 300 sq ft deck, it&apos;s the best
        value in deck work — a new-looking deck on a proven frame. When the
        project grows beyond the surface — new railings, lighting, an expanded
        footprint — it crosses into a <a href="/guides/deck-renovation-cost">full deck renovation</a>,
        and if the old deck has to come down entirely first, budget the{" "}
        <a href="/guides/deck-demolition-cost">deck demolition cost</a> too.
      </p>

      <h2>How a proper deck repair is done</h2>
      <p>
        Whether you DIY the small stuff or hire the big stuff, the process
        order is the same:
      </p>
      <ol>
        <li><strong>Inspect first, price second.</strong> Probe every post base, joist end, and the ledger with a screwdriver — soft wood is rot. Check for bounce by walking the deck and watching for deflection. Never price a repair from photos alone.</li>
        <li><strong>Stabilize and support.</strong> Before removing anything structural, shore up the deck with temporary supports. Removing a rotted post without bracing the beam it carries is how decks — and people — get hurt.</li>
        <li><strong>Remove the damaged material.</strong> Cut back to sound wood — rot doesn&apos;t stop at the visible line. Deck boards get pulled; rotted joist sections get cut out; failed posts get jacked and removed.</li>
        <li><strong>Repair the structure.</strong> Sister new joists alongside damaged ones, replace posts with proper footings and connectors, re-flash the ledger. This is the step that separates a repair from a band-aid.</li>
        <li><strong>Replace the surface.</strong> New boards, new fasteners (stainless or coated — never mix metals with treated lumber), proper 1/8–1/4&quot; gaps for drainage.</li>
        <li><strong>Protect it.</strong> Stain or seal within 30–60 days of installing new wood. The repair fails early if the new material goes unprotected.</li>
      </ol>

      <h2>Repair costs by deck material</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Typical repair range</th>
            <th style={thStyle}>What to know</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$500–$2,000</td>
            <td style={tdStyle}>Cheapest materials; most common repairs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar / redwood</td>
            <td style={tdStyle}>$700–$2,500</td>
            <td style={tdStyle}>20–30% pricier boards; matches age better</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$800–$2,500</td>
            <td style={tdStyle}>Boards cost more; hidden fasteners add labor — see <a href="/guides/composite-deck-cost">composite deck cost</a> for full new-build numbers</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC / capped polymer</td>
            <td style={tdStyle}>$900–$3,000</td>
            <td style={tdStyle}>Specialty fasteners; match color batches</td>
          </tr>
        </tbody>
      </table>

      <h2>Deck repair cost by deck size</h2>
      <p>
        Size scales repair cost, but not linearly — mobilization, minimum
        charges, and access dominate small jobs:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Minor repairs</th>
            <th style={thStyle}>Moderate repairs</th>
            <th style={thStyle}>Structural repairs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>100 sq ft (10×10)</td>
            <td style={tdStyle}>$200–$500</td>
            <td style={tdStyle}>$400–$900</td>
            <td style={tdStyle}>$800–$2,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>200 sq ft (10×20)</td>
            <td style={tdStyle}>$300–$700</td>
            <td style={tdStyle}>$600–$1,400</td>
            <td style={tdStyle}>$1,200–$2,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>300 sq ft (15×20)</td>
            <td style={tdStyle}>$400–$900</td>
            <td style={tdStyle}>$800–$1,800</td>
            <td style={tdStyle}>$1,500–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>500 sq ft (20×25)</td>
            <td style={tdStyle}>$600–$1,200</td>
            <td style={tdStyle}>$1,200–$2,500</td>
            <td style={tdStyle}>$2,500–$6,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice how small decks barely discount: a 100 sq ft deck&apos;s
        moderate repair still runs $400–$900 because the contractor&apos;s
        trip, setup, and minimum charge don&apos;t shrink with the deck.
        This is also why bundling helps — if you need boards replaced AND
        the stairs fixed, one mobilization covers both. Ask for the
        combined price, not two separate minimums.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        The line is structural, not skill-based:
      </p>
      <ul>
        <li><strong>DIY-friendly:</strong> replacing a few surface boards, tightening railings and fasteners, power washing, staining/sealing. If it doesn&apos;t hold the deck up, you can learn it on YouTube.</li>
        <li><strong>Hire a pro:</strong> anything involving posts, joists, beams, or the ledger. Structural work needs shoring knowledge, proper connectors, and usually a permit with inspection. The inspection alone is worth the hire — it verifies the work that keeps people safe.</li>
        <li><strong>The gray zone:</strong> stair repair and full re-decks. Skilled DIYers handle these, but the time cost is real — a pro crew re-decks 300 sq ft in 2–3 days; most homeowners need a full week of evenings and weekends.</li>
      </ul>
      <p>
        DIY saves 50–70% on surface work but $0 on materials — and
        misdiagnosed rot is the classic DIY money pit. When in doubt, pay
        for an inspection ($150–$300); it&apos;s the cheapest professional
        opinion in home repair.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Painting over rot.</strong> Stain and paint hide damage for a season, then the rot spreads behind the coating. Probe before you beautify.</li>
        <li><strong>Replacing boards without checking the frame.</strong> New boards on rotted joists is lipstick on structural failure — and the joists are harder to reach once the new surface is down.</li>
        <li><strong>Ignoring the ledger.</strong> The ledger board connection to the house is the #1 failure point in deck collapses. If it&apos;s rotted or improperly flashed, nothing else matters until it&apos;s fixed.</li>
        <li><strong>Mixing fastener metals.</strong> Standard galvanized or uncoated fasteners corrode in treated lumber. Use hot-dipped galvanized, stainless, or polymer-coated fasteners rated for ACQ/CA lumber.</li>
        <li><strong>Skipping the permit on structural work.</strong> Post, joist, and ledger work usually needs a permit and inspection ($100–$300). Unpermitted structural work is a resale and insurance problem.</li>
        <li><strong>Deferring railing repairs.</strong> A wobbly railing is a liability event waiting for a date. Railings are cheap to fix ($150–$500) and the one repair with genuine safety urgency.</li>
      </ul>
      <p>
        Price the materials for your repair in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a> — boards, fasteners, and concrete by the bag — then
        turn the numbers into a client-ready <a href="/quote">quote</a> in
        minutes. Contractors: if the inspection says the structure is shot,
        walk the homeowner through the{" "}
        <a href="/guides/deck-replacement-cost">replacement numbers</a>{" "}
        honestly. The contractor who talks a client <em>out</em> of a bad
        repair wins the replacement job — and the neighbor&apos;s.
      </p>

      <Faq items={faqs} heading="Deck repair questions, answered" />
    </GuideArticle>
  );
}
