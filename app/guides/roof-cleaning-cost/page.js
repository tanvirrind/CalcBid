import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Roof Cleaning Cost (2026)",
  description:
    "Roof cleaning costs $0.30–$0.75 per sq ft: soft wash vs pressure, by roof size pricing, and when cleaning means repair.",
  keywords: [
    "roof cleaning cost",
    "roof soft wash cost",
    "how much does it cost to clean a roof",
    "roof moss removal cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roof-cleaning-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Roof Cleaning Cost | CalcBid",
    description:
      "Roof cleaning costs $0.30–$0.75 per sq ft: soft wash vs pressure, by roof size pricing, and when cleaning means repair.",
    url: "https://calcbid.com/guides/roof-cleaning-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Cleaning Cost | CalcBid",
    description:
      "Roof cleaning costs $0.30–$0.75 per sq ft: soft wash vs pressure, by roof size pricing, and when cleaning means repair.",
  },
};

const faqs = [
  {
    q: "How much does it cost to clean a roof in 2026?",
    a: "Professional roof cleaning runs $0.30–$0.75 per square foot for a soft wash, with most single-family jobs landing between $300 and $700. A 1,500 sq ft roof typically costs $300–$500; a 2,500 sq ft roof runs $500–$900. Moss and lichen treatment, steep pitches, and difficult access push prices toward the top of the range.",
  },
  {
    q: "Is it better to pressure wash or soft wash a roof?",
    a: "Soft wash — always. Soft washing uses low pressure plus cleaning solutions that kill algae, moss, and mildew at the roots. Pressure washing blasts away granules from asphalt shingles, shortens roof life, and voids most manufacturer warranties. Pros who know roofs never put high pressure on them.",
  },
  {
    q: "How often should a roof be cleaned?",
    a: "Every 2–5 years, depending on shade, climate, and tree cover. Roofs under heavy tree canopy in humid climates can need cleaning every 2–3 years; roofs in dry, sunny areas may go 5+ years. If you see black streaks (algae) or green patches (moss), you're overdue.",
  },
  {
    q: "Will cleaning a roof damage the shingles?",
    a: "A proper soft wash won't. The damage comes from high-pressure washing, which dislodges granules and forces water under shingles. Soft washing keeps pressure below garden-hose levels and lets the cleaning solution do the work. Ask any contractor to confirm their method in writing before they climb up.",
  },
  {
    q: "Can I clean my own roof?",
    a: "A single-story, walkable roof can be DIY'd with a garden hose, a pump sprayer, and an oxygen-bleach solution for a few hundred dollars in materials — but falls are the #1 risk in roofing work, and steep or two-story roofs are genuinely dangerous. Most homeowners are better off hiring a pro at $300–$700 than risking a ladder accident.",
  },
  {
    q: "Does roof cleaning remove moss permanently?",
    a: "It removes the moss and kills what's there, but it doesn't prevent regrowth — moss returns in 2–4 years in shady, damp conditions. Zinc or copper strips installed near the ridge release ions with each rain that inhibit regrowth for years. Pairing a cleaning with zinc strips is the closest thing to a permanent fix.",
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
      title="Roof Cleaning Cost"
      description="What a soft wash costs by roof size, the methods that are safe for shingles, and how to spot the roof that needs repair instead."
      slug="roof-cleaning-cost"
      updated="October 2026"
      calculatorHref="/calculators/pressure-washing-calculator"
      calculatorLabel="Pressure Washing Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        A professional roof cleaning costs <strong>$0.30–$0.75 per square
        foot</strong> for a soft wash, with most single-family homes landing
        between <strong>$300 and $700</strong> total. That covers removing
        algae streaks, moss, and mildew from a 1,200–2,500 sq ft roof using
        low-pressure equipment and cleaning solutions — never a high-pressure
        blast, which strips shingle granules and voids warranties. Heavier
        moss, steep pitches, and two-story access push the price up; a simple
        rinse-and-treat on a small ranch roof can come in under $300.
      </p>

      <h2>2026 roof cleaning prices by method</h2>
      <p>
        Method is the single biggest price driver — and the single biggest
        quality divider. Here&apos;s what each approach costs and what
        it&apos;s actually doing to your roof.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Method</th>
            <th style={thStyle}>Per sq ft</th>
            <th style={thStyle}>Typical 1,500 sq ft job</th>
            <th style={thStyle}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Soft wash</td>
            <td style={tdStyle}>$0.30–$0.75</td>
            <td style={tdStyle}>$300–$700</td>
            <td style={tdStyle}>The right method for shingles and tile</td>
          </tr>
          <tr>
            <td style={tdStyle}>Chemical / biocide treatment</td>
            <td style={tdStyle}>$0.35–$0.70</td>
            <td style={tdStyle}>$350–$800</td>
            <td style={tdStyle}>Best for heavy moss and lichen</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pressure washing</td>
            <td style={tdStyle}>$0.20–$0.50</td>
            <td style={tdStyle}>$200–$400</td>
            <td style={tdStyle}>Unsafe for shingles — voids warranties</td>
          </tr>
          <tr>
            <td style={tdStyle}>Manual moss removal + treatment</td>
            <td style={tdStyle}>$0.50–$1.00</td>
            <td style={tdStyle}>$500–$1,000</td>
            <td style={tdStyle}>For severe moss on tile or cedar</td>
          </tr>
        </tbody>
      </table>
      <p>
        Soft washing is low pressure (garden-hose levels) plus a
        sodium-hypochlorite-based solution with surfactant that kills algae,
        moss, and mildew at the roots and rinses clean. Pressure washing is
        cheaper because it&apos;s just water at high PSI — and it&apos;s the
        wrong tool for a roof. It dislodges the granules that protect asphalt
        shingles from UV, forces water under tiles and flashing, and gives
        manufacturers a reason to deny warranty claims. If a bid is
        suspiciously cheap, ask for the method in writing.
      </p>

      <h2>Roof cleaning cost by roof size</h2>
      <p>
        Roof square footage runs larger than your home&apos;s floor plan —
        multiply by 1.15–1.4 to account for pitch and overhang. These are
        2026 US ranges for a professional soft wash:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Roof size (sq ft)</th>
            <th style={thStyle}>Typical home</th>
            <th style={thStyle}>Soft wash cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>1,000</td>
            <td style={tdStyle}>Small ranch or simple gable</td>
            <td style={tdStyle}>$200–$400</td>
          </tr>
          <tr>
            <td style={tdStyle}>1,500</td>
            <td style={tdStyle}>Average single-story home</td>
            <td style={tdStyle}>$300–$500</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,000</td>
            <td style={tdStyle}>Average two-story home</td>
            <td style={tdStyle}>$400–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>2,500</td>
            <td style={tdStyle}>Large or multi-gable</td>
            <td style={tdStyle}>$500–$900</td>
          </tr>
          <tr>
            <td style={tdStyle}>3,500</td>
            <td style={tdStyle}>Complex, multi-level roof</td>
            <td style={tdStyle}>$700–$1,200</td>
          </tr>
        </tbody>
      </table>
      <p>
        Most contractors also charge a <strong>$100–$150 minimum</strong> to
        cover drive time and setup, so very small jobs (a dormer or a porch
        roof) price off the minimum rather than the per-foot rate. Steep
        pitches (8/12 and up), three-story access, and heavy moss add
        25–50% on top.
      </p>

      <h2>What you&apos;re actually paying to remove</h2>
      <p>
        Three different organisms live on dirty roofs, and each wants a
        different level of treatment:
      </p>
      <ul>
        <li><strong>Black streaks (Gloeocapsa magma algae):</strong> the most common roof problem in humid climates. Cosmetic at first, but algae feeds on the limestone filler in shingles and holds moisture against them. A standard soft wash kills it in one visit.</li>
        <li><strong>Moss:</strong> thicker, root-like growth that lifts shingle edges and traps water underneath. Needs a biocide dwell treatment plus hand removal on severe patches — the $0.35–$0.70 tier. Scraping dry moss off shingles tears granules; it must be killed and loosened first.</li>
        <li><strong>Lichen:</strong> the crusty, flat patches that bond directly to granules. The toughest to remove — it often needs a dedicated chemical treatment and a second visit after the colony dies and flakes off.</li>
      </ul>
      <p>
        Cleaning solves the symptom, not the cause. Roofs under heavy tree
        cover in humid regions regrow algae in 2–3 years. <strong>Zinc or
        copper strips</strong> installed near the ridge release metal ions
        with every rain that inhibit regrowth — $200–$400 installed, and
        the closest thing to a long-term fix. Trimming back overhanging
        branches buys you as much time as any chemical.
      </p>

      <h2>Cost by roofing material</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Soft wash cost</th>
            <th style={thStyle}>What to know</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Asphalt shingles</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>Soft wash only; pressure voids warranties</td>
          </tr>
          <tr>
            <td style={tdStyle}>Concrete / clay tile</td>
            <td style={tdStyle}>$0.40–$0.75</td>
            <td style={tdStyle}>Tolerates slightly more pressure; walking breaks tiles — pros stay on ridges and ladders</td>
          </tr>
          <tr>
            <td style={tdStyle}>Metal roofing</td>
            <td style={tdStyle}>$0.30–$0.60</td>
            <td style={tdStyle}>Cleans easily; watch for scratched coatings and loose fasteners</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar shake</td>
            <td style={tdStyle}>$0.50–$1.00</td>
            <td style={tdStyle}>Gentlest treatment; aggressive washing shortens shake life dramatically</td>
          </tr>
        </tbody>
      </table>

      <h2>When cleaning isn&apos;t enough: repair vs. clean</h2>
      <p>
        Cleaning reveals problems — a good contractor tells you when what
        they found isn&apos;t a cleaning problem at all:
      </p>
      <ul>
        <li><strong>Curling, cracked, or missing shingles:</strong> cleaning won&apos;t fix them. Budget for <a href="/guides/roof-replacement-cost-2026">repairs or replacement</a> instead of spending $600 on a roof that&apos;s at end of life.</li>
        <li><strong>Granule loss in the gutters:</strong> piles of sand-like granules mean the shingles are wearing out. A wash makes it look better for a season; the roof still needs replacing soon.</li>
        <li><strong>Soft or sagging decking:</strong> if the roof feels spongy underfoot, that&apos;s rot — stop and get a <a href="/guides/how-to-estimate-roofing-job">roofing estimate</a>, not a cleaning quote.</li>
        <li><strong>Active leaks or water stains:</strong> cleaning does nothing for leaks. Fix the leak first; clean after, so the new repair blends in.</li>
      </ul>
      <p>
        Rule of thumb: if the roof is over 20 years old and showing wear,
        put the cleaning money toward replacement. Our{" "}
        <a href="/guides/roof-replacement-cost-2026">roof replacement cost
        guide</a> breaks down the real 2026 numbers.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        A single-story, low-slope roof is genuinely DIY-able: a garden hose,
        a pump sprayer, and an oxygen-bleach or roof-wash concentrate runs
        <strong> $50–$150 in materials</strong> for an average home — roughly
        a third of the pro price. Work on a cool, overcast day, spray
        from the ridge down, protect landscaping with tarps (runoff kills
        plants), and never use a pressure washer.
      </p>
      <p>
        But the math changes fast with height. Falls are the leading cause of
        death in roofing work, and a steep or two-story roof has no safe DIY
        version. Hire a pro when: the pitch is 6/12 or steeper, the roof is
        two stories, there&apos;s heavy moss requiring chemicals you
        shouldn&apos;t handle, or the roof is old enough that walking it
        risks damage. A $500 pro visit is cheaper than one ER visit — and
        pros carry the liability insurance you don&apos;t.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Almost never for cleaning. Roof cleaning is maintenance, not
        construction — no US municipality we&apos;ve seen requires a permit
        for washing a roof. The exception-adjacent cases: some HOAs require
        approval before any exterior work (ask first, not after), and a few
        cities restrict chemical runoff into storm drains — a reputable
        contractor captures or diverts rinse water as standard practice.
        If the job uncovers damage that needs repair, <em>that</em> may need
        a permit depending on scope; check your municipality before any
        structural work begins.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Hiring the pressure washer guy.</strong> The cheapest bid is usually the one that blasts your shingles at 3,000 PSI. Ask for the method in writing: soft wash or walk away.</li>
        <li><strong>Cleaning a dying roof.</strong> $700 spent cleaning 25-year-old curling shingles is $700 not spent on replacement. Check the roof&apos;s age and condition first.</li>
        <li><strong>Skipping the plant protection.</strong> Soft-wash solutions kill landscaping on contact. Any contractor who doesn&apos;t wet down and cover plants is cutting corners.</li>
        <li><strong>Scraping moss dry.</strong> Dry scraping tears shingle granules off with the moss. Kill it with treatment first, let it release, then rinse.</li>
        <li><strong>Ignoring the cause.</strong> Cleaning without addressing shade, debris, and drainage means you&apos;re buying the same job again in two years. Trim branches, clean gutters, consider zinc strips.</li>
        <li><strong>DIY on a steep roof.</strong> No cost saving justifies a fall. Two stories or 6/12 pitch and up — hire it out.</li>
      </ul>
      <p>
        Price the surface work in the{" "}
        <a href="/calculators/pressure-washing-calculator">pressure washing
        calculator</a>, and read our{" "}
        <a href="/guides/pressure-washing-cost-per-square-foot">per-square-foot
        pressure washing guide</a> for the full method breakdown. While
        you&apos;re up there, the <a href="/guides/gutter-cleaning-cost-per-linear-foot">gutters</a> usually
        need attention too — bundle the two and most contractors discount
        the second service.
      </p>

      <h2>Regional pricing and the seasonal calendar</h2>
      <p>
        Where you live changes both the price and the schedule. In the{" "}
        <strong>Pacific Northwest</strong>, moss is the dominant problem and
        cleaning is closer to routine maintenance than cosmetics — expect
        the biocide-treatment tier ($0.35–$0.70 per sq ft) as the default
        quote, and a 2–3 year cycle under tree cover. In{" "}
        <strong>Florida and the Gulf Coast</strong>, black-streak algae is
        the main target, competition among soft-wash companies is fierce,
        and straightforward jobs often land at the low end of the soft-wash
        range ($0.30–$0.45 per sq ft). In the <strong>Northeast</strong>,
        labor rates push the same job 15–25% above the national range, and
        the season effectively closes once overnight freezes arrive — a
        soft wash applied to a roof that freezes that night doesn&apos;t get
        its full dwell time. <strong>Desert Southwest</strong> roofs go
        longest between cleanings (dust and monsoon debris rather than
        growth), so per-visit prices matter more than frequency.
      </p>
      <p>
        Timing saves real money everywhere. Spring is peak season — every
        homeowner looks up at the same time after winter — and good
        companies book out two to four weeks with no reason to discount.
        The same job quoted in <strong>late summer or fall</strong> often
        comes in 10–15% lower as schedules open up, and cleaning in fall has
        a practical edge: gutters and roof are cleared before winter storms
        instead of after. If your roof needs moss treatment, book it before
        the growth peaks in late spring — killing young moss takes one
        standard treatment, while a summer-mature colony is the two-visit
        job priced at the top of the range.
      </p>

      <Faq items={faqs} heading="Roof cleaning questions, answered" />
    </GuideArticle>
  );
}
