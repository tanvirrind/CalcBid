import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Siding Job (2026 Guide)",
  description:
    "How to quote siding: measure squares, price by material type, handle trim and tear-off, and present the bid that wins.",
  keywords: [
    "how to quote a siding job",
    "how to bid siding",
    "siding quote",
    "how to estimate siding",
    "siding bid",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-siding-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Siding Job | CalcBid",
    description:
      "Measure squares, price by material, handle trim and tear-off — the bid that wins siding jobs.",
    url: "https://calcbid.com/guides/how-to-quote-siding-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Siding Job | CalcBid",
    description: "Measure squares, price by material, handle trim and tear-off — the bid that wins siding jobs.",
  },
};

const faqs = [
  {
    q: "How many squares of siding do I need for a 2,000 sq ft house?",
    a: "A 2,000 sq ft house typically has 1,600–2,200 sq ft of wall area depending on stories and layout — that's 16–22 squares before waste. Measure each wall (length × height), subtract 15% for openings, divide by 100, then add 10% waste. Two-story homes need more because of the extra wall height, not the footprint.",
  },
  {
    q: "Should I quote siding per square or per square foot?",
    a: "Quote the client per square foot (or a total project price) — homeowners think in square feet. Do your internal math per square, since siding is ordered and priced by the trade in squares. One square = 100 sq ft. Your supplier quotes by the square; your client buys by the project.",
  },
  {
    q: "How long does it take to side a house?",
    a: "A crew of 3–4 sides a typical 1,500–2,000 sq ft home in 5–10 working days: 1–2 days for tear-off, a day for house wrap and sheathing repairs, then installation and trim. Complex architecture — lots of gables, dormers, bump-outs — adds days because every angle is a cut and a trim piece.",
  },
  {
    q: "Do you need to remove old siding before installing new?",
    a: "Usually yes, and you should bid it that way. Tear-off ($1–$3/sq ft) lets you inspect the sheathing, replace rotted sections, and install fresh house wrap — skipping it hides problems that become your warranty issue. The exception is vinyl-over-vinyl in some markets, but even then, flatness problems telegraph through.",
  },
  {
    q: "What is the cheapest siding to install in 2026?",
    a: "Vinyl at $8–$12/sq ft installed is the cheapest option by a wide margin — roughly half the price of fiber cement. But 'cheapest bid' and 'cheapest siding' aren't the same thing: always quote at least two tiers, because the upgrade take-rate on siding is high and the margin on fiber cement is better.",
  },
  {
    q: "Can siding be installed in winter?",
    a: "Yes, with caveats. Vinyl gets brittle below about 40°F and cracks when nailed — experienced crews hand-nail or adjust pressure in cold weather. Fiber cement and engineered wood handle cold better. Winter bids often come in slightly lower because crews want the work, but add contingency days for weather delays.",
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
      title="How to Quote a Siding Job"
      description="Squares, material tiers, trim, and tear-off — the complete walkthrough for quoting siding jobs that protect your margin."
      slug="how-to-quote-siding-job"
      calculatorHref="/calculators/siding-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quoting siding comes down to four numbers: the squares (wall area ÷
        100, minus ~15% for openings, plus 10% waste), the installed price per
        square foot for the material tier, tear-off at $1–$3/sq ft, and trim
        plus house wrap. In 2026, installed pricing runs $8–$12/sq ft for
        vinyl, $12–$18 for fiber cement, and $15–$22 for wood/cedar — so a
        1,500 sq ft wall area lands around $12,000–$18,000 in vinyl or
        $18,000–$27,000 in fiber cement before tear-off. The contractors who
        make money on siding aren&apos;t the cheapest — they&apos;re the ones
        who measure in squares, itemize the hidden half of the job, and
        present three tiers instead of one number.
      </p>

      <h2>2026 siding costs at a glance</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>1,500 sq ft home</th>
            <th style={thStyle}>Lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Vinyl</td>
            <td style={tdStyle}>$8–$12</td>
            <td style={tdStyle}>$12,000–$18,000</td>
            <td style={tdStyle}>20–30 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fiber cement</td>
            <td style={tdStyle}>$12–$18</td>
            <td style={tdStyle}>$18,000–$27,000</td>
            <td style={tdStyle}>30–50 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Engineered wood</td>
            <td style={tdStyle}>$10–$15</td>
            <td style={tdStyle}>$15,000–$22,500</td>
            <td style={tdStyle}>20–30 years</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood / cedar</td>
            <td style={tdStyle}>$15–$22</td>
            <td style={tdStyle}>$22,500–$33,000</td>
            <td style={tdStyle}>20–40 years (with maintenance)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Metal / aluminum</td>
            <td style={tdStyle}>$12–$16</td>
            <td style={tdStyle}>$18,000–$24,000</td>
            <td style={tdStyle}>30–40 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        Material is roughly half the installed price; labor is the other half.
        That split is your friend — it means the upsell from vinyl to fiber
        cement adds about $4–$6/sq ft in material but you keep your labor rate,
        so the margin on the upgrade is excellent. For the full homeowner-side
        breakdown, see our <a href="/guides/siding-cost-per-square-foot">siding cost per square foot guide</a>.
      </p>

      <h2>Step 1: Measure in squares</h2>
      <p>
        The square — 100 sq ft — is the unit the whole industry buys, prices,
        and thinks in. Your supplier quotes by the square; your crew thinks in
        squares per day (a good crew hangs 2–4 squares daily depending on
        complexity). Measure each wall (length × height), add them up, subtract
        ~15% for windows and doors, divide by 100. A 1,800 sq ft wall area is
        about 15.3 squares net — order 17 with the standard 10% waste factor.
      </p>
      <p>
        Gables are where measurements go wrong. A gable triangle is (base ×
        height) ÷ 2 — measure it separately and add it in. Houses with lots of
        gables, dormers, and bump-outs also deserve 12–15% waste instead of
        10%, because every angle eats a board. And measure twice on two-stories:
        the upper walls are where ladder work slows the crew, which matters
        for your labor estimate even though it doesn&apos;t change the square
        count.
      </p>

      <h2>Siding cost by house size</h2>
      <p>
        Wall area — not floor area — drives the price. Here&apos;s what
        typical homes cost at mid-range installed rates (vinyl $10, fiber
        cement $15, wood $18/sq ft), before tear-off:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Wall area</th>
            <th style={thStyle}>Squares (w/ waste)</th>
            <th style={thStyle}>Vinyl</th>
            <th style={thStyle}>Fiber cement</th>
            <th style={thStyle}>Wood / cedar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1,200 sq ft</td>
            <td style={tdStyle}>~12</td>
            <td style={tdStyle}>$12,000</td>
            <td style={tdStyle}>$18,000</td>
            <td style={tdStyle}>$21,600</td>
          </tr>
          <tr>
            <td style={tdStyle}>1,500 sq ft</td>
            <td style={tdStyle}>~15</td>
            <td style={tdStyle}>$15,000</td>
            <td style={tdStyle}>$22,500</td>
            <td style={tdStyle}>$27,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000 sq ft</td>
            <td style={tdStyle}>~20</td>
            <td style={tdStyle}>$20,000</td>
            <td style={tdStyle}>$30,000</td>
            <td style={tdStyle}>$36,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,500 sq ft</td>
            <td style={tdStyle}>~25</td>
            <td style={tdStyle}>$25,000</td>
            <td style={tdStyle}>$37,500</td>
            <td style={tdStyle}>$45,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Add $1–$3/sq ft for tear-off and $150–$500 for the permit on top of
        these numbers. Two-story homes of the same wall area cost 10–15% more
        in labor than single-stories — the crew moves slower on staging and
        every cut happens off a ladder or plank.
      </p>

      <h2>Step 2: Price by material tier — always three</h2>
      <p>
        Quote <strong>good / better / best</strong> on every siding bid. It
        roughly doubles close rates versus a single number, because it changes
        the client&apos;s question from &ldquo;is this too expensive?&rdquo; to
        &ldquo;which one do I want?&rdquo; — and most pick the middle:
      </p>
      <ul>
        <li><strong>Good — vinyl ($8–$12/sq ft):</strong> the volume play. Low maintenance, huge color selection, fastest install. Weaknesses: hail damage, fading, lower perceived value.</li>
        <li><strong>Better — fiber cement ($12–$18/sq ft):</strong> the upsell sweet spot. Fire-resistant, rot-proof, holds paint 2–3× longer than wood, 30–50 year lifespan. Heavier — needs proper flashing and clearances.</li>
        <li><strong>Best — wood/cedar ($15–$22/sq ft):</strong> premium looks and premium margin, but it needs restaining every 3–5 years. Sell it where the architecture demands it.</li>
      </ul>
      <p>
        Present the three tiers side by side with lifespan and maintenance
        notes, not just prices. The $6,000 jump from vinyl to fiber cement
        looks very different next to &ldquo;lasts twice as long, paint it half
        as often.&rdquo;
      </p>

      <h2>Step 3: Price the hidden half of the job</h2>
      <p>
        The siding itself is barely half the bid. The rest is the work clients
        don&apos;t think about — and the work that destroys your margin when
        you forget it:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>2026 cost</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Tear-off & disposal</td>
            <td style={tdStyle}>$1–$3/sq ft</td>
            <td style={tdStyle}>Always separate — never buried</td>
          </tr>
          <tr>
            <td style={tdStyle}>House wrap / weather barrier</td>
            <td style={tdStyle}>$0.50–$1/sq ft</td>
            <td style={tdStyle}>Replace if the old wrap is shot</td>
          </tr>
          <tr>
            <td style={tdStyle}>Trim & accessories</td>
            <td style={tdStyle}>~$85 per 500 sq ft</td>
            <td style={tdStyle}>J-channel, corners, starter strips</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sheathing repair</td>
            <td style={tdStyle}>$3–$6/sq ft (as found)</td>
            <td style={tdStyle}>Bid as allowance or T&M — never fixed blind</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fascia & soffit</td>
            <td style={tdStyle}>$6–$12/linear ft</td>
            <td style={tdStyle}>Check while you&apos;re up there; easy add-on</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permit</td>
            <td style={tdStyle}>$150–$500</td>
            <td style={tdStyle}>Most jurisdictions require one for residing</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sheathing repair deserves special attention: you cannot see rot until
        the old siding comes off, so never fix-price it. Bid an allowance
        (&ldquo;includes up to X sq ft of sheathing replacement at $Y/sq
        ft&rdquo;) or time-and-materials with a cap. The alternative is eating
        a $2,000 surprise — or fighting the client mid-job.
      </p>

      <h2>Step 4: Present the bid that wins</h2>
      <p>
        Itemize materials vs. labor vs. tear-off vs. extras. Homeowners
        comparing three bids choose the one they understand — and itemized bids
        get roughly 30% fewer &ldquo;can you sharpen your pencil&rdquo; calls,
        because there&apos;s nothing vague to squeeze. Put the three material
        tiers on one page, list what&apos;s included and excluded in plain
        language, and state the warranty (workmanship warranty matters more to
        buyers than the manufacturer&apos;s — anyone can buy the siding, only
        you stand behind the install). State it in years, not adjectives:
        &ldquo;5-year workmanship warranty&rdquo; beats &ldquo;satisfaction
        guaranteed&rdquo; because it can be verified.
      </p>
      <p>
        Run the squares through the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a>, push
        the numbers into a <a href="/quote">quote</a>, and send all three tiers
        before you leave the property. Siding is a considered purchase —
        the first professional, itemized bid in the inbox sets the reference
        price every competitor gets compared against.
      </p>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Sell the wrap.</strong> Once the old siding is off, upgrading the weather barrier is an easy conversation — and it&apos;s pure margin on material you were handling anyway.</li>
        <li><strong>Bundle gutters.</strong> Old gutters come off for residing anyway; quoting <a href="/guides/gutter-installation-cost">new gutters</a> on the same bid is the highest-close-rate upsell in exterior work.</li>
        <li><strong>Photograph the sheathing.</strong> Every wall, before the wrap goes on. It&apos;s your proof of proper installation and your defense against future leak claims.</li>
        <li><strong>Watch the weather.</strong> Open walls and rain don&apos;t mix — have a dry-in plan (wrap same-day) in the bid so a surprise storm doesn&apos;t become your problem.</li>
        <li><strong>Manufacturer certification pays.</strong> Programs like James Hardie Preferred or certainTeed 5-Star carry extended warranties you can sell — and they differentiate you from every uncertified bidder.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <p>
        One more scenario worth a paragraph: the partial residing. Clients
        often ask to side &ldquo;just the front&rdquo; to save money. It can
        work, but warn them in writing that matching 10-year-old faded siding
        exactly is impossible — manufacturers discontinue colors, and even
        the same SKU weathers differently. Price the transition honestly
        (corner boards hide a lot), or use the mismatch as the argument for
        doing the whole house.
      </p>
      <ul>
        <li><strong>Eyeballing the squares.</strong> A 10% measure error on a $20,000 job is $2,000 of material or margin. Measure every wall.</li>
        <li><strong>Fix-pricing sheathing repair.</strong> Covered above — allowance or T&M, always.</li>
        <li><strong>One number instead of three tiers.</strong> You&apos;re leaving the upgrade margin on the table and making price the only comparison point.</li>
        <li><strong>Forgetting the permit.</strong> A stop-work order mid-job costs more than the $150–$500 permit ever would.</li>
        <li><strong>Tight-butting fiber cement.</strong> It needs proper gaps and clearances (typically 1/4&quot; at trim, 2&quot; above roofing) — installation errors void the warranty and become your callback.</li>
        <li><strong>Quoting without checking fascia.</strong> Rotted fascia discovered mid-job is a change order fight; caught during the estimate, it&apos;s an upsell.</li>
      </ul>

      <Faq items={faqs} heading="Siding questions, answered" />
    </GuideArticle>
  );
}
