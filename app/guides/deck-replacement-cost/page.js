import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Deck Replacement Cost (2026)",
  description:
    "Deck replacement costs $4,500–$14,000 in 2026. Per-square-foot pricing by material, demolition costs, and when a re-deck beats full replacement.",
  keywords: [
    "deck replacement cost",
    "cost of a deck replacement",
    "cost to replace deck",
    "deck replacement cost per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/guides/deck-replacement-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Replacement Cost (2026) | CalcBid",
    description:
      "$4,500–$14,000 installed. Per-square-foot pricing by material, demolition costs, and when a re-deck beats full replacement.",
    url: "https://calcbid.com/guides/deck-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Replacement Cost (2026) | CalcBid",
    description: "$4,500–$14,000 installed. Per-square-foot pricing by material, demolition, and the re-deck alternative.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace a deck?",
    a: "Full deck replacement costs $4,500–$14,000 in 2026 for a typical 300–400 sq ft deck, averaging around $7,500. Pressure-treated pine lands at the low end, composite and PVC at the high end. Demolition and disposal of the old deck adds $500–$2,000 on top.",
  },
  {
    q: "What is the average cost of deck replacement per square foot?",
    a: "Deck replacement averages $15–$35 per square foot installed. Pressure-treated pine runs $15–$22/sq ft, cedar $20–$30/sq ft, composite $25–$45/sq ft, and PVC $30–$50/sq ft. These ranges include framing, boards, railings, and labor on a straightforward ground-level build.",
  },
  {
    q: "Is it cheaper to re-deck or replace the whole deck?",
    a: "Re-decking — keeping the existing frame and replacing all surface boards and railings — costs $2,500–$5,000 for a 300 sq ft deck, roughly half of full replacement. It's the best value when the structure is sound. Full replacement is required when posts, joists, or footings are failing.",
  },
  {
    q: "How long does it take to replace a deck?",
    a: "A standard 300–400 sq ft deck replacement takes 1–2 weeks: 1–3 days for demolition and disposal, 3–5 days for framing, and 3–5 days for decking, railings, and stairs. Permits add 1–4 weeks before work starts depending on your city. Complex designs, second stories, or bad weather extend the timeline.",
  },
  {
    q: "Can I keep my existing deck frame and just replace the boards?",
    a: "Yes, if the frame passes inspection — posts, joists, beams, and ledger all sound, with proper footings and flashing. A contractor should probe the frame and check for bounce before quoting a re-deck. If the frame is more than 20 years old or shows rot in multiple members, full replacement is the honest recommendation.",
  },
  {
    q: "Does replacing a deck increase home value?",
    a: "A new wood deck returns roughly 50–60% of its cost at resale, and composite slightly less on paper — but those figures understate the real value. An aging, unsafe deck is a negotiation weapon for buyers; a new deck removes the objection entirely and photographs dramatically better. The value is in removing a negative as much as adding a positive.",
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
      title="Deck Replacement Cost"
      description="What a full deck replacement costs in 2026: per-square-foot pricing by material, demolition and disposal, and the re-deck shortcut that cuts the bill in half."
      slug="deck-replacement-cost"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate deck materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing a deck costs <strong>$4,500–$14,000</strong> in 2026 for a
        typical 300–400 sq ft deck, averaging around{" "}
        <strong>$7,500 installed</strong>. That&apos;s <strong>$15–$35 per
        square foot</strong> for pressure-treated pine, climbing to $25–$50
        per square foot for composite and PVC. Demolition and disposal of the
        old deck adds $500–$2,000. Before you price a full replacement, read
        the section below on the <strong>re-deck</strong> — keeping a sound
        frame and replacing only the surface cuts the bill roughly in half.
        And if your deck just needs fixing rather than replacing, start with
        our <a href="/guides/deck-repair-cost">deck repair cost guide</a>.
      </p>

      <h2>Deck replacement cost by material</h2>
      <p>
        Material choice is the single biggest lever on replacement cost —
        more than deck size or region:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Per sq ft installed</th>
            <th style={thStyle}>300 sq ft deck</th>
            <th style={thStyle}>Lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$15–$22</td>
            <td style={tdStyle}>$4,500–$6,600</td>
            <td style={tdStyle}>15–20 yrs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar / redwood</td>
            <td style={tdStyle}>$20–$30</td>
            <td style={tdStyle}>$6,000–$9,000</td>
            <td style={tdStyle}>20–25 yrs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$25–$45</td>
            <td style={tdStyle}>$7,500–$13,500</td>
            <td style={tdStyle}>25–30 yrs</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC / capped polymer</td>
            <td style={tdStyle}>$30–$50</td>
            <td style={tdStyle}>$9,000–$15,000</td>
            <td style={tdStyle}>30+ yrs</td>
          </tr>
        </tbody>
      </table>
      <p>
        Composite&apos;s premium is mostly materials — the boards cost 2–3×
        pine — but labor is similar or slightly lower since composite
        installs cleanly with hidden fasteners. Over 25 years, composite
        often wins on total cost because it skips the $500–$1,500 re-staining
        cycle pine needs every 2–3 years. See{" "}
        <a href="/guides/cost-to-install-deck-boards">deck board installation
        cost</a> for the board-by-board material math.
      </p>

      <h2>What the total includes</h2>
      <p>
        A real replacement quote should itemize — or at least account for —
        every one of these:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Typical cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Demolition + disposal of old deck</td>
            <td style={tdStyle}>$500–$2,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permits + inspections</td>
            <td style={tdStyle}>$100–$500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Footings (concrete piers)</td>
            <td style={tdStyle}>$300–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Framing (posts, beams, joists)</td>
            <td style={tdStyle}>$1,500–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Decking boards</td>
            <td style={tdStyle}>$1,200–$6,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Railings</td>
            <td style={tdStyle}>$800–$3,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stairs</td>
            <td style={tdStyle}>$200–$1,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor (typically 40–60% of total)</td>
            <td style={tdStyle}>included above</td>
          </tr>
        </tbody>
      </table>
      <p>
        Railings are the line item homeowners underestimate most — a 300 sq
        ft deck can easily have 60+ linear feet of railing, and composite or
        cable railings run $30–$60 per linear foot installed. Get railings
        priced separately so the number doesn&apos;t hide inside the
        per-square-foot rate.
      </p>

      <h2>The re-deck: replacement at half price</h2>
      <p>
        If the frame is sound — solid posts on real footings, unrotted
        joists, a properly flashed ledger — you don&apos;t need a full
        replacement. A <strong>re-deck</strong> keeps the structure and
        replaces all decking boards, railings, and stairs:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Option (300 sq ft deck)</th>
            <th style={thStyle}>Cost range</th>
            <th style={thStyle}>When it fits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Re-deck (boards + railings)</td>
            <td style={tdStyle}>$2,500–$5,000</td>
            <td style={tdStyle}>Frame sound, surface worn</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full replacement, pine</td>
            <td style={tdStyle}>$4,500–$6,600</td>
            <td style={tdStyle}>Frame failing or undersized</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full replacement, composite</td>
            <td style={tdStyle}>$7,500–$13,500</td>
            <td style={tdStyle}>Frame failing; want low maintenance</td>
          </tr>
        </tbody>
      </table>
      <p>
        A re-deck is also the cheapest way to upgrade material: putting
        composite boards on an existing sound frame delivers the
        low-maintenance surface for thousands less than a full composite
        build. The frame must be verified for the added weight — composite
        is heavier than wood — and joist spacing may need tightening to 12
        inches on center for some composite brands.
      </p>

      <h2>What moves the price</h2>
      <ul>
        <li><strong>Height and access.</strong> Second-story decks cost 30–50% more — scaffolding, material handling, and fall protection slow everything. Decks over steep slopes add footing complexity.</li>
        <li><strong>Footings.</strong> If the old posts sat on soil or undersized pads, new code-compliant footings (below frost line, proper diameter) are non-negotiable and add $300–$1,200.</li>
        <li><strong>Railing choice.</strong> Wood railings: $20–$35/linear ft. Composite: $30–$50. Cable or glass: $60–$120+. On a deck with 60 ft of railing, the spread between wood and cable is $2,400+.</li>
        <li><strong>Design complexity.</strong> Multi-level decks, curves, picture-frame borders, and inlays add 20–40% in labor. Every angle is a cut, and every cut is time.</li>
        <li><strong>Permits and inspections.</strong> $100–$500 and 1–4 weeks of lead time. Skipping them is not a savings — it&apos;s a resale and insurance liability.</li>
        <li><strong>Demolition surprises.</strong> Old decks hide things: buried concrete, asbestos-era materials on very old builds, irrigation and electrical lines. Budget a 10% contingency.</li>
      </ul>

      <h2>How a deck replacement is done</h2>
      <ol>
        <li><strong>Permits and layout.</strong> Pull the permit, confirm setbacks and HOA rules, mark utilities (call 811), and lay out the footprint.</li>
        <li><strong>Demolition.</strong> Strip boards, railings, and framing; pull or cut posts; haul debris. Salvageable lumber gets stacked — everything else goes to the dumpster ($500–$2,000 all-in).</li>
        <li><strong>Footings.</strong> Dig or auger to below the frost line, set forms, pour concrete, and set post bases. This is the foundation — rushing it is how decks settle.</li>
        <li><strong>Framing.</strong> Posts, beams, joists, and the ledger connection with proper flashing and joist hangers. Every connection gets the right connector — this is what inspections check.</li>
        <li><strong>Decking and stairs.</strong> Lay boards with consistent gaps, install stairs with proper stringers and risers.</li>
        <li><strong>Railings and trim.</strong> Posts, top and bottom rails, balusters, and any skirting or fascia.</li>
        <li><strong>Final inspection and protection.</strong> Pass inspection, then stain/seal wood within 30–60 days.</li>
      </ol>

      <h2>Replacement cost by deck size</h2>
      <p>
        Total installed cost for full replacement, pressure-treated pine
        vs. composite, including demolition:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Pine replacement</th>
            <th style={thStyle}>Composite replacement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>120 sq ft (10×12)</td>
            <td style={tdStyle}>$2,500–$4,500</td>
            <td style={tdStyle}>$4,000–$7,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>192 sq ft (12×16)</td>
            <td style={tdStyle}>$3,500–$6,000</td>
            <td style={tdStyle}>$5,500–$9,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>320 sq ft (16×20)</td>
            <td style={tdStyle}>$5,500–$9,000</td>
            <td style={tdStyle}>$9,000–$15,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>400 sq ft (20×20)</td>
            <td style={tdStyle}>$6,500–$11,000</td>
            <td style={tdStyle}>$11,000–$18,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Small decks carry a premium per square foot — permits, demolition
        minimums, and mobilization don&apos;t scale down. If your deck is
        under 150 sq ft, expect the high end of the per-square-foot range.
        Conversely, large simple rectangles are the cheapest per square
        foot in deck work: long straight runs, minimal cutting, fast
        production.
      </p>

      <h2>Timing and money: when to replace</h2>
      <ul>
        <li><strong>Season.</strong> Late fall and winter are the cheapest time to book — contractors discount 10–15% to keep crews busy. Spring is peak season and peak pricing. The deck doesn&apos;t care when it&apos;s built; your wallet does.</li>
        <li><strong>Partial now, full later?</strong> Don&apos;t. A $2,000 structural patch on a deck you&apos;ll replace in two years is the worst of both worlds. If replacement is likely within 3 years, do the minimum safety work and save for the real job.</li>
        <li><strong>Financing.</strong> Most contractors offer or accept financing on jobs over $5,000. A 12-month same-as-cash offer beats a credit card; compare the contractor&apos;s financing fee against a HELOC if the job tops $10,000.</li>
        <li><strong>Insurance.</strong> Standard homeowners policies don&apos;t cover wear-and-tear replacement — but they may cover sudden damage (fallen tree, storm). If storm damage contributed, file before you sign a contract; an adjuster&apos;s number changes the math.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Replacing the surface on a failing frame.</strong> The #1 expensive mistake. A $5,000 re-deck on a frame with 3 years left is money burned — inspect the structure first, always.</li>
        <li><strong>Reusing old footings blindly.</strong> Old pads are often undersized, off-level, or above the frost line. Verify each one or pour new.</li>
        <li><strong>Choosing material on price alone.</strong> Pine is cheapest to install and most expensive to own. Run the 25-year math — stain cycles, board replacements — before deciding.</li>
        <li><strong>Forgetting the railing budget.</strong> Railings can be 15–25% of the total. Price them as a separate line so they don&apos;t ambush the final number.</li>
        <li><strong>No contingency.</strong> Demolition reveals surprises on old decks. Hold 10% back from the day-one budget.</li>
        <li><strong>Skipping the permit.</strong> Unpermitted decks fail home inspections at resale, and insurers can deny claims on unpermitted structures. The $100–$500 permit is the cheapest insurance on the job.</li>
      </ul>
      <p>
        Run the board, fastener, and concrete math in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a>, then build the client-ready{" "}
        <a href="/quote">quote</a>. Contractors: lead with the re-deck
        option when the frame qualifies — the honest recommendation wins the
        job, and the margin on a re-deck is some of the best in exterior
        work.
      </p>

      <Faq items={faqs} heading="Deck replacement questions, answered" />
    </GuideArticle>
  );
}
