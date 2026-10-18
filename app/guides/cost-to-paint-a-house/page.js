import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Cost to Paint a House (2026)",
  description:
    "Cost to paint a house in 2026: $2–$6/sq ft interior, $3–$7/sq ft exterior. Room prices, quote drivers, and DIY vs pro math.",
  keywords: [
    "cost to paint a house",
    "house painting cost",
    "how much to paint a house",
    "cost to paint a house exterior and interior",
  ],
  alternates: { canonical: "https://calcbid.com/guides/cost-to-paint-a-house" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Cost to Paint a House (2026) | CalcBid",
    description:
      "$2–$6/sq ft interior, $3–$7/sq ft exterior. Room prices, quote drivers, and DIY vs pro math.",
    url: "https://calcbid.com/guides/cost-to-paint-a-house",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost to Paint a House (2026) | CalcBid",
    description:
      "$2–$6/sq ft interior, $3–$7/sq ft exterior. Room prices, quote drivers, and DIY vs pro math.",
  },
};

const faqs = [
  {
    q: "How long does a paint job last?",
    a: "A quality exterior paint job typically lasts 5–10 years, depending on climate, sun exposure, and the paint used — homes in harsh sun or coastal areas sit at the short end of that range. Interior walls usually hold up 5–7 years in low-traffic rooms, but hallways, kids' rooms, and bathrooms often need refreshing every 3–5 years. Two coats of premium paint over solid prep is what pushes you to the long end of those ranges.",
  },
  {
    q: "Is one coat of paint enough, or do I need two?",
    a: "Two coats is the standard for a lasting job — the first coat bonds and covers, the second builds the film thickness the manufacturer tested for durability. One-coat jobs exist and cost meaningfully less, but the finish is thinner, less washable, and more likely to fail early; the cheapest quote a homeowner usually gets is the one-coat one, and it's the one most likely to peel within a couple of years. Ask every bidder point-blank: one coat or two.",
  },
  {
    q: "When is the cheapest time of year to paint?",
    a: "Late fall through winter is typically the slowest season for painters, and many offer 10–20% off-season discounts to keep crews busy. Exterior work needs dry weather and temperatures generally above 50°F, so the discount window for outside work is short in cold climates — but interior painting can be done year-round, making winter the best time to book inside work. Book 3–4 weeks ahead even in the slow season; good crews fill up fast when the discounts get around.",
  },
  {
    q: "Why do painting quotes vary so much?",
    a: "Quotes vary because the bids often describe different jobs: one painter prices two coats of premium satin with full prep, another prices one coat of flat with a quick wipe-down, and the totals differ by thousands while the headline looks identical. Prep scope, coat count, paint brand and sheen, how much trim and ceiling work is included, and crew experience all move the number. Line-item quotes let you compare apples to apples — lump-sum quotes make that impossible.",
  },
  {
    q: "Is premium paint actually worth the extra money?",
    a: "Usually, yes. Premium paint runs $70–$110+ per gallon versus $40–$65 for standard, but it covers better (sometimes meaning less labor on dark-to-light changes), resists fading and moisture, and holds up to washing — which is where standard paint dies first in kitchens, bathrooms, and hallways. On labor, which is 65–85% of the job, upgrading the paint is a small fraction of the total and buys years of extra life. Skip premium only in rooms you plan to repaint soon anyway.",
  },
  {
    q: "Do I need to move out while the interior is painted?",
    a: "Not usually — painters work room by room, and you live around the schedule. They'll ask you to move furniture to the center of the room and clear valuables and wall hangings ahead of time. Expect some disruption: rooms in progress are off-limits for a day or two each, and modern low-VOC paints keep odors manageable. If the whole house is being done at once, staying with family for a few days is more comfortable, but it's rarely required.",
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
      title="Cost to Paint a House"
      description="The full 2026 price picture: interior and exterior costs side by side, what makes quotes swing by thousands, and how to read a bid."
      slug="cost-to-paint-a-house"
      updated="October 2026"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Estimate your paint job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        The cost to paint a house comes down to three numbers. For a typical
        whole-home interior (think a 3-bedroom house), expect{" "}
        <strong>$1,500–$4,000</strong>. An exterior repaint usually lands
        between <strong>$2,500–$6,500</strong> depending on stories and
        condition. Doing the full house — interior plus exterior — runs{" "}
        <strong>$4,000–$10,000</strong>. Those are 2026 US ranges, and the
        spread inside them is real: two quotes for the same house can differ
        by thousands because the bids describe different amounts of work. This
        guide breaks down interior and exterior costs side by side, shows what
        drives the price, and teaches you how to read a quote so you know
        exactly what you&apos;re paying for.
      </p>

      <h2>Interior painting costs by room</h2>
      <p>
        Interior work is priced per room or by the square foot of wall area —
        the 2026 US range is <strong>$2–$6 per square foot</strong> of wall
        surface. Most pros quote per room because that&apos;s how homeowners
        think, but the per-square-foot rate underneath it is what you should
        compare between bids. Standard assumptions here: two coats, walls
        only, on surfaces in reasonable shape.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Room</th>
            <th style={thStyle}>Typical range</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Bedroom (average)</td>
            <td style={tdStyle}>$300–$700</td>
            <td style={tdStyle}>Larger master suites push past $700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Living room</td>
            <td style={tdStyle}>$400–$900</td>
            <td style={tdStyle}>High ceilings and accent walls add cost</td>
          </tr>
          <tr>
            <td style={tdStyle}>Kitchen</td>
            <td style={tdStyle}>$400–$1,000</td>
            <td style={tdStyle}>More trim, more masking, washable sheen recommended</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bathroom</td>
            <td style={tdStyle}>$200–$500</td>
            <td style={tdStyle}>Small but fiddly; moisture-resistant paint matters</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hallway / entry</td>
            <td style={tdStyle}>$250–$600</td>
            <td style={tdStyle}>Tight quarters, lots of doors and trim</td>
          </tr>
          <tr>
            <td style={tdStyle}>Whole interior (3BR home)</td>
            <td style={tdStyle}>$1,500–$4,000</td>
            <td style={tdStyle}>Walls only; add ceilings and trim below</td>
          </tr>
        </tbody>
      </table>
      <p>
        Those room numbers assume walls only. Adding ceilings typically adds
        $1–$2 per square foot, and trim work (baseboards, window and door
        casing, crown molding) adds $2–$4 per linear foot. A kitchen with
        cabinets? Repainting or refinishing cabinets is its own project at{" "}
        <strong>$1,200–$3,000+</strong> — don&apos;t let a bidder bury it
        inside the wall-painting price, or you&apos;ll be comparing a
        walls-only bid against a walls-plus-cabinets bid without realizing it.
      </p>

      <h2>Exterior painting costs by home size</h2>
      <p>
        Exterior work runs <strong>$3–$7 per square foot</strong> of painted
        surface in the 2026 US range — higher than interior because the prep
        is heavier (power washing, scraping, caulking, priming bare spots)
        and the access is harder (ladders, scaffolding, second-story work).
        Painters usually quote exteriors by the project rather than per
        square foot, so here&apos;s how the totals break down:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Home size</th>
            <th style={thStyle}>Typical range</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>One-story, ~1,200 sq ft</td>
            <td style={tdStyle}>$2,500–$4,000</td>
            <td style={tdStyle}>Easiest exterior — ladder-height work only</td>
          </tr>
          <tr>
            <td style={tdStyle}>One-story, ~1,800 sq ft</td>
            <td style={tdStyle}>$3,000–$4,500</td>
            <td style={tdStyle}>More wall area, still single-level access</td>
          </tr>
          <tr>
            <td style={tdStyle}>Two-story, ~1,800 sq ft</td>
            <td style={tdStyle}>$3,500–$5,500</td>
            <td style={tdStyle}>Height premium: lifts or staging, slower production</td>
          </tr>
          <tr>
            <td style={tdStyle}>Two-story, ~2,500 sq ft</td>
            <td style={tdStyle}>$4,500–$6,500</td>
            <td style={tdStyle}>Full-size two-story is the classic upper-mid bid</td>
          </tr>
        </tbody>
      </table>
      <p>
        Siding material moves the number too. Wood siding that needs scraping
        and spot-priming costs more in labor than vinyl or fiber cement in
        good condition. Stucco takes more paint per square foot (it&apos;s
        thirsty), and brick that&apos;s being painted for the first time needs
        a dedicated masonry primer. If your home has peeling paint now, the
        prep line on the bid will be noticeably bigger — that&apos;s not
        padding, it&apos;s the hours.
      </p>

      <h2>Interior vs. exterior: the comparison</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Cost factor</th>
            <th style={thStyle}>Interior</th>
            <th style={thStyle}>Exterior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Per-sq-ft range (2026 US)</td>
            <td style={tdStyle}>$2–$6</td>
            <td style={tdStyle}>$3–$7</td>
          </tr>
          <tr>
            <td style={tdStyle}>Typical whole-house total</td>
            <td style={tdStyle}>$1,500–$4,000 (3BR)</td>
            <td style={tdStyle}>$2,500–$6,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor share of total</td>
            <td style={tdStyle}>65–85%</td>
            <td style={tdStyle}>65–85%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Prep intensity</td>
            <td style={tdStyle}>Moderate — patching, caulking trim, masking</td>
            <td style={tdStyle}>Heavy — washing, scraping, priming bare spots</td>
          </tr>
          <tr>
            <td style={tdStyle}>Paint life expectancy</td>
            <td style={tdStyle}>5–7 years (3–5 in high-traffic areas)</td>
            <td style={tdStyle}>5–10 years depending on climate</td>
          </tr>
          <tr>
            <td style={tdStyle}>Weather constraints</td>
            <td style={tdStyle}>None — done year-round</td>
            <td style={tdStyle}>Dry weather, generally above 50°F</td>
          </tr>
          <tr>
            <td style={tdStyle}>Disruption</td>
            <td style={tdStyle}>Room by room; you live around it</td>
            <td style={tdStyle}>Minimal — crew works outside</td>
          </tr>
        </tbody>
      </table>
      <p>
        One thing both have in common: <strong>labor is 65–85% of the total
        cost</strong>, and prep work alone accounts for 20–30%. That&apos;s why
        quotes for the same house can land thousands apart — you&apos;re not
        really buying paint, you&apos;re buying hours. A bid that looks
        expensive is often just honest about how many hours the prep takes.
      </p>

      <h2>What actually drives the price</h2>
      <p>
        Six factors explain almost every price difference you&apos;ll see
        between bids:
      </p>
      <ul>
        <li><strong>Prep condition (20–30% of the job).</strong> Peeling,
        cracked, or chalking surfaces need washing, scraping, sanding, and
        spot-priming before a drop of finish paint goes on. A home that was
        maintained costs far less to repaint than one that wasn&apos;t — this
        is the single biggest swing factor in exterior work.</li>
        <li><strong>Home size and stories.</strong> More wall area means more
        paint and more hours, straightforward enough — but the second story
        carries a height premium. Ladders, staging, and slower production
        mean a two-story home costs more per square foot to paint than a
        ranch with the same wall area.</li>
        <li><strong>Paint quality.</strong> Standard paint runs
        $40–$65 per gallon; premium runs $70–$110+ per gallon. On a whole
        house, the upgrade costs a few hundred dollars in material but buys
        better coverage, washability, and years of extra life. Since labor is
        most of the bill, cheaping out on the gallons is false economy.</li>
        <li><strong>Trim and ceiling detail.</strong> Walls are the fast part.
        Ceilings, crown molding, baseboards, window and door casings, and
        built-ins are slow, fiddly work — a home heavy on trim can add 30–50%
        to an interior bid. Decide up front whether trim is included, and in
        what sheen.</li>
        <li><strong>Regional labor rates.</strong> A crew in a high-cost metro
        charges more per hour than one in a smaller market, for the same
        work. Get local quotes rather than relying on national averages —
        the spread between markets can be 30% or more.</li>
        <li><strong>Timing.</strong> Late fall through winter is the slow
        season for most painters, and <strong>off-season discounts of
        10–20%</strong> are common. Interior work can be done year-round, so
        winter is the sweet spot for inside projects; exterior discounts
        exist too but are limited by weather windows.</li>
      </ul>

      <h2>How to read a painting quote</h2>
      <p>
        A trustworthy quote reads like an itemized receipt, not a single
        number. Before you compare bids, make sure each one answers these
        questions — and ask directly about any that are missing:
      </p>
      <ul>
        <li><strong>Scope:</strong> exactly which rooms or which elevations of the house, and what&apos;s included — walls, ceilings, trim, doors, closets?</li>
        <li><strong>Coat count:</strong> one coat or two? This is the question that explains most price gaps. Two coats is the standard for a lasting finish.</li>
        <li><strong>Paint specified:</strong> brand, product line, and sheen — in writing. &ldquo;Premium paint&rdquo; without a name is a blank check.</li>
        <li><strong>Prep work itemized:</strong> washing, patching, caulking, sanding, priming — what&apos;s included and what counts as extra?</li>
        <li><strong>Repairs:</strong> who fixes rotted trim, damaged drywall, or failing caulk, and at what price?</li>
        <li><strong>Protection:</strong> floors, furniture, landscaping — how are they covered, and who moves what?</li>
        <li><strong>Timeline:</strong> start date, how many days, and how many crew members on site.</li>
        <li><strong>Warranty:</strong> what&apos;s covered and for how long — a 1–2 year workmanship warranty is a reasonable expectation.</li>
      </ul>
      <p>
        Here&apos;s why this matters. A homeowner in Portland collected three
        bids on an 1,800 sq ft two-story colonial: $3,200, $4,400, and $5,100.
        The cheapest bid was one coat of flat paint with minimal prep; the
        middle bid was two coats of satin with real prep work. The cheap job
        would have started peeling within a couple of years — making it the
        most expensive option in the end. Line-item quotes are how you catch
        that before you sign.
      </p>

      <h2>DIY vs. hiring a pro: the real math</h2>
      <p>
        Painting is the most DIY-friendly trade there is, and the savings are
        real — but so is the time. Here&apos;s how the math actually works:
      </p>
      <ul>
        <li><strong>Full DIY (materials only):</strong> a whole interior runs roughly <strong>$500–$1,500 in materials</strong> — paint, primer, rollers, brushes, tape, drop cloths, and patching supplies. You save the 65–85% that would have gone to labor. The cost is your time: a whole house takes most homeowners several full days, sometimes spread across weekends.</li>
        <li><strong>DIY the prep, hire the painting:</strong> doing your own patching, caulking, and masking saves roughly <strong>$0.25–$0.75 per square foot</strong> off a pro bid. It&apos;s the best middle ground — prep is unskilled but time-consuming, so you cut the bill where your labor is actually efficient and leave the skilled finish work to the crew.</li>
        <li><strong>Full pro job:</strong> you pay for speed, equipment (sprayers, tall ladders, staging), and a finish that holds up. A crew paints in days what takes a homeowner weeks, and the warranty means callbacks are their problem.</li>
      </ul>
      <p>
        The honest breakdown: DIY wins on a single bedroom or a fresh,
        easy-prep interior where your weekends are free. Hire out the
        exterior, anything two stories up, and any job where the prep is
        heavy — that&apos;s where pro equipment and experience pay for
        themselves, and where a DIY mistake (like painting over failing paint)
        gets expensive fast. If you&apos;re on the fence, price the paint
        first with our <a href="/calculators/paint-calculator">paint
        calculator</a> — knowing your material cost makes both the DIY budget
        and the pro quotes easier to judge.
      </p>

      <p>
        A scope note: everything above is <em>residential</em> pricing.{" "}
        <a href="/guides/commercial-painting-cost">Commercial painting costs</a> are bid differently — production rates, off-hours premiums, and occupied-space logistics change the math.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Taking the cheapest bid without reading it.</strong> The lowest quote is usually the thinnest scope — one coat, budget paint, skimped prep. As the Portland example shows, it&apos;s often the most expensive bid in disguise.</li>
        <li><strong>Skipping the coat-count question.</strong> &ldquo;Paint the living room, $600&rdquo; means nothing until you know whether that&apos;s one coat or two. Always ask.</li>
        <li><strong>Painting over problems.</strong> New paint over peeling old paint, mildew, or unprimed patches fails fast. Prep is 20–30% of the job for a reason — it&apos;s what the paint sticks to.</li>
        <li><strong>Choosing flat paint for the wrong rooms.</strong> Flat hides imperfections but doesn&apos;t wash. Kitchens, bathrooms, hallways, and kids&apos; rooms want satin or eggshell — you&apos;ll repaint flat in those rooms years sooner.</li>
        <li><strong>Underestimating trim.</strong> Homeowners budget for walls and get blindsided by the trim line. Get the trim scope and price in writing up front.</li>
        <li><strong>Booking peak season without comparing.</strong> Spring and summer crews are slammed and priced accordingly. If your project can wait until the slow season, the 10–20% off-season discount is the easiest money in this whole guide.</li>
      </ul>
      <p>
        Ready to put numbers on your project? Run the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a> for a
        material estimate, then turn it into a professional bid with{" "}
        <a href="/quote">CalcBid&apos;s quote builder</a>. For deeper dives,
        see our <a href="/guides/interior-painting-cost-per-sqft">interior
        painting cost per square foot guide</a> or learn{" "}
        <a href="/guides/how-much-paint-do-i-need">how much paint you
        need</a> before you buy a single gallon.
      </p>


      <h2>Do you need a permit?</h2>
      <p>
        Painting almost never requires a building permit — but there are two
        real exceptions. If your home was built before 1978, federal EPA RRP
        (lead-safe) rules apply: any contractor disturbing paint on a pre-1978
        home must be lead-safe certified, and fines for non-compliance are
        steep. DIYers are exempt from the certification requirement but not
        from the hazard — test for lead before sanding old paint. The second
        gatekeeper is your HOA, which often requires color approval before
        exterior painting (and historic districts can restrict palettes
        outright). Check both before buying the first gallon.
      </p>

      <Faq items={faqs} heading="House painting cost questions, answered" />
    </GuideArticle>
  );
}
