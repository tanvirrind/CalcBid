import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Gutter Installation Cost Per Linear Foot (2026)",
  description:
    "Gutter installation cost per linear foot in 2026: aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
  keywords: [
    "gutter installation cost per linear foot",
    "how much do gutters cost",
    "cost to install gutters",
    "seamless gutter cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/gutter-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Gutter Installation Cost Per Linear Foot (2026) | CalcBid",
    description:
      "Aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
    url: "https://calcbid.com/guides/gutter-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Installation Cost Per Linear Foot (2026) | CalcBid",
    description: "Aluminum, steel, and copper pricing, downspouts, guards, and what moves the bid.",
  },
};

const faqs = [
  {
    q: "How long do gutters last?",
    a: "Seamless aluminum gutters last 20–30 years with basic maintenance. Galvanized steel lasts about the same but can rust sooner in coastal or high-humidity areas. Copper lasts 50+ years — it's the only gutter material that routinely outlives the roof under it.",
  },
  {
    q: "Seamless vs. sectional gutters — which should I quote?",
    a: "Seamless, almost always. Sectional (DIY-store) gutters leak at every joint within a few years and cost nearly as much once you price your labor to assemble them. Seamless aluminum is formed on-site from a roll, so the only joints are at corners and downspouts.",
  },
  {
    q: "What size gutters do I need — 5-inch or 6-inch?",
    a: "5-inch K-style is the residential standard and handles most roofs. Quote 6-inch for steep pitches, large roof areas draining into a short run, or homes in heavy-rainfall regions — they carry roughly 40% more water and clog less. The upgrade costs about $2–$3 more per foot.",
  },
  {
    q: "Can gutters be installed in winter?",
    a: "Yes, down to about freezing. Below 32°F sealants don't cure properly and aluminum gets brittle, so most installers pause in deep winter. Late fall and early spring are the sweet spots — and the busiest, so book ahead.",
  },
  {
    q: "Do gutter guards actually work?",
    a: "Good ones do — micro-mesh guards keep out everything but shingle grit and cost $5–$10/ft installed. Cheap snap-in screens and foam inserts clog, collapse, or become squirrel habitat. Never quote the cheapest guard; the callback will cost more than the upsell.",
  },
  {
    q: "How often should gutters be cleaned?",
    a: "Twice a year minimum — spring and late fall — and quarterly for homes under heavy tree cover. A cleaning visit ($150–$300) is also your best recurring-revenue door-opener: you're already on the ladder looking at the roof, fascia, and siding.",
  },
  {
    q: "Why do my gutters overflow even though they're clean?",
    a: "Usually undersized downspouts or too few of them — one downspout per 30–40 feet is the rule, and long runs need 3×4-inch commercial downspouts instead of standard 2×3. Pitch problems (less than 1/4 inch of slope per 10 feet toward the downspout) are the other classic cause.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Gutter Installation Cost Per Linear Foot (2026)"
      description="What gutters really cost installed in 2026 — per-foot pricing by material, the downspout and guard math, and how contractors should bid it."
      slug="gutter-installation-cost"
      calculatorHref="/calculators/gutter-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Gutter installation costs <strong>$8–$12 per linear foot</strong> for
        seamless aluminum (the material on 80%+ of US homes),{" "}
        <strong>$10–$16</strong> for galvanized steel, and{" "}
        <strong>$25–$40</strong> for copper — installed, 2026 pricing. A
        typical 180-foot home runs <strong>$1,500–$2,200</strong> for the
        gutters themselves, plus <strong>$300–$500</strong> for downspouts.
        Gutter guards add $5–$10 per foot if the home sits under trees.
      </p>
      <p>
        That per-foot number is the whole game in gutter bidding: measure the
        roofline, multiply by your rate, add the extras as visible line items.
        The contractors who lose money on gutters almost always lose it the
        same way — forgetting removal, fascia repair, or the second-story
        labor bump, not misjudging the gutter price itself.
      </p>

      <h2>Full cost breakdown</h2>
      <p>
        Here&apos;s what goes into a complete gutter bid, line by line. Use
        this as your checklist — every missing line is margin walking out
        the door.
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>2026 price range</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seamless aluminum gutters</td>
            <td className="num">$8–$12 / ft</td>
            <td>5-inch K-style; 6-inch adds ~$2–$3/ft</td>
          </tr>
          <tr>
            <td>Galvanized steel gutters</td>
            <td className="num">$10–$16 / ft</td>
            <td>Heavier, stronger, slower to hang</td>
          </tr>
          <tr>
            <td>Copper gutters</td>
            <td className="num">$25–$40 / ft</td>
            <td>Soldered joints; premium margin</td>
          </tr>
          <tr>
            <td>Downspouts (aluminum)</td>
            <td className="num">$75–$125 each</td>
            <td>One per 30–40 ft of gutter</td>
          </tr>
          <tr>
            <td>Gutter guards (micro-mesh)</td>
            <td className="num">$5–$10 / ft</td>
            <td>Quote as add-on, not bundled</td>
          </tr>
          <tr>
            <td>Old gutter removal</td>
            <td className="num">$1–$2 / ft</td>
            <td>Never eat this — it&apos;s real labor</td>
          </tr>
          <tr>
            <td>Fascia repair/replacement</td>
            <td className="num">$6–$12 / ft</td>
            <td>Found on ~half of replacement jobs</td>
          </tr>
          <tr>
            <td>Second-story labor bump</td>
            <td className="num">+25%</td>
            <td>Ladders, staging, slower everything</td>
          </tr>
        </tbody>
      </table>

      <h2>How to measure and price a gutter job</h2>
      <p>
        Walk the house with a measuring wheel or laser. Measure every eave —
        the horizontal roof edges where gutters mount — and add them up. That
        total is your linear footage. Then:
      </p>
      <ul>
        <li><strong>Count corners.</strong> Every inside and outside corner needs a mitered fitting and extra labor. Note them separately — they&apos;re the fiddly part of the job.</li>
        <li><strong>Plan downspouts.</strong> One per 30–40 feet, minimum one per continuous run. Long runs and valleys that dump concentrated water get 3×4-inch commercial downspouts.</li>
        <li><strong>Check the pitch.</strong> Gutters need about 1/4 inch of slope per 10 feet toward the downspout. If the fascia is wavy, say so in the bid — re-pitching existing gutters is a separate job.</li>
        <li><strong>Multiply and itemize.</strong> Linear feet × your per-foot rate, plus downspouts, removal, fascia, and guards as separate lines. Itemized bids get haggled less than lump sums.</li>
      </ul>
      <h2>Regional pricing and timing</h2>
      <p>
        Gutter labor tracks local wage markets more than material costs do —
        the aluminum coil costs roughly the same everywhere, but the crew
        hanging it doesn&apos;t. 2026 seamless aluminum ranges by region:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Aluminum $/ft installed</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Southeast</td>
            <td className="num">$7–$10</td>
            <td>Lower labor; high storm-replacement volume</td>
          </tr>
          <tr>
            <td>Midwest</td>
            <td className="num">$8–$11</td>
            <td>Ice-dam country; 6-inch upgrades common</td>
          </tr>
          <tr>
            <td>Northeast</td>
            <td className="num">$9–$13</td>
            <td>Higher labor; older homes, more fascia work</td>
          </tr>
          <tr>
            <td>West / Mountain</td>
            <td className="num">$9–$13</td>
            <td>Second-story prevalence pushes averages up</td>
          </tr>
          <tr>
            <td>Pacific Northwest</td>
            <td className="num">$9–$12</td>
            <td>Year-round rain = steady demand, fewer discounts</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Timing matters.</strong> Late fall is peak season everywhere —
        everyone wants gutters before winter, so nobody discounts. Late
        winter and early spring (in mild climates) are the soft spots where
        crews offer 10–15% off to fill schedules. After major wind/hail
        events, prices spike and lead times stretch to 6–8 weeks; that&apos;s
        when storm-chasers appear, which is its own reason to book the local
        company with the physical shop.
      </p>
      <p>
        <strong>Commercial is a different bid.</strong> 6–8 inch commercial
        gutters and oversized downspouts run $15–$25/ft installed, with
        scuppers, conductor heads, and tie-ins to storm drainage. Don&apos;t
        extrapolate residential per-foot rates onto a warehouse — the
        material, equipment (lifts), and liability are all heavier.
      </p>
      <h2>Warranties: get both in writing</h2>
      <p>
        Two warranties exist on every gutter job and clients conflate them.
        The <strong>material warranty</strong> (20 years to lifetime on
        aluminum, depending on manufacturer) covers finish failure and
        defects. The <strong>workmanship warranty</strong> (1–5 years from
        the installer) covers pitch, hangers, and leaks at joints. Put both
        on the quote with the installer&apos;s name attached to the second
        one. A lifetime material warranty means nothing if the company
        hanging them is gone by spring — which is another argument for
        established local shops over the cheapest bid.
      </p>
      <p>
        <strong>Ice dams:</strong> in snow country, gutters don&apos;t cause
        ice dams — heat loss through the roof does — but undersized or
        poorly pitched gutters make the damage worse by holding meltwater
        against the fascia. Heated gutter cables ($8–$15/ft installed) are
        a legitimate upsell where dams recur, but sell them alongside the
        real fix (attic air-sealing and insulation), not instead of it.
        A contractor who explains that distinction earns the insulation
        referral too — and the repeat customer for life.
      </p>
      <p>
        Run the roofline through the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a> to
        check your math — it handles the material tiers, downspout counts,
        and guard add-ons automatically.
      </p>

      <h2>Material comparison: what to quote and when</h2>
      <p>
        <strong>Seamless aluminum</strong> is the default for a reason: light,
        rust-proof, cheap, and formed on-site so joints only exist at corners
        and downspouts. It dents in hail and ladders can crease it, but at
        $8–$12/ft installed it&apos;s the value king.
      </p>
      <p>
        <strong>Galvanized steel</strong> takes abuse aluminum can&apos;t —
        ladders, branches, ice. It&apos;s heavier (slower install, hence the
        $10–$16/ft), and in coastal or humid markets it eventually rusts from
        the inside out. Quote it where durability matters more than price:
        commercial buildings, tall installs, ice-dam country.
      </p>
      <p>
        <strong>Copper</strong> is a different business. At $25–$40/ft with
        soldered joints, it&apos;s sold on looks and lifespan (50+ years), not
        price per foot. Historic homes, high-end new builds, and architects&apos;
        projects. The margin is excellent if you can solder cleanly — and
        disastrous if you can&apos;t, so don&apos;t learn on a client&apos;s house.
      </p>
      <p>
        <strong>Vinyl sectional</strong> exists at the big-box store and
        basically nowhere in professional bidding. It sags, cracks in cold,
        and leaks at every snap joint. If a client asks, explain the
        difference and quote seamless aluminum — it&apos;s barely more
        expensive installed and lasts three times longer.
      </p>

      <h2>Gutter guards: the upsell done right</h2>
      <p>
        Guards are the highest-margin line on a gutter bid, and the easiest to
        botch by quoting junk. Micro-mesh stainless guards ($5–$10/ft
        installed) actually work — they keep out leaves, needles, and
        shingle grit while handling heavy rain. Reverse-curve/helmet designs
        work but cost more and look bulkier. Snap-in screens, foam inserts,
        and brush guards are callback machines: they clog, collapse, or grow
        things.
      </p>
      <p>
        Always quote guards as a <strong>separate add-on line</strong>, never
        bundled into the gutter price. Bundling makes your base bid look
        expensive against competitors; a separate line lets the client say yes
        to the upgrade without re-bidding the job. Homes under mature trees
        close on guards at a very high rate — and every guard job is a future
        cleaning contract you don&apos;t need, which is worth saying out loud.
      </p>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Walk the fascia before you quote.</strong> Rotten fascia hides behind half the gutters you&apos;ll replace. Probe it with a screwdriver during the estimate — the surprise repair is the classic gutter margin-killer, and finding it early makes you look thorough, not expensive.</li>
        <li><strong>Sell the downspout upgrade.</strong> Moving a client from 2×3 to 3×4-inch downspouts costs you little and solves the #1 overflow complaint. It&apos;s an easy yes.</li>
        <li><strong>Bundle with roofing.</strong> If you do both trades, gutters quoted alongside a <a href="/guides/roof-replacement-cost-2026">roof replacement</a> close at a much higher rate — one crew, one schedule, one invoice. Even roofers who sub gutters out should quote them.</li>
        <li><strong>Pitch it right the first time.</strong> Re-hanging a sagging run under warranty costs more than the 10 extra minutes proper hangers and slope take during install. Hidden hangers every 24 inches, screwed — not nailed, not spiked — into rafter tails or solid fascia.</li>
        <li><strong>Photograph everything.</strong> Before/after of the fascia, the corners, the downspout terminations. Gutter work is invisible from the ground — photos are your portfolio and your warranty defense.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Eating the removal.</strong> Taking down 180 feet of old gutter, hauling it, and disposing of it is half a day for two people. Price it at $1–$2/ft or it comes out of your profit.</li>
        <li><strong>Forgetting the second story.</strong> Upper runs take ~25% longer — ladders, staging, material handling. Bid it or donate it.</li>
        <li><strong>Too few downspouts.</strong> Undersized drainage overflows in the first hard rain, and the client blames the gutters, not the math. When in doubt, add one.</li>
        <li><strong>Quoting guards as a lump sum.</strong> &ldquo;Gutter guards: $1,200&rdquo; invites haggling. &ldquo;Micro-mesh guards, 180 ft @ $7/ft&rdquo; invites a yes.</li>
        <li><strong>Ignoring where water goes.</strong> Downspouts that dump at the foundation cause basement and slab problems the client will absolutely connect to your work. Extend discharge 4–6 feet from the house or tie into drainage — and price it.</li>
      </ul>
      <h2>Repair vs. replace: the honest math</h2>
      <p>
        Not every gutter call needs new gutters. <strong>Repair</strong> when:
        isolated leaks at joints ($75–$150 per reseal), a sagging section
        that needs re-pitching ($200–$400), or 1–2 damaged downspouts.
        <strong>Replace</strong> when: gutters are 20+ years old, leaking at
        multiple seams, pulling away from fascia in several spots, or the
        homeowner wants guards (old gutters often can&apos;t support them).
        The rule of thumb: if repairs pass 40–50% of replacement cost, replace.
        Say this out loud on repair calls — the honesty sells the replacement
        when it&apos;s genuinely due, and the repair when it isn&apos;t.
      </p>
      <p>
        Run the roofline through the{" "}
        <a href="/calculators/gutter-calculator">gutter calculator</a>, build
        the itemized <a href="/quote">quote</a> the same day you measure, and
        send it before the next contractor shows up. Speed closes gutter jobs.
      </p>
      <Faq items={faqs} heading="Gutter questions, answered" />
    </GuideArticle>
  );
}
