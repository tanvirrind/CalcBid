import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Rewire a House (2026 Prices)",
  description:
    "Cost to rewire a house in 2026: $3–$8 per square foot, or $4,500–$12,000 for most homes. Per-opening pricing, knob-and-tube, drywall repair, and permits.",
  keywords: [
    "cost to rewire a house",
    "house rewiring cost",
    "cost to rewire a 1500 sq ft house",
    "knob and tube replacement cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-rewire-a-house" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Rewire a House (2026 Prices) | CalcBid",
    description:
      "Rewiring runs $3–$8 per sq ft in 2026 — $4,500–$12,000 for most homes, more with knob-and-tube or closed walls. Per-opening pricing, phased rewires, permits, drywall.",
    url: "https://calcbid.com/guides/cost-to-rewire-a-house",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Rewire a House (2026 Prices) | CalcBid",
    description: "Most whole-house rewires run $4,500–$12,000 in 2026. How per-sq-ft and per-opening pricing work, what knob-and-tube adds, and the drywall nobody budgets.",
  },
};

const faqs = [
  {
    q: "How much does it cost to rewire a 1,500 sq ft house?",
    a: "Typically $5,000–$11,000 in 2026 with reasonable access (attic and/or basement or crawlspace), including new circuits, devices, and inspection — but usually excluding full drywall restoration and paint. Homes with no access (slab, finished ceilings on every floor) run higher because every run is fished. Add $1,500–$3,000 if the panel also needs replacing, and get the drywall scope in writing either way.",
  },
  {
    q: "What is knob-and-tube wiring and why do insurers hate it?",
    a: "Knob-and-tube is the pre-1930s wiring method: single conductors run on ceramic knobs and through ceramic tubes, with no ground wire and air as insulation space. It was respectable work in its era, but it becomes a problem when insulation is blown over it, splices are buried, and a century of amateur taps accumulate. Many insurers refuse new policies or charge steep premiums on homes with active knob-and-tube, which is why its replacement is often driven by insurance rather than failure.",
  },
  {
    q: "Can I rewire a house in phases to spread the cost?",
    a: "Yes — phased rewiring is common and legitimate. A typical sequence: panel and service first, then the highest-risk circuits (knob-and-tube, kitchen, baths), then the remaining rooms floor by floor. Each phase gets its own permit and inspection. The total runs 10–20% more than doing it all at once because of repeat setup and inspections, but it keeps the house livable and the budget annual. Ask your electrician to write the phase plan into the first quote.",
  },
  {
    q: "Does rewiring include fixing the walls?",
    a: "Usually not beyond rough patching — and this is the biggest expectation gap in rewire quotes. Electricians cut what they must; some include a rough drywall patch, most do not include texture matching, finish mudding, or paint. Budget $500–$2,000+ for a drywaller and painter after a full rewire unless your quote explicitly includes restoration. Get the sentence in writing before work starts.",
  },
  {
    q: "How long does it take to rewire a house?",
    a: "A whole-house rewire takes 3–10 working days for the electrical work depending on size and access, spread across rough-in and trim-out with inspections staged between. You can usually live in the house during a rewire — power is restored circuit by circuit — but expect daily mess, holes, and noise. Add a few days for drywall patching and paint. Vacant homes go noticeably faster.",
  },
  {
    q: "Can I rewire my own house?",
    a: "A few jurisdictions allow homeowner permits for owner-occupied single-family homes, but most restrict rewiring to licensed electricians, and every jurisdiction requires permits and staged inspections for this scope. Even where it's legal, a whole-house rewire is weeks of skilled work governed by hundreds of code rules that an inspector will check line by line. The realistic DIY contribution is demolition access, patching, and painting — the non-electrical labor around the job.",
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
      title="Cost to Rewire a House: Per Square Foot and Per Opening"
      description="What whole-house rewiring really costs in 2026 — how electricians price it by the square foot and by the opening, what knob-and-tube and closed walls add, and the drywall bill hiding behind every quote."
      slug="cost-to-rewire-a-house"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Compare rewiring quotes"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Rewiring a house costs <strong>$3–$8 per square foot</strong>{" "}
        in 2026, putting most whole-house rewires at{" "}
        <strong>$4,500–$12,000</strong> — more for large homes,
        knob-and-tube replacement, or houses with no attic, basement,
        or crawlspace access. It is the biggest job in our electrical
        cluster short of a full service replacement, and it almost
        always travels with the{" "}
        <a href="/guides/electrical-panel-upgrade-cost">panel upgrade</a>{" "}
        covered in our pillar guide: new wiring landed on a 60-amp fuse
        box is money spent in the wrong order. Rate context is in the{" "}
        <a href="/guides/electrician-cost">electrician cost hub</a>.
      </p>

      <h2>Rewiring cost by house size (2026)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Home size</th>
            <th style={thStyle}>Good access (attic/basement)</th>
            <th style={thStyle}>Hard access (slab / finished)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1,000 sq ft</td>
            <td style={tdStyle}>$3,500–$6,500</td>
            <td style={tdStyle}>$5,500–$9,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>1,500 sq ft</td>
            <td style={tdStyle}>$5,000–$11,000</td>
            <td style={tdStyle}>$8,000–$13,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000 sq ft</td>
            <td style={tdStyle}>$6,500–$13,500</td>
            <td style={tdStyle}>$10,000–$17,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,500 sq ft</td>
            <td style={tdStyle}>$8,000–$16,000</td>
            <td style={tdStyle}>$12,000–$20,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>3,000 sq ft+</td>
            <td style={tdStyle}>$10,000–$20,000</td>
            <td style={tdStyle}>$15,000–$25,000+</td>
          </tr>
        </tbody>
      </table>
      <p>
        Access is the whole story in that table. When an electrician can
        walk an attic or a crawlspace, cable runs in minutes. When every
        run must be fished through closed, finished walls — or cut open —
        the same circuit takes an hour and leaves a hole to patch.
        Two-story homes with finished first-floor ceilings are the
        classic hard-access case.
      </p>

      <h2>How electricians price it: per foot vs. per opening</h2>
      <p>
        Square-foot pricing is an estimating shortcut; the number behind
        most real quotes is <strong>per opening</strong> — every outlet,
        switch, light, and appliance connection counts as one opening.
        2026 per-opening rates run <strong>$150–$250</strong> for standard
        receptacles and switches, $250–$450 for recessed lights, and
        $350–$900 for dedicated appliance circuits (range, dryer, water
        heater, HVAC). A typical 1,500 sq ft home has 60–90 openings.
        When you compare quotes, ask for the opening count each
        electrician assumed — a $2,000 gap between quotes is usually a
        10-opening disagreement, not a pricing difference.
      </p>

      <h2>What a rewire actually includes</h2>
      <ol>
        <li><strong>Assessment + load calculation:</strong> existing wiring mapped; the panel situation decided first (budget the <a href="/guides/electrical-panel-upgrade-cost">panel upgrade</a> in the same project if it&apos;s due — one mobilization, one inspection cycle).</li>
        <li><strong>Permit:</strong> pulled by the electrician; rewires are inspected in stages (rough-in before walls close, final after trim).</li>
        <li><strong>New circuits run:</strong> modern code requires things your old house never had — dedicated kitchen small-appliance circuits, GFCI protection in kitchens/baths/garages/exteriors, AFCI protection in living areas, hardwired interconnected smoke/CO detectors.</li>
        <li><strong>Devices + trim:</strong> new receptacles, switches, plates; old wiring abandoned in place (de-energized) or removed where accessible.</li>
        <li><strong>Rough + final inspections:</strong> the inspector sees the work before and after the walls close.</li>
        <li><strong>Patching:</strong> see the next section — usually not the electrician&apos;s scope.</li>
      </ol>

      <h2>The knob-and-tube problem</h2>
      <p>
        If your home was built before roughly 1935, some or all of its
        wiring may be knob-and-tube. The system itself, untouched, is
        not the instant hazard it&apos;s sometimes sold as — but three
        forces converge against it: it has <strong>no ground wire</strong>{" "}
        (modern electronics and GFCI protection assume one), it was
        designed for a house with a few lights per room rather than
        today&apos;s loads, and it cannot legally be buried in insulation,
        which kills most attic-insulation plans. Insurers make the
        decision final: many carriers will not write or renew a policy
        on a home with active knob-and-tube, or price the policy as if
        they&apos;d rather not. In practice, knob-and-tube replacement is
        usually partial-first: the insurer cares about the{" "}
        <em>active</em> circuits, so decommissioning the K&amp;T runs
        (verified by the electrician&apos;s letter) often satisfies
        underwriting even before every later-era circuit is redone.
        Budget knob-and-tube replacement at the top of the access-based
        ranges above — the runs are, by definition, in the oldest, least
        accessible parts of the house.
      </p>

      <h2>Signs your wiring is at end of life</h2>
      <p>
        Not every old house needs a full rewire, and any electrician
        quoting one should be able to point at evidence. The genuine
        triggers: <strong>two-prong ungrounded outlets throughout</strong>{" "}
        (no ground path for modern equipment), <strong>cloth- or
        rubber-insulated conductors</strong> whose insulation crumbles
        when flexed (common pre-1950), <strong>frequent breaker trips or
        fuse replacements on ordinary loads</strong>,{" "}
        <strong>discolored or warm outlets and switches</strong>, a{" "}
        <strong>burning smell at devices</strong>, <strong>lights that
        dim when appliances start</strong> (voltage drop on overloaded
        or deteriorated circuits), <strong>aluminum branch wiring from
        the 1965–1975 era</strong> (a known connection-overheating
        issue that needs CO/ALR devices or pigtailing at minimum), and
        any <strong>active knob-and-tube</strong> your insurer has
        flagged. One or two of these usually means targeted circuit
        replacement, not a whole-house job; four or more, or any of
        them spread across every floor, is when the per-opening math
        starts beating the repair-by-repair math. A $150–$400 diagnostic
        visit that maps which circuits are actually failing is money
        well spent before committing to five figures.
      </p>

      <h2>The drywall bill nobody budgets</h2>
      <p>
        Even careful fishing leaves holes: at device locations, at
        corners where drills turn, and along any run that could not be
        fished at all. Electricians typically either leave holes open or
        rough-patch them — finish mudding, texture matching, and
        repainting are almost never in the electrical quote. Real 2026
        numbers for the follow-on work: <strong>$500–$2,000</strong> for
        patch-and-texture across a whole-house rewire, plus paint. Get
        one sentence in your written quote — &ldquo;drywall patching
        included to [rough/finish] stage&rdquo; — and there are no
        surprises. This is also where the phased approach helps: patch
        each phase while the mess is confined to one floor.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Rewiring is the definitive licensed-electrician job in this
        cluster. The scope is permitted in every jurisdiction,
        inspected in stages everywhere, and restricted to licensed
        electricians in most — a small number of places let owner-occupants
        pull a homeowner permit, and even there the inspector applies
        the same code book, which for a whole house runs to hundreds of
        enforceable details (box fill, arc-fault coverage, grounding
        electrode systems, tamper-resistant receptacles). Errors
        don&apos;t announce themselves; they wait inside closed walls.
        Where homeowners genuinely save money: gutting access ahead of
        the electrician (opening a basement ceiling, clearing the attic),
        doing the drywall patch and paint after, and rewiring during a
        renovation that already has walls open — the single biggest cost
        lever in this entire guide. Our{" "}
        <a href="/guides/diy-vs-pro-home-renovation-cost">DIY vs. pro guide</a>{" "}
        classifies structural electrical work as never-DIY for the same
        reasons.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Yes — always, for rewiring, in every jurisdiction, and unlike
        some projects there is no scope small enough inside a rewire to
        skip it. Expect <strong>$200–$800</strong> in permit and
        inspection fees depending on the city and scope, staged rough-in
        and final inspections, and a paper trail your insurer and the
        next buyer will both ask about. If you are replacing knob-and-tube
        for insurance reasons, the passed final inspection plus the
        electrician&apos;s completion letter is the document your carrier
        wants — confirm they&apos;ll accept it before choosing the phase
        plan.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Rewiring onto an ancient panel.</strong> Sequence the project panel-first or panel-with; new circuits on a 60-amp fuse panel waste the mobilization and fail modern circuit-count needs.</li>
        <li><strong>Comparing quotes without the opening count.</strong> Per-opening assumptions are where cheap quotes hide missing circuits. Make every bidder count the same house.</li>
        <li><strong>Assuming drywall is included.</strong> It usually is not. One written sentence prevents a $2,000 misunderstanding.</li>
        <li><strong>Burying knob-and-tube in new insulation.</strong> It voids the insulation plan&apos;s code compliance and the insurer&apos;s patience. Rewire first, insulate second.</li>
        <li><strong>Skipping dedicated circuits to trim the bid.</strong> Code-required kitchen, laundry, and bath circuits are not upsells; cutting them fails inspection and reopens the walls.</li>
        <li><strong>Living through it without a plan.</strong> Phasing floor-by-floor, keeping one bathroom and the kitchen live, and knowing which circuits die on which day turns a miserable month into a manageable one.</li>
      </ul>

      <Faq items={faqs} heading="House rewiring questions, answered" />
    </GuideArticle>
  );
}
