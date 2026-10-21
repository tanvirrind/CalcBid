import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Fence Installation Cost Per Linear Foot",
  description:
    "Fence installation costs $20–$60 per linear foot in 2026. Material-by-material pricing, gate and removal add-ons, and what moves the quote.",
  keywords: [
    "fence installation cost per linear foot",
    "how much does a fence cost per foot",
    "fence cost per linear foot installed",
  ],
  alternates: { canonical: "https://calcbid.com/guides/fence-installation-cost-per-linear-foot" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Fence Installation Cost Per Linear Foot | CalcBid",
    description:
      "$20–$60 per linear foot installed. Material-by-material pricing, gates, removal, and what moves the quote.",
    url: "https://calcbid.com/guides/fence-installation-cost-per-linear-foot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fence Installation Cost Per Linear Foot (2026) | CalcBid",
    description: "$20–$60 per linear foot installed. Material-by-material pricing, gates, removal, and what moves the quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install 150 feet of fence?",
    a: "A 150-foot fence typically costs $3,500–$9,000 installed in 2026, depending on material. Chain link lands around $2,250–$6,000, wood privacy $3,750–$9,000, and vinyl $4,500–$9,750. Gates, old-fence removal, and sloped yards push the total higher — always get those priced as separate line items.",
  },
  {
    q: "What is the cheapest fence to install per linear foot?",
    a: "Chain link at $15–$40 per linear foot installed is the cheapest option, followed by pressure-treated pine privacy at $15–$30. Split-rail runs $15–$35. The cheapest upfront option isn't always the cheapest over time — wood needs staining every few years while vinyl and aluminum are nearly maintenance-free.",
  },
  {
    q: "Does fence installation cost include gates?",
    a: "Usually not in the per-foot price. A walk-through gate adds $150–$400 installed; a double driveway gate runs $400–$1,200. Gates need heavier posts, hardware, and bracing, so contractors price them separately. Always confirm gate count and sizes in your written quote.",
  },
  {
    q: "How much does it cost to remove an old fence?",
    a: "Old fence removal and disposal typically adds $3–$8 per linear foot. Concrete footings from the old fence are the hidden cost — pulling them is real labor. Get removal quoted as its own line item rather than folded into the install price.",
  },
  {
    q: "Is it cheaper to install a fence yourself?",
    a: "DIY saves the 50–70% of the price that's labor, but a 150-foot privacy fence is 2–4 weekends of hard digging for most homeowners, plus tool rentals (auger, concrete mixer) and material delivery fees. Mistakes in post depth or layout are expensive to fix. Most homeowners find the pro price worth it for anything over 100 feet.",
  },
  {
    q: "Do I need a permit to install a fence?",
    a: "Most cities require a fence permit ($50–$200), and many cap residential fences at 6 feet in back yards and 4 feet in front. HOAs often restrict materials and colors. Check both before you sign a contract — a permit delay or HOA violation can stall or undo the whole project.",
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
      title="Fence Installation Cost Per Linear Foot"
      description="What a fence really costs per foot in 2026: material-by-material installed pricing, the add-ons that surprise homeowners, and how to compare quotes."
      slug="fence-installation-cost-per-linear-foot"
      updated="October 2026"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate your fence"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Professional fence installation costs <strong>$20–$60 per linear
        foot</strong> in 2026 for most residential projects, with chain link
        at the low end and vinyl, composite, or ornamental metal at the high
        end. A typical 150-foot backyard fence runs{" "}
        <strong>$3,500–$9,000 installed</strong>. That per-foot number covers
        materials, posts, concrete, and labor on level ground — gates, old
        fence removal, and difficult sites are almost always priced
        separately, and they're where quotes surprise homeowners.
      </p>

      <h2>Fence installation cost by material (per linear foot)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material (6-ft)</th>
            <th style={thStyle}>Per linear ft installed</th>
            <th style={thStyle}>150-ft fence total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Chain link</td>
            <td style={tdStyle}>$15–$40</td>
            <td style={tdStyle}>$2,250–$6,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pressure-treated pine privacy</td>
            <td style={tdStyle}>$15–$30</td>
            <td style={tdStyle}>$2,250–$4,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar privacy</td>
            <td style={tdStyle}>$25–$45</td>
            <td style={tdStyle}>$3,750–$6,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood privacy (general)</td>
            <td style={tdStyle}>$25–$60</td>
            <td style={tdStyle}>$3,750–$9,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Vinyl / PVC privacy</td>
            <td style={tdStyle}>$30–$65</td>
            <td style={tdStyle}>$4,500–$9,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Aluminum ornamental</td>
            <td style={tdStyle}>$35–$70</td>
            <td style={tdStyle}>$5,250–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite</td>
            <td style={tdStyle}>$40–$65</td>
            <td style={tdStyle}>$6,000–$9,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Ornamental iron / steel</td>
            <td style={tdStyle}>$40–$90</td>
            <td style={tdStyle}>$6,000–$13,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are 2026 US installed ranges — materials, posts set in concrete,
        and labor. Taller fences (8 ft) run roughly 40–60% more per foot than
        6-ft versions. Regional labor markets move these numbers 20–30% in
        either direction.
      </p>

      <h2>What the per-foot price usually leaves out</h2>
      <p>
        The per-foot rate covers the fence itself on straightforward ground.
        Almost everything else is a separate line item — and these are the
        lines that separate an honest quote from a painful surprise:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Add-on</th>
            <th style={thStyle}>Typical cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Walk-through gate</td>
            <td style={tdStyle}>$150–$400 installed</td>
          </tr>
          <tr>
            <td style={tdStyle}>Double driveway gate</td>
            <td style={tdStyle}>$400–$1,200 installed</td>
          </tr>
          <tr>
            <td style={tdStyle}>Old fence removal &amp; disposal</td>
            <td style={tdStyle}>$3–$8 per linear foot</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sloped yard premium</td>
            <td style={tdStyle}>+10–25% on labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Rocky soil / rock excavation</td>
            <td style={tdStyle}>$25–$75 extra per post</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permit</td>
            <td style={tdStyle}>$50–$200</td>
          </tr>
        </tbody>
      </table>

      <h2>How to measure for an accurate quote</h2>
      <p>
        Walk your property line with a measuring wheel and record each straight
        run separately — corners and gates split the fence into segments.
        Note gate locations and widths, trees on the line, slopes, and access
        for equipment. A 150-foot fence with two gates, a slope, and an old
        fence to remove is a very different job from 150 feet of open flat
        yard, even though the footage matches. Run your numbers through the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>{" "}
        to sanity-check any quote you receive.
      </p>

      <h2>Material comparison: what the price buys you</h2>
      <ul>
        <li><strong>Chain link ($15–$40):</strong> cheapest installed, 15–20 year life, minimal maintenance. Best for pet containment and large perimeters where privacy doesn't matter.</li>
        <li><strong>Pressure-treated pine ($15–$30):</strong> cheapest privacy option, 8–12 year life. Needs staining every 2–3 years — factor that into the true cost.</li>
        <li><strong>Cedar ($25–$45):</strong> the most popular privacy choice, 15–25 years, naturally rot-resistant. Ages to gray unless stained.</li>
        <li><strong>Vinyl ($30–$65):</strong> 25–40 year life, nearly zero maintenance, higher upfront cost. Color is through the material, so scratches don't show.</li>
        <li><strong>Composite ($40–$65):</strong> longest-lived privacy option at 25–30 years with no staining ever. Premium price, premium lifespan.</li>
        <li><strong>Ornamental metal ($35–$90):</strong> 30–50 year life, security plus curb appeal. The buy-it-once option for front yards and pools.</li>
      </ul>

      <h2>Tips for comparing fence quotes</h2>
      <ul>
        <li><strong>Compare itemized quotes, not per-foot rates.</strong> A $35/ft quote that includes gates and removal beats a $28/ft quote that doesn't.</li>
        <li><strong>Ask about post depth and concrete.</strong> Posts should be set 2+ feet deep (below frost line in cold climates) in concrete — shallow or dry-set posts lean within a few years.</li>
        <li><strong>Confirm the gate hardware.</strong> Cheap hinges sag; a sagging gate is the #1 fence callback. Ask for the hardware brand.</li>
        <li><strong>Get the utility locate in writing.</strong> The contractor should call 811 before digging. Ask for the ticket number.</li>
        <li><strong>Check the warranty split.</strong> Material warranties (often 15–30 years) and workmanship warranties (typically 1–5 years) are separate — get both in writing.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Choosing on per-foot price alone.</strong> Gates, removal, slope, and soil can swing the real total 30–50% above the headline rate.</li>
        <li><strong>Skipping the property survey.</strong> Building even inches over the line onto a neighbor's lot is a legal dispute, not a fence.</li>
        <li><strong>Ignoring the HOA.</strong> Material, color, and height restrictions are common — a fence the HOA orders removed is money burned.</li>
        <li><strong>Forgetting maintenance costs.</strong> A $25/ft wood fence that needs $5/ft restaining every 3 years costs more over 15 years than a $45/ft vinyl fence.</li>
        <li><strong>No written contract.</strong> Verbal fence deals go wrong over gate placement, exact property lines, and cleanup. Get it in writing.</li>
        <li><strong>Paying in full upfront.</strong> Standard is 20–30% deposit, progress payments, and final payment on completion and walkthrough.</li>
      </ul>
      <p>
        Planning a fence? Estimate materials in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>.
        Contractors: our{" "}
        <a href="/guides/how-to-quote-fence-installation-job">fence installation
        quoting guide</a> covers pricing the job from your side, and the{" "}
        <a href="/guides/how-to-bid-fence-staining-job">fence staining guide</a>{" "}
        covers the highest-margin add-on in the trade.
      </p>      <p>
        Got your linear footage? <a href="/quote">Turn it into a professional fence quote</a> your client can approve in minutes.
      </p>



      <h2>Worked examples: 100 ft, three materials</h2>
      <p>
        Same yard, same 100 feet of level fence line, one walk-through
        gate each — only the material changes. The splits below use the
        midpoint of each per-foot range and a typical materials/labor
        breakdown (labor is 50–70% of an installed price, which is why
        DIY saves so much). Gate prices use the $150–$400 walk-gate range
        from the add-on table; totals exclude old-fence removal and
        permits.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material (6-ft, 100 ft)</th>
            <th style={thStyle}>Fence at midpoint</th>
            <th style={thStyle}>Materials / labor split</th>
            <th style={thStyle}>One walk gate</th>
            <th style={thStyle}>Example total (full range)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Wood privacy</td>
            <td style={tdStyle}>100 ft × $42.50 = $4,250</td>
            <td style={tdStyle}>$1,700 / $2,550</td>
            <td style={tdStyle}>$275</td>
            <td style={tdStyle}>$4,525 ($2,650–$6,400)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Vinyl privacy</td>
            <td style={tdStyle}>100 ft × $47.50 = $4,750</td>
            <td style={tdStyle}>$2,375 / $2,375</td>
            <td style={tdStyle}>$325</td>
            <td style={tdStyle}>$5,075 ($3,150–$6,900)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Chain link</td>
            <td style={tdStyle}>100 ft × $27.50 = $2,750</td>
            <td style={tdStyle}>$1,100 / $1,650</td>
            <td style={tdStyle}>$200</td>
            <td style={tdStyle}>$2,950 ($1,650–$4,400)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Read the table the way contractors build it: the fence line
        itself is a per-foot product, the gate is a discrete unit with
        heavier posts and hardware, and the range around each total is
        your region, your soil, and your slope. Vinyl&apos;s materials
        share runs highest — the panels cost more, but they install fast
        — while wood and chain link put more of the dollar into labor.
        If a quote for one of these three lands far outside its range
        with no gate, slope, or removal line to explain it, ask what is
        missing before you ask for a discount.
      </p>

      <p>
        Two adjustments move all three examples off their flat-yard
        numbers. A sloped yard adds the 10–25% labor premium from the
        add-on table — applied to the labor share only, that is roughly
        $255–$640 more on the wood fence (25% of its $2,550 labor at the
        top end), $240–$595 on vinyl, and $165–$415 on chain link,
        because panels must be racked or stepped and posts set at
        stepped heights. And if an old fence occupies the line, removal
        at $3–$8 per foot adds a flat $300–$800 to any of the three
        totals before the first new post is dug. When a quote lands well
        above these example totals, it is usually these two lines —
        visible, legitimate, and itemized — doing the lifting.
      </p>

      <h2>Regional pricing: why the same fence costs more in Denver than Dallas</h2>
      <p>
        Start below ground. Posts must be set in concrete below the frost
        line, and frost depth is geography: in northern states the line
        commonly sits 36 inches or deeper, while in warm southern markets
        the standard 2-foot setting often satisfies it. A 36-inch hole at
        the same diameter takes roughly half again as much concrete as a
        24-inch hole, and every extra foot of depth is auger time. On a
        100-foot fence with posts every 6–8 feet — 14 to 17 posts — that
        difference alone is hundreds of dollars, before freeze-thaw
        heaving punishes anyone who cheated the depth.
      </p>
      <p>
        Soil adds the second spread. Rocky ground — common in foothill
        suburbs — triggers the $25–$75 per-post excavation extra from the
        add-on table, which can add $350–$1,200 to a single fence line.
        Dallas clay digs easier, but expansive clay that swells and
        shrinks with moisture is its own problem: good installers bell
        the holes or add gravel so posts do not ride the soil. Above
        ground, labor markets finish the job — metro crews in high-demand
        markets command premiums, deep contractor competition in Texas
        metros holds bids down, and regional pricing overall moves the
        national ranges 20–30% in either direction. Permits layer on top
        anywhere in the $50–$200 band, and suburban HOAs in both metros
        can dictate material and height. Same fence, same footage — the
        Denver invoice is buying deeper holes, more concrete, and pricier
        hours.
      </p>

      <h2>The 10-year cost of ownership</h2>
      <p>
        The install price is the first payment, not the whole cost. Wood
        privacy needs staining or sealing every 2–3 years; at roughly
        $5 per linear foot per cycle, a 100-foot wood fence takes about
        $500 at years 3, 6, and 9 — <strong>$1,500 over the decade</strong>,
        plus the odd warped picket or post repair. Vinyl asks only for a
        wash: soap, water, and an hour once a year or two, with no
        coating ever — a decade of maintenance you can cover with pocket
        change if you do it yourself. Chain link needs no finish either;
        budget $100–$300 across ten years for tensioning, ties, and a
        bent post or gate hinge, barring storm damage. Run the worked
        examples forward and the ranking flips: wood&apos;s $4,525 install
        plus $1,500 of upkeep totals about $6,025, against vinyl&apos;s
        $5,075 install and almost nothing after. Wood wins on day one;
        vinyl wins by year ten. Our{" "}
        <a href="/guides/how-to-bid-fence-staining-job">fence staining
        guide</a> prices the upkeep cycle from the contractor&apos;s side.
      </p>

      <Faq items={faqs} heading="Fence installation cost questions, answered" />
    </GuideArticle>
  );
}
