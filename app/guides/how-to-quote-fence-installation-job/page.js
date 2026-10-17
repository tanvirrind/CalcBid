import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Quote a Fence Installation Job (2026)",
  description:
    "How to quote fence installation: per-linear-foot pricing by material, post and gate math, and the site factors that make or break your margin.",
  keywords: [
    "how to quote a fence installation job",
    "how to bid a fence job",
    "fence installation quote",
    "how much to charge to install a fence",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-quote-fence-installation-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Quote a Fence Installation Job | CalcBid",
    description:
      "Per-linear-foot pricing by material, post and gate math, and the site factors that make or break your margin.",
    url: "https://calcbid.com/guides/how-to-quote-fence-installation-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Quote a Fence Installation Job | CalcBid",
    description: "Per-linear-foot pricing by material, post and gate math, and the site factors that make or break your margin.",
  },
};

const faqs = [
  {
    q: "How do you measure linear feet for a fence quote?",
    a: "Walk the property line with a measuring wheel and record each straight run separately — corners, gates, and obstacles break the math into segments. Total the runs for your linear footage, then note gate locations and widths. Never estimate from a satellite view alone: slopes, trees, and grade changes don't show up on screen and they all move the price.",
  },
  {
    q: "How many posts do I need for a fence?",
    a: "Posts = (total linear feet ÷ post spacing) + 1. With standard 8-foot spacing, a 150-foot fence needs 150 ÷ 8 + 1 = 20 posts (round up the division first: 19 sections + 1 = 20). Tighten to 6-foot spacing for wind zones and the same fence needs 26 posts — 30% more posts, concrete, and labor. Price the spacing you actually plan to build.",
  },
  {
    q: "How much concrete per fence post?",
    a: "A standard 4×4 post set 2 feet deep in a 10-inch-diameter hole needs roughly 1.5 sixty-pound bags (about 2.5 cubic feet of hole volume, minus the post). For a 150-foot fence with 20 posts, that's 30 bags — around $150–$200 in concrete alone. In frost zones, dig below the frost line (30–42 inches in northern states) and the concrete per post roughly doubles.",
  },
  {
    q: "Should gates be a separate line item on a fence quote?",
    a: "Always. A walk gate adds $150–$400 installed (gate frame, hinges, latch, heavier corner posts); a double driveway gate runs $400–$1,200. Gates are the most common reason a per-foot quote comes in light — the hardware, bracing, and extra labor don't scale with footage. List each gate with its width and type so the client sees exactly what they're paying for.",
  },
  {
    q: "Who calls 811 for utility locates on a fence job?",
    a: "You do — or you confirm in writing that the homeowner did. Dial 811 (or your state's one-call) at least 2–3 business days before digging; it's free and it's the law in most states. Hitting a gas or fiber line can cost thousands and shut your job down. Note the locate ticket number on your quote paperwork.",
  },
  {
    q: "How long does it take to install 150 feet of fence?",
    a: "A two-person crew installs 100–150 linear feet of wood privacy fence per day on flat, clear ground — including setting posts in concrete. Add a day for old fence removal and disposal, half a day per gate beyond the first, and extra time for slopes, rocky soil, or hand-digging near utilities. Tell the client 2–3 days for a typical 150-foot job and you'll rarely be wrong.",
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
      title="How to Quote a Fence Installation Job"
      description="Price per linear foot, nail the post and gate math, and read the site before you name a number — fence jobs are won or lost on the details."
      slug="how-to-quote-fence-installation-job"
      updated="October 2026"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Price the materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Quote fence installation <strong>per linear foot, installed</strong> —
        it&apos;s how homeowners compare bids and how your costs actually
        scale. The 2026 US ranges for a 6-foot fence, materials and labor:{" "}
        <strong>chain link $15–$30, wood privacy $25–$60, vinyl $30–$65 per
        linear foot</strong>. A 150-foot cedar privacy fence at $40/ft is a
        $6,000 job — but that per-foot number is the <em>output</em> of your
        math, not the input. The real quote is built from posts, concrete,
        pickets, gates, removal, and site conditions. Get the takeoffs right
        and fence work runs 35–50% gross margins with a two-person crew.
      </p>

      <h2>2026 fence installation prices per linear foot</h2>
      <p>
        Installed prices for a standard 6-foot residential fence, including
        materials, labor, and post concrete. Taller fences, gates, removal,
        and difficult sites add on top.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Per linear ft</th>
            <th style={thStyle}>150-ft fence total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Chain link, galvanized</td>
            <td style={tdStyle}>$15–$30</td>
            <td style={tdStyle}>$2,250–$4,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pressure-treated pine privacy</td>
            <td style={tdStyle}>$25–$45</td>
            <td style={tdStyle}>$3,750–$6,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar privacy</td>
            <td style={tdStyle}>$30–$55</td>
            <td style={tdStyle}>$4,500–$8,250</td>
          </tr>
          <tr>
            <td style={tdStyle}>Vinyl / PVC privacy</td>
            <td style={tdStyle}>$30–$65</td>
            <td style={tdStyle}>$4,500–$9,750</td>
          </tr>
          <tr>
            <td style={tdStyle}>Aluminum ornamental</td>
            <td style={tdStyle}>$35–$70</td>
            <td style={tdStyle}>$5,250–$10,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite (Trex-style)</td>
            <td style={tdStyle}>$40–$65</td>
            <td style={tdStyle}>$6,000–$9,750</td>
          </tr>
        </tbody>
      </table>
      <p>
        Labor is the biggest slice — roughly 50–70% of the installed price on
        wood fences. That&apos;s why two quotes for the same 150 feet can
        differ by $2,000 and both be honest: one crew digs and sets 20 posts
        in a day on flat ground, another spends two days fighting slope and
        rock. Your per-foot rate has to reflect <em>your</em> crew&apos;s
        reality, not a national average.
      </p>

      <h2>Measure it right (the takeoff)</h2>
      <p>
        Walk the line with a measuring wheel and record each straight run
        separately. Corners, gates, and obstacles split the fence into
        segments, and each segment drives your post count:
      </p>
      <ul>
        <li><strong>Total linear feet:</strong> sum of all runs. This is your headline number.</li>
        <li><strong>Post count:</strong> (feet ÷ spacing) + 1 per run. At 8-ft spacing, a 150-ft run needs 20 posts. Corners and gate posts should be heavier stock — 6×6 instead of 4×4.</li>
        <li><strong>Concrete:</strong> ~1.5 sixty-pound bags per 4×4 post at 2-ft depth. Twenty posts = 30 bags. Double it below the frost line.</li>
        <li><strong>Pickets/panels:</strong> for board-on-board cedar, figure picket count from the coverage width plus 10% waste. Pre-built panels go faster but cost more per foot — know which you&apos;re bidding.</li>
        <li><strong>Rails:</strong> two rails per 8-ft section for 6-ft fences (three for 8-ft). That&apos;s 40 rails on a 150-ft run — it adds up at the lumber yard.</li>
      </ul>
      <p>
        Run your numbers through the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>{" "}
        before you finalize — it catches the arithmetic slips that eat
        margins, especially on multi-run layouts.
      </p>

      <h2>Gates: the margin killer (bid them separately)</h2>
      <p>
        Gates don&apos;t scale with footage, so they never belong buried in a
        per-foot price. Price each gate as its own line item:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Gate</th>
            <th style={thStyle}>Installed add-on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>3–4 ft walk gate, wood</td>
            <td style={tdStyle}>$150–$400</td>
          </tr>
          <tr>
            <td style={tdStyle}>Walk gate, vinyl or metal</td>
            <td style={tdStyle}>$300–$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Double driveway gate, wood</td>
            <td style={tdStyle}>$400–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Double driveway gate, vinyl/metal</td>
            <td style={tdStyle}>$800–$1,200</td>
          </tr>
        </tbody>
      </table>
      <p>
        Each gate needs heavier corner posts (6×6 set deeper, more concrete),
        hinges, a latch, and diagonal bracing on wood gates. A sagging gate
        is the #1 fence callback — the $40 you save on cheap hinges costs you
        a return trip. Name the hardware brand on the quote; it signals
        quality and justifies the line item.
      </p>

      <h2>Read the site before you bid</h2>
      <p>
        The site walk is where fence bids are won or lost. Price what you
        see, not what you hope:
      </p>
      <ul>
        <li><strong>Slope:</strong> stepped fences (level sections stair-stepping down) use more material and labor than racked fences that follow the grade. Either way, slope adds 10–25% over flat ground — say so on the quote.</li>
        <li><strong>Soil:</strong> rocky or clay soil can double digging time. Ask about it, probe with a bar if you&apos;re unsure, and carry a rock clause: &ldquo;rock excavation billed at $X per post if encountered.&rdquo;</li>
        <li><strong>Access:</strong> no side-yard access means hand-carrying every bag of concrete and every picket around the house. Add labor or a delivery surcharge.</li>
        <li><strong>Old fence removal:</strong> $3–$8 per linear foot for teardown and haul-off. Concrete footings from the old fence are the hidden cost — pulling them is real labor. Bid removal as its own line, never folded into the install price.</li>
        <li><strong>Trees and roots:</strong> roots laugh at post-hole diggers. Note any large trees on the line and price hand-digging or slight reroutes.</li>
        <li><strong>Utilities:</strong> call 811 at least 2–3 business days before digging — free, and legally required in most states. Put the ticket number on your paperwork.</li>
      </ul>

      <h2>Permits, HOAs, and property lines</h2>
      <p>
        Three questions that prevent the expensive kind of surprise:
      </p>
      <ul>
        <li><strong>Permits:</strong> most cities require a fence permit ($50–$200); some cap residential height at 6 feet in back yards and 4 in front. Check before you bid — a permit delay is not a client-paid delay.</li>
        <li><strong>HOA rules:</strong> material, color, height, and style restrictions are common. Ask during the walkthrough; a fence the HOA orders torn down is your problem if you built it.</li>
        <li><strong>Property lines:</strong> if the line is uncertain, make the survey the homeowner&apos;s responsibility in writing. Building 6 inches onto the neighbor&apos;s lot is a lawsuit, not a fence.</li>
      </ul>

      <h2>Stack the upsells</h2>
      <ul>
        <li><strong>Staining/sealing</strong> — the highest-margin add-on in fencing. A fresh cedar fence is the perfect canvas; see our <a href="/guides/how-to-bid-fence-staining-job">fence staining bidding guide</a> for the per-foot math.</li>
        <li><strong>Upgraded gates</strong> — decorative hardware, self-closing hinges for pool code, keypad latches. High perceived value, quick install.</li>
        <li><strong>Lattice or decorative top</strong> — $5–$10 per foot add-on that transforms the look for little extra labor.</li>
        <li><strong>Post caps</strong> — $3–$8 each installed, pure margin, and they genuinely extend post life by shedding water.</li>
        <li><strong>Maintenance plan:</strong> restain wood fences every 2–3 years. Book the follow-up now — every fence you build is a future job you&apos;ve already won.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Burying gates in the per-foot price.</strong> Two driveway gates can be $2,000 of a $6,000 job. Separate line, always.</li>
        <li><strong>Forgetting the old fence.</strong> Teardown, concrete footing removal, and dump fees are a full day&apos;s work. Bid it or eat it.</li>
        <li><strong>Quoting from satellite view.</strong> Slope, rock, access, and utilities don&apos;t show up on screen. Walk it or pad it — walking is cheaper.</li>
        <li><strong>Skipping the 811 call.</strong> One cut fiber line wipes out the profit on ten fences.</li>
        <li><strong>No rock clause.</strong> The one job in twenty that hits bedrock will remind you why the clause exists.</li>
        <li><strong>Same-day verbal quotes.</strong> Fence jobs have too many variables for a driveway handshake. Send the itemized quote from the <a href="/quote">quote builder</a> — clients compare line items, and detailed quotes win over round numbers.</li>
      </ul>
      <p>
        Price the materials in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence calculator</a>,
        build the itemized quote in <a href="/quote">CalcBid</a>, and send it
        before you leave the curb. Same-day quotes close at roughly double the
        rate of next-day ones.
      </p>

      <Faq items={faqs} heading="Fence installation questions, answered" />
    </GuideArticle>
  );
}
