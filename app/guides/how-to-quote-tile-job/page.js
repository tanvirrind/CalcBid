import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Tile Installation Job",
  description:
    "How to quote tile jobs: measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
  keywords: [
    "how to quote a tile installation job",
    "how to bid tile work",
    "tile installation quote",
    "how much to charge for tile installation",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-tile-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Tile Installation Job | CalcBid",
    description:
      "Measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
    url: "https://calcbid.com/guides/how-to-quote-tile-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Tile Installation Job | CalcBid",
    description: "Measure, price setting materials and labor per sq ft, and handle the extras that eat margin.",
  },
};

const faqs = [
  {
    q: "How much does it cost to tile a bathroom floor in 2026?",
    a: "A typical 40–60 sq ft bathroom floor runs $800–$2,000 installed: $5–$10/sq ft labor plus $2–$5/sq ft in setting materials, plus the tile itself ($2–$15/sq ft depending on what the client picks). Small bathrooms price higher per foot than big rooms because the cuts-per-square-foot drives your time, not the area.",
  },
  {
    q: "Do tile installers charge by the hour or by the square foot?",
    a: "By the square foot for standard work — clients understand it and it rewards your efficiency. Switch to per-feature pricing for niches, benches, and curbs ($150–$400 each), and to hourly or day-rate only for small repairs and punch-list work where square footage doesn't reflect the fiddliness.",
  },
  {
    q: "How much extra tile should I order?",
    a: "10% over the measured area for standard layouts, 15% for diagonal patterns, large-format tile, or rooms with lots of jogs and niches. Under-ordering mid-job risks a dye-lot mismatch — tile from a different production run can be visibly off-shade, and the client will notice it forever.",
  },
  {
    q: "What is the hardest part of quoting a tile job?",
    a: "Subfloor and substrate condition. An uneven slab or a shower that needs full waterproofing can double the job cost, and you can't see it all until demo. Inspect before quoting, price prep as its own line, and never fix-price leveling on a floor you haven't put a straightedge on.",
  },
  {
    q: "Should the tile itself be included in my quote?",
    a: "Either way works, but pick one and be explicit. Many setters quote labor + setting materials and let the client buy tile (avoids you owning their taste). If you supply it, add 15–20% markup for sourcing, handling, and the risk of ordering wrong — and get the exact SKU in writing before ordering.",
  },
  {
    q: "How long does a tile shower take to install?",
    a: "A standard tub surround or walk-in shower takes 3–5 working days: demo and prep, waterproofing (which needs cure time), setting, then grouting and sealing. Large-format tile, intricate patterns, niches, and benches each add a day. Don't promise a 2-day shower — the waterproofing cure time alone forbids it.",
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
      title="How to Quote a Tile Installation Job"
      description="The tile contractor's quoting walkthrough: measure right, price the setting materials most bids forget, and protect your margin on the fiddly bits."
      slug="how-to-quote-tile-job"
      calculatorHref="/calculators/tile-flooring-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quoting tile starts with one discipline: measure the <em>tile
        area</em>, not the room. Subtract vanities, tubs, and islands, add
        10% waste (15% for diagonal or large-format layouts), then price labor
        by complexity — $5–$10/sq ft for straightforward floors, $10–$18 for
        shower walls, $12–$25 for large-format or intricate patterns — and
        itemize the setting materials (thinset, grout, backer board,
        membranes) that add $2–$5/sq ft and that most losing bids forget.
        Small bathrooms price higher per foot than big open floors, because
        cuts-per-square-foot drives your time, not area. That&apos;s the whole
        framework; the rest is executing it without the extras eating you
        alive.
      </p>

      <h2>2026 tile labor rates by project type</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Project</th>
            <th style={thStyle}>Labor $/sq ft</th>
            <th style={thStyle}>Typical total (labor)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Floor tile, straightforward layout</td>
            <td style={tdStyle}>$5–$10</td>
            <td style={tdStyle}>$500–$2,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bathroom floor (small, cut-heavy)</td>
            <td style={tdStyle}>$8–$14</td>
            <td style={tdStyle}>$400–$900</td>
          </tr>
          <tr>
            <td style={tdStyle}>Shower walls / tub surround</td>
            <td style={tdStyle}>$10–$18</td>
            <td style={tdStyle}>$800–$2,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Large-format tile (24&quot;+)</td>
            <td style={tdStyle}>$12–$20</td>
            <td style={tdStyle}>$1,200–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Intricate patterns (herringbone, mosaic)</td>
            <td style={tdStyle}>$15–$25</td>
            <td style={tdStyle}>$1,500–$5,000+</td>
          </tr>
          <tr>
            <td style={tdStyle}>Kitchen backsplash</td>
            <td style={tdStyle}>$10–$20</td>
            <td style={tdStyle}>$400–$1,200</td>
          </tr>
        </tbody>
      </table>
      <p>
        Backsplashes look small but price high per foot — outlets, cabinets,
        and corners mean constant cutting. Quote them per project ($400–$1,200
        typical), not per square foot, or the math confuses everyone.
      </p>

      <h2>Step 1: Measure like a setter, not a salesperson</h2>
      <p>
        Measure the actual surface to be tiled. In bathrooms, that means the
        floor minus the vanity footprint and toilet, and walls minus the tub
        or shower pan. On floors, subtract islands and built-ins. Then add
        waste: <strong>10% for standard grid layouts, 15% for diagonal
        patterns, large-format tile, or rooms with jogs and niches</strong>.
        Large-format tile wastes more because every cut consumes a big,
        expensive piece.
      </p>
      <p>
        Under-ordering is the expensive mistake here. Running short mid-job
        means ordering more tile from a different dye lot — and tile shades
        vary between production runs. The client will notice the mismatch
        forever, and re-doing a section costs more than the extra box ever
        would have. When in doubt, round up; leftover tile becomes the
        client&apos;s attic stock for future repairs, which they&apos;ll thank
        you for.
      </p>

      <h2>Step 2: Know your tile — material changes everything</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tile type</th>
            <th style={thStyle}>Material $/sq ft</th>
            <th style={thStyle}>Setting notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Ceramic</td>
            <td style={tdStyle}>$1–$5</td>
            <td style={tdStyle}>Easiest to cut and set; walls and light floors</td>
          </tr>
          <tr>
            <td style={tdStyle}>Porcelain</td>
            <td style={tdStyle}>$2–$10</td>
            <td style={tdStyle}>Harder, denser; needs a good wet saw; best all-rounder</td>
          </tr>
          <tr>
            <td style={tdStyle}>Natural stone (travertine, slate)</td>
            <td style={tdStyle}>$5–$15</td>
            <td style={tdStyle}>Sealing required; lippage-prone; slower setting</td>
          </tr>
          <tr>
            <td style={tdStyle}>Marble</td>
            <td style={tdStyle}>$8–$25</td>
            <td style={tdStyle}>Stains and etches; white thinset only; premium labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Glass / mosaic</td>
            <td style={tdStyle}>$7–$30</td>
            <td style={tdStyle}>Sheet-mounted; meticulous layout; highest labor</td>
          </tr>
        </tbody>
      </table>
      <p>
        The tile the client picks moves your labor, not just the material
        cost. Marble and large-format porcelain set slower, need better
        substrate prep, and punish mistakes — price the labor tier to match
        the tile tier. If the client is choosing between $2 ceramic and $12
        marble, your labor quote should reflect which one you&apos;re
        installing.
      </p>

      <h2>Step 3: Itemize the setting materials</h2>
      <p>
        This is where tile bids die. The tile is the visible cost; the setting
        materials are the invisible $2–$5/sq ft that separates a profitable
        bid from a loss:
      </p>
      <ul>
        <li><strong>Thinset mortar:</strong> $15–$30 per 50-lb bag, covering ~80–100 sq ft. Large-format tile needs medium-bed mortar ($25–$40/bag).</li>
        <li><strong>Grout:</strong> $15–$40 per bag; epoxy grout ($50–$80) for showers and stain-prone areas — quote it as an upgrade.</li>
        <li><strong>Backer board:</strong> $12–$18 per 3×5 sheet for cement board on floors; uncoupling membrane ($2–$3/sq ft) is the premium alternative.</li>
        <li><strong>Waterproofing membrane:</strong> $50–$100+ per shower for roll-on systems; sheet membranes run more but are foolproof.</li>
        <li><strong>Transitions and profiles:</strong> $5–$15 per linear foot for Schluter-style edge profiles and transition strips.</li>
      </ul>
      <p>
        List every one of them on the bid. When a client compares your $14/sq
        ft all-in bid against a competitor&apos;s $9/sq ft labor-only bid, the
        itemization is what saves you — it shows the $9 bid is missing $5 of
        materials, not $5 cheaper.
      </p>

      <h2>Waterproofing systems compared</h2>
      <p>
        For showers and wet areas, the waterproofing system is the most
        consequential line on the bid — it&apos;s the difference between a
        20-year shower and a $5,000 tear-out. Three approaches dominate in
        2026:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>System</th>
            <th style={thStyle}>Material cost</th>
            <th style={thStyle}>Labor</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Roll-on liquid membrane</td>
            <td style={tdStyle}>$50–$100/shower</td>
            <td style={tdStyle}>Low — paint it on</td>
            <td style={tdStyle}>Budget jobs, simple surrounds</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sheet membrane</td>
            <td style={tdStyle}>$150–$300/shower</td>
            <td style={tdStyle}>Medium — precise seams</td>
            <td style={tdStyle}>The pro standard; foolproof when done right</td>
          </tr>
          <tr>
            <td style={tdStyle}>Foam backer board system</td>
            <td style={tdStyle}>$200–$400/shower</td>
            <td style={tdStyle}>Low — boards are the waterproofing</td>
            <td style={tdStyle}>Speed; waterproof and tile-ready in one step</td>
          </tr>
        </tbody>
      </table>
      <p>
        Quote the system by name on the bid — &ldquo;sheet membrane
        waterproofing&rdquo; tells the client exactly what they&apos;re
        paying for and differentiates you from the bidder who just writes
        &ldquo;waterproofing.&rdquo; Whatever system you use, flood-test the
        pan for 24 hours before tiling. A failed pan found after tile is a
        full tear-out; found before, it&apos;s an afternoon&apos;s rework.
      </p>

      <h2>Step 4: Call out the extras upfront</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Extra</th>
            <th style={thStyle}>2026 pricing</th>
            <th style={thStyle}>How to bid it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Demo & disposal</td>
            <td style={tdStyle}>$1–$3/sq ft</td>
            <td style={tdStyle}>Separate line, always</td>
          </tr>
          <tr>
            <td style={tdStyle}>Subfloor leveling</td>
            <td style={tdStyle}>$2–$4/sq ft</td>
            <td style={tdStyle}>After inspection with a straightedge; never blind</td>
          </tr>
          <tr>
            <td style={tdStyle}>Shower niche</td>
            <td style={tdStyle}>$150–$300 each</td>
            <td style={tdStyle}>Per feature, not per foot</td>
          </tr>
          <tr>
            <td style={tdStyle}>Shower bench / curb</td>
            <td style={tdStyle}>$200–$400 each</td>
            <td style={tdStyle}>Per feature</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sealing natural stone</td>
            <td style={tdStyle}>$1–$2/sq ft</td>
            <td style={tdStyle}>Include or exclude in writing</td>
          </tr>
          <tr>
            <td style={tdStyle}>Plumbing adjustments</td>
            <td style={tdStyle}>$150–$400</td>
            <td style={tdStyle}>Sub it or exclude it — don&apos;t absorb it</td>
          </tr>
        </tbody>
      </table>
      <p>
        Subfloor prep is the #1 margin killer in tile. An uneven slab telegraphs
        lippage through every large tile, and self-leveling compound at
        $30–$50 a bag adds up fast on a wavy floor. Put a 6-foot straightedge
        on the floor during the estimate — if you can slide a quarter under it
        anywhere, there&apos;s leveling work to price.
      </p>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Photograph the layout before grout.</strong> Dry-lay or snap lines, then photo the pattern. It&apos;s your proof the layout was approved if the client &ldquo;remembers it differently.&rdquo;</li>
        <li><strong>Charge for the sample board.</strong> A 2×2 sample panel of the exact tile, grout color, and pattern eliminates the most common dispute in tile: &ldquo;that&apos;s not what I pictured.&rdquo;</li>
        <li><strong>Waterproofing cure time is non-negotiable.</strong> Roll-on membranes need their full cure before tile goes on — don&apos;t let schedule pressure compress it. A failed shower pan is a $5,000 tear-out.</li>
        <li><strong>Keep the client out of the tile aisle alone.</strong> Steer them to 2–3 options in their budget. Unlimited choice means decision paralysis, change orders, and restocking fees.</li>
        <li><strong>Offer grout sealing as a line item.</strong> $1–$2/sq ft, 30 minutes with a applicator bottle on a bathroom — pure margin, and it&apos;s genuinely good for the client.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <p>
        A note on grout, since clients ask and it affects your bid:
        <strong>unsanded grout</strong> for joints under 1/8&quot; (walls,
        polished stone), <strong>sanded grout</strong> for wider floor joints,
        and <strong>epoxy grout</strong> where staining is a concern
        (showers, kitchens, commercial). Epoxy costs 2–3× more and sets
        faster — harder to work, but it never needs sealing and won&apos;t
        stain. Quote it as an upgrade line; about a third of clients take it
        once they hear &ldquo;never scrub grout again.&rdquo;
      </p>
      <ul>
        <li><strong>Quoting the room instead of the tile area.</strong> Tubs, vanities, and islands aren&apos;t tiled — but they&apos;re in your square footage if you&apos;re lazy.</li>
        <li><strong>One labor rate for all tile.</strong> Marble at ceramic prices is a pay cut you volunteered for.</li>
        <li><strong>Skipping the straightedge.</strong> The floor tells you the prep cost if you ask it. Ask it.</li>
        <li><strong>Forgetting cure times in the schedule.</strong> Thinset, grout, and sealers all have minimum cures — promise dates that respect them.</li>
        <li><strong>Mismatched dye lots.</strong> Order all tile at once, same lot, with waste included. The extra box is the cheapest insurance in the trade.</li>
        <li><strong>Absorbing plumbing.</strong> Moving a drain or valve is a plumber&apos;s $200–$400, not your freebie.</li>
      </ul>
      <p>
        Run the material math in the{" "}
        <a href="/calculators/tile-flooring-calculator">tile calculator</a>{" "}
        and build the itemized <a href="/quote">quote</a> the same day you
        measure. And if the client is weighing tile against other flooring,
        our <a href="/guides/lvp-flooring-cost">LVP cost guide</a> gives you
        the comparison numbers to keep the conversation honest.
      </p>

      <Faq items={faqs} heading="Tile questions, answered" />
    </GuideArticle>
  );
}
