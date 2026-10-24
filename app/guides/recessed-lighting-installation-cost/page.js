import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Recessed Lighting Installation Cost (2026)",
  description:
    "Recessed lighting cost in 2026: $130–$400 per installed light — retrofit vs new construction, IC-rated rules, and layout math broken down.",
  keywords: [
    "recessed lighting installation cost",
    "cost to install recessed lighting",
    "can light installation cost",
    "cost per recessed light",
  ],
  alternates: { canonical: "https://calcbid.com/guides/recessed-lighting-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Recessed Lighting Installation Cost (2026) | CalcBid",
    description:
      "Installing recessed lights runs $130–$400 per light in 2026. New construction vs. retrofit pricing, IC-rated housing rules, spacing layout, and the dimmer compatibility trap.",
    url: "https://calcbid.com/guides/recessed-lighting-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recessed Lighting Installation Cost (2026) | CalcBid",
    description: "Recessed lights cost $130–$400 each installed in 2026 — the ceiling above the drywall decides where you land. Per-light pricing explained.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install recessed lighting?",
    a: "In 2026, $130–$400 per light installed. Retrofit into an existing ceiling runs $200–$400 per light because the electrician fishes wire through the ceiling; new construction or remodel with open framing runs $125–$250 per light. Fixtures themselves run $20–$120 (LED disk lights to trimless), with labor at $75–$150/hour. A typical six-light living room installs around $1,200–$2,400 including fixtures, dimmer, patching, and permit.",
  },
  {
    q: "Is recessed lighting cheaper in new construction?",
    a: "Yes — roughly half. With open framing, electricians rough-in housings at $125–$250 per light before drywall, with straightforward wire runs and no fishing or patching. Retrofitting the same six lights into a finished ceiling with insulation and joists to work around runs $200–$400 per light. That's why lighting plans should be finalized before the drywall goes up: every light you add later costs double.",
  },
  {
    q: "Do I need IC-rated recessed lights?",
    a: "If there's insulation above the ceiling, yes — it's a fire code requirement, not a suggestion. IC-rated (insulation contact) housings are built to run safely in direct contact with insulation; non-IC fixtures in an insulated ceiling are a code violation and an overheating risk. Wafer/ultra-thin LED downlights are typically IC-rated by design since they don't use a can at all, which is part of why they've taken over the retrofit market. When in doubt, buy IC-rated — the premium is a few dollars per light.",
  },
  {
    q: "Can I install recessed lights myself?",
    a: "Swapping a trim kit into an existing housing — yes, it's a screwdriver job. Installing new recessed lights where none exist — mostly no, for most people. It means cutting into the ceiling, fishing cable through joists, tying into a circuit (or running a new one), setting IC-rated housings correctly, and patching drywall — licensed-electrician territory in most jurisdictions, and the electrical work pulls a permit. The realistic DIY split: do your own layout planning and trim/LED upgrades, hire the wiring.",
  },
  {
    q: "How many recessed lights do I need per room?",
    a: "The working rule: one light per 4–6 square feet of ceiling, or spacing at roughly half the ceiling height (4 ft spacing for 8 ft ceilings). A 12×16 ft living room (192 sq ft) wants 6–8 lights; a kitchen needs tighter spacing (2–3 ft apart over work surfaces). Start with the room's task lighting zones — over counters, seating, walkways — rather than sprinkling lights evenly, which is how you get the grid-of-flickering-downlights look.",
  },
  {
    q: "Why do my LED recessed lights flicker?",
    a: "Almost always a dimmer incompatibility: old TRIAC dimmers designed for incandescent loads can't regulate low LED wattage, so lights flicker, buzz, or refuse to dim below 50%. The fix is an LED-rated dimmer matched to the fixture's compatibility list — a $30–$60 part. Buy fixtures and dimmer from the manufacturer's compatibility list, not just 'LED-rated' generics, because even LED-rated dimmers conflict with specific drivers.",
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
      title="Recessed Lighting Installation Cost: Per-Light Pricing"
      description="What recessed lighting really costs installed in 2026 — retrofit vs. new-construction pricing, IC-rated housing rules, layout and spacing math, the dimmer-compatibility trap, and how electricians quote by the light."
      slug="recessed-lighting-installation-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Compare recessed lighting quotes"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Installing recessed lighting costs <strong>$130–$400 per
        light</strong> in 2026, and the spread is almost entirely about
        what&apos;s <em>above</em> the ceiling: a retrofit through a
        finished, insulated ceiling runs <strong>$200–$400 per
        light</strong>, while the same lights roughed in during new
        construction run <strong>$125–$250</strong>. A typical six-light
        living room installs for roughly <strong>$1,200–$2,400</strong>
        all-in — fixtures, wiring, dimmer, patching, and permit.
        Electrician labor rates behind these numbers live in the{" "}
        <a href="/guides/electrician-cost">electrician cost hub</a>.
      </p>

      <h2>Cost per light: the scenarios that decide your price</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Scenario</th>
            <th style={thStyle}>Per-light cost</th>
            <th style={thStyle}>What&apos;s included</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>New construction (open framing)</td>
            <td style={tdStyle}>$125–$250</td>
            <td style={tdStyle}>Housing, wire run, trim — cheapest of all</td>
          </tr>
          <tr>
            <td style={tdStyle}>Retrofit, open attic above</td>
            <td style={tdStyle}>$180–$280</td>
            <td style={tdStyle}>Wafer lights, fished wire, drywall cut-in</td>
          </tr>
          <tr>
            <td style={tdStyle}>Retrofit, finished/no attic access</td>
            <td style={tdStyle}>$200–$400</td>
            <td style={tdStyle}>Wire fishing through joists/insulation, more labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Complex: plaster, concrete, or routed around ducts</td>
            <td style={tdStyle}>$400+</td>
            <td style={tdStyle}>Add ~$150–$200 per fixture for obstacles</td>
          </tr>
          <tr>
            <td style={tdStyle}>LED retrofit trim swap (existing housing)</td>
            <td style={tdStyle}>$80–$200</td>
            <td style={tdStyle}>New LED trim into existing can — quick job</td>
          </tr>
          <tr>
            <td style={tdStyle}>New dedicated circuit + dimmer for the room</td>
            <td style={tdStyle}>$350–$900 one-time</td>
            <td style={tdStyle}>Homereun to panel + LED-rated dimmer</td>
          </tr>
        </tbody>
      </table>
      <p>
        Electrician labor is the dominant line: $75–$150/hour in 2026,
        and an experienced pro with wafer lights can cut in and wire a
        straightforward retrofit light in 30–60 minutes. The quote
        balloons when every light becomes a fishing expedition through
        fireblocking, insulation, and plumbing.
      </p>

      <h2>Fixtures: the part that costs the least but matters the most</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fixture type</th>
            <th style={thStyle}>Material cost</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Wafer / ultra-thin LED downlight</td>
            <td style={tdStyle}>$20–$60</td>
            <td style={tdStyle}>Retrofits — no can, IC-rated by design, fits shallow ceilings</td>
          </tr>
          <tr>
            <td style={tdStyle}>Standard can + LED trim</td>
            <td style={tdStyle}>$30–$70 (housing + trim)</td>
            <td style={tdStyle}>New construction; easy trim swaps later</td>
          </tr>
          <tr>
            <td style={tdStyle}>Trimless</td>
            <td style={tdStyle}>$40–$120</td>
            <td style={tdStyle}>High-end modern look; requires mudding skill</td>
          </tr>
          <tr>
            <td style={tdStyle}>Gimbal / adjustable</td>
            <td style={tdStyle}>$35–$90</td>
            <td style={tdStyle}>Accent lighting, art, sloped ceilings</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice that fixtures are the <em>cheap</em> part of the job.
        That&apos;s why quote-shopping by fixture price is a waste of
        time — and why buying cheap off-brand wafer lights to
        &ldquo;save&rdquo; $15 each is the worst trade in the project.
        The $15 light is the thing flickering in your kitchen for a
        decade.
      </p>

      <h2>The IC-rated rule (fire code, not optional)</h2>
      <p>
        Any ceiling with insulation above it requires{" "}
        <strong>IC-rated (insulation contact) housings</strong>. A
        non-IC can buried in insulation traps heat and becomes a fire
        risk — it&apos;s a code violation and an inspection failure.
        Wafer/ultra-thin LEDs are typically IC-rated by construction,
        which is one reason retrofits have moved almost entirely to
        them. If your home has shallow joist cavities, confirm the
        wafer light&apos;s minimum clearance with your electrician
        before buying. Inspectors check this; buy right the first time.
      </p>

      <h2>Layout math: spacing and placement</h2>
      <p>
        The working spacing rule: <strong>one light per 4–6 sq ft of
        ceiling</strong>, or spacing at roughly half the ceiling height
        — 4 ft apart for 8 ft ceilings. Room-by-room starting points:
      </p>
      <ul>
        <li><strong>Kitchen:</strong> 2–3 ft apart over counters and islands (task lighting), 4–5 ft in general areas; 3&Prime; or 4&Prime; lights at 700–1200 lumens, 3000–4000K.</li>
        <li><strong>Living room:</strong> 4 ft grid for 8 ft ceilings; 4&Prime; or 6&Prime; at 600–800 lumens, warmer 2700–3000K.</li>
        <li><strong>Bathroom:</strong> 3–4 ft spacing, 4&Prime;, 2700–5000K; damp-rated trims over showers.</li>
        <li><strong>Hallway:</strong> 4–6 ft apart down the center — the classic use case.</li>
      </ul>
      <p>
        Plan zones, not grids: light the tasks (counters, seating,
        walkways) and features (art, fireplace), then fill. Even grids
        of downlights with no accent layer look like office ceilings —
        the most common &ldquo;it&apos;s done but it feels wrong&rdquo;
        outcome in recessed lighting.
      </p>

      <h2>The dimmer-compatibility trap</h2>
      <p>
        The #1 post-install complaint is flickering, buzzing, or lights
        that won&apos;t dim below half — and it&apos;s almost never the
        fixture. Old TRIAC dimmers designed for 60W incandescents
        can&apos;t regulate a 10W LED load properly. The fix: an{" "}
        <strong>LED-rated dimmer from the fixture
        manufacturer&apos;s compatibility list</strong> ($30–$60),
        not just any box labeled &ldquo;LED.&rdquo; Specify the dimmer
        with the lights, not after — and budget a dimmer per zone, not
        necessarily per room, since accent and task layers often want
        independent control.
      </p>

      <h2>Whole-project costs: what room counts do in 2026</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Project</th>
            <th style={thStyle}>Lights</th>
            <th style={thStyle}>Retrofit cost</th>
            <th style={thStyle}>New-construction cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Single bathroom</td>
            <td style={tdStyle}>2–4</td>
            <td style={tdStyle}>$400–$1,200</td>
            <td style={tdStyle}>$250–$700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Kitchen</td>
            <td style={tdStyle}>8–12</td>
            <td style={tdStyle}>$1,600–$3,600</td>
            <td style={tdStyle}>$1,000–$2,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Living room</td>
            <td style={tdStyle}>6–8</td>
            <td style={tdStyle}>$1,200–$2,800</td>
            <td style={tdStyle}>$750–$1,700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Basement</td>
            <td style={tdStyle}>10–16</td>
            <td style={tdStyle}>$2,000–$5,000</td>
            <td style={tdStyle}>$1,250–$3,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Whole main floor</td>
            <td style={tdStyle}>20–30</td>
            <td style={tdStyle}>$4,000–$10,000</td>
            <td style={tdStyle}>$2,500–$6,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        The pattern to internalize: retrofit costs run roughly{" "}
        <strong>1.6–1.8× the new-construction price</strong> at every
        scale, because wire-fishing labor scales with light count.
        That&apos;s the real argument for finalizing lighting plans
        before drywall — the whole-main-floor retrofit at $4,000–$10,000
        is the same electrical job that would have cost $2,500–$6,000
        during the rough-in. If you&apos;re already opening ceilings for
        another project (insulation, HVAC, a rewire — see the{" "}
        <a href="/guides/cost-to-rewire-a-house">rewire cost guide</a>),
        bundle the recessed-light rough-in; the marginal cost per light
        drops to new-construction levels while the ceiling is open.
      </p>

      <h2>How electricians quote this job</h2>
      <p>
        Most electricians quote recessed lighting <strong>per
        light</strong> for straightforward jobs — it&apos;s simpler than
        time-and-materials for both sides. Expect the quote to define
        the ceiling type (that&apos;s what the price tiers above are
        for), fixture allowance, whether a new circuit is included, and
        patching scope. The red flags: a single flat quote with no
        per-light breakdown, no mention of the existing ceiling
        condition, or patching &ldquo;not included&rdquo; buried at the
        bottom — patching a dozen ceiling holes costs real money if you
        discover it&apos;s on you. Rate benchmarks for the trade are in
        the <a href="/guides/electrician-cost">electrician cost hub</a>,
        and if your panel needs work to feed the new circuit, the{" "}
        <a href="/guides/electrical-panel-upgrade-cost">panel upgrade pillar</a>
        covers that scope. For the sibling job, see{" "}
        <a href="/guides/ceiling-fan-installation-cost">ceiling fan installation cost</a>.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        The DIY boundary is clean. Swapping LED trim kits into existing
        housings is a screwdriver job — safe, unpermitted, and genuinely
        worth doing yourself. Installing <em>new</em> recessed lights is
        licensed-electrician territory for most people: cutting into
        finished ceilings, fishing cable through joists and
        fireblocking, tying into circuits (sometimes running a new one),
        setting IC-rated housings correctly, and patching drywall
        afterward. It&apos;s permitted electrical work, and the
        inspection covers the housing ratings and wire protection.
        The realistic hybrid: plan the layout yourself (nobody knows your
        room&apos;s tasks better), do your own trim swaps and LED
        upgrades, and hire the wiring. The savings from DIY-ing the
        electrical work are small compared to the callback cost of a
        crooked, flickering grid.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        New recessed-light circuits typically require an electrical
        permit — usually bundled under the electrician&apos;s minimum
        permit fee, roughly <strong>$50–$150</strong> in most
        jurisdictions. Trim swaps in existing housings don&apos;t. The
        permit matters beyond legality: inspectors check the IC-rating
        and wire protection, both of which are the parts you can&apos;t
        verify from below once the drywall is closed up. Your
        electrician pulls it; a quote that proposes skipping it on
        new-circuit work is a signal about the rest of the job.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>The even grid.</strong> Rows of evenly spaced downlights with no accent layer look like an office. Layer: task + ambient + at least one accent.</li>
        <li><strong>Old dimmer, new LEDs.</strong> The flicker trap — specify an LED-rated dimmer from the fixture&apos;s compatibility list before installation, not after the complaint.</li>
        <li><strong>Non-IC housings in insulated ceilings.</strong> Fire code violation, inspection failure, and the fix is reopening the ceiling.</li>
        <li><strong>Skipping the layout plan.</strong> Lights centered on rooms instead of on tasks is how kitchens end up with the island in shadow. Paper-plan every light before anyone cuts.</li>
        <li><strong>Buying fixtures by price alone.</strong> The fixture is the cheapest line in the job; cheap wafer lights flicker, color-shift, and can&apos;t be dimmed. Spend the $40 on a known brand.</li>
        <li><strong>No new-circuit discussion.</strong> Adding six 10W lights to an existing 15A bedroom circuit is usually fine; adding them to an already-loaded circuit with an electric space heater is not. The electrician&apos;s load check is part of the job — confirm it happened.</li>
      </ul>

      <Faq items={faqs} heading="Recessed lighting cost questions, answered" />
    </GuideArticle>
  );
}
