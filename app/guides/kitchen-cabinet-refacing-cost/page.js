import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cabinet Refacing Cost (2026)",
  description:
    "Cabinet refacing cost in 2026: $4,000–$10,000 for most kitchens — refacing vs replacing vs repainting, per-linear-foot pricing, and door options.",
  keywords: [
    "kitchen cabinet refacing cost",
    "refacing kitchen cabinets cost",
    "cost to reface kitchen cabinets",
    "cabinet refacing vs replacing",
    "cabinet refacing cost per linear foot",
  ],
  alternates: {
    canonical: "https://calcbid.com/guides/kitchen-cabinet-refacing-cost",
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
    title: "Cabinet Refacing Cost (2026) | CalcBid",
    description:
      "Refacing vs replacing vs repainting — priced by kitchen size and door option.",
    url: "https://calcbid.com/guides/kitchen-cabinet-refacing-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Refacing Cost (2026) | CalcBid",
    description:
      "Refacing vs replacing vs repainting — priced by kitchen size and door option.",
  },
};

const faqs = [
  {
    q: "How much does it cost to reface kitchen cabinets?",
    a: "In 2026, refacing kitchen cabinets costs $4,000–$10,000 for most kitchens, or roughly $100–$250 per linear foot installed. A small galley kitchen can reface for $3,000–$5,000; a large kitchen with premium solid-wood doors, soft-close upgrades, and drawer-box replacements can reach $12,000–$15,000. The door material is the biggest price lever.",
  },
  {
    q: "Is it cheaper to reface or replace kitchen cabinets?",
    a: "Refacing is almost always cheaper — typically 40–60% less than replacing with comparable-quality new cabinets. A mid-range refacing job ($4,000–$10,000) buys what a new semi-custom cabinet job does for $12,000–$25,000. But refacing reuses the existing boxes, so it can't fix a bad layout, damaged boxes, or the need for different dimensions.",
  },
  {
    q: "Is cabinet refacing worth it?",
    a: "Yes when the boxes are solid, level, and the layout works — you get 70–80% of the visual impact for 30–40% of the cost of new cabinets, with the kitchen functional again in 3–5 days. It's a poor value when the boxes are damaged, particleboard that has swelled, or the layout needs changing. Refacing can't fix a bad kitchen, only a dated one.",
  },
  {
    q: "What does cabinet refacing actually include?",
    a: "A full refacing job replaces the doors and drawer fronts, applies matching veneer (wood or laminate) to the exposed cabinet frames and face frames, and typically adds new hinges, pulls, and knobs. Many packages also replace drawer boxes and add soft-close hardware. Toe kicks, end panels, and decorative molding are covered or replaced so everything reads as new.",
  },
  {
    q: "How long does cabinet refacing take?",
    a: "3–5 days for a typical kitchen — dramatically faster than a full cabinet replacement, which usually takes 2–4 weeks once you count lead times and the ripple effects on countertops and flooring. The kitchen stays partially usable during refacing because the boxes stay on the wall. Custom door finishes or specialty wood species can add a week of lead time.",
  },
  {
    q: "Can you reface cabinets that are painted or laminate?",
    a: "Laminate or thermofoil cabinets can be refaced — the process replaces the surfaces anyway. Previously painted cabinets can also be refaced, though the cost advantage narrows since the alternative (repainting) is cheaper. The one surface that rules out refacing is water-damaged or swollen particleboard boxes — veneer won't adhere to compromised substrate, and doors won't hang true on warped frames.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Cabinet Refacing Cost (2026)"
      description="What refacing kitchen cabinets costs in 2026 — new doors and drawer fronts on your existing boxes — with the refacing vs replacing vs repainting math."
      slug="kitchen-cabinet-refacing-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Send the quote"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Refacing kitchen cabinets in 2026 costs <strong>$4,000–$10,000</strong>{" "}
        for most kitchens — about <strong>$100–$250 per linear foot
        installed</strong>. That&apos;s new doors and drawer fronts plus a
        matching veneer applied to your existing cabinet boxes. Compared with
        replacement, refacing runs <strong>40–60% cheaper</strong>, finishes
        in <strong>3–5 days</strong> instead of weeks, and keeps the kitchen
        usable throughout. The catch: refacing reuses your boxes, so it
        can&apos;t fix a bad layout or damaged cabinetry.
      </p>
      <p>
        This is a sub-project of a{" "}
        <a href="/guides/kitchen-remodel-cost">full kitchen remodel</a> —
        read that guide for the whole-kitchen math. If you&apos;re weighing
        all-new cabinets instead, the{" "}
        <a href="/guides/kitchen-cabinet-installation-cost">
          kitchen cabinet installation cost
        </a>{" "}
        guide prices that side of the decision.
      </p>

      <h2>Refacing cost by kitchen size</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Kitchen size</th>
            <th>Typical linear feet</th>
            <th>2026 range (laminate/Rigid Thermofoil doors)</th>
            <th>2026 range (solid wood doors)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Small galley</td>
            <td className="num">~20 ft</td>
            <td className="num">$3,000–$5,000</td>
            <td className="num">$4,500–$7,000</td>
          </tr>
          <tr>
            <td>Average 10×10–12×12</td>
            <td className="num">~30 ft</td>
            <td className="num">$4,000–$7,500</td>
            <td className="num">$6,000–$10,000</td>
          </tr>
          <tr>
            <td>Large / L-shaped with island</td>
            <td className="num">~40–50 ft</td>
            <td className="num">$6,000–$10,000</td>
            <td className="num">$9,000–$15,000</td>
          </tr>
        </tbody>
      </table>

      <h2>Refacing vs replacing vs repainting</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Option</th>
            <th>2026 typical range</th>
            <th>Timeline</th>
            <th>Best when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reface</td>
            <td className="num">$4,000–$10,000</td>
            <td className="num">3–5 days</td>
            <td>Boxes solid, layout works, want a new look fast</td>
          </tr>
          <tr>
            <td>Replace (semi-custom)</td>
            <td className="num">$12,000–$25,000</td>
            <td className="num">2–4 weeks</td>
            <td>Layout changes, damaged boxes, different dimensions</td>
          </tr>
          <tr>
            <td>Replace (custom)</td>
            <td className="num">$25,000–$45,000+</td>
            <td className="num">6–10 weeks</td>
            <td>High-end kitchen, odd spaces, specialty storage</td>
          </tr>
          <tr>
            <td>Professional repaint</td>
            <td className="num">$3,000–$7,000</td>
            <td className="num">3–5 days</td>
            <td>Doors and boxes in good shape, just dated color</td>
          </tr>
        </tbody>
      </table>
      <p>
        Present this table to the client before measuring, not after. Most
        homeowners arrive asking about one option and haven&apos;t priced the
        alternatives — the contractor who lays out all three wins the trust
        and usually wins the job. Note the honest middle ground:{" "}
        <strong>repainting is cheaper than refacing</strong> when the existing
        doors are in good shape and only the color is dated. Refacing earns
        its premium when the door <em>style</em> needs to change — flat
        80s laminate doors to shaker, for example — which paint can&apos;t do.
      </p>

      <h2>Door options: what drives the price</h2>
      <ul>
        <li><strong>Rigid thermofoil / laminate doors ($100–$175/ft):</strong> the value tier. Uniform, easy to clean, durable against everyday moisture. The trade-off: limited styles, and thermofoil can peel near heat sources over time.</li>
        <li><strong>Wood veneer doors ($150–$220/ft):</strong> real wood look on an engineered core. Stains like solid wood at a lower price. The match between veneer doors and veneered face frames is usually excellent.</li>
        <li><strong>Solid wood doors ($175–$250+/ft):</strong> maple, cherry, oak. Stains richest, handles refinishing decades later. Adds $2,000–$5,000 over laminate on an average kitchen — and is the only door option that genuinely appraises with premium new cabinets.</li>
      </ul>
      <p>
        The veneer applied to the face frames has to <strong>match the
        doors</strong> — same species or finish family. A mismatch is the
        tell that screams &ldquo;refaced&rdquo;. Specify the door and the
        frame veneer from the same manufacturer&apos;s same product line, and
        order the hardware (hinges, pulls) new — reusing old hardware is a
        $500 savings that makes a $7,000 job look unfinished.
      </p>

      <h2>What&apos;s actually included</h2>
      <p>
        A complete refacing job is more than new doors. The full scope:
      </p>
      <ul>
        <li>New doors and drawer fronts in the chosen material and style</li>
        <li>Matching veneer on face frames, exposed sides, toe kicks, and end panels</li>
        <li>New concealed hinges (soft-close is the standard upsell, ~$3–$8/door)</li>
        <li>New pulls and knobs</li>
        <li>New drawer boxes — recommended when the old ones are worn or the glides are shot ($25–$60/box installed)</li>
        <li>Crown molding or light-rail updates where the style changes</li>
        <li>Adjust, level, and align every door and drawer</li>
      </ul>
      <p>
        Confirm each of these is in the bid. The lowball quotes in this trade
        are almost always <strong>doors-only</strong>: no veneer on the end
        panels, old hardware reused, drawer boxes untouched. A doors-only job
        can come in 30% under a full reface — and look 30% cheaper forever.
      </p>

      <h2>The process, step by step</h2>
      <ul>
        <li><strong>1. Box inspection.</strong> Check every box for level, plumb, water damage, and swollen particleboard. Refacing bad boxes is throwing good money after bad — this is the go/no-go decision.</li>
        <li><strong>2. Measure and order.</strong> Doors are custom-sized to each opening. Lead time is usually 1–3 weeks; the kitchen stays usable.</li>
        <li><strong>3. Remove doors and hardware.</strong> Strip everything down to the frames.</li>
        <li><strong>4. Prep and veneer the frames.</strong> Clean, sand, and apply the matching veneer to face frames, sides, and end panels.</li>
        <li><strong>5. Hang new doors and fronts.</strong> New concealed hinges, adjust for even reveals.</li>
        <li><strong>6. Hardware, drawer boxes, and detail.</strong> Pulls, knobs, soft-close, molding — then a final level-and-align pass.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Refacing boxes that should be replaced.</strong> Water-swollen particleboard, warped face frames, boxes out of level — veneer won&apos;t adhere and doors won&apos;t hang true. Inspect before quoting.</li>
        <li><strong>Doors-only quotes.</strong> No frame veneer, reused hardware, old drawer boxes. Price and compare full-scope bids only.</li>
        <li><strong>Mismatched door and frame materials.</strong> Same manufacturer, same product line, or the mismatch shows forever.</li>
        <li><strong>Skipping the drawer boxes.</strong> New doors on sticking drawers feel broken. Price new boxes and soft-close glides in the bid.</li>
        <li><strong>Refacing around a bad layout.</strong> Refacing can&apos;t move a cooktop or add a pantry. If the client wants the layout changed, they need replacement — say so and don&apos;t take the reface.</li>
        <li><strong>Ignoring the countertop interface.</strong> If the client will replace countertops within two years, coordinate now — new counters sit differently on the same boxes and the refaced look should survive the next project.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> almost nothing about true refacing is DIY — the veneer work and custom door fitting are shop skills. But <strong>professional-style repainting</strong> (degrease, sand, prime, spray) and <strong>hardware swaps</strong> are very DIY-able and deliver 60–70% of a refresh for $500–$1,500 in materials. Realistic savings vs. pro repainting: $2,500–$5,000.</li>
        <li><strong>Hire a pro:</strong> actual refacing — veneer application, custom doors, hinge mortising, and leveling. Also any job where the client wants solid-wood doors, which must be ordered and finished by the supplier.</li>
        <li><strong>The gray zone:</strong> pre-made door replacements from big-box lines on standard openings. A skilled DIYer can swap doors and hinges on square boxes, but face-frame veneering is where DIY refacing visibly fails.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        <strong>Almost never.</strong> Refacing is a cosmetic finish change —
        no structural work, no plumbing, no electrical — so it falls outside
        permit requirements in virtually every municipality. The exception:
        if the project grows to include electrical work (under-cabinet
        lighting hardwired into a circuit), a new range hood venting through
        the roof, or plumbing changes for a new sink, those individual trades
        may need their own permits ($50–$250 each). If the refacing is part of
        a larger <a href="/guides/kitchen-remodel-cost">kitchen remodel</a>,
        the master permit covers the scope. As always, &ldquo;no
        permit&rdquo; doesn&apos;t mean &ldquo;no rules&rdquo; in HOA
        communities — check the association&apos;s finish standards before
        starting.
      </p>
      <p>
        Send the itemized <a href="/quote">quote</a> with the door option,
        veneer line, and hardware separated — refacing clients almost always
        compare a second bid, and the contractor whose line items they can
        compare wins on clarity, not just price.
      </p>

      <Faq items={faqs} heading="Cabinet refacing questions, answered" />
    </GuideArticle>
  );
}
