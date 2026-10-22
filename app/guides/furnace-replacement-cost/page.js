import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Furnace Replacement Cost (2026)",
  description:
    "Furnace replacement costs $3,800–$10,000 in 2026. Compare gas, electric, oil and propane prices, AFUE efficiency tiers, and the repair-vs-replace math.",
  keywords: [
    "furnace replacement cost",
    "new furnace cost",
    "furnace installation cost",
    "how much does a furnace cost",
    "gas furnace replacement cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/furnace-replacement-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Furnace Replacement Cost (2026) | CalcBid",
    description:
      "Furnace replacement costs $3,800–$10,000 in 2026. Compare gas, electric, oil and propane prices, AFUE tiers, and the repair-vs-replace math.",
    url: "https://calcbid.com/guides/furnace-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnace Replacement Cost (2026) | CalcBid",
    description: "Furnace replacement costs $3,800–$10,000 in 2026. Compare gas, electric, oil and propane prices, AFUE tiers, and the repair-vs-replace math.",
  },
};

const faqs = [
  {
    q: "How long does it take to replace a furnace?",
    a: "A straightforward like-for-like replacement takes one day, usually 4–8 hours of on-site work. Add a day or two if you are switching fuel types, rerouting venting for a high-efficiency unit, or doing ductwork repairs at the same time. Schedule shoulder-season (spring or fall) if you can — installers have more availability and you are not negotiating while the house is freezing.",
  },
  {
    q: "What size furnace does my home need?",
    a: "Furnace size is measured in BTUs, and the right size depends on your home\u2019s square footage, insulation, and climate — not just square footage alone. A proper installer runs a Manual J load calculation rather than guessing from the old unit\u2019s label. Oversized furnaces short-cycle, waste fuel, and die early, so bigger is not better. Run your numbers through an HVAC BTU calculator before you sign anything.",
  },
  {
    q: "Is a 95% AFUE furnace worth the extra cost over an 80% model?",
    a: "In cold climates, usually yes. The upgrade from 80% to 95%+ AFUE adds roughly $1,500–$2,500 to the installed price and typically pays for itself in 5–8 years through lower fuel bills. In mild climates with short heating seasons, the payback stretches out and the 80% unit can be the smarter buy. One catch: 90%+ furnaces need PVC sidewall venting and a condensate drain, so confirm the venting change is included in your quote.",
  },
  {
    q: "Should I replace my furnace and air conditioner at the same time?",
    a: "If both are aging, yes — a furnace + AC combo runs $5,000–$15,000 installed, and sharing the labor, permits, and trip charges is meaningfully cheaper than two separate jobs. You also get a matched system, which runs quieter and hits its rated efficiency. If your AC is under 10 years old and healthy, keep it and revisit the combo math at its end of life.",
  },
  {
    q: "How long do furnaces last?",
    a: "Gas furnaces last 15–20 years, electric furnaces 20–30 years, and oil furnaces 15–25 years, assuming annual maintenance. Skipped filter changes and missed tune-ups shave years off every one of those ranges. Once a unit passes its expected lifespan and repairs start stacking up, replacement is usually the better financial move.",
  },
  {
    q: "Can I keep my existing ductwork and thermostat with a new furnace?",
    a: "Usually, yes on both — with caveats. Existing ducts are fine if they are correctly sized, sealed, and in good condition, but leaky or undersized ducts will strangle a brand-new furnace\u2019s performance, so have them inspected during the quote. Thermostats are cheap to upgrade and a modern programmable or smart thermostat is worth adding while the installer is already wiring.",
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
      title="Furnace Replacement Cost"
      description="What a new furnace costs in 2026 by fuel type, home size, and efficiency — plus the repair-vs-replace math and the mistakes that add thousands."
      slug="furnace-replacement-cost"
      updated="October 2026"
      calculatorHref="/calculators/hvac-btu-calculator"
      calculatorLabel="HVAC BTU calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing a furnace in 2026 costs <strong>$3,800–$10,000 installed</strong>{" "}
        for a natural gas unit — the most common type — with most homeowners
        paying around <strong>$5,500</strong>. Electric furnaces run
        $2,000–$7,000, oil $4,500–$9,000, and propane $4,000–$7,500. About{" "}
        <strong>60% of the total is equipment, 25% labor, and 15% permits,
        removal, and extras</strong>. If your furnace is past its expected
        lifespan, repair bills are stacking up, or your heating bills keep
        climbing while rooms stay cold, replacement usually beats another
        repair. Planning a full system refresh? Our{" "}
        <a href="/guides/ac-replacement-cost">AC replacement cost guide</a>{" "}
        covers the other half — a furnace + AC combo ($5,000–$15,000) shares
        labor and permits, which is the cheapest way to replace both.
      </p>

      <h2>2026 furnace replacement costs by fuel type</h2>
      <p>
        Fuel type is the single biggest price driver. Gas dominates because
        the equipment is mid-priced and the fuel is cheap to burn; electric is
        cheapest to install but most expensive to run.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fuel type</th>
            <th style={thStyle}>Installed cost (2026 US range)</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Natural gas</td>
            <td style={tdStyle}>$3,800–$10,000</td>
            <td style={tdStyle}>Most common; typical job lands around $5,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Electric</td>
            <td style={tdStyle}>$2,000–$7,000</td>
            <td style={tdStyle}>Cheapest to install; highest operating cost</td>
          </tr>
          <tr>
            <td style={tdStyle}>Oil</td>
            <td style={tdStyle}>$4,500–$9,000</td>
            <td style={tdStyle}>Common in the Northeast where gas is unavailable</td>
          </tr>
          <tr>
            <td style={tdStyle}>Propane</td>
            <td style={tdStyle}>$4,000–$7,500</td>
            <td style={tdStyle}>For rural homes without gas lines</td>
          </tr>
        </tbody>
      </table>
      <p>
        The operating-cost gap matters more than the install gap over a
        furnace&apos;s lifetime. Natural gas costs roughly{" "}
        <strong>one-third as much as electricity per BTU</strong> of heat
        delivered (about $1.20 per therm vs. $0.17 per kWh) — which is why an
        electric furnace that was cheap to install can cost far more to run
        for 20 years. Where the money goes on a typical job: equipment about
        60%, labor about 25%, and permits, old-unit removal, and extras about
        15%. Quotes that seem wildly cheap are usually missing one of those
        three buckets — ask which.
      </p>

      <h2>Furnace cost by home size</h2>
      <p>
        Furnaces are sized in BTUs (British thermal units) of heating output.
        These 2026 installed ranges assume a standard gas replacement; electric
        runs lower, oil and propane higher:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Home size</th>
            <th style={thStyle}>Furnace size</th>
            <th style={thStyle}>Typical installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>800–1,200 sq ft</td>
            <td style={tdStyle}>40,000–60,000 BTU</td>
            <td style={tdStyle}>$3,200–$5,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>1,200–2,000 sq ft</td>
            <td style={tdStyle}>60,000–90,000 BTU</td>
            <td style={tdStyle}>$3,800–$6,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000–3,000+ sq ft</td>
            <td style={tdStyle}>90,000–120,000 BTU</td>
            <td style={tdStyle}>$5,500–$7,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Square footage is only the starting point — insulation quality, window
        area, ceiling height, and climate zone all shift the right size. A
        good contractor runs a Manual J load calculation instead of copying
        the old unit&apos;s label (the old one may have been wrong for 20
        years). Oversizing is the classic homeowner-funded mistake: an
        oversized furnace short-cycles, wastes fuel, creates temperature
        swings, and wears out faster. Before you collect quotes, run your own
        estimate with the <a href="/calculators/hvac-btu-calculator">HVAC BTU
        calculator</a> so you can spot a bid that sizes by guesswork. And if
        your ducts are leaky or undersized, no furnace size fixes that — see
        our <a href="/guides/ductwork-installation-cost">ductwork installation
        cost guide</a> for what duct repairs add.
      </p>

      <h2>AFUE efficiency tiers: 80% vs. 90–96% vs. 97%+</h2>
      <p>
        AFUE (Annual Fuel Utilization Efficiency) tells you what share of the
        fuel becomes heat in your home. An 80% AFUE furnace wastes 20 cents of
        every fuel dollar up the flue; a 97% unit wastes three. The tier you
        pick is a bet on fuel prices and how long you&apos;ll own the home:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tier</th>
            <th style={thStyle}>AFUE</th>
            <th style={thStyle}>Furnace type</th>
            <th style={thStyle}>Installed cost (gas)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Standard</td>
            <td style={tdStyle}>80%</td>
            <td style={tdStyle}>Single-stage</td>
            <td style={tdStyle}>$3,500–$6,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>High efficiency</td>
            <td style={tdStyle}>90–96%</td>
            <td style={tdStyle}>Two-stage</td>
            <td style={tdStyle}>$5,000–$8,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Premium</td>
            <td style={tdStyle}>97%+</td>
            <td style={tdStyle}>Variable-speed modulating</td>
            <td style={tdStyle}>$6,500–$10,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Upgrading from 80% to 95%+ AFUE adds roughly{" "}
        <strong>$1,500–$2,500</strong> to the installed price and typically
        pays for itself in <strong>5–8 years in cold climates</strong> through
        lower fuel bills. In mild climates with short heating seasons, the
        payback stretches and the 80% unit is often the rational buy —
        don&apos;t let anyone upsell you efficiency you can&apos;t burn
        through. Two practical notes: two-stage and variable-speed furnaces
        also run quieter and heat more evenly (no more arctic bedrooms), and
        90%+ units vent through PVC pipe out a side wall instead of a metal
        chimney flue, so they need a condensate drain — confirm the venting
        change is itemized in your quote rather than discovered on install
        day. In mild climates, also price the alternative: a{" "}
        <a href="/guides/heat-pump-installation-cost">heat pump</a> can heat
        and cool in one box and may beat a furnace on lifetime cost where
        winters are gentle.
      </p>

      <h2>How furnace replacement works, step by step</h2>
      <p>
        Most replacements are a one-day job (4–8 hours on site). Here&apos;s
        what actually happens, in order:
      </p>
      <ol>
        <li><strong>Assessment and load calculation.</strong> The contractor measures your home, inspects the ductwork, checks gas line capacity, and runs a Manual J to size the unit. Get three quotes — they should all land on roughly the same BTU size.</li>
        <li><strong>Permits.</strong> Your contractor pulls a mechanical permit (typically $50–$150) and schedules any required inspection. This is their job, not yours — but confirm it&apos;s in the quote.</li>
        <li><strong>Old unit removal.</strong> Power and gas are shut off and locked out, the gas line is capped, venting and duct connections are separated, and the old furnace is hauled out. Ductwork gets a visual inspection while it&apos;s exposed.</li>
        <li><strong>New unit set and connected.</strong> The furnace is positioned and leveled, then tied into the gas line, 120V electrical, venting (PVC sidewall for 90%+ units, metal flue for 80%), condensate drain, and the supply/return duct plenums.</li>
        <li><strong>Thermostat.</strong> The old thermostat is rewired or replaced — most homeowners add a programmable or smart thermostat at this point since the installer is already at the wiring.</li>
        <li><strong>Startup and testing.</strong> The tech fires the unit, checks combustion, measures airflow and temperature rise across the heat exchanger, tests all safety switches, and checks for carbon monoxide at the vents and registers.</li>
        <li><strong>Walkthrough and inspection.</strong> You get a tour of the new equipment, filter-change instructions, and warranty paperwork. If your municipality requires it, the inspector signs off — usually within a few days.</li>
      </ol>
      <p>
        The timeline stretches to two or three days when the job includes
        ductwork modifications, a fuel-type switch (say, oil to gas), or
        relocating the furnace. If the quote includes duct repairs, compare it
        against standalone pricing in our{" "}
        <a href="/guides/ductwork-installation-cost">ductwork installation
        cost guide</a> so you know the duct portion is fairly priced.
      </p>

      <h2>Furnace brands by price tier</h2>
      <p>
        Installed ranges below reflect typical 2026 pricing for the furnace
        type each brand is known for. Installation quality moves the needle
        more than the badge on the cabinet — a perfect install of a
        budget-tier unit beats a sloppy install of a premium one:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tier</th>
            <th style={thStyle}>Brand example</th>
            <th style={thStyle}>Installed range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Budget single-stage gas</td>
            <td style={tdStyle}>Goodman</td>
            <td style={tdStyle}>$3,500–$6,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Midrange two-stage</td>
            <td style={tdStyle}>Carrier</td>
            <td style={tdStyle}>$5,000–$8,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Premium variable-speed</td>
            <td style={tdStyle}>Lennox</td>
            <td style={tdStyle}>$6,500–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Mid-premium</td>
            <td style={tdStyle}>Trane</td>
            <td style={tdStyle}>$5,500–$9,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Electric</td>
            <td style={tdStyle}>Rheem</td>
            <td style={tdStyle}>$2,500–$5,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        What to verify beyond the brand: a 10-year parts warranty (standard
        across major brands once you register the unit — unregistered units
        often drop to 5 years), a labor warranty of at least one to two years
        from the installer, and a contractor who is licensed, insured, and
        willing to show the Manual J. For a single room or an addition that
        the central system can&apos;t reach, a{" "}
        <a href="/guides/mini-split-installation-cost">mini-split</a> is often
        cheaper than extending ductwork — worth pricing before you upsize the
        furnace to cover one cold room.
      </p>

      <h2>Repair vs. replace: the 1/3 rule</h2>
      <p>
        Typical furnace repairs run <strong>$300–$1,200</strong>. The
        industry&apos;s rule of thumb: if a repair costs more than about{" "}
        <strong>one-third of a replacement</strong>, replace the unit instead.
        A $1,500 repair on a furnace that costs $5,000 to replace fails the
        test; a $400 repair on a 10-year-old unit passes it. Age sharpens the
        math — expected lifespans are <strong>15–20 years for gas, 20–30 for
        electric, and 15–25 for oil</strong>.
      </p>
      <p>Replace rather than repair when you see these signs:</p>
      <ul>
        <li><strong>The unit is past its expected lifespan</strong> and repairs are becoming annual events. Money spent on a 22-year-old gas furnace is money you won&apos;t get back.</li>
        <li><strong>Heating bills are climbing</strong> while comfort is falling — the classic signature of a heat exchanger or burner losing efficiency.</li>
        <li><strong>Rooms heat unevenly</strong> despite a clean filter and open registers, pointing to airflow or capacity problems the unit can&apos;t overcome.</li>
        <li><strong>A cracked heat exchanger.</strong> This is the non-negotiable one: cracks can leak carbon monoxide into your home&apos;s air. Replacement is the only safe answer, and it&apos;s urgent.</li>
        <li><strong>Frequent cycling, new noises, or visible rust and soot</strong> around the cabinet — all late-life symptoms.</li>
      </ul>
      <p>
        Repair makes sense for a younger unit facing its first major failure,
        especially when the fix is under a few hundred dollars. Keep up annual
        maintenance either way — a yearly tune-up is the cheapest life
        extension a furnace gets.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Buying on price alone.</strong> The cheapest bid often skips the load calculation, reuses questionable venting, or buries the permit fee. A furnace lives 15–20 years — the lowest bid is rarely the lowest cost.</li>
        <li><strong>Oversizing &ldquo;just in case.&rdquo;</strong> An oversized furnace short-cycles, wastes fuel, swings temperatures, and dies young. Trust the Manual J, not the instinct that bigger is safer.</li>
        <li><strong>Ignoring the venting change on 90%+ units.</strong> High-efficiency furnaces abandon the chimney for PVC sidewall venting plus a condensate drain. If it&apos;s not itemized in the quote, it becomes a surprise change order on install day.</li>
        <li><strong>Skipping the combo conversation.</strong> If your AC is also aging, a furnace + AC combo ($5,000–$15,000) shares labor and permits. Replacing them a year apart means paying for two installations.</li>
        <li><strong>Skipping the permit.</strong> Unpermitted mechanical work can void your homeowner&apos;s insurance claim, fail a home inspection at sale time, and draw fines. It&apos;s $50–$150 — not worth skipping.</li>
        <li><strong>Not registering the warranty.</strong> Most brands cut the parts warranty roughly in half if you never register the unit. It takes ten minutes online and doubles your coverage.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Be blunt about this: <strong>gas and oil furnace installation is
        pro-only work.</strong> It involves gas piping, combustion tuning,
        venting design, and carbon monoxide safety — mistakes can be lethal,
        most jurisdictions legally require a licensed contractor, and
        manufacturers void the warranty on owner-installed units. Electric
        furnaces are mechanically simpler but still involve 240V high-amperage
        wiring, code compliance, and permits; a licensed HVAC contractor or
        electrician is the right call there too.
      </p>
      <p>
        Where homeowners can legitimately save money is around the edges of
        the job: clearing the work area and a path to it before the crew
        arrives, handling the thermostat swap yourself if you&apos;re
        comfortable with low-voltage wiring, and changing filters on schedule
        afterward so the new unit actually reaches its rated lifespan. None
        of these replace the licensed install — they just trim the labor
        hours you&apos;re paying for. Get three itemized quotes, and be wary
        of any bid that won&apos;t put equipment model numbers in writing.
      </p>

      <h2>Do you need a permit to replace a furnace?</h2>
      <p>
        In most US municipalities, yes — furnace replacement requires a
        mechanical permit, typically <strong>$50–$150</strong>. The permit
        covers the gas connection, venting, and electrical work, and triggers
        an inspection that verifies the install is safe and to code. Your
        contractor should pull it as part of the job; confirm it&apos;s in
        the quote rather than assumed. Skipping it risks insurance claim
        denials, failed home inspections when you sell, and municipal fines.
        Rules vary by city and county, so check your municipality&apos;s
        building department if a contractor ever tells you a permit
        isn&apos;t needed — that&apos;s a red flag, not a discount.
      </p>
      <p>
        Ready to size your system? Run the{" "}
        <a href="/calculators/hvac-btu-calculator">HVAC BTU calculator</a> to
        estimate the right furnace size for your home, then turn the numbers
        into a <a href="/quote">quote</a> you can send to contractors for
        apples-to-apples bids.
      </p>

      <Faq items={faqs} heading="Furnace replacement questions, answered" />
    </GuideArticle>
  );
}
