import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Bathroom Vanity Installation Cost (2026)",
  description:
    "Bathroom vanity installation cost in 2026: $300–$3,800 by size — 24\u201d to 72\u201d vanity totals with top, faucet, and plumbing hookup pricing.",
  keywords: [
    "bathroom vanity installation cost",
    "cost to install new bathroom vanity",
    "cost to install bathroom vanity",
    "bathroom vanity replacement cost",
    "install bathroom vanity cost",
  ],
  alternates: {
    canonical:
      "https://calcbid.com/guides/bathroom-vanity-installation-cost",
  },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Bathroom Vanity Installation Cost (2026) | CalcBid",
    description:
      "Vanity + top + faucet totals by size, with the plumbing realities priced in.",
    url: "https://calcbid.com/guides/bathroom-vanity-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Installation Cost (2026) | CalcBid",
    description:
      "Vanity + top + faucet totals by size, with the plumbing realities priced in.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install a bathroom vanity?",
    a: "In 2026, installing a bathroom vanity costs $800–$2,500 for most single-sink vanities (24–48 inches): the vanity and top are $400–$1,500, install-only labor is $300–$800, and the faucet adds $100–$600. Double-sink vanities (60–72 inches) run $2,000–$5,000 installed. The plumbing staying in place is the biggest cost control — moving the drain or supplies adds $500–$1,500.",
  },
  {
    q: "How much does it cost to install a new bathroom vanity with plumbing?",
    a: "A full vanity swap with plumbing hookup runs $1,000–$3,000 for standard sizes: $300–$800 in labor plus the vanity, top, faucet, and supply lines. If the rough-in plumbing has to move — the drain position changes or the supply lines are corroded — add $500–$1,500. A handyman can do a same-footprint swap; moved plumbing needs a licensed plumber.",
  },
  {
    q: "What is the average cost of a 48 inch bathroom vanity installed?",
    a: "A 48-inch vanity installed averages $1,200–$2,800 in 2026: $500–$1,200 for a stock vanity with a cultured-marble or quartz top, $150–$400 for a faucet, and $300–$800 in labor. Floating and furniture-style vanities cost 20–40% more installed because the wall mounting and blocking work is more involved.",
  },
  {
    q: "Can a handyman install a bathroom vanity?",
    a: "Yes, for a same-footprint swap — disconnect, remove, set the new vanity, reconnect the trap and supplies. Where a handyman should stop: moving the drain, replacing supply valves in the wall, or any job where the shutoff valves don't work. A handyman who can't isolate the water is a flood waiting to happen.",
  },
  {
    q: "How long does it take to install a bathroom vanity?",
    a: "A same-footprint swap takes 2–4 hours for a pro: disconnect, remove, set, level, reconnect, caulk. Add a half day if the supply valves need replacing or the trap alignment changes. Floating vanities take longer — blocking, bracket mounting, and precise leveling add 2–3 hours. Tile or drywall repair around the old vanity is a separate line, not part of the install.",
  },
  {
    q: "Should I replace the faucet when I replace the vanity?",
    a: "Usually yes, and the economics say so: the labor to connect a new faucet during a vanity swap is nearly zero, while a standalone faucet replacement later costs $150–$350 in labor alone. The exception is a nearly-new premium faucet — but verify the new top's hole configuration matches (single-hole, 4-inch centerset, or 8-inch widespread) before assuming it transfers.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Bathroom Vanity Installation Cost (2026)"
      description="What installing a bathroom vanity costs in 2026 — vanity, top, faucet, and plumbing hookup totals from 24 inches to double-sink 72 inches."
      slug="bathroom-vanity-installation-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Send the quote"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <h2>The short answer</h2>
      <p>
        Installing a bathroom vanity in 2026 costs <strong>$800–$2,500</strong>{" "}
        for most single-sink vanities (24–48&Prime;): the vanity and top run{" "}
        <strong>$400–$1,500</strong>, <strong>install-only labor
        $300–$800</strong>, and the <strong>faucet $100–$600</strong>.{" "}
        <strong>Double-sink 60–72&Prime; vanities run
        $2,000–$5,000</strong> installed. The cost control that matters most
        is the plumbing: <strong>same footprint, no surprises; moved
        plumbing, add $500–$1,500</strong>.
      </p>
      <p>
        A vanity swap is often part of a{" "}
        <a href="/guides/bathroom-remodel-cost">full bathroom remodel</a>,
        and it&apos;s one of the highest-impact upgrades in a{" "}
        <a href="/guides/small-bathroom-remodel-cost">small bathroom
        remodel</a>{" "}— the vanity is the visual center of the room. Read
        those guides for the whole-room math.
      </p>

      <h2>Installed totals by vanity size</h2>
      <table className="q-table">
        <thead>
          <tr>
            <th>Vanity size</th>
            <th>Vanity + top</th>
            <th>Install labor</th>
            <th>All-in range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24&Prime;–30&Prime; single</td>
            <td className="num">$300–$800</td>
            <td className="num">$300–$600</td>
            <td className="num">$800–$1,800</td>
          </tr>
          <tr>
            <td>36&Prime;–48&Prime; single</td>
            <td className="num">$500–$1,500</td>
            <td className="num">$300–$800</td>
            <td className="num">$1,200–$2,800</td>
          </tr>
          <tr>
            <td>60&Prime; double</td>
            <td className="num">$1,000–$2,500</td>
            <td className="num">$500–$1,200</td>
            <td className="num">$2,000–$4,500</td>
          </tr>
          <tr>
            <td>72&Prime; double</td>
            <td className="num">$1,500–$3,500</td>
            <td className="num">$600–$1,500</td>
            <td className="num">$2,800–$5,500+</td>
          </tr>
          <tr>
            <td>Floating (any size)</td>
            <td className="num">$800–$2,500</td>
            <td className="num">$500–$1,200</td>
            <td>Add 20–40% over standard</td>
          </tr>
        </tbody>
      </table>

      <h2>The line items clients forget</h2>
      <ul>
        <li><strong>Supply valves and lines ($50–$150):</strong> if the old angle stops are corroded or don&apos;t fully shut off, they get replaced — not optional, and discovered at install time. Quote them as a likely add-on.</li>
        <li><strong>Trap and drain assembly ($30–$100):</strong> the pop-up assembly rarely transfers cleanly. A new one is cheap insurance against a slow leak inside the cabinet.</li>
        <li><strong>Top cutout and faucet holes ($0–$150):</strong> standard tops come pre-drilled; custom hole configurations on stone tops cost extra at the fabricator.</li>
        <li><strong>Mirror and lighting ($150–$800):</strong> the vanity swap is when clients realize the mirror and sconces look dated. A mirror is $100–$500, a fixture $150–$400 — price the package.</li>
        <li><strong>Wall repair ($100–$400):</strong> the old vanity hides sins — missing paint, raw drywall, even holes. The reveal happens at removal, not at estimate. Mention it upfront.</li>
        <li><strong>Disposal ($50–$150):</strong> the old vanity and top have to leave the house. Bury it in the bid, not the surprise.</li>
      </ul>

      <h2>Vanity types: what changes the install</h2>
      <ul>
        <li><strong>Freestanding / furniture-style:</strong> the standard job — set, level, scribe to the wall, connect. 2–4 hours.</li>
        <li><strong>Floating:</strong> needs solid blocking in the wall and a perfectly level bracket. The wall gets opened more often than clients expect — price 20–40% over a freestanding install, and verify the blocking <em>before</em> the vanity arrives.</li>
        <li><strong>Vessel-sink tops:</strong> the vessel changes the drain height and the faucet must be vessel-height. A standard faucet on a vessel top is the most common vanity-job punch-list item — verify the pairing at selection.</li>
        <li><strong>Double-sink:</strong> twice the trap assemblies, twice the supply lines, and the drain rough-in has to serve both — check the existing rough-in before promising a 60&Prime; double where a single used to be.</li>
      </ul>

      <h2>The install process, step by step</h2>
      <ul>
        <li><strong>1. Shut off and verify.</strong> Close the angle stops, open the faucet, confirm zero flow. If the valves don&apos;t hold, replace them now.</li>
        <li><strong>2. Disconnect and remove.</strong> Supply lines, trap, then the vanity — cut the caulk line at the wall first or the drywall comes with it.</li>
        <li><strong>3. Assess the rough-in.</strong> Drain position, valve condition, wall state. This is the last cheap moment to fix anything.</li>
        <li><strong>4. Set and level.</strong> Shim the vanity level in both directions, scribe to the wall, fasten to studs.</li>
        <li><strong>5. Set the top and faucet.</strong> Silicone bed, faucet mounted before the top goes on (much easier), then set.</li>
        <li><strong>6. Connect and test.</strong> Supply lines, trap, fill the basin, check every joint with a dry hand, caulk the wall line.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Trusting the old valves.</strong> &ldquo;They worked last year&rdquo; is not a test. If an angle stop doesn&apos;t fully close, the job stops until it&apos;s replaced — price the contingency.</li>
        <li><strong>Wrong faucet configuration.</strong> Single-hole faucet, three-hole top — or vice versa. Verify hole count and spread at selection, not at install.</li>
        <li><strong>Setting the vanity out of level.</strong> Water pools on one side of the top, doors swing open, and the vessel drain sits crooked. Level in both directions before fastening.</li>
        <li><strong>No stud fastening.</strong> A vanity anchored to drywall alone will pull out over time, especially with a stone top. Hit studs.</li>
        <li><strong>Forgetting the mirror and lights.</strong> The new vanity makes the old mirror look worse by contrast. Quote the package while the client is already spending.</li>
        <li><strong>Caulking with the wrong product.</strong> Silicone at the wall line and around the top — paintable caulk belongs nowhere near a wet vanity.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <ul>
        <li><strong>DIY-friendly:</strong> a same-footprint swap for a handy homeowner — disconnect, remove, set, reconnect, caulk. The skills are basic and the stakes are low if the valves hold. Realistic savings: $300–$800.</li>
        <li><strong>Hire a pro:</strong> floating vanities (blocking and leveling), any drain relocation, and any job where the shutoff valves fail the test. A handyman is fine for the swap; a plumber is required the moment the rough-in changes.</li>
        <li><strong>The gray zone:</strong> the faucet. Physically easy, but a slow supply-line leak inside a new vanity rots the cabinet from the inside — the dry-hand check after pressurizing is the step DIYers skip.</li>
      </ul>

      <h2>Do you need a permit?</h2>
      <p>
        <strong>Usually not for a same-footprint swap.</strong> Replacing a
        vanity where the drain and supplies stay put is a fixture swap —
        most municipalities don&apos;t require a permit for it. The permit
        line is crossed when <strong>the drain moves, new supply lines are
        run inside the wall, or the job is part of a larger remodel with a
        master permit</strong> — then it&apos;s a plumbing permit at{" "}
        <strong>$100–$300</strong>. Floating vanities that need new blocking
        sometimes trigger a framing inspection in stricter jurisdictions.
        The practical rule: if a licensed plumber is opening walls, ask the
        building department; if a handyman is swapping like-for-like, it&apos;s
        almost always permit-free. HOA and condo communities may require
        approval for any plumbing-adjacent work regardless — check before
        scheduling.
      </p>
      <p>
        Quote the vanity, top, faucet, and the valve contingency as separate
        lines and send the <a href="/quote">quote</a> while the client is
        standing in the showroom — vanity decisions happen fast, and the bid
        that arrives the same day wins.
      </p>

      <Faq items={faqs} heading="Vanity installation questions, answered" />
    </GuideArticle>
  );
}
