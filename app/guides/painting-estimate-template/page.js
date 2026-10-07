import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Painting Estimate Template: What to Include (Free)",
  description:
    "Free painting estimate template guide: every line item, clause, and term a professional painting quote needs — then generate one in minutes.",
  keywords: [
    "painting estimate template",
    "painting quote template",
    "free painting estimate template",
    "what to include in a painting estimate",
  ],
  alternates: { canonical: "https://calcbid.com/guides/painting-estimate-template" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Painting Estimate Template: What to Include (Free) | CalcBid",
    description:
      "Every line item and clause a painting quote needs — then generate yours free.",
    url: "https://calcbid.com/guides/painting-estimate-template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Estimate Template: What to Include (Free) | CalcBid",
    description: "Every line item and clause a painting quote needs — then generate yours free.",
  },
};

const faqs = [
  {
    q: "How detailed should a painting estimate be?",
    a: "Detailed enough that the client can see where every dollar goes: separate lines for prep, primer, paint by surface, trim, and labor — plus materials specified by brand and line, exclusions, payment terms, and a validity date. A one-line \u2018paint house: $4,200\u2019 estimate invites haggling and disputes; an itemized one builds trust and protects your price.",
  },
  {
    q: "Should a painting estimate include the paint brand?",
    a: "Yes — always name the manufacturer and product line (e.g. \u2018Sherwin-Williams Duration\u2019, not \u2018premium paint\u2019). It justifies your price against low bidders, locks in your material cost, and kills the \u2018can you use cheaper paint\u2019 conversation before it starts.",
  },
  {
    q: "What deposit should I ask for on a painting job?",
    a: "30–50% upfront is the industry standard for residential repaint work. It covers your material order and holds the schedule. Never start a job with zero deposit — and in some states (California caps it at 10% or $1,000, whichever is less) the law limits what you can take, so check your state.",
  },
  {
    q: "How long should a painting estimate be valid?",
    a: "30 days is standard. It creates gentle urgency for the client to decide and protects you from paint price increases and schedule drift. For large commercial work, 60–90 days is common but pair it with a material-escalation clause.",
  },
  {
    q: "Do I need a signed estimate before starting work?",
    a: "Yes. An unsigned estimate is a suggestion, not an agreement. Get a signature (ink or e-sign) plus the deposit before you order paint or show up with ladders. If a client won\u2019t sign, they weren\u2019t going to pay on time either.",
  },
  {
    q: "How do I handle change orders on a painting estimate?",
    a: "Write every change up as a separate signed add-on with its own price before doing the work — \u2018while you\u2019re at it, paint the garage too\u2019 is the classic margin killer. Your original estimate should state that additional work is billed separately at your standard rates.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Painting Estimate Template: What to Include"
      description="A painting estimate that wins jobs has 8 parts. Miss any of them and you look amateur, invite disputes, or leave money behind."
      slug="painting-estimate-template"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Price the job first"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        A painting estimate is a sales document wearing a math costume. The
        math has to be right — but the structure is what wins the job. The
        best painting contractors don&apos;t just send a number; they send a
        document that answers every question the homeowner has before they
        ask it, and quietly removes every reason to pick the cheaper bid.
      </p>
      <p>
        Below is the complete template: the 8 parts every professional
        painting estimate needs, what to write in each one, real pricing
        benchmarks for 2026, and the clauses that keep you out of trouble.
        Use it as a checklist every time you quote.
      </p>

      <h2>The 8 parts of a professional painting estimate</h2>

      <h3>1. Your business info</h3>
      <p>
        Company name, phone, email, website, and license number if your state
        requires one (most do for jobs over a threshold — commonly $500–$1,000).
        This is also where your logo goes. Branded quotes close better than
        plain-text emails because they signal you&apos;re a real business with
        something to lose — which is exactly what a homeowner wants to see
        before handing over a deposit.
      </p>

      <h3>2. Client and project info</h3>
      <p>
        Client name, property address, date, and a one-line scope summary:
        &ldquo;Interior repaint: living room, hallway, 2 bedrooms — walls and
        ceilings, two coats.&rdquo; This line does quiet legal work: it pins
        the estimate to a specific property and scope, so there&apos;s no
        argument later about which rooms were included.
      </p>

      <h3>3. Itemized line items</h3>
      <p>
        Break the job into its real components — prep and patching, primer,
        paint for walls, paint for ceilings, trim and doors, and labor — each
        with quantities or measurements where it makes sense. Itemized beats a
        single lump sum on trust every time, and it gives you something to
        point at when the client asks &ldquo;where can we cut costs?&rdquo;
        (answer: here are the lines, pick one to shrink — the total stays
        honest).
      </p>
      <p>Typical line-item structure for a residential repaint:</p>
      <table className="q-table">
        <thead>
          <tr><th>Line item</th><th>How to price it</th><th>2026 benchmark</th></tr>
        </thead>
        <tbody>
          <tr><td>Surface prep &amp; patching</td><td>Per sq ft of wall, or flat fee by room condition</td><td className="num">$0.50–$1.50/sq ft</td></tr>
          <tr><td>Primer</td><td>Gallons × price, 1 coat on bare/patched spots</td><td className="num">$25–$45/gal</td></tr>
          <tr><td>Wall paint (2 coats)</td><td>Gallons × price; ~350 sq ft/gal per coat</td><td className="num">$45–$75/gal</td></tr>
          <tr><td>Ceiling paint</td><td>Flat ceiling paint, 1–2 coats</td><td className="num">$30–$50/gal</td></tr>
          <tr><td>Trim, doors &amp; baseboards</td><td>Per linear ft or per opening</td><td className="num">$1–$3/lin ft</td></tr>
          <tr><td>Labor</td><td>Hours × rate, or per sq ft of paintable surface</td><td className="num">$50–$85/hr</td></tr>
        </tbody>
      </table>

      <h3>4. Materials specified</h3>
      <p>
        Name the paint brand and product line — &ldquo;Sherwin-Williams
        Duration&rdquo; or &ldquo;Benjamin Moore Regal Select&rdquo; — not
        &ldquo;quality paint.&rdquo; Three reasons: it justifies your price
        against the guy bidding $28/gallon contractor-grade paint, it locks
        your material cost so a price spike isn&apos;t your problem, and it
        prevents the &ldquo;can you use the cheap stuff and knock $200
        off?&rdquo; conversation. Also specify sheen (eggshell walls, satin
        trim is the standard residential combo) and number of coats.
      </p>

      <h3>5. Exclusions</h3>
      <p>
        State plainly what&apos;s <em>not</em> included: moving heavy
        furniture, wallpaper removal, drywall repair beyond nail holes and
        minor patching, carpentry, exterior work, color consulting beyond one
        round. Exclusions prevent the most common disputes in painting —
        nearly every &ldquo;I thought that was included&rdquo; fight traces
        back to a missing exclusions section. If the client wants an excluded
        item, it becomes a change order (see below), not a freebie.
      </p>

      <h3>6. Total and payment terms</h3>
      <p>
        The bottom line, plus when money changes hands. The standard
        residential structure:
      </p>
      <table className="q-table">
        <thead>
          <tr><th>Milestone</th><th>Typical split</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Deposit on signing</td><td className="num">30–50%</td><td>Covers materials + holds the schedule</td></tr>
          <tr><td>Progress (large jobs)</td><td className="num">25–30%</td><td>Due at midpoint, e.g. prep complete</td></tr>
          <tr><td>Final on completion</td><td className="num">Balance</td><td>Due at final walkthrough, before you leave</td></tr>
        </tbody>
      </table>
      <p>
        Check your state&apos;s deposit caps — California, for example, limits
        home-improvement deposits to 10% or $1,000, whichever is less. And
        never let the final balance drift: &ldquo;pay when you get around to
        it&rdquo; becomes &ldquo;pay after the holidays&rdquo; fast.
      </p>

      <h3>7. Validity window</h3>
      <p>
        &ldquo;This estimate is valid for 30 days.&rdquo; It creates gentle
        urgency for the client to decide, and it protects you from paint price
        drift and a schedule that fills up. For large commercial work, 60–90
        days is normal — but pair it with a material-escalation clause so a
        manufacturer price hike doesn&apos;t eat your margin.
      </p>

      <h3>8. Acceptance</h3>
      <p>
        A signature line and date — ink or e-signature, both count. An
        estimate nobody signs is just a suggestion. No signature and no
        deposit means no paint ordered and no crew scheduled. This single rule
        eliminates most payment-chasing from your life.
      </p>

      <h2>A filled example: 12×12 bedroom repaint</h2>
      <p>
        Here&apos;s what the template looks like with real numbers — a
        standard bedroom, walls and ceiling, two coats, moderate prep:
      </p>
      <table className="q-table">
        <thead>
          <tr><th>Line item</th><th>Qty</th><th>Amount</th></tr>
        </thead>
        <tbody>
          <tr><td>Prep &amp; patching (nail holes, caulk, sand)</td><td>1 room</td><td className="num">$180</td></tr>
          <tr><td>Primer — spot prime patches</td><td>1 gal</td><td className="num">$35</td></tr>
          <tr><td>Wall paint — premium eggshell, 2 coats</td><td>3 gal</td><td className="num">$195</td></tr>
          <tr><td>Ceiling paint — flat white, 1 coat</td><td>1 gal</td><td className="num">$40</td></tr>
          <tr><td>Trim &amp; door — satin, 1 coat</td><td>1 room</td><td className="num">$120</td></tr>
          <tr><td>Labor — 2 painters, 1 day</td><td>14 hrs</td><td className="num">$840</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td className="num"><strong>$1,410</strong></td></tr>
        </tbody>
      </table>
      <p>
        That $1,410 tracks with the national $3–$4 per paintable square foot
        range — a 12×12 room has roughly 400 sq ft of paintable surface. (See
        the full breakdown in our{" "}
        <a href="/guides/interior-painting-cost-per-sqft">interior painting cost per square foot</a>{" "}
        guide, and run your own rooms through the{" "}
        <a href="/calculators/paint-calculator">paint calculator</a>.)
      </p>

      <h2>Clauses that protect you</h2>
      <p>
        Beyond the 8 parts, three short clauses belong on every painting
        estimate:
      </p>
      <ul>
        <li>
          <strong>Change orders:</strong> &ldquo;Additional work requested
          after signing will be quoted separately and requires written
          approval before proceeding.&rdquo; This is the single highest-ROI
          sentence in contracting.
        </li>
        <li>
          <strong>Color approval:</strong> &ldquo;Colors must be finalized
          48 hours before the start date. Color changes after paint is
          purchased are billed at cost plus labor.&rdquo;
        </li>
        <li>
          <strong>Access &amp; conditions:</strong> &ldquo;Client provides
          clear access to work areas; pets secured; work areas at 50–85°F
          for proper curing.&rdquo; Painting a room full of furniture around
          a nervous dog is how a one-day job becomes two.
        </li>
      </ul>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li>
          <strong>Send it fast.</strong> The contractor who quotes within 24
          hours wins most residential repaints. Measure with the{" "}
          <a href="/calculators/paint-calculator">paint calculator</a> on
          site and email the estimate from the driveway.
        </li>
        <li>
          <strong>Offer two tiers.</strong> A &ldquo;refresh&rdquo; option
          (one coat, same color) and a &ldquo;full repaint&rdquo; option (two
          coats, premium paint) lets budget clients say yes instead of
          shopping your single number.
        </li>
        <li>
          <strong>Follow up once.</strong> &ldquo;Checking in — happy to
          answer questions on the estimate&rdquo; three days later revives a
          surprising number of dead quotes. Twice is pestering; once is
          professional.
        </li>
        <li>
          <strong>Photograph everything.</strong> Before-and-after photos from
          each job become your portfolio, your Google Business photos, and
          your &ldquo;here&apos;s what $1,400 gets you&rdquo; sales tool.
        </li>
      </ul>

      <h2>Mistakes that cost painters money</h2>
      <ul>
        <li>
          <strong>Eyeballing gallons.</strong> Under-ordering means a
          mid-job supply run (or worse, a visible sheen mismatch between
          batches). Measure walls, subtract openings, divide by coverage —
          every time.
        </li>
        <li>
          <strong>Forgetting prep in the price.</strong> Prep is 30–40% of
          the labor on a quality repaint. If your estimate has no prep line,
          you&apos;re donating it.
        </li>
        <li>
          <strong>Verbal extras.</strong> &ldquo;Sure, we&apos;ll touch up
          the hallway too&rdquo; said out loud is worth exactly nothing at
          invoice time. Write it, price it, sign it.
        </li>
        <li>
          <strong>No validity date.</strong> The client who accepts your
          March price in September — after two paint price increases — is
          not your friend. Date every estimate.
        </li>
      </ul>

      <h2>Skip the Word doc</h2>
      <p>
        The <a href="/quote">CalcBid quote builder</a> is this template,
        ready to fill in: line items, tax, discounts, validity dates, your
        terms — then share it by link, print it, or email it from the
        driveway. Free. And if you&apos;re still figuring out how to price
        the work itself, start with{" "}
        <a href="/guides/how-to-quote-a-painting-job">how to quote a painting job</a>{" "}
        before you write the estimate.
      </p>

      <h2>How to price the line items (without guessing)</h2>
      <p>
        Line items only build trust if the numbers behind them are real.
        Here&apos;s the production-rate math working painters use:
      </p>
      <ul>
        <li>
          <strong>Measure paintable surface properly.</strong> Walls: room
          perimeter × ceiling height, minus ~15% for doors and windows.
          Ceilings: length × width. A 12×15 room with 8-ft ceilings has
          about 430 sq ft of wall plus 180 sq ft of ceiling — not
          &ldquo;about 500 square feet.&rdquo;
        </li>
        <li>
          <strong>Apply production rates.</strong> Rolling walls: 150–200
          sq ft per hour per painter. Brushing trim: 50–75 linear feet per
          hour. Spraying (with back-roll): 300–400 sq ft per hour. Divide
          your measured surface by the rate, multiply by your hourly labor
          cost, and you have a labor line you can defend.
        </li>
        <li>
          <strong>Price materials by the gallon, then add 10%.</strong>{" "}
          (Paintable sq ft × coats) ÷ coverage per gallon (350 for quality
          paint), rounded up. The 10% covers touch-ups, spills, and the
          half-gallon that always disappears.
        </li>
        <li>
          <strong>Load your overhead.</strong> Insurance, vehicle, marketing,
          and downtime don&apos;t appear on any line item, but they come out
          of every job. Most one-to-three-person shops need 15–25% margin
          over direct costs to actually profit — bake it into the labor
          rate, not as a visible &ldquo;overhead&rdquo; line clients want to
          negotiate away.
        </li>
      </ul>

      <h2>Paper vs digital estimates</h2>
      <p>
        Handwritten estimates on carbon-copy pads still exist, and some
        old-school clients love them — but they cost you in three ways:
        they&apos;re slow to produce, impossible to revise cleanly, and they
        photograph badly for your records. A digital estimate (built in the{" "}
        <a href="/quote">quote builder</a>, a PDF, or even a clean email)
        lets you fix a typo in seconds, resend instantly, and keep a
        searchable history of every price you ever gave. If a client asks
        &ldquo;what did you quote me last spring?&rdquo; you want the answer
        in ten seconds, not in a shoebox.
      </p>

      <h2>The follow-up sequence that closes jobs</h2>
      <p>
        Most painting estimates die from silence, not price. Work this
        sequence:
      </p>
      <ul>
        <li>
          <strong>Day 1:</strong> send the estimate within 24 hours of
          measuring — same day if possible. Speed is the single biggest
          predictor of close rate on residential repaints.
        </li>
        <li>
          <strong>Day 4:</strong> one check-in — &ldquo;Happy to walk
          through any of the line items if helpful.&rdquo; Short, no
          pressure, no discount offered.
        </li>
        <li>
          <strong>Day 10:</strong> mention the validity date once —
          &ldquo;Just a heads-up the estimate holds through [date].&rdquo;
          Urgency without pushiness.
        </li>
        <li>
          <strong>After expiry:</strong> let it go. Chasing expired
          estimates trains clients to ignore your deadlines.
        </li>
      </ul>

      <Faq items={faqs} heading="Painting estimate questions, answered" />
    </GuideArticle>
  );
}
