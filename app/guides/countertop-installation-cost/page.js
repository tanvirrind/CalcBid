import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Countertop Installation Cost (2026)",
  description:
    "Countertop installation cost in 2026: $2,000–$8,000 — quartz, granite, butcher block, and laminate per sq ft installed, plus edges and cutouts.",
  keywords: [
    "countertop installation cost",
    "quartz countertop installation costs",
    "cost to install granite countertops",
    "kitchen countertop cost installed",
    "countertop cost per square foot",
  ],
  alternates: {
    canonical: "https://calcbid.com/guides/countertop-installation-cost",
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
    title: "Countertop Installation Cost (2026) | CalcBid",
    description:
      "Installed per-square-foot pricing for quartz, granite, butcher block, and laminate.",
    url: "https://calcbid.com/guides/countertop-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countertop Installation Cost (2026) | CalcBid",
    description:
      "Installed per-square-foot pricing for quartz, granite, butcher block, and laminate.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install kitchen countertops?",
    a: "In 2026, installing kitchen countertops costs $2,000–$8,000 for most kitchens: laminate runs $1,500–$3,500 installed, butcher block $2,000–$4,500, granite $3,000–$6,500, and quartz $3,000–$8,000. The total depends on square footage (most kitchens need 25–50 sq ft), material choice, edge profile, and cutouts for the sink and cooktop.",
  },
  {
    q: "How much does quartz countertop installation cost per square foot?",
    a: "Quartz runs $75–$150 per square foot installed in 2026 for most patterns, with premium veined slabs reaching $150–$200. A typical 40 sq ft kitchen lands at $3,000–$6,000 installed, including templating, fabrication, delivery, and set. Fabrication — cutting the slab to your kitchen — is a large part of what you're paying for with quartz.",
  },
  {
    q: "How much does it cost to install granite countertops?",
    a: "Granite installs at $60–$120 per square foot in 2026 for most grades, so a 40 sq ft kitchen runs $2,500–$5,000 installed. Exotic and book-matched slabs push $120–$200 per foot. Granite pricing varies more by slab than quartz does — the same grade from a different bundle can differ 20%, so the install quote should name the slab grade.",
  },
  {
    q: "Is quartz or granite cheaper to install?",
    a: "They're close, but granite is usually slightly cheaper installed because it needs less support structure (it's harder than quartz) and the fabrication is more standardized. For a typical kitchen the difference is 5–15%. Choose between them on maintenance and looks, not price: quartz needs no sealing and resists stains; granite needs periodic sealing and handles heat better.",
  },
  {
    q: "How much extra are sink cutouts and edge profiles?",
    a: "Expect $100–$250 per cutout (sink, cooktop) in the fabrication line. Edge profiles add $10–$30 per linear foot over the standard eased edge — an ogee or waterfall edge on a 20-foot run can add $400–$600. Undermount sink cutouts cost more than drop-ins because the edge must be polished. Old countertop removal and disposal usually runs $300–$800.",
  },
  {
    q: "How long does countertop installation take?",
    a: "The install day itself is usually one day — set the slab, seam, attach the sink, done. The full timeline is 2–4 weeks because templating (digital laser measurement after cabinets are set) and fabrication take 1–3 weeks. Nothing in the schedule can move until the cabinets are finished and level, since the template measures the real, final kitchen.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Countertop Installation Cost (2026)"
      description="What installing kitchen countertops costs in 2026 — installed per-square-foot pricing for quartz, granite, butcher block, laminate, and marble."
      slug="countertop-installation-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Send the quote"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Installing kitchen countertops in 2026 costs <strong>$2,000–$8,000</strong>{" "}
        for most kitchens — roughly <strong>$40–$150 per square foot
        installed</strong> depending on the material. A typical kitchen needs
        25–50 square feet. <strong>Laminate lands $1,500–$3,500</strong> all-in,
        <strong> butcher block $2,000–$4,500</strong>, <strong>granite
        $3,000–$6,500</strong>, and <strong>quartz $3,000–$8,000</strong>.
        The material is about half the job — templating, fabrication, edge
        profiles, sink cutouts, and delivery make up the rest.
      </p>
      <p>
        Countertops are a centerpiece of a{" "}
        <a href="/guides/kitchen-remodel-cost">kitchen remodel</a> — read that
        guide for the whole-kitchen math. They sit on the cabinets, so if the
        cabinets themselves are the project, see{" "}
        <a href="/guides/kitchen-cabinet-installation-cost">
          kitchen cabinet installation cost
        </a>
        . The same stone math applies to vanity tops — see{" "}
        <a href="/guides/bathroom-remodel-cost">bathroom remodel cost</a> for
        the whole-bath numbers.
      </p>

      <h2>Installed cost per square foot by material</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>2026 installed / sq ft</th>
            <th>40 sq ft kitchen</th>
            <th>Maintenance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laminate</td>
            <td className="num">$40–$75</td>
            <td className="num">$1,500–$3,000</td>
            <td>None — but not heat-proof</td>
          </tr>
          <tr>
            <td>Butcher block</td>
            <td className="num">$50–$100</td>
            <td className="num">$2,000–$4,000</td>
            <td>Oil monthly, sand out stains</td>
          </tr>
          <tr>
            <td>Solid surface (Corian-style)</td>
            <td className="num">$60–$120</td>
            <td className="num">$2,400–$4,800</td>
            <td>Low; scratches buff out</td>
          </tr>
          <tr>
            <td>Granite</td>
            <td className="num">$60–$120</td>
            <td className="num">$2,500–$5,000</td>
            <td>Seal yearly</td>
          </tr>
          <tr>
            <td>Quartz</td>
            <td className="num">$75–$150</td>
            <td className="num">$3,000–$6,000</td>
            <td>None — never seal</td>
          </tr>
          <tr>
            <td>Marble</td>
            <td className="num">$90–$200+</td>
            <td className="num">$3,600–$8,000+</td>
            <td>Seal regularly; etches and stains</td>
          </tr>
        </tbody>
      </table>

      <h2>The hidden line items: templating, edges, cutouts</h2>
      <p>
        Clients compare the per-square-foot material price and then get
        blindsided by the fabrication lines. Price these separately in every
        bid:
      </p>
      <ul>
        <li><strong>Templating ($200–$500):</strong> a fabricator laser-measures the kitchen after cabinets are set. It&apos;s the precision the whole job depends on — don&apos;t let anyone template off cabinet drawings.</li>
        <li><strong>Edge profile ($10–$30/linear ft over standard):</strong> eased edge is standard and included; ogee, bullnose, and waterfall edges are upgrades. A 20-foot run of ogee adds $400–$600.</li>
        <li><strong>Sink/cooktop cutouts ($100–$250 each):</strong> undermount cutouts cost more — the exposed edge must be polished. Farmhouse and integrated sinks add custom cutting.</li>
        <li><strong>Seams ($100–$300 each):</strong> slabs max out around 10–12 feet; most kitchens need at least one seam. Quartz seams nearly disappear; granite seams are visible at some level — set the expectation.</li>
        <li><strong>Old countertop removal ($300–$800):</strong> demo, haul, and disposal. Stone removal is heavy labor — don&apos;t bury it in the material line.</li>
        <li><strong>Backsplash tie-in:</strong> a 4-inch matching backsplash is often included; a full-height slab backsplash is a separate project. Coordinate with the <a href="/guides/tile-backsplash-installation-cost">tile backsplash</a> plan.</li>
      </ul>

      <h2>Quartz vs granite: the real comparison</h2>
      <p>
        These two fight for the same kitchens, and the price is close enough
        that the decision should be about the material, not the money:
      </p>
      <ul>
        <li><strong>Consistency:</strong> quartz is engineered — the sample is the slab. Granite is natural — every slab is different, and the quote should name the specific bundle or grade.</li>
        <li><strong>Maintenance:</strong> quartz never needs sealing and resists stains; granite needs yearly sealing and still stains from oil and wine if you&apos;re careless.</li>
        <li><strong>Heat:</strong> granite wins — hot pans directly on it. Quartz can scorch or discolor under extreme heat.</li>
        <li><strong>Structure:</strong> granite is harder and needs less support over overhangs; quartz overhangs over ~12 inches need corbels or brackets.</li>
        <li><strong>Price spread:</strong> granite varies more — a common grade can be genuinely cheap while an exotic slab triples the price. Quartz pricing is tighter.</li>
      </ul>

      <h2>The install process, step by step</h2>
      <ul>
        <li><strong>1. Cabinets finished and level.</strong> Nothing moves until the cabinets are set, leveled, and final — the template measures reality, not drawings.</li>
        <li><strong>2. Templating.</strong> Laser measurement of every run, noting overhangs, cooktop and sink positions, and outlet clearances. 1–2 hours.</li>
        <li><strong>3. Fabrication (1–3 weeks).</strong> The slab is cut, edges profiled, cutouts made, and the surface finished at the shop.</li>
        <li><strong>4. Delivery and set.</strong> Usually one day. Stone is heavy — stair carries and tight turns are planned in advance.</li>
        <li><strong>5. Seam, sink, and finish.</strong> Seams epoxied and leveled, undermount sink attached, cooktop set, caulk and seal.</li>
        <li><strong>6. Punch list.</strong> Check every seam with a fingernail, verify the sink reveal, confirm the overhang matches the plan.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Templating before cabinets are final.</strong> A countertop cut to drawings instead of the real kitchen is a $3,000 mistake. Measure the finished cabinets, always.</li>
        <li><strong>Quoting material-only.</strong> Clients hear the per-foot number and anchor on it. Itemize fabrication, edges, cutouts, and removal — or the &ldquo;surprise&rdquo; additions erode trust.</li>
        <li><strong>Wrong slab named.</strong> On granite, the grade in the quote must match the slab on the truck. Photograph the bundle at selection.</li>
        <li><strong>Undermount sinks on weak reveals.</strong> The sink attaches to the stone, not the cabinet — the reveal must be supported and the cutout polished. A sagging undermount is a callback.</li>
        <li><strong>Seam placement surprises.</strong> Show the client where the seams will land before cutting. The middle of the island is a relationship-ending surprise.</li>
        <li><strong>Forgetting the backsplash interface.</strong> Full-height tile backsplashes meet the counter at a line that must be caulked, not grouted. Coordinate the trades.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> laminate and butcher block — a skilled homeowner can cut, fit, and finish these with a circular saw and router. Prefab laminate runs from big-box stores are designed for it. Realistic savings: $1,000–$2,500.</li>
        <li><strong>Hire a pro:</strong> all stone — quartz, granite, marble. The material is unforgiving, the cuts need a bridge saw, and a cracked slab is a total loss. Set and seaming are two-person skilled work minimum.</li>
        <li><strong>The gray zone:</strong> butcher block finishing. The install is DIY-able but the oil finish schedule (multiple coats, cure times) is where most DIY jobs look amateur. Follow the manufacturer&apos;s finish spec exactly.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        <strong>No — countertop replacement alone needs no permit</strong> in
        virtually every municipality. It&apos;s a finish swap: no structural,
        plumbing, or electrical change. The permit question only arises when
        the scope grows — a new cooktop that needs a gas line or 240V
        circuit, a farmhouse sink that changes the drain height, or the
        countertop as part of a larger{" "}
        <a href="/guides/kitchen-remodel-cost">kitchen remodel</a> with a
        master permit. One practical note: in condos and HOAs, countertop
        delivery and demo days often need building approval for elevator and
        loading-dock use — schedule that before the slab is on the truck.
      </p>
      <p>
        Itemize material, fabrication, edges, cutouts, and removal as separate
        lines and send the <a href="/quote">quote</a> the same week as
        templating — countertop clients decide fast once they&apos;ve seen
        the slab, and the bid that arrives first usually wins.
      </p>

      <h2>Worked example: a 38 sq ft quartz kitchen, full invoice</h2>
      <p>
        Here is a typical quartz job itemized the way this guide says every
        bid should be — a 38 sq ft kitchen, one seam, an undermount sink,
        and an upgraded edge. Each line is priced inside the ranges above:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quartz slab material and base fabrication — 38 sq ft × $78/sq ft</td>
            <td className="num">$2,964</td>
          </tr>
          <tr>
            <td>Templating (laser measurement after cabinets are set)</td>
            <td className="num">$350</td>
          </tr>
          <tr>
            <td>Edge profile upgrade — 24 linear ft × $20/ft over the standard eased edge</td>
            <td className="num">$480</td>
          </tr>
          <tr>
            <td>Undermount sink cutout, polished edge</td>
            <td className="num">$200</td>
          </tr>
          <tr>
            <td>Undermount sink unit</td>
            <td className="num">$280</td>
          </tr>
          <tr>
            <td>One seam</td>
            <td className="num">$200</td>
          </tr>
          <tr>
            <td>Old countertop removal and disposal</td>
            <td className="num">$450</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td className="num"><strong>$4,924</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        Check the total two ways. Per square foot, $4,924 ÷ 38 is about $130
        — inside the $75–$150 installed quartz range, in the upper half
        because of the edge upgrade and the sink. Against the whole-kitchen
        range, it sits comfortably inside the $3,000–$6,000 band quoted for a
        40 sq ft quartz kitchen. Delivery and set are carried in the
        fabrication line here, as they are in most bids; if a quote you are
        comparing lists them separately, add them before comparing totals or
        you will pick the wrong &ldquo;cheaper&rdquo; bid. Swap the ogee-style
        edge for the standard eased edge and this same kitchen drops to
        $4,444 — the edge profile is the easiest $480 decision on the
        invoice.
      </p>

      <h2>Fabrication markets: why quotes vary by region</h2>
      <p>
        Countertop pricing is local because fabrication is local — slabs are
        heavy, and shops cut close to where they install. In large metros
        with dozens of fabricators competing for the same kitchens, shop
        density keeps fabrication pricing tight and lead times short, and
        big-box programs add a price ceiling no independent shop can ignore.
        Regions near major slab distribution yards — the import hubs where
        containers of quartz and granite arrive — often see lower material
        pricing for the same reason: the slab travels hundreds of fewer
        miles, and yards compete on volume.
      </p>
      <p>
        Rural markets invert both advantages. One or two shops may serve a
        whole county, templating is a dedicated trip, and delivery runs
        beyond the radius most fabricators include in their base price — past
        that radius, expect per-trip travel charges for the template visit,
        the delivery, or both, and longer waits while the shop batches rural
        installs into one route. None of that means a rural quote is padded;
        it means the same 38 sq ft kitchen genuinely costs more to measure,
        cut, and carry. Compare rural bids against each other, line by line,
        rather than against a metro price the job can never be delivered at.
      </p>

      <Faq items={faqs} heading="Countertop questions, answered" />
    </GuideArticle>
  );
}
