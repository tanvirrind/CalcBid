import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Install Deck Boards (2026)",
  description:
    "Installing deck boards costs $4–$15 per linear foot in 2026. Board material pricing, fastener systems, board-count math, and labor rates.",
  keywords: [
    "cost to install deck boards",
    "deck board installation cost",
    "how much to install decking boards",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-install-deck-boards" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Install Deck Boards (2026) | CalcBid",
    description:
      "$4–$15 per linear foot installed. Board material pricing, fastener systems, board-count math, and labor rates.",
    url: "https://calcbid.com/guides/cost-to-install-deck-boards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Install Deck Boards (2026) | CalcBid",
    description: "$4–$15 per linear foot installed. Material pricing, fasteners, board math, and labor rates.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install deck boards per linear foot?",
    a: "Deck board installation costs $4–$15 per linear foot installed in 2026. Pressure-treated pine runs $4–$8, cedar $6–$10, composite $8–$15, and PVC $10–$18 per linear foot. Materials are roughly half the installed price; labor the other half.",
  },
  {
    q: "How many deck boards do I need for a 12x16 deck?",
    a: "A 12x16 deck (192 sq ft) needs roughly 380–420 linear feet of 5.5-inch-wide decking boards, which is about 32 sixteen-foot boards before waste. The quick math: deck square footage ÷ board coverage per linear foot (about 0.5 sq ft for 5.5\" boards) × 1.1 for 10% waste.",
  },
  {
    q: "Is it cheaper to install deck boards yourself?",
    a: "DIY saves the $4–$8 per square foot of labor — roughly half the installed price. But board installation is pace work: a 300 sq ft deck is 2–3 days for a pro crew and a long weekend-plus for most homeowners. Rent a good miter saw and an impact driver; buy hidden-fastener jigs if you're doing composite.",
  },
  {
    q: "Should I use hidden fasteners or screws for deck boards?",
    a: "Hidden fasteners ($0.50–$1 per linear foot in clips) give the clean, screw-free composite look and are required by some composite warranties — but they add 30–50% to installation time. Face screws are faster and cheaper, and with color-matched coated screws they look fine on wood. Never use uncoated fasteners on treated lumber; the chemicals corrode them.",
  },
  {
    q: "How much gap should I leave between deck boards?",
    a: "Leave 1/8 to 1/4 inch between boards for drainage and expansion. Wood boards installed wet will shrink — gap them tight (1/8\") and they'll open up as they dry. Composite and PVC move with temperature, so follow the manufacturer's gapping chart for your climate; too-tight composite buckles in summer heat.",
  },
  {
    q: "Can I install new deck boards over old ones?",
    a: "No — never lay new boards over old decking. Trapped moisture between the layers rots both, the added weight stresses the frame, and fasteners won't seat properly. Pull the old boards, inspect the frame, then install fresh. If the frame is failing, see our deck replacement cost guide instead.",
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
      title="Cost to Install Deck Boards"
      description="What installing deck boards costs in 2026: per-linear-foot pricing by material, the board-count math, fastener systems, and labor rates."
      slug="cost-to-install-deck-boards"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate deck materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Installing deck boards costs <strong>$4–$15 per linear foot</strong>{" "}
        in 2026, materials and labor included — <strong>$4–$8</strong> for
        pressure-treated pine, <strong>$8–$15</strong> for composite. For a
        typical 300 sq ft deck you&apos;ll buy <strong>600–700 linear
        feet</strong> of boards, so the board bill alone runs $1,200–$5,000
        before labor. This guide covers new installation — boards going onto
        framing, whether it&apos;s a fresh build or a re-deck. For the
        repair-side pricing (pulling damaged boards off an existing deck),
        see our <a href="/guides/cost-to-replace-deck-boards">deck board
        replacement cost guide</a>, and for whole-deck numbers our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a>.
      </p>

      <h2>Deck board installation cost by material</h2>
      <p>
        Per-linear-foot pricing for standard 5/4×6 boards, installed:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Board material</th>
            <th style={thStyle}>Materials / lin ft</th>
            <th style={thStyle}>Installed / lin ft</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$1.50–$3</td>
            <td style={tdStyle}>$4–$8</td>
            <td style={tdStyle}>Cheapest; needs staining every 2–3 yrs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar</td>
            <td style={tdStyle}>$3–$5</td>
            <td style={tdStyle}>$6–$10</td>
            <td style={tdStyle}>Natural rot resistance; weathers to gray</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$3–$8</td>
            <td style={tdStyle}>$8–$15</td>
            <td style={tdStyle}>Low maintenance; hidden fasteners standard</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC / capped polymer</td>
            <td style={tdStyle}>$5–$10</td>
            <td style={tdStyle}>$10–$18</td>
            <td style={tdStyle}>Premium; best stain/scratch resistance</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hardwood (ipe, etc.)</td>
            <td style={tdStyle}>$8–$14</td>
            <td style={tdStyle}>$14–$22</td>
            <td style={tdStyle}>50-yr material; pre-drill everything</td>
          </tr>
        </tbody>
      </table>
      <p>
        The install multiplier is steadiest on wood — labor roughly equals
        materials. Composite flips it: materials dominate, and hidden
        fastener systems add 30–50% more installation time than face
        screwing. Quote composite jobs by the system (boards + clips +
        extra labor), never by board price alone.
      </p>

      <h2>How many boards do you need? (the math)</h2>
      <p>
        Deck boards are sold by the linear foot but cover area. The
        conversion:
      </p>
      <ol>
        <li><strong>Find board coverage:</strong> a 5.5&quot;-wide board covers ~0.46 sq ft per linear foot (5.5 ÷ 12). A 3.5&quot; board covers ~0.29.</li>
        <li><strong>Divide deck area by coverage:</strong> 300 sq ft ÷ 0.46 = ~652 linear feet of 5.5&quot; boards.</li>
        <li><strong>Add waste:</strong> × 1.10 for simple rectangles, × 1.15 for diagonal patterns or picture-frame borders.</li>
        <li><strong>Convert to boards:</strong> divide by your board length. 717 lin ft ÷ 16 ft = ~45 sixteen-foot boards.</li>
      </ol>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Sq ft</th>
            <th style={thStyle}>Linear ft (5.5&quot; boards)</th>
            <th style={thStyle}>16-ft boards (+10%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10 × 12</td>
            <td style={tdStyle}>120</td>
            <td style={tdStyle}>~261</td>
            <td style={tdStyle}>~18</td>
          </tr>
          <tr>
            <td style={tdStyle}>12 × 16</td>
            <td style={tdStyle}>192</td>
            <td style={tdStyle}>~417</td>
            <td style={tdStyle}>~29</td>
          </tr>
          <tr>
            <td style={tdStyle}>16 × 20</td>
            <td style={tdStyle}>320</td>
            <td style={tdStyle}>~696</td>
            <td style={tdStyle}>~48</td>
          </tr>
          <tr>
            <td style={tdStyle}>20 × 20</td>
            <td style={tdStyle}>400</td>
            <td style={tdStyle}>~870</td>
            <td style={tdStyle}>~60</td>
          </tr>
        </tbody>
      </table>
      <p>
        Buy from one lot — especially composite, where color drifts between
        production runs. And order the fasteners with the boards: a 300 sq
        ft composite deck needs roughly 1,000 hidden clips ($300–$500), a
        cost that ambushes bids when it&apos;s forgotten.
      </p>

      <h2>Fastener systems compared</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>System</th>
            <th style={thStyle}>Cost</th>
            <th style={thStyle}>Speed</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Face screws (coated)</td>
            <td style={tdStyle}>$0.10–$0.20 / screw</td>
            <td style={tdStyle}>Fastest</td>
            <td style={tdStyle}>Wood decks; budget jobs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hidden clips</td>
            <td style={tdStyle}>$0.50–$1 / lin ft</td>
            <td style={tdStyle}>30–50% slower</td>
            <td style={tdStyle}>Composite; premium look</td>
          </tr>
          <tr>
            <td style={tdStyle}>Plug systems</td>
            <td style={tdStyle}>$0.40–$0.80 / lin ft</td>
            <td style={tdStyle}>Slowest</td>
            <td style={tdStyle}>Hardwood; invisible finish</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fastener rules that never change: use fasteners rated for your lumber
        (ACQ-treated wood eats uncoated steel), stainless within a mile of
        saltwater, and never mix metals in the same deck — galvanic
        corrosion is slow, silent, and total.
      </p>

      <h2>Labor: what installation actually costs</h2>
      <p>
        Professional board installation labor runs <strong>$4–$8 per square
        foot</strong> — about half the installed price on wood, less than
        half on composite. A two-person crew lays 200–300 sq ft of
        face-screwed wood per day; hidden-fastener composite runs 150–200
        sq ft per day. Minimum charges ($300–$500) mean small decks price
        higher per square foot — the mobilization, setup, and tool costs
        don&apos;t scale down.
      </p>

      <h2>Step-by-step: installing deck boards</h2>
      <ol>
        <li><strong>Verify the frame.</strong> Check joist spacing (16&quot; on-center for wood, often 12&quot; for composite and diagonals), confirm the frame is level and square, and make sure the ledger is flashed. Boards can&apos;t fix a bad frame.</li>
        <li><strong>Stage the boards.</strong> Stack boards near the work area, sorted by length. Let wood acclimate 48–72 hours on site — boards installed straight off the delivery truck move the most.</li>
        <li><strong>Set the starter board.</strong> The first board sets every line on the deck. Get it perfectly straight and square to the house; a crooked starter compounds across the whole surface.</li>
        <li><strong>Lay the field.</strong> Work outward with consistent gapping (spacer blocks, not eyeballing). Stagger butt joints across joists — never stack them on the same joist. Check square every 4–5 boards.</li>
        <li><strong>Cut the border.</strong> Let board ends run long, then snap a chalk line and trim all ends at once with a circular saw and straightedge. This is how pros get that crisp edge.</li>
        <li><strong>Fasten to spec.</strong> Two fasteners per joist, correct fastener for the material, pre-drill near ends. With hidden clips, keep a consistent clip orientation — flipped clips cause uneven gaps.</li>
        <li><strong>Finish.</strong> Install fascia and stair treads, clean the surface, and stain/seal wood within 30–60 days.</li>
      </ol>

      <h2>Installation cost by deck size</h2>
      <p>
        Board installation only (frame already built), pressure-treated
        pine vs. composite:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Pine boards installed</th>
            <th style={thStyle}>Composite installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>120 sq ft (10×12)</td>
            <td style={tdStyle}>$1,000–$1,800</td>
            <td style={tdStyle}>$1,800–$3,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>192 sq ft (12×16)</td>
            <td style={tdStyle}>$1,500–$2,700</td>
            <td style={tdStyle}>$2,800–$5,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>320 sq ft (16×20)</td>
            <td style={tdStyle}>$2,500–$4,400</td>
            <td style={tdStyle}>$4,600–$8,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>400 sq ft (20×20)</td>
            <td style={tdStyle}>$3,000–$5,400</td>
            <td style={tdStyle}>$5,700–$10,200</td>
          </tr>
        </tbody>
      </table>
      <p>
        Diagonal patterns add 15% material waste and roughly 20% labor —
        every board gets angle-cut on both ends. Picture-frame borders add
        a half day of labor and a clean, high-end look that photographs
        well for contractor portfolios. Quote patterns as explicit upgrades,
        never absorbed into the base price.
      </p>

      <h2>Board patterns: what they cost</h2>
      <p>
        Layout changes both material waste and labor — price it explicitly:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Pattern</th>
            <th style={thStyle}>Waste factor</th>
            <th style={thStyle}>Labor impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Straight (perpendicular)</td>
            <td style={tdStyle}>10%</td>
            <td style={tdStyle}>Baseline — fastest</td>
          </tr>
          <tr>
            <td style={tdStyle}>Diagonal (45°)</td>
            <td style={tdStyle}>15%</td>
            <td style={tdStyle}>+20% labor; every board angle-cut</td>
          </tr>
          <tr>
            <td style={tdStyle}>Picture-frame border</td>
            <td style={tdStyle}>12%</td>
            <td style={tdStyle}>+half day; mitered border boards</td>
          </tr>
          <tr>
            <td style={tdStyle}>Herringbone / inlay</td>
            <td style={tdStyle}>20%+</td>
            <td style={tdStyle}>+50–100% labor; showpiece pricing</td>
          </tr>
        </tbody>
      </table>
      <p>
        Diagonal layouts also change the framing requirement — joists at
        12&quot; on-center instead of 16&quot;, because boards span the
        joists at an angle. If the frame is already built at 16&quot;,
        diagonal is off the table without reframing. Confirm joist spacing
        before selling the pattern.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Under-ordering boards.</strong> A mid-job lumber run breaks the lot match and kills a day. The 10–15% waste factor is not optional — it&apos;s the cheapest insurance on the job.</li>
        <li><strong>Forgetting the clip budget.</strong> $300–$500 in hidden fasteners on a composite deck, unquoted, comes straight out of margin.</li>
        <li><strong>Wrong joist spacing for the material.</strong> Composite often needs 12&quot; on-center; diagonal patterns need 12&quot; regardless of material. Check before the boards arrive, not after.</li>
        <li><strong>Gapping by guess.</strong> Wood installed wet shrinks; composite expands in heat. Use the manufacturer&apos;s gapping chart, not habit.</li>
        <li><strong>Butt joints over the same joist.</strong> Stagger board ends across at least two joists and keep butt joints tight — stacked joints telegraph and weaken the run.</li>
        <li><strong>Installing over a bad frame.</strong> New boards deserve a verified frame. Probe joists and check the ledger before a single board goes down — see <a href="/guides/deck-repair-cost">deck repair cost</a> for the inspection checklist.</li>
      </ul>
      <p>
        Run the board count, fastener, and waste math in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a>, then turn it into a{" "}
        <a href="/quote">quote</a> from the truck. Contractors: board jobs
        are won on the takeoff — the crew that counts clips and waste
        before quoting is the crew that keeps its margin.
      </p>

      <Faq items={faqs} heading="Deck board installation questions, answered" />
    </GuideArticle>
  );
}
