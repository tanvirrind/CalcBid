import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Small Bathroom Remodel Cost (2026)",
  description:
    "Small bathroom remodel cost in 2026: $6,500–$18,000 for 5×7 and powder rooms, space-saving choices, and why small baths cost more per sq ft.",
  keywords: [
    "small bathroom remodel cost",
    "how much does a small bathroom remodel cost",
    "5x7 bathroom remodel cost",
    "powder room remodel cost",
  ],
  alternates: {
    canonical: "https://calcbid.com/guides/small-bathroom-remodel-cost",
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
    title: "Small Bathroom Remodel Cost (2026) | CalcBid",
    description:
      "Real costs for 5×7 and powder-room remodels, space math, and where small-bath money goes.",
    url: "https://calcbid.com/guides/small-bathroom-remodel-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Bathroom Remodel Cost (2026) | CalcBid",
    description:
      "Real costs for 5×7 and powder-room remodels, space math, and where small-bath money goes.",
  },
};

const faqs = [
  {
    q: "How much does it cost to remodel a small bathroom?",
    a: "A small full bathroom (5×7, 35 sq ft) costs $6,500–$15,000 to remodel in 2026; a powder room (half bath) costs $3,000–$8,000. The counter-intuitive part: small bathrooms cost MORE per square foot ($200–$350) than large ones, because the toilet, vanity, and plumbing have fixed costs regardless of room size.",
  },
  {
    q: "What is the cheapest way to remodel a small bathroom?",
    a: "Keep the layout exactly as-is, keep the tub/shower, and spend on the high-visibility items: paint, vanity, mirror, lighting, and hardware. A cosmetic refresh of a 5×7 bath runs $3,000–$6,000. The layout is the budget — moving the toilet or drain in a small bath is disproportionately expensive because there's no room to absorb the work.",
  },
  {
    q: "Is a 5×7 bathroom too small to remodel?",
    a: "No — 5×7 (35 sq ft) is the most common full-bath size in American homes and remodels well. The constraints are real (door swing, clearances, fixture sizes), but the project is simpler than a primary bath: fewer fixtures, less tile, shorter plumbing runs. It's also the fastest bathroom remodel — often 1–2 weeks of active work.",
  },
  {
    q: "How can I make a small bathroom feel bigger on a budget?",
    a: "The big three: a large mirror (the cheapest square footage you'll ever 'add'), light-colored large-format tile with minimal grout lines (fewer visual breaks = bigger feel), and a pedestal or wall-mount vanity that shows floor underneath. Glass shower doors instead of curtains, and recessed medicine cabinets instead of surface-mounted, round out the high-impact list.",
  },
  {
    q: "Should I put a tub or shower in a small bathroom?",
    a: "If it's the home's only full bath, keep a tub — families with small children need one, and removing it narrows resale. If there are two or more baths, a shower usually serves a small bath better: a 32×48-inch shower feels roomier than a 60-inch tub squeezed into the same wall, and the conversion numbers are in our tub-to-shower conversion guide.",
  },
  {
    q: "What adds the most value to a small bathroom remodel?",
    a: "For resale: a clean, modern, neutral finish package — new vanity, updated lighting, fresh tile or tub surround, and a proper exhaust fan. For daily life: storage (a recessed medicine cabinet and a vanity with drawers, not doors) and lighting (bright, shadow-free vanity lighting transforms a small bath more than any fixture upgrade).",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Small Bathroom Remodel Cost (2026)"
      description="What remodeling a small bathroom really costs in 2026 — 5×7 and powder-room budgets, where the money goes, and the space math that decides the layout."
      slug="small-bathroom-remodel-cost"
      updated="October 2026"
      calculatorHref="/calculators/tile-flooring-calculator"
      calculatorLabel="Estimate the tile"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Remodeling a small full bathroom (5×7, 35 sq ft) costs{" "}
        <strong>$6,500–$15,000</strong> in 2026; a powder room costs{" "}
        <strong>$3,000–$8,000</strong>. Here&apos;s the twist that surprises
        everyone: small bathrooms cost <strong>more per square foot</strong>{" "}
        ($200–$350) than big ones, because the toilet, vanity, and plumbing
        cost the same whether the room is 35 or 150 square feet. The layout is
        the budget — keep the fixtures where they are and the project stays
        sane.
      </p>
      <p>
        This is the focused companion to our{" "}
        <a href="/guides/bathroom-remodel-cost">bathroom remodel cost</a>{" "}
        pillar — same numbers, sized for the most common bathroom in American
        homes. For the tile line item, see{" "}
        <a href="/guides/bathroom-tile-installation-cost">
          bathroom tile installation cost
        </a>
        .
      </p>

      <h2>Cost by small-bathroom type</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Bathroom</th>
            <th>Typical size</th>
            <th>Cosmetic refresh</th>
            <th>Full remodel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Powder room (half bath)</td>
            <td className="num">20–40 sq ft</td>
            <td className="num">$1,500–$4,000</td>
            <td className="num">$3,000–$8,000</td>
          </tr>
          <tr>
            <td>5×7 full bath</td>
            <td className="num">35 sq ft</td>
            <td className="num">$3,000–$6,000</td>
            <td className="num">$6,500–$15,000</td>
          </tr>
          <tr>
            <td>Small primary bath</td>
            <td className="num">50–80 sq ft</td>
            <td className="num">$4,000–$8,000</td>
            <td className="num">$10,000–$20,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        The powder room deserves a callout: no tub or shower means no
        waterproofing, no pan, no glass — the three most expensive wet-area
        lines vanish. It&apos;s the highest-impact-per-dollar bathroom project
        in the house and the one guests actually see.
      </p>

      <h2>The per-square-foot paradox</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Bathroom size</th>
            <th>Total remodel range</th>
            <th>Effective $/sq ft</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>35 sq ft (5×7)</td>
            <td className="num">$6,500–$15,000</td>
            <td className="num">$185–$430</td>
          </tr>
          <tr>
            <td>70 sq ft (hall bath)</td>
            <td className="num">$10,000–$20,000</td>
            <td className="num">$145–$285</td>
          </tr>
          <tr>
            <td>150 sq ft (primary)</td>
            <td className="num">$15,000–$35,000</td>
            <td className="num">$100–$235</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fixed costs dominate small baths: the toilet ($400–$900 installed), the
        vanity ($800–$2,500), the plumbing rough-in, the permit — none of
        these shrink with the room. Meanwhile labor is <em>less</em>{" "}
        efficient in tight quarters: tile setters and plumbers work slower in
        a 35 sq ft box. Quote small baths by the project, never by a per-foot
        rate borrowed from a primary-bath job — that&apos;s how small-bath
        bids lose money.
      </p>

      <h2>Where the money goes in a 5×7</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Line item</th>
            <th>2026 range</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tub/shower (keep or refresh)</td>
            <td className="num">$500–$3,000</td>
            <td>Reglaze ($500–$1,000) vs. replace</td>
          </tr>
          <tr>
            <td>Floor + wall tile (installed)</td>
            <td className="num">$1,500–$4,500</td>
            <td>Small area, high labor intensity</td>
          </tr>
          <tr>
            <td>Vanity + top + faucet</td>
            <td className="num">$800–$2,500</td>
            <td>24–30&quot; vanities; drawers beat doors</td>
          </tr>
          <tr>
            <td>Toilet (installed)</td>
            <td className="num">$400–$900</td>
            <td>Round bowl saves 2&quot; of clearance</td>
          </tr>
          <tr>
            <td>Plumbing (no moves)</td>
            <td className="num">$800–$2,000</td>
            <td>Valve, supplies, drains in place</td>
          </tr>
          <tr>
            <td>Lighting, fan, electrical</td>
            <td className="num">$500–$1,500</td>
            <td>Vanity lighting is the #1 upgrade</td>
          </tr>
          <tr>
            <td>Paint + finishes</td>
            <td className="num">$300–$800</td>
            <td>Mirror, hardware, accessories</td>
          </tr>
        </tbody>
      </table>

      <h2>The space math: what fits and what doesn&apos;t</h2>
      <p>
        Small bathrooms live or die on clearances, and code minimums are the
        design language:
      </p>
      <ul>
        <li><strong>Toilet:</strong> 21 inches clear in front, 15 inches from centerline to each side wall. A round-bowl toilet saves ~2 inches over elongated — in a 5×7, that&apos;s the difference between comfortable and cramped.</li>
        <li><strong>Door swing:</strong> an in-swinging door eats 9+ sq ft of a 35 sq ft room. Pocket doors ($500–$1,000 installed) or out-swing doors reclaim it — price the pocket door framing honestly, it&apos;s real carpentry.</li>
        <li><strong>Vanity:</strong> 24-inch vanities fit; 30-inch is the sweet spot if the wall allows. Wall-mount or pedestal styles show floor and read larger. Drawers, not doors — you can actually reach what&apos;s stored.</li>
        <li><strong>Shower vs. tub:</strong> a 60-inch tub wall also fits a 48–60-inch shower. Glass doors (not curtains) keep sightlines open; a curb reads smaller than a low threshold.</li>
        <li><strong>Storage:</strong> recessed medicine cabinets, over-toilet shelving, and a linen niche in the wall cavity. Surface-mounted storage shrinks the room visually.</li>
      </ul>

      <h2>Space-saving choices worth the money</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Choice</th>
            <th>Added cost</th>
            <th>Payoff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Large-format light tile (12×24)</td>
            <td className="num">$0–$2 / sq ft over basic</td>
            <td>Fewer grout lines = visually larger room</td>
          </tr>
          <tr>
            <td>Oversized mirror / mirrored wall</td>
            <td className="num">$200–$600</td>
            <td>Cheapest &ldquo;square footage&rdquo; you&apos;ll ever buy</td>
          </tr>
          <tr>
            <td>Pocket door</td>
            <td className="num">$500–$1,000</td>
            <td>Reclaims ~9 sq ft of swing space</td>
          </tr>
          <tr>
            <td>Wall-mount vanity + toilet</td>
            <td className="num">$400–$1,200</td>
            <td>Visible floor = bigger feel; easier cleaning</td>
          </tr>
          <tr>
            <td>Recessed medicine cabinet</td>
            <td className="num">$150–$400</td>
            <td>Storage without protruding into the room</td>
          </tr>
          <tr>
            <td>Glass shower door</td>
            <td className="num">$800–$2,000</td>
            <td>Unbroken sightline across the room</td>
          </tr>
        </tbody>
      </table>

      <h2>What NOT to cheap out on</h2>
      <ul>
        <li><strong>The exhaust fan.</strong> Small baths steam up fast; an undersized or loud fan gets switched off, and then the moisture eats the room. Size 1 CFM per sq ft minimum and buy quiet (1.0 sone or less) so it actually gets used.</li>
        <li><strong>Waterproofing.</strong> Same rule as big baths, higher stakes — water has nowhere to go in 35 sq ft. Membrane systems behind shower tile, not shortcuts.</li>
        <li><strong>The vanity faucet and valve.</strong> Cheap cartridges drip within two years, and in a small bath the shutoffs are harder to reach. Mid-tier fixtures are the value play.</li>
        <li><strong>Lighting quality.</strong> One overhead can-light makes a small bath a cave. Layered vanity lighting (sconces or a lit mirror) is a $300–$600 upgrade with outsized impact.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Moving the toilet.</strong> In a 5×7 there is almost nowhere for it to go, and the drain move costs $1,500–$3,500 for zero visible gain. Design around the stack.</li>
        <li><strong>Dark small-format tile everywhere.</strong> Busy mosaics on all four walls chop a small bath into visual confetti. Use the accent tile in the niche or as a single stripe, and keep the field tile large and light.</li>
        <li><strong>Skipping the fan upgrade.</strong> Covered above — it&apos;s the #1 small-bath regret, and it costs $200 to do right during the remodel vs. a mold problem later.</li>
        <li><strong>Standard-depth vanity in a tight bath.</strong> A 21-inch-deep vanity where an 18-inch would fit steals knee room in front of the toilet. Measure the clearance, not just the wall.</li>
        <li><strong>No storage plan.</strong> Small baths without planned storage become cluttered counters, which makes the room feel half its size. Draw the storage into the plan: drawers, niche, cabinet.</li>
        <li><strong>Pricing by the square foot.</strong> For contractors: small-bath bids priced off primary-bath per-foot rates lose money. Price the fixed costs first, then the area work.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> demo, painting (the <a href="/calculators/paint-calculator">paint calculator</a> covers the gallons), vanity and toilet swaps, mirror and lighting, hardware. A 5×7 cosmetic refresh is the most DIY-able bathroom project there is — realistic savings $2,000–$4,000.</li>
        <li><strong>Hire a pro:</strong> shower waterproofing and tile, any plumbing moves, electrical (fan circuits, GFCI), pocket-door framing (it&apos;s structural carpentry inside a plumbing wall).</li>
        <li><strong>The gray zone:</strong> floor tile. Small floors are DIY-able, but the cuts around the toilet flange and door jamb in a 35 sq ft room are fiddly — pros earn their money on the details here.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        Same rules as any bathroom: fixture swaps in place, generally no;
        plumbing changes, electrical work, or shower/tub replacement,{" "}
        <strong>yes — typically $150–$500</strong>. Small baths often involve
        moving the fan duct or adding a circuit for better lighting, which
        triggers the electrical permit. The inspection is cheap insurance on
        the wet-area work. Check your municipality before demo — and if
        you&apos;re touching the fan, check the HOA too, since some
        associations control exterior vent terminations.
      </p>
      <p>
        Run the <a href="/calculators/tile-flooring-calculator">tile
        calculator</a> for the exact area, then build the <a href="/quote">quote</a> —
        small-bath clients decide fast, and the detailed bid beats the vague
        one every time.
      </p>

      <Faq items={faqs} heading="Small bathroom questions, answered" />
    </GuideArticle>
  );
}
