import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Kitchen Cabinet Installation Cost (2026)",
  description:
    "Kitchen cabinet installation cost in 2026: $100–$1,200+ per linear foot by tier, install-only labor, and stock vs semi-custom vs custom totals.",
  keywords: [
    "kitchen cabinet installation cost",
    "cost to install kitchen cabinets",
    "cost of kitchen cabinets installed",
    "kitchen cabinet install price",
  ],
  alternates: {
    canonical: "https://calcbid.com/guides/kitchen-cabinet-installation-cost",
  },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Kitchen Cabinet Installation Cost (2026) | CalcBid",
    description:
      "Per-linear-foot pricing by tier, install-only labor, and the lead-time math.",
    url: "https://calcbid.com/guides/kitchen-cabinet-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Cabinet Installation Cost (2026) | CalcBid",
    description:
      "Per-linear-foot pricing by tier, install-only labor, and the lead-time math.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install kitchen cabinets?",
    a: "Installed kitchen cabinets cost $100–$300 per linear foot for stock, $150–$450 for semi-custom, and $500–$1,200+ for custom in 2026. For a typical 10×10 kitchen with 20–25 linear feet of cabinetry, that's $5,000–$12,000 installed for stock or semi-custom — the single biggest line item in most kitchen remodels.",
  },
  {
    q: "How much is labor to install kitchen cabinets?",
    a: "Install-only labor runs $50–$450 per cabinet, or roughly $1,500–$8,000 for a full 10×10 kitchen, depending on region and complexity. Most installers quote per linear foot ($50–$150/lin ft labor) or a flat project price. Islands, tall pantry units, and anything requiring scribing to uneven walls sit at the top of the range.",
  },
  {
    q: "How long does it take to install kitchen cabinets?",
    a: "A standard 10×10 kitchen takes 2–4 days for cabinet installation once the boxes are on site. The real timeline is the lead time: stock cabinets ship in 1–3 weeks, semi-custom in 6–10 weeks, and custom in 10–16 weeks. Never schedule demo around a cabinet delivery date you haven't confirmed in writing.",
  },
  {
    q: "Are stock cabinets worth it vs. semi-custom?",
    a: "Stock cabinets are the value play — 30–50% cheaper than semi-custom, available fast, and the quality gap has narrowed as big-box lines improved their box construction and hardware. Semi-custom earns its premium in odd-sized kitchens: filler panels, odd widths, and specialty storage (pull-outs, lazy Susans, tray dividers) that stock lines can't do. For a straightforward rectangular kitchen, stock plus a good installer beats semi-custom.",
  },
  {
    q: "Can you install kitchen cabinets on uneven floors or walls?",
    a: "Yes — that's literally the job. Installers shim and scribe cabinets level and plumb regardless of what the floor and walls are doing; that's why cabinet install is skilled labor, not assembly. What you can't fix with shims: walls out of plumb more than about an inch (the countertop won't sit right) and floors sloping badly enough to telegraph into the toe-kick line. Flag both during the estimate.",
  },
  {
    q: "Should I replace or reface my kitchen cabinets?",
    a: "If the boxes are solid, level, and the layout works, refacing ($4,000–$10,000) or professional painting ($3,000–$7,000) delivers 70–80% of the visual impact for 30–40% of the cost of new cabinets. Replace when the boxes are damaged, the layout is wrong, or you need different dimensions — refacing can't fix a bad kitchen, only a dated one.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Kitchen Cabinet Installation Cost (2026)"
      description="What installing kitchen cabinets costs in 2026 — stock vs. semi-custom vs. custom per-linear-foot pricing, install-only labor, and the ordering timeline."
      slug="kitchen-cabinet-installation-cost"
      updated="October 2026"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Estimate the paint"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Kitchen cabinets installed cost <strong>$100–$300 per linear
        foot</strong> for stock, <strong>$150–$450</strong> for semi-custom,
        and <strong>$500–$1,200+</strong> for custom in 2026. A typical 10×10
        kitchen (20–25 linear feet) lands at <strong>$5,000–$12,000</strong>{" "}
        installed for stock or semi-custom. Install-only labor is{" "}
        <strong>$50–$450 per cabinet</strong>. Cabinets are 25–35% of a kitchen
        remodel — the tier decision here sets the entire project budget.
      </p>
      <p>
        This is the cabinet line item inside the{" "}
        <a href="/guides/kitchen-remodel-cost">kitchen remodel cost</a>{" "}
        pillar — that guide has the whole-project math; this one is the deep
        dive on the biggest single line.
      </p>

      <h2>Installed cost by cabinet tier</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Cabinets $/lin ft</th>
            <th>10×10 kitchen installed</th>
            <th>Lead time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock (RTA / big-box)</td>
            <td className="num">$100–$300</td>
            <td className="num">$3,000–$7,500</td>
            <td className="num">1–3 weeks</td>
          </tr>
          <tr>
            <td>Semi-custom</td>
            <td className="num">$150–$450</td>
            <td className="num">$5,000–$12,000</td>
            <td className="num">6–10 weeks</td>
          </tr>
          <tr>
            <td>Custom</td>
            <td className="num">$500–$1,200+</td>
            <td className="num">$15,000–$30,000+</td>
            <td className="num">10–16 weeks</td>
          </tr>
        </tbody>
      </table>
      <p>
        &ldquo;10×10 kitchen&rdquo; is the industry&apos;s standard estimating
        unit — roughly 20–25 linear feet of combined base and wall cabinets.
        When a client says &ldquo;just give me a ballpark,&rdquo; the 10×10
        number is the ballpark. Measure linear feet of wall run (base +
        uppers counted together), multiply by the tier, and you&apos;re within
        20% before you&apos;ve opened a catalog.
      </p>

      <h2>Install-only labor: what the installer charges</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Pricing method</th>
            <th>2026 range</th>
            <th>When it&apos;s used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Per cabinet</td>
            <td className="num">$50–$450 / cabinet</td>
            <td>Small jobs; tall/pantry units at the top end</td>
          </tr>
          <tr>
            <td>Per linear foot (labor)</td>
            <td className="num">$50–$150 / lin ft</td>
            <td>Full-kitchen installs, the common method</td>
          </tr>
          <tr>
            <td>Flat project price</td>
            <td className="num">$1,500–$8,000</td>
            <td>10×10 kitchens; islands and complexity push it up</td>
          </tr>
          <tr>
            <td>Day rate</td>
            <td className="num">$400–$800 / day</td>
            <td>Small fixes, single-vanity-style jobs</td>
          </tr>
        </tbody>
      </table>
      <p>
        What the labor covers: finding studs and setting a level ledger line,
        shimming and scribing every box plumb and level, joining boxes,
        anchoring to studs (never drywall alone), installing crown, scribe,
        and toe-kick, hanging doors and adjusting hinges, setting drawer
        slides, and hardware. The visible craftsmanship in a kitchen{" "}
        <em>is</em> the cabinet install — a 1/8-inch rack in a run of uppers
        shows forever.
      </p>

      <h2>Stock vs. semi-custom vs. custom: the real comparison</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th></th>
            <th>Stock</th>
            <th>Semi-custom</th>
            <th>Custom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sizes</td>
            <td>Fixed 3&quot; increments; fillers for the rest</td>
            <td>More widths + depths; some modifications</td>
            <td>Any size, any configuration</td>
          </tr>
          <tr>
            <td>Box construction</td>
            <td>Particleboard or MDF; improving</td>
            <td>Plywood common; better joinery</td>
            <td>Plywood, dovetail drawers standard</td>
          </tr>
          <tr>
            <td>Finishes</td>
            <td>10–20 stock colors</td>
            <td>Dozens of finishes + glazes</td>
            <td>Any color, any sheen, matched</td>
          </tr>
          <tr>
            <td>Storage options</td>
            <td>Basic; aftermarket organizers</td>
            <td>Pull-outs, dividers, lazy Susans</td>
            <td>Designed around the client</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Rentals, flips, tight budgets</td>
            <td>The residential sweet spot</td>
            <td>Forever homes, odd layouts</td>
          </tr>
        </tbody>
      </table>
      <p>
        The honest sales guidance: in a straightforward rectangular kitchen,
        stock cabinets installed <em>well</em> beat semi-custom installed
        poorly. The installer matters more than the tier up to the semi-custom
        line. Custom earns its money in kitchens with angles, short walls,
        and ceiling heights stock lines can&apos;t reach.
      </p>

      <h2>What moves the bid</h2>
      <ul>
        <li><strong>Linear footage:</strong> the obvious one — count base and wall runs together, including the island and pantry wall. Clients forget the pantry; estimators shouldn&apos;t.</li>
        <li><strong>Ceiling height:</strong> 8-foot ceilings take standard 30–36&quot; uppers; 9–10-foot ceilings want stacked uppers or taller boxes — 20–40% more cabinet cost for the same footprint.</li>
        <li><strong>Island:</strong> a 6-foot island is ~12 linear feet of cabinetry plus a waterfall or overhang detail. Price it as its own line, not as &ldquo;extra.&rdquo;</li>
        <li><strong>Scribing and shimming:</strong> old houses have no plumb walls. Budget the scribing time explicitly — it&apos;s the difference between a clean install and caulked gaps.</li>
        <li><strong>Hardware:</strong> knobs and pulls at $3–$15 each across 40+ pieces adds $200–$600, plus soft-close upgrades ($5–$15 per hinge/drawer). Small line, big feel.</li>
        <li><strong>Removal of old cabinets:</strong> $500–$1,500 demo and disposal. Donate-able boxes can offset the haul cost — Habitat ReStores take them.</li>
      </ul>

      <h2>Replace vs. reface vs. repaint</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>2026 range</th>
            <th>Choose when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Professional repaint</td>
            <td className="num">$3,000–$7,000</td>
            <td>Boxes are solid, layout works, style is just dated</td>
          </tr>
          <tr>
            <td>Refacing (new doors + veneer)</td>
            <td className="num">$4,000–$10,000</td>
            <td>Boxes are solid, you want a new door style</td>
          </tr>
          <tr>
            <td>Full replacement (stock)</td>
            <td className="num">$5,000–$12,000</td>
            <td>Layout changes, damaged boxes, wrong dimensions</td>
          </tr>
          <tr>
            <td>Full replacement (custom)</td>
            <td className="num">$15,000–$30,000+</td>
            <td>Forever home, odd layout, nothing standard fits</td>
          </tr>
        </tbody>
      </table>
      <p>
        Refacing deserves its own conversation with the client: it keeps the
        boxes and replaces doors, drawer fronts, and visible veneer. It&apos;s
        30–40% of replacement cost for 70–80% of the visual change — but it
        cannot fix a bad layout, damaged boxes, or the wrong cabinet depths.
        Diagnose the boxes before recommending it, and price the alternative
        honestly — see{" "}
        <a href="/guides/kitchen-cabinet-refacing-cost">
          kitchen cabinet refacing cost
        </a>{" "}
        for the refacing-vs-replacing math.
      </p>

      <h2>The installation process, step by step</h2>
      <ul>
        <li><strong>1. Verify the order and the room.</strong> Check every box against the packing list; find high/low spots on the floor; mark stud locations. Missing or damaged boxes are discovered now, not mid-install.</li>
        <li><strong>2. Set the ledger and layout lines.</strong> Level line for the uppers, layout for the base run. Everything hangs off these marks.</li>
        <li><strong>3. Install uppers first.</strong> Less ladder work over installed base cabinets, and no risk of dropping a wall cabinet onto a finished base. Shim, join, anchor to studs.</li>
        <li><strong>4. Install base cabinets.</strong> Level front-to-back and side-to-side; shim the low corners; screw boxes together through the face frames.</li>
        <li><strong>5. Scribe to walls.</strong> Scribe stiles and fillers to out-of-plumb walls — this is the craftsmanship the client sees at the seams.</li>
        <li><strong>6. Trim, doors, hardware.</strong> Crown, light rail, toe-kick, then hang doors, adjust hinges to even reveals, install pulls. The last 10% is 50% of the perceived quality.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Ordering before the room is measured twice.</strong> A 1-inch measuring error on a 10-foot wall means a cabinet that doesn&apos;t fit. Measure twice, order once, verify against the approved plan on delivery.</li>
        <li><strong>Demo before cabinets arrive.</strong> The lead time runs from order to delivery — demoing into a 10-week gap leaves a client without a kitchen. Cabinets confirmed on the truck before the first cabinet comes off the wall.</li>
        <li><strong>Anchoring to drywall.</strong> Uppers hold dishes, not air. Studs or blocking, always — a falling wall cabinet is a catastrophe, not a callback.</li>
        <li><strong>Skipping the ledger level check.</strong> Floors slope; the cabinet run must not. A run installed to the floor instead of to level shows in every door reveal.</li>
        <li><strong>Forgetting the appliance specs.</strong> The 36-inch range space, the fridge surround, the dishwasher opening — all from the actual appliance cut sheets, not from memory. Countertop templating inherits every error.</li>
        <li><strong>Quoting hardware as an afterthought.</strong> Forty pulls at $8 each is $320 the client didn&apos;t expect. Line-item it.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> RTA (ready-to-assemble) stock cabinets are designed for homeowner assembly and install — flat-pack, cam locks, clear instructions. A handy homeowner with a level, shims, and a stud finder can install a small straight run and save $1,000–$2,500.</li>
        <li><strong>Hire a pro:</strong> full-kitchen installs, anything with corners and angles, tall pantry units, islands with electrical, walls more than ~1/2 inch out of plumb, and all custom cabinetry. The scribing and leveling is the skill; the boxes are just the material.</li>
        <li><strong>The gray zone:</strong> hanging uppers solo. The cabinets aren&apos;t that heavy — the danger is holding a 40-pound box overhead while driving screws. A cabinet jack ($100–$200) makes it a one-person job; without one, it&apos;s a two-person job minimum.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        <strong>Cabinet replacement alone: usually no.</strong> Swapping boxes
        in the same layout is cosmetic work in most municipalities. The permit
        triggers when the project touches <strong>plumbing</strong> (moving
        the sink), <strong>electrical</strong> (new circuits, moving outlets,
        under-cabinet lighting on new circuits), or <strong>structure</strong>.
        Since most full kitchen remodels include at least one of those, the
        cabinet job usually rides on the kitchen&apos;s <strong>$300–$1,000
        building permit</strong> — but a pure like-for-like cabinet swap
        typically doesn&apos;t need its own. When in doubt, call the building
        department with the scope; a five-minute call beats a stop-work order.
      </p>
      <p>
        Price the paint and finishes with the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a> and send
        the line-itemed <a href="/quote">quote</a> before the client gets the
        second bid. Cabinet clients buy confidence — the detailed estimate is
        the product.
      </p>

      <Faq items={faqs} heading="Cabinet installation questions, answered" />
    </GuideArticle>
  );
}
