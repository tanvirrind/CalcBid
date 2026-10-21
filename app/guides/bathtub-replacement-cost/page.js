import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Bathtub Replacement Cost (2026)",
  description:
    "Bathtub replacement cost in 2026: $1,500–$5,000 installed — alcove, freestanding, and walk-in tubs, plus removal, plumbing, and surround pricing.",
  keywords: [
    "bathtub replacement cost",
    "cost to replace bathtub",
    "how much does it cost to replace a bathtub",
    "bathtub installation cost",
    "cost to replace tub",
  ],
  alternates: {
    canonical: "https://calcbid.com/guides/bathtub-replacement-cost",
  },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Bathtub Replacement Cost (2026) | CalcBid",
    description:
      "Installed pricing for alcove, freestanding, and walk-in tubs — plus the hidden plumbing.",
    url: "https://calcbid.com/guides/bathtub-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathtub Replacement Cost (2026) | CalcBid",
    description:
      "Installed pricing for alcove, freestanding, and walk-in tubs — plus the hidden plumbing.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace a bathtub?",
    a: "In 2026, replacing a bathtub costs $1,500–$5,000 installed for a standard alcove tub. The tub itself is the small part — $200–$1,000 for an alcove unit — and the labor, removal, plumbing adjustments, and surround refit make up the rest. Freestanding and walk-in tubs run $3,000–$12,000+ installed because they need floor reinforcement, new plumbing runs, and often a full surround rebuild.",
  },
  {
    q: "Is it cheaper to replace a bathtub or convert to a shower?",
    a: "Replacement ($1,500–$5,000) is usually cheaper than a tub-to-shower conversion ($2,000–$12,000) because conversion requires new waterproofing, a pan, wall rebuild, and often drain relocation. People convert for accessibility or lifestyle reasons, not savings. If the decision is about cost, replacement wins; if it's about aging in place, read the conversion math first.",
  },
  {
    q: "How long does it take to replace a bathtub?",
    a: "A straightforward same-footprint replacement takes 1–2 days: demo the old tub and surround, set the new tub, plumb, and refit the surround. Freestanding tubs or jobs with drain relocation, floor reinforcement, or tile surround work run 3–7 days. Custom tile surrounds add their own 1–2 week timeline on top of the tub setting.",
  },
  {
    q: "Do you need a plumber to replace a bathtub?",
    a: "A licensed plumber should make the drain and supply connections — it's the code requirement in most places and the highest-risk part of the job. A good setup is a plumber for rough-in plus a remodeler or tile setter for the surround. A handyman-only tub replacement is where leaking drains and unpermitted work live.",
  },
  {
    q: "Can you replace a bathtub without removing the tile?",
    a: "Rarely, and never well. The tub flange tucks behind the surround, so the bottom row of tile (or the whole surround) has to come off to set the new tub correctly. The jobs advertised as 'no tile removal' are usually liner or insert systems, not true replacements — different product, different price, different lifespan.",
  },
  {
    q: "What adds the most cost to a bathtub replacement?",
    a: "Drain relocation ($1,000–$3,000) is the single biggest adder — moving a drain through a concrete slab can double the job. After that: freestanding tub plumbing through the floor ($800–$2,000), floor reinforcement for heavy tubs ($500–$1,500), and concealed water damage behind the old surround (budget 10–15% contingency). The tub itself is rarely the cost driver.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Bathtub Replacement Cost (2026)"
      description="What replacing a bathtub costs in 2026 — alcove, freestanding, and walk-in tubs installed — with the removal, plumbing, and surround math."
      slug="bathtub-replacement-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Send the quote"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Replacing a bathtub in 2026 costs <strong>$1,500–$5,000
        installed</strong> for a standard alcove tub — the <strong>tub itself
        is only $200–$1,000</strong>, and removal, plumbing, and the surround
        refit make up the rest. <strong>Freestanding tubs run
        $3,000–$8,000+</strong> installed, and <strong>walk-in tubs
        $4,000–$12,000+</strong>, because both need new plumbing runs and
        often floor work. The single biggest cost swing is <strong>drain
        relocation ($1,000–$3,000)</strong> — keep the drain where it is and
        the job stays simple.
      </p>
      <p>
        This is a sub-project of a{" "}
        <a href="/guides/bathroom-remodel-cost">full bathroom remodel</a> —
        read that guide for the whole-bath math. If you&apos;re weighing a
        shower instead of a tub, the{" "}
        <a href="/guides/tub-to-shower-conversion-cost">
          tub-to-shower conversion cost
        </a>{" "}
        guide prices the alternative.
      </p>

      <h2>Replacement cost by tub type</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Tub type</th>
            <th>Tub unit cost</th>
            <th>Installed range</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alcove (standard 60&Prime;)</td>
            <td className="num">$200–$1,000</td>
            <td className="num">$1,500–$5,000</td>
            <td className="num">1–2 days</td>
          </tr>
          <tr>
            <td>Alcove, whirlpool/jetted</td>
            <td className="num">$800–$3,000</td>
            <td className="num">$3,000–$7,000</td>
            <td className="num">2–4 days</td>
          </tr>
          <tr>
            <td>Freestanding (soaker)</td>
            <td className="num">$1,200–$5,000</td>
            <td className="num">$3,000–$8,000+</td>
            <td className="num">3–5 days</td>
          </tr>
          <tr>
            <td>Walk-in</td>
            <td className="num">$2,500–$8,000</td>
            <td className="num">$4,000–$12,000+</td>
            <td className="num">3–7 days</td>
          </tr>
          <tr>
            <td>Drop-in / undermount</td>
            <td className="num">$500–$2,500</td>
            <td className="num">$2,500–$6,000</td>
            <td className="num">2–4 days</td>
          </tr>
        </tbody>
      </table>

      <h2>The real cost breakdown</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>2026 price range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The tub (alcove)</td>
            <td className="num">$200–$1,000</td>
          </tr>
          <tr>
            <td>Removal and disposal</td>
            <td className="num">$300–$800</td>
          </tr>
          <tr>
            <td>Plumbing (same-location drain)</td>
            <td className="num">$500–$1,500</td>
          </tr>
          <tr>
            <td>Drain relocation</td>
            <td className="num">$1,000–$3,000</td>
          </tr>
          <tr>
            <td>Surround refit (acrylic/tile)</td>
            <td className="num">$800–$4,000</td>
          </tr>
          <tr>
            <td>Floor reinforcement (heavy tubs)</td>
            <td className="num">$500–$1,500</td>
          </tr>
          <tr>
            <td>Fixtures (filler, drain trim, valve)</td>
            <td className="num">$200–$1,000</td>
          </tr>
          <tr>
            <td>Concealed-damage contingency</td>
            <td className="num">10–15%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice the pattern: <strong>the tub is the cheapest line on its own
        project</strong>. The labor, removal, plumbing, and surround are where
        the money goes — which is also why the cheap-tub-expensive-install
        surprise is the #1 complaint in this trade. Itemize the lines and the
        client sees the truth before demo, not after.
      </p>

      <h2>The surround decision</h2>
      <p>
        The tub setting is half the job; the surround is the other half, and
        it has its own price curve:
      </p>
      <ul>
        <li><strong>Acrylic surround panels ($800–$2,000 installed):</strong> fast, sealed, low maintenance. The value play — and the honest match for a budget alcove tub.</li>
        <li><strong>Cultured marble ($1,500–$3,000):</strong> seamless look, no grout lines, mid-range price. Heavy — verify the wall framing.</li>
        <li><strong>Tile ($2,000–$4,500+):</strong> the premium choice and the longest timeline. Waterproofing membrane behind it is non-negotiable — price it in the bid ($450–$750) rather than letting it surprise. For the material side of that tile work, the <a href="/calculators/tile-flooring-calculator">tile calculator</a> gives you the square-foot numbers you can adapt for vertical surfaces.</li>
      </ul>
      <p>
        And the uncomfortable truth: <strong>you can&apos;t set a new tub
        without opening the surround</strong>. The tub flange tucks behind the
        wall material. Any bid that promises otherwise is selling a liner
        system, not a replacement — fine product, different price, say so.
      </p>

      <h2>Freestanding and walk-in: the special cases</h2>
      <ul>
        <li><strong>Freestanding tubs</strong> need the drain and filler through the floor — new plumbing runs ($800–$2,000), and the floor must be finished underneath since the tub doesn&apos;t hide it. A cast-iron freestanding soaker can weigh 300+ lbs empty; verify the floor structure or price the reinforcement.</li>
        <li><strong>Walk-in tubs</strong> are accessibility projects with their own economics: the tub costs more, the door seal is a maintenance item, and fill/drain times are slow (plan the hot-water capacity). They&apos;re the right answer for aging-in-place — and a poor resale choice in a home whose buyers are all young families.</li>
        <li><strong>Jetted/whirlpool tubs</strong> need a dedicated GFCI circuit — an electrician line item ($200–$500) that&apos;s easy to forget and impossible to skip.</li>
      </ul>

      <h2>The process, step by step</h2>
      <ul>
        <li><strong>1. Decide the drain.</strong> Same location or move? This one decision drives half the bid.</li>
        <li><strong>2. Demo.</strong> Remove the surround, then the tub. Inspect the subfloor and wall framing for rot — budget the contingency.</li>
        <li><strong>3. Plumbing rough-in.</strong> Drain, overflow, supply lines, and any relocation. Pressure-test before closing walls.</li>
        <li><strong>4. Substrate and waterproofing.</strong> Cement board on wet walls, membrane where tile goes, tub set and leveled.</li>
        <li><strong>5. Surround.</strong> Panels, cultured marble, or tile — in that order of timeline.</li>
        <li><strong>6. Fixtures and finish.</strong> Filler, drain trim, valve trim, caulk every joint, final inspection.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Quoting the tub, forgetting the project.</strong> The $400 tub with $2,800 of install is the standard complaint. Itemize every line.</li>
        <li><strong>Setting a tub on an uninspected subfloor.</strong> The old tub has been leaking for years, probably. Rotten subfloor under a new tub is a structural failure, not a cosmetic one.</li>
        <li><strong>No blocking for future grab bars.</strong> Even on a standard replacement, add blocking while the walls are open — $50 of lumber now, or opened walls later.</li>
        <li><strong>Promising no tile removal.</strong> The flange is behind the surround. Promise a liner if that&apos;s what it is; don&apos;t promise a replacement without opening walls.</li>
        <li><strong>Skipping the flood test on tile surrounds.</strong> Same rule as showers: fill, mark, wait 24 hours.</li>
        <li><strong>Wrong tub for the water heater.</strong> A 70-gallon soaker on a 40-gallon heater is a cold bath. Size the heater or the tub.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> demo and haul-away (with a helper — cast iron is brutal), and the final caulk and fixture trim on a straightforward swap. Realistic savings: $500–$1,000.</li>
        <li><strong>Hire a pro:</strong> the drain and supply connections (licensed plumber in most jurisdictions), the tub setting itself, and all surround work. A leaking tub drain rots the floor from below — the most expensive $300 you&apos;ll ever save.</li>
        <li><strong>The gray zone:</strong> acrylic surround panels. A careful DIYer can set panels on square walls, but the tub-to-wall and wall-to-wall joints have to be perfect — and they&apos;re the leak points.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        <strong>Yes, in most municipalities</strong> — a tub replacement
        changes a plumbing fixture, which puts it in plumbing-permit
        territory (<strong>$100–$400</strong>). Same-footprint swaps with no
        drain move are the lightest version and some jurisdictions allow them
        without a permit, but don&apos;t assume — the permit buys you the
        rough-plumbing inspection, which is exactly the checkpoint that
        catches the leaking drain before it&apos;s buried. Drain relocation,
        jetted tubs (electrical circuit), and anything touching the vent
        stack always need permits. Unpermitted bathroom plumbing is the
        first thing a buyer&apos;s inspector flags at resale.
      </p>
      <p>
        Price the surround as its own line and send the <a href="/quote">
        quote</a> with the drain decision stated in writing — the client
        choosing between replacement and <a href="/guides/tub-to-shower-conversion-cost">
        conversion</a> needs both bids on the same page to decide.
      </p>

      <h2>Worked example: an alcove tub swap with surround, full invoice</h2>
      <p>
        Here is the standard job from the breakdown table as one invoice: a
        60&Prime; alcove tub, same drain location, acrylic surround, new
        valve and trim. Every line is priced inside the ranges above:
      </p>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alcove tub (from the $200–$1,000 unit range)</td>
            <td className="num">$650</td>
          </tr>
          <tr>
            <td>Demo of old tub and surround, plus disposal</td>
            <td className="num">$480</td>
          </tr>
          <tr>
            <td>Plumbing — drain, overflow, and supplies, same location</td>
            <td className="num">$850</td>
          </tr>
          <tr>
            <td>Valve and trim kit (from the $200–$1,000 fixtures range)</td>
            <td className="num">$320</td>
          </tr>
          <tr>
            <td>Acrylic surround kit, installed</td>
            <td className="num">$1,150</td>
          </tr>
          <tr>
            <td>Subfloor check and minor repair allowance</td>
            <td className="num">$250</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td className="num"><strong>$3,700</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        The $3,700 total sits in the middle of the $1,500–$5,000 installed
        range for an alcove replacement, on the standard 1–2 day timeline.
        Two details make this invoice honest. First, the subfloor line is an
        allowance, not a charge: the subfloor gets inspected at demo, the
        $250 covers minor repair if rot is found, and it is not billed if
        the floor is sound — that is the concealed-damage contingency from
        the breakdown, given a number and a rule instead of left as a
        surprise. Second, there is no drain relocation line, because the
        drain stayed put. Move it and this same invoice grows by
        $1,000–$3,000, which is why the drain decision is step one of the
        process above.
      </p>

      <h2>Regional variation and seasonal timing</h2>
      <p>
        The tub, surround kit, and fixtures ship nationally and cost about
        the same everywhere; the installed total moves because labor does.
        The same $3,700 invoice prices toward the bottom of the
        $1,500–$5,000 range in lower-cost markets where plumbers and
        remodelers compete on price, and toward the top in high-cost metros,
        where the plumbing line alone can run at the upper end of its
        $500–$1,500 range and demo crews bill more for disposal. Rural jobs
        can land in between on labor but pick up trip charges when the
        nearest licensed plumber drives an hour each way.
      </p>
      <p>
        Timing moves the number too. Bathroom remodelers are busiest in
        spring and early summer, when quotes harden and start dates stretch
        weeks out. In the winter off-season — January and February in most
        markets — schedules open up, and some contractors will trim labor
        pricing or waive small adders to keep crews working. The saving is
        real but modest, and it never applies to the tub or fixtures. The
        larger seasonal win is availability: an off-season booking gets the
        crew you want on the week you want, while a spring booking takes the
        crew that is left. If the bathroom can wait six weeks, quote it in
        both seasons and let the bids make the decision.
      </p>

      <Faq items={faqs} heading="Bathtub replacement questions, answered" />
    </GuideArticle>
  );
}
