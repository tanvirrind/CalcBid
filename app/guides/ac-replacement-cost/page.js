import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "AC Replacement Cost (2026)",
  description:
    "AC replacement cost in 2026 by tonnage and SEER2 tier: split, packaged, and heat pump systems, ductwork factors, rebates, and the R-454B change.",
  keywords: [
    "ac replacement cost",
    "hvac replacement cost",
    "cost to replace central air conditioner",
    "new ac unit cost installed",
    "3 ton ac unit cost installed",
  ],
  alternates: { canonical: "https://calcbid.com/guides/ac-replacement-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "AC Replacement Cost (2026) | CalcBid",
    description:
      "Central AC replacement prices by tonnage and SEER2 tier for 2026, plus package units, heat pumps, ductwork costs, rebates, and refrigerant changes.",
    url: "https://calcbid.com/guides/ac-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Replacement Cost (2026) | CalcBid",
    description: "Central AC replacement prices by tonnage and SEER2 tier for 2026, plus package units, heat pumps, ductwork costs, rebates, and refrigerant changes.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace a 3-ton AC unit?",
    a: "A 3-ton central AC replacement — the most common residential size — runs $5,800–$10,500 installed in 2026 for a split system at standard efficiency. Variable-speed, high-SEER2 equipment pushes it to $9,000–$13,000, and any ductwork repair or replacement adds $500–$5,000 on top. The outdoor unit and indoor coil are both replaced in a proper quote.",
  },
  {
    q: "How long does a central AC system last?",
    a: "Expect 15–20 years for a well-maintained system in a moderate climate, and 12–15 in hot or coastal regions where run hours and salt air work harder. Past year 15, a compressor or coil failure usually argues for replacement rather than repair — especially on older R-22 equipment, where refrigerant alone can cost $100–$200 per pound.",
  },
  {
    q: "Should I replace the furnace at the same time as the AC?",
    a: "If the furnace is within a few years of the AC's age, replacing both together typically saves $500–$1,500 in shared labor, guarantees a matched, warranty-clean system, and avoids a second install disruption. If the furnace is under 10 years old and healthy, AC-only is sensible — just confirm the blower can support the new coil's airflow requirements.",
  },
  {
    q: "What SEER2 rating should I buy?",
    a: "Buy the code minimum (14.3 SEER2 in the North, 15.2 in the South for split systems) if budget rules or you may move within a few years. Step up to 16–18 SEER2 two-stage equipment in hot climates with long run hours — the comfort (humidity control, quieter low stage) is worth as much as the energy savings. Above 18 SEER2 pays back mainly in the hottest regions.",
  },
  {
    q: "How long does AC replacement take?",
    a: "A straightforward split-system swap is one day — typically 4–8 hours from shutdown to cold air, including evacuation, charging, and testing. Add a day if the job includes duct modifications, a lineset replacement, or an electrical panel upgrade, and note that permit inspections may be scheduled a day or two after the install.",
  },
  {
    q: "Are there rebates for a new AC in 2026?",
    a: "Recently, yes, from three directions: the federal 25C credit (30% up to $600 for a qualifying central AC, up to $2,000 for a heat pump), manufacturer rebates in spring and fall shoulder seasons, and utility programs ranging from $200–$1,500. Program rules change frequently — verify current eligibility at IRS.gov and DSIRE before signing, and treat any quote that 'guarantees' a credit with suspicion.",
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
      title="AC Replacement Cost"
      description="Central AC replacement priced by tonnage and efficiency tier for 2026 — and how the number changes when the furnace, ducts, and refrigerant enter the picture."
      slug="ac-replacement-cost"
      updated="October 2026"
      calculatorHref="/calculators/hvac-btu-calculator"
      calculatorLabel="Size your new system"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing a central air conditioner costs{" "}
        <strong>$5,200–$12,500 installed</strong> for most homes in 2026,
        with the full range running <strong>$3,800–$16,000</strong> once
        high-efficiency equipment and ductwork enter the job. Searches for
        &ldquo;HVAC replacement cost&rdquo; usually mean the whole system —
        AC plus furnace together runs <strong>$8,000–$18,000</strong>, and
        this guide prices both readings honestly. The number on your quote
        is built from four levers: tonnage, SEER2 efficiency tier, system
        type, and how much of the surrounding infrastructure (ducts, lineset,
        electrical) survives the swap. This guide seeds our HVAC cluster —
        its first member, the{" "}
        <a href="/guides/mini-split-installation-cost">mini split installation guide</a>,
        covers the ductless branch of the same decision.
      </p>

      <h2>AC replacement cost by tonnage (2026)</h2>
      <p>
        Split-system replacement, standard efficiency tier, existing ducts
        in serviceable condition. One ton equals 12,000 BTU/hr of cooling —
        verify your home&apos;s actual load with the{" "}
        <a href="/calculators/hvac-btu-calculator">HVAC BTU calculator</a>{" "}
        rather than copying the old unit&apos;s nameplate, because the old
        unit was very likely oversized.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Size</th>
            <th style={thStyle}>Typical home</th>
            <th style={thStyle}>Installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>2 ton</td>
            <td style={tdStyle}>Up to ~1,200 sq ft</td>
            <td style={tdStyle}>$4,800–$8,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2.5 ton</td>
            <td style={tdStyle}>1,200–1,500 sq ft</td>
            <td style={tdStyle}>$5,200–$9,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>3 ton</td>
            <td style={tdStyle}>1,500–1,800 sq ft</td>
            <td style={tdStyle}>$5,800–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>3.5 ton</td>
            <td style={tdStyle}>1,800–2,100 sq ft</td>
            <td style={tdStyle}>$6,200–$11,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>4 ton</td>
            <td style={tdStyle}>2,100–2,500 sq ft</td>
            <td style={tdStyle}>$6,800–$12,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>5 ton</td>
            <td style={tdStyle}>2,500–3,000+ sq ft</td>
            <td style={tdStyle}>$7,500–$14,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Square footage is a starting guess, not a sizing method. Insulation,
        window area, ceiling height, and climate swing the real load by a
        full ton in either direction — which is why the contract should
        include a Manual J load calculation, not a &ldquo;same as the old
        one&rdquo; assumption.
      </p>

      <h2>What SEER2 tier does to the price</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tier</th>
            <th style={thStyle}>SEER2</th>
            <th style={thStyle}>Price effect (3-ton)</th>
            <th style={thStyle}>Character</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Code minimum</td>
            <td style={tdStyle}>14.3 (North) / 15.2 (South)</td>
            <td style={tdStyle}>Baseline $5,800–$8,500</td>
            <td style={tdStyle}>Single-stage, on/off operation</td>
          </tr>
          <tr>
            <td style={tdStyle}>Mid-efficiency</td>
            <td style={tdStyle}>16–18</td>
            <td style={tdStyle}>+$800–$2,500</td>
            <td style={tdStyle}>Usually two-stage — better humidity control, quieter</td>
          </tr>
          <tr>
            <td style={tdStyle}>High-efficiency</td>
            <td style={tdStyle}>18–22+</td>
            <td style={tdStyle}>+$2,500–$5,000</td>
            <td style={tdStyle}>Variable-speed inverter systems, steadiest comfort</td>
          </tr>
        </tbody>
      </table>
      <p>
        Efficiency payback is climate math: in Phoenix or Houston, where a
        system runs 2,000+ hours a year, stepping from minimum to mid-tier
        saves roughly $150–$350 a year and the two-stage comfort is
        immediate. In a mild coastal climate at 600 run-hours, the same step
        saves perhaps $50 a year — spend the difference on duct sealing
        instead.
      </p>

      <h2>System types: split, packaged, and the heat pump crossover</h2>
      <ul>
        <li><strong>Split system ($5,200–$12,500):</strong> outdoor condenser + indoor coil on your furnace or air handler. The default for most homes with ducts, and everything in the tables above.</li>
        <li><strong>Packaged unit ($5,500–$12,000):</strong> everything in one outdoor cabinet — common in the South and Southwest on slab and rooftop installs. Slightly less efficient at the top end, simpler to service, no indoor footprint.</li>
        <li><strong>Heat pump ($5,500–$14,000):</strong> an AC that reverses to heat. In mild-winter regions it replaces both systems; in cold climates it pairs with a furnace (dual fuel). The crossover matters for incentives too — heat pumps have recently qualified for up to $2,000 in federal credit where a standard AC caps at $600.</li>
        <li><strong>Ductless mini split ($2,500–$14,000):</strong> the no-duct answer — priced per zone in our <a href="/guides/mini-split-installation-cost">mini split guide</a>, which is this cluster&apos;s first member guide.</li>
      </ul>
      <p>
        The heat pump thread runs through this whole site&apos;s newer
        guides: the same refrigeration tech that cools a heat pump also
        drives the heat pump water heaters in our{" "}
        <a href="/guides/water-heater-replacement-cost">water heater replacement guide</a>{" "}
        — and the same 25C credit conversation. If you are electrifying,
        price both jobs together; one contractor visit can scope the pair.
      </p>

      <h2>AC-only vs. full HVAC replacement: what the bigger quote buys</h2>
      <p>
        This is the fold between &ldquo;AC replacement cost&rdquo; and
        &ldquo;HVAC replacement cost&rdquo; (a harder, pricier search for a
        reason). Replacing condenser and coil alone:{" "}
        <strong>$5,200–$12,500</strong>. Adding a matched furnace at the
        same time: <strong>$8,000–$18,000</strong> total, which is{" "}
        <strong>$500–$1,500 less</strong> than doing the two jobs in
        separate years — the crew is already there, the coil already matches
        the blower, and you get one matched-system warranty instead of two
        partial ones. The deciding factor is the furnace&apos;s age and
        condition, not the discount: a healthy 8-year-old furnace should
        stay; a 16-year-old furnace standing next to a new AC is a second
        project already scheduled by physics.
      </p>

      <h2>Where the money goes: line items</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Typical cost</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Equipment (condenser + coil)</td>
            <td style={tdStyle}>55–65% of total</td>
            <td style={tdStyle}>Brand, tonnage, and SEER2 tier set this</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor</td>
            <td style={tdStyle}>$1,500–$3,000</td>
            <td style={tdStyle}>One-day crew for a standard swap</td>
          </tr>
          <tr>
            <td style={tdStyle}>Lineset flush or replacement</td>
            <td style={tdStyle}>$300–$800</td>
            <td style={tdStyle}>New lineset is the safer call on a refrigerant change</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pad, disconnect, thermostat</td>
            <td style={tdStyle}>$250–$700</td>
            <td style={tdStyle}>Often bundled; smart thermostat if not</td>
          </tr>
          <tr>
            <td style={tdStyle}>Old equipment disposal</td>
            <td style={tdStyle}>$100–$300</td>
            <td style={tdStyle}>Includes refrigerant recovery (legally required)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permit + inspection</td>
            <td style={tdStyle}>$150–$500</td>
            <td style={tdStyle}>Mechanical, plus electrical where circuits change</td>
          </tr>
          <tr>
            <td style={tdStyle}>Duct modifications</td>
            <td style={tdStyle}>$500–$2,000</td>
            <td style={tdStyle}>Transitions and sealing; full duct replacement is its own job, $2,000–$5,000+</td>
          </tr>
        </tbody>
      </table>

      <h2>The ductwork factor</h2>
      <p>
        Ducts are the silent line in AC pricing. A new high-efficiency unit
        on leaky, undersized ductwork performs like a cheaper unit — studies
        of existing homes routinely find 20–30% of conditioned air lost to
        duct leakage. Before signing, ask the contractor to inspect and
        quote separately: duct sealing ($500–$1,500), targeted repairs, and
        — only when the ducts are genuinely undersized, damaged, or
        asbestos-era — full replacement at $2,000–$5,000+. If a quote
        includes five figures of ductwork with no inspection photos or
        static-pressure readings, get a second opinion before you agree.
      </p>

      <h2>The refrigerant transition: R-410A to R-454B</h2>
      <p>
        New systems manufactured from 2025 onward use lower-GWP refrigerants
        — primarily <strong>R-454B</strong> (and R-32 in some brands) —
        replacing R-410A under the federal phase-down. What it means for
        your replacement: new equipment prices carry a modest premium over
        late R-410A stock; R-454B is mildly flammable (class A2L), so new
        systems include leak sensors and your installer must be certified
        for it — a real question to ask bidders this year. Existing R-410A
        systems remain fully serviceable, but refrigerant prices rise as
        production quotas tighten, which strengthens the replacement case
        for any R-410A (and especially R-22) system facing a refrigerant
        repair.
      </p>

      <h2>How replacement day works</h2>
      <ol>
        <li><strong>Recovery and removal.</strong> Refrigerant is recovered from the old system (a legal requirement, not a courtesy), equipment disconnected and hauled out.</li>
        <li><strong>Set the new equipment.</strong> New pad if needed, condenser set and leveled, indoor coil installed, lineset run or flushed and reconnected.</li>
        <li><strong>Electrical and controls.</strong> Disconnect, whip, and thermostat wired; breaker verified against the new unit&apos;s nameplate.</li>
        <li><strong>Evacuate and charge.</strong> Lines pulled to a deep vacuum (500 microns), then charged to manufacturer spec — the step that decides whether the system lives 12 years or 20.</li>
        <li><strong>Commission and test.</strong> Superheat/subcooling verified, static pressure and temperature split measured, condensate drain tested, and the numbers recorded on your invoice.</li>
      </ol>

      <h2>Rebates and the 25C credit — verify before you count them</h2>
      <p>
        Stack the incentives, but verify each layer: the federal 25C energy
        efficient home improvement credit has recently offered 30% up to{" "}
        <strong>$600 for a qualifying central AC</strong> (16 SEER2 and above)
        and up to <strong>$2,000 for a qualifying heat pump</strong>;
        utilities add <strong>$200–$1,500</strong> in many territories; and
        manufacturers run shoulder-season rebates worth $200–$1,000 on
        premium tiers. Programs change with legislation and budgets, so
        confirm the current terms at IRS.gov and your state&apos;s DSIRE
        database, and have the contractor put the <em>gross</em> price on
        the quote with incentives shown as your homework, not their
        discount.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        There is no legal DIY tier for the core job: refrigerant handling
        requires EPA Section 608 certification, and the refrigerant itself
        is sold only to certified techs. Homeowners <em>can</em> buy
        equipment online — and then discover most local installers will not
        install customer-supplied equipment, and manufacturers may limit
        warranty registration on internet purchases. The useful homeowner
        work is around the job: getting three itemized quotes, insisting on
        the Manual J calculation, prepping access, and choosing the
        thermostat. Budget the full install to a pro; it is typically
        $1,500–$3,000 of labor protecting $4,000–$10,000 of equipment.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Almost always: AC replacement is permitted mechanical work in most
        jurisdictions ($150–$500), frequently with an electrical permit if
        the disconnect or circuit changes. The inspection checks clearances,
        condensate routing, and electrical sizing. A contractor suggesting
        you skip it is offering you a discount priced in future problems —
        unpermitted HVAC work is a standard finding in home-sale inspections
        and can complicate insurance claims after any electrical fire, related
        or not.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Like-for-like tonnage without a load calculation.</strong> The old unit was probably oversized. Oversizing buys short cycles, clammy air, and a bigger electric bill.</li>
        <li><strong>Mixing a new condenser with a tired old coil.</strong> Mismatched pairs lose efficiency and can void the matched-system warranty. A proper quote replaces both.</li>
        <li><strong>Choosing on equipment price alone.</strong> Installation quality — vacuum, charge, airflow — decides lifespan more than the brand badge does. Vet the installer harder than the unit.</li>
        <li><strong>Ignoring the ducts.</strong> New SEER2 18 equipment on ducts leaking 25% performs like SEER2 13. Ask for the duct inspection first.</li>
        <li><strong>Skipping the commissioning numbers.</strong> If superheat, subcooling, and static pressure are not on your paperwork, the install was not verified — ask before final payment.</li>
        <li><strong>Counting rebates as guaranteed.</strong> Verify 25C and utility eligibility yourself; a lapsed program turns a sharp quote into an average one.</li>
      </ul>
      <p>
        Compare at least three itemized quotes — same tonnage, same SEER2
        tier, named duct scope — and put the winner into a{" "}
        <a href="/quote">written quote</a> with the commissioning checklist
        attached. It is the biggest mechanical purchase most homes make in a
        decade; it should read like one.
      </p>

      <Faq items={faqs} heading="AC replacement questions, answered" />
    </GuideArticle>
  );
}
