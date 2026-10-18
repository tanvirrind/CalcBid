import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Build a Deck (2026)",
  description:
    "Building a deck costs $30–$75 per sq ft installed in 2026. Prices by material and size, permits, labor splits, and DIY-vs-pro math inside.",
  keywords: [
    "cost to build a deck",
    "deck cost per square foot",
    "deck building cost",
    "how much does it cost to build a deck",
    "average cost to build a deck",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-build-a-deck" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Build a Deck (2026) | CalcBid",
    description:
      "Per-sq-ft pricing for wood, composite and PVC, totals by deck size, and the line items a real deck quote is built from.",
    url: "https://calcbid.com/guides/cost-to-build-a-deck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Build a Deck (2026) | CalcBid",
    description: "Per-sq-ft pricing by material, totals by size, permits, and the DIY math.",
  },
};

const faqs = [
  {
    q: "How much does it cost to build a deck per square foot?",
    a: "In the 2026 US range, a professionally built deck costs $30–$75 per square foot installed, depending on material: pressure-treated pine runs $30–$60, cedar $45–$70, composite $35–$70, and cellular PVC $60–$80. That covers footings, framing, boards, railings, fasteners, and labor. Ground-level platforms land at the low end; elevated, multi-level, or stair-heavy designs land at the top.",
  },
  {
    q: "How much does a 16x20 deck cost?",
    a: "A 16×20 deck (320 sq ft) costs $9,600–$19,200 in pressure-treated wood and $11,200–$22,400 in composite at 2026 installed pricing. Premium builds run higher — the 2025 Zonda Cost vs Value Report put a 16×20 composite deck addition at $25,096 nationally. Stairs, premium railings, lighting, and permits sit on top of the base range.",
  },
  {
    q: "Is it cheaper to build a deck yourself?",
    a: "Yes on paper: DIY materials run $15–$35 per square foot, so a competent DIY build saves roughly 40–50% versus hiring a pro. The trade-offs are real — the deck is a structure, footings and ledger attachment have to be right, permits and inspections still apply in most jurisdictions, and a pro crew finishes in days what takes most homeowners 3–6 weekends. A common middle path is hiring out the footings and framing and laying the boards and railing yourself.",
  },
  {
    q: "Do I need a permit to build a deck?",
    a: "Usually, yes for attached decks and any deck over 30 inches above grade or over 200 sq ft — the exact triggers are local. Permits typically cost $100–$500 and come with footing, framing, and final inspections. Freestanding ground-level platforms are exempt in some areas, but setback rules and HOA restrictions can still apply. Unpermitted decks create real problems at resale and with insurance claims.",
  },
  {
    q: "How long does it take to build a deck?",
    a: "A professional crew builds a standard 320 sq ft deck in about 3–7 working days once work starts, but permits and inspections stretch the full project to 1–3 weeks in most areas. Complex, multi-level, or elevated designs run 2–4 weeks of build time. DIY builds typically take 3–6 weekends for a straightforward platform.",
  },
  {
    q: "What is the cheapest deck to build?",
    a: "A ground-level pressure-treated platform in a simple rectangle is the cheapest build: roughly $30–$45 per square foot installed, or $15–$25 per square foot in DIY materials. Staying at grade skips most railing and stair costs, a rectangle avoids angled cuts and extra framing, and standard deck boards are the lowest-cost surface. Building in the off-season (late fall through early spring) also softens contractor pricing in many regions.",
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
      title="Cost to Build a Deck"
      description="What a new deck really costs in 2026 — per-sq-ft pricing for every material, totals by size, permit rules, and where the quote money actually goes."
      slug="cost-to-build-a-deck"
      updated="October 2026"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate your deck"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Building a deck costs <strong>$30–$75 per square foot installed</strong>{" "}
        in the 2026 US range. A typical 16×20 (320 sq ft) backyard deck lands{" "}
        <strong>$9,600–$19,200 in pressure-treated wood</strong> and{" "}
        <strong>$11,200–$22,400 in composite</strong> — footings, framing,
        boards, railings, and labor included. The spread is not padding; it is
        mostly material choice, height above grade, and how much stair and
        railing the design needs. This guide prices a brand-new build. If your
        existing deck is failing, compare against our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a> first —
        repair sometimes beats a new build, and sometimes it is money poured
        into a dying frame.
      </p>

      <h2>Deck cost per square foot by material</h2>
      <p>
        Installed pricing for a standard attached deck on a new substructure,
        with code railings where height requires them. Materials (footings,
        framing, boards, fasteners, railings) are roughly half the installed
        figure on a typical build; labor is the other half.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>16×20 total (320 sq ft)</th>
            <th style={thStyle}>Typical lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$30–$60</td>
            <td style={tdStyle}>$9,600–$19,200</td>
            <td style={tdStyle}>15–25 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar</td>
            <td style={tdStyle}>$45–$70</td>
            <td style={tdStyle}>$14,400–$22,400</td>
            <td style={tdStyle}>20–30 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$35–$70</td>
            <td style={tdStyle}>$11,200–$22,400</td>
            <td style={tdStyle}>25–40 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cellular PVC</td>
            <td style={tdStyle}>$60–$80</td>
            <td style={tdStyle}>$19,200–$25,600</td>
            <td style={tdStyle}>40–50 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two cautions on these bands. First, the per-sq-ft figure falls as decks
        get bigger — fixed costs like permits, mobilization, and a basic stair
        run spread over more area — so a small deck prices high per foot and a
        large one lower. Second, material is a lifetime decision, not just a
        build price: wood is cheapest to build and most expensive to own
        (stain or seal every 2–3 years), while composite trades a higher build
        price for near-zero upkeep. The full tier-by-tier breakdown is in our{" "}
        <a href="/guides/composite-deck-cost">composite deck cost guide</a>.
      </p>

      <h2>Cost by deck size</h2>
      <p>
        Installed totals at 2026 pricing for ordinary attached decks with a new
        substructure, basic railing, and a simple stair run where height
        requires one.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Sq ft</th>
            <th style={thStyle}>Pressure-treated wood</th>
            <th style={thStyle}>Composite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>12 × 12</td>
            <td style={tdStyle}>144</td>
            <td style={tdStyle}>$4,320–$8,640</td>
            <td style={tdStyle}>$5,040–$10,080</td>
          </tr>
          <tr>
            <td style={tdStyle}>12 × 16</td>
            <td style={tdStyle}>192</td>
            <td style={tdStyle}>$5,760–$11,520</td>
            <td style={tdStyle}>$6,720–$13,440</td>
          </tr>
          <tr>
            <td style={tdStyle}>16 × 20</td>
            <td style={tdStyle}>320</td>
            <td style={tdStyle}>$9,600–$19,200</td>
            <td style={tdStyle}>$11,200–$22,400</td>
          </tr>
          <tr>
            <td style={tdStyle}>20 × 20</td>
            <td style={tdStyle}>400</td>
            <td style={tdStyle}>$12,000–$24,000</td>
            <td style={tdStyle}>$14,000–$28,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ground-level platforms can land below these bands (less framing, no
        railing, no stairs). Second-story, multi-level, or wraparound designs
        land above them. For a hard reference point, the 2025 Zonda Cost vs
        Value Report priced a 16×20 composite deck addition at $25,096
        nationally — above the mid-range here, reflecting premium finishes —
        with 88.5% of the cost recouped at resale.
      </p>

      <h2>What a deck quote actually includes</h2>
      <p>
        A proper deck quote is six line items. If any of them are missing from
        a bid, they are either buried in the lump sum or coming back as a
        change order:
      </p>
      <ul>
        <li><strong>Footings and foundation (~10–15% of total).</strong> Concrete footings dug below the frost line, posts, and hardware. Rocky soil, steep grades, and engineered footings for elevated decks push this line up fast.</li>
        <li><strong>Framing (~20–25%).</strong> Pressure-treated beams, joists, ledger board and flashing where the deck meets the house. The ledger connection is the most safety-critical joint on the whole structure.</li>
        <li><strong>Decking boards (~20–30%).</strong> $3–$9 per linear foot depending on material tier; a 320 sq ft deck uses 650–700 linear feet of board. Our <a href="/guides/cost-to-install-deck-boards">deck board installation guide</a> breaks down the board math.</li>
        <li><strong>Railings (~10–20%).</strong> Code-required on decks more than 30 inches above grade. Basic wood or composite rail is the budget option; aluminum and cable systems run $50–$100+ per linear foot.</li>
        <li><strong>Stairs.</strong> $200–$500 per step including stringers, treads, and handrail — priced separately in our <a href="/guides/deck-stairs-cost">deck stairs cost guide</a>. A tall deck&apos;s stair run is a four-figure line item, not a rounding error.</li>
        <li><strong>Permits, labor, and disposal.</strong> Permits run $100–$500; labor overall is roughly half the installed price; and if an old deck comes out first, tear-out adds $3–$5 per sq ft — see <a href="/guides/deck-demolition-cost">deck demolition cost</a>.</li>
      </ul>
      <p>
        Compare bids line by line, not by the bottom number. Two quotes $5,000
        apart usually differ in scope — one includes railings, stairs, and
        permits, the other discovers them later.
      </p>

      <h2>What moves the price</h2>
      <ul>
        <li><strong>Material.</strong> The biggest single lever: the same 320 sq ft footprint is a $9,600 wood deck or a $25,600 PVC deck.</li>
        <li><strong>Height above grade.</strong> Ground-level platforms are framing-lite. Every foot of elevation adds post, beam, bracing, and stair cost; second-story decks routinely add $10–$20 per sq ft.</li>
        <li><strong>Design complexity.</strong> Rectangles are cheap. Angles, curves, multiple levels, and diagonal board patterns multiply cuts, waste, and labor.</li>
        <li><strong>Stairs and railings.</strong> Together they can reach a third of an elevated deck&apos;s price — and they are the lines most often lowballed in a first quote.</li>
        <li><strong>Site and access.</strong> Tight side yards, slopes, and hand-carried materials slow everything down. Grading or drainage work adds thousands on bad lots.</li>
        <li><strong>Region and season.</strong> Labor markets move totals 20–30% between regions, and spring bookings price higher than late-fall ones in most of the country.</li>
        <li><strong>Extras.</strong> Built-in seating, lighting ($500–$2,000), pergolas, and under-deck drainage ($3–$8/sq ft) are each priced on top of the base build.</li>
      </ul>

      <h2>Permits, codes, and inspections</h2>
      <p>
        Most jurisdictions require a permit for attached decks and for any deck
        more than 30 inches above grade or larger than 200 sq ft — the exact
        triggers are local, so check before you design around them. Budget
        $100–$500 for the permit and expect two or three inspections: footings
        before the pour, framing before the boards go down, and a final once
        railings and stairs are in. Setback rules, lot-coverage limits, and HOA
        approvals can all constrain size and placement even when a permit is
        straightforward.
      </p>
      <p>
        Skipping the permit is the most expensive saving in this category. An
        unpermitted deck surfaces at resale (and can force removal), weakens
        insurance claims if anyone is hurt on it, and is built without the
        footing and ledger inspections that catch the failures decks are known
        for. The permit is the cheapest structural insurance on the project.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        DIY materials for a wood deck run <strong>$15–$25 per sq ft</strong>{" "}
        (composite $20–$35), so building it yourself saves roughly 40–50%
        against the installed price — a 320 sq ft wood deck is about $5,000–
        $8,000 in materials against $9,600–$19,200 hired out. That saving buys
        real obligations: the structure carries people, footings must reach
        below frost, the ledger must be flashed and bolted correctly, and
        permits and inspections apply to homeowner-builders too. Add tool
        purchases or rentals and 3–6 weekends of work.
      </p>
      <p>
        The hybrid route splits the difference and is what many contractors
        quietly recommend: hire out the footings and framing (the structural,
        inspection-heavy part), then lay boards and build the railing yourself
        (the visible, forgiving part). Whichever route you take, price the
        material list first — our{" "}
        <a href="/calculators/deck-board-calculator">deck board calculator</a>{" "}
        works out boards, and the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a> covers posts, framing, and the full estimate.
      </p>

      <h2>Ways to keep the cost down</h2>
      <ul>
        <li><strong>Build a rectangle at grade.</strong> The single cheapest design decision: no angles, minimal railing, no long stair run.</li>
        <li><strong>Choose pressure-treated boards now, upgrade later.</strong> The frame is the permanent part; boards can be swapped for composite in 10–15 years when the budget recovers.</li>
        <li><strong>Get three itemized quotes.</strong> Identical scope, line by line — the spread between bids on the same deck is routinely 25–40%.</li>
        <li><strong>Book off-season.</strong> Late fall and winter slots are discounted in most markets and come with shorter waits.</li>
        <li><strong>Plan the extras before signing.</strong> Lighting, drainage, and seating added mid-build are priced as change orders — always the expensive way to buy them.</li>
        <li><strong>Do the demolition yourself.</strong> Tearing out an old deck is unskilled labor at $3–$5 per sq ft; a weekend of it can save $1,000+.</li>
      </ul>
      <p>
        When you&apos;re ready to turn these ranges into your number, run the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a> for a material-level estimate, then compare it against
        contractor bids in a proper <a href="/quote">quote</a> — if a bid lands
        far outside the ranges above, the scope is different, not the market.
      </p>

      <Faq items={faqs} heading="Deck building cost questions, answered" />
    </GuideArticle>
  );
}
