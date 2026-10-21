import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid an Attic Insulation Job",
  description:
    "Bids for attic insulation, done right: per-sq-ft pricing, bag math for R-49, air-sealing upsells, and the margin formula protecting your profit.",
  keywords: [
    "how to bid an attic insulation job",
    "attic insulation estimate",
    "attic insulation pricing per square foot",
    "blown in insulation bid",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-an-attic-insulation-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid an Attic Insulation Job | CalcBid",
    description:
      "Per-sq-ft pricing, bag-count math for R-49, air-sealing upsells, and the margin formula that protects your profit.",
    url: "https://calcbid.com/guides/how-to-bid-an-attic-insulation-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid an Attic Insulation Job | CalcBid",
    description:
      "Per-sq-ft pricing, bag-count math for R-49, air-sealing upsells, and the margin formula that protects your profit.",
  },
};

const faqs = [
  {
    q: "How many bags of insulation do I need for a 1,200 sq ft attic at R-49?",
    a: "Pull the coverage chart off the bag — it lists square feet per bag at each R-value — and divide your net attic area by that number, then add 5–10% for waste. At R-49 most blown-fiberglass charts land around 18–22 sq ft per 30-lb bag, so a 1,200 sq ft attic needs roughly 55–65 bags. Cellulose needs more bags than fiberglass at the same R-value because it blows at higher density, so never swap one brand's chart for another's.",
  },
  {
    q: "How much should I charge per square foot to blow in attic insulation?",
    a: "In the 2026 US range, blown-in fiberglass installs at $1.00–$2.80 per sq ft, cellulose at $1.20–$2.80, and rockwool at $1.90–$4.20 — and that's before air sealing, removal, and access premiums. Labor alone runs $0.70–$1.70 per sq ft, so a bare-bones fiberglass job that skips sealing and prep is the low end of every range. Bid the add-ons as lines and your effective rate lands where your business needs it.",
  },
  {
    q: "Should I bid air sealing as a separate line item?",
    a: "Yes — air sealing is the highest-value line on an insulation bid. Sealing the attic floor before blowing insulation runs $250–$750 per job in the 2026 US range, and it dramatically improves the insulation's real-world performance. Many energy rebate programs require it, which makes it an easy sell: tell the homeowner the insulation is only as good as the air barrier beneath it.",
  },
  {
    q: "Should I remove old insulation before blowing in new?",
    a: "Only when it's contaminated, wet, moldy, or so compressed it's worthless. Removal costs $1–$2 per sq ft — on a 1,200 sq ft attic that's $1,200–$2,400 before you install a single bag — so removing decent insulation to replace it is usually the wrong call. Clean, dry old insulation can stay; blow the new layer right over it to hit your target R-value.",
  },
  {
    q: "How long does it take a crew to insulate an average attic?",
    a: "A two-person crew blows 1,000–1,500 sq ft of attic in roughly half a day once the machine is set and the attic is prepped. Air sealing adds a half to full day, and removal can add a full day or more. At $40–$80 per hour per crew member, that one-day job is $640–$1,280 in labor — which is why per-square-foot pricing beats day rates for attic work.",
  },
  {
    q: "What R-value should I promise the homeowner?",
    a: "The DOE recommends R-30 to R-60 for attics depending on climate zone — colder zones need the higher end. R-49 is the most common bid target because it satisfies rebate programs and covers most northern and midwestern zones. Promise the R-value your zone requires in writing, photograph the finished depth with a ruler, and note that more than the target earns you nothing but thinner margins.",
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
      title="How to Bid an Attic Insulation Job"
      description="The insulation contractor's bidding system: price per square foot, nail the bag math, sell air sealing, and protect your margin on every attic."
      slug="how-to-bid-an-attic-insulation-job"
      updated="October 2026"
      calculatorHref="/calculators/attic-insulation-calculator"
      calculatorLabel="Attic Insulation Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid attic insulation <strong>per square foot of attic floor
        area</strong> — never by the bag and never by the day. The 2026 US
        range for blown-in attic insulation installed is{" "}
        <strong>$1.00–$2.80 per sq ft for fiberglass</strong>,{" "}
        <strong>$1.20–$2.80 for cellulose</strong>, and{" "}
        <strong>$1.90–$4.20 for rockwool</strong>, before air sealing
        ($250–$750 per job), removal ($1–$2/sq ft), and access premiums. A
        typical 1,200 sq ft attic at R-49 with blown fiberglass and air sealing
        lands around <strong>$1,750–$4,100</strong> at honest pricing. Behind
        that number sits the real bidding work: measuring the attic floor
        (not the roof), reading the bag&apos;s coverage chart instead of
        guessing, selling air sealing as its own line item, and adding a real
        15–20% margin after — not before — every cost is in. Get those right
        and attics are some of the fastest, cleanest jobs your crew will
        ever do.
      </p>

      <h2>2026 attic insulation prices, installed per sq ft</h2>
      <p>
        Every price below is the 2026 US range for professional blown-in attic
        insulation, attic floor area. Labor is the bulk of the price —{" "}
        <strong>$0.70–$1.70 per sq ft</strong> for the blow-in work itself —
        with material on top:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>Labor $/sq ft</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Blown fiberglass</td>
            <td style={tdStyle}>$1.00–$2.80</td>
            <td style={tdStyle}>$0.70–$1.70</td>
            <td style={tdStyle}>Standard bid — the price/performance default</td>
          </tr>
          <tr>
            <td style={tdStyle}>Blown cellulose</td>
            <td style={tdStyle}>$1.20–$2.80</td>
            <td style={tdStyle}>$0.70–$1.70</td>
            <td style={tdStyle}>Sound damping, recycled content, tighter air seal</td>
          </tr>
          <tr>
            <td style={tdStyle}>Blown rockwool (mineral wool)</td>
            <td style={tdStyle}>$1.90–$4.20</td>
            <td style={tdStyle}>$1.00–$2.00</td>
            <td style={tdStyle}>Fire resistance, moisture tolerance, premium jobs</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pro blown fiberglass (all-in typical)</td>
            <td style={tdStyle}>$1.75–$3.25</td>
            <td style={tdStyle}>Included</td>
            <td style={tdStyle}>The number most contractors actually bid</td>
          </tr>
        </tbody>
      </table>
      <p>
        The spread inside each row is real market variation — low end for open,
        easy attics in competitive markets; high end for tight access,
        premium product, and metro pricing. The last row is the reality
        check: when you add air sealing, baffles, and prep (below), a
        fiberglass job honestly bids at <strong>$1.75–$3.25 per sq ft</strong>{" "}
        all-in. Bid $1.00/sq ft flat and you&apos;ve volunteered to do the
        add-ons for free.
      </p>

      <h2>Material costs per bag at R-19 (2026 US range)</h2>
      <p>
        Material per square foot at R-19 is the number your internal math
        starts from — multiply up for higher R-values roughly by the depth
        ratio (R-49 needs about 2.6× the material of R-19):
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Brand / product</th>
            <th style={thStyle}>Material $/sq ft at R-19</th>
            <th style={thStyle}>Notes for bidding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Johns Manville (fiberglass blow-in)</td>
            <td style={tdStyle}>$0.40–$0.80</td>
            <td style={tdStyle}>Big-box availability, consistent density</td>
          </tr>
          <tr>
            <td style={tdStyle}>Owens Corning (fiberglass blow-in)</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>Often the cheapest fiberglass; watch coverage chart</td>
          </tr>
          <tr>
            <td style={tdStyle}>Green Fiber (cellulose)</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>Borate-treated; needs dry storage on the job</td>
          </tr>
          <tr>
            <td style={tdStyle}>Applegate (cellulose)</td>
            <td style={tdStyle}>$0.25–$1.50</td>
            <td style={tdStyle}>Wide range — verify your local distributor price</td>
          </tr>
        </tbody>
      </table>
      <p>
        Blower rental is <strong>$30–$60 per day</strong> and is frequently{" "}
        <strong>free with the purchase of 10+ bags</strong> from big-box
        stores. If you&apos;re doing attics weekly, own the machine — a
        commercial blower pays for itself in a few months and stops the rental
        dance. Whatever you do, never let the free-rental deal decide your
        material: buy the product that matches your bid&apos;s performance
        claim, not the one with the free machine.
      </p>

      <h2>Fiberglass vs. cellulose vs. rockwool: what to bid</h2>
      <p>
        Homeowners rarely have a material preference — they have a budget and
        a comfort complaint. Your job is to recommend the right product and
        price it honestly:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}></th>
            <th style={thStyle}>Fiberglass blow-in</th>
            <th style={thStyle}>Cellulose</th>
            <th style={thStyle}>Rockwool</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Installed $/sq ft</td>
            <td style={tdStyle}>$1.00–$2.80</td>
            <td style={tdStyle}>$1.20–$2.80</td>
            <td style={tdStyle}>$1.90–$4.20</td>
          </tr>
          <tr>
            <td style={tdStyle}>Fire performance</td>
            <td style={tdStyle}>Good (non-combustible)</td>
            <td style={tdStyle}>Treated — verify borate spec in writing</td>
            <td style={tdStyle}>Best — inherently fire-resistant</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moisture tolerance</td>
            <td style={tdStyle}>Dries out; doesn&apos;t wick</td>
            <td style={tdStyle}>Absorbs and holds — needs a dry attic</td>
            <td style={tdStyle}>Excellent — hydrophobic fibers</td>
          </tr>
          <tr>
            <td style={tdStyle}>Sound damping</td>
            <td style={tdStyle}>Fair</td>
            <td style={tdStyle}>Good — dense, heavy fill</td>
            <td style={tdStyle}>Best — highest density</td>
          </tr>
          <tr>
            <td style={tdStyle}>Settling over time</td>
            <td style={tdStyle}>Minimal</td>
            <td style={tdStyle}>Some — blow to settled-density specs</td>
            <td style={tdStyle}>Minimal</td>
          </tr>
        </tbody>
      </table>
      <p>
        Default to <strong>fiberglass</strong> unless the job asks for
        otherwise — it&apos;s the price/performance winner and the easiest
        for your crew to blow evenly. Bid <strong>cellulose</strong> when the
        homeowner cares about noise (near airports or highways) or recycled
        content, and only after you&apos;ve verified the attic is dry and the
        ventilation is right. Bid <strong>rockwool</strong> as the premium
        option — fire safety, moisture-prone attics, and clients who want the
        best and will pay for it. Never bid the premium material at the
        standard price to &ldquo;win the job&rdquo; — you just taught the
        client that rockwool costs fiberglass money.
      </p>

      <h2>The bag-count math (a worked example)</h2>
      <p>
        This is where insulation bids are won or lost. Every bag carries a
        coverage chart listing <strong>square feet per bag at each
        R-value</strong>. The formula is simple —{" "}
        <strong>bags = net attic sq ft ÷ chart coverage per bag at your target
        R-value</strong> — then add 5–10% waste. Worked example for a 1,200 sq
        ft attic at <strong>R-49</strong>:
      </p>
      <ol>
        <li>
          <strong>Net attic area:</strong> 1,200 sq ft (attic floor, measured
          inside the exterior walls — not the roof, not the house footprint).
        </li>
        <li>
          <strong>Read the chart:</strong> say your fiberglass bag chart rates
          R-49 at 20 sq ft per bag (yours will differ — read the actual bag,
          not your memory).
        </li>
        <li>
          <strong>Divide:</strong> 1,200 ÷ 20 = 60 bags.
        </li>
        <li>
          <strong>Add waste:</strong> 60 × 1.07 ≈ 65 bags to order.
        </li>
      </ol>
      <p>
        Three rules make this bulletproof. First, <strong>never use one
        product&apos;s chart for another</strong> — cellulose needs
        significantly more bags than fiberglass at the same R-value because
        it blows at higher density, and the charts aren&apos;t interchangeable.
        Second, <strong>re-check the chart on every new product</strong> —
        manufacturers revise densities, and the chart that lived in your head
        from 2022 is probably wrong. Third, <strong>order a few extra</strong>:
        running out mid-job means a second supply run while your crew stands
        around, and a half-inch short on depth is a failed inspection photo.
      </p>
      <p>
        The <strong>DOE target for attics is R-30 to R-60</strong> depending on
        your climate zone, and <strong>R-49 is the most common bid
        target</strong> — it satisfies most northern and midwestern zones and
        most utility rebate programs. Photograph the finished depth with a
        ruler at the end of the job: it&apos;s your proof of delivery and your
        defense if a rebate inspector comes around.
      </p>

      <h2>The bidding process, step by step</h2>
      <h3>1. Measure the attic floor — and assess it</h3>
      <p>
        Measure the attic floor inside the exterior walls, and measure the
        access opening while you&apos;re there. A scuttle barely big enough
        for the hose is a different job than a pull-down stair — budget the
        hassle. In the attic itself, check the <strong>existing insulation</strong>{" "}
        (type, depth, condition), <strong>ventilation</strong> (soffit vents
        open or painted shut? ridge vent? gable vents fighting the ridge?),
        and signs of <strong>moisture or pests</strong> (staining, droppings,
        chewed wiring). A damp attic or an active pest problem stops the
        insulation bid until it&apos;s fixed — blowing new material over an
        active roof leak is malpractice.
      </p>
      <h3>2. Set the target R-value in writing</h3>
      <p>
        Name the R-value in the quote — &ldquo;blow to R-49 per DOE zone
        guidance&rdquo; — so the client is buying a performance number, not
        &ldquo;some insulation.&rdquo; Confirm which zone you&apos;re in and
        whether the client is chasing a rebate (most utilities publish the
        R-value that qualifies). More than the target earns you nothing but
        thinner margins; less fails inspections and rebate checks.
      </p>
      <h3>3. Do the material math from the bag chart</h3>
      <p>
        Area ÷ coverage per bag at target R-value, plus 5–10% waste, priced at
        your actual supplier cost — the table above shows the 2026 material
        ranges. Multiply bag count by bag price, not sq ft by memory. On a
        1,200 sq ft R-49 fiberglass job, material runs roughly{" "}
        <strong>$600–$1,150</strong> at $0.50–$0.95/sq ft of R-49-equivalent —
        small money next to labor, which is exactly why undercounting bags is
        a scheduling problem more than a cost problem.
      </p>
      <h3>4. Bid air sealing as its own line</h3>
      <p>
        Air sealing the attic floor — top plates, plumbing and wire
        penetrations, recessed-can covers, the attic hatch — is the
        highest-value line on the bid at <strong>$250–$750 per job</strong>.
        Insulation without air sealing performs well below its R-value, and
        many rebate programs require sealing first. Sell it as performance,
        not prep: &ldquo;the insulation keeps heat in; the sealing keeps the
        heat from bypassing the insulation.&rdquo; Do it <em>before</em> you
        blow — retrofitting sealing under fresh fill is miserable work you
        don&apos;t want to discount.
      </p>
      <h3>5. Price the attic extras — every one is a line</h3>
      <ul>
        <li><strong>Vent baffles (chutes)</strong> at every soffit vent — keeps insulation off the vents so the attic breathes. Price per baffle installed plus the time to fit them in tight eaves.</li>
        <li><strong>Insulation dams</strong> around the hatch, whole-house fan, and bath fans — keeps the fill where it belongs and the access usable. Cheap material, real labor.</li>
        <li><strong>Old insulation removal</strong> — <strong>$1–$2 per sq ft</strong>, but only when it&apos;s warranted: wet, moldy, pest-contaminated, or vermiculite that may contain asbestos (that&apos;s an abatement contractor&apos;s job, not yours — never touch it). Clean, dry old insulation stays; blow over it.</li>
        <li><strong>Access premium</strong> — low-clearance attics (under 3 feet at the eaves), long hose runs, or no parking for the blower truck near the house. Name the premium on the bid so the client sees why their ranch costs more than their neighbor&apos;s colonial.</li>
      </ul>
      <h3>6. Labor: crew-days, not wishful thinking</h3>
      <p>
        At <strong>$40–$80 per hour per crew member</strong>, a two-person
        crew costs <strong>$640–$1,280 per day</strong>. A standard 1,000–1,500
        sq ft blow is half a day; add a half day for air sealing and a full
        day or more for removal. Sanity-check the total against{" "}
        <strong>$0.70–$1.70 per sq ft in labor</strong> — if your crew-day
        math lands below the range, you&apos;re probably forgetting setup,
        cleanup, and the drive time your crew still gets paid for.
      </p>
      <h3>7. Add margin last — 15–20% of everything</h3>
      <p>
        Target <strong>15–20% true margin</strong> (profit ÷ final price) on
        the full subtotal: materials, labor, sealing, baffles, removal,
        disposal, and your overhead. A 20% markup on cost is only ~16.7%
        margin, so use roughly 25% markup to hold a real 20%. Margin goes in
        after everything — bidding your overhead out of margin is how a
        &ldquo;profitable&rdquo; attic quietly breaks even.
      </p>

      <h2>Line-item bid template (1,200 sq ft example)</h2>
      <p>
        Present the bid as lines, not a lump sum — lines get signed, lump sums
        get shopped. Here&apos;s how a 1,200 sq ft attic at R-49 with blown
        fiberglass stacks up using 2026 US ranges:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>2026 range</th>
            <th style={thStyle}>Example job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Blown fiberglass, R-49 (materials)</td>
            <td style={tdStyle}>$0.50–$0.95/sq ft</td>
            <td style={tdStyle}>~$700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Blow-in labor</td>
            <td style={tdStyle}>$0.70–$1.70/sq ft</td>
            <td style={tdStyle}>~$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Air sealing, attic floor</td>
            <td style={tdStyle}>$250–$750/job</td>
            <td style={tdStyle}>$450</td>
          </tr>
          <tr>
            <td style={tdStyle}>Vent baffles + hatch damming</td>
            <td style={tdStyle}>Per-job line</td>
            <td style={tdStyle}>$300</td>
          </tr>
          <tr>
            <td style={tdStyle}>Old insulation removal (if needed)</td>
            <td style={tdStyle}>$1–$2/sq ft</td>
            <td style={tdStyle}>$0 (existing is clean)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Access premium (low clearance / long run)</td>
            <td style={tdStyle}>Per-job line</td>
            <td style={tdStyle}>$0 (easy attic)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Disposal + cleanup</td>
            <td style={tdStyle}>Per-job line</td>
            <td style={tdStyle}>$100</td>
          </tr>
          <tr>
            <td style={tdStyle}>Subtotal</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>$2,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Margin (18%)</td>
            <td style={tdStyle}>15–20%</td>
            <td style={tdStyle}>$495</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Client price</strong></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}><strong>$3,245</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        That $3,245 effective rate is $2.70/sq ft — inside the honest{" "}
        <strong>$1.75–$3.25 pro fiberglass range</strong> and defensible line
        by line. Run your own numbers in the{" "}
        <a href="/calculators/attic-insulation-calculator">attic insulation
        calculator</a>, push them into a <a href="/quote">quote</a>, and send
        it from the driveway. Same-day quotes close at roughly double the
        rate of next-day ones.
      </p>

      <h2>Walk-away minimums</h2>
      <p>
        Not every attic deserves your crew. Set a <strong>per-visit
        minimum</strong> that covers mobilization — blower setup, hose runs,
        prep, and the crew&apos;s paid hours — and hold it. Walk away when the
        client&apos;s budget sits below your real cost plus margin, when they
        want you to blow over wet or pest-contaminated insulation, or when
        they ask you to skip air sealing on a rebate-chasing job and
        &ldquo;just make it look deep.&rdquo; A cheap job that strands your
        crew for a day is worse than no job — your crew&apos;s utilization is
        the business. Attics are fast, clean work; protect the schedule that
        makes them profitable.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Guessing bag count from memory.</strong> Charts change, densities change, and one product&apos;s chart never applies to another. Read the bag you&apos;re actually blowing.</li>
        <li><strong>Burying air sealing in the blow-in price.</strong> At $250–$750 it&apos;s real work with real payoff — bid it as a line and let the client choose performance. Hidden sealing is free sealing.</li>
        <li><strong>Measuring the roof or the house footprint.</strong> Bid attic <em>floor</em> area inside the exterior walls. Footprint math overstates, roof math is nonsense — both mis-size the material order.</li>
        <li><strong>Blowing over problems.</strong> Wet insulation, active leaks, pest contamination, painted-shut soffit vents — every one of these becomes your callback if you bury it under 19 inches of fiberglass.</li>
        <li><strong>No waste allowance.</strong> Order net bags with zero waste and the first hose clog costs you a supply run with a crew on the clock. Five to ten percent extra is the cheapest insurance in the trade.</li>
        <li><strong>Forgetting baffles and damming.</strong> Insulation packed against soffit vents kills ventilation and rots a roof from the inside. The baffles cost little; the roof deck costs everything.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Blowing attic insulation is genuinely DIY-accessible — big-box stores
        hand over the blower with 10+ bags, and the R-49 target is right on
        the chart. What DIYers get wrong is everything around the blow: no air
        sealing, baffles skipped, depth uneven, and the rebate paperwork
        botched. That&apos;s your sales pitch, and it&apos;s honest. A
        homeowner who DIYs the blow and calls you for air sealing is still a
        customer — price <strong>sealing-only visits</strong> ($250–$750) as
        a standalone service. But never compete on the bare-blow price with a
        homeowner holding a free blower rental: sell the system (sealing +
        baffles + verified depth + rebate-ready documentation), because
        that&apos;s what the rental counter can&apos;t provide.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        In most US municipalities, adding attic insulation does{" "}
        <strong>not require a building permit</strong> — it&apos;s treated as
        a maintenance upgrade, not structural work. Two exceptions to check
        before you quote: utility rebate and weatherization programs often
        require a licensed installer, a pre- and post-inspection, or both —
        your paperwork has to be in order for the client to get paid back;
        and some jurisdictions require permits when insulation work disturbs
        knob-and-tube wiring or vermiculite that may contain asbestos (in
        which case stop and call an abatement contractor). Ask your
        municipality once, note the answer in your bid template, and move on —
        permit confusion should never slow an attic quote.
      </p>
      <p>
        Insulation pairs naturally with winter prep — see our{" "}
        <a href="/guides/home-winterization-cost">home winterization guide</a>{" "}
        for the air-sealing and weatherproofing work that surrounds an attic
        job, and our{" "}
        <a href="/guides/blown-in-attic-insulation-cost">blown-in attic
        insulation cost guide</a> for the homeowner&apos;s view of what these
        jobs cost. One site visit, three quotes, one crew day.
      </p>

      <Faq items={faqs} heading="Attic insulation bidding questions, answered" />
    </GuideArticle>
  );
}
