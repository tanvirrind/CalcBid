import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Painting Job (Without Underbidding)",
  description:
    "A contractor's walkthrough for quoting painting jobs: measure the room, price materials and labor, add markup for profit, and send a quote clients sign.",
  keywords: [
    "how to quote a painting job",
    "how to bid a paint job",
    "painting quote",
    "how to estimate a painting job",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-a-painting-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Painting Job (Without Underbidding) | CalcBid",
    description:
      "Measure, price materials and labor, add markup, send the quote — the full walkthrough for painting contractors.",
    url: "https://calcbid.com/guides/how-to-quote-a-painting-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Painting Job (Without Underbidding) | CalcBid",
    description: "Measure, price materials and labor, add markup, send the quote — the full walkthrough for painting contractors.",
  },
};

const faqs = [
  {
    q: "What should I charge per hour for painting in 2026?",
    a: "Solo painters typically charge $40–$70 per hour; established companies with crews run $50–$90 per hour. Your rate has to cover wages, insurance, vehicle, and downtime — if your hourly rate doesn't leave 20–30% after costs, raise it before you take the next job.",
  },
  {
    q: "How do you quote exterior painting differently from interior?",
    a: "Exteriors price higher per square foot because of ladders, scaffolding, weather risk, and far more prep (scraping, caulking, priming bare wood). Budget 25–50% more labor time than the same square footage indoors, and always include a weather-delay clause in your terms.",
  },
  {
    q: "Should I charge for the estimate visit?",
    a: "Most residential painters quote free — it's the cost of acquiring the job. But for large commercial work or jobs requiring detailed specs, a paid estimate ($100–$250, credited toward the job if you win it) filters out tire-kickers and pays for your time.",
  },
  {
    q: "What should be excluded in a painting quote?",
    a: "State exclusions explicitly: drywall repair beyond nail holes, wallpaper removal, moving heavy furniture, painting inside closets (unless requested), and color changes after work starts. Every exclusion you write down is a change order you can charge for later instead of an argument.",
  },
  {
    q: "How long is a painting quote valid?",
    a: "Thirty days is the industry standard. Paint prices and your schedule both move, so print the expiry date on the quote — it also creates urgency that gets signatures faster.",
  },
  {
    q: "What markup do painting contractors typically use?",
    a: "A 20–30% markup over total cost (materials + labor + overhead) is the minimum for a sustainable one-person operation; larger companies often run 35–50% to cover office staff, marketing, and warranty reserves. Markup is applied after overhead, not instead of it.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="How to Quote a Painting Job (Without Underbidding)"
      description="Most painting quotes go wrong in the same three places: the measurements, the labor hours, and the missing markup. Here's the full process, step by step."
      slug="how-to-quote-a-painting-job"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Try the paint calculator"
    >
      <p>
        Most painting quotes go wrong in the same three places: the
        measurements are optimistic, the labor hours are fictional, and the
        markup is missing entirely. Fix those three and you stop being the
        cheapest bid and start being the profitable one. This walkthrough
        covers the full process — measuring, materials, labor, overhead,
        markup, and the quote document itself — for interior and exterior
        residential work.
      </p>
      <h2>Step 1: Measure the actual paintable area</h2>
      <p>
        Walk the room with a tape measure and measure every wall: length ×
        height, wall by wall. Then subtract the openings — about 21 square
        feet per door and 15 per window. A 12×10 room with 8-foot ceilings,
        one door, and two windows works out to roughly 400 square feet of
        paintable wall, not the 440 you&apos;d get skipping the deductions.
        That 10% gap is pure margin walking out the door if you skip it.
      </p>
      <p>
        Measure what you&apos;re actually painting, not the room&apos;s floor
        area. Closets get counted only if the client wants them painted.
        Vaulted ceilings, stairwells, and two-story foyers need their true
        wall heights — a 16-foot foyer wall is double the paint of an 8-foot
        one, and it needs scaffolding or an extension ladder you should be
        charging for. Note ceiling height on every room: 9–10 foot ceilings
        add 15–25% more wall area over standard 8-foot, and that flows
        straight into gallons and hours.
      </p>
      <p>
        Photograph everything during the walkthrough — wall condition, water
        stains, patched areas, the furniture situation. Those photos protect
        you when the client &ldquo;doesn&apos;t remember&rdquo; the cracked
        plaster you flagged, and they let you re-measure from the office
        instead of driving back.
      </p>
      <h2>Step 2: Price the materials honestly</h2>
      <p>
        Divide the paintable area by your paint&apos;s coverage rate, multiply
        by coats, and round up — then add 10% waste. Coverage isn&apos;t one
        number; it depends on what you&apos;re rolling:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Paint / surface</th>
              <th style={{ padding: "10px 8px" }}>Coverage per gallon</th>
              <th style={{ padding: "10px 8px" }}>Typical price/gal (2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Interior wall paint, smooth drywall</td>
              <td style={{ padding: "10px 8px" }}>350–400 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$40–$65</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Interior, textured walls</td>
              <td style={{ padding: "10px 8px" }}>250–300 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$40–$65</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Ceiling paint (flat)</td>
              <td style={{ padding: "10px 8px" }}>350 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$30–$45</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Trim / door enamel</td>
              <td style={{ padding: "10px 8px" }}>400–500 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$45–$70</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Exterior siding paint</td>
              <td style={{ padding: "10px 8px" }}>250–350 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$45–$75</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Primer (new drywall / bare wood)</td>
              <td style={{ padding: "10px 8px" }}>300 sq ft</td>
              <td style={{ padding: "10px 8px" }}>$25–$40</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Multiply gallons by your real price per gallon — the contractor price
        at your paint store, not the retail sticker. Then price the
        &ldquo;small stuff&rdquo; as its own line, because it&apos;s never
        actually small: primer, caulk, spackle, sandpaper, tape, masking paper
        and plastic, drop cloths, roller covers, and brush cleaner. On a
        single room that&apos;s $50–$150; on a whole house it&apos;s $300–$600.
        Most underbids die right here, in the sundries nobody bothered to add
        up. If you&apos;re unsure what a whole house takes in gallons, the{" "}
        <a href="/guides/paint-needed-2000-sqft-house">2,000 sq ft house paint
        guide</a> walks through the full material count room by room.
      </p>
      <h2>Step 3: Estimate labor, then add a buffer</h2>
      <p>
        A pro covers roughly 150–200 square feet of wall per hour including
        prep — the low end for cut-heavy rooms with lots of trim, the high end
        for big open walls. Take your hours, multiply by your hourly rate,
        then add a 10–15% buffer for the things you can&apos;t see yet: the
        wall that needs skim-coating, the furniture the client swore would be
        moved, the ceiling that turns out to need two coats. If you
        consistently finish &ldquo;faster than estimated,&rdquo; your estimates
        are fiction — track actual hours per job for a month and recalibrate.
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Project</th>
              <th style={{ padding: "10px 8px" }}>Typical crew hours</th>
              <th style={{ padding: "10px 8px" }}>What eats the time</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Single bedroom, walls only</td>
              <td style={{ padding: "10px 8px" }}>6–10</td>
              <td style={{ padding: "10px 8px" }}>Furniture, cutting in trim</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Bedroom + ceiling + trim</td>
              <td style={{ padding: "10px 8px" }}>10–14</td>
              <td style={{ padding: "10px 8px" }}>Enamel dry time between coats</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Living room, 2-story wall</td>
              <td style={{ padding: "10px 8px" }}>14–20</td>
              <td style={{ padding: "10px 8px" }}>Ladder/scaffold work</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Whole house interior (2,000 sq ft)</td>
              <td style={{ padding: "10px 8px" }}>60–100</td>
              <td style={{ padding: "10px 8px" }}>Coordination, masking, dry time</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Exterior, single story</td>
              <td style={{ padding: "10px 8px" }}>40–70</td>
              <td style={{ padding: "10px 8px" }}>Scraping, caulking, weather</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Interior vs. exterior: quote them as different animals</h2>
      <p>
        Exterior work prices higher per square foot, and your quote should
        reflect why: ladders and scaffolding, far heavier prep (scraping,
        sanding, caulking, spot-priming bare wood), weather risk that can idle
        a crew for days, and paint that costs more per gallon. Budget 25–50%
        more labor time than the same square footage indoors. Always include a
        weather-delay clause in exterior terms — &ldquo;schedule subject to
        weather; rain days rescheduled at no penalty&rdquo; — so a wet week
        doesn&apos;t become a breach-of-contract argument.
      </p>
      <h2>Step 4: Add overhead, then markup — the step everyone skips</h2>
      <p>
        Materials plus labor is your <em>cost</em>, not your <em>price</em>.
        First add overhead — the real monthly cost of being in business,
        divided across your billable hours:
      </p>
      <ul>
        <li><strong>Insurance:</strong> general liability plus workers&apos; comp — often $300–$800/month for a small crew.</li>
        <li><strong>Vehicle:</strong> payment, fuel, maintenance, lettering — $400–$900/month per truck.</li>
        <li><strong>Unbillable time:</strong> quoting, driving to estimates, bookkeeping, callbacks. Most painters bill 60–70% of their working hours.</li>
        <li><strong>Tools and consumables:</strong> sprayers, ladders, drop cloths wear out — budget a monthly replacement reserve.</li>
        <li><strong>Marketing:</strong> website, reviews, yard signs, lead services — whatever it costs to keep the phone ringing.</li>
      </ul>
      <p>
        Then add <strong>profit markup of 20–30% over total cost</strong> as
        the minimum for a sustainable one-person operation. Larger companies
        run 35–50% to cover office staff, marketing, and warranty reserves. A
        quote with no margin isn&apos;t competitive pricing; it&apos;s a slow
        leak that shows up at tax time.
      </p>
      <h2>Costly mistakes that eat painters&apos; margins</h2>
      <ul>
        <li><strong>Quoting off floor square footage.</strong> A 12×12 room is 144 sq ft of floor and ~400 sq ft of wall. Price the walls.</li>
        <li><strong>Forgetting the primer coat.</strong> Dark-to-light color changes, bare drywall, and stained walls need primer — effectively +50% on wall gallons. Ask about the current color before you quote.</li>
        <li><strong>One-coat promises.</strong> One-coat coverage exists in marketing, not on walls. Quote two coats; if one suffices, you look like a hero.</li>
        <li><strong>Ignoring the ceiling.</strong> Clients assume ceilings are included unless you say otherwise. List ceilings as included or excluded — in writing.</li>
        <li><strong>No change-order clause.</strong> &ldquo;While you&apos;re here, can you also do the hallway?&rdquo; should trigger a written add-on price, not a favor.</li>
        <li><strong>Bidding to win, not to profit.</strong> The job you win at 5% margin and the job you lose at 30% margin cost you the same week. Only one pays the insurance.</li>
      </ul>
      <h2>Pro tips: the walkthrough that wins jobs</h2>
      <p>
        Arrive with a laser measure, a moisture meter for exteriors, and color
        decks from your preferred paint store. Walk every room, open closets
        you&apos;re asked about, and test a small adhesion patch on any
        questionable surface — peeling paint over glossy enamel without
        sanding is a callback waiting to happen. Ask about timeline
        (deadline-driven clients pay premiums), pets, and who else is bidding.
        Then send the quote within 24 hours. Speed wins painting jobs: the
        first professional, itemized quote a homeowner receives wins a
        disproportionate share of the work.
      </p>
      <h2>Step 5: Send a quote worth signing</h2>
      <p>
        Put it on paper with line items — prep, paint (brand and line named),
        labor shown separately — plus a total, a 30-day validity window, and
        your terms: payment schedule (a deposit of 20–30% is standard, never
        100% upfront), start window, and exclusions. Clients trust itemized
        quotes more than single numbers, and they sign faster when the expiry
        date is printed on the page. For a ready-made structure, see the{" "}
        <a href="/guides/painting-estimate-template">painting estimate
        template</a>, and compare your per-foot pricing against the{" "}
        <a href="/guides/interior-painting-cost-per-sqft">interior painting
        cost per square foot</a> benchmarks.
      </p>
      <h2>Three ways painters price: per-foot, hourly, or day rate</h2>
      <p>
        There&apos;s no single &ldquo;correct&rdquo; pricing method — but each
        one fits different jobs. Most successful painters use all three
        depending on the situation:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Method</th>
              <th style={{ padding: "10px 8px" }}>Best for</th>
              <th style={{ padding: "10px 8px" }}>Watch out for</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}><strong>Per square foot</strong> ($2–$6 interior)</td>
              <td style={{ padding: "10px 8px" }}>Standard rooms, whole houses — fast to quote, easy to compare</td>
              <td style={{ padding: "10px 8px" }}>Small rooms where your minimum should override the math</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}><strong>Hourly</strong> ($40–$90/hr)</td>
              <td style={{ padding: "10px 8px" }}>Repair-heavy work, uncertain scope, commercial T&M jobs</td>
              <td style={{ padding: "10px 8px" }}>Clients fear open-ended hours — cap it or estimate a range</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}><strong>Day rate</strong> ($400–$800/day per painter)</td>
              <td style={{ padding: "10px 8px" }}>Multi-day projects where you know your crew&apos;s pace</td>
              <td style={{ padding: "10px 8px" }}>Scope creep — define &ldquo;a day&apos;s work&rdquo; in writing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Whatever method you quote with, build it from the same foundation:
        measured area, real material costs, honest hours, overhead, and
        markup. The pricing method is presentation; the math underneath is
        what keeps you in business.
      </p>
      <h2>The 5-minute phone screen before you drive out</h2>
      <p>
        Every free estimate costs you an hour plus fuel. Screen on the phone
        first — you&apos;ll disqualify 20–30% of callers before burning a
        trip:
      </p>
      <ul>
        <li><strong>What rooms, what surfaces?</strong> Walls only, or ceiling and trim too? (That&apos;s a 20% swing.)</li>
        <li><strong>What&apos;s the current color and condition?</strong> Dark-to-light or wallpaper underneath changes the whole quote.</li>
        <li><strong>Timeline?</strong> &ldquo;Sometime this year&rdquo; vs. &ldquo;before the baby comes Friday&rdquo; tells you everything about seriousness.</li>
        <li><strong>Are you getting other bids?</strong> Normal and fine — but &ldquo;we&apos;ve had six guys out&rdquo; means price-shopper.</li>
        <li><strong>Who&apos;s the decision maker?</strong> If the spouse who cares about color isn&apos;t at the walkthrough, you&apos;ll be back.</li>
      </ul>
      <h2>Turning overhead into an hourly number</h2>
      <p>
        Overhead feels abstract until you convert it. Add up a month:
        insurance $500, truck $650, phone and software $120, marketing $300,
        tool replacement reserve $150 — that&apos;s $1,720/month. If you bill
        110 hours a month (about 65% of a 40-hour week — the rest is quoting,
        driving, and admin), your overhead burden is{" "}
        <strong>$15.60 per billable hour</strong>. A $50/hr rate with $15.60
        in overhead and $25/hr in wages and taxes leaves under $10/hr of
        actual profit — before markup. Run this math once a year; most
        painters who do are shocked the first time.
      </p>
      <h2>When to walk away from a bid</h2>
      <p>
        Not every job is worth winning. Walk away — politely, quickly — when
        you see these:
      </p>
      <ul>
        <li><strong>The price-shopper with six bids:</strong> you will not win on value; you&apos;ll win by being cheapest, and then you&apos;ll regret it for two weeks.</li>
        <li><strong>&ldquo;Can you start tomorrow?&rdquo;</strong> desperation on their side becomes chaos on yours — rushed jobs skip prep and produce callbacks.</li>
        <li><strong>Scope that keeps growing during the estimate:</strong> &ldquo;oh, and the garage, and the deck…&rdquo; without budget discussion signals a client who doesn&apos;t connect work with money.</li>
        <li><strong>Bad-mouthing the last painter:</strong> you&apos;re auditioning to be the next story.</li>
        <li><strong>Refusal to put anything in writing:</strong> a client who won&apos;t sign a scope won&apos;t honor one either.</li>
      </ul>
      <p>
        Every hour spent on a bad-fit job is an hour not spent on a good one.
        The most profitable painters aren&apos;t the busiest — they&apos;re
        the most selective.
      </p>
      <JsonLd data={faqJsonLd(faqs)} />
      <Faq items={faqs} heading="Questions painting contractors actually ask" />
    </GuideArticle>
  );
}
