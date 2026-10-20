import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Drywall Job: Pricing Guide (2026)",
  description:
    "Quote drywall jobs with confidence: per-sheet and per-sq-ft pricing, finish levels 1–5, sheet counts, and the margin math for 2026.",
  keywords: [
    "how to quote a drywall job",
    "how to bid drywall work",
    "drywall estimate template",
    "drywall pricing per sheet",
    "drywall finish levels pricing",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-drywall-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Drywall Job: Pricing Guide (2026) | CalcBid",
    description:
      "Per-sheet and per-sq-ft pricing, finish levels 1–5, sheet counts, and the margin math for 2026.",
    url: "https://calcbid.com/guides/how-to-quote-drywall-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Drywall Job: Pricing Guide (2026) | CalcBid",
    description: "Per-sheet and per-sq-ft drywall pricing, finish levels 1–5, and the margin math for 2026.",
  },
};

const faqs = [
  {
    q: "How much should I charge per sheet of drywall in 2026?",
    a: "Most contractors charge $40–$100 per 4×8 sheet for hang-and-finish labor, with the installed price (board + materials + labor) running $55–$120 per sheet depending on finish level and your market. Sheets that require 5/8-inch Type X or high ceilings push past that range — never quote a specialty job at your standard-sheet rate.",
  },
  {
    q: "What finish level should I assume in a drywall bid?",
    a: "Assume Level 4 unless the contract says otherwise — it's the standard for residential and light commercial work at $1.60–$2.75 per sq ft installed. Level 5 (full skim coat for gloss paint or critical lighting) runs $2.10–$3.75, and bid it as a separate line item, not a vague 'extra for smooth walls.'",
  },
  {
    q: "How many sheets of drywall do I need for a 12×12 room?",
    a: "A 12×12 room with 8-foot ceilings has about 528 sq ft of wall and ceiling surface, which works out to roughly 17–19 4×8 sheets with 10–15% waste. Count sheets from a layout — tall walls, long spans, and lots of openings break the simple area math, and short-counting means an expensive mid-job reorder.",
  },
  {
    q: "How much do I add for waste and cutoffs?",
    a: "10% over net area for straightforward rooms, 15% for jobs with lots of openings, corners, or short runs. The area method comes in low on choppy layouts, so layout big rooms on paper before you finalize the material count. Whatever survives as scrap still gets paid for — hauling and cleanup aren't free.",
  },
  {
    q: "Should drywall repair jobs be priced by the square foot?",
    a: "No — repairs are priced by the piece or with a minimum trip charge. Patching a 4-foot hole can take nearly as much labor (multiple mud coats, drying time between them, blending into existing texture) as hanging a whole wall. A $150–$300 minimum for small repairs protects you from losing money on a half-day you can't bill elsewhere.",
  },
  {
    q: "How long does a drywall job take to quote and schedule?",
    a: "A single room typically takes 3–5 working days from first sheet to final sand because each mud coat needs drying time — you can't compress three coats into two days without callbacks. A whole house runs 2–3 weeks. Tell the client the finish timeline up front; schedule gaps kill your crew's utilization if you don't line up the next start date.",
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
      title="How to Quote a Drywall Job"
      description="The drywall contractor's quoting system: measure right, count sheets from a layout, price the finish level honestly, and keep your margin intact."
      slug="how-to-quote-drywall-job"
      updated="October 2026"
      calculatorHref="/calculators/drywall-calculator"
      calculatorLabel="Drywall Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quote drywall on <strong>square footage of wall and ceiling
        surface</strong> — never floor area — at a 2026 US range of{" "}
        <strong>$1.50–$3.50 per sq ft installed</strong> for a standard Level 4
        finish, or <strong>$55–$120 per 4×8 sheet</strong> installed when you
        prefer per-sheet pricing. A typical 12×12 room (≈528 sq ft of surface)
        lands around <strong>$845–$1,980</strong> hang-and-finish. Behind that
        number sits the real quoting work: counting sheets from a layout
        instead of raw area, naming the finish level in writing, adding 10–15%
        waste, and protecting your margin with a repair minimum and a real
        materials list. Get those right and drywall is a steady-margin trade —
        labor is 60–70% of the price, and an efficient crew turns that into
        profit.
      </p>

      <h2>2026 drywall pricing, per sheet</h2>
      <p>
        Per-sheet pricing is the fastest way to quote and the one most
        homeowners can picture. A 4×8 sheet covers 32 sq ft; installed prices
        below assume standard 1/2-inch board, hang plus tape and finish:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Sheet work</th>
            <th style={thStyle}>Labor per sheet</th>
            <th style={thStyle}>Installed per sheet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Hang only, 1/2-inch, standard walls</td>
            <td style={tdStyle}>$25–$55</td>
            <td style={tdStyle}>$35–$70</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hang + tape + Level 4 finish</td>
            <td style={tdStyle}>$40–$100</td>
            <td style={tdStyle}>$55–$120</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hang + Level 5 skim finish</td>
            <td style={tdStyle}>$65–$125</td>
            <td style={tdStyle}>$80–$145</td>
          </tr>
          <tr>
            <td style={tdStyle}>5/8-inch Type X (fire-rated), hung + finished</td>
            <td style={tdStyle}>$55–$120</td>
            <td style={tdStyle}>$75–$140</td>
          </tr>
          <tr>
            <td style={tdStyle}>High ceilings (over 9 ft) — add-on</td>
            <td style={tdStyle}>+$10–$25</td>
            <td style={tdStyle}>+$10–$25</td>
          </tr>
        </tbody>
      </table>
      <p>
        The per-sheet number hides real cost drivers — tall walls, specialty
        board, and finish level — so use it as your client-facing shorthand,
        not your estimating math. Your internal math should always be per
        square foot of surface, broken into materials, labor phases, and
        margin, then converted to a sheet price at the end. The{" "}
        <a href="/calculators/drywall-calculator">drywall calculator</a> keeps
        both views honest.
      </p>

      <h2>Per-square-foot rates by finish level (1–5)</h2>
      <p>
        Finish level is the single biggest pricing swing in drywall work, and
        it&apos;s the clause that causes most disputes. Put the level in the
        quote — &ldquo;Level 4 finish per industry standard&rdquo; — so a
        client expecting glass-smooth skim walls can&apos;t hold you to it:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Finish level</th>
            <th style={thStyle}>What it means</th>
            <th style={thStyle}>2026 installed $/sq ft</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Level 1</td>
            <td style={tdStyle}>Fire taping only — joints taped, no sanding; concealed areas</td>
            <td style={tdStyle}>$0.85–$1.50</td>
          </tr>
          <tr>
            <td style={tdStyle}>Level 2</td>
            <td style={tdStyle}>One coat of mud, tool marks okay; garages, warehouses, tile backing</td>
            <td style={tdStyle}>$1.10–$1.90</td>
          </tr>
          <tr>
            <td style={tdStyle}>Level 3</td>
            <td style={tdStyle}>Two coats, sanded; heavy texture or wallpaper over</td>
            <td style={tdStyle}>$1.40–$2.25</td>
          </tr>
          <tr>
            <td style={tdStyle}>Level 4</td>
            <td style={tdStyle}>Three coats, sanded smooth; standard for paint — the default bid</td>
            <td style={tdStyle}>$1.60–$2.75</td>
          </tr>
          <tr>
            <td style={tdStyle}>Level 5</td>
            <td style={tdStyle}>Level 4 + full skim coat; gloss/eggshell paint, critical lighting</td>
            <td style={tdStyle}>$2.10–$3.75</td>
          </tr>
        </tbody>
      </table>
      <p>
        Texture (knockdown, orange peel, skip trowel) prices like a finish
        level of its own — <strong>$2.25–$3.95 per sq ft</strong> installed —
        and it hides minor imperfections, which is exactly why rental and
        flip work loves it. If the job is texture over Level 4, quote the
        texture as a line item so a client switching to flat paint mid-job
        triggers a change order instead of a fight. Our{" "}
        <a href="/guides/how-to-handle-change-orders">change order guide</a>{" "}
        covers how to write that protection into the contract.
      </p>

      <h2>The quoting process, step by step</h2>
      <h3>1. Measure every surface</h3>
      <p>
        Walk the job with a tape and a sketch pad: every wall, every ceiling,
        both sides of interior partitions. Multiply length × height for each
        wall, add the ceiling, and subtract only <em>large</em> openings like
        wide cased openings and storefront glass — standard doors and small
        windows stay in the count because the cutout becomes waste anyway.
        Rule of thumb for sanity checks: total drywall surface runs roughly
        3 to 3.7× the floor area when walls and ceilings are both in scope.
      </p>
      <h3>2. Count sheets from a layout, not just the area</h3>
      <p>
        Divide total board area by 32 (4×8 sheet) or 48 (4×12 sheet), then
        sketch where the sheets actually fall — tall walls, long spans, and
        rooms with lots of openings break simple area math and come in low.
        A two-person crew hangs <strong>40–60 boards per day</strong>, so
        your sheet count also sets your labor days: 120 sheets is two to
        three hang days before finishing starts. Add{" "}
        <strong>10–15% waste</strong> for cutoffs (15% on choppy layouts with
        lots of corners), because a mid-job reorder at retail sheet prices
        blows the material budget instantly.
      </p>
      <h3>3. Specify the board type and finish level</h3>
      <p>
        Standard 1/2-inch board covers most interior work, but code changes
        the spec in specific spots: <strong>5/8-inch Type X</strong> on garage
        walls/ceilings adjacent to living space and stairwells,{" "}
        <strong>moisture-resistant board</strong> in bathrooms and kitchens,{" "}
        <strong>mold-resistant</strong> board where humidity or past mold is an
        issue. Specialty board costs 50–100% more per sheet and is heavier to
        hang — price it separately, never inside your standard rate:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Board type</th>
            <th style={thStyle}>Material $/sq ft</th>
            <th style={thStyle}>Installed $/sq ft</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Standard 1/2-inch</td>
            <td style={tdStyle}>$0.30–$0.50</td>
            <td style={tdStyle}>$1.50–$2.50</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moisture-resistant 1/2-inch</td>
            <td style={tdStyle}>$0.45–$0.65</td>
            <td style={tdStyle}>$1.75–$2.80</td>
          </tr>
          <tr>
            <td style={tdStyle}>Mold-resistant 1/2-inch</td>
            <td style={tdStyle}>$0.55–$0.80</td>
            <td style={tdStyle}>$2.00–$3.00</td>
          </tr>
          <tr>
            <td style={tdStyle}>Type X 5/8-inch fire-rated</td>
            <td style={tdStyle}>$0.55–$0.80</td>
            <td style={tdStyle}>$2.00–$3.20</td>
          </tr>
          <tr>
            <td style={tdStyle}>Soundproof (double-density)</td>
            <td style={tdStyle}>$1.50–$3.00</td>
            <td style={tdStyle}>$3.00–$5.50</td>
          </tr>
        </tbody>
      </table>
      <h3>4. Price the finishing materials you always forget</h3>
      <p>
        Board is only about 20% of an installed quote — the rest is finishing
        materials and labor. Add them as a per-square-foot line, roughly{" "}
        <strong>$0.20–$0.30 per sq ft</strong> on top of the board:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>2026 cost</th>
            <th style={thStyle}>Coverage / rule of thumb</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>4×8 sheet, 1/2-inch standard</td>
            <td style={tdStyle}>$12–$20</td>
            <td style={tdStyle}>32 sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Joint compound (5-gal bucket)</td>
            <td style={tdStyle}>$15–$25</td>
            <td style={tdStyle}>~100–150 sq ft of joints</td>
          </tr>
          <tr>
            <td style={tdStyle}>Paper tape (500-ft roll)</td>
            <td style={tdStyle}>$5–$10</td>
            <td style={tdStyle}>~1 roll per 500 sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Drywall screws (5-lb box)</td>
            <td style={tdStyle}>$10–$16</td>
            <td style={tdStyle}>~900 screws; ~1 lb per 300 sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Metal corner bead (8-ft strip)</td>
            <td style={tdStyle}>$2–$4</td>
            <td style={tdStyle}>Every exterior corner</td>
          </tr>
        </tbody>
      </table>
      <p>
        These are the line items losing bids omit and then eat later. Tape,
        mud, screws, and bead on a 1,000 sq ft job add <strong>$200–$300</strong>{" "}
        you either price or donate. Delivery ($75–$150 from most suppliers),
        scissor lift or scaffold rental for high ceilings, and cleanup/hauling
        are the same story — bid them as lines, not as margin.
      </p>
      <h3>5. Do the labor math by phase</h3>
      <p>
        Break labor into <strong>hang</strong> and <strong>finish</strong>,
        because they have different production rates and often different crews.
        A solid two-person crew hangs 40–60 boards a day; finishing runs{" "}
        <strong>500–800 sq ft per day</strong> at Level 4 (more with a texture
        rig, far less on Level 5 skim work). Convert each phase to crew-days ×
        your crew&apos;s day rate, sanity-check the result against a{" "}
        <strong>$1.75–$3.75 per sq ft</strong> labor range, and use whichever
        is higher — the range catches the slow jobs your pace math missed.
      </p>
      <h3>6. Add margin — know markup from margin</h3>
      <p>
        Target <strong>15–20% true margin</strong> (profit ÷ price), not just a
        markup on cost: a 20% markup on cost is only about 16.7% margin, so
        use ~25% markup to hold a real 20%. Put it in after waste, delivery,
        cleanup, and overhead — quoting overhead out of your margin is how a
        &ldquo;profitable&rdquo; job quietly breaks even.
      </p>

      <h2>New work vs. repairs</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Job type</th>
            <th style={thStyle}>How to price</th>
            <th style={thStyle}>2026 range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>New construction / open rooms</td>
            <td style={tdStyle}>Per sq ft or per sheet, Level 4</td>
            <td style={tdStyle}>$1.50–$2.75/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Remodel / occupied home</td>
            <td style={tdStyle}>Per sq ft, +15–25% for protection &amp; dust control</td>
            <td style={tdStyle}>$2.00–$3.50/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Patch / small repair</td>
            <td style={tdStyle}>Per-piece pricing with a trip minimum</td>
            <td style={tdStyle}>$150–$300 minimum</td>
          </tr>
          <tr>
            <td style={tdStyle}>Large repair (whole wall/ceiling)</td>
            <td style={tdStyle}>Per sq ft at premium rate — blending into old work is slow</td>
            <td style={tdStyle}>$3.00–$5.00/sq ft</td>
          </tr>
          <tr>
            <td style={tdStyle}>Water/mold damage repair</td>
            <td style={tdStyle}>T&amp;M only — you can&apos;t see the framing until demo</td>
            <td style={tdStyle}>No fixed quote before opening</td>
          </tr>
        </tbody>
      </table>
      <p>
        Repairs deserve higher rates because of trip count: a small patch
        needs three mud coats with drying time between them, meaning three
        visits or a schedule juggle you can&apos;t bill to anyone else. A{" "}
        <strong>$150–$300 minimum trip charge</strong> is how you make small
        drywall work worth showing up for. Never fix-price a water-damage
        repair before opening the wall — mold remediation and rotted framing
        turn a $400 patch into a $2,000 rebuild.
      </p>

      <h2>Contractor tips that protect the job</h2>
      <ul>
        <li><strong>Name the finish level in the contract.</strong> &ldquo;Level 4 finish per industry standard, unprimed&rdquo; is eleven words that end 90% of drywall disputes. Confirm priming and paint are <em>not</em> included — paint adds $1–$3/sq ft and clients routinely assume it&apos;s in the number.</li>
        <li><strong>Bid ceilings at a higher rate.</strong> Overhead work is slower and harder on your crew. A 10–20% ceiling premium is standard and fair — don&apos;t average it into the wall rate.</li>
        <li><strong>Protect occupied spaces.</strong> Zip-wall barriers, floor paper, and daily cleanup add 15–25% to a remodel quote but buy you the five-star review and the referral. Skip it and you buy a bad review instead.</li>
        <li><strong>Schedule around the mud, not the hang.</strong> Finishing is three coats plus drying time — 3–5 working days minimum for a room. Booking the next job against the hang date instead of the sand date strands your crew or forces a callback delay.</li>
        <li><strong>Texture-match existing work by agreement.</strong> Matching knockdown or orange peel in a patch is an art; writing &ldquo;texture matched as closely as possible&rdquo; in the quote manages expectations better than promising a perfect blend.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Underbidding Level 5.</strong> Quoting a skim-coat finish at Level 4 rates is the single most common drywall margin killer. If the client wants flat paint under downlights, that&apos;s Level 5 — price the skim coat as its own line.</li>
        <li><strong>Forgetting the finishing materials.</strong> Screws, tape, mud, and corner bead run $0.20–$0.30/sq ft. Leave them out of the estimate and your &ldquo;profit&rdquo; is the first casualty.</li>
        <li><strong>No waste allowance.</strong> Quoting net area with zero waste assumes perfect sheets and zero mistakes. Add 10–15% — the scraps are yours to haul, and they were never free.</li>
        <li><strong>Fix-pricing occupied remodels like new construction.</strong> Furniture, dust, protection, and working around the family cost real hours. Add the 15–25% remodel premium or the job eats your margin by day three.</li>
        <li><strong>Treating texture as free.</strong> Texture application and masking cost more than a Level 4 finish — price it ($2.25–$3.95/sq ft) instead of absorbing it, and change-order it if the client switches mid-job.</li>
        <li><strong>Quoting repairs per square foot.</strong> A $80/sq-ft patch &ldquo;sounds&rdquo; outrageous next to a $2/sq-ft whole-room rate, but the trips and detail work justify it. Piece pricing with a minimum keeps you from apologizing for your real costs.</li>
      </ul>

      <h2>DIY vs. hiring a pro — and your walk-away minimum</h2>
      <p>
        Hanging board is learnable; a smooth Level 4 finish is not, which is
        why homeowners routinely hang a room themselves and then hire a
        finisher. That&apos;s a legitimate lead for you: offer{" "}
        <strong>hang-only or finish-only quotes</strong> at $0.85–$1.50/sq ft
        labor and let the DIY attempt become your customer. But not every
        small job deserves your crew. If a patch won&apos;t clear your{" "}
        <strong>$150–$300 minimum</strong> after trip time, or the client
        wants you to match a price that leaves no margin for the mud coats,
        walk away — a cheap job that strands your schedule is worse than no
        job. Your crew&apos;s utilization is the business; defend it.
      </p>

      <h2>Do you need a license to do drywall?</h2>
      <p>
        In most US states there is <strong>no drywall-specific
        license</strong> — drywall work typically falls under a general
        contractor&apos;s license, a handyman classification, or (in some
        states) no license at all below a dollar threshold for minor work.
        What you <em>do</em> need to watch: many states and cities set a
        project-value cap (commonly a few thousand dollars) above which a
        licensed contractor must pull permits, and commercial or multi-family
        work almost always requires one. If you disturb paint in a{" "}
        <strong>pre-1978 home</strong>, EPA RRP lead-safe certification is
        federal law regardless of your trade license — sanding and demo dust
        count. Before quoting in a new jurisdiction, call the local building
        department: a five-minute call beats a failed inspection or a stop-work
        order, and clients trust contractors who handle permits without
        being asked.
      </p>
      <p>
        Run your sheet count and materials in the{" "}
        <a href="/calculators/drywall-calculator">drywall calculator</a>, push
        the finished numbers into a <a href="/quote">quote</a>, and send it
        from the job site. Same-day quotes close at roughly double the rate
        of next-day ones — and a quote that names the finish level, the
        board type, and what&apos;s excluded sells the job without a
        negotiation.
      </p>
      <p>
        Drywall rarely stands alone: pair it with the{" "}
        <a href="/guides/how-to-quote-tile-job">tile quoting guide</a> for
        bathrooms and the <a href="/guides/painting-estimate-template">painting
        estimate template</a> for the finish trade that follows yours — two
        quotes from one site visit.
      </p>

      <Faq items={faqs} heading="Drywall quoting questions, answered" />
    </GuideArticle>
  );
}
