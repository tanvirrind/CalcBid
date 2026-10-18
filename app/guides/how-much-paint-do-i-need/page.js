import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How Much Paint Do I Need? (2026)",
  description:
    "Figure out exactly how much paint you need: one gallon covers 350–400 sq ft, plus the room-by-room formula pros use.",
  keywords: [
    "how much paint do i need",
    "paint calculator",
    "how many square feet does a gallon of paint cover",
    "how much paint per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-much-paint-do-i-need" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How Much Paint Do I Need? (2026) | CalcBid",
    description:
      "One gallon covers 350–400 sq ft — plus the room-by-room formula for walls, ceilings, and trim.",
    url: "https://calcbid.com/guides/how-much-paint-do-i-need",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Paint Do I Need? (2026) | CalcBid",
    description: "One gallon covers 350–400 sq ft — plus the room-by-room formula for walls, ceilings, and trim.",
  },
};

const faqs = [
  {
    q: "How many square feet does a gallon of paint cover?",
    a: "On smooth interior walls, one gallon covers 350–400 square feet per coat — use 350 in your math to stay safe. Exterior paint covers 250–400 square feet per gallon, with rough surfaces like stucco or brick at the low end of that range. Primer covers 200–300 square feet per gallon. These are per-coat numbers, so a standard two-coat job needs double.",
  },
  {
    q: "Does primer count as one of my coats?",
    a: "No — primer is a sealer, not a finish. It keeps porous drywall from drinking your topcoat and helps color cover evenly, but it does not hide like finish paint does. Over new drywall or a bold color change, the right ticket is a tinted primer coat plus two finish coats. Counting primer as a finish coat is how walls end up looking patchy in daylight.",
  },
  {
    q: "How much extra paint do textured walls need?",
    a: "Textured or rough walls can roughly double your paint need compared to smooth walls. Budget using the rough-wall coverage rating — around half the smooth-wall number — and keep your waste factor at 15%. If you are spraying instead of rolling, add a little more, because overspray never lands on the wall.",
  },
  {
    q: "How much paint do I need for ceilings?",
    a: "Multiply the ceiling's width by its length, then divide by 350–400 square feet per gallon — and always use flat finish on ceilings, since it hides imperfections and kills glare. A 12×12 ceiling is 144 square feet, so one gallon covers it for two full coats with room to spare. Do not fold the ceiling into your wall gallons; it is a separate purchase, usually in untinted white.",
  },
  {
    q: "How much paint do I need for a bedroom?",
    a: "A typical 12×12 bedroom with 8-foot ceilings has about 360–384 square feet of wall — roughly one gallon per coat, so two gallons for the standard two coats. Add one quart of semi-gloss for the trim and doors. If the walls are textured or you are making a big color change, buy a third gallon rather than stretching two thin.",
  },
  {
    q: "What should I do with leftover paint?",
    a: "Keep one labeled quart per room and color for touch-ups — write the room, paint name, color code, and date on the lid. That is exactly why you buy only 80–100% of your estimate up front: stores generally will not refund tinted paint. A little leftover for touch-ups is smart; five extra gallons of tinted paint is just expensive clutter.",
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
      title="How Much Paint Do I Need?"
      description="Stop guessing at the paint counter: the exact formula for walls, ceilings, and trim — plus the cases where the math lies."
      slug="how-much-paint-do-i-need"
      updated="October 2026"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Calculate your paint"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        One gallon of interior paint covers <strong>350–400 square feet</strong>{" "}
        per coat on a smooth wall — that single number answers most
        paint-buying questions. For <strong>exterior paint, plan on 250–300
        square feet per gallon</strong> on rough or textured surfaces (smooth
        siding stretches toward 400), and <strong>primer covers 200–300 square
        feet per gallon</strong>. A standard 12×12 bedroom needs about two
        gallons for a proper two-coat job; a full 2,000-square-foot house
        interior runs roughly five gallons per coat. The expensive mistakes
        all come from the same three places: measuring wall area wrong,
        assuming one coat will be enough, and pricing textured walls at
        smooth-wall coverage. Here is the exact formula painters use —
        measure once, buy once, and stop guessing at the paint counter.
      </p>

      <h2>Paint coverage by surface</h2>
      <p>
        Coverage ratings are printed on every can, and they are always
        per-coat numbers — one coat on the stated surface type. Use the low
        end of each range in your math; a gallon that claims 400 square feet
        on a perfect test panel rarely delivers that on your real walls.
        When in doubt, budget at 350 for interior and 250 for exterior.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Surface</th>
            <th style={thStyle}>Per gallon</th>
            <th style={thStyle}>Planning note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Interior walls, smooth</td>
            <td style={tdStyle}>350–400 sq ft</td>
            <td style={tdStyle}>Budget at 350 to be safe</td>
          </tr>
          <tr>
            <td style={tdStyle}>Interior walls, textured/rough</td>
            <td style={tdStyle}>~175–250 sq ft</td>
            <td style={tdStyle}>Roughly double the paint of smooth walls</td>
          </tr>
          <tr>
            <td style={tdStyle}>Exterior walls, smooth siding</td>
            <td style={tdStyle}>300–400 sq ft</td>
            <td style={tdStyle}>Budget at 300–350</td>
          </tr>
          <tr>
            <td style={tdStyle}>Exterior walls, rough/stucco/brick</td>
            <td style={tdStyle}>250–300 sq ft</td>
            <td style={tdStyle}>Porous surfaces drink paint — budget at 250</td>
          </tr>
          <tr>
            <td style={tdStyle}>Ceilings, flat paint</td>
            <td style={tdStyle}>350–400 sq ft</td>
            <td style={tdStyle}>Always flat finish; buy separately from walls</td>
          </tr>
          <tr>
            <td style={tdStyle}>Primer</td>
            <td style={tdStyle}>200–300 sq ft</td>
            <td style={tdStyle}>Seals porous drywall before the finish coats</td>
          </tr>
          <tr>
            <td style={tdStyle}>Trim, per quart</td>
            <td style={tdStyle}>~100 sq ft</td>
            <td style={tdStyle}>About one quart per typical room</td>
          </tr>
        </tbody>
      </table>

      <h2>How many gallons per room (worked examples)</h2>
      <p>
        These are net wall areas — doors and windows subtracted — for standard
        8-foot ceilings, using 350 square feet per gallon and rounding to
        whole gallons. Two coats is the standard for a durable finish; the
        one-coat numbers are for reference when you are refreshing the same
        color in the same sheen. Between coats, don&apos;t guess — check{" "}
        <a href="/guides/how-long-to-wait-between-coats-of-paint">how long
        to wait between coats of paint</a> so the second coat doesn&apos;t
        wreck the first.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Room</th>
            <th style={thStyle}>Wall area (net)</th>
            <th style={thStyle}>One coat</th>
            <th style={thStyle}>Two coats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10×10 bedroom</td>
            <td style={tdStyle}>~300 sq ft</td>
            <td style={tdStyle}>1 gal</td>
            <td style={tdStyle}>2 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>12×12 bedroom</td>
            <td style={tdStyle}>~360 sq ft</td>
            <td style={tdStyle}>1 gal</td>
            <td style={tdStyle}>2 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>10×15 living room</td>
            <td style={tdStyle}>~330 sq ft</td>
            <td style={tdStyle}>1 gal</td>
            <td style={tdStyle}>2 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>15×20 family room</td>
            <td style={tdStyle}>~500 sq ft</td>
            <td style={tdStyle}>2 gal</td>
            <td style={tdStyle}>3 gal</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000 sq ft house, full interior</td>
            <td style={tdStyle}>~1,800–2,000 sq ft</td>
            <td style={tdStyle}>~5 gal</td>
            <td style={tdStyle}>~10 gal</td>
          </tr>
        </tbody>
      </table>
      <p>
        A note on the house row, because two competing rules of thumb exist:
        the common version says a 2,000-square-foot house needs about{" "}
        <strong>5 gallons per coat at 360–400 square feet per gallon</strong> —
        roughly 1,800–2,000 square feet of paintable wall. Other estimators
        use a larger convention (2,000 square feet of floor ≈ 5,000+ square
        feet of wall when you count every wall in every room). Both exist
        because layouts differ wildly — open plans, vaulted ceilings, and
        how many walls actually get painted. That is exactly why pros measure
        instead of trusting a rule. For the full breakdown, see our guide on{" "}
        <a href="/guides/paint-needed-2000-sqft-house">
          how much paint a 2,000 sq ft house needs
        </a>
        .
      </p>

      <h2>The formula: measure it like a pro</h2>
      <p>
        Five steps, and you will land within a quart of the right number.
        Grab a tape measure and a calculator:
      </p>
      <ul>
        <li><strong>1. Measure the walls.</strong> Add the four wall lengths (the perimeter) and multiply by the ceiling height. A 12×15 room with 8-foot ceilings: 2 × (12 + 15) = 54 feet of perimeter × 8 = 432 square feet of gross wall.</li>
        <li><strong>2. Subtract the openings.</strong> A standard door is about 21 square feet and a window about 15. That room has two doors and two windows: (2 × 21) + (2 × 15) = 72 square feet. 432 − 72 = 360 square feet of paintable wall.</li>
        <li><strong>3. Divide by coverage.</strong> Use 350 for interior walls to stay conservative: 360 ÷ 350 ≈ 1.03 gallons per coat.</li>
        <li><strong>4. Multiply by coats.</strong> Two is the standard for finish paint: about 2 gallons for the finish coats.</li>
        <li><strong>5. Add waste.</strong> Multiply by 1.10–1.15 for cut-ins, roller soak-up, and touch-ups: roughly 2.2 gallons. Buy <strong>two gallons</strong> — not three — and keep one quart back in the budget for touch-ups if needed. Stores generally will not take back tinted paint, so you buy to the estimate, not past it.</li>
      </ul>
      <p>
        In-store shortcut when you did not bring the tape measure: length +
        width, times 2, times ceiling height, minus 70 for a typical
        room&apos;s doors and windows, divided by 350, times two coats. It
        lands within a quart of the careful version for most bedrooms and
        living rooms.
      </p>

      <h2>Ceilings, trim, and doors</h2>
      <p>
        <strong>Ceilings</strong> are their own calculation: width × length,
        divided by 350–400 square feet per gallon, always in flat finish —
        flat hides drywall imperfections and kills glare. A 12×12 ceiling is
        144 square feet, so one gallon covers it for two full coats with room
        to spare. Never fold the ceiling into your wall gallons; it is a
        different paint, usually bought untinted, and sized on its own.
      </p>
      <p>
        <strong>Trim</strong> — baseboards, window casings, door frames —
        gets semi-gloss and its own purchase. A quart covers about 100 square
        feet, and a typical room&apos;s trim runs to roughly one quart. Do
        not try to &ldquo;borrow&rdquo; trim paint from the wall gallons:
        different sheen, different color, and you will come up short on both.
      </p>
      <p>
        <strong>Doors</strong> belong with the trim, not the walls. Count each
        side of a door at roughly 20 square feet and add it to the trim total
        — a room with three doors is about 120 square feet of door surface
        (both sides), which is another quart-plus of semi-gloss on top of the
        baseboards and casings.
      </p>

      <h2>When the math lies: the exceptions</h2>
      <p>
        The formula assumes smooth, previously painted drywall and a roller.
        Change any of those conditions and the coverage rating on the can
        stops applying:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Situation</th>
            <th style={thStyle}>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Textured or rough walls</td>
            <td style={tdStyle}>Can roughly double your need — budget at the rough-wall rating and add waste on top</td>
          </tr>
          <tr>
            <td style={tdStyle}>Dramatic color change</td>
            <td style={tdStyle}>Use a tinted primer and plan a third coat; two coats of light over dark almost never covers</td>
          </tr>
          <tr>
            <td style={tdStyle}>New unpainted drywall</td>
            <td style={tdStyle}>Extremely porous — one full primer coat first (200–300 sq ft/gal), or the finish soaks in unevenly and you will need extra topcoat</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sprayer instead of roller</td>
            <td style={tdStyle}>Faster, but overspray misses the wall — add 15–20% beyond the roller math</td>
          </tr>
          <tr>
            <td style={tdStyle}>Patched or repaired spots</td>
            <td style={tdStyle}>Spot-prime every patch; unprimed patches flash through the finish and read as shadows</td>
          </tr>
        </tbody>
      </table>

      <h2>Buying paint without wasting money</h2>
      <ul>
        <li><strong>Buy five-gallon buckets for whole-house, same-color jobs.</strong> The per-gallon price drops, and you &ldquo;box&rdquo; — mix — the buckets together so the tint is uniform across rooms. Nothing screams DIY like a visible tint shift between the living room and the hallway.</li>
        <li><strong>Stores generally will not refund tinted paint.</strong> That is the whole game: buy 80–100% of your estimate, not 120%. A second trip for a touch-up quart costs twenty minutes; five leftover tinted gallons cost real money and become shelf clutter.</li>
        <li><strong>Be conservative on color, confident on the basics.</strong> Untinted paint like primer and stock-white ceiling paint is the low-risk part of the purchase — the tinted wall color is where you hold to the estimate and come back for touch-ups.</li>
        <li><strong>Keep one labeled quart per room and color.</strong> Write the room, paint name, color code, and date on the lid. Future touch-ups — the scuff behind the door, the nail holes from the picture frame — take ten minutes when the exact paint is on the shelf and an hour of guesswork when it is not.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Measuring floor space instead of wall space.</strong> A 2,000-square-foot house is not 2,000 square feet of wall — the conventions range from ~1,800 to 5,000+ square feet of wall depending on how you count. Measure the walls, not the floor.</li>
        <li><strong>Counting primer as a finish coat.</strong> Primer seals; it does not hide like finish paint. Over new drywall or a color change, the ticket is primer plus two finish coats — primer is never coat number one of two.</li>
        <li><strong>Planning for one coat.</strong> One coat refreshes the same color in the same sheen; almost everything else needs two. The second coat is where the color actually becomes the color on the swatch.</li>
        <li><strong>Pricing textured walls at smooth-wall coverage.</strong> Rough surfaces can double the need. Budget at the rough rating or you are buying twice — and the second trip lands mid-wall with a drying edge that shows.</li>
        <li><strong>Overbuying tinted paint.</strong> It cannot go back to the store. Buy 80–100% of the estimate, then run a touch-up trip. The store run is cheap; the five stranded gallons are not.</li>
        <li><strong>Skipping the waste factor.</strong> Cut-ins, roller soak-up, touch-ups, and the last half-inch in the tray eat 10–15%. The math that ignores waste is the math that runs dry one wall from finished.</li>
      </ul>
      <p>
        Run your own numbers in the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a> — punch
        in your room dimensions and it does the perimeter math for you — then
        turn the gallons into a <a href="/quote">quote</a> if you are pricing
        the job for a client. Planning a specific project? Start with{" "}
        <a href="/guides/cost-to-paint-12x12-room">
          what it costs to paint a 12×12 room
        </a>{" "}
        for the full material-and-labor picture, or{" "}
        <a href="/guides/paint-needed-2000-sqft-house">
          how much paint a 2,000 sq ft house needs
        </a>{" "}
        for the whole-house breakdown.
      </p>

      <Faq items={faqs} heading="Paint quantity questions, answered" />
    </GuideArticle>
  );
}
