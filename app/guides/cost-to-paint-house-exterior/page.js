import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Paint a House Exterior in 2026",
  description:
    "Exterior house painting costs $3,000–$10,000 for most homes. Per-sq-ft pricing by siding, size tables, and what moves the quote.",
  keywords: [
    "cost to paint house exterior",
    "exterior house painting cost",
    "how much does it cost to paint the exterior of a house",
    "house painting cost 2026",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-paint-house-exterior" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Paint a House Exterior in 2026 | CalcBid",
    description:
      "$3,000–$10,000 for most homes. Per-sq-ft pricing by siding, size tables, and what moves the quote.",
    url: "https://calcbid.com/guides/cost-to-paint-house-exterior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Paint a House Exterior in 2026 | CalcBid",
    description: "$3,000–$10,000 for most homes. Per-sq-ft pricing by siding, size tables, and what moves the quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to paint the exterior of a house?",
    a: "Most homeowners pay $3,000–$10,000 for a professional exterior paint job in 2026, or $1.50–$5.00 per square foot of paintable surface. A 2,000 sq ft home with light prep runs $3,000–$5,000; heavy prep, repairs, and two stories push it to $7,500–$12,000.",
  },
  {
    q: "How much does it cost to paint a house exterior per square foot?",
    a: "$1.50–$5.00 per square foot of paintable wall area, including labor and materials. Wood and stucco land higher ($2–$5) than vinyl ($1.50–$4.50) because of prep and absorption. Note: that's wall square footage, not floor square footage — a 2,000 sq ft home has roughly 1,500–1,700 sq ft of paintable wall.",
  },
  {
    q: "Is it cheaper to paint a house yourself?",
    a: "Materials for a 2,000 sq ft exterior run $800–$2,500 DIY versus $3,000–$10,000 professionally. You save the 70–90% that's labor — but a DIY exterior takes 1–2 weeks of full days, requires ladders or scaffolding for two stories, and mistakes (wrong prep, bad weather window) are expensive to fix.",
  },
  {
    q: "How long does exterior paint last?",
    a: "5–10 years. Wood siding needs repainting every 5–7 years; stucco and brick stretch to 7–10 with quality acrylic paint. South- and west-facing walls fail first from UV exposure. Proper prep — washing, scraping, caulking — extends life more than upgrading the paint brand.",
  },
  {
    q: "Does painting a house exterior increase home value?",
    a: "Yes — it's one of the highest-ROI improvements. Fresh exterior paint typically returns 60–100% of its cost in home value and significantly boosts curb appeal for listings. Neutral colors perform best for resale; bold colors are a personal choice, not an investment.",
  },
  {
    q: "What time of year is best to paint a house exterior?",
    a: "Late spring through early fall in most climates — consistently between 50°F and 90°F with low rain risk. Avoid painting in direct midday heat (paint flashes dry and fails to bond) and stop 2–3 hours before evening dew. Fall is often ideal: mild temps, lower humidity, and painters have more availability.",
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
      title="Cost to Paint a House Exterior in 2026"
      description="What an exterior paint job really costs: per-square-foot pricing by siding, size-by-size totals, and the prep levels that decide the number."
      slug="cost-to-paint-house-exterior"
      updated="October 2026"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Estimate the paint"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Professional exterior painting costs <strong>$3,000–$10,000</strong>{" "}
        for most homes in 2026, or <strong>$1.50–$5.00 per square foot</strong>{" "}
        of paintable wall area. The spread isn&apos;t random — it&apos;s prep.
        A sound one-story ranch in the same color is a $3,500 job; a peeling
        two-story with repairs and a color change is $10,000+. Labor is
        70–90% of every quote, which means comparing bids without comparing
        scopes is meaningless.
      </p>

      <h2>Exterior painting cost by house size</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Home size</th>
            <th style={thStyle}>Paintable wall (approx)</th>
            <th style={thStyle}>Pro cost range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1,000 sq ft</td>
            <td style={tdStyle}>800 sq ft</td>
            <td style={tdStyle}>$1,200–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>1,500 sq ft</td>
            <td style={tdStyle}>1,200 sq ft</td>
            <td style={tdStyle}>$1,800–$6,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000 sq ft</td>
            <td style={tdStyle}>1,700 sq ft</td>
            <td style={tdStyle}>$2,600–$8,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,500 sq ft</td>
            <td style={tdStyle}>2,100 sq ft</td>
            <td style={tdStyle}>$3,200–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>3,000 sq ft</td>
            <td style={tdStyle}>2,500 sq ft</td>
            <td style={tdStyle}>$3,800–$12,500</td>
          </tr>
        </tbody>
      </table>

      <h2>Cost by siding material (per sq ft, installed)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Siding</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Vinyl</td>
            <td style={tdStyle}>$1.50–$4.50</td>
            <td style={tdStyle}>Fast prep, but check warranty — painting can void it</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood</td>
            <td style={tdStyle}>$1.50–$5.00</td>
            <td style={tdStyle}>Scraping, sanding, and spot-priming add labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Aluminum</td>
            <td style={tdStyle}>$2.00–$4.50</td>
            <td style={tdStyle}>Needs proper etching primer for adhesion</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stucco</td>
            <td style={tdStyle}>$2.00–$5.00</td>
            <td style={tdStyle}>Porous — drinks paint; elastomeric costs more</td>
          </tr>
          <tr>
            <td style={tdStyle}>Brick</td>
            <td style={tdStyle}>$2.50–$5.00</td>
            <td style={tdStyle}>Highest absorption; often needs masonry primer</td>
          </tr>
        </tbody>
      </table>

      <h2>The three prep levels (this is the price)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Prep level</th>
            <th style={thStyle}>Includes</th>
            <th style={thStyle}>2,000 sq ft home</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Light</strong></td>
            <td style={tdStyle}>Wash, minor caulk, two coats, same color family</td>
            <td style={tdStyle}>$3,000–$5,000</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Standard</strong></td>
            <td style={tdStyle}>Wash, scrape, sand, prime spots, caulk, two coats</td>
            <td style={tdStyle}>$5,000–$7,500</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Heavy</strong></td>
            <td style={tdStyle}>Repairs, full prime or color change, multi-story access</td>
            <td style={tdStyle}>$7,500–$12,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        When quotes differ by thousands, the gap is almost always prep — or
        one bidder quietly planning one coat. Ask every bidder: how many
        coats, what prep is included, and what paint line. The answers tell
        you more than the totals.
      </p>

      <h2>What else moves the number</h2>
      <ul>
        <li><strong>Stories:</strong> two-story homes add 20–40% for ladders, scaffolding, and slower production.</li>
        <li><strong>Color change:</strong> dark-to-light (or reverse) needs primer or a third coat — add 20–30%.</li>
        <li><strong>Trim density:</strong> heavy trim, shutters, and decorative brackets are slow detail work. Count linear feet.</li>
        <li><strong>Repairs:</strong> rotted fascia, damaged siding, failed caulk. Price a repair allowance upfront — see our <a href="/guides/how-to-handle-change-orders">change order guide</a>.</li>
        <li><strong>Region:</strong> high-cost metros run 30–50% above national averages; the Southeast and Midwest run below.</li>
      </ul>

      <h2>DIY vs pro</h2>
      <p>
        DIY materials for a 2,000 sq ft exterior: <strong>$800–$2,500</strong>{" "}
        (paint at $50–$100/gallon, primer, tape, drop cloths, brushes, ladder
        or sprayer rental). The savings are real but so is the time: 1–2
        weeks of full days for a first-timer, plus the risk profile —
        wrong-weather painting, skipped prep, and ladder work are how DIY
        exteriors fail early. Two stories strongly favor hiring out unless
        you own the equipment and the nerve. For realistic timelines, see{" "}
        <a href="/guides/how-long-does-it-take-to-paint-a-house">how long it
        takes to paint a house</a> — and for whole-home numbers including
        interiors, our <a href="/guides/cost-to-paint-a-house">cost to paint
        a house guide</a>.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Comparing totals without scopes.</strong> A $3,500 one-coat bid is more expensive than a $5,500 proper two-coat job — the cheap one peels in two years.</li>
        <li><strong>Skipping the wash.</strong> Paint bonds to clean surfaces. A $200 wash prevents a $5,000 premature failure.</li>
        <li><strong>Painting vinyl a dark color.</strong> Dark paint absorbs heat and warps vinyl siding. Check the manufacturer&apos;s approved color range.</li>
        <li><strong>Ignoring the weather window.</strong> 50–90°F, no rain 24–48 hours after. A rained-on coat is a re-do.</li>
        <li><strong>No written color approval.</strong> &ldquo;I thought it&apos;d be lighter&rdquo; after two coats is a $2,000 conversation. Sample boards, signed off, before day one.</li>
        <li><strong>Forgetting the ROI math.</strong> At 60–100% return, exterior paint is one of the cheapest ways to lift a listing price — don&apos;t cheap out before a sale.</li>
      </ul>
      <p>
        Planning the gallons? Our{" "}
        <a href="/guides/how-much-paint-for-exterior-2000-sqft-house">exterior
        paint quantity guide</a> breaks down exactly what a 2,000 sq ft home
        needs. Run your numbers in the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a>, and
        contractors can price the labor side in our{" "}
        <a href="/guides/how-to-quote-a-painting-job">painting quoting guide</a>.
      </p>      <p>
        Contractors: run your numbers in the <a href="/calculators/paint-calculator">paint calculator</a>, then <a href="/quote">build the quote</a> — measurements in, professional number out.
      </p>



      <Faq items={faqs} heading="Exterior painting cost questions, answered" />
    </GuideArticle>
  );
}
