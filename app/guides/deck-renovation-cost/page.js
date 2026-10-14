import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Deck Renovation Cost (2026)",
  description:
    "Deck renovation costs $15-$35 per sq ft in 2026 when you keep the frame. Scope-by-scope pricing, the renovate-vs-replace math, and costly mistakes.",
  keywords: [
    "deck renovation cost",
    "how much does it cost to renovate a deck",
    "deck remodel cost",
    "renovate deck cost per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/guides/deck-renovation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Renovation Cost | CalcBid",
    description:
      "Renovation runs $15-$35 per sq ft when you keep the frame — roughly half the cost of a full rebuild.",
    url: "https://calcbid.com/guides/deck-renovation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Renovation Cost | CalcBid",
    description: "Renovation runs $15-$35 per sq ft when you keep the frame — roughly half the cost of a full rebuild.",
  },
};

const faqs = [
  {
    q: "How much does it cost to renovate a deck in 2026?",
    a: "A deck renovation that keeps the existing frame runs $15–$35 per square foot in the 2026 US range, depending on material. A cosmetic refresh (wash, sand, restain) costs $100–$2,000 for a typical deck, while a full re-deck with composite boards on a 300-square-foot deck lands around $4,500–$10,500. Full tear-out and replacement is roughly double, at $9,000–$25,000+ for the same deck.",
  },
  {
    q: "Is it cheaper to renovate a deck or replace it?",
    a: "Renovation is cheaper whenever the frame is sound — typically about half the cost of full replacement. Replace instead when the renovation estimate exceeds roughly 50% of the replacement quote, when rot or pest damage affects more than about 30% of the structure, or when the deck is past 20 years old and the frame can't be verified as solid. When in doubt, a structural inspection ($200–$500) is cheap insurance.",
  },
  {
    q: "Can I keep the existing frame and just replace the boards?",
    a: "Yes, and that's the entire point of a re-deck: new boards, railings, and stairs on the original joists and beams. First confirm the frame is structurally sound with the screwdriver test — if the tip sinks more than about 1/8 inch into a joist with little resistance, that timber has significant decay and replacement makes more sense. Also check joist spacing: most composite boards require 16 inches on-center, so a frame built at 24 inches may need sistered joists.",
  },
  {
    q: "How long does a deck renovation take?",
    a: "A cosmetic refresh takes 2–4 days (wash, dry, sand, stain). A full re-deck — pulling old boards, repairing the frame, laying new boards and railings — typically takes 3–7 working days for a 300-square-foot deck. Add a week or more if permits are required or stairs and structural repairs are in scope. Weather is the wildcard: boards should be installed in dry conditions, and stain needs 24–48 hours of dry weather to cure.",
  },
  {
    q: "Do I need a permit to renovate my deck?",
    a: "Usually not for cosmetic work like restaining or swapping like-for-like boards. Permits are commonly required when you touch the structure — replacing joists, posts, or the ledger board, changing the deck's footprint, or installing new railings and stairs. Requirements vary by municipality, so check local code before demo day. Unpermitted structural work can stall a home sale later.",
  },
  {
    q: "Should I switch to composite when I renovate my deck?",
    a: "For most homeowners, yes. A composite re-deck costs $15–$35 per square foot — comparable to a high-end wood re-deck — but it eliminates the staining cycle (roughly $550–$1,250 every 2–3 years) for a 25–30+ year lifespan. Over the deck's life, composite's total cost of ownership is often lower than wood's. The tradeoff is a higher upfront bill and a look that some homeowners find less natural than real wood.",
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
      title="Deck Renovation Cost"
      description="Renovate smart: keep the frame, renew the surface, and pay roughly half the cost of a full rebuild."
      slug="deck-renovation-cost"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Renovating a deck costs <strong>$15–$35 per square foot</strong> in the
        2026 US range when you keep the existing frame and renew the surface —
        roughly <strong>half the cost of a full tear-out and rebuild</strong>,
        which runs $9,000–$25,000+ for a typical deck. A cosmetic refresh
        (wash, sand, restain) costs <strong>$100–$2,000</strong> all-in, while
        a full re-deck with composite boards on a 300-square-foot deck lands
        around <strong>$4,500–$10,500</strong> depending on material. The
        frame is the deciding factor: if the joists and posts are solid,
        renovation is the best-value move in outdoor remodeling. If you&apos;re
        still deciding between small fixes and a bigger project, our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a> covers
        the patch-and-fix end of the spectrum.
      </p>

      <h2>2026 deck renovation costs by scope</h2>
      <p>
        &ldquo;Deck renovation&rdquo; covers everything from a weekend refresh
        to a full surface rebuild. The scope you choose is the single biggest
        driver of price — bigger than material or region.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Scope</th>
            <th style={thStyle}>What&apos;s included</th>
            <th style={thStyle}>2026 US range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Cosmetic refresh</td>
            <td style={tdStyle}>
              Wash, sand, restain or seal, replace rusted fasteners
            </td>
            <td style={tdStyle}>$100–$2,000 per deck</td>
          </tr>
          <tr>
            <td style={tdStyle}>Isolated board replacement</td>
            <td style={tdStyle}>
              1–3 damaged boards swapped, frame left untouched
            </td>
            <td style={tdStyle}>$200–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full re-deck, pressure-treated wood</td>
            <td style={tdStyle}>
              New wood boards on the existing frame
            </td>
            <td style={tdStyle}>$15–$25 per sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full re-deck, composite</td>
            <td style={tdStyle}>
              New composite boards, hidden fasteners, existing frame
            </td>
            <td style={tdStyle}>$15–$35 per sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Railing replacement</td>
            <td style={tdStyle}>New railings, balusters, and posts</td>
            <td style={tdStyle}>$15–$30 per ft (wood), $40–$80 per ft (composite)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Structural inspection</td>
            <td style={tdStyle}>
              Professional assessment of frame, ledger, and footings
            </td>
            <td style={tdStyle}>$200–$500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cosmetic refresh is the cheapest way to buy years: industry data puts
        a professional wash at $200–$450 and deck staining at $550–$1,250, so
        a full refresh package typically lands well under $2,000. At the
        other end, a re-deck replaces the entire walking surface, railings,
        and stairs while the paid-for structure underneath stays put — that
        reused frame is where the savings come from.
      </p>

      <h2>What pushes the price up (or down)</h2>
      <p>
        Beyond scope and material, four factors move renovation quotes more
        than most homeowners expect. <strong>Deck height</strong> matters:
        an elevated second-story deck needs scaffolding, safety rigging, and
        slower material handling than a ground-level platform, typically
        adding 10–20% to labor. <strong>Access</strong> is the quiet
        budget-killer — a deck reachable only through the house means every
        board is carried by hand, while a yard with a gate and a clear path
        lets crews stage materials and a dumpster trailer efficiently.
      </p>
      <p>
        <strong>Old coatings</strong> add a full step: if the deck was
        painted or finished with a solid stain, stripping it back to bare
        wood before restaining can cost as much as the staining itself.
        This is where the &ldquo;cheap refresh&rdquo; quote quietly doubles
        — always ask whether stripping is in the bid or assumed away.
        <strong>Add-ons</strong> — lighting, pergolas, built-in benches —
        are priced like mini-projects of their own ($1,700–$3,000 for a
        typical low-voltage lighting package). They are worth doing during
        the renovation, when wiring and mounting are easy, but they should
        be quoted as separate lines, not absorbed into a lump sum.
      </p>
      <p>
        <strong>Region</strong> rounds out the list: labor rates in high
        cost-of-living metros run meaningfully above the national range,
        while rural and lower-cost markets land at the bottom of it. All
        figures in this guide are 2026 US ranges — your local quotes are the
        final word, and getting three of them, itemized, is the single best
        thing you can do for the budget.
      </p>

      <h2>Deck renovation cost by deck size</h2>
      <p>
        Most US residential decks fall between 200 and 400 square feet. Here
        is what each renovation tier typically costs at those sizes, using the
        2026 US ranges above:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Cosmetic refresh</th>
            <th style={thStyle}>Re-deck, wood</th>
            <th style={thStyle}>Re-deck, composite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>200 sq ft (e.g. 10×20)</td>
            <td style={tdStyle}>$100–$1,500</td>
            <td style={tdStyle}>$3,000–$5,000</td>
            <td style={tdStyle}>$3,000–$7,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>300 sq ft (e.g. 15×20)</td>
            <td style={tdStyle}>$100–$2,000</td>
            <td style={tdStyle}>$4,500–$7,500</td>
            <td style={tdStyle}>$4,500–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>400 sq ft (e.g. 16×25)</td>
            <td style={tdStyle}>$200–$2,500</td>
            <td style={tdStyle}>$6,000–$10,000</td>
            <td style={tdStyle}>$6,000–$14,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice the overlap: a premium wood re-deck can cost as much as an
        entry-level composite re-deck. When the quotes land close together,
        the tiebreaker is maintenance — wood needs restaining every 2–3 years
        at roughly $550–$1,250 a pop, while composite needs none of it.
      </p>

      <h2>The renovation process, step by step</h2>
      <p>
        A professional renovation follows the same sequence whether the
        crew is two people or six. Knowing the steps helps you read a quote
        and spot a contractor who is skipping one.
      </p>
      <p>
        <strong>1. Inspect the frame.</strong> Everything hinges on the
        structure. The screwdriver test is the industry standard: push a
        screwdriver into joists, beams, posts, and the ledger board. If it
        sinks more than about 1/8 inch with little resistance, that timber
        has significant decay. Pay special attention to the ledger (where the
        deck attaches to the house), post bases, and any joist ends — those
        are the failure points. Decks older than 20 years deserve a paid
        structural inspection ($200–$500) before you commit to any scope.
      </p>
      <p>
        <strong>2. Choose the scope: renovate or replace.</strong> If the
        frame is sound, you renovate. If more than roughly 30% of the
        structure is rotted or pest-damaged, or the renovation estimate
        climbs past 50% of a replacement quote, you rebuild — see the{" "}
        <a href="/guides/deck-replacement-cost">deck replacement cost guide</a>{" "}
        for that side of the math.
      </p>
      <p>
        <strong>3. Demolish the surface.</strong> Old boards, railings, and
        stair treads come off; the frame stays. Crews typically pry boards
        whole to protect the joists underneath, then pull or grind the old
        fasteners. Budget for disposal — a 300-square-foot deck&apos;s worth
        of boards is a full dumpster load, and hauling fees are a standard
        line item.
      </p>
      <p>
        <strong>4. Repair and reinforce the frame.</strong> This is the
        unglamorous step that determines whether the renovation lasts. Sister
        new lumber to weakened joists, replace the ledger flashing (the #1
        cause of deck collapses is ledger rot), reset or replace wobbly
        posts, and add blocking where railings will mount. If you&apos;re
        switching to composite, check joist spacing now — most composite
        boards require 16 inches on-center, and a 24-inch frame needs
        sistered joists before boards go down. Board-level pricing detail
        lives in our{" "}
        <a href="/guides/cost-to-replace-deck-boards">
          cost to replace deck boards guide
        </a>
        .
      </p>
      <p>
        <strong>5. Lay the new boards.</strong> Start from the house and work
        outward, keeping gaps consistent (1/8–1/4 inch for wood, per the
        manufacturer&apos;s spec for composite). Hidden fasteners add
        roughly $0.50–$1 per square foot in material but deliver the clean,
        screw-free look that sells the renovation. Stagger butt joints across
        joists — lined-up joints telegraph through and weaken the run.
      </p>
      <p>
        <strong>6. Railings and stairs.</strong> Railings are replaced, not
        repaired, in most renovations — old railings rarely meet current
        code, and new ones transform the look. Stairs get new treads and
        stringers as needed; our{" "}
        <a href="/guides/deck-stairs-cost">deck stairs cost guide</a> breaks
        down what each configuration runs. Code check: guardrails are
        typically required at 36 inches minimum height with balusters spaced
        so a 4-inch sphere can&apos;t pass through.
      </p>
      <p>
        <strong>7. Finish and seal (wood only).</strong> Let new
        pressure-treated boards dry 4–8 weeks before staining — staining wet
        lumber traps moisture and guarantees peeling. Then stain or seal
        within the first season. Composite skips this step entirely, which
        is most of its appeal.
      </p>

      <h2>Renovation vs. replacement: the cost math</h2>
      <p>
        For a typical 300-square-foot deck, the 2026 numbers stack up like
        this:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Option</th>
            <th style={thStyle}>300 sq ft range</th>
            <th style={thStyle}>Lifespan gained</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Cosmetic refresh</td>
            <td style={tdStyle}>$100–$2,000</td>
            <td style={tdStyle}>2–4 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood re-deck</td>
            <td style={tdStyle}>$4,500–$7,500</td>
            <td style={tdStyle}>10–15 years (with staining)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite re-deck</td>
            <td style={tdStyle}>$4,500–$10,500</td>
            <td style={tdStyle}>25–30+ years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full replacement</td>
            <td style={tdStyle}>$9,000–$25,000+</td>
            <td style={tdStyle}>25–50 years (new everything)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Three rules of thumb settle the decision for most homeowners:
      </p>
      <ul>
        <li>
          <strong>The 50% rule:</strong> if the renovation estimate exceeds
          about half the cost of a full replacement, replace. You&apos;re
          paying new-deck money for old-deck bones.
        </li>
        <li>
          <strong>The 30% rule:</strong> widespread rot or pest damage across
          more than roughly 30% of the structure means the frame is done —
          patching it is throwing good money after bad.
        </li>
        <li>
          <strong>The 20-year rule:</strong> a deck past 20 years old gets a
          structural inspection ($200–$500) before any renovation quote is
          signed. Fasteners corrode, flashings fail, and footings heave on
          timelines you can&apos;t see from above.
        </li>
      </ul>
      <p>
        One more consideration: layout changes. A renovation keeps the
        existing footprint, stairs, and railings positions. If you want the
        deck bigger, reoriented, or multi-level, that&apos;s a replacement
        project — reframing for a new layout costs nearly as much as starting
        over.
      </p>

      <h2>Renovation material comparison</h2>
      <p>
        The boards you choose set both the upfront price and the next 20
        years of maintenance bills. Here is how the four common options
        compare for a re-deck in 2026:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Materials only</th>
            <th style={thStyle}>Maintenance</th>
            <th style={thStyle}>Lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated wood</td>
            <td style={tdStyle}>$8–$12 per sq ft</td>
            <td style={tdStyle}>Stain/seal every 2–3 yrs (~$550–$1,250)</td>
            <td style={tdStyle}>10–15 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar / redwood</td>
            <td style={tdStyle}>$12–$20 per sq ft</td>
            <td style={tdStyle}>Stain every 2–3 yrs; weathers to gray if left alone</td>
            <td style={tdStyle}>15–20 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite (Trex, TimberTech, Fiberon)</td>
            <td style={tdStyle}>$15–$28 per sq ft</td>
            <td style={tdStyle}>Soap-and-water wash only</td>
            <td style={tdStyle}>25–30+ years</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC (AZEK and similar)</td>
            <td style={tdStyle}>$20–$35 per sq ft</td>
            <td style={tdStyle}>None — fully moisture-proof</td>
            <td style={tdStyle}>30–50 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        The total-cost-of-ownership math favors composite more often than
        homeowners expect. A wood re-deck at $6,000 plus nine staining
        cycles (~$550–$1,250 each over 25 years) can easily exceed $12,000
        lifetime, while a composite re-deck at $8,000 costs $8,000, full
        stop. That is why most renovation contractors now quote composite as
        the default and wood as the budget option — the reverse of a decade
        ago.
      </p>

      <h2>Contractor tips for the best renovation price</h2>
      <ul>
        <li>
          <strong>Book in the off-season.</strong> Contractor availability
          rises and pricing typically drops 10–20% in fall and winter versus
          the spring/summer peak. Same crew, same boards, lower bid.
        </li>
        <li>
          <strong>Inspect before you quote.</strong> Do the screwdriver test
          yourself before calling contractors — knowing the frame&apos;s
          condition stops anyone from selling you a replacement you
          don&apos;t need, or a re-deck on a frame that&apos;s finished.
        </li>
        <li>
          <strong>Get board-only and turnkey quotes.</strong> Ask for the
          re-deck priced with boards alone, then with railings, stairs, and
          lighting added. Unbundled quotes reveal which add-ons carry the
          fattest margins.
        </li>
        <li>
          <strong>Keep the layout.</strong> Moving stairs or changing the
          footprint turns a renovation into reframing. Every layout change
          adds labor hours at the highest-margin part of the job.
        </li>
        <li>
          <strong>Price the maintenance, not just the install.</strong> When
          wood and composite quotes land within a few thousand of each
          other, add up 15 years of staining before choosing. The &ldquo;cheap&rdquo;
          option usually isn&apos;t.
        </li>
        <li>
          <strong>Get it in writing, itemized.</strong> Demo, disposal,
          framing repairs, boards, fasteners, railings, stairs, permits —
          each on its own line. Itemized bids are comparable; lump-sum bids
          are not.
        </li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Re-decking over a failing frame.</strong> New boards on
          rotting joists is the most expensive mistake in this guide — you
          pay for the re-deck, then pay again for the rebuild two years
          later. The $200–$500 inspection is never the wrong call on an old
          deck.
        </li>
        <li>
          <strong>Ignoring joist spacing.</strong> Most composite boards
          demand 16-inch on-center framing. Laying composite on a 24-inch
          frame voids the warranty and leaves a bouncy, sagging surface.
          Sistering joists costs a fraction of a do-over.
        </li>
        <li>
          <strong>Staining new pressure-treated wood too soon.</strong> Wet
          lumber rejects stain. Wait 4–8 weeks of dry weather, then test
          with a water sprinkle — if it beads, wait; if it soaks in, stain.
        </li>
        <li>
          <strong>Reusing old fasteners and flashing.</strong> Corroded
          screws stain the new boards and fail early; failed ledger flashing
          rots the house framing. New hardware is a few hundred dollars on
          a multi-thousand-dollar job — never the place to save.
        </li>
        <li>
          <strong>Skipping permits for structural work.</strong> Swapping
          joists, posts, or railings without a permit risks a stop-work
          order mid-job and a disclosure problem at sale time. Cosmetic work
          is usually exempt; structural work usually isn&apos;t.
        </li>
        <li>
          <strong>Choosing on price alone.</strong> The lowest bid often
          omits disposal, permits, or framing repairs that appear as
          &ldquo;unforeseen&rdquo; change orders later. Compare itemized
          scopes, not bottom lines.
        </li>
      </ul>
      <p>
        Run your deck&apos;s numbers in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>,
        then turn the winning scope into a{" "}
        <a href="/quote">quote</a> you can compare line by line. For a full
        tear-out, price it in our{" "}
        <a href="/guides/deck-replacement-cost">deck replacement cost guide</a>{" "}
        first — knowing both numbers is what makes the renovation decision
        an easy one.
      </p>

      <Faq items={faqs} heading="Deck renovation questions, answered" />
    </GuideArticle>
  );
}
