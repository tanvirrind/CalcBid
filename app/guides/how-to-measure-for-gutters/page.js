import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Measure for Gutters (2026)",
  description:
    "How to measure for gutters: eave runs, downspout placement, slope, sizing from roof area, and the material takeoff that prevents mid-job shortages.",
  keywords: [
    "how to measure for gutters",
    "measuring gutters for replacement",
    "gutter measurement guide",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-measure-for-gutters" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Measure for Gutters | CalcBid",
    description:
      "Eave runs, downspout placement, slope, sizing from roof area, and the material takeoff that prevents shortages.",
    url: "https://calcbid.com/guides/how-to-measure-for-gutters",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Measure for Gutters (2026) | CalcBid",
    description: "Eave runs, downspout placement, slope, sizing from roof area, and the material takeoff.",
  },
};

const faqs = [
  {
    q: "How do you measure gutters for replacement?",
    a: "Measure each eave run separately with a tape measure — never work from one perimeter number. Record the length of every straight run, count inside and outside corners, and measure downspout drops from gutter to ground. Add 10% waste for cuts and overlap. Most homes have 125–200 linear feet of gutter.",
  },
  {
    q: "How many downspouts do I need?",
    a: "Plan one downspout per 30–40 feet of gutter, with a minimum of two per house. Long runs over 40 feet need a downspout at each end with the gutter pitched from the middle. Valleys and upper roofs that dump concentrated water onto one section may need an extra downspout even on short runs.",
  },
  {
    q: "What size gutters do I need — 5 inch or 6 inch?",
    a: "5-inch K-style handles most homes with moderate rainfall. Step up to 6-inch for steep roofs (water sheds faster), large roof areas draining into one run, or heavy-rainfall regions. When in doubt, 6-inch costs only slightly more and dramatically reduces overflow risk — it's the most common upsell in the trade for good reason.",
  },
  {
    q: "How much slope should gutters have?",
    a: "1/4 inch of drop per 10 feet toward the downspout — the standard manufacturer spec. Too little slope and water ponds; too much and it looks crooked from the ground. On runs over 40 feet, pitch from the middle down to a downspout at each end.",
  },
  {
    q: "How far apart should gutter hangers be?",
    a: "Every 24 inches on center for standard installations, tightened to 18 inches in heavy snow or ice regions. Hidden hangers screwed into the fascia outperform old spike-and-ferrule systems — if you're replacing gutters, replace the fastening system too.",
  },
  {
    q: "Can I measure gutters without a ladder?",
    a: "For a rough estimate, yes: measure the house footprint at ground level and add the roof overhang (typically 1–2 feet per side), or use satellite imagery. But order materials from ladder-verified measurements — ground estimates miss dormers, bump-outs, and exact downspout positions, and a 10-foot shortage stalls the whole job.",
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
      title="How to Measure for Gutters"
      description="The contractor's measuring method: run-by-run eave measurements, downspout math, sizing from drainage area, and a takeoff that orders everything in one trip."
      slug="how-to-measure-for-gutters"
      calculatorHref="/calculators/gutter-calculator"
      calculatorLabel="Calculate gutter materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Measuring for gutters has two parts: <strong>linear footage</strong>{" "}
        (how much gutter to order) and <strong>drainage sizing</strong> (whether
        that gutter can handle the roof's water). Most bad gutter jobs trace
        back to skipping the second part — the footage was right, but a single
        downspout on a 60-foot run guaranteed overflow every storm. Measure
        each eave run separately, size from the roof area draining into it,
        and your material order lands right the first time.
      </p>

      <h2>Step 1: Measure each eave run</h2>
      <p>
        Work run by run, not from a single perimeter number. Walk the house
        with a tape measure and record:
      </p>
      <ul>
        <li><strong>Each straight run's length</strong> in feet and inches — label them (front-left, rear, garage) so the order matches the house.</li>
        <li><strong>Inside and outside corners</strong> — count them; each needs a miter or corner piece.</li>
        <li><strong>End caps</strong> — two per run that doesn't terminate in a corner.</li>
        <li><strong>Downspout positions</strong> — mark where each drop goes and measure from gutter to ground, including elbows.</li>
      </ul>
      <p>
        Add <strong>10% waste</strong> to the total footage for cuts, overlap,
        and the piece you miscut at 4 PM. A 180-foot takeoff orders 200 feet.
      </p>

      <h2>Step 2: Place the downspouts</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Run length</th>
            <th style={thStyle}>Downspout plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Under 30 ft</td>
            <td style={tdStyle}>One downspout at the low end</td>
          </tr>
          <tr>
            <td style={tdStyle}>30–40 ft</td>
            <td style={tdStyle}>One downspout; consider two in heavy rain regions</td>
          </tr>
          <tr>
            <td style={tdStyle}>Over 40 ft</td>
            <td style={tdStyle}>Downspout at each end, gutter pitched from the middle</td>
          </tr>
          <tr>
            <td style={tdStyle}>Valley dumping onto a run</td>
            <td style={tdStyle}>Dedicated downspout near the valley, regardless of length</td>
          </tr>
        </tbody>
      </table>
      <p>
        Minimum two downspouts per house, and discharge each at least 5 feet
        from the foundation — dumping roof water next to the foundation
        defeats the entire purpose of gutters.
      </p>

      <h2>Step 3: Size from the drainage area</h2>
      <p>
        Gutters are sized by the roof area draining into them, not the house
        perimeter. A useful rule: one square foot of roof sheds about 0.62
        gallons per inch of rain — so 1,000 sq ft of roof dumps roughly 620
        gallons in a 1-inch storm. Size up when:
      </p>
      <ul>
        <li><strong>Steep roofs</strong> — water arrives faster and overshoots 5-inch gutters.</li>
        <li><strong>Large roof planes</strong> draining into a single run.</li>
        <li><strong>Heavy-rainfall regions</strong> — check local rainfall intensity data.</li>
        <li><strong>Valleys concentrating flow</strong> onto one short section.</li>
      </ul>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Gutter size</th>
            <th style={thStyle}>Handles</th>
            <th style={thStyle}>Use when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>5-inch K-style</td>
            <td style={tdStyle}>Standard residential drainage</td>
            <td style={tdStyle}>Moderate pitch, moderate rainfall</td>
          </tr>
          <tr>
            <td style={tdStyle}>6-inch K-style</td>
            <td style={tdStyle}>~40% more capacity</td>
            <td style={tdStyle}>Steep roofs, large planes, heavy rain</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 4: Build the material takeoff</h2>
      <p>
        From your measurements, order everything in one trip:
      </p>
      <ul>
        <li><strong>Gutter coil or sections:</strong> total footage + 10% waste.</li>
        <li><strong>Hangers:</strong> total feet × 12 ÷ 24 = one hanger per 2 feet (every 24 inches); every 18 inches in snow country.</li>
        <li><strong>Downspouts:</strong> count × height, plus two elbows per drop (one at top, one at bottom) and straps — two per 10-foot section.</li>
        <li><strong>Mitters, end caps, outlets:</strong> from your corner and downspout counts.</li>
        <li><strong>Sealant:</strong> one tube per 3–4 miters/end caps.</li>
      </ul>
      <p>
        Run it through the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a> as a
        cross-check — footage, hangers, and downspout counts are where mental
        math slips on multi-run houses.
      </p>

      <h2>Slope and installation specs</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Spec</th>
            <th style={thStyle}>Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Gutter slope</td>
            <td style={tdStyle}>1/4 inch per 10 feet toward downspout</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hanger spacing</td>
            <td style={tdStyle}>Every 24 inches (18 inches in snow/ice zones)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Downspout straps</td>
            <td style={tdStyle}>Two per 10-foot section</td>
          </tr>
          <tr>
            <td style={tdStyle}>Discharge distance</td>
            <td style={tdStyle}>5+ feet from foundation</td>
          </tr>
        </tbody>
      </table>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Ordering from ground-level estimates.</strong> Satellite and ground measurements miss dormers and bump-outs. Verify from the ladder before ordering.</li>
        <li><strong>One downspout on a long run.</strong> The classic overflow guarantee. When in doubt, add the downspout — it's the cheapest insurance on the job.</li>
        <li><strong>Forgetting the waste factor.</strong> A 10-foot shortage on installation day costs more in lost time than 10% extra material ever will.</li>
        <li><strong>Sizing by habit, not drainage.</strong> Defaulting to 5-inch on a steep roof in a rainy climate is how you get callbacks every thunderstorm.</li>
        <li><strong>Ignoring the fascia.</strong> Rotted fascia won't hold hangers. Inspect it during measuring and price the repair — see our <a href="/guides/how-to-handle-change-orders">change order guide</a> if you find it mid-job.</li>
        <li><strong>No slope check.</strong> Eyeballing slope guarantees ponding. A 4-foot level and 1 inch of fall per 16 feet is the field check.</li>
      </ul>
      <p>
        Measurements done? Price the job in our{" "}
        <a href="/guides/how-to-bid-gutter-installation-job">gutter bidding
        guide</a> and build the quote in <a href="/quote">CalcBid</a> —
        itemized footage, materials, and labor, sent from the driveway.
      </p>

      <Faq items={faqs} heading="Gutter measuring questions, answered" />
    </GuideArticle>
  );
}
