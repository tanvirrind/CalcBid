import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Deck Demolition Cost (2026)",
  description:
    "Tearing down a deck in 2026: pro costs $500–$2,000, DIY runs $200–$600, plus dumpster math, permits, and when demo is smarter than repair.",
  keywords: [
    "deck demolition cost",
    "cost to tear down a deck",
    "deck removal cost",
    "how much to demolish a deck",
    "deck teardown cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/deck-demolition-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Demolition Cost | CalcBid",
    description:
      "Pro deck teardown runs $500–$2,000 in 2026; DIY lands at $200–$600. Real line items, dumpster math, and permits.",
    url: "https://calcbid.com/guides/deck-demolition-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Demolition Cost | CalcBid",
    description: "Pro deck teardown runs $500–$2,000 in 2026; DIY lands at $200–$600. Real line items, dumpster math, and permits.",
  },
};

const faqs = [
  {
    q: "How much does it cost to demolish a deck?",
    a: "The 2026 US range is $500–$2,000 for a typical single-level wood deck when you hire a contractor, or $4–$15 per square foot including haul-away. A 12×12 deck usually lands between $600 and $1,500 all-in. Multi-level or second-story decks with concrete footings can run $5,000–$7,000 or more.",
  },
  {
    q: "How long does deck demolition take?",
    a: "A two-person professional crew tears down and hauls away a standard 300 sq ft deck in one to two days. DIY, plan on one to two full weekends: a weekend for the teardown and another for hauling and cleanup. Second-story decks and concrete footing removal each add roughly a day to either timeline.",
  },
  {
    q: "Do I need a permit to tear down a deck?",
    a: "It depends on your municipality. Most cities require a demolition permit ($50–$150) when the deck is attached to the house or elevated, because the removal affects the structure. Detached, ground-level decks are often exempt. Check your local building department before the first board comes up — the fine for unpermitted demo can exceed the permit cost many times over.",
  },
  {
    q: "Can I demolish my own deck to save money?",
    a: "Yes, and it cuts the bill roughly in half: DIY demolition with a rented dumpster runs $200–$600 versus $500–$2,000 for a pro crew. Ground-level decks under 200 sq ft are very DIY-friendly. Draw the line at second-story decks, decks attached with a ledger board you might damage, and concrete footing removal — those are where injuries and expensive mistakes cluster.",
  },
  {
    q: "What happens to the old deck lumber — can it be recycled?",
    a: "Untreated lumber and cedar can often be reused or donated — Habitat ReStores and local salvage yards take clean boards, and some contractors credit the salvage value. Pressure-treated lumber cannot be burned (it releases arsenic compounds) and usually must go to a landfill, so it costs more to dispose of. Metal hardware and aluminum railing can be sold to scrap yards, which offsets part of your disposal cost.",
  },
  {
    q: "Is it cheaper to demolish a deck or repair it?",
    a: "Repair is almost always cheaper when the frame is sound — resurfacing a deck with new boards typically costs 30–50% of a full teardown-and-rebuild. Demolition wins when the framing is rotted, the deck is improperly attached to the house, or the layout no longer fits how you use the yard. Run the numbers both ways before you start swinging a hammer.",
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
      title="Deck Demolition Cost"
      description="Pro teardown runs $500–$2,000 in 2026; DIY lands at $200–$600 — here are the real line items so you don't blow the budget on disposal."
      slug="deck-demolition-cost"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Tearing down a deck costs a <strong>2026 US range of $500–$2,000</strong>{" "}
        when you hire a professional crew, or <strong>$200–$600 DIY</strong>{" "}
        if you rent a dumpster and do the work yourself. Per square foot, pros
        charge <strong>$4–$15</strong> for teardown plus haul-away. A 12×12
        deck (144 sq ft) typically lands around $600–$1,500 all-in, while a
        400+ sq ft multi-level deck with concrete footings can push past
        $7,000. Before you commit to demolition, check whether repair is the
        smarter play — if the framing is sound, resurfacing costs a fraction
        of a full rebuild. Our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a> walks
        through the fix-vs.-tear-down math so you don&apos;t pay for a
        demolition you didn&apos;t need.
      </p>

      <h2>2026 deck removal rates per square foot</h2>
      <p>
        Contractors price teardown per square foot because the work scales
        almost perfectly with deck area: more boards, more fasteners, more
        debris. These 2026 US ranges include labor and loading; disposal is
        priced separately below.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck type</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>Why the price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Ground-level wood deck, easy access</td>
            <td style={tdStyle}>$4–$8</td>
            <td style={tdStyle}>No ladders, no fall protection, fastest teardown</td>
          </tr>
          <tr>
            <td style={tdStyle}>Elevated / attached deck</td>
            <td style={tdStyle}>$6–$10</td>
            <td style={tdStyle}>Working at height + careful ledger-board removal</td>
          </tr>
          <tr>
            <td style={tdStyle}>Multi-level or second-story deck</td>
            <td style={tdStyle}>$8–$15</td>
            <td style={tdStyle}>Fall protection, staging, longer debris handling</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite / PVC deck</td>
            <td style={tdStyle}>$6–$12</td>
            <td style={tdStyle}>Heavier boards, hidden-fastener clips add labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Concrete footing removal (add-on)</td>
            <td style={tdStyle}>$100–$250 per footing</td>
            <td style={tdStyle}>Digging, breaking, and hauling heavy concrete</td>
          </tr>
        </tbody>
      </table>
      <p>
        Site access moves you within the range. A deck the crew can back a
        truck to prices at the low end; a deck behind a narrow fence gate
        with no equipment access gets hand-demolished board by board and
        prices at the top. Mention access on the estimate visit — it&apos;s
        one of the first things a contractor prices.
      </p>

      <h2>Full teardown cost by deck size</h2>
      <p>
        All-in totals including haul-away, for a single-level wood deck with
        standard access. These are 2026 US contractor ranges, not
        handyman-cash prices:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Square feet</th>
            <th style={thStyle}>Pro teardown + haul-away</th>
            <th style={thStyle}>DIY (dumpster + tools)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10 × 10</td>
            <td style={tdStyle}>100</td>
            <td style={tdStyle}>$500–$1,000</td>
            <td style={tdStyle}>$200–$400</td>
          </tr>
          <tr>
            <td style={tdStyle}>12 × 12</td>
            <td style={tdStyle}>144</td>
            <td style={tdStyle}>$600–$1,500</td>
            <td style={tdStyle}>$250–$500</td>
          </tr>
          <tr>
            <td style={tdStyle}>12 × 16</td>
            <td style={tdStyle}>192</td>
            <td style={tdStyle}>$800–$1,800</td>
            <td style={tdStyle}>$300–$550</td>
          </tr>
          <tr>
            <td style={tdStyle}>16 × 16</td>
            <td style={tdStyle}>256</td>
            <td style={tdStyle}>$1,000–$2,500</td>
            <td style={tdStyle}>$350–$650</td>
          </tr>
          <tr>
            <td style={tdStyle}>20 × 20</td>
            <td style={tdStyle}>400</td>
            <td style={tdStyle}>$2,500–$5,000</td>
            <td style={tdStyle}>$450–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>400+ sq ft, multi-level</td>
            <td style={tdStyle}>400+</td>
            <td style={tdStyle}>$5,000–$7,000+</td>
            <td style={tdStyle}>$600–$1,100</td>
          </tr>
        </tbody>
      </table>
      <p>
        The DIY column assumes you already own basic hand tools and rent a
        dumpster (see below). Add $100–$200 if you&apos;re buying pry bars,
        a reciprocating saw with demolition blades, a sledgehammer, and
        safety gear from scratch — and value your weekends honestly before
        comparing the two columns.
      </p>

      <h2>Disposal: the line item that breaks budgets</h2>
      <p>
        Debris removal is routinely the single biggest line item in a deck
        demolition — sometimes larger than the labor itself. A 300 sq ft wood
        deck generates roughly 1.5–2 tons of debris and fills most of a
        20-yard dumpster. Price disposal <em>before</em> you start tearing
        boards up:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Disposal option</th>
            <th style={thStyle}>2026 US cost</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10-yard dumpster (holds ~1–2 tons)</td>
            <td style={tdStyle}>$300–$550</td>
            <td style={tdStyle}>Decks under ~150 sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>20-yard dumpster (holds ~3–4 tons)</td>
            <td style={tdStyle}>$425–$820</td>
            <td style={tdStyle}>The sweet spot for most decks</td>
          </tr>
          <tr>
            <td style={tdStyle}>30-yard dumpster (holds ~5–6 tons)</td>
            <td style={tdStyle}>$550–$1,100</td>
            <td style={tdStyle}>Large or multi-level decks</td>
          </tr>
          <tr>
            <td style={tdStyle}>Junk removal crew, half truckload</td>
            <td style={tdStyle}>$250–$450</td>
            <td style={tdStyle}>You stack it, they haul it</td>
          </tr>
          <tr>
            <td style={tdStyle}>Junk removal crew, full truckload</td>
            <td style={tdStyle}>$500–$850</td>
            <td style={tdStyle}>Full-service: they load and haul</td>
          </tr>
          <tr>
            <td style={tdStyle}>Self-haul to the landfill</td>
            <td style={tdStyle}>$50–$150 per ton</td>
            <td style={tdStyle}>Only if you own a truck and a free weekend</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two things inflate disposal cost that homeowners never see coming.
        First, pressure-treated lumber can&apos;t go in burn piles or
        brush-pickup loads — it has to go to a landfill or C&amp;D facility,
        and some facilities charge a premium for it. Second, concrete footings
        are dead weight: four 12-inch footings can add half a ton to your
        dumpster, and most rentals cap weight with overage fees of
        $50–$100 per extra ton. Leave the footings in the ground if your
        replacement plan allows it.
      </p>

      <h2>What moves your price up or down</h2>
      <ul>
        <li><strong>Access.</strong> Truck-to-deck access prices at the low end; narrow gates and no-equipment-access jobs get hand-demolished and cost 20–40% more.</li>
        <li><strong>Attachment.</strong> A deck bolted to the house with a ledger board takes careful disassembly so the siding and rim joist survive — budget extra versus a freestanding deck.</li>
        <li><strong>Footings.</strong> Pulling concrete footings roughly doubles the labor of a framing-only teardown. If the new deck can reuse or ignore the old footings, leave them.</li>
        <li><strong>Material.</strong> Composite and PVC boards are heavier per square foot and use hidden fasteners that slow removal; vinyl-over-wood systems need the layers separated.</li>
        <li><strong>Stairs, railings, pergolas.</strong> Each attached structure is its own mini-demolition. A flight of stairs or a pergola adds $150–$400 to the bill.</li>
        <li><strong>Location.</strong> Labor rates in coastal metros run 30–50% above Midwest and Southern pricing for the same deck. Rural jobs add haul distance to landfills.</li>
      </ul>

      <h2>Step-by-step: how a deck comes down</h2>
      <p>
        Whether you DIY or want to judge a contractor&apos;s process, the
        correct teardown order is the same. Demolition is deconstruction in
        reverse — top down, outside in, never yanking at the structure:
      </p>
      <ol>
        <li><strong>Clear and shut off.</strong> Remove furniture, grills, and planters. Shut off any deck lighting, outlets, or gas lines at the breaker and valve — not just the switch.</li>
        <li><strong>Check permits and utilities.</strong> Confirm whether your city needs a demolition permit ($50–$150) and call 811 before you dig out any footings. Photograph the house wall behind the deck now, in case of a later dispute.</li>
        <li><strong>Salvage first.</strong> Pull any boards worth reusing or donating before the sledgehammers come out. Clean cedar and pressure-treated boards in good shape go to Habitat ReStores or local salvage yards — some contractors credit the salvage value against the bill.</li>
        <li><strong>Railings and stairs next.</strong> Unbolt railings and remove stairs before touching the main platform. They&apos;re top-heavy and the first thing to hurt someone if the deck shifts.</li>
        <li><strong>Pop the deck boards.</strong> Work from one end, prying boards up with a wrecking bar. Cut long runs with a reciprocating saw to make handleable lengths. Stack boards neatly — a tidy pile loads a dumpster twice as fast.</li>
        <li><strong>Dismantle the framing.</strong> Unbolt or cut joists and beams, then the posts. If the deck has a ledger board bolted to the house, remove the bolts and patch the flashing and siding carefully — this is the step that damages houses.</li>
        <li><strong>Deal with the footings.</strong> Decide: reuse, bury, or remove. Removal means digging around each footing, rocking it loose, and hauling it out — the heaviest, slowest part of the job. Buried footings are fine where code allows; mark their locations for the rebuild crew.</li>
        <li><strong>Sort, load, and grade.</strong> Separate metal hardware for scrap (it offsets disposal cost), stack lumber tight in the dumpster, and do a final sweep with a magnetic nail roller. Regrade or rake the soil so water drains away from the house.</li>
      </ol>

      <h2>DIY vs. hiring a pro</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}></th>
            <th style={thStyle}>DIY</th>
            <th style={thStyle}>Pro crew</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Cash cost</strong></td>
            <td style={tdStyle}>$200–$600 (dumpster + tool rental)</td>
            <td style={tdStyle}>$500–$2,000 (typical deck)</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Time</strong></td>
            <td style={tdStyle}>1–2 weekends</td>
            <td style={tdStyle}>1–2 days</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Injury risk</strong></td>
            <td style={tdStyle}>Yours — nails, splinters, strains, falls</td>
            <td style={tdStyle}>Insured crew with proper equipment</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Disposal</strong></td>
            <td style={tdStyle}>You book, load, and mind the weight caps</td>
            <td style={tdStyle}>Included; they know the facilities</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Best when</strong></td>
            <td style={tdStyle}>Ground-level, under ~200 sq ft, freestanding</td>
            <td style={tdStyle}>Second story, ledger-attached, footing work</td>
          </tr>
        </tbody>
      </table>
      <p>
        The honest math: DIY saves roughly half the cash but costs two
        weekends and the injury risk of demolition work — splinters, rusty
        nails, and back strains are the standard souvenirs. A pro crew is
        worth it the moment the deck is elevated, attached to the house, or
        sitting on concrete footings you don&apos;t want to dig out by hand.
        If you do go DIY, rent the dumpster <em>before</em> demo day —
        nothing stalls a teardown like a debris pile with nowhere to go.
      </p>

      <h2>Trade tips: permits and disposal done right</h2>
      <p>
        <strong>Permits.</strong> Most cities require a demolition permit
        ($50–$150) when the deck is attached to the house or elevated, because
        removal affects the structure and the ledger connection. Detached,
        ground-level platforms are often exempt. A quick call to the building
        department takes ten minutes; the fine for unpermitted demo — plus
        the stop-work order while you sort it out — costs far more. HOAs add
        their own layer: some require approval before any exterior structure
        disappears.
      </p>
      <p>
        <strong>Call 811 before you dig.</strong> Footing removal means
        digging, and deck footings sit exactly where builders ran gas,
        electric, and irrigation lines to the house. The locate service is
        free; hitting a gas line is not.
      </p>
      <p>
        <strong>Disposal and recycling.</strong> Sort as you go — it&apos;s
        cheaper than sorting at the dumpster. Clean untreated lumber and
        cedar: donate or sell. Pressure-treated wood: landfill only, never
        burn — burning treated lumber releases arsenic compounds and is
        illegal in most states. Composite decking: check the manufacturer;
        several run take-back recycling programs. Metal hardware, brackets,
        and aluminum railing: scrap yard, which typically pays enough to cover
        lunch and then some. Concrete footings: many C&amp;D recyclers crush
        them into road base for less than landfill tipping fees.
      </p>
      <p>
        <strong>Lead paint.</strong> Decks painted before 1978 may carry lead
        paint. If the old finish is chalking or peeling, a $25 test kit beats
        a lead-exposure problem — and contractors price lead-safe work
        practices differently, so find out before you collect quotes.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Skipping the permit check.</strong> A ten-minute call to the building department prevents stop-work orders and fines that dwarf the $50–$150 permit fee.</li>
        <li><strong>Underestimating the debris.</strong> Homeowners routinely order a dumpster one size too small. A 300 sq ft deck fills most of a 20-yard dumpster — when in doubt, go one size up; the upgrade is cheaper than a second rental.</li>
        <li><strong>Burning pressure-treated lumber.</strong> It releases arsenic compounds and is illegal in most states. Treated wood goes to the landfill, full stop.</li>
        <li><strong>Yanking the ledger off the house.</strong> Ripping the ledger board instead of unbolting it tears siding, flashing, and sometimes the rim joist — turning a demo into a repair bill. Work the fasteners out in order.</li>
        <li><strong>Forgetting the footings in the quote.</strong> Footing removal can double the labor. Confirm in writing whether the price includes digging them out, cutting them flush, or leaving them — and decide which you actually need.</li>
        <li><strong>DIY-ing a second-story teardown.</strong> Elevated demolition is where the injuries happen: falls, shifting loads, and debris dropped from height. Ground-level is a weekend project; second story is a contractor&apos;s job.</li>
      </ul>
      <p>
        Once the old deck is gone, the next question is what replaces it.
        Our <a href="/guides/deck-replacement-cost">deck replacement cost
        guide</a> prices full rebuilds by material — wood, composite, and
        PVC — so you can budget the teardown and the rebuild as one project
        instead of getting surprised twice. Price the replacement materials in
        the <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a>, then push the numbers into a <a href="/quote">quote</a>{" "}
        and send it before you leave the job site.
      </p>

      <Faq items={faqs} heading="Deck demolition questions, answered" />
    </GuideArticle>
  );
}
