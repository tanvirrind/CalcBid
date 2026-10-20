import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Mulch Cost Per Yard (2026): Delivered & Installed",
  description:
    "How much does mulch cost per yard in 2026? Bulk, bagged, delivery and installed prices by type, plus the coverage math to order exactly enough.",
  keywords: [
    "mulch cost per yard",
    "how much does mulch cost",
    "mulch installation cost",
    "bulk mulch prices",
    "mulch delivery cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/mulch-cost-per-yard" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Mulch Cost Per Yard (2026) | CalcBid",
    description:
      "Bulk, bagged, delivery and installed mulch prices by type, plus the coverage math to order exactly enough.",
    url: "https://calcbid.com/guides/mulch-cost-per-yard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulch Cost Per Yard (2026) | CalcBid",
    description: "Bulk, bagged, delivery and installed mulch prices by type, plus the coverage math to order exactly enough.",
  },
};

const faqs = [
  {
    q: "How many bags of mulch make a cubic yard?",
    a: "13.5 bags of the standard 2-cubic-foot size make one cubic yard (27 cubic feet ÷ 2). At $5 a bag, that's $67.50 per effective yard — roughly double the bulk price. Bags win for projects under about 1.5 yards; beyond that, bulk delivery is almost always cheaper even after the delivery fee.",
  },
  {
    q: "How much does a yard of mulch cover?",
    a: "One cubic yard covers 108 square feet at 3 inches deep, 162 square feet at 2 inches, or 324 square feet at 1 inch. So a 300-square-foot bed at a proper 3-inch depth needs about 2.8 yards — round up to 3. The math is area × (depth ÷ 12) ÷ 27 = cubic yards.",
  },
  {
    q: "Is it cheaper to buy mulch in bags or bulk?",
    a: "Bulk is almost always cheaper per yard — about half the effective price of bagged mulch. Standard bagged shredded hardwood works out to $54–95 per effective yard, while bulk shredded hardwood runs $25–45 per yard. The tradeoff: bulk orders usually carry a delivery fee of $50–100 and often a minimum of 1–2 yards, so for tiny beds under ~1.5 yards, bags can win once you factor in delivery.",
  },
  {
    q: "What does mulch installation cost per yard in 2026?",
    a: "Professionally delivered and installed mulch runs $50–150 per cubic yard in 2026, with national averages around $72–87 per yard for a straightforward job. That figure bundles material, delivery, and spreading. Per-bag installed pricing runs $7–14 per 2-cubic-foot bag, though most pros quote by the yard or square foot instead.",
  },
  {
    q: "How deep should mulch be?",
    a: "Two to three inches is the sweet spot for most beds — enough to smother weeds and hold moisture without suffocating roots. Four inches is the max; beyond that you get matted layers that shed water and starve roots of oxygen. And never pile mulch against tree trunks — the 'volcano' method rots bark and invites pests.",
  },
  {
    q: "How much mulch do I need for a 10x20 foot bed?",
    a: "A 10×20 bed is 200 square feet. At 3 inches deep: 200 × (3/12) = 50 cubic feet ÷ 27 = 1.85 cubic yards, so order 2 yards. That's about 27 two-cubic-foot bags. Run your own numbers in the mulch calculator — it converts dimensions to yards and bag counts automatically.",
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
      title="Mulch Cost Per Yard"
      description="Bulk, bagged, delivered, and installed mulch prices — plus the depth math so you order exactly enough the first time."
      slug="mulch-cost-per-yard"
      updated="October 2026"
      calculatorHref="/calculators/mulch-calculator"
      calculatorLabel="Mulch Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bulk wood mulch costs <strong>$25–$55 per cubic yard</strong> in the
        2026 US range, delivered pricing for the material alone. Bagged mulch
        runs <strong>$3–$8 per 2-cubic-foot bag</strong> — and it takes{" "}
        <strong>13.5 bags to make one cubic yard</strong>, so bagged mulch
        works out to roughly double the bulk price per yard. Professional
        installation, including material, delivery, and spreading, commonly
        lands at <strong>$50–$150 per cubic yard</strong>, with national
        averages around $72–87 per yard. One cubic yard covers{" "}
        <strong>108 square feet at 3 inches deep</strong>. Once you know those
        four numbers — yard price, bag math, installed price, and coverage —
        every mulch quote or DIY plan becomes simple arithmetic.
      </p>

      <h2>2026 mulch prices per yard</h2>
      <p>
        Material-only prices at landscape supply yards, before delivery. Bag
        prices are typical 2-cubic-foot bags at major retailers in 2026.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Mulch type</th>
            <th style={thStyle}>Bulk price / yd</th>
            <th style={thStyle}>Bag price (2 cu ft)</th>
            <th style={thStyle}>Typical look & life</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Shredded hardwood</td>
            <td style={tdStyle}>$25–$45</td>
            <td style={tdStyle}>$4–$6</td>
            <td style={tdStyle}>The standard; mats together well, 1–2 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pine bark / nuggets</td>
            <td style={tdStyle}>$30–$50</td>
            <td style={tdStyle}>$4–$7</td>
            <td style={tdStyle}>Chunky, rustic look; washes out slower</td>
          </tr>
          <tr>
            <td style={tdStyle}>Dyed (black, red, gold)</td>
            <td style={tdStyle}>$35–$55</td>
            <td style={tdStyle}>$5–$8</td>
            <td style={tdStyle}>Bold color, fades in strong sun; 1–2 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar</td>
            <td style={tdStyle}>$40–$65</td>
            <td style={tdStyle}>$6–$8</td>
            <td style={tdStyle}>Natural insect resistance, 2–3 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cypress blend</td>
            <td style={tdStyle}>$45–$70</td>
            <td style={tdStyle}>$6–$9</td>
            <td style={tdStyle}>Long-lasting, fine texture; 2–3 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Rubber mulch</td>
            <td style={tdStyle}>$65–$100+</td>
            <td style={tdStyle}>$8–$13</td>
            <td style={tdStyle}>Doesn&apos;t decompose; playgrounds, not beds</td>
          </tr>
          <tr>
            <td style={tdStyle}>Free arborist chips</td>
            <td style={tdStyle}>$0</td>
            <td style={tdStyle}>—</td>
            <td style={tdStyle}>Fresh tree chips; chunky, uncolored, 1 year</td>
          </tr>
        </tbody>
      </table>
      <p>
        Prices run higher in the Northeast and other high-cost markets and
        lower in the Southeast near mulch producers. Spring is peak season —
        late summer and fall often bring clearance prices 30–50% lower at
        big-box stores, and suppliers are more negotiable on delivery once
        planting season ends.
      </p>

      <h2>Bagged vs. bulk: the real math</h2>
      <p>
        The shelf tag hides the unit mismatch: bags sell cubic feet, suppliers
        sell cubic yards, and one cubic yard is 27 cubic feet.{" "}
        <strong>A 2-cubic-foot bag is 0.074 yards</strong>, so it takes 13.5
        bags to equal one yard.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Format</th>
            <th style={thStyle}>Unit price</th>
            <th style={thStyle}>Effective $ per yard</th>
            <th style={thStyle}>Wins when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Bags — standard hardwood</td>
            <td style={tdStyle}>$4–$6/bag</td>
            <td style={tdStyle}>$54–$81</td>
            <td style={tdStyle}>Under ~1.5 yards, no delivery fee</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bags — premium (cedar/dyed)</td>
            <td style={tdStyle}>$6–$8/bag</td>
            <td style={tdStyle}>$81–$108</td>
            <td style={tdStyle}>Small accent beds where color matters</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bulk — shredded hardwood</td>
            <td style={tdStyle}>$30–$45/yd</td>
            <td style={tdStyle}>$30–$45</td>
            <td style={tdStyle}>2+ yards; add delivery fee separately</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bulk — cedar</td>
            <td style={tdStyle}>$40–$65/yd</td>
            <td style={tdStyle}>$40–$65</td>
            <td style={tdStyle}>Best value per year of life, 2+ yards</td>
          </tr>
        </tbody>
      </table>
      <p>
        A worked example: 400 square feet of beds at 3 inches needs 3.7
        yards. Bagged hardwood at $5.50/bag means 50 bags and{" "}
        <strong>about $275</strong>. Bulk hardwood at $32/yard plus a $70
        delivery fee: 4 yards × $32 + $70 = <strong>about $198</strong> —
        roughly 30% less for the same material. The crossover point is usually
        around 1.5 yards: below that, delivery fees and minimum orders erase
        the bulk advantage.
      </p>

      <h2>Delivery fees</h2>
      <p>
        Bulk mulch doesn&apos;t load itself. Local delivery typically costs{" "}
        <strong>$50–$100 flat</strong>, or around <strong>$7 per mile</strong>{" "}
        with a <strong>$60 minimum</strong>. Most suppliers have a minimum
        order of 1–2 yards, and a few waive or discount delivery on orders
        over 4–5 yards. If you own a truck or trailer, pickup is free — and
        many yards will load it with a skid steer in minutes. Watch the
        weight: a yard of wet hardwood mulch can top 1,000 pounds, more than
        some light trailers are rated for.
      </p>

      <h2>Installed mulch cost: DIY vs. pro</h2>
      <p>
        &ldquo;Installed&rdquo; quotes bundle material, delivery, bed prep,
        and spreading. Here&apos;s the 2026 US range per cubic yard:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Option</th>
            <th style={thStyle}>Cost per yard</th>
            <th style={thStyle}>What&apos;s included</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>DIY — bagged, self-spread</td>
            <td style={tdStyle}>$54–$95 (material only)</td>
            <td style={tdStyle}>Your labor, your back; easiest for small beds</td>
          </tr>
          <tr>
            <td style={tdStyle}>DIY — bulk delivered, self-spread</td>
            <td style={tdStyle}>$30–$55 + delivery</td>
            <td style={tdStyle}>Cheapest per yard; the spreading is real work</td>
          </tr>
          <tr>
            <td style={tdStyle}>DIY — mulch blown in</td>
            <td style={tdStyle}>$35–$60 spreading labor</td>
            <td style={tdStyle}>Blower-truck service spreads your bulk order</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pro installed (landscaper)</td>
            <td style={tdStyle}>$50–$150</td>
            <td style={tdStyle}>Material + delivery + spreading + light prep</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pro installed, with bed prep</td>
            <td style={tdStyle}>$110–$160</td>
            <td style={tdStyle}>Add weeding, edging cleanup, old mulch removal</td>
          </tr>
        </tbody>
      </table>
      <p>
        For a typical project — say 4 yards of hardwood installed — the
        homeowner math is roughly <strong>$200–$290 DIY</strong> (bulk +
        delivery + a weekend) versus <strong>$290–$600 pro-installed</strong>.
        The gap widens on bigger jobs and narrows on small ones, where a pro
        job minimum ($150–$300 is common) can make a single accent bed
        surprisingly expensive per yard.
      </p>

      <h2>How much mulch do you need?</h2>
      <p>
        The formula is simple:{" "}
        <strong>length × width × (depth in inches ÷ 12) ÷ 27 = cubic yards</strong>.
        A 10×20-foot bed at 3 inches: 200 × 0.25 = 50 cubic feet ÷ 27 = 1.85
        yards — order 2. For irregular beds, break them into rectangles,
        estimate generously, and always round up; running a yard short means
        a second delivery fee.
      </p>
      <p>
        Coverage per yard at common depths: <strong>108 sq ft at 3
        inches</strong>, 162 sq ft at 2 inches, 324 sq ft at 1 inch. Plan on
        <strong> 2–3 inches deep</strong> for most beds — enough to smother
        weeds and hold moisture. One inch is a refresh top-up over existing
        mulch, not a new bed. Four inches is the maximum; deeper layers mat
        together, shed water, and starve roots of air. Skip the math and use
        the <a href="/calculators/mulch-calculator">mulch calculator</a> —
        it converts your bed dimensions to yards and bag counts in seconds.
      </p>

      <h2>Which mulch type should you buy?</h2>
      <ul>
        <li><strong>Shredded hardwood:</strong> the default for most beds. It knits into a mat that stays put on slopes, looks natural, and costs the least. Downsides: decomposes fastest (top up yearly) and fresh piles can develop sour, ammonia-smelling pockets if left heaped too long.</li>
        <li><strong>Pine bark / nuggets:</strong> chunky and rustic; great for large beds and around shrubs where the texture reads well. Bark nuggets can float away in heavy rain on slopes — shredded bark holds better.</li>
        <li><strong>Dyed (black, red, gold):</strong> purely cosmetic — dyed mulch is shredded hardwood with colorant. It makes plant colors pop but fades in strong sun within a season, and cheap dyed product can leach color onto concrete in rain. Buy it for the look, not the longevity.</li>
        <li><strong>Cedar:</strong> the upgrade pick. Naturally aromatic, resists insects and decay, and lasts 2–3 years, which makes its higher per-yard price competitive on a per-year basis. The scent fades after a few months but the wood lasts.</li>
        <li><strong>Rubber mulch:</strong> doesn&apos;t decompose and doesn&apos;t feed soil — it&apos;s a playground and border product, not a planting-bed one. Expensive per yard and controversial in garden beds (heat retention, chemical leaching concerns). Skip it for anything you&apos;re growing.</li>
        <li><strong>Free arborist chips:</strong> fresh chips from tree services are often free for the asking (look for local chip-drop lists). Chunky and uncolored, fine for back beds and paths, but not a front-yard showpiece — and fresh chips tie up nitrogen at the soil surface, so keep them off young plants&apos; root zones.</li>
      </ul>

      <h2>Homeowner tips that save real money</h2>
      <ul>
        <li><strong>Buy in fall for spring.</strong> End-of-season clearance cuts bag prices 30–50%, and suppliers discount bulk once planting season ends. Pile it on a tarp — outdoor piles are fine and just compress over winter.</li>
        <li><strong>Edge before you mulch.</strong> A clean trench edge (a half-moon edger, 30 minutes of work) keeps mulch in the bed and grass out. Re-mulching without edging is why beds look tired six months later.</li>
        <li><strong>Skip weed fabric under organic mulch.</strong> Fabric blocks the decomposition that feeds your soil, and within a couple of years weeds root in the mulch layer above it anyway — then they&apos;re anchored through the fabric and twice as hard to pull. A thick 3-inch layer of mulch is the weed barrier.</li>
        <li><strong>Water the bed first, then mulch.</strong> Mulch locks in whatever moisture is there. Spreading dry mulch over dry soil seals in drought.</li>
        <li><strong>Top up, don&apos;t replace.</strong> A 1-inch annual refresh is enough once a base layer exists — you&apos;ll use a third of the mulch and get the same finished look.</li>
        <li><strong>Get multiple quotes for pro work.</strong> Installed pricing swings wildly by market; three bids on the same bed often differ by 40% or more.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Mulching too deep.</strong> Over 4 inches and mulch mats into a water-shedding crust that suffocates roots. Measure with a ruler the first time — most people spread twice what they think they did.</li>
        <li><strong>Volcano-mulching trees.</strong> Piling mulch against the trunk rots bark, invites borers and rodents, and can girdle the tree. Pull mulch back 3–4 inches from trunks and keep it in a flat donut, not a cone.</li>
        <li><strong>Trusting weed fabric.</strong> It sounds like a labor-saver but fails within a few years in planting beds, and removing it later is miserable. Save fabric for under paths and stone, never under organic mulch.</li>
        <li><strong>Ordering by eyeball.</strong> &ldquo;About two pickup loads&rdquo; is how you end up a yard short and paying a second $70 delivery fee. Do the yard math or use the calculator before you call the supplier.</li>
        <li><strong>Using fresh chips on young plants.</strong> Fresh, undecomposed wood chips pull nitrogen from the soil surface as they break down. Fine around established shrubs; bad around new plantings and vegetables. Compost them first or buy aged product.</li>
        <li><strong>Mulching over unpulled weeds.</strong> Mulch smothers seed germination but won&apos;t kill established weeds — they&apos;ll poke right through 3 inches. Pull or cut them first; the 30 minutes of prep saves years of frustration.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Spreading mulch is one of the most DIY-feasible yard projects —
        it&apos;s unskilled, forgiving work, and the savings are real: on a
        typical 4-yard job you keep <strong>$100–$300</strong> by spreading it
        yourself after bulk delivery. A weekend is enough for most suburban
        beds. You&apos;ll need a wheelbarrow, a shovel or manure fork, a steel
        rake, and gloves — under $50 if you&apos;re starting from zero, and
        everything except the rake is useful forever.
      </p>
      <p>
        Hire a pro when the job is big enough that labor dominates —
        typically 8+ yards, steep or awkward beds, or when you want bed prep
        (weeding, edging, old-mulch removal) bundled in. That prep work is
        where pros earn their markup; a crew that redefines bed edges and
        pulls everything clean delivers a visibly better result than mulch
        dumped on an unprepped bed. If a contractor quotes the job, ask for
        the yard count and material type in writing — it&apos;s the only way
        to compare bids apples-to-apples. Get it in a <a href="/quote">quote</a> you
        can hold them to.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        No — residential mulching almost never requires a permit. It&apos;s
        routine landscaping maintenance, not construction. The one real
        check: <strong>HOA rules</strong>. Some associations restrict mulch
        colors (dyed red or black is a common flashpoint), ban rubber mulch,
        or require approved materials lists. A quick scan of your HOA
        guidelines before you order avoids the nightmare of spreading a
        product the board then makes you remove. If you&apos;re changing
        drainage patterns or working near a protected tree, that&apos;s a
        separate question — but for standard bed mulching, you&apos;re in the
        clear.
      </p>
      <p>
        Run your bed dimensions through the{" "}
        <a href="/calculators/mulch-calculator">mulch calculator</a> to get
        exact yardage and bag counts, then price it against the tables above
        to decide between bags and bulk. And if you&apos;re bundling it with
        other spring cleanup, our guides to{" "}
        <a href="/guides/pressure-washing-cost-per-square-foot">pressure washing cost per square foot</a>{" "}
        and{" "}
        <a href="/guides/gutter-cleaning-cost-per-linear-foot">gutter cleaning cost per linear foot</a>{" "}
        cover the other two most-quoted exterior jobs.
      </p>

      <Faq items={faqs} heading="Mulch cost questions, answered" />
    </GuideArticle>
  );
}
