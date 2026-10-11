import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Deck Building Job (2026)",
  description:
    "How to bid deck construction: per-square-foot pricing by material, framing and footing takeoffs, and the extras contractors forget to price.",
  keywords: [
    "how to bid a deck building job",
    "how to quote a deck job",
    "deck building bid",
    "how much to charge to build a deck",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-deck-building-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Deck Building Job | CalcBid",
    description:
      "Per-square-foot pricing by material, framing and footing takeoffs, and the extras contractors forget to price.",
    url: "https://calcbid.com/guides/how-to-bid-deck-building-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Deck Building Job | CalcBid",
    description: "Per-square-foot pricing by material, framing and footing takeoffs, and the extras contractors forget to price.",
  },
};

const faqs = [
  {
    q: "How many deck boards do I need?",
    a: "Deck area ÷ board coverage + 10% waste. For 5.5-inch-wide deck boards with 1/4-inch gaps, each linear foot of board covers about 0.48 sq ft — so a 300 sq ft deck needs roughly 625 linear feet of decking, plus waste = ~690 linear feet. At 16-foot boards, that's 44 boards. Composite boards vary by width, so check the manufacturer's coverage chart rather than guessing.",
  },
  {
    q: "How many footings does a deck need?",
    a: "Footing count follows your beam and joist spans, not the deck size alone. A common rule: beams every 8–10 feet, posts under each beam every 6–8 feet. A 16×20 deck typically needs 6–10 footings depending on the framing plan. In frost zones, each footing must go below the frost line (30–48 inches in northern states) — shallow footings heave and the deck follows them.",
  },
  {
    q: "Should a deck be quoted per square foot or as a lump sum?",
    a: "Do your internal math per square foot (materials and labor both scale that way), but present larger decks as an itemized lump sum: framing, decking, railings, stairs, permits. Clients compare lump sums; you manage margins per square foot. For small decks under 200 sq ft, per-square-foot pricing is fine because the number stays readable.",
  },
  {
    q: "How long does it take to build a 300 sq ft deck?",
    a: "A two-person crew builds a 300 sq ft pressure-treated deck in 3–5 working days: one day for footings and framing, one to two days for decking, one day for railings and stairs. Composite adds a day (hidden fasteners are slower than face screws). Permits and inspections add calendar time — 1–3 weeks in most jurisdictions — so start that clock at contract signing, not at mobilization.",
  },
  {
    q: "Do I need a permit to build a deck?",
    a: "Almost always, yes, for anything attached to the house or more than 30 inches off the ground. Permit fees run $150–$500 and inspections typically happen twice: once for footings (before you pour) and once at final. Build the permit cost and the inspection schedule into your bid — failed inspections and reinspection fees come out of your margin, not the client's.",
  },
  {
    q: "Ledger board vs freestanding deck — which should I bid?",
    a: "A ledger-attached deck is cheaper (fewer footings, less framing) but requires proper flashing and lag-bolt connections to the house — the #1 source of deck failures and lawsuits is a rotted or poorly attached ledger. Freestanding costs 10–15% more in materials and labor but eliminates the ledger risk entirely. On houses with questionable siding or no accessible rim joist, bid freestanding and explain why.",
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
      title="How to Bid a Deck Building Job"
      description="Price per square foot, take off the framing like a pro, and stop forgetting the stairs — deck bids live and die in the details."
      slug="how-to-bid-deck-building-job"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Price the materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid deck construction <strong>per square foot, installed</strong> —
        material choice swings the price 3–5×, so the per-foot number has to
        be material-specific. The 2026 US ranges:{" "}
        <strong>pressure-treated wood $15–$30, composite $35–$60, hardwood
        $50–$75 per square foot installed</strong>. A 300 sq ft composite deck
        at $50/ft is a $15,000 job. Behind that number sits the real work:
        framing takeoffs, footing counts, railing and stair math, and the
        extras (demo, permits, lighting) that separate profitable bids from
        expensive lessons. Decks run 30–45% gross margins when every line is
        priced.
      </p>

      <h2>2026 deck building prices per square foot</h2>
      <p>
        Installed prices including framing, decking, standard railings, and
        labor. Stairs, demo, permits, and extras add on top.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>300-sq-ft deck total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated wood</td>
            <td style={tdStyle}>$15–$30</td>
            <td style={tdStyle}>$4,500–$9,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar / redwood</td>
            <td style={tdStyle}>$25–$40</td>
            <td style={tdStyle}>$7,500–$12,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite (Trex, TimberTech)</td>
            <td style={tdStyle}>$35–$60</td>
            <td style={tdStyle}>$10,500–$18,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC decking</td>
            <td style={tdStyle}>$40–$65</td>
            <td style={tdStyle}>$12,000–$19,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hardwood (ipe, tigerwood)</td>
            <td style={tdStyle}>$50–$75</td>
            <td style={tdStyle}>$15,000–$22,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Material is the single biggest lever — but labor is the silent one.
        Composite decking with hidden fasteners installs 20–30% slower than
        face-screwed wood, and hardwood needs pre-drilling every hole. Your
        per-foot labor rate has to reflect the material you&apos;re actually
        installing, not a blended average from last year&apos;s wood decks.
      </p>

      <h2>The framing takeoff (where bids are won)</h2>
      <p>
        Most contractors price the pretty part — the decking — and guess the
        framing. Flip it: the framing is where the money hides. Work the
        structure first:
      </p>
      <ul>
        <li><strong>Footings:</strong> count from your beam layout — beams every 8–10 ft, posts every 6–8 ft under each beam. A 16×20 deck typically needs 6–10 footings. Each footing = concrete ($5–$10 in bags or a share of a ready-mix load), a post base bracket, and digging labor. Below the frost line in northern zones: 30–48 inches deep.</li>
        <li><strong>Posts and beams:</strong> 6×6 posts are the pro standard (4×4 is allowed in some jurisdictions but looks undersized on anything elevated). Double 2×10 or 2×12 beams, sized to your spans — check a span table, don&apos;t guess.</li>
        <li><strong>Joists:</strong> 2×8 or 2×10 at 16 inches on center for wood; 12 inches on center for most composites (they&apos;re more flexible) and always 12 inches for diagonal patterns. Count = (deck width in inches ÷ spacing) + 1, plus rim joists and blocking.</li>
        <li><strong>Hardware:</strong> joist hangers, hurricane ties, post bases, ledger bolts, and structural screws. Budget $200–$500 in connectors on a mid-size deck — the line item clients never question and contractors always forget.</li>
        <li><strong>Ledger (if attached):</strong> flashing, lag bolts or structural screws, and the labor to open up siding properly. A failed ledger is a lawsuit; price the flashing detail like the liability it is.</li>
      </ul>
      <p>
        Run the material counts through the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>{" "}
        as a sanity check — board feet, pickets, and concrete volumes are
        where mental math goes wrong on big decks.
      </p>

      <h2>Decking math: boards, waste, and fasteners</h2>
      <p>
        Decking quantity = <strong>deck area ÷ board coverage + 10%
        waste</strong> (15% for diagonal patterns or lots of cuts). A 300 sq
        ft deck with 5.5-inch boards needs roughly 690 linear feet of
        decking. Then price the fastening system honestly:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fastening</th>
            <th style={thStyle}>Material cost</th>
            <th style={thStyle}>Labor note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Face screws (wood)</td>
            <td style={tdStyle}>$0.30–$0.50 / sq ft</td>
            <td style={tdStyle}>Fastest; visible fasteners</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hidden clips (composite)</td>
            <td style={tdStyle}>$1–$2 / sq ft</td>
            <td style={tdStyle}>20–30% slower install; clean look</td>
          </tr>
          <tr>
            <td style={tdStyle}>Plug system (hardwood)</td>
            <td style={tdStyle}>$1.50–$2.50 / sq ft</td>
            <td style={tdStyle}>Pre-drill every hole; slowest</td>
          </tr>
        </tbody>
      </table>
      <p>
        The fastener line is small money with big labor implications. Bidding
        composite at wood-deck labor speed is the classic way to work a week
        for free — adjust your per-foot labor rate to the fastening system,
        not just the square footage.
      </p>

      <h2>Railings and stairs: price them separately</h2>
      <p>
        Railings and stairs never belong buried in the per-foot deck price —
        they vary too much job to job. Bid them as separate lines:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Item</th>
            <th style={thStyle}>Installed price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Wood railing, per linear ft</td>
            <td style={tdStyle}>$20–$50</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite railing, per linear ft</td>
            <td style={tdStyle}>$50–$100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Metal / cable railing, per linear ft</td>
            <td style={tdStyle}>$75–$150</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stairs, per step (wood)</td>
            <td style={tdStyle}>$150–$300</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stairs, per step (composite)</td>
            <td style={tdStyle}>$250–$450</td>
          </tr>
        </tbody>
      </table>
      <p>
        Code check: guardrails required at 30+ inches above grade, balusters
        max 4 inches apart, stair railings on both sides for wide stairs.
        Stringers max out around 6–7 steps per run — taller climbs need a
        landing, which is more framing, more decking, and more money. Measure
        the total rise during the site visit and count the steps before you
        bid, not after.
      </p>

      <h2>Site factors that move the number</h2>
      <ul>
        <li><strong>Demo of the old deck:</strong> $500–$2,000 for teardown and haul-off depending on size. Old footings and ledger removal are the hidden labor — bid demo as its own line.</li>
        <li><strong>Height:</strong> second-story decks need taller posts, more bracing, scaffolding or pump jacks, and everything gets carried up. Add 15–25% over a ground-level bid.</li>
        <li><strong>Access:</strong> no side-yard access means hand-carrying lumber and concrete. Price the labor or schedule a boom delivery.</li>
        <li><strong>Soil and frost:</strong> rocky soil doubles footing labor; frost zones demand 30–48 inch depths. Carry a rock clause like you would on fence work.</li>
        <li><strong>Permits and inspections:</strong> $150–$500 for the permit, plus two inspections (footings before pour, final). Failed inspections cost you the reinspection fee and the schedule slip — build to pass the first time.</li>
      </ul>

      <h2>Stack the upsells</h2>
      <ul>
        <li><strong>Lighting</strong> — post-cap and stair lights at $50–$150 per fixture installed. Clients love it, electricians are optional for low-voltage, and it photographs beautifully for your portfolio.</li>
        <li><strong>Built-in seating</strong> — $500–$2,000 depending on design. Same crew, same materials, high perceived value.</li>
        <li><strong>Under-deck drainage</strong> — $8–$15 per sq ft, turns the space below into dry storage or a patio. Easy sell on elevated decks.</li>
        <li><strong>Staining/sealing</strong> — for wood decks, the finish is a natural follow-on. Our <a href="/guides/how-to-bid-fence-staining-job">fence staining guide</a> covers the per-foot math; deck staining prices the same way.</li>
        <li><strong>Maintenance plan:</strong> reseal wood decks every 2–3 years. Book it now — the deck you built is the easiest sale you&apos;ll ever make.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Forgetting the stairs.</strong> A 12-step composite staircase can be $3,000–$5,000 of a $15,000 job. Count steps on site, every time.</li>
        <li><strong>Bidding composite at wood labor speed.</strong> Hidden fasteners and pre-drilling are 20–30% slower. Adjust the rate or donate the difference.</li>
        <li><strong>Guessing footing counts.</strong> Draw the beam layout before you bid. Six footings vs ten is a full day of digging and a yard of concrete.</li>
        <li><strong>No demo line.</strong> The old deck doesn&apos;t disappear by itself. Teardown, footing removal, and dump fees are real money.</li>
        <li><strong>Ignoring the ledger detail.</strong> Improper flashing rots the house framing — the most expensive callback in decking. Price it like it matters, because it does.</li>
        <li><strong>Verbal ballparks on big jobs.</strong> A $15,000 deck deserves an itemized quote from the <a href="/quote">quote builder</a>, not a number from the driveway. Detailed quotes win against round numbers, and they protect you when the client &ldquo;remembers it differently.&rdquo;</li>
      </ul>
      <p>
        Take off the framing in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>,
        build the itemized bid in <a href="/quote">CalcBid</a>, and send it
        before you leave the curb. Same-day quotes close at roughly double
        the rate of next-day ones.
      </p>

      <Faq items={faqs} heading="Deck bidding questions, answered" />
    </GuideArticle>
  );
}
