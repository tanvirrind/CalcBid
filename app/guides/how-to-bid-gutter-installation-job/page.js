import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Gutter Installation Job",
  description:
    "How to bid gutter installation: per-foot pricing by material, the takeoff, downspout and fascia line items, and mistakes that eat the margin.",
  keywords: [
    "how to bid a gutter installation job",
    "how to quote gutters",
    "gutter installation bid",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-gutter-installation-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Gutter Installation Job | CalcBid",
    description:
      "Per-foot pricing by material, the takeoff, downspout and fascia line items, and margin-killing mistakes.",
    url: "https://calcbid.com/guides/how-to-bid-gutter-installation-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Gutter Installation Job (2026) | CalcBid",
    description: "Per-foot pricing by material, the takeoff, and the line items that protect your margin.",
  },
};

const faqs = [
  {
    q: "How much should I charge per linear foot for gutter installation?",
    a: "Seamless aluminum — the standard residential job — bids at $6–$12 per linear foot installed in 2026, with most single-story homes landing near the middle. Vinyl runs $3–$6, steel $8–$12, and copper $15–$30. A typical 150–200 foot single-story home totals $628–$1,700. Price two-story work 20–40% higher for the ladder time and safety setup.",
  },
  {
    q: "How do you estimate linear feet of gutter?",
    a: "Measure each eave run separately with a tape measure, count inside and outside corners, and note downspout positions — never work from one perimeter number. Add 10% waste for cuts and overlap. Most homes have 125–200 linear feet. Our measuring guide walks through the full method including downspout placement and sizing.",
  },
  {
    q: "Should downspouts be a separate line item?",
    a: "Yes. Downspouts, elbows, and straps are real material and real labor — roughly $5–$10 per linear foot of downspout installed, plus $3–$5 per elbow. Burying them in the gutter footage hides your cost structure and makes it impossible to compare your bid against competitors'. Itemize them.",
  },
  {
    q: "How long does it take to install gutters on a house?",
    a: "A two-person crew installs 150–200 linear feet of seamless aluminum gutter in one full day, including downspouts — assuming sound fascia and straightforward access. Add a half day for fascia repair, another for gutter guard installation, and time for steep or two-story work. Quote one day, schedule two.",
  },
  {
    q: "What should a gutter quote include?",
    a: "Material and gauge (e.g., .032 aluminum), gutter size (5\" or 6\"), total linear footage, downspout count and placement, hanger type and spacing, fascia repair allowance, old gutter removal, and separate workmanship and material warranties. Vague quotes lose to itemized ones — homeowners compare line items.",
  },
  {
    q: "Do I need to remove old gutters before installing new ones?",
    a: "Yes, and it's a separate line item: $1–$3 per linear foot for removal and disposal. Old spike-and-ferrule systems often hide rotted fascia — inspect during the estimate and carry a per-foot fascia repair allowance ($5–$12/ft) rather than discovering it mid-job.",
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
      title="How to Bid a Gutter Installation Job"
      description="Price gutters per linear foot like a pro: material rates, the full takeoff, and the line items — fascia, downspouts, guards — that separate profitable bids from donations."
      slug="how-to-bid-gutter-installation-job"
      updated="October 2026"
      calculatorHref="/calculators/gutter-calculator"
      calculatorLabel="Estimate gutter materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid gutter installation <strong>per linear foot, installed</strong> —
        it's how homeowners compare quotes and how your costs actually scale.
        The 2026 US range for seamless aluminum, the standard residential job:{" "}
        <strong>$6–$12 per linear foot installed</strong>, putting a typical
        150–200 foot single-story home at <strong>$628–$1,700</strong>. Behind
        that simple number sits the real work: an accurate footage takeoff,
        downspouts priced as their own line, a fascia repair allowance, and
        material choice. Gutter jobs run 35–50% gross margins when every line
        is priced — and they bleed when it isn't.
      </p>

      <h2>2026 gutter installation prices per linear foot</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Per linear ft installed</th>
            <th style={thStyle}>175-ft home total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Vinyl sectional</td>
            <td style={tdStyle}>$3–$6</td>
            <td style={tdStyle}>$525–$1,050</td>
          </tr>
          <tr>
            <td style={tdStyle}>Aluminum seamless</td>
            <td style={tdStyle}>$6–$12</td>
            <td style={tdStyle}>$1,050–$2,100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Galvanized steel</td>
            <td style={tdStyle}>$8–$12</td>
            <td style={tdStyle}>$1,400–$2,100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Copper</td>
            <td style={tdStyle}>$15–$30</td>
            <td style={tdStyle}>$2,625–$5,250</td>
          </tr>
        </tbody>
      </table>
      <p>
        Aluminum seamless is 80%+ of residential work — price it as your
        default and present others as upgrades. Two-story homes add 20–40%
        for ladder time and safety; steep roofs and difficult access add more.
        These are 2026 US planning ranges; regional labor moves them 15–30%.
      </p>

      <h2>The takeoff (measure it right)</h2>
      <p>
        Every gutter bid starts with the measuring method in our{" "}
        <a href="/guides/how-to-measure-for-gutters">gutter measuring
        guide</a>: each eave run measured separately, corners counted,
        downspouts placed at one per 30–40 feet. From there, the takeoff:
      </p>
      <ul>
        <li><strong>Gutter footage + 10% waste</strong> — your material quantity and the basis of the per-foot price.</li>
        <li><strong>Hangers:</strong> one per 2 feet (every 24 inches); every 18 inches in snow country. Hidden hangers, not spikes — price the upgrade, it sells itself.</li>
        <li><strong>Downspouts:</strong> count × height, two elbows and straps per drop. Price at $5–$10 per linear foot installed as a separate line.</li>
        <li><strong>Miters, end caps, outlets:</strong> from your corner and downspout counts — small parts, real money in aggregate.</li>
        <li><strong>Old gutter removal:</strong> $1–$3 per linear foot, its own line, always.</li>
      </ul>
      <p>
        Cross-check the whole takeoff in the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a> before
        you finalize — footage and hanger counts are where mental math slips.
      </p>

      <h2>Line items most bidders forget</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Price it at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Fascia repair allowance</td>
            <td style={tdStyle}>$5–$12 per linear foot, as-needed</td>
          </tr>
          <tr>
            <td style={tdStyle}>Downspouts &amp; elbows</td>
            <td style={tdStyle}>$5–$10 per linear foot + $3–$5 per elbow</td>
          </tr>
          <tr>
            <td style={tdStyle}>Gutter guards</td>
            <td style={tdStyle}>$7–$12 per linear foot installed</td>
          </tr>
          <tr>
            <td style={tdStyle}>6-inch upgrade (from 5-inch)</td>
            <td style={tdStyle}>+$1–$2 per linear foot</td>
          </tr>
          <tr>
            <td style={tdStyle}>Underground drain tie-in</td>
            <td style={tdStyle}>$150–$400 per downspout</td>
          </tr>
        </tbody>
      </table>
      <p>
        The fascia allowance is the big one. Old gutters hide rotted fascia —
        discovering it mid-job without a priced allowance means eating the
        repair or having the world's most awkward client conversation. Carry
        the allowance on every bid; if the fascia is sound, you look thorough,
        not expensive.
      </p>

      <h2>Present it itemized, close it same-day</h2>
      <p>
        Gutter quotes win on clarity: material and gauge, size, footage,
        downspout count and placement, hanger spec, removal, fascia allowance,
        and both warranties — material (typically 10–20 years) and workmanship
        (get 5 years in writing; it's a differentiator). Offer the 6-inch
        upgrade and gutter guards as options, not pressure — roughly a third
        of homeowners take one. Build it in <a href="/quote">CalcBid</a> and
        send it from the driveway; same-day quotes close at roughly double
        the rate of next-day ones.
      </p>

      <h2>Stack the add-ons</h2>
      <ul>
        <li><strong>Gutter guards</strong> — $7–$12/ft installed, the highest-margin add-on in the trade. Sell the ladder you'll never climb again.</li>
        <li><strong>6-inch upgrade</strong> — +$1–$2/ft, genuine value on steep roofs and rainy climates. Easy yes once you explain overflow.</li>
        <li><strong>Underground drainage</strong> — $150–$400 per downspout. High ticket, high perceived value, and it actually protects the foundation.</li>
        <li><strong>Cleaning plan:</strong> twice-yearly cleanings booked in advance. See our <a href="/guides/gutter-cleaning-cost-per-linear-foot">gutter cleaning cost guide</a> for the pricing — every install is a future maintenance customer.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Burying downspouts in the footage price.</strong> They're 15–25% of the job's material. Separate line, always.</li>
        <li><strong>No fascia allowance.</strong> The one job in five with rotted fascia will remind you why the line exists.</li>
        <li><strong>Pricing two-story like single-story.</strong> Ladder moves, tie-offs, and slower production are 20–40% more labor. Price it.</li>
        <li><strong>Defaulting to 5-inch everywhere.</strong> Steep roofs and heavy rain need 6-inch. Undersized gutters are callbacks every thunderstorm.</li>
        <li><strong>Forgetting removal.</strong> Old gutters don't vanish. Tear-off, disposal, and the dump fee are real money.</li>
        <li><strong>Vague quotes.</strong> "Install gutters: $1,400" loses to an itemized bid at $1,550 every time. Homeowners buy clarity.</li>
      </ul>
      <p>
        Measure with our{" "}
        <a href="/guides/how-to-measure-for-gutters">gutter measuring
        guide</a>, take off materials in the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a>, and
        build the itemized bid in <a href="/quote">CalcBid</a>. Gutter jobs
        are won on the details — and the details are all in the takeoff.
      </p>

      <h2>Worked bid: 150 ft of 6-inch K-style, two-story</h2>
      <p>
        Here is a complete bid build for a common job: 150 feet of 6-inch
        K-style seamless aluminum on a two-story home, four downspouts,
        sound fascia. The takeoff follows the{" "}
        <a href="/guides/how-to-measure-for-gutters">measuring guide</a> —
        footage plus 10% waste, hangers every 24 inches, two elbows and
        straps per drop. This is what the job costs <em>you</em> before
        the customer ever sees a number:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Cost line</th>
            <th style={thStyle}>Math</th>
            <th style={thStyle}>Your cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Gutter coil</td>
            <td style={tdStyle}>165 ft (150 + 10% waste) × $2.20/ft</td>
            <td style={tdStyle}>$363</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hidden hangers</td>
            <td style={tdStyle}>75 × $2.00</td>
            <td style={tdStyle}>$150</td>
          </tr>
          <tr>
            <td style={tdStyle}>Downspout stock</td>
            <td style={tdStyle}>4 drops × 18 ft = 72 ft × $1.50/ft</td>
            <td style={tdStyle}>$108</td>
          </tr>
          <tr>
            <td style={tdStyle}>Elbows</td>
            <td style={tdStyle}>8 × $4.00</td>
            <td style={tdStyle}>$32</td>
          </tr>
          <tr>
            <td style={tdStyle}>End caps, outlets, screws, sealant</td>
            <td style={tdStyle}>4 drops&apos; worth of small parts</td>
            <td style={tdStyle}>$75</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor</td>
            <td style={tdStyle}>2-person crew, 7 hrs each = 14 crew-hours × $38/hr loaded</td>
            <td style={tdStyle}>$532</td>
          </tr>
          <tr>
            <td style={tdStyle}>Equipment, fuel, machine wear</td>
            <td style={tdStyle}>Truck, gutter machine, ladders, two-story safety gear</td>
            <td style={tdStyle}>$95</td>
          </tr>
        </tbody>
      </table>
      <p>
        Materials total $728; with labor and equipment your direct job
        cost is <strong>$1,355</strong>. Now the two lines that decide
        whether the job pays: overhead recovery at 15% adds $203, bringing
        the true cost to $1,558 — then apply your profit markup. At a 40%
        markup the bid is <strong>$2,181</strong>. On the customer-facing
        quote, present it the way this guide recommends: gutters as the
        per-foot line, downspouts itemized separately. If the job includes
        tearing off old gutters, add the removal line at $1–$3/ft
        ($150–$450 here) — it is not buried in the $2,181. The fascia
        allowance rides along as an as-needed line at $5–$12/ft, charged
        only if your crew finds rot.
      </p>
      <p>
        Sanity-check the per-foot number before you send it: $2,181 ÷ 150
        ft = <strong>$14.54/ft</strong>. The base 5-inch aluminum range is
        $6–$12/ft; the 6-inch upgrade adds $1–$2, putting one-story work
        at $7–$14; two-story pricing adds 20–40%, which puts this job&apos;s
        fair band at roughly $9–$18/ft. Your $14.54 sits in the upper
        middle — exactly where a two-story, 6-inch, four-downspout job
        should land. If your build ever produces a number under $10/ft
        for this job type, you have mispriced the ladder time, because
        your direct cost alone is already $9.03/ft.
      </p>

      <p>
        Know where this bid can flex before the homeowner asks. If
        $2,181 meets resistance, value-engineer the spec, never the
        labor: stepping down to 5-inch gutter removes the $1–$2/ft
        upgrade and takes roughly $150–$300 off the ticket while your
        crew hours stay whole. What you do not cut is hanger spacing —
        stretching hangers from 24 to 36 inches saves 25 hangers, about
        $50 of material on this job, and buys you the sagging-gutter
        callback that eats the entire profit. Guards and underground
        drains move the other direction: they are options to offer, not
        discounts to absorb. A bid that protects its structure and trades
        only on scope is one you can defend line by line at the kitchen
        table.
      </p>

      <h2>Regional pricing and market tiers</h2>
      <p>
        The $6–$12 aluminum range is a national band; regional labor moves
        it 15–30%, and your market tier decides where inside it you can
        win. In high-cost coastal and Northeast metros, itemized bids at
        the top of the range — and above it on two-story work — win every
        week, because every competitor carries the same labor, insurance,
        and drive-time costs. Price to the market, not to your anxiety.
        In rural and low-cost Southern and Midwest markets, winning work
        clusters near the bottom of the range, and your edge has to come
        from production speed and low overhead rather than price alone.
        Hold your price when your bid is itemized, warrantied, and
        reviewed — homeowners comparing line items rarely pick the
        cheapest vague number. Match a competitor only when their scope
        truly matches yours; matching a quote that buried downspouts and
        skipped the fascia allowance means volunteering to absorb their
        shortcuts.
      </p>

      <h2>Deposits, payment schedules, and protecting the margin</h2>
      <p>
        Gutter work turns cash fast — protect it with structure. Collect a
        material deposit before the coil is run: seamless gutter is
        fabricated to this house&apos;s exact lengths and cannot go back
        on the shelf, so 30–50% upfront, or at minimum your full material
        cost ($728 on the worked bid), is standard and defensible. On
        multi-day installs — guards, underground drains, fascia rebuilds
        — use progress draws tied to visible milestones: deposit on
        signing, a draw when the gutters are hung, and the balance on
        completion and walkthrough. Never let the amount collected lag
        the work performed by more than a day&apos;s production. Put the
        terms in the contract before work starts: balance due on
        completion, what late fee applies after a stated grace period,
        and how change orders are approved and priced. A homeowner who
        agreed to the schedule in writing pays on it; one who hears the
        terms for the first time at the final invoice is where margins go
        to die.
      </p>

      <Faq items={faqs} heading="Gutter bidding questions, answered" />
    </GuideArticle>
  );
}
