import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Siding Installation Cost Per Square Foot (2026)",
  description:
    "Siding installation cost per sq ft in 2026: vinyl, fiber cement, wood, and metal pricing plus tear-off and trim.",
  keywords: [
    "siding installation cost per square foot",
    "how much does siding cost",
    "cost to side a house",
    "vinyl siding cost per square foot",
    "house siding cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/siding-cost-per-square-foot" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Siding Installation Cost Per Square Foot (2026) | CalcBid",
    description:
      "Vinyl, fiber cement, wood, and metal pricing — plus tear-off and trim.",
    url: "https://calcbid.com/guides/siding-cost-per-square-foot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Installation Cost Per Square Foot (2026) | CalcBid",
    description: "Vinyl, fiber cement, wood, and metal pricing — plus tear-off and trim.",
  },
};

const faqs = [
  {
    q: "How long does siding last?",
    a: "Vinyl: 20–40 years (fades before it fails). Fiber cement: 30–50+ years. Wood/cedar: 20–40 with diligent painting/staining, far less without. Metal: 40–60 years. Engineered wood (LP SmartSide): 20–30 years with factory finish. Lifespan claims assume proper install — bad flashing kills any siding early.",
  },
  {
    q: "Can you install new siding over old siding?",
    a: "Sometimes, but usually shouldn't. Going over old siding hides rot, adds weight, voids most manufacturer warranties, and traps moisture. The only common exception is vinyl over flat, sound existing siding — and even then, tear-off lets you fix the weather barrier, which is where the real value is.",
  },
  {
    q: "How do I know when siding needs replacing vs. repair?",
    a: "Replace when: widespread warping/buckling, rot behind the siding, hail damage across multiple elevations, or fading so severe the house looks tired. Repair when: isolated storm damage, a few bad boards, or trim-only issues. If repair quotes pass 30–40% of replacement cost, replace.",
  },
  {
    q: "Does new siding increase home value?",
    a: "Yes — siding replacement consistently ranks among the highest-ROI exterior projects, recouping roughly 70–80% at resale for vinyl and fiber cement. It also sells the house faster: curb appeal is the first showing. Quote it as an investment, not an expense, and the price resistance drops.",
  },
  {
    q: "What's the best siding for cold climates?",
    a: "Fiber cement and engineered wood handle freeze-thaw best; both stay dimensionally stable where vinyl gets brittle and cracks in deep cold. Insulated vinyl is the budget cold-climate play — the foam backing adds R-value and impact resistance. Whatever you quote, the weather barrier and flashing details matter more than the siding choice.",
  },
  {
    q: "How do you maintain fiber cement vs. vinyl siding?",
    a: "Vinyl: wash yearly with a garden hose and soft brush — no painting ever, though faded vinyl can be painted with vinyl-safe paint. Fiber cement: wash yearly, recaulk joints every 5–7 years, repaint every 12–15 years (factory-finished ColorPlus stretches that). Both: keep mulch and soil 6+ inches below the bottom course.",
  },
  {
    q: "Why is my siding bill higher than the per-square-foot price suggested?",
    a: "The per-foot price covers siding + standard install. The extras — tear-off ($1–$3/sq ft), trim and accessories, house wrap, fascia/soffit work, and second-story labor — commonly add 25–40% to the base number. An itemized quote shows where it went; a lump sum just looks expensive.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Siding Installation Cost Per Square Foot (2026)"
      description="What house siding really costs in 2026 — per-square-foot pricing for all four major materials, plus the tear-off and trim math."
      slug="siding-cost-per-square-foot"
      calculatorHref="/calculators/siding-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        House siding installed costs <strong>$8–$22 per sq ft</strong> in
        2026 depending on material: <strong>vinyl $8–$12</strong>,{" "}
        <strong>fiber cement $12–$18</strong>, <strong>metal $12–$16</strong>,
        and <strong>wood/cedar $15–$22</strong>. A 1,500 sq ft wall area —
        about 15 squares net — runs <strong>$12,000–$18,000</strong> in
        vinyl or <strong>$18,000–$27,000</strong> in fiber cement, before
        tear-off and extras.
      </p>
      <p>
        Siding is the rare trade where the material choice <em>is</em> the
        bid. Labor doesn&apos;t vary nearly as much as product cost, so your
        real job is presenting tiers — good/better/best on one page — and
        letting the homeowner buy the price they want. Single-number siding
        bids lose to tiered bids constantly.
      </p>

      <h2>Full cost breakdown by material</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>Installed $/sq ft</th>
            <th>1,500 sq ft home</th>
            <th>Lifespan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vinyl</td>
            <td className="num">$8–$12</td>
            <td className="num">$12,000–$18,000</td>
            <td>20–40 yrs</td>
          </tr>
          <tr>
            <td>Fiber cement</td>
            <td className="num">$12–$18</td>
            <td className="num">$18,000–$27,000</td>
            <td>30–50+ yrs</td>
          </tr>
          <tr>
            <td>Engineered wood (LP SmartSide)</td>
            <td className="num">$10–$15</td>
            <td className="num">$15,000–$22,500</td>
            <td>20–30 yrs</td>
          </tr>
          <tr>
            <td>Metal / aluminum</td>
            <td className="num">$12–$16</td>
            <td className="num">$18,000–$24,000</td>
            <td>40–60 yrs</td>
          </tr>
          <tr>
            <td>Wood / cedar</td>
            <td className="num">$15–$22</td>
            <td className="num">$22,500–$33,000</td>
            <td>20–40 yrs</td>
          </tr>
          <tr>
            <td>Stucco (for comparison)</td>
            <td className="num">$9–$14</td>
            <td className="num">$13,500–$21,000</td>
            <td>50+ yrs</td>
          </tr>
        </tbody>
      </table>
      <p>
        And the lines that sit <em>under</em> the per-foot price on a real bid:
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
            <td>Tear-off of old siding</td>
            <td className="num">$1–$3 / sq ft</td>
            <td>Always a separate line</td>
          </tr>
          <tr>
            <td>Trim &amp; accessories</td>
            <td className="num">~$85 / 500 sq ft</td>
            <td>J-channel, corners, starter strips</td>
          </tr>
          <tr>
            <td>House wrap / weather barrier</td>
            <td className="num">$0.50–$1 / sq ft</td>
            <td>Replace if the old barrier is shot</td>
          </tr>
          <tr>
            <td>Fascia &amp; soffit</td>
            <td className="num">$6–$12 / lin ft</td>
            <td>Inspect while you&apos;re up there</td>
          </tr>
          <tr>
            <td>Sheathing repair</td>
            <td className="num">$2–$5 / sq ft</td>
            <td>Rot found at tear-off; allowance line</td>
          </tr>
        </tbody>
      </table>

      <h2>Measure in squares, bid in tiers</h2>
      <p>
        The industry prices in <strong>squares</strong> (1 square = 100 sq
        ft). Measure each wall (length × height), add them up, subtract ~15%
        for windows and doors, divide by 100. A 1,800 sq ft wall area is
        about 15 squares net — order 17 with 10% waste (15% for gables and
        dormers, where every angle eats a board).
      </p>
      <p>
        Then present <strong>three tiers on one page</strong>: good (vinyl),
        better (fiber cement or engineered wood), best (fiber cement premium
        finish or cedar). This isn&apos;t upselling theater — it doubles
        close rates because the homeowner chooses their price instead of
        accepting or rejecting yours. Anchor the middle tier as the
        recommendation; most buyers land there.
      </p>
      <p>
        Check your square math in the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a> — it
        handles waste, openings, and per-tier pricing.
      </p>

      <h2>Material deep-dive: what to recommend where</h2>
      <p>
        <strong>Vinyl</strong> is the volume choice: cheap, fast to hang,
        zero painting, and modern insulated vinyl even adds R-value. Its
        weaknesses are hail (cracks), deep cold (brittle), and dark colors
        (fade/chalk). In hail country, quote it honestly as the budget tier
        and let fiber cement be the recommendation.
      </p>
      <p>
        <strong>Fiber cement</strong> (James Hardie and peers) is the
        durability upsell: rot-proof, fire-resistant, holds paint 2–3×
        longer than wood, and shrugs off hail that destroys vinyl. Heavier
        and slower to install — hence the price — and it must be kept 6+
        inches above grade and flashed correctly. Factory-finished ColorPlus
        costs more upfront and pays back in skipped repaints.
      </p>
      <p>
        <strong>Engineered wood</strong> (LP SmartSide) splits the
        difference: wood look, better durability than real cedar, lighter
        and faster than fiber cement. A strong middle tier in most markets —
        learn its install details (it has specific clearance and flashing
        requirements) before you quote it.
      </p>
      <p>
        <strong>Metal</strong> owns the modern aesthetic — standing-seam and
        flat-panel profiles on contemporary builds. Long-lived and
        low-maintenance, but dents show and panel replacement means
        color-matching. Quote it where the architecture asks for it.
      </p>
      <p>
        <strong>Wood/cedar</strong> is the premium traditional choice with
        premium maintenance: staining every 3–5 years or it grays and
        degrades. Sell it to clients who want the look and accept the upkeep
        — and price the maintenance plan as a follow-on.
      </p>

      <h2>What moves the bid</h2>
      <ul>
        <li><strong>Stories:</strong> second-story work adds 20–30% labor — staging, material handling, slower everything.</li>
        <li><strong>Architecture:</strong> gables, dormers, and bump-outs multiply cuts and trim. A simple ranch and a Victorian with the same square footage are different bids.</li>
        <li><strong>Tear-off layers:</strong> one layer of old siding is standard; two layers (or asbestos-cement, which needs abatement) changes the number significantly.</li>
        <li><strong>Sheathing condition:</strong> you won&apos;t know until tear-off. Carry a sheathing-repair allowance ($2–$5/sq ft for affected areas) so the change order isn&apos;t a fight.</li>
        <li><strong>Trim package:</strong> basic J-channel vs. full AZEK/PVC trim boards with crown details can swing thousands. Show the options.</li>
      </ul>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Sell the weather barrier.</strong> Once the old siding is off, new house wrap is the easiest upsell in exterior remodeling — the client can see the old, tired barrier. It&apos;s also where the real moisture protection lives.</li>
        <li><strong>Flash like your warranty depends on it.</strong> Because it does. Windows, doors, ledger boards, and penetrations get proper flashing before a single course goes up. Most siding failures are flashing failures wearing a siding costume.</li>
        <li><strong>Quote the fascia and soffit.</strong> You&apos;re already on the ladders with the trim crew. It&apos;s the natural add-on and it makes the whole job look finished.</li>
        <li><strong>Photograph the tear-off.</strong> Rotten sheathing, missing wrap, mouse highways — shoot it all. It justifies the repair allowance and sells the wrap upgrade.</li>
        <li><strong>Mind the gaps.</strong> Fiber cement and engineered wood need specific clearances (6 in. above grade, 2 in. above decks/roofs). Installers who butt siding to the ground create the rot they&apos;ll be blamed for.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Burying tear-off in the lump sum.</strong> &ldquo;Includes removal&rdquo; gets haggled; a visible $1–$3/sq ft line gets respected.</li>
        <li><strong>Single-number bids.</strong> Without tiers you&apos;re either the cheapest (and thinnest) or the most expensive (and rejected). Three tiers, one page.</li>
        <li><strong>Ignoring the sheathing allowance.</strong> Finding rot with no allowance means an awkward mid-job price conversation. Carry the line.</li>
        <li><strong>Quoting vinyl in hail country without the caveat.</strong> The first hailstorm after install generates the &ldquo;you should have told me&rdquo; call. Recommend fiber cement where it hails; let vinyl be the informed budget choice.</li>
        <li><strong>Forgetting the second story.</strong> Same lesson as every trade: height costs money. Bid it.</li>
      </ul>
      <h2>Regional pricing</h2>
      <p>
        Siding labor follows local construction wages; materials are
        national. 2026 vinyl installed ranges:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Vinyl $/sq ft installed</th>
            <th>Fiber cement $/sq ft installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Southeast / Texas</td>
            <td className="num">$7–$10</td>
            <td className="num">$11–$15</td>
          </tr>
          <tr>
            <td>Midwest</td>
            <td className="num">$8–$11</td>
            <td className="num">$12–$16</td>
          </tr>
          <tr>
            <td>Northeast</td>
            <td className="num">$10–$14</td>
            <td className="num">$14–$20</td>
          </tr>
          <tr>
            <td>Mountain West</td>
            <td className="num">$9–$13</td>
            <td className="num">$13–$18</td>
          </tr>
          <tr>
            <td>West Coast</td>
            <td className="num">$11–$15</td>
            <td className="num">$15–$22</td>
          </tr>
        </tbody>
      </table>
      <h2>Insulated vinyl: the middle tier that sells itself</h2>
      <p>
        Insulated vinyl — standard vinyl profile laminated to contoured
        foam backing — deserves its own mention because it&apos;s the
        easiest step-up sale in siding. At roughly <strong>$1–$2/sq ft more
        than hollow vinyl</strong>, it adds R-2 to R-5 of insulation value,
        resists dents and hail better, and hangs straighter (the foam
        bridges minor wall irregularities). In energy-conscious markets
        and cold climates it closes at a high rate against plain vinyl —
        quote it as the &ldquo;better&rdquo; tier between hollow vinyl and
        fiber cement and watch where buyers land.
      </p>
      <h2>Color, finish, and the fade conversation</h2>
      <p>
        Dark siding colors absorb heat and fade faster — on vinyl, dark
        colors can even void warranties or cause heat distortion (most
        manufacturers restrict dark profiles to heat-resistant
        formulations). Have the fade conversation honestly: south and west
        elevations fade first; factory-finished fiber cement (ColorPlus
        and equivalents) carries 15-year finish warranties that site-painted
        siding can&apos;t match. For clients set on a dark color, steer
        toward fiber cement or engineered wood with factory finish rather
        than dark vinyl — the callback you avoid is worth more than the
        easier sale.
      </p>
      <h2>Insurance and storm work</h2>
      <p>
        In hail and wind zones, siding replacement is often an insurance
        job — which changes the sale. Document damage with dated photos
        before tear-off, help the homeowner understand ACV vs. replacement
        cost coverage, and be present for the adjuster meeting if
        they&apos;ll allow it. Insurance-paid jobs close faster and haggle
        less, but they also bring paperwork: supplements for rotted
        sheathing found at tear-off are normal and expected, so photograph
        everything. One caution: never promise a client their claim will
        be approved, and never offer to &ldquo;handle the deductible&rdquo;
        — both are illegal in many states.
      </p>
      <h2>How homeowners should compare bids (give them this)</h2>
      <p>
        Clients comparing three siding bids are really comparing three
        different scopes unless you teach them otherwise — and the
        contractor who educates wins. Tell them to check: <strong>same
        material tier?</strong> (vinyl vs. fiber cement quotes aren&apos;t
        comparable), <strong>tear-off included or separate?</strong>,{" "}
        <strong>house wrap included?</strong>, <strong>what trim
        package?</strong>, and <strong>what&apos;s the workmanship
        warranty?</strong> A $14,000 vinyl bid with wrap, new trim, and a
        5-year workmanship warranty beats a $12,000 bid that&apos;s siding
        over rotten wrap with a handshake warranty. Red flags for
        homeowners: bids 30%+ below the pack (something&apos;s missing),
        &ldquo;we&apos;ll handle the permit&rdquo; with no permit number
        ever produced, and pressure to sign today for a
        &ldquo;storm-damage discount.&rdquo; When you&apos;re the
        contractor teaching this, you&apos;re also the contractor they
        trust — which is the whole point.
      </p>
      <p>
        <strong>Lead paint (pre-1978 homes):</strong> disturbing old siding
        on a pre-1978 home triggers EPA RRP lead-safe rules — certified
        renovator on site, containment, specialized cleanup, and
        documentation. Compliance adds roughly $1–$2/sq ft to the job and
        it is not optional; fines start at five figures per day. Price it
        as its own line so the client sees it&apos;s federal law, not
        contractor markup — and never let a crew &ldquo;just tear it
        quick&rdquo; without containment.
      </p>
      <p>
        Run the squares and tiers in the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a> and
        send all three options in one <a href="/quote">quote</a>. If you
        also do gutters, check the{" "}
        <a href="/guides/gutter-installation-cost">gutter cost guide</a> —
        the two trades bundle beautifully on the same house.
      </p>
      <Faq items={faqs} heading="Siding questions, answered" />
    </GuideArticle>
  );
}
