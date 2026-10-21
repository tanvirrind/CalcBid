import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Pressure Washing Cost Per Square Foot (2026)",
  description:
    "Pressure washing costs $0.15–$0.50 per sq ft. Pricing by surface — house, driveway, deck, roof — plus minimums and what drives the quote.",
  keywords: [
    "pressure washing cost per square foot",
    "how much does pressure washing cost",
    "pressure washing prices 2026",
    "cost to pressure wash house",
  ],
  alternates: { canonical: "https://calcbid.com/guides/pressure-washing-cost-per-square-foot" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Pressure Washing Cost Per Square Foot | CalcBid",
    description:
      "$0.15–$0.50 per sq ft. Pricing by surface, minimums, and what drives the quote.",
    url: "https://calcbid.com/guides/pressure-washing-cost-per-square-foot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Cost Per Square Foot (2026) | CalcBid",
    description: "$0.15–$0.50 per sq ft. Pricing by surface, minimums, and what drives the quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to pressure wash a house?",
    a: "A 2,000 sq ft home costs $200–$600 to wash, at $0.15–$0.50 per square foot depending on siding type and condition. Two-story homes run higher for the extra setup and reach. Most companies charge a $100–$150 minimum regardless of size.",
  },
  {
    q: "How much does it cost to pressure wash a driveway?",
    a: "A standard 2-car concrete driveway (400–600 sq ft) costs $100–$300 at $0.15–$0.30 per sq ft. Oil stains, rust, and heavy mildew add $50–$100 for chemical treatment and a second pass. Sealing afterward runs another $0.15–$0.30 per sq ft.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high-pressure water for hard surfaces like concrete and pavers. Soft washing uses low pressure plus cleaning solutions for delicate surfaces — roofs, siding, stucco, and painted wood. Soft washing costs more ($0.25–$0.60 per sq ft) because you're paying for chemistry and care, not just water. Never pressure-wash a roof; it voids shingle warranties.",
  },
  {
    q: "How often should a house be pressure washed?",
    a: "Every 1–2 years in most climates; annually in humid regions where algae and mildew grow fast, or under heavy tree cover. Driveways and walkways can go 2–3 years. Regular washing prevents the deep staining that requires aggressive (and expensive) restoration cleaning.",
  },
  {
    q: "Can pressure washing damage siding or concrete?",
    a: "Yes — too much pressure etches concrete, strips paint, forces water behind siding, and destroys wood grain. This is why pros soft-wash siding and roofs. If a bid seems suspiciously cheap, ask about their method: the damage from a careless operator costs far more than the wash saved.",
  },
  {
    q: "Should I bundle pressure washing with other services?",
    a: "Yes — it's the highest-ROI upsell in exterior work. Washing before painting is standard prep; driveway sealing after washing doubles the ticket; gutter cleaning pairs naturally. Contractors: bundle pricing wins jobs because the mobilization cost is already covered.",
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
      title="Pressure Washing Cost Per Square Foot"
      description="What pressure washing really costs by surface — plus the minimums, the soft-wash premium, and the upsells that double the ticket."
      slug="pressure-washing-cost-per-square-foot"
      updated="October 2026"
      calculatorHref="/calculators/pressure-washing-calculator"
      calculatorLabel="Estimate the wash"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Pressure washing costs <strong>$0.15–$0.50 per square foot</strong>{" "}
        for most residential work, with the average house wash landing at{" "}
        <strong>$200–$600</strong>. The per-foot rate is set by the surface:
        flat concrete is fast and cheap, roofs and delicate siding need soft
        washing at a premium. Nearly every operator also charges a{" "}
        <strong>$100–$150 minimum</strong> — small jobs price on mobilization,
        not square footage.
      </p>

      <h2>Pressure washing prices by surface</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Surface</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>Typical job total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Driveway / concrete flatwork</td>
            <td style={tdStyle}>$0.15–$0.30</td>
            <td style={tdStyle}>$100–$300</td>
          </tr>
          <tr>
            <td style={tdStyle}>House siding (soft wash)</td>
            <td style={tdStyle}>$0.25–$0.50</td>
            <td style={tdStyle}>$200–$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Deck / patio</td>
            <td style={tdStyle}>$0.25–$0.50</td>
            <td style={tdStyle}>$150–$400</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fence</td>
            <td style={tdStyle}>$0.20–$0.40</td>
            <td style={tdStyle}>$150–$350</td>
          </tr>
          <tr>
            <td style={tdStyle}>Roof (soft wash only)</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>$300–$700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Gutters (exterior)</td>
            <td style={tdStyle}>—</td>
            <td style={tdStyle}>$55–$160</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two-story homes add 20–40% for ladder work, safety setup, and slower
        production. Heavy algae, oil stains, and rust push any surface toward
        the top of its range — chemical treatment and second passes are real
        labor, not padding.
      </p>

      <h2>What moves the price</h2>
      <ul>
        <li><strong>Condition:</strong> light dust is a rinse; black algae streaks and moss need dwell time and chemicals. Quote from photos when you can, but confirm on site.</li>
        <li><strong>Access:</strong> steep slopes, delicate landscaping, and no nearby spigot all slow the job. Note water access during the estimate.</li>
        <li><strong>Stories:</strong> anything above the first floor needs ladders or poles, safety gear, and slower passes. Price it, don&apos;t absorb it.</li>
        <li><strong>Size paradox:</strong> per-foot rates drop as jobs get bigger — mobilization is fixed. A 500 sq ft driveway and a 2,000 sq ft house wash don&apos;t scale linearly.</li>
        <li><strong>Region:</strong> humid Southeast markets wash more often and price competitively; arid markets wash less but charge more per job.</li>
      </ul>

      <h2>Soft wash vs pressure wash (price it right)</h2>
      <p>
        This distinction is both a quality issue and a pricing one. High
        pressure on siding, stucco, roofs, or painted wood causes damage that
        costs 10× the wash to fix — stripped paint, etched concrete, voided
        shingle warranties. Soft washing (low pressure + detergents) is the
        correct method for all of these, and it commands $0.25–$0.60 per sq
        ft because you&apos;re selling chemistry, dwell time, and care — not
        just water volume. Name the method on the quote; educated clients pay
        the premium willingly.
      </p>

      <h2>The upsells that double the ticket</h2>
      <ul>
        <li><strong>Concrete sealing</strong> after driveway washing: $0.15–$0.30 per sq ft. Same trip, high margin, genuine value.</li>
        <li><strong>Gutter cleaning</strong> with a house wash: $55–$160. You&apos;re already on the ladder.</li>
        <li><strong>Pre-paint washing:</strong> the standard prep step — see our <a href="/guides/how-to-quote-pressure-washing-job">pressure washing quoting guide</a> for the contractor-side math.</li>
        <li><strong>Recurring plans:</strong> annual house washes booked in advance. The cheapest customer to serve is the one you already have.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>No minimum charge.</strong> A $40 driveway wash that costs you an hour of driving is charity. $100–$150 minimum, always.</li>
        <li><strong>Quoting per foot on tiny jobs.</strong> Minimums exist because mobilization doesn&apos;t scale. Small job = minimum price.</li>
        <li><strong>Pressure-washing roofs.</strong> It strips granules and voids warranties. Soft wash only — and say so on the quote.</li>
        <li><strong>Skipping the plant rinse.</strong> Cleaning chemicals kill landscaping. Pre-wet and post-rinse every plant near the work area, or buy replacements.</li>
        <li><strong>No before photos.</strong> Photograph existing damage (cracked siding, stained concrete that won&apos;t fully lift) before you start. Disputes die in the face of timestamps.</li>
        <li><strong>Forgetting water supply.</strong> Confirm spigot access and water pressure at booking. Showing up to a dry spigot burns the whole appointment.</li>
      </ul>
      <p>
        Price it in the{" "}
        <a href="/calculators/pressure-washing-calculator">pressure washing
        calculator</a> and send the quote from the{" "}
        <a href="/quote">quote builder</a> before you leave the curb.
        Contractors: the per-foot rates above are homeowner-facing — your
        internal math (chemicals, fuel, drive time, equipment wear) lives in
        our <a href="/guides/how-to-quote-pressure-washing-job">quoting
        guide</a>.
      </p>

      <h2>Regional pricing: the same job in five markets</h2>
      <p>
        The national ranges on this page — <strong>$0.15–$0.30 per sq ft</strong> for
        driveways and <strong>$0.25–$0.50 per sq ft</strong> for a house soft wash — shift
        noticeably by market, and the reason is competition as much as labor cost. In the
        Southeast and Florida, humid weather grows algae fast, homeowners wash annually, and
        dozens of operators compete in every suburb. That volume keeps a standard house wash
        near the <strong>low end of the range, often $200–$350</strong> for a typical
        single-story home, and driveways near <strong>$0.15–$0.22 per sq ft</strong>. In the
        Midwest, where washing is a spring ritual rather than a year-round service, the same
        jobs usually land mid-range: house washes around <strong>$300–$450</strong> and
        flatwork around <strong>$0.20–$0.28 per sq ft</strong>.
      </p>
      <p>
        The Northeast and West Coast run higher because labor, insurance, and travel time
        cost more and the season is shorter. Expect house washes toward{" "}
        <strong>$400–$600</strong>, decks toward the top of the{" "}
        <strong>$150–$400</strong> range, and driveway work closer to{" "}
        <strong>$0.25–$0.30 per sq ft</strong>. Mountain and desert markets sit in between:
        fewer algae problems, but longer drives between jobs push quotes up. Wherever you
        live, compare the <strong>minimum-service fee</strong> before you compare per-foot
        rates. On a small walkway or a one-car driveway pad, every credible bid will simply
        be the company&apos;s <strong>$100–$150 minimum</strong> — the per-foot math never
        gets a chance to matter. Bundling two or three surfaces into one visit is how small
        jobs escape the minimum trap, because the crew is already set up.
      </p>

      <h2>A full worked quote: one house, four surfaces</h2>
      <p>
        Here is how the rates in the table above stack into a real invoice. Take a
        single-story, 1,800 sq ft home with vinyl siding, a 600 sq ft concrete driveway, a
        300 sq ft wood deck, and a short front walkway of about 80 sq ft. Priced line by
        line at mid-range rates: the siding soft wash is 1,800 sq ft of home at the house-wash
        band — most companies quote it as a flat <strong>$300–$400</strong> rather than a
        strict per-foot figure, call it <strong>$350</strong>. The driveway at{" "}
        <strong>$0.22 per sq ft</strong> comes to about <strong>$132</strong>. The deck at{" "}
        <strong>$0.35 per sq ft</strong> — mid-range for the $0.25–$0.50 deck band, because
        wood needs lower pressure and a slower pass — comes to about <strong>$105</strong>.
        The walkway alone would trigger the minimum, but bundled into this visit it is
        typically priced at the driveway rate: 80 sq ft at $0.22 is about{" "}
        <strong>$18</strong>, and many operators round it into the job or charge a nominal{" "}
        <strong>$25–$50</strong>.
      </p>
      <p>
        Added up without any discount, the four lines total roughly{" "}
        <strong>$605–$655</strong>. Most companies offer a package discount of{" "}
        <strong>10–15%</strong> when three or more surfaces are done in one visit, because
        setup, water hookup, and chemical mixing happen once. At 10% off, the ticket lands
        around <strong>$545–$590</strong>; at 15% off, around <strong>$515–$555</strong>.
        Add concrete sealing on the driveway afterward at $0.15–$0.30 per sq ft and the same
        visit grows by <strong>$90–$180</strong>. The lesson for homeowners: the cheapest way
        to buy pressure washing is rarely the cheapest per-foot rate — it is one visit, several
        surfaces, and a package price. Get the combined number in the{" "}
        <a href="/quote">quote builder</a> before the crew rolls.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        For ordinary residential washing, <strong>no permit is required</strong> in most US
        cities — you are cleaning your own property with water and detergent, not building
        anything. The rules that do exist are about wastewater, not permission. Many cities
        prohibit wash water carrying oil, paint chips, or chemicals from flowing into storm
        drains, and commercial jobs — storefronts, parking garages, fleet washing — often
        require wastewater capture or reclaim systems under local clean-water ordinances.
        Enforcement and specifics vary widely, so a pro working commercially should check the
        city public-works rules once, not per job. Homeowner associations add a second layer:
        some HOAs restrict washing to certain days or daytime hours, and a few require notice
        for roof soft washing. A quick look at your HOA rules avoids the only
        &ldquo;permit&rdquo; problem most homeowners will ever meet.
      </p>

      <h2>When to book (and when pros discount)</h2>
      <p>
        Demand peaks in <strong>spring</strong>, when pollen, winter grime, and listing season
        collide — popular operators book out <strong>2–3 weeks</strong> in March through May,
        and prices sit at the top of every range on this page. The discount window is{" "}
        <strong>late summer into fall</strong>: the spring rush is over, crews want to fill
        schedules before winter, and 10–20% off package work is common, especially on bundled
        house-plus-driveway jobs. In warm climates, a mid-winter wash is the quiet bargain of
        the year. Book early in peak season, bundle surfaces, and ask about the fall rate.
      </p>

      <Faq items={faqs} heading="Pressure washing questions, answered" />
    </GuideArticle>
  );
}
