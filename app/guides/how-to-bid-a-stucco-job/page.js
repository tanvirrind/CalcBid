import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Stucco Job (2026)",
  description:
    "Bid stucco jobs with confidence: 3-coat vs one-coat pricing, net square-foot measuring, bag math, crack-repair line items, and the margin formula.",
  keywords: [
    "how to bid a stucco job",
    "stucco estimate template",
    "stucco pricing per square foot",
    "how to quote stucco work",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-a-stucco-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Stucco Job (2026) | CalcBid",
    description:
      "3-coat vs one-coat pricing, net square-foot measuring, bag math, crack-repair line items, and the margin formula.",
    url: "https://calcbid.com/guides/how-to-bid-a-stucco-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Stucco Job (2026) | CalcBid",
    description:
      "3-coat vs one-coat pricing, net square-foot measuring, bag math, crack-repair line items, and the margin formula.",
  },
};

const faqs = [
  {
    q: "How much area does one bag of stucco cover?",
    a: "One bag of stucco mix covers roughly 12–25 sq ft per coat, depending on the coat thickness and how much the wall drinks it up. For a traditional 3-coat job at 7/8-inch total thickness, divide your net wall area by the middle of that range and multiply by three coats — a 1,500 sq ft wall needs on the order of 220–375 bags. Always price from your supplier's per-bag cost and your own historical coverage, never from memory.",
  },
  {
    q: "How do I measure a stucco job for a bid?",
    a: "Measure every wall's length times height to get gross square footage, then subtract the real openings — doors, windows, garage doors — for the net billable area. Unlike drywall, you don't keep small windows in the count: stucco stops at every opening and the cutting, lath work, and trim around openings is slow. Net square footage is the only number your bag math and your per-square-foot price should touch.",
  },
  {
    q: "Should I bid one-coat or three-coat stucco?",
    a: "Bid what the local market and the building demand. Traditional 3-coat stucco (7/8 inch over metal lath: scratch, brown, finish) is the proven 50-year system and the standard in most stucco regions; one-coat (fiber-reinforced, ~3/8–1/2 inch) installs faster and generally prices lower per square foot but gives you less forgiveness for substrate problems. Quote three-coat as your default and one-coat as the budget option — never let a client think they're the same wall.",
  },
  {
    q: "How long does a stucco job take, and what weather ruins it?",
    a: "A 1,500 sq ft three-coat job runs roughly a week of active work plus curing time between coats — the scratch, brown, and finish coats each need to cure before the next goes on, and rushing the sequence is the #1 cause of new cracks. Freezing temperatures, heavy rain on fresh coats, and extreme heat that flash-dries the finish all wreck the cure. Schedule so coats go on in mild, dry weather and build weather contingency days into every bid.",
  },
  {
    q: "When should a repair bid become a re-stucco bid?",
    a: "When the math crosses over: large section repairs run $20–$50 per sq ft, while full re-stucco is only $7–$12 per sq ft. Once you're patching a third or more of the wall area — or finding water damage behind multiple sections — re-stuccoing the whole elevation (or the house) is cheaper per square foot and delivers a uniform finish. Sell the crossover honestly; the client saves money and you sell a bigger job.",
  },
  {
    q: "What's the most common stucco bidding mistake?",
    a: "Pricing the finish and forgetting the system. Bids that count stucco bags and labor but skip the building paper, metal lath, weep screed, scaffold, and texture-matching time are underbid before they start. The second most common is promising a texture match that isn't in writing — spell out 'texture matched as closely as possible' so the client's expectation and your obligation are the same sentence.",
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
      title="How to Bid a Stucco Job"
      description="The stucco contractor's bidding system: measure net square footage, do the bag math, build the price from fixed costs, and protect your margin."
      slug="how-to-bid-a-stucco-job"
      updated="October 2026"
      calculatorHref="/calculators/stucco-calculator"
      calculatorLabel="Stucco Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid stucco on <strong>net square feet of wall</strong> — openings
        subtracted — built up from your fixed costs, not guessed from the
        last job. The 2026 US range for full re-stucco (traditional 3-coat) is{" "}
        <strong>$7–$12 per sq ft</strong>, with a whole house landing{" "}
        <strong>$14,000–$24,000</strong>; stucco repair work runs{" "}
        <strong>$8–$50 per sq ft</strong> with the average repair job at{" "}
        <strong>$600–$2,650</strong>. The method that keeps those numbers
        profitable: total your fixed costs (labor + sand + stucco + scaffold +
        mixer + bonding materials), divide by net square feet for your
        break-even rate, then add <strong>15–20% margin</strong>. Behind that
        math sits the real bidding work: measuring walls right, counting bags
        at 12–25 sq ft per bag per coat, pricing the hidden layers (paper,
        lath, screed) instead of forgetting them, and scheduling around cure
        time and weather. Get those right and stucco is a high-skill,
        high-margin trade — the material is cheap cement, and what
        you&apos;re selling is layered craftsmanship.
      </p>

      <h2>2026 stucco pricing overview</h2>
      <p>
        Every price below is the 2026 US range for professional stucco work.
        The pattern: new and re-stucco work prices per square foot, repairs
        price per linear foot or flat bid, and anything behind the stucco
        (paper, lath, sheathing) jumps the price into four figures:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Work type</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Typical job total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Full re-stucco, 3-coat (whole house)</td>
            <td style={tdStyle}>$7–$12/sq ft</td>
            <td style={tdStyle}>$14,000–$24,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sealing hairline cracks</td>
            <td style={tdStyle}>$19–$23/linear ft</td>
            <td style={tdStyle}>$200–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cut-out, patch &amp; blend</td>
            <td style={tdStyle}>Flat bid</td>
            <td style={tdStyle}>$400–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Water-damage repair (paper + lath replaced)</td>
            <td style={tdStyle}>Flat bid</td>
            <td style={tdStyle}>$600–$2,650</td>
          </tr>
          <tr>
            <td style={tdStyle}>Large section repair</td>
            <td style={tdStyle}>$20–$50/sq ft</td>
            <td style={tdStyle}>Varies by area</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moisture-probe inspection</td>
            <td style={tdStyle}>Flat fee</td>
            <td style={tdStyle}>$500–$1,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Repainting stucco after repair</td>
            <td style={tdStyle}>$2–$5/sq ft</td>
            <td style={tdStyle}>Varies by area</td>
          </tr>
        </tbody>
      </table>
      <p>
        Labor is the bulk of every number — stucco pros charge{" "}
        <strong>$40–$60 per hour</strong>, and even a modest repair takes{" "}
        <strong>5–12 hours</strong> of hands-on work before curing time. The
        material is cheap cement and wire; the price is the layered
        craftsmanship, the texture matching, and the cure scheduling. Read
        the homeowner&apos;s side of repair pricing in our{" "}
        <a href="/guides/stucco-repair-cost">stucco repair cost guide</a> —
        it&apos;s the same numbers, written for the person signing your bid.
      </p>

      <h2>One-coat vs. three-coat: bid the right system</h2>
      <p>
        This is the first decision on every stucco bid, and it changes the
        price, the schedule, and the warranty you can honestly offer.
        Traditional <strong>3-coat stucco</strong> is 7/8 inch of cement over
        metal lath in three layers — scratch coat, brown coat, finish coat —
        each curing before the next. <strong>One-coat stucco</strong> is a
        fiber-reinforced system at roughly 3/8–1/2 inch applied in a single
        base layer plus finish:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}></th>
            <th style={thStyle}>Traditional 3-coat</th>
            <th style={thStyle}>One-coat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Total thickness</td>
            <td style={tdStyle}>7/8 inch over metal lath</td>
            <td style={tdStyle}>~3/8–1/2 inch, fiber-reinforced</td>
          </tr>
          <tr>
            <td style={tdStyle}>Coats</td>
            <td style={tdStyle}>Scratch + brown + finish, each cured</td>
            <td style={tdStyle}>Single base coat + finish</td>
          </tr>
          <tr>
            <td style={tdStyle}>Installed price</td>
            <td style={tdStyle}>$7–$12/sq ft (2026 US range)</td>
            <td style={tdStyle}>Below 3-coat on identical sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Schedule</td>
            <td style={tdStyle}>~1 week active + cure days between coats</td>
            <td style={tdStyle}>Faster — fewer coats, fewer cure windows</td>
          </tr>
          <tr>
            <td style={tdStyle}>Crack forgiveness</td>
            <td style={tdStyle}>Best — thick, layered, proven 50-year walls</td>
            <td style={tdStyle}>Good, but less margin for substrate problems</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bid it when</td>
            <td style={tdStyle}>Default — most stucco regions, premium expectations</td>
            <td style={tdStyle}>Budget-driven jobs where speed matters</td>
          </tr>
        </tbody>
      </table>
      <p>
        Quote <strong>3-coat as your default</strong> and one-coat as the
        budget option, and never let a client believe they&apos;re the same
        wall at a different price. The price gap exists because the systems
        are different walls — different thickness, different crack
        resistance, different longevity. Put the system name in the quote so
        the cheaper bid the client gets elsewhere can be compared honestly
        against yours.
      </p>

      <h2>The bid method, step by step</h2>
      <h3>1. Measure net square footage</h3>
      <p>
        Measure every wall&apos;s length × height for gross square footage,
        then <strong>subtract the real openings</strong> — doors, windows,
        garage doors — for your net billable area. Stucco stops at every
        opening, and the lath work, trim, and cutting around openings is
        slow, detailed work; unlike drywall, you don&apos;t keep small
        openings in the count. Example: a 1,600 sq ft gross wall with 100 sq
        ft of windows and doors bids at <strong>1,500 net sq ft</strong>. Net
        square footage is the only number your bag math and your
        per-square-foot rate should touch.
      </p>
      <h3>2. Do the bag math</h3>
      <p>
        One bag of stucco mix covers roughly <strong>12–25 sq ft per
        coat</strong>. For a 3-coat job: bags = (net sq ft ÷ coverage per bag)
        × 3 coats. A 1,500 sq ft wall at 20 sq ft per bag needs about 75 bags
        per coat — roughly <strong>225 bags total</strong> — plus 5–10% for
        waste, drops, and the learning curve on the finish coat. Price bags at
        your actual supplier cost, and re-verify your coverage on every new
        product: wall absorbency and trowel technique move the real number.
        Sand, bonding agent, and the paper/lath/screed stack are priced
        separately below — bag math alone is not the material budget.
      </p>
      <h3>3. Total your fixed costs</h3>
      <p>
        This is the heart of the method. Add up everything the job costs
        before margin:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fixed-cost bucket</th>
            <th style={thStyle}>What goes in it</th>
            <th style={thStyle}>2026 anchor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Labor</td>
            <td style={tdStyle}>Crew × hours × hourly rate, all phases</td>
            <td style={tdStyle}>$40–$60/hr per pro</td>
          </tr>
          <tr>
            <td style={tdStyle}>Stucco + sand</td>
            <td style={tdStyle}>Bags from your bag math, sand per supplier</td>
            <td style={tdStyle}>Your supplier quote</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hidden layers</td>
            <td style={tdStyle}>Building paper, metal lath, weep screed, fasteners</td>
            <td style={tdStyle}>Your supplier quote</td>
          </tr>
          <tr>
            <td style={tdStyle}>Equipment</td>
            <td style={tdStyle}>Scaffold, mixer, texture rig</td>
            <td style={tdStyle}>Rental or ownership cost</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bonding + finishing</td>
            <td style={tdStyle}>Bonding agent, sealant, paint if included</td>
            <td style={tdStyle}>$2–$5/sq ft if repainting</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cleanup + disposal</td>
            <td style={tdStyle}>Wash-down, debris, dumpster if needed</td>
            <td style={tdStyle}>Per-job line</td>
          </tr>
        </tbody>
      </table>
      <p>
        The hidden-layers row is the one losing bids skip — and it&apos;s
        exactly where stucco jobs lose money. Paper, lath, and screed are
        invisible in the finished wall and unforgettable in the cost report.
      </p>
      <h3>4. Find your break-even per square foot</h3>
      <p>
        Divide total fixed costs by net square footage. If the fixed costs on
        a 1,500 sq ft re-stucco total $11,250, your break-even is{" "}
        <strong>$7.50/sq ft</strong> — right at the bottom of the $7–$12
        market range, which tells you this bid has no room for error. If the
        same job&apos;s costs total $13,500, break-even is $9/sq ft and
        you&apos;re bidding from a healthier floor. The break-even number is
        private — it&apos;s the line you never cross, and it&apos;s what
        makes the walk-away decision instant instead of emotional.
      </p>
      <h3>5. Add 15–20% true margin</h3>
      <p>
        Add <strong>15–20% true margin</strong> (profit ÷ final price) on top
        of the full fixed-cost subtotal. A 20% markup on cost is only ~16.7%
        margin — use roughly 25% markup to hold a real 20%. On the $11,250
        break-even job, 20% margin takes the client price to $14,063, or{" "}
        <strong>$9.38/sq ft</strong> — inside the $7–$12 market range and
        defensible line by line. Margin goes on last, after waste, cleanup,
        and overhead: quoting overhead out of your margin is how a
        &ldquo;profitable&rdquo; stucco job quietly breaks even.
      </p>
      <h3>6. Present lines, not a lump sum</h3>
      <p>
        Present the bid as line items — surface prep, paper and lath, scratch
        coat, brown coat, finish coat, texture matching, seal/paint, cleanup —
        and let the client see what the money buys. Lines get signed; lump
        sums get shopped. A bid that lists the layers separately is also the
        bid that survives the &ldquo;why are you higher than the other
        guy?&rdquo; conversation: the other guy&apos;s number is cheaper
        because something — usually the layers behind — is missing.
      </p>

      <h2>Line-item bid template (1,500 sq ft re-stucco example)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>How to price it</th>
            <th style={thStyle}>Example job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Surface prep (pressure wash, repairs)</td>
            <td style={tdStyle}>Per-job line — hours × rate</td>
            <td style={tdStyle}>$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Building paper + metal lath + weep screed</td>
            <td style={tdStyle}>Supplier quote × net sq ft</td>
            <td style={tdStyle}>$1,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Scratch coat (labor + material)</td>
            <td style={tdStyle}>Bag math ÷ 3 + crew time</td>
            <td style={tdStyle}>$2,700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Brown coat (labor + material)</td>
            <td style={tdStyle}>Bag math ÷ 3 + crew time</td>
            <td style={tdStyle}>$2,700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Finish coat + texture matching</td>
            <td style={tdStyle}>Bag math ÷ 3 + premium for finish skill</td>
            <td style={tdStyle}>$3,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Scaffold + mixer + bonding agent</td>
            <td style={tdStyle}>Rental days + material</td>
            <td style={tdStyle}>$750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cleanup + disposal</td>
            <td style={tdStyle}>Per-job line</td>
            <td style={tdStyle}>$0 (included above)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Subtotal (fixed costs)</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>$11,250</td>
          </tr>
          <tr>
            <td style={tdStyle}>Margin (20%)</td>
            <td style={tdStyle}>15–20% of subtotal</td>
            <td style={tdStyle}>$2,813</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Client price</strong></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}><strong>$14,063 ($9.38/sq ft)</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        That $9.38/sq ft sits honestly inside the <strong>$7–$12
        re-stucco range</strong>, with every dollar traceable to a line. Run
        your own numbers in the{" "}
        <a href="/calculators/stucco-calculator">stucco calculator</a>, push
        them into a <a href="/quote">quote</a>, and send it from the job site.
        Same-day quotes close at roughly double the rate of next-day ones.
      </p>

      <h2>Crack-repair line items</h2>
      <p>
        Repair work follows a different pricing logic — most of it prices per
        linear foot or flat bid, because the crack is cheap and what&apos;s
        behind it is what&apos;s expensive:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Repair</th>
            <th style={thStyle}>2026 price</th>
            <th style={thStyle}>Bidding notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Sealing hairline cracks (&lt;1/8 in)</td>
            <td style={tdStyle}>$19–$23/linear ft; $200–$800/job</td>
            <td style={tdStyle}>Fastest money in stucco; sell the moisture protection, not the caulk</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cut-out, patch &amp; blend</td>
            <td style={tdStyle}>$400–$1,200 flat</td>
            <td style={tdStyle}>Price the texture match — it&apos;s the hard part</td>
          </tr>
          <tr>
            <td style={tdStyle}>Water-damage repair</td>
            <td style={tdStyle}>$600–$2,650 flat</td>
            <td style={tdStyle}>T&amp;M if the damage extent is unknown — never fix-price behind a stain</td>
          </tr>
          <tr>
            <td style={tdStyle}>Large section repair</td>
            <td style={tdStyle}>$20–$50/sq ft</td>
            <td style={tdStyle}>Past ~1/3 of the wall, pitch re-stucco at $7–$12/sq ft instead</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moisture-probe inspection</td>
            <td style={tdStyle}>$500–$1,000 flat</td>
            <td style={tdStyle}>Sell before any repair bid on stained or soft walls — it defines the scope</td>
          </tr>
        </tbody>
      </table>
      <p>
        Two rules keep repair bids safe. First, <strong>cracks under 1/8 inch
        are cosmetic</strong> (seal them); <strong>cracks over 1/4 inch are
        structural</strong> (assess the cause before pricing anything). Second,{" "}
        <strong>never fix-price a water-damage repair before opening the
        wall</strong> — bid time-and-materials until you&apos;ve seen the
        paper, lath, and sheathing. A $600 estimate on a $2,600 wall is a
        loss you volunteered for.
      </p>

      <h2>Weather and cure scheduling — bid the calendar, not just the wall</h2>
      <p>
        Stucco is a curing trade, and the calendar is part of your cost. The
        scratch, brown, and finish coats <strong>each need to cure before the
        next goes on</strong> — rushing the sequence is the #1 cause of new
        cracks in a fresh wall, because the coats shrink at different rates
        if they don&apos;t cure properly. A 1,500 sq ft three-coat job is
        roughly a week of active work plus cure days, and even a modest patch
        often spans two or three calendar days because of it.
      </p>
      <p>
        Weather that wrecks a cure: <strong>freezing temperatures</strong>{" "}
        (fresh stucco and ice don&apos;t mix — never apply when a freeze is
        coming inside the cure window), <strong>rain on fresh coats</strong>{" "}
        (washes out the finish and weakens the surface), and{" "}
        <strong>extreme heat with direct sun</strong> (flash-dries the finish
        before it hydrates, causing crazing cracks). Schedule coats for mild,
        dry stretches, shade the wall in peak heat, and <strong>build
        weather contingency days into every bid</strong> — a crew that
        can&apos;t coat is a crew you&apos;re still paying. Tell the client
        the cure schedule up front: &ldquo;three coats, three cure windows,
        weather permitting&rdquo; manages expectations better than any
        apology later.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Forgetting the hidden layers.</strong> Paper, lath, weep screed, fasteners — invisible in the finished wall, unforgettable in the cost report. Price every layer or donate it.</li>
        <li><strong>Gross-square-foot bag math.</strong> Stucco stops at every opening. Bid net area — openings subtracted — or you&apos;re buying bags you can&apos;t bill.</li>
        <li><strong>Promising a texture match inexact words.</strong> &ldquo;Texture matched as closely as possible&rdquo; is the sentence that prevents the callback where the patch &ldquo;looks different.&rdquo; Write it; don&apos;t imply perfection.</li>
        <li><strong>Rushing the cure sequence.</strong> Coating over an uncured coat is the fastest way to manufacture cracks in your own new work — and the warranty call that follows is yours.</li>
        <li><strong>Fix-pricing water damage blind.</strong> Until you&apos;ve opened the wall, you don&apos;t know if the paper, lath, and sheathing survive. T&amp;M first, fixed price after.</li>
        <li><strong>No weather contingency.</strong> A rained-out coat day with no buffer in the bid means paying your crew out of your margin — or coating in bad weather and paying for it in callbacks.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Hairline cracks are genuinely DIY-friendly: clean the crack, press in
        an elastomeric sealant or stucco patch, tool it flat, and paint — a
        patch kit costs a fraction of the $200–$800 a pro charges for the
        same small job. That&apos;s the honest limit of DIY. Everything else
        — cutting out stucco, rebuilding the paper-and-lath system, matching
        texture on a visible wall, any crack over 1/4 inch — belongs to a
        pro, at <strong>$40–$60 per hour</strong> and typically{" "}
        <strong>5–12 hours</strong> of hands-on work. Your sales pitch writes
        itself: the material is cheap, the craftsmanship is the product, and
        the repair that disappears is worth more than the one that announces
        itself.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Patch repairs generally <strong>don&apos;t need a permit</strong>.
        A full re-stucco of a home <strong>often does</strong> — typically{" "}
        <strong>$200–$600</strong> — and the inspection is the part that
        actually protects everyone: inspectors check the weather-resistive
        barrier and lath, the hidden layer that keeps water out of the walls.
        Failed or missing WRB is the #1 cause of catastrophic stucco water
        damage, and it&apos;s invisible once the finish coat is on. In
        stucco-heavy regions, some jurisdictions also have material and
        drainage-plane requirements specific to stucco assemblies. Check your
        municipality before any re-stucco, and price the permit and inspection
        visits into the bid — a stop-work order mid-cure is the most
        expensive line item you&apos;ll never see on paper.
      </p>
      <p>
        Stucco work rarely stands alone — pair every re-stucco quote with the
        repaint that follows it ($2–$5/sq ft; see our{" "}
        <a href="/guides/concrete-paint-cost">concrete paint cost guide</a>{" "}
        for masonry painting numbers) and keep the{" "}
        <a href="/guides/stucco-repair-cost">stucco repair cost guide</a>{" "}
        handy for the repair half of your bid menu. One site visit, the full
        wall, one crew.
      </p>

      <Faq items={faqs} heading="Stucco bidding questions, answered" />
    </GuideArticle>
  );
}
