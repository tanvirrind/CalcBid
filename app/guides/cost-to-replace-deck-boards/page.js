import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Replace Deck Boards (2026)",
  description:
    "Replacing deck boards costs $8–$15 per sq ft installed in 2026. Board-by-board pricing by material, labor vs DIY, and when a full re-deck wins.",
  keywords: [
    "cost to replace deck boards",
    "deck board replacement cost",
    "average labor cost to replace deck boards",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-replace-deck-boards" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Replace Deck Boards (2026) | CalcBid",
    description:
      "$8–$15 per sq ft installed. Board-by-board pricing by material, labor vs DIY, and when a full re-deck wins.",
    url: "https://calcbid.com/guides/cost-to-replace-deck-boards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Replace Deck Boards (2026) | CalcBid",
    description: "$8–$15 per sq ft installed. Board pricing by material, labor vs DIY, and when a full re-deck wins.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace deck boards?",
    a: "Replacing deck boards costs $8–$15 per square foot installed in 2026. A partial replacement of 100 sq ft runs $800–$1,500, while re-decking an entire 300 sq ft surface costs $2,500–$5,000. The frame must be sound — board replacement on a failing structure is wasted money.",
  },
  {
    q: "What is the average labor cost to replace deck boards?",
    a: "Labor for board replacement averages $4–$8 per square foot, roughly half the installed price. The work is mostly demolition and fastening — pulling old boards, checking the frame, and laying new ones. Minimum charges of $300–$500 apply, so small patches price higher per square foot.",
  },
  {
    q: "Can I replace deck boards without replacing the frame?",
    a: "Yes — that's exactly what a re-deck is, and it's the best value in deck work when the structure qualifies. Posts, joists, beams, and the ledger must all be sound. If the frame is over 20 years old or shows rot in multiple members, price a full replacement instead.",
  },
  {
    q: "How much does it cost to replace deck boards with composite?",
    a: "Swapping wood boards for composite on an existing frame costs $12–$20 per square foot installed — the boards run $3–$8 per linear foot in materials alone. Verify the frame first: composite is heavier than wood, and some brands require joists at 12 inches on center rather than 16.",
  },
  {
    q: "Can I just replace a few deck boards instead of all of them?",
    a: "Yes for isolated damage — a few rotted or split boards can be swapped for $200–$600. The challenge is matching: new boards won't match weathered ones in color. For decks with widespread wear, replacing all boards at once looks dramatically better and often costs less per square foot than piecemeal work.",
  },
  {
    q: "How do I know if my deck boards need replacing?",
    a: "Probe with a screwdriver — if it sinks in easily, the board is rotted. Replace boards that are soft, split through, cupped badly enough to hold water, or have popped fasteners that won't re-seat. Surface graying and minor checking are cosmetic; stain handles those. Widespread softness across the deck means it's re-deck time, not patch time.",
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
      title="Cost to Replace Deck Boards"
      description="What replacing deck boards costs in 2026: per-square-foot installed pricing, board-by-board material costs, and the frame check that decides everything."
      slug="cost-to-replace-deck-boards"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate deck materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing deck boards costs <strong>$8–$15 per square foot
        installed</strong> in 2026 — roughly half materials, half labor. A
        100 sq ft partial replacement runs <strong>$800–$1,500</strong>;
        re-decking a full 300 sq ft surface costs{" "}
        <strong>$2,500–$5,000</strong>. The one non-negotiable: the{" "}
        <strong>frame must be sound</strong>. New boards on rotted joists
        is the most expensive mistake in deck work, so every price below
        assumes posts, joists, and ledger have passed inspection. If the
        whole deck is tired, compare with our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a> and{" "}
        <a href="/guides/deck-replacement-cost">deck replacement cost
        guide</a> before spending a dollar.
      </p>

      <h2>Board replacement cost by material</h2>
      <p>
        Installed price per square foot, including removal of old boards and
        new fasteners:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Board material</th>
            <th style={thStyle}>Installed per sq ft</th>
            <th style={thStyle}>100 sq ft</th>
            <th style={thStyle}>300 sq ft re-deck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$8–$12</td>
            <td style={tdStyle}>$800–$1,200</td>
            <td style={tdStyle}>$2,500–$3,600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar</td>
            <td style={tdStyle}>$10–$15</td>
            <td style={tdStyle}>$1,000–$1,500</td>
            <td style={tdStyle}>$3,000–$4,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$12–$20</td>
            <td style={tdStyle}>$1,200–$2,000</td>
            <td style={tdStyle}>$3,600–$6,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>PVC / capped polymer</td>
            <td style={tdStyle}>$15–$25</td>
            <td style={tdStyle}>$1,500–$2,500</td>
            <td style={tdStyle}>$4,500–$7,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Labor is the steadier half of the price — <strong>$4–$8 per square
        foot</strong> — because the work is the same regardless of board
        material: pull old boards, inspect and clean the frame, lay new
        boards with correct gapping. Material is where the spread lives.
        For the new-build side of board pricing — linear-foot math and
        fastener systems — see{" "}
        <a href="/guides/cost-to-install-deck-boards">deck board
        installation cost</a>.
      </p>

      <h2>Partial replacement vs. full re-deck</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Option</th>
            <th style={thStyle}>Cost (300 sq ft deck)</th>
            <th style={thStyle}>Best when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Replace a few boards (patch)</td>
            <td style={tdStyle}>$200–$600</td>
            <td style={tdStyle}>Isolated damage, deck under 10 years old</td>
          </tr>
          <tr>
            <td style={tdStyle}>Replace half the surface</td>
            <td style={tdStyle}>$1,200–$2,250</td>
            <td style={tdStyle}>One zone failed (e.g., shaded side rotted)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full re-deck (all boards)</td>
            <td style={tdStyle}>$2,500–$5,000</td>
            <td style={tdStyle}>Widespread wear, frame sound — best value</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full replacement</td>
            <td style={tdStyle}>$4,500–$14,000</td>
            <td style={tdStyle}>Frame failing — see replacement guide</td>
          </tr>
        </tbody>
      </table>
      <p>
        The matching problem decides more patch jobs than the price does.
        New pressure-treated boards start yellow-green and weather to gray;
        putting five fresh boards into a 12-year-old deck looks like a
        patchwork quilt for a year. When more than ~20% of boards need
        work, a full re-deck almost always looks better and prices better
        per square foot.
      </p>

      <h2>The frame check (do this first)</h2>
      <p>
        Before quoting or approving any board replacement, verify the
        structure:
      </p>
      <ol>
        <li><strong>Probe the joists.</strong> Screwdriver into every joist end and anywhere boards showed rot. Soft wood = the frame needs work too, and the quote just changed.</li>
        <li><strong>Check the ledger.</strong> The board connecting deck to house must be flashed and solid. Ledger failure is the #1 deck collapse cause — non-negotiable.</li>
        <li><strong>Walk for bounce.</strong> Excessive deflection means undersized or damaged joists. Boards won&apos;t fix bounce; sistering joists will.</li>
        <li><strong>Inspect post bases.</strong> The bottom 6 inches of posts rot first. If posts are soft at grade, budget <a href="/guides/deck-post-replacement-cost">post replacement</a> alongside the boards.</li>
        <li><strong>Confirm joist spacing.</strong> Composite boards often need 12&quot; on-center spacing vs. the 16&quot; standard for wood. Measure before ordering composite.</li>
      </ol>

      <h2>DIY vs. hiring out</h2>
      <p>
        Board replacement is one of the most DIY-friendly deck jobs — no
        structural engineering, mostly demolition and fastening:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Approach</th>
            <th style={thStyle}>100 sq ft cost</th>
            <th style={thStyle}>Trade-offs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>DIY (pine)</td>
            <td style={tdStyle}>$300–$600</td>
            <td style={tdStyle}>Your weekend; rent or borrow a demo bar and impact driver</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pro (pine)</td>
            <td style={tdStyle}>$800–$1,200</td>
            <td style={tdStyle}>1–2 days; frame inspected by someone who knows what rot looks like</td>
          </tr>
          <tr>
            <td style={tdStyle}>DIY (composite)</td>
            <td style={tdStyle}>$600–$1,200</td>
            <td style={tdStyle}>Hidden fastener systems have a learning curve — practice first</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pro (composite)</td>
            <td style={tdStyle}>$1,200–$2,000</td>
            <td style={tdStyle}>Clean install, warranty on workmanship</td>
          </tr>
        </tbody>
      </table>
      <p>
        The honest DIY line: patch a few boards yourself, hire the re-deck.
        Pulling and relaying 300 sq ft of boards is 2–3 days of real labor,
        and a pro spots frame problems you&apos;ll walk past.
      </p>

      <h2>Step-by-step: replacing deck boards</h2>
      <p>
        The process, whether you DIY the patch or manage a crew:
      </p>
      <ol>
        <li><strong>Mark the bad boards.</strong> Walk the deck and mark every board that needs replacing with chalk — soft spots, splits, severe cupping. Mark generously; borderline boards found mid-job slow everything down.</li>
        <li><strong>Pull the old boards.</strong> Pry or unscrew, working from one end. Pull fasteners cleanly — broken screw shafts left in joists become obstacles for the new boards. Inspect each exposed joist as you go.</li>
        <li><strong>Clean and treat the frame.</strong> Sweep debris, clear the gaps between joists, and brush a wood preservative on any joist tops showing early decay. This 30-minute step adds years.</li>
        <li><strong>Dry-fit the layout.</strong> Lay boards without fastening to check the pattern, stagger butt joints across joists, and confirm the border/edge treatment. Fix layout problems now, not after 40 screws.</li>
        <li><strong>Fasten.</strong> Two fasteners per joist crossing, consistent 1/8–1/4&quot; gaps (use a spacer, not your eye). Pre-drill near board ends to prevent splitting, especially with hardwood and composite.</li>
        <li><strong>Protect.</strong> Stain or seal new wood within 30–60 days. Composite needs nothing but a wash — one of the reasons the upgrade math works.</li>
      </ol>
      <p>
        Pace benchmark: a two-person crew pulls and replaces 150–200 sq ft
        of face-screwed boards per day. Hidden-fastener composite runs
        slower — 100–150 sq ft per day. Use these rates to sanity-check any
        labor quote: a 300 sq ft re-deck at &ldquo;two weeks&rdquo; is
        either overbooked or overpriced.
      </p>

      <h2>Board replacement cost by deck size</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Area replaced</th>
            <th style={thStyle}>Pine installed</th>
            <th style={thStyle}>Composite installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>50 sq ft (patch zone)</td>
            <td style={tdStyle}>$400–$600</td>
            <td style={tdStyle}>$600–$1,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>100 sq ft</td>
            <td style={tdStyle}>$800–$1,200</td>
            <td style={tdStyle}>$1,200–$2,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>200 sq ft</td>
            <td style={tdStyle}>$1,600–$2,400</td>
            <td style={tdStyle}>$2,400–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>300 sq ft (full re-deck)</td>
            <td style={tdStyle}>$2,500–$3,600</td>
            <td style={tdStyle}>$3,600–$6,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Minimum charges ($300–$500) compress the low end — a 50 sq ft patch
        prices closer to $8–$12 per square foot than the $8 headline rate.
        This is normal and fair; the contractor&apos;s trip, tools, and
        setup cost the same whether it&apos;s 50 or 500 square feet.
      </p>

      <h2>Matching old boards: the hidden challenge</h2>
      <p>
        The hardest part of partial board replacement isn&apos;t the labor —
        it&apos;s the match. Wood weathers: a 10-year-old pressure-treated
        deck is silver-gray, while new boards arrive yellow-green and take
        a full season to blend. Three strategies, in order of preference:
      </p>
      <ul>
        <li><strong>Replace the full run.</strong> Instead of swapping 3 boards in the middle, replace the entire board run end to end. One full-length new board among old ones still shows, but a full run looks intentional.</li>
        <li><strong>Stain to unify.</strong> A semi-transparent stain in a cedar or redwood tone pulls new and old boards dramatically closer. Budget the staining as part of the patch job, not an afterthought.</li>
        <li><strong>Flip the script: go composite.</strong> If matching is impossible and the deck is 12+ years old, the patch-vs-redeck math usually favors the re-deck. One uniform surface beats a quilt.</li>
      </ul>
      <p>
        For composite decks the matching problem is worse, not better —
        manufacturers discontinue colors and dye lots drift. Before quoting
        a composite patch, confirm the exact product line is still made and
        order a sample board. A &ldquo;close enough&rdquo; composite match
        is visible forever.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Skipping the frame inspection.</strong> New boards over bad joists — the expensive mistake this whole guide warns about. Probe everything.</li>
        <li><strong>Reusing old fasteners.</strong> Old screws are corroded, mismatched, and the wrong length for new boards. New stainless or coated fasteners throughout — $50–$150 in materials that protects thousands.</li>
        <li><strong>Wrong gapping.</strong> Boards need 1/8–1/4&quot; gaps for drainage and expansion. Tight boards trap water and rot from below; gappy boards look amateur.</li>
        <li><strong>Mixing board batches on composite.</strong> Composite color varies between production runs. Buy all boards from the same lot or the deck shows stripes.</li>
        <li><strong>Forgetting the 12&quot; spacing rule.</strong> Laying composite on 16&quot;-center joists voids some manufacturer warranties and creates bounce. Check the brand&apos;s spec sheet.</li>
        <li><strong>Patching past the point of sense.</strong> Replacing boards one zone at a time over three summers costs more than one re-deck and looks worse every year. At ~20% board failure, commit to the full surface.</li>
      </ul>
      <p>
        Count your boards, fasteners, and waste factor in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a>, then send the{" "}
        <a href="/quote">quote</a> before you leave the driveway.
        Contractors: the re-deck upsell — &ldquo;while we&apos;re pulling
        boards, the railings are the same age&rdquo; — is honest, high-margin
        work. Price it as its own line, not a surprise.
      </p>

      <Faq items={faqs} heading="Deck board replacement questions, answered" />
    </GuideArticle>
  );
}
