import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Ductwork Installation Cost (2026)",
  description:
    "2026 ductwork installation costs: full replacement $1,400–$5,600, $25–$55 per linear foot. Material comparisons, sizing rules, and repair vs replace.",
  keywords: [
    "ductwork installation cost",
    "how much does ductwork cost",
    "duct replacement cost",
    "cost to replace ductwork",
  ],
  alternates: { canonical: "https://calcbid.com/guides/ductwork-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Ductwork Installation Cost | CalcBid",
    description:
      "Full replacement $1,400–$5,600, $25–$55 per linear foot. Material comparisons, sizing rules, and when repair beats replacement.",
    url: "https://calcbid.com/guides/ductwork-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ductwork Installation Cost | CalcBid",
    description:
      "Full replacement $1,400–$5,600, $25–$55 per linear foot. Material comparisons, sizing rules, and when repair beats replacement.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace all the ductwork in a house?",
    a: "The 2026 US range for a full ductwork replacement is $1,400–$5,600, which works out to roughly $25–$55 per linear foot or $270–$500 per duct run. A 1,000–1,500 sq ft home lands at $1,400–$3,400, a 2,000–2,500 sq ft home at $2,800–$5,600, and a 3,000–4,000 sq ft multi-zone home at $4,200–$9,000 or more. Access difficulty (attic and crawlspace runs cost 20–40% more than basement runs) and the duct material you choose move you up and down that range.",
  },
  {
    q: "What is the average cost per linear foot of new ductwork?",
    a: "Expect $25–$55 per linear foot installed for a complete system, and $20–$60 per linear foot depending on material: flexible duct runs $20–$35/LF, fiberglass duct board $30–$45/LF, and sheet metal $45–$60/LF. A per-run benchmark is $270–$500, and a simple per-drop figure many contractors use is about $599 for an insulated (R-6) flexible run. Old duct removal ($200–$800), permits ($50–$400), and insulation wrap ($0.50–$1.50/LF) are separate line items.",
  },
  {
    q: "How long does ductwork last — and how do I know mine needs replacing?",
    a: "Flexible duct lasts 10–15 years, fiberglass duct board 15–25 years, and sheet metal 30–50 years or more. Replacement signs are rooms that never reach temperature, visibly crushed or disconnected runs in the attic, a jump in energy bills, and ducts older than the equipment they serve — leaky ducts waste 20–30% of conditioned air, so aging ductwork can undo the efficiency of a new system. If your system is over 15 years old and still has original flex, replacement usually beats another round of patching.",
  },
  {
    q: "Is it cheaper to repair ductwork or replace it?",
    a: "Spot repairs run $1,000–$4,000 and make sense for localized damage — a crushed run, one disconnected branch, or leaky joints — especially if the ductwork is under 15 years old. Full replacement wins when the system is past its lifespan, riddled with leaks, undersized for the home, or made of obsolete materials. A good rule: if a repair quote passes 40–50% of the replacement cost, replace it and get the decades of life and efficiency that come with a properly designed system.",
  },
  {
    q: "Should I replace my ductwork when I get a new furnace or AC?",
    a: "Yes, in most cases — ductwork is usually replaced alongside the furnace or AC because the labor overlaps (crews are already in the attic or basement) and a new high-efficiency unit needs ducts sized to match it. Oversized or undersized ducts on a new system cause the same hot and cold spots the replacement was supposed to fix. See our <a href=\"/guides/ac-replacement-cost\">AC replacement cost guide</a> and <a href=\"/guides/furnace-replacement-cost\">furnace replacement cost guide</a> to budget the combined project.",
  },
  {
    q: "Can I install or replace ductwork myself?",
    a: "A properly sized duct system is pro work: it requires room-by-room load math and duct sizing per the industry Manual J and Manual D standards, plus sheet-metal fabrication and leakage testing most homeowners cannot do correctly. What you can do legally in most places is seal and insulate existing ducts — painting mastic on accessible joints and wrapping runs in insulation wrap — which alone can recover a big share of the 20–30% of air leaky ducts lose. Leave design and installation to a licensed contractor.",
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
      title="Ductwork Installation Cost"
      description="Full replacement pricing, material comparisons, and the sizing rules that decide whether new ducts actually fix your home's hot and cold spots."
      slug="ductwork-installation-cost"
      updated="October 2026"
      calculatorHref="/calculators/hvac-btu-calculator"
      calculatorLabel="HVAC BTU calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing your home&apos;s ductwork costs a 2026 US range of{" "}
        <strong>$1,400–$5,600 for a full system</strong>, roughly{" "}
        <strong>$25–$55 per linear foot</strong> or{" "}
        <strong>$270–$500 per duct run</strong>. That range covers the
        three levers that move every quote: how many feet of duct your home
        needs, what material the crew installs, and how hard the runs are to
        reach. Ducts are the delivery system your equipment breathes through —
        and when they&apos;re leaky, crushed, or wrongly sized, they waste{" "}
        <strong>20–30% of your conditioned air</strong>, which is why ductwork
        is almost always replaced alongside the{" "}
        <a href="/guides/ac-replacement-cost">AC system</a> or furnace it
        serves. A replacement typically cuts heating and cooling bills{" "}
        <strong>10–40%</strong>, so the project often pays for itself while
        the new equipment is still young.
      </p>

      <h2>Ductwork cost by home size</h2>
      <p>
        The fastest way to sanity-check a quote is the home-size band. Bigger
        homes need more runs, longer trunks, and usually more zones — and
        multi-story homes need 20–30% more linear footage than a single-story
        home of the same square footage, because ducts have to travel between
        floors.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Home size</th>
            <th style={thStyle}>Full replacement</th>
            <th style={thStyle}>What&apos;s typical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1,000–1,500 sq ft</td>
            <td style={tdStyle}>$1,400–$3,400</td>
            <td style={tdStyle}>Single trunk, 6–10 runs, often one-story</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000–2,500 sq ft</td>
            <td style={tdStyle}>$2,800–$5,600</td>
            <td style={tdStyle}>Longer trunk, 10–14 runs, second story adds footage</td>
          </tr>
          <tr>
            <td style={tdStyle}>3,000–4,000 sq ft, multi-zone</td>
            <td style={tdStyle}>$4,200–$9,000+</td>
            <td style={tdStyle}>Multiple trunks, dampers, 14+ runs, zoned controls</td>
          </tr>
        </tbody>
      </table>
      <p>
        Contractors estimate the footage with a rough rule: about{" "}
        <strong>1 linear foot of duct per 8–10 sq ft of conditioned
        space</strong> for a single-story home, plus 20–30% for multi-story.
        So a 2,000 sq ft ranch is in the neighborhood of 200–250 linear feet
        of duct — at $25–$55/LF installed, that&apos;s exactly the $2,800–$5,600
        band above. If a quote lands far outside these bands, ask what&apos;s
        driving it: access problems, material upgrades, or scope differences
        like added returns and zoning.
      </p>

      <h2>Cost per linear foot and per run</h2>
      <p>
        Most contractors price ductwork one of two ways — by the linear foot
        of installed duct, or by the duct run (one branch from the trunk to a
        register). Both numbers should appear on a detailed quote so you can
        compare bids apples to apples.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Pricing unit</th>
            <th style={thStyle}>2026 US range</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Per linear foot, installed</td>
            <td style={tdStyle}>$25–$55</td>
            <td style={tdStyle}>Includes labor, hangers, and standard connections</td>
          </tr>
          <tr>
            <td style={tdStyle}>Per duct run</td>
            <td style={tdStyle}>$270–$500</td>
            <td style={tdStyle}>One branch: duct, boot, register box, connections</td>
          </tr>
          <tr>
            <td style={tdStyle}>Per drop (R-6 flex benchmark)</td>
            <td style={tdStyle}>~$599</td>
            <td style={tdStyle}>Common contractor benchmark for a simple insulated drop</td>
          </tr>
        </tbody>
      </table>
      <p>
        Line items that ride along with the footage: old duct removal{" "}
        <strong>$200–$800</strong>, registers and boots{" "}
        <strong>$10–$40 each</strong>, insulation wrap as an add-on{" "}
        <strong>$0.50–$1.50 per linear foot</strong>, and a mechanical permit{" "}
        <strong>$50–$400</strong> depending on your municipality. Get each of
        these as its own line on the quote — a single lump sum hides the
        material-versus-labor split and makes bid comparison guesswork.
      </p>

      <h2>Material comparison: flex vs. duct board vs. sheet metal</h2>
      <p>
        Material choice is the single biggest price lever after footage, and
        it&apos;s also a lifespan decision you&apos;ll live with for decades.
        Here&apos;s how the three common residential options stack up:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/LF</th>
            <th style={thStyle}>Lifespan</th>
            <th style={thStyle}>Pros / cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Flexible duct</td>
            <td style={tdStyle}>$20–$35</td>
            <td style={tdStyle}>10–15 yr</td>
            <td style={tdStyle}>Cheapest and fastest to install; shortest life, easy to crush or kink, worst airflow when bent tightly</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fiberglass duct board</td>
            <td style={tdStyle}>$30–$45</td>
            <td style={tdStyle}>15–25 yr</td>
            <td style={tdStyle}>Middle ground — quieter than metal, built-in insulation; can shed fibers if interior degrades, harder to clean</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sheet metal</td>
            <td style={tdStyle}>$45–$60</td>
            <td style={tdStyle}>30–50+ yr</td>
            <td style={tdStyle}>Longest life, smoothest airflow, easiest to seal and clean; highest upfront cost, needs separate insulation in unconditioned spaces</td>
          </tr>
        </tbody>
      </table>
      <p>
        The cheap-material trap is real: flexible duct at $20–$35/LF looks
        like a bargain until you&apos;re replacing it again in 12 years while
        the sheet metal system at $45–$60/LF is still going strong at year
        40. For a forever home, sheet metal&apos;s lifetime cost per year is
        usually the lowest. For a home you&apos;ll sell in five years, quality
        flex with gentle bends and proper supports is a defensible budget
        choice — and it still beats limping along on crushed, leaking original
        ducts.
      </p>

      <h2>Where the ducts run changes the price</h2>
      <p>
        Access is the hidden multiplier. The same footage costs far more to
        install in a 120°F attic with a 3-foot crawl than in an open basement
        where a crew can stand upright and reach every joint.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Duct location</th>
            <th style={thStyle}>Cost factor</th>
            <th style={thStyle}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Open basement / conditioned space</td>
            <td style={tdStyle}>Baseline</td>
            <td style={tdStyle}>Easy access, minimal insulation needs, fastest labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Attic or crawlspace</td>
            <td style={tdStyle}>+20–40%</td>
            <td style={tdStyle}>Tight quarters, heat/cold exposure, ducts must be insulated</td>
          </tr>
          <tr>
            <td style={tdStyle}>Inside walls / between floors</td>
            <td style={tdStyle}>Highest</td>
            <td style={tdStyle}>Drywall and plaster must be opened and repaired afterward</td>
          </tr>
        </tbody>
      </table>
      <p>
        Inside-wall runs are the budget killer because you&apos;re paying for
        two trades: the HVAC crew and the drywall repair after. When a
        contractor proposes routing through finished walls, ask whether an
        attic or soffit route gets the same result without the patching bill —
        it often does.
      </p>

      <h2>How ductwork is installed, step by step</h2>
      <p>
        A proper installation follows the industry standards contractors use
        for load math, duct sizing, and equipment selection — Manual J
        (how much heating and cooling each room needs), Manual D (how big
        each duct must be to deliver it), and Manual S (matching the
        equipment to both). You don&apos;t need to do this math, but you
        should expect your contractor to — a quote with no sizing discussion
        is a red flag. The process:
      </p>
      <ul>
        <li><strong>Load calculation (Manual J):</strong> the contractor measures your home and calculates each room&apos;s heating and cooling load — not just square footage, but windows, insulation, and orientation. This decides how much air every room needs.</li>
        <li><strong>Duct sizing (Manual D):</strong> each trunk and branch is sized to carry its room&apos;s airflow at the right velocity. Undersized ducts whistle and starve rooms; oversized ones cost more and deliver lazy, uneven airflow.</li>
        <li><strong>Equipment match (Manual S):</strong> the furnace or AC is selected to fit the ducts and the load — an oversized unit short-cycles and never dehumidifies properly.</li>
        <li><strong>Layout and fabrication:</strong> trunks run along the shortest sensible path; sheet metal is fabricated, flex is cut to length with gentle curves, and every run gets proper supports (flex should never sag between joists).</li>
        <li><strong>Sealing with mastic:</strong> every joint, seam, and boot connection gets sealed with duct mastic — the thick paint-on sealant — not just tape. Foil tape alone fails within a few years; mastic lasts.</li>
        <li><strong>Insulation:</strong> any duct in an attic, crawlspace, or garage gets wrapped to at least R-6 (R-8 in many climates) so the air doesn&apos;t lose its temperature before it reaches the room.</li>
        <li><strong>Leakage testing:</strong> the finished system is pressure-tested (a duct blaster test) to verify leakage is within target — typically under 5–10% of system airflow. Ask for the test report; a contractor who won&apos;t test is a contractor guessing.</li>
      </ul>
      <p>
        A full-home replacement usually takes <strong>2–4 days</strong> for a
        typical single-story home and up to a week for large multi-zone
        systems. If you&apos;re pairing it with new equipment, budget the two
        together — our <a href="/guides/heat-pump-installation-cost">heat pump
        installation cost guide</a> covers ducted conversions, where existing
        ducts often need resizing to match the new system&apos;s airflow.
      </p>

      <h2>Duct repair vs. full replacement</h2>
      <p>
        Not every tired duct system needs a full tear-out. Repairs make sense
        when the damage is localized and the system is otherwise within its
        lifespan:
      </p>
      <ul>
        <li><strong>Partial repair:</strong> $1,000–$4,000 — sealing accessible joints with mastic, replacing a crushed or disconnected run, re-insulating exposed sections.</li>
        <li><strong>Adding 1–3 return runs:</strong> $1,500–$4,500 — many older homes are return-starved, which causes pressure imbalances, slamming doors, and rooms that won&apos;t cool. Adding returns is one of the highest-value upgrades you can make.</li>
        <li><strong>Sealing existing ducts yourself:</strong> homeowner-legal in most areas — mastic on accessible joints plus insulation wrap can recover a large share of lost airflow for the cost of materials.</li>
      </ul>
      <p>
        Go full replacement when the system is past its material lifespan
        (15+ years for flex, 25+ for duct board), when leaks are everywhere
        rather than in one spot, or when the ducts are fundamentally the
        wrong size for your home. The decision rule contractors use:{" "}
        <strong>if the repair quote passes 40–50% of replacement cost,
        replace.</strong> You get a designed system, a leakage test, and
        decades of life instead of another round of patching.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Oversized flex with tight bends.</strong> Flex duct choked around a tight corner can lose half its rated airflow. Every bend should be a gentle sweep, pulled taut — a 25-foot run doing the work of 15 feet is money thrown away.</li>
        <li><strong>Skipping the Manual D sizing.</strong> &ldquo;Same size as the old ducts&rdquo; is how the old problems get reinstalled. The old system&apos;s hot and cold spots were often a sizing problem, not an equipment problem.</li>
        <li><strong>Sealing with tape instead of mastic.</strong> Standard duct tape dries out and peels within a few years. Mastic at every joint, or don&apos;t bother — a leaky new system is the most expensive kind.</li>
        <li><strong>Forgetting the returns.</strong> Homeowners focus on supply registers, but undersized or missing return air is behind a huge share of comfort complaints. If your quote has no return-air plan, it&apos;s incomplete.</li>
        <li><strong>Not getting a leakage test.</strong> A duct blaster test is the only proof the system performs as designed. Verbal &ldquo;we sealed everything&rdquo; is not a test report.</li>
        <li><strong>Replacing equipment but keeping bad ducts.</strong> A new high-efficiency furnace or AC on crushed, leaky ducts performs like the old unit did. Ducts and equipment are one system — budget them together, starting with the <a href="/calculators/hvac-btu-calculator">HVAC BTU calculator</a> to right-size the equipment side.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Full ductwork installation is <strong>pro work</strong>. Sizing a
        system requires room-by-room load math, duct fabrication or precise
        flex layout, and leakage testing — get any of it wrong and you&apos;ve
        bought an expensive set of new problems. Licensed contractors also
        handle the mechanical permit and the final inspection, which matters
        for insurance and resale.
      </p>
      <p>
        What&apos;s firmly in the homeowner lane: <strong>sealing and
        insulating existing ducts</strong>. Painting mastic onto accessible
        joints in your attic or basement, re-hanging sagging flex, and
        wrapping bare runs in insulation wrap are legal in most places, cost
        a fraction of a replacement, and can recover a big share of the
        20–30% of conditioned air that leaky ducts waste. Do that first —
        then get quotes for a full replacement only if comfort problems
        persist.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Yes, in most municipalities — ductwork replacement typically requires
        a <strong>mechanical permit</strong> costing{" "}
        <strong>$50–$400</strong>, with an inspection at completion. The
        permit is cheap insurance: the inspector verifies clearances,
        supports, and sealing that you can&apos;t easily check yourself once
        the attic hatch closes. Any contractor who suggests skipping the
        permit is telling you something about how they work — check your
        municipality&apos;s requirements before the crew arrives, and make
        sure the permit (and who pulls it) is named in the contract.
      </p>
      <p>
        Start by sizing the equipment side correctly with the{" "}
        <a href="/calculators/hvac-btu-calculator">HVAC BTU calculator</a>,
        then get three quotes that each include footage, material, a Manual D
        sizing statement, and a leakage test. When the quotes are in,{" "}
        <a href="/quote">send them through CalcBid&apos;s quote tool</a> to
        compare line by line — the cheapest bid is rarely the one with the
        mastic, the test report, and the right-sized returns.
      </p>

      <Faq items={faqs} heading="Ductwork cost questions, answered" />
    </GuideArticle>
  );
}
