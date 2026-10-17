import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Deck Post Replacement Cost (2026)",
  description:
    "Replacing a deck post costs $200–$500 in 2026. Per-post pricing, footing costs, the jacking process, and when posts signal bigger trouble.",
  keywords: [
    "deck post replacement cost",
    "cost to replace deck post",
    "how much to replace a deck post",
  ],
  alternates: { canonical: "https://calcbid.com/guides/deck-post-replacement-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Post Replacement Cost (2026) | CalcBid",
    description:
      "$200–$500 per post installed. Per-post pricing, footing costs, the jacking process, and when posts signal bigger trouble.",
    url: "https://calcbid.com/guides/deck-post-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Post Replacement Cost (2026) | CalcBid",
    description: "$200–$500 per post installed. Pricing, footings, the jacking process, and warning signs.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace a deck post?",
    a: "Replacing one deck post costs $200–$500 installed in 2026. The post itself is only $30–$80 in materials — the money is in the labor: jacking and shoring the deck, removing the old post, pouring or repairing the footing, and setting the new post plumb. Multiple posts usually price at $150–$400 each since mobilization is shared.",
  },
  {
    q: "Can you replace a deck post without removing the deck?",
    a: "Yes — that's the standard method. The beam is temporarily supported with jack posts or cribbing on either side of the failed post, the old post is removed, and the new one is set and connected. The deck surface stays in place. This is routine work for a pro but not a first-time DIY project — a dropped beam is a catastrophe.",
  },
  {
    q: "How do I know if a deck post needs replacing?",
    a: "Probe the base with a screwdriver — the bottom 6 inches rot first. Soft wood, visible fungal growth, the post leaning or pulling away from the beam, and the deck settling or bouncing near the post are all replacement signals. Posts buried directly in soil or concrete (no standoff bracket) are living on borrowed time.",
  },
  {
    q: "Should deck posts sit in concrete or on top of it?",
    a: "On top, always — set on a concrete pier with a galvanized standoff post base that holds the wood 1 inch above the concrete. Posts buried in concrete or soil wick moisture and rot from the bottom up; it's the most common post failure there is. Code in most areas now requires the standoff bracket.",
  },
  {
    q: "How much does it cost to replace all deck posts?",
    a: "A typical deck has 4–8 posts. At $150–$400 per post when done as a batch, full post replacement runs $600–$3,200. If every post is failing, get the footings, beams, and joists inspected too — widespread post failure often means the whole structure is at end of life, and replacement may beat repair.",
  },
  {
    q: "Do I need a permit to replace a deck post?",
    a: "Usually yes — post replacement is structural work, and most cities require a permit ($50–$200) with an inspection of the footing and connections. The inspection is genuinely useful here: it verifies the new footing depth and the post-to-beam connection, the two things that keep the deck standing.",
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
      title="Deck Post Replacement Cost"
      description="What replacing deck posts costs in 2026: per-post installed pricing, footing work, the safe jacking process, and the rot signs that mean act now."
      slug="deck-post-replacement-cost"
      updated="October 2026"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate deck materials"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing a deck post costs <strong>$200–$500 per post
        installed</strong> in 2026. The post itself is the cheapest part —
        $30–$80 in lumber. You&apos;re paying for the skilled, slightly
        nerve-wracking labor: <strong>shoring up the deck, removing the
        failed post, fixing the footing, and setting the new post
        plumb</strong>. Done as a batch, posts price at $150–$400 each.
        Posts fail from the bottom up — rot at grade is the #1 cause — so
        this guide also covers the footing and connection details that
        decide whether the new post lasts 5 years or 25. For the broader
        picture, see our <a href="/guides/deck-repair-cost">deck repair
        cost guide</a>.
      </p>

      <h2>Deck post replacement cost breakdown</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Scope</th>
            <th style={thStyle}>Typical cost</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Single post, existing footing reusable</td>
            <td style={tdStyle}>$200–$350</td>
            <td style={tdStyle}>Best case — rare on old decks</td>
          </tr>
          <tr>
            <td style={tdStyle}>Single post, new footing poured</td>
            <td style={tdStyle}>$350–$500</td>
            <td style={tdStyle}>The normal case</td>
          </tr>
          <tr>
            <td style={tdStyle}>Per post in a batch (4+ posts)</td>
            <td style={tdStyle}>$150–$400</td>
            <td style={tdStyle}>Mobilization shared across posts</td>
          </tr>
          <tr>
            <td style={tdStyle}>All posts, typical deck (4–8 posts)</td>
            <td style={tdStyle}>$600–$3,200</td>
            <td style={tdStyle}>Get the whole structure inspected</td>
          </tr>
          <tr>
            <td style={tdStyle}>Post + beam repair (post failed and took the beam with it)</td>
            <td style={tdStyle}>$800–$2,000</td>
            <td style={tdStyle}>Now it&apos;s a structural project</td>
          </tr>
        </tbody>
      </table>
      <p>
        Where the money goes on a typical $400 post: $30–$80 post and
        hardware, $40–$100 concrete and bracket, and $250–$350 labor for
        2–4 hours of jacking, removal, and setting. The footing is the
        variable — digging out an old buried post and pouring a proper pier
        below frost line is real excavation work.
      </p>

      <h2>Why posts fail (and how to spot it)</h2>
      <ul>
        <li><strong>Buried in soil or concrete.</strong> The #1 killer. Wood in direct ground contact wicks moisture and rots from the bottom up. Probe the bottom 6 inches with a screwdriver — if it sinks in, the post is done.</li>
        <li><strong>No standoff bracket.</strong> Posts sitting flat on concrete still wick water. Modern code wants a galvanized standoff base holding wood 1&quot; above the pier.</li>
        <li><strong>Undersized or shallow footings.</strong> Pads above the frost line heave every winter, working connections loose. The deck settles unevenly and posts take side loads they weren&apos;t designed for.</li>
        <li><strong>Beam connection failure.</strong> Posts nailed to the side of a beam (instead of bearing under it with proper connectors) eventually work loose. Look for gaps opening between post tops and beams.</li>
      </ul>
      <p>
        Warning signs that mean act now, not next spring: visible lean,
        the deck bouncing or settling near a post, fungal growth or
        mushroom-like brackets on the wood, and any post you can rock by
        hand. A failed post shifts load to its neighbors — one bad post
        becomes three.
      </p>

      <h2>How a post is replaced (the safe way)</h2>
      <ol>
        <li><strong>Shore the beam.</strong> Set temporary jack posts or cribbing under the beam on both sides of the failed post. The temporary supports carry the full load — size them like the real thing.</li>
        <li><strong>Take the load.</strong> Jack the beam up just enough to free the old post — typically 1/4 to 1/2 inch. Never over-jack; you&apos;ll crack drywall inside or pop deck boards.</li>
        <li><strong>Remove the old post.</strong> Cut or unbolt it out. Dig out the old footing if it&apos;s undersized, shallow, or crumbling — this is the step cheap quotes skip.</li>
        <li><strong>Pour the new footing.</strong> Below frost line, proper diameter (typically 12&quot; for a 4×4, larger for 6×6), with a J-bolt or embedded bracket. Let it cure — don&apos;t load green concrete.</li>
        <li><strong>Set the new post.</strong> Pressure-treated lumber rated for ground contact, cut to length, set plumb on a standoff bracket, connected to the beam with proper post-to-beam connectors — not toenails.</li>
        <li><strong>Transfer the load and remove shoring.</strong> Lower the jack slowly, verify the beam sits fully on the new post, and remove temporary supports.</li>
      </ol>
      <p>
        Steps 1 and 2 are why this isn&apos;t a casual DIY job. A
        300 sq ft deck section can weigh over a ton; a slipped jack or an
        undersized temporary post turns a repair into an emergency. Pros
        do this weekly — hire it out unless you&apos;ve done structural
        shoring before.
      </p>

      <h2>Post and footing materials</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Component</th>
            <th style={thStyle}>Cost</th>
            <th style={thStyle}>Spec to demand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>4×4 pressure-treated post</td>
            <td style={tdStyle}>$30–$50</td>
            <td style={tdStyle}>Ground-contact rated (UC4A or better)</td>
          </tr>
          <tr>
            <td style={tdStyle}>6×6 pressure-treated post</td>
            <td style={tdStyle}>$50–$80</td>
            <td style={tdStyle}>Required for taller decks; check code</td>
          </tr>
          <tr>
            <td style={tdStyle}>Concrete (per footing)</td>
            <td style={tdStyle}>$20–$60</td>
            <td style={tdStyle}>Below frost line; 2–4 bags typical</td>
          </tr>
          <tr>
            <td style={tdStyle}>Standoff post base</td>
            <td style={tdStyle}>$15–$40</td>
            <td style={tdStyle}>Galvanized; holds wood 1&quot; above concrete</td>
          </tr>
          <tr>
            <td style={tdStyle}>Post-to-beam connector</td>
            <td style={tdStyle}>$10–$25</td>
            <td style={tdStyle}>Rated connector, not toenails</td>
          </tr>
        </tbody>
      </table>

      <h2>When posts mean bigger trouble</h2>
      <p>
        One rotted post on an otherwise healthy deck is a $350 repair.
        But certain patterns mean the quote needs to grow — or the deck
        needs replacing:
      </p>
      <ul>
        <li><strong>Every post is soft at grade.</strong> The whole deck was built wrong (buried posts, no footings). Replacing posts one by one is triage; price the full structural rebuild.</li>
        <li><strong>Posts are fine but the beam is rotted.</strong> Water traps where posts meet beams. Beam replacement ($800–$2,000) often rides along with post work.</li>
        <li><strong>The ledger is also failing.</strong> Posts + ledger both bad = the deck&apos;s two support systems are compromised. This is replacement territory — see <a href="/guides/deck-replacement-cost">deck replacement cost</a>.</li>
        <li><strong>Settling continues after repair.</strong> If the deck keeps moving after new posts and footings, the soil is the problem (expansive clay, poor drainage). That&apos;s a geotechnical conversation, not a carpentry one.</li>
      </ul>

      <h2>How long does post replacement take?</h2>
      <p>
        A single straightforward post replacement is a half-day job:
        2–4 hours for an experienced two-person crew. The timeline:
      </p>
      <ul>
        <li><strong>Shoring and jacking:</strong> 30–60 minutes — the careful part, never rushed.</li>
        <li><strong>Old post and footing removal:</strong> 30–90 minutes — digging out the old footing is the wildcard.</li>
        <li><strong>New footing pour:</strong> 30–45 minutes of work, then cure time. Pros often pour the footing, do other work, and return — or use fast-setting concrete to keep it same-day.</li>
        <li><strong>Setting and connecting:</strong> 30–60 minutes — cut to length, set plumb, connect, transfer load.</li>
      </ul>
      <p>
        Batch work is much faster per post — a crew doing 6 posts doesn&apos;t
        take 6× the time. Shared mobilization, one concrete delivery, and
        rhythm on the jacking bring it to roughly 1–1.5 hours per post.
        That&apos;s why batch pricing ($150–$400/post) beats single-post
        pricing so decisively.
      </p>

      <h2>Pro vs. DIY: an honest split</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Approach</th>
            <th style={thStyle}>Cost per post</th>
            <th style={thStyle}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>DIY (rented jacks)</td>
            <td style={tdStyle}>$100–$200</td>
            <td style={tdStyle}>Only if you&apos;ve done structural shoring before</td>
          </tr>
          <tr>
            <td style={tdStyle}>Handyman</td>
            <td style={tdStyle}>$150–$350</td>
            <td style={tdStyle}>Fine for a simple swap on a low deck</td>
          </tr>
          <tr>
            <td style={tdStyle}>Licensed contractor</td>
            <td style={tdStyle}>$200–$500</td>
            <td style={tdStyle}>The right call for second-story or multi-post jobs</td>
          </tr>
        </tbody>
      </table>
      <p>
        The DIY math is tempting — $100–$200 in materials and rentals vs.
        $400 hired. But the failure mode is a dropped beam, and the
        savings evaporate the moment anything goes sideways. This is one
        of the few deck jobs where the professional premium is genuinely
        buying safety, not just convenience. If you DIY, rent proper
        jack posts (not a car jack), never work under an unshored beam,
        and pull the permit so the inspector checks your footing and
        connections.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Setting the new post in dirt.</strong> Repeating the original sin. Concrete pier, standoff bracket, every time.</li>
        <li><strong>Reusing a bad footing.</strong> A shallow or crumbling pad will fail the new post exactly like it failed the old one. Dig it out.</li>
        <li><strong>Toenailing the beam connection.</strong> Nails in shear are not a post-to-beam connection. Use rated connectors — inspectors check this first.</li>
        <li><strong>Over-jacking the beam.</strong> A quarter inch frees the post; an inch cracks things. Jack slowly, watch everything.</li>
        <li><strong>Skipping the permit.</strong> Structural work needs a permit ($50–$200) in most cities. The inspection verifies footing depth and connections — the two things that matter.</li>
        <li><strong>Fixing one post and ignoring its neighbors.</strong> Posts on the same deck share age, soil, and construction. Inspect them all; quote the batch honestly.</li>
      </ul>
      <p>
        Price posts, concrete, and brackets in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a>, then build the <a href="/quote">quote</a>.
        Contractors: post jobs are trust jobs — the homeowner is scared
        of the jacking. Walk them through the shoring plan in plain
        language on the estimate, and the job is yours to lose.
      </p>

      <Faq items={faqs} heading="Deck post replacement questions, answered" />
    </GuideArticle>
  );
}
