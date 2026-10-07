import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Concrete Slab Job (2026)",
  description:
    "How to bid concrete slab work: yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
  keywords: [
    "how to bid a concrete slab job",
    "how to quote concrete work",
    "concrete slab bidding",
    "how to estimate concrete",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-concrete-slab" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Concrete Slab Job | CalcBid",
    description:
      "Yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
    url: "https://calcbid.com/guides/how-to-bid-concrete-slab",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Concrete Slab Job | CalcBid",
    description: "Yardage, forming, rebar, finishing, and the site conditions that make or break the bid.",
  },
};

const faqs = [
  {
    q: "How long before you can drive on new concrete?",
    a: "Foot traffic in 24–48 hours, light vehicles after 7 days, full loads after 28 days when concrete reaches its design strength. Put it in writing on the quote — the client who parks the boat trailer on day three will blame you for the cracks.",
  },
  {
    q: "How thick should a concrete slab be?",
    a: "4 inches for patios, walkways, and passenger-vehicle driveways. Go 5–6 inches for RVs, work trucks, or equipment. Shed and hot-tub slabs: 4 inches is fine, but thicken the edge to 6–8 inches (a turned-down footing) so the perimeter doesn't crack under point loads.",
  },
  {
    q: "What PSI concrete should I order for a driveway?",
    a: "4,000 PSI is the residential standard for driveways in most of the US — it handles freeze-thaw and de-icers far better than 3,000 PSI. Patios and walkways can use 3,500 PSI. Always order air-entrained mix for anything exterior in a freeze climate.",
  },
  {
    q: "Fiber mesh vs. rebar — which does a slab need?",
    a: "They do different jobs. Fiber mesh controls plastic-shrinkage cracking while the concrete cures; it does not add structural strength. Rebar (or welded wire mesh, properly chaired up into the slab — not lying on the ground) holds cracks tight and adds load capacity. For driveways, use rebar on chairs. For a patio, fiber mesh plus wire is usually enough.",
  },
  {
    q: "Can you pour concrete over existing concrete?",
    a: "Yes, with conditions: the old slab must be sound (no heaving or major cracking), clean, and roughened, and you need a bonding agent. Minimum 2 inches of new concrete, 3–4 is better. It's a legitimate overlay option for patios — but for driveways carrying vehicles, tear-out and re-pour usually lasts longer.",
  },
  {
    q: "Why did my new concrete crack?",
    a: "Concrete cracks — the goal is controlling where. Random cracks come from: no control joints (or joints cut too late — within 6–12 hours of finishing), subgrade that wasn't compacted, too much water added at the truck (the #1 cause), or rapid drying in wind and heat. Proper joints every 8–12 feet handle the rest.",
  },
  {
    q: "How long does a concrete slab last?",
    a: "25–50 years for a properly built residential slab — 4,000 PSI, air-entrained, good base, sealed periodically. Cheap slabs (thin, no base, too much water) start failing in 5–10. The difference is entirely in the prep and the mix, which is why those lines belong on the bid, not in your margin.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How to Bid a Concrete Slab Job"
      description="The concrete contractor's bidding walkthrough: get the yardage right, price the forming and finishing honestly, and never eat the site conditions."
      slug="how-to-bid-concrete-slab"
      calculatorHref="/calculators/concrete-drywall-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Bid concrete slabs in four parts: <strong>yardage</strong> (length ×
        width × thickness in feet, ÷ 27, plus 5–10% overage),{" "}
        <strong>forming</strong> ($2–$4/sq ft), <strong>base and
        reinforcement</strong> ($1–$3/sq ft), and{" "}
        <strong>finishing</strong> ($2–$4/sq ft). All-in, residential flatwork
        lands at <strong>$6–$12 per sq ft</strong> in most US markets in 2026 —
        if your number is under $6, you forgot something. Then adjust for
        access, demo, grade, and weather before the number ever reaches the client.
      </p>
      <p>
        Concrete is the least forgiving trade to underbid. There&apos;s no
        undo button on a pour — a bad bid doesn&apos;t just cost margin, it
        can cost the entire job in a tear-out. Every section below exists
        because someone learned it the expensive way.
      </p>

      <h2>Full bid breakdown</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>2026 price range</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Concrete delivered</td>
            <td className="num">$140–$180 / yard</td>
            <td>4,000 PSI, air-entrained exterior mix</td>
          </tr>
          <tr>
            <td>Forming (set &amp; strip)</td>
            <td className="num">$2–$4 / sq ft</td>
            <td>Lumber, stakes, labor; more on curves/steps</td>
          </tr>
          <tr>
            <td>Gravel base, compacted</td>
            <td className="num">$1–$2 / sq ft</td>
            <td>4 in. minimum; non-negotiable</td>
          </tr>
          <tr>
            <td>Reinforcement</td>
            <td className="num">$0.50–$1.50 / sq ft</td>
            <td>Rebar on chairs for driveways; mesh/fiber for patios</td>
          </tr>
          <tr>
            <td>Finishing</td>
            <td className="num">$2–$4 / sq ft</td>
            <td>Broom is standard; trowel/stamp cost more</td>
          </tr>
          <tr>
            <td>Demo &amp; haul-off</td>
            <td className="num">$2–$4 / sq ft</td>
            <td>Separate line, always</td>
          </tr>
          <tr>
            <td>Pump truck</td>
            <td className="num">$500–$1,000</td>
            <td>When the mixer can&apos;t reach the forms</td>
          </tr>
          <tr>
            <td>Sealer</td>
            <td className="num">$0.75–$1.50 / sq ft</td>
            <td>Penetrating sealer; easy upsell</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 1: Get the yardage right</h2>
      <p>
        The formula: <strong>(length × width × thickness in feet) ÷ 27</strong>.
        Worked examples for the jobs you&apos;ll bid most:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Math</th>
            <th>Yards (order)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10×10 patio, 4 in.</td>
            <td className="num">(10 × 10 × 0.33) ÷ 27</td>
            <td className="num">1.2 → order 1.5</td>
          </tr>
          <tr>
            <td>20×20 driveway, 4 in.</td>
            <td className="num">(20 × 20 × 0.33) ÷ 27</td>
            <td className="num">4.9 → order 5.5</td>
          </tr>
          <tr>
            <td>24×30 shop slab, 6 in.</td>
            <td className="num">(24 × 30 × 0.5) ÷ 27</td>
            <td className="num">13.3 → order 14.5</td>
          </tr>
          <tr>
            <td>4×40 sidewalk, 4 in.</td>
            <td className="num">(4 × 40 × 0.33) ÷ 27</td>
            <td className="num">2.0 → order 2.5</td>
          </tr>
        </tbody>
      </table>
      <p>
        Always order <strong>5–10% over</strong> the math. Subgrade is never
        perfectly flat, forms flex, and coming up short mid-pour is the most
        expensive mistake in concrete — a second short-load fee plus a cold
        joint you&apos;ll see forever. Most suppliers have a 1–3 yard minimum
        and charge short-load fees under ~5 yards, so small jobs carry
        disproportionate delivery cost. Price that in.
      </p>
      <p>
        Run it in the{" "}
        <a href="/calculators/concrete-drywall-calculator">concrete calculator</a>{" "}
        to double-check — it handles waste factor and bag-vs-truck math.
      </p>

      <h2>Step 2: Price the whole job, not just the mud</h2>
      <p>
        Beginners bid the concrete and donate everything else. The mud is
        typically only <strong>a third to half</strong> of a flatwork bid.
        Walk through each line:
      </p>
      <ul>
        <li><strong>Forming ($2–$4/sq ft):</strong> straight runs are fast; curves, steps, and thickened edges are slow. Price steps per step ($75–$150 each), not per foot.</li>
        <li><strong>Base ($1–$2/sq ft):</strong> 4 inches of compacted gravel. If the soil is soft clay or fill, you need more — and the excavation to make room for it.</li>
        <li><strong>Reinforcement:</strong> #4 rebar on 18-inch centers, chaired up into the middle of the slab, for driveways. Welded wire mesh works for patios <em>only if it ends up in the concrete</em> — mesh left lying on the subgrade does literally nothing. Fiber mesh in the mix controls shrinkage cracking during cure.</li>
        <li><strong>Finishing ($2–$4/sq ft):</strong> broom finish is the residential standard (slip-resistant). Hard-trowel is for interiors. Stamped/decorative adds $3–$8/sq ft — it&apos;s a specialty bid, not an add-on.</li>
      </ul>

      <h2>Step 3: Walk the site — then adjust</h2>
      <ul>
        <li><strong>Access:</strong> can the mixer get within chute reach (~15 ft)? If not, it&apos;s wheelbarrow crews (slow, +$500+) or a pump truck ($500–$1,000). Backyard patios behind a house with no side access are pump jobs — bid it.</li>
        <li><strong>Grade:</strong> sloped sites need taller forms, more gravel, and more mud than the flat math says. A 6-inch fall across the slab adds real yardage.</li>
        <li><strong>Demo ($2–$4/sq ft):</strong> breaking, loading, and hauling old concrete. Always a separate line — clients accept it when they see it; they resent it when it&apos;s &ldquo;included&rdquo; and the total looks high.</li>
        <li><strong>Weather:</strong> above 90°F, you need retarders, extra crew, and possibly a morning pour — concrete that sets too fast can&apos;t be finished properly. Below 40°F, heated enclosures and insulated blankets. Both cost money; both go on the bid.</li>
        <li><strong>Drainage:</strong> where does water go now, and where will it go after you pave? A slab that ponds water against the foundation is a callback and a liability. Slope 1/4 inch per foot away from structures, minimum.</li>
      </ul>

      <h2>Step 4: Specify the mix like a pro</h2>
      <p>
        The bid should name the mix, not just &ldquo;concrete.&rdquo; For
        exterior residential work in 2026, the standard spec is{" "}
        <strong>4,000 PSI, air-entrained, 3/4-inch aggregate</strong>. Air
        entrainment (tiny bubbles in the mix) is what lets exterior concrete
        survive freeze-thaw — in northern markets it&apos;s non-negotiable,
        and skipping it to save $10/yard is how slabs spall in three years.
        Slump: 4 inches for flatwork. If the driver wants to add water to make
        it flow easier, that&apos;s your strength pouring out — every gallon
        over the design drops PSI and increases cracking.
      </p>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Cut joints the same day.</strong> Control joints go in 6–12 hours after finishing (or saw-cut the next morning at the latest). Joints cut late are decoration — the concrete already decided where to crack.</li>
        <li><strong>Never burn a slab you&apos;ll broom.</strong> Over-troweling exterior concrete seals the surface and traps bleed water — it scales off in the first winter. Broom it and walk away.</li>
        <li><strong>Cure it, don&apos;t just finish it.</strong> Concrete gains strength for 28 days. Curing compound or 7 days of wet burlap/plastic in heat makes measurably stronger concrete. It costs almost nothing and almost nobody bids it — put it on the quote and explain it.</li>
        <li><strong>Sell the sealer.</strong> Penetrating sealer at $0.75–$1.50/sq ft protects against de-icers and oil stains with great margin. Offer it on every exterior job; take-rate is high when you explain freeze-thaw.</li>
        <li><strong>Photograph the base.</strong> Gravel depth, compaction, rebar chairs — shoot it all before the pour. When a client asks why your bid beat the cheap guy&apos;s by $800, the photos answer.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Under-ordering mud.</strong> Covered above — the 5–10% overage is the cheapest insurance in construction.</li>
        <li><strong>Bidding demo as &ldquo;included.&rdquo;</strong> Break it out. A $2,400 slab with a $900 demo line beats a $3,300 lump sum every time in the client&apos;s mind.</li>
        <li><strong>Forgetting the pump.</strong> Discovering on pour day that the truck can&apos;t reach means a panicked pump booking at premium rates — or wheelbarrowing 8 yards. Check access at the estimate.</li>
        <li><strong>Water in the mix.</strong> Tell the crew: no added water without your okay. A soupy mix finishes easy and fails early.</li>
        <li><strong>Vague scope.</strong> State thickness, PSI, air entrainment, finish type, joint spacing, and exclusions (demo, permits, pump-if-needed, sealer optional). The written scope is the only thing between you and a free re-pour.</li>
      </ul>
      <h2>Mix designs by application</h2>
      <p>
        Don&apos;t bid &ldquo;concrete&rdquo; — bid the mix. The PSI,
        thickness, and reinforcement change with the job, and so does the
        price:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Application</th>
            <th>PSI</th>
            <th>Thickness</th>
            <th>Reinforcement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Walkway / patio</td>
            <td className="num">3,500</td>
            <td className="num">4 in.</td>
            <td>Wire mesh or fiber</td>
          </tr>
          <tr>
            <td>Residential driveway</td>
            <td className="num">4,000</td>
            <td className="num">4–5 in.</td>
            <td>#4 rebar, 18 in. grid</td>
          </tr>
          <tr>
            <td>RV / equipment pad</td>
            <td className="num">4,000</td>
            <td className="num">6 in.</td>
            <td>#4 rebar, 12–18 in. grid</td>
          </tr>
          <tr>
            <td>Shop / garage floor</td>
            <td className="num">4,000</td>
            <td className="num">5–6 in.</td>
            <td>Rebar or heavy mesh</td>
          </tr>
          <tr>
            <td>Footings / foundations</td>
            <td className="num">3,000–3,500</td>
            <td className="num">per plan</td>
            <td>Per structural drawings</td>
          </tr>
        </tbody>
      </table>
      <p>
        Air entrainment for anything exterior in freeze country, 3/4-inch
        aggregate for flatwork, 4-inch slump. When a supplier quotes you,
        confirm all four — &ldquo;4,000 PSI air-entrained&rdquo; means
        nothing without the slump and aggregate the price assumed.
      </p>
      <h2>Decorative concrete: a separate trade on the bid</h2>
      <p>
        Stamped, exposed-aggregate, and stained concrete run{" "}
        <strong>$8–$18/sq ft</strong> installed — roughly double plain
        flatwork — and they bid differently: pattern/color selection up
        front, release agents and coloring priced per job (not per foot),
        and sealing as a required final step, not an upsell. Don&apos;t
        fold decorative work into a flatwork bid as a line item; quote it
        as its own scope with its own samples. Clients choosing decorative
        are buying looks — show them cured samples in daylight, not
        brochure photos, and get the pattern and colors signed off before
        the truck arrives. There is no &ldquo;we&apos;ll decide on
        pour day&rdquo; in stamping.
      </p>
      <h2>Curing: the step that builds strength</h2>
      <p>
        Concrete doesn&apos;t dry — it hydrates, gaining strength for 28
        days. In heat and wind, the surface loses moisture faster than the
        chemistry can use it, which is how you get a weak, dusty top layer
        (and the scaling that follows the first winter). Three legitimate
        curing methods: liquid curing compound sprayed right after
        finishing ($0.15–$0.30/sq ft in material), 7 days under wet burlap
        or plastic, or ponding for small slabs. Pick one on every exterior
        job and name it on the quote. It costs almost nothing, almost
        nobody bids it, and it&apos;s the difference between concrete that
        hits its PSI and concrete that merely looks like it did.
      </p>
      <h2>Reading the supplier ticket</h2>
      <p>
        The batch ticket that arrives with the truck tells you exactly what
        you bought — learn to read it before you need to argue about it:
        <strong>mix design number</strong> (your 4,000 PSI air-entrained
        spec), <strong>slump</strong> (should match what you ordered, usually
        4 in. for flatwork), <strong>batch time</strong> (concrete has about
        90 minutes from batch to discharge — a late truck is rejected
        concrete, not a favor), and <strong>water added</strong> (the ticket
        records it; more than the design allows and you&apos;re pouring
        weaker concrete than you bid). Other ticket realities that hit the
        bid: <strong>short-load fees</strong> ($100–$200 under ~5 yards),
        <strong>Saturday pour premiums</strong>, and <strong>standby
        time</strong> ($2–$4/minute after the first 5–10 minutes per yard).
        A crew that isn&apos;t ready when the truck arrives burns money by
        the minute — schedule the pour, then schedule backward from it.
      </p>
      <p>
        Run the yardage in the{" "}
        <a href="/calculators/concrete-drywall-calculator">concrete calculator</a>{" "}
        and build the itemized <a href="/quote">quote</a> before you leave the
        site. Same-day quotes close concrete jobs — the client is comparing
        you against two other bids, and first complete bid usually wins.
      </p>
      <Faq items={faqs} heading="Concrete questions, answered" />
    </GuideArticle>
  );
}
