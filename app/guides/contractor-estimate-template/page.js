import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Contractor Estimate Templates (2026)",
  description:
    "Trade-specific estimate templates for roofing, electrical, drywall, and plumbing/HVAC — line-item skeletons, exclusions, and clauses that close jobs.",
  keywords: [
    "contractor estimate template",
    "roofing estimate template",
    "electrical estimate template",
    "drywall estimate template",
    "contractor estimate example",
  ],
  alternates: { canonical: "https://calcbid.com/guides/contractor-estimate-template" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Contractor Estimate Templates | CalcBid",
    description:
      "Trade-specific estimate templates for roofing, electrical, drywall, and plumbing/HVAC — the line items and clauses that close jobs.",
    url: "https://calcbid.com/guides/contractor-estimate-template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contractor Estimate Templates | CalcBid",
    description:
      "Trade-specific estimate templates for roofing, electrical, drywall, and plumbing/HVAC — the line items and clauses that close jobs.",
  },
};

const faqs = [
  {
    q: "What line items must a roofing estimate include?",
    a: "At minimum: tear-off and disposal (with the number of existing layers), roof area in squares, shingle or membrane brand and product line, underlayment and ice-and-water shield, flashing/drip edge/ridge vent, a deck-repair allowance per sheet, labor, permit fees, cleanup, workmanship warranty, and an expiration date. Missing any one of these is what turns a signed estimate into a dispute when hidden damage shows up at tear-off.",
  },
  {
    q: "Should I separate labor and materials on an electrical estimate?",
    a: "Yes — separation is the standard in the electrical trade. List the panel, breakers, wire, and devices as materials with quantities, and show labor by hours or by phase (rough-in, trim, testing). Passing permits through at cost without markup is a common trust-building practice, and showing labor hours lets the client see the work behind the number instead of just a lump sum to haggle down.",
  },
  {
    q: "How do I estimate drywall when the job is small?",
    a: "Price per square foot of drywall surface (walls plus ceiling, not floor area), and charge a job minimum — most crews won't roll a truck and make two drying-time return trips for less than $350–$500. A 12×12 bedroom is about 528 sq ft of drywall surface, so the per-square-foot rate that works on a whole house looks steep on one room unless the minimum is baked in.",
  },
  {
    q: "What's the difference between an estimate, a quote, and a bid?",
    a: "An estimate is a good-faith approximation that can change if conditions differ — the standard for jobs with unknowns, like roofing tear-offs. A quote is a fixed price commitment for a defined scope. A bid is a formal price proposal submitted for competitive selection, typically on commercial or public work. See our full <a href='/guides/quote-vs-estimate-vs-bid'>estimate vs quote vs bid</a> guide for when to use each.",
  },
  {
    q: "How much deposit should I ask for on an estimate?",
    a: "A common residential practice is 20–33% at signing to fund materials, with progress draws tied to milestones and the balance on completion. Check your state: several states cap deposits on home-improvement work. Never fund the job's materials on your own credit line when the client's deposit is meant for that.",
  },
  {
    q: "How long should an estimate be valid?",
    a: "Twenty-one to thirty days is the industry standard. Lumber, copper wire, and shingles move fast enough that an open-ended estimate is a margin risk. A written expiration date lets you re-price cleanly when a client resurfaces three months later — and gives them a reason to sign now instead of shopping your numbers around.",
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
      title="Contractor Estimate Templates"
      description="Trade-specific estimate skeletons for roofing, electrical, drywall, and plumbing/HVAC — the line items, exclusions, and contract clauses that win jobs without eating your margin."
      slug="contractor-estimate-template"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Quote Builder"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        A generic estimate template is why you lose jobs to contractors who
        look more prepared. Clients read line items as competence: an estimate
        that names the shingle brand, the deck-repair allowance, and the
        permit fee signals a crew that has done this a hundred times. One that
        says &ldquo;roof replacement — $12,000&rdquo; signals a guess. Trade
        specifics also protect your margin — the exclusions that keep a
        roofing job from turning into a decking loss are completely different
        from the ones that matter on a rewire.{" "}
        <strong>Structure first, dollars second:</strong> the templates below
        are scope-and-line-item skeletons — fill them with your local rates.
        Estimates that itemize labor, materials, and the unknowns{" "}
        <strong>close at roughly double the rate</strong> of lump-sum bids,
        because the client can see exactly what they&apos;re buying.
      </p>

      <h2>Why trade-specific templates close more jobs</h2>
      <ul>
        <li><strong>They answer objections before they&apos;re raised.</strong> A homeowner comparing three roofing estimates spots the one that prices ice-and-water shield in valleys — and assumes the other two forgot it.</li>
        <li><strong>They make your scope legible.</strong> &ldquo;Tape and finish to Level 4&rdquo; tells a client what a drywall bid includes; &ldquo;do drywall&rdquo; lets the cheapest bidder redefine it downward.</li>
        <li><strong>They force exclusions in writing.</strong> Every trade has margin-killers — rotten decking, finished-wall fishing, textured ceilings. A template that lists them saves your margin on every job.</li>
        <li><strong>They shorten estimating time.</strong> Starting from a trade skeleton instead of a blank page means a panel upgrade estimate goes out from the driveway in twenty minutes, not at midnight.</li>
        <li><strong>They standardize your terms.</strong> When the deposit schedule, expiration date, and change-order clause ride along on every estimate, you stop negotiating against yourself job by job.</li>
      </ul>
      <p>
        Painting contractors: we already built your version — see the{" "}
        <a href="/guides/painting-estimate-template">painting estimate template</a>{" "}
        (and the <a href="/guides/how-to-quote-a-painting-job">painting quoting guide</a>{" "}
        behind it). What follows is for roofing, electrical, drywall, and
        plumbing/HVAC.
      </p>

      <h2>Roofing estimate template</h2>
      <p>
        Roofing estimates live or die on the tear-off section. Most residential
        replacements run <strong>$8,000–$25,000</strong>, with a typical
        30-square architectural shingle roof around{" "}
        <strong>$18,000–$22,000</strong> installed — and the surprises hide
        under the old shingles. That&apos;s why roofing is an{" "}
        <em>estimate</em> trade more than a <em>quote</em> trade: you can&apos;t
        see the decking until tear-off. Measure in squares (<strong>1 square = 100 sq ft</strong>), add a waste
        factor for cuts and starter courses, and price steep pitch or multiple
        layers as separate labor modifiers — never buried in the shingle line.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Why it&apos;s on the sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Project header</td>
            <td style={tdStyle}>Roof area (squares), pitch, stories, layers, penetrations/chimneys/skylights</td>
            <td style={tdStyle}>Locks the measurement source — no post-signing arguments about what was measured</td>
          </tr>
          <tr>
            <td style={tdStyle}>Tear-off &amp; prep</td>
            <td style={tdStyle}>Tear-off of [n] layer(s), disposal, dumpster, property protection, magnetic nail sweep</td>
            <td style={tdStyle}>Disposal is a real cost; an included cleanup clause is a selling point</td>
          </tr>
          <tr>
            <td style={tdStyle}>Deck repair</td>
            <td style={tdStyle}>Allowance: up to [n] sheets plywood/OSB at $[rate]/sheet; extras via change order</td>
            <td style={tdStyle}>The #1 roofing margin-killer. Pre-price it so rot becomes paperwork, not a fight</td>
          </tr>
          <tr>
            <td style={tdStyle}>Materials</td>
            <td style={tdStyle}>Shingle brand + product line + color; underlayment; ice &amp; water shield zones; starter, ridge caps, drip edge, flashing, ridge vent</td>
            <td style={tdStyle}>Brand and product tier let clients compare quality across bids, not just price</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor</td>
            <td style={tdStyle}>Installation by squares, crew size, pitch modifier if steep</td>
            <td style={tdStyle}>A 6/12 walkable roof and a 10/12 cut-up roof are different jobs — price them that way</td>
          </tr>
          <tr>
            <td style={tdStyle}>Terms</td>
            <td style={tdStyle}>Permit fee (pass-through), manufacturer warranty, your workmanship warranty (years), payment schedule, estimate valid [date]</td>
            <td style={tdStyle}>Two warranties, two questions clients always ask — answer them in print</td>
          </tr>
        </tbody>
      </table>
      <p>
        Roofing-specific exclusions: decking beyond the included sheets,
        fascia/soffit repair, gutter work, interior leak damage, and extra
        layers beyond what was expected. Price gutter reinstalls from the{" "}
        <a href="/guides/how-to-bid-gutter-installation-job">gutter installation quoting guide</a>{" "}
        rather than giving them away.
      </p>

      <h2>Electrical estimate template</h2>
      <p>
        Electrical work is priced by assembly — panel, breakers, wire, devices —
        and the convention is to <strong>separate labor from materials</strong>.
        A 200-amp panel upgrade is the classic assembly to template. The common
        mistakes in this trade are forgetting overhead (vehicles, insurance,
        admin) and underestimating labor in finished-wall conditions (fishing
        wire through closed walls is dramatically slower than open framing).
        Your template fixes both by making the line items non-optional.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Why it&apos;s on the sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Project header</td>
            <td style={tdStyle}>Service size (e.g. 100A → 200A), existing conditions, load calculation summary</td>
            <td style={tdStyle}>Showing the load calc justifies the panel size against cheaper bids</td>
          </tr>
          <tr>
            <td style={tdStyle}>Materials</td>
            <td style={tdStyle}>Panel (amperage, spaces), breakers by type (standard/GFCI/AFCI), wire by gauge and footage, devices, boxes, grounding</td>
            <td style={tdStyle}>GFCI/AFCI breakers are code-driven — name them so the client sees the cost is the code&apos;s, not yours</td>
          </tr>
          <tr>
            <td style={tdStyle}>Markup</td>
            <td style={tdStyle}>Materials handling: sourcing, pickup, restocking, waste</td>
            <td style={tdStyle}>Stated openly as handling; hidden markup discovered later reads as dishonesty</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor</td>
            <td style={tdStyle}>Lead electrician hours + apprentice hours, by phase: rough-in, trim-out, testing</td>
            <td style={tdStyle}>Setup, testing, and cleanup are real hours — so are travel and panel labeling</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pass-through</td>
            <td style={tdStyle}>Permit and inspection fees at cost; utility coordination (meter pull/reconnect)</td>
            <td style={tdStyle}>Service upgrades need permits in virtually every US jurisdiction — never eat this</td>
          </tr>
          <tr>
            <td style={tdStyle}>Terms</td>
            <td style={tdStyle}>Warranty length, drywall/patch exclusion or inclusion, deposit, valid-through date</td>
            <td style={tdStyle}>Drywall repair after fishing wire is this trade&apos;s signature ambiguity — kill it in writing</td>
          </tr>
        </tbody>
      </table>
      <p>
        Electrical-specific exclusions: drywall repair and repainting (unless
        sold as an add-on), bringing unrelated existing wiring up to code,
        smart-home programming beyond device install, and service upgrades
        discovered mid-job. Copper wire pricing moves — your expiration date is
        load-bearing here.
      </p>

      <h2>Drywall estimate template</h2>
      <p>
        Drywall is the most formula-driven trade here, but it has one trap:
        drywall is priced per square foot of <strong>drywall surface, not floor
        area</strong>. A 144 sq ft bedroom carries close to 500 sq ft of wall
        and ceiling. Hang, tape, and finish are{" "}
        <strong>three separate line items</strong>, and the finish level (Level
        3 vs 4 vs 5 skim) swings cost <strong>$0.80–$1.80 per sq ft</strong> on
        the same board. Name the level in the scope line, or you&apos;re
        quoting a different product than the client imagines. Typical installed
        range: <strong>$1.60–$3.75 per sq ft</strong> for hang + Level 4 finish.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Why it&apos;s on the sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Project header</td>
            <td style={tdStyle}>Measured drywall surface (sq ft), ceiling height, new construction vs remodel, occupied or vacant</td>
            <td style={tdStyle}>Dust control and ceiling height change labor productivity — record both</td>
          </tr>
          <tr>
            <td style={tdStyle}>Materials</td>
            <td style={tdStyle}>Sheet count with waste; board type by room (1/2&quot; walls, 5/8&quot; ceilings, moisture-resistant, Type X); compound, tape, screws, corner bead</td>
            <td style={tdStyle}>Specialty board is a cost delta — list it by room so the client sees the why</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hang labor</td>
            <td style={tdStyle}>Hanging by sq ft — ceiling work carries a 25–50% premium, state it</td>
            <td style={tdStyle}>Overhead hanging with lifts is slower; don&apos;t hide the premium in one blended rate</td>
          </tr>
          <tr>
            <td style={tdStyle}>Finish labor</td>
            <td style={tdStyle}>Tape + coats + sanding by sq ft, at stated finish level (3/4/5); drying-day trips included</td>
            <td style={tdStyle}>Level 5 skim is a different job than Level 4 — never let it be a verbal assumption</td>
          </tr>
          <tr>
            <td style={tdStyle}>Add-ons</td>
            <td style={tdStyle}>Texture type, primer coat, tear-out of old board</td>
            <td style={tdStyle}>Texture adds $0.25–$1.00/sq ft; primer is assumed by clients and omitted by bidders</td>
          </tr>
          <tr>
            <td style={tdStyle}>Terms</td>
            <td style={tdStyle}>Job minimum for small jobs, debris removal, payment terms, valid-through date</td>
            <td style={tdStyle}>A stated minimum is more honest than a padded per-sq-ft rate on small rooms</td>
          </tr>
        </tbody>
      </table>
      <p>
        Drywall-specific exclusions: tear-out and haul-off unless priced, the
        leak source behind water-damaged board (you replace board, you
        don&apos;t fix the plumbing), texture matching beyond the priced type,
        paint/primer unless included, and moving furniture in occupied homes.
      </p>

      <h2>Plumbing &amp; HVAC estimate template</h2>
      <p>
        These two trades share a pattern: <strong>base system + optional
        upgrades + commissioning</strong>. A water heater or condenser
        replacement is the classic example — the estimate lists the base unit,
        the upgrades (expansion tank, pan, thermostat), and the commissioning
        steps (pressure test, charge verification, start-up checklist). The
        commissioning section is what separates professional estimates here:
        clients can&apos;t see pressure tests or charge verification, so
        writing them down proves the work happened — and justifies not being
        the cheapest bid.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Section</th>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Why it&apos;s on the sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Project header</td>
            <td style={tdStyle}>Equipment being replaced (make/model/age), capacity (BTU/tons, gallons, GPM), access conditions</td>
            <td style={tdStyle}>Sizing is the technical judgment the client is paying for — show your work</td>
          </tr>
          <tr>
            <td style={tdStyle}>Demolition</td>
            <td style={tdStyle}>Removal of existing equipment, refrigerant recovery (HVAC), haul-off</td>
            <td style={tdStyle}>Refrigerant recovery is a regulated step — listing it signals licensed, legal work</td>
          </tr>
          <tr>
            <td style={tdStyle}>Materials</td>
            <td style={tdStyle}>Unit (brand + model + capacity), piping/wiring/line sets, fittings, valves, thermostats, condensate management, pads/stands</td>
            <td style={tdStyle}>Exact model numbers kill the &ldquo;or equal&rdquo; bait-and-switch the cheap bidder is planning</td>
          </tr>
          <tr>
            <td style={tdStyle}>Install labor</td>
            <td style={tdStyle}>By task: piping, electrical tie-in, ductwork modifications, venting</td>
            <td style={tdStyle}>Ductwork modifications are the hidden hours — scope them separately</td>
          </tr>
          <tr>
            <td style={tdStyle}>Commissioning</td>
            <td style={tdStyle}>Pressure test / leak check, refrigerant charge verification, start-up and safety checks, warranty registration</td>
            <td style={tdStyle}>Invisible work that prevents callbacks — your warranty is only as good as your commissioning</td>
          </tr>
          <tr>
            <td style={tdStyle}>Terms</td>
            <td style={tdStyle}>Permit and inspection, manufacturer + your labor warranty (separate), disposal, payment schedule, valid-through date</td>
            <td style={tdStyle}>Equipment and labor warranties start and end at different times — separate them in writing</td>
          </tr>
        </tbody>
      </table>
      <p>
        Plumbing/HVAC-specific exclusions: bringing unrelated systems up to
        code, drywall or finish repair after access, mold or asbestos
        remediation discovered mid-job, gas line upgrades if pressure is
        insufficient, and panel capacity if new equipment needs a circuit the
        panel can&apos;t provide.
      </p>

      <h2>The 8 sections every estimate needs (any trade)</h2>
      <p>
        The trade skeletons above plug into this universal frame. Run every
        estimate through it before it leaves your hands:
      </p>
      <ol>
        <li><strong>Identity block.</strong> Legal business name, license number, address, phone, email, estimate number, date. The license number in the header is free trust.</li>
        <li><strong>Scope of work.</strong> What you will do, in sequence, specific enough that another contractor could price it. &ldquo;Replace roof&rdquo; is not scope; the line items above are.</li>
        <li><strong>Exclusions.</strong> What you will <em>not</em> do. The most profitable section on the sheet — every exclusion is a future change order priced fairly instead of a margin loss.</li>
        <li><strong>Allowances.</strong> Pre-priced unknowns: decking sheets at $/sheet, recessed cans at $/each. Allowances turn &ldquo;we found something&rdquo; from a negotiation into an execution.</li>
        <li><strong>Schedule.</strong> Start window, duration, and what you need from the client. Never promise a start date until materials and your crew calendar are confirmed in writing.</li>
        <li><strong>Payment terms.</strong> Deposit at signing (inside your state&apos;s legal cap), progress draws at milestones, balance on completion.</li>
        <li><strong>Change-order clause.</strong> Work outside the written scope needs a signed written change order before proceeding — no verbal approvals, no &ldquo;while you&apos;re here.&rdquo; Full playbook: <a href="/guides/how-to-handle-change-orders">handling change orders</a>.</li>
        <li><strong>Warranty, expiration, signature.</strong> Workmanship warranty length, valid-through date (21–30 days), signature line. An unsigned estimate is a price list; a signed one is a commitment.</li>
      </ol>
      <p>
        One more distinction that saves arguments: an <strong>estimate</strong> is
        a good-faith approximation that can move if conditions differ (the right
        tool for tear-offs and rewires with unknowns); a <strong>quote</strong> is
        a fixed-price commitment for a defined scope; a <strong>bid</strong> is a
        formal proposal submitted for competitive selection. Use the wrong word
        and the client holds you to the wrong obligation — see{" "}
        <a href="/guides/quote-vs-estimate-vs-bid">estimate vs quote vs bid</a>.
      </p>

      <h2>Closing tips: turning an estimate into a signed job</h2>
      <ul>
        <li><strong>Send it same-day.</strong> Contractors who deliver the estimate within hours of the site visit close at roughly double the rate of next-day senders. Build it from the template in the truck.</li>
        <li><strong>Give two or three tiers.</strong> Good/better/best (e.g. 25-year vs 30-year shingle, Level 4 vs Level 5 finish) moves the conversation from &ldquo;yes or no&rdquo; to &ldquo;which one.&rdquo;</li>
        <li><strong>Say the expiration date out loud.</strong> &ldquo;This pricing holds through the 30th&rdquo; said verbally converts better than the same date sitting silently in section 8.</li>
        <li><strong>Show your crew in the estimate.</strong> &ldquo;3-person crew, 2 days&rdquo; or &ldquo;lead electrician + apprentice, 8 hours each&rdquo; makes the labor number feel real instead of arbitrary.</li>
        <li><strong>Follow up once, with value.</strong> A 3-day check-in that answers a question they asked during the walkthrough beats a &ldquo;just checking in&rdquo; email every time.</li>
      </ul>

      <h2>Do you need a license to bid?</h2>
      <p>
        It depends on your state and your trade, but the general US pattern:{" "}
        <strong>electrical, plumbing, and HVAC</strong> require a specialty
        trade license in nearly every state — bidding that work without one can
        void your contracts and your insurance. <strong>Roofing and
        drywall</strong> typically fall under a general contractor&apos;s
        license, and many states only require it above a dollar threshold
        (commonly a few thousand dollars per job).
      </p>
      <p>
        Put your license number in the header on every sheet, every time. If
        you&apos;re bidding work outside your license class — a GC quoting a
        panel upgrade you&apos;ll sub out — name the licensed sub in the
        estimate. And check your state licensing board before you assume:
        thresholds, classes, and penalties are state-specific, and
        &ldquo;I didn&apos;t know&rdquo; has never survived an enforcement
        hearing.
      </p>

      <h2>When to walk away from a bid request</h2>
      <p>
        The contractors with the fullest schedules are usually the ones who
        learned to say no fastest. Walk away when:
      </p>
      <ul>
        <li><strong>The client is shopping for a number to beat.</strong> &ldquo;Just give me your best price, I have three other bids&rdquo; — no site visit, no interest in scope — is a race to the bottom you can&apos;t win profitably.</li>
        <li><strong>They want the scope off a photo.</strong> No site access, no measurement source, no existing-conditions notes — you&apos;re being asked to absorb every unknown for free.</li>
        <li><strong>The timeline is impossible.</strong> &ldquo;Can you start Monday?&rdquo; on a Wednesday bid means a rushed estimate, a rushed crew, and a rushed warranty call.</li>
        <li><strong>They haggle before you&apos;ve priced.</strong> A client negotiating down before seeing the scope will negotiate every change order down after signing — a margin death spiral, not a job.</li>
        <li><strong>Payment terms are a red flag.</strong> No deposit, &ldquo;pay when I get paid,&rdquo; or cash-only arrangements signal a collections problem you&apos;re volunteering for.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Lump-sum-only estimates.</strong> One number with no line items is an invitation to haggle and a liability when the scope drifts. Itemize labor, materials, and fees — always.</li>
        <li><strong>Missing exclusions.</strong> An estimate with no written exclusion list is a blank check the client didn&apos;t know they were holding. Decking, drywall repair, code upgrades — write them down.</li>
        <li><strong>No expiration date.</strong> Material prices move. An undated estimate is a price you can&apos;t re-price when the client resurfaces in March with October&apos;s numbers.</li>
        <li><strong>Verbal change orders.</strong> &ldquo;Just do it, I&apos;ll pay you&rdquo; has destroyed more contractor margins than any competitor. Signed written change orders, before the work, every time.</li>
        <li><strong>Eating the unknowns.</strong> If the tear-off might reveal two layers or the panel might need a mast upgrade, pre-price it as an allowance. Contractors who &ldquo;hope it&apos;s fine&rdquo; subsidize the jobs that aren&apos;t.</li>
        <li><strong>Quoting from someone else&apos;s price list.</strong> National averages and forum numbers are starting points, not bids. Your labor rate, your supplier pricing, your overhead — that&apos;s the estimate. Templates are structure; your numbers are the business.</li>
      </ul>
      <p>
        Build the estimate from the template in the{" "}
        <a href="/quote">quote builder</a>, send it same-day, and let the
        structure do the selling. And if you&apos;re in the painting trade,
        start from the{" "}
        <a href="/guides/painting-estimate-template">painting estimate template</a>{" "}
        instead — it&apos;s built for your line items, from prep rates to
        two-coat coverage math.
      </p>

      <Faq items={faqs} heading="Contractor estimate questions, answered" />
    </GuideArticle>
  );
}
