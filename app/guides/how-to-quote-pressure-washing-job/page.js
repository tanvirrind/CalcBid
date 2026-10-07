import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Pressure Washing Job (2026)",
  description:
    "How to quote pressure washing: per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
  keywords: [
    "how to quote a pressure washing job",
    "how to price pressure washing",
    "pressure washing quote",
    "how much to charge for pressure washing",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-pressure-washing-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Pressure Washing Job | CalcBid",
    description:
      "Per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
    url: "https://calcbid.com/guides/how-to-quote-pressure-washing-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Pressure Washing Job | CalcBid",
    description: "Per-sq-ft rates by surface, minimum charges, and the walkthrough pros use to price any job.",
  },
};

const faqs = [
  {
    q: "How do you quote a pressure washing job over the phone?",
    a: "Ask for the surface type, approximate dimensions, and condition — then quote a range, not a fixed number. Say: 'A driveway that size typically runs $180 to $240 depending on staining. I'll confirm the exact price when I see it.' Never lock a firm price sight-unseen on a moldy or multi-story job; the range protects you and the in-person visit closes the sale.",
  },
  {
    q: "What is the average profit margin on a pressure washing job?",
    a: "Established operators run 50–70% gross margins on residential work. A $300 driveway job typically costs $40–$80 in chemicals, fuel, water, and equipment wear — the rest is labor and overhead. Margins compress on commercial flat-rate contracts and expand on soft-wash roof jobs where chemical cost is low and perceived expertise is high.",
  },
  {
    q: "Should pressure washing quotes include tax?",
    a: "It depends on your state. Many states tax pressure washing as a taxable service, others don't. Check your state's department of revenue — don't guess. Either way, state on the quote whether the price includes sales tax so there's no argument at payment time.",
  },
  {
    q: "How long is a pressure washing quote good for?",
    a: "Thirty days is standard. Chemical and fuel costs move, and a quote from March shouldn't bind you in July. Put an expiration date on every written quote — it also creates gentle urgency that helps close the job.",
  },
  {
    q: "Do I need insurance before quoting pressure washing jobs?",
    a: "Yes — general liability insurance ($1M/$2M) runs $500–$1,500 a year for pressure washing and it's non-negotiable once you're past friends-and-family jobs. High-pressure water damages siding, etches concrete, and injures people. One claim without insurance ends the business. Many commercial clients won't hire you without a certificate of insurance anyway.",
  },
  {
    q: "Why do my pressure washing quotes keep losing to cheaper bids?",
    a: "Usually it's presentation, not price. A texted number loses to a professional quote with line items, before/after photos of similar work, proof of insurance, and a stated guarantee. Itemize the wash, the treatment, and any extras separately — clients compare a $250 flat text against a $295 itemized professional quote very differently than two bare numbers.",
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
      title="How to Quote a Pressure Washing Job"
      description="The walkthrough working pros use: measure, pick your rate by surface, protect yourself with a minimum charge, and send the quote before you leave."
      slug="how-to-quote-pressure-washing-job"
      calculatorHref="/calculators/pressure-washing-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quoting a pressure washing job comes down to three numbers: the square
        footage, your per-square-foot rate for that surface, and your minimum
        charge. Measure the area, multiply by the surface rate — $0.15–$0.35
        for concrete, $0.20–$0.40 for siding, $0.25–$0.50 for wood decks,
        $0.30–$0.60 for roof soft washing — then apply your $125–$200 minimum
        so small jobs stay profitable. Adjust up for heavy mold, multi-story
        work, and delicate surfaces, and send the quote the same day. That is
        the whole system. Everything below is how to execute it without
        leaking money.
      </p>

      <h2>2026 pressure washing rates by surface</h2>
      <p>
        Price by the square foot, not by the hour. Clients understand square
        footage, it scales cleanly, and it rewards you as you get faster. These
        are 2026 US residential ranges — new operators start at the low end to
        win reviews; established pros with photos and insurance charge the top
        end without apology.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Surface</th>
            <th style={thStyle}>Rate per sq ft</th>
            <th style={thStyle}>Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Concrete / driveways</td>
            <td style={tdStyle}>$0.15–$0.35</td>
            <td style={tdStyle}>Pressure wash, 2,500–3,500 PSI</td>
          </tr>
          <tr>
            <td style={tdStyle}>House siding (vinyl, fiber cement)</td>
            <td style={tdStyle}>$0.20–$0.40</td>
            <td style={tdStyle}>Soft wash, 100–300 PSI + detergent</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood decks & fences</td>
            <td style={tdStyle}>$0.25–$0.50</td>
            <td style={tdStyle}>Low pressure, 500–1,200 PSI</td>
          </tr>
          <tr>
            <td style={tdStyle}>Roof (asphalt shingle, tile)</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>Soft wash only — never high pressure</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pavers / brick</td>
            <td style={tdStyle}>$0.20–$0.40</td>
            <td style={tdStyle}>Pressure wash + re-sand joints</td>
          </tr>
          <tr>
            <td style={tdStyle}>Gutters (exterior brightening)</td>
            <td style={tdStyle}>$1–$2 per linear ft</td>
            <td style={tdStyle}>Hand wash / soft wash</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice the pattern: the gentler the method, the higher the rate. Soft
        washing looks easier than blasting concrete, but it requires chemical
        knowledge — sodium hypochlorite ratios, surfactants, dwell times — and
        clients pay for expertise, not effort. Price the knowledge.
      </p>

      <h2>What typical jobs actually price at</h2>
      <p>
        Square-foot rates are the input; job totals are what clients compare.
        Here is what the math produces on standard residential jobs at mid-range
        rates:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Job</th>
            <th style={thStyle}>Typical size</th>
            <th style={thStyle}>2026 price range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>2-car driveway</td>
            <td style={tdStyle}>400–600 sq ft</td>
            <td style={tdStyle}>$120–$210</td>
          </tr>
          <tr>
            <td style={tdStyle}>House wash (1,500 sq ft home)</td>
            <td style={tdStyle}>1,200–2,000 sq ft of siding</td>
            <td style={tdStyle}>$300–$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wood deck wash</td>
            <td style={tdStyle}>300–500 sq ft</td>
            <td style={tdStyle}>$125–$250</td>
          </tr>
          <tr>
            <td style={tdStyle}>Roof soft wash</td>
            <td style={tdStyle}>1,500–2,500 sq ft</td>
            <td style={tdStyle}>$450–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Driveway + walkway + patio bundle</td>
            <td style={tdStyle}>800–1,200 sq ft</td>
            <td style={tdStyle}>$200–$350</td>
          </tr>
          <tr>
            <td style={tdStyle}>Whole-house package (siding + driveway)</td>
            <td style={tdStyle}>2,000–3,000 sq ft</td>
            <td style={tdStyle}>$400–$800</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bundling is where the money is. A standalone $150 driveway barely
        covers the trip; a $550 house-plus-driveway package on the same visit
        doubles your hourly rate because setup, travel, and teardown happen
        once. Always quote the bundle alongside the single service — most
        clients take it.
      </p>

      <h2>Step 1: Measure the area</h2>
      <p>
        Pace it off or use a measuring wheel — length × width for driveways
        and patios, wall length × height for siding. For houses, measure each
        wall separately and add them up; subtract nothing for windows at quote
        stage, since the wash passes over them anyway. You don&apos;t need
        survey precision — within 10% is fine for quoting, because your
        minimum charge and rate ranges absorb the error.
      </p>
      <p>
        Time estimate while you&apos;re measuring: figure roughly 300–500 sq
        ft per hour depending on soil level. A standard 2-car driveway
        (400–600 sq ft) takes 1–2 hours including setup and teardown. Use that
        to sanity-check your price — if the math says $140 for three hours of
        work, your rate is too low or the minimum needs to kick in.
      </p>

      <h2>Step 2: Identify the surface and method</h2>
      <p>
        This is the step that separates pros from guys with a Home Depot
        machine. The surface dictates the method, and the method dictates the
        rate — and the liability.
      </p>
      <ul>
        <li><strong>Pressure washing</strong> (2,500–4,000 PSI): concrete, brick, pavers. The machine does the work.</li>
        <li><strong>Soft washing</strong> (100–300 PSI + chemicals): siding, roofs, stucco, painted surfaces. The detergent does the work; water just rinses. Typical mix: 1–3% sodium hypochlorite with a surfactant, 10–15 minute dwell time.</li>
        <li><strong>Low-pressure wood cleaning</strong> (500–1,200 PSI): decks and fences. High pressure furs and splinters wood — one gouged deck costs more than the job paid.</li>
      </ul>
      <p>
        Never pressure-wash an asphalt shingle roof. It strips granules and
        voids the manufacturer warranty — soft wash is the only acceptable
        method, and it commands the highest rate on the menu. If a client asks
        for high pressure on a roof, that&apos;s your cue to educate, not
        comply.
      </p>

      <h2>Step 3: Apply your rate, then your minimum</h2>
      <p>
        Multiply area by the surface rate. Then compare against your minimum
        charge — <strong>$125–$200</strong> is the 2026 standard — and quote
        whichever is higher. The minimum is the step beginners skip, and it is
        where they lose money: a 200 sq ft walkway at $0.25/ft is $50, which
        doesn&apos;t cover fuel, unloading, setup, the wash, teardown, and the
        drive home. Put the minimum on every quote. Clients expect it; every
        trade has one.
      </p>
      <p>
        Set the minimum based on your real costs: fuel and vehicle wear to
        reach your average job, 30–45 minutes of setup/teardown, and your
        target hourly rate. If your numbers say $140, set $150 — round numbers
        quote cleaner.
      </p>

      <h2>Step 4: Adjust for conditions</h2>
      <p>
        The base rate assumes average soil on an accessible single-story
        surface with a working spigot. Reality adds surcharges — quote them as
        visible line items, not buried padding:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Condition</th>
            <th style={thStyle}>Adjustment</th>
            <th style={thStyle}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Heavy mold, mildew, or algae</td>
            <td style={tdStyle}>+20–30%</td>
            <td style={tdStyle}>Stronger mix, longer dwell, second pass</td>
          </tr>
          <tr>
            <td style={tdStyle}>Multi-story (2nd story+)</td>
            <td style={tdStyle}>+25%</td>
            <td style={tdStyle}>Ladders, extensions, slower pace</td>
          </tr>
          <tr>
            <td style={tdStyle}>No water spigot on site</td>
            <td style={tdStyle}>+$50–$100 flat</td>
            <td style={tdStyle}>Tank fill time and hauling water</td>
          </tr>
          <tr>
            <td style={tdStyle}>Oil / rust / efflorescence stains</td>
            <td style={tdStyle}>+$75–$150 flat</td>
            <td style={tdStyle}>Specialty chemicals, may not fully lift</td>
          </tr>
          <tr>
            <td style={tdStyle}>Delicate landscaping in splash zone</td>
            <td style={tdStyle}>+10%</td>
            <td style={tdStyle}>Pre-wet and cover plants, rinse after</td>
          </tr>
        </tbody>
      </table>
      <p>
        One warning on stain removal: never promise a stain will come out
        completely. Quote &ldquo;stain treatment&rdquo; as an attempt with a
        flat fee, and put &ldquo;results vary&rdquo; in writing. Rust and
        decade-old oil stains sometimes lighten but don&apos;t disappear — the
        surcharge covers your chemical and time either way.
      </p>

      <h2>Know your costs (so the rate means something)</h2>
      <p>
        A rate is only good if it clears your costs with margin. Per-job
        consumables on a typical $300 residential wash:
      </p>
      <ul>
        <li><strong>Chemicals:</strong> $10–$25 (sodium hypochlorite, surfactant, degreaser)</li>
        <li><strong>Fuel:</strong> $10–$20 (machine gas + vehicle)</li>
        <li><strong>Water:</strong> $2–$5, or free from the client&apos;s spigot</li>
        <li><strong>Equipment wear:</strong> $10–$20 amortized (pumps, hoses, nozzles, fittings)</li>
      </ul>
      <p>
        That puts direct costs at roughly $35–$70 on a $300 job — before
        insurance ($500–$1,500/year), marketing, and your wage. Healthy
        residential margins run 50–70%. If yours don&apos;t, the rate is wrong,
        not the market.
      </p>

      <h2>Step 5: Present it like a pro and send it same-day</h2>
      <p>
        Speed wins pressure washing jobs — most clients take the first fair
        quote they get, and same-day quotes close at roughly double the rate
        of next-day ones. But speed without professionalism loses to the
        cheaper texted number. Your quote should show: the measured area, the
        per-square-foot rate, each line item (wash, treatment, extras), the
        total, a 30-day expiration, and proof of insurance on request.
      </p>
      <p>
        Run the numbers through the{" "}
        <a href="/calculators/pressure-washing-calculator">pressure washing calculator</a>,
        push it into the <a href="/quote">quote builder</a>, and text or email
        the link before you drive away. Itemized beats flat every time — a
        $295 quote with visible lines beats a $250 texted number because the
        client can see what they&apos;re buying.
      </p>

      <h2>Pro tips from the trade</h2>
      <ul>
        <li><strong>Sell the house wash with every driveway.</strong> &ldquo;While I&apos;m here with everything set up, I can do the siding for $X&rdquo; — the marginal time is small and the ticket doubles.</li>
        <li><strong>Photograph everything before you start.</strong> Pre-existing damage (cracked siding, loose paint, etched concrete) becomes your fault if you can&apos;t prove it was already there.</li>
        <li><strong>Downstream injectors over batch mixing</strong> for house washes — consistent chemical ratio, no stopping to remix, faster jobs.</li>
        <li><strong>Recurring schedules are the real business.</strong> Annual house washes and biannual commercial flatwork turn one-time jobs into revenue you can forecast. Offer 10–15% off for a yearly agreement.</li>
        <li><strong>Learn the <a href="/guides/how-to-bid-fence-staining-job">fence staining bid</a> too.</strong> Wash-plus-stain is the natural upsell — the wash preps the surface, and you&apos;re already on site with the customer&apos;s trust.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Quoting hourly.</strong> You get faster; hourly punishes efficiency. Square footage rewards it.</li>
        <li><strong>Skipping the minimum.</strong> Covered above — it&apos;s the difference between a business and an expensive hobby.</li>
        <li><strong>High pressure on the wrong surface.</strong> Etched concrete, furred wood, stripped roof granules — each one is a repair bill bigger than the job.</li>
        <li><strong>No photos, no notes.</strong> Disputes are won with timestamps.</li>
        <li><strong>Forgetting the spigot question.</strong> Ask before you quote. Hauling water you didn&apos;t price is a margin killer.</li>
        <li><strong>Working uninsured.</strong> One blown-out window or injured bystander without liability coverage ends the business.</li>
      </ul>
      <p>
        Related: if the driveway you&apos;re washing sits in front of a garage
        that needs more than cleaning, check the{" "}
        <a href="/guides/cost-to-epoxy-garage">epoxy garage floor cost guide</a>{" "}
        and the <a href="/calculators/epoxy-garage-floor-calculator">epoxy calculator</a> —
        wash-plus-coating is a high-ticket natural upsell.
      </p>

      <Faq items={faqs} heading="Pressure washing questions, answered" />
    </GuideArticle>
  );
}
