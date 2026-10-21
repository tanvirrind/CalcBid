import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Sewer Line Replacement Cost (2026)",
  description:
    "Sewer line replacement cost in 2026: trench vs trenchless per-foot pricing, camera inspection, permits, and when a spot repair beats replacement.",
  keywords: [
    "sewer line replacement cost",
    "cost to replace sewer line",
    "trenchless sewer replacement cost",
    "sewer line replacement cost per foot",
    "main sewer line replacement",
  ],
  alternates: { canonical: "https://calcbid.com/guides/sewer-line-replacement-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Sewer Line Replacement Cost (2026) | CalcBid",
    description:
      "Trench vs trenchless sewer replacement per-foot pricing, camera inspection costs, permit and tap fees, and the repair-vs-replace decision.",
    url: "https://calcbid.com/guides/sewer-line-replacement-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewer Line Replacement Cost (2026) | CalcBid",
    description: "Trench vs trenchless sewer replacement per-foot pricing, camera inspection costs, permit and tap fees, and the repair-vs-replace decision.",
  },
};

const faqs = [
  {
    q: "How much does sewer line replacement cost per foot?",
    a: "Open-trench replacement runs $50–$150 per foot in 2026, trenchless pipe bursting $70–$200 per foot, and cured-in-place lining $80–$250 per foot. Depth is the biggest variable: a line buried 8+ feet can double the excavation cost of a 4-foot line, and rock, groundwater, or concrete driveways push any method to the top of its range.",
  },
  {
    q: "How long does sewer line replacement take?",
    a: "Trenchless methods (bursting or lining) usually finish in 1–2 days including the camera work and cure time. Open-trench replacement takes 2–5 days depending on length, depth, and how much surface restoration is included. Your home is typically without sewer service for only part of one day in any method.",
  },
  {
    q: "Does homeowners insurance cover sewer line replacement?",
    a: "Standard policies usually exclude the pipe itself when it fails from age, corrosion, or roots — that is wear and tear. Many do cover the resulting water damage inside the home, and some insurers sell a service-line endorsement ($30–$80/year) that covers the pipe. Check your policy before the emergency, not during it.",
  },
  {
    q: "How long do sewer lines last?",
    a: "PVC lasts 75–100 years, cast iron 50–75 years in most soils, clay 50–60 years, and Orangeburg (tar-paper pipe used into the 1970s) often fails at 40–50. Most replacements happen on 50+ year-old lines where corrosion, root intrusion, and shifting soil have compounded — material and age together tell you where you stand.",
  },
  {
    q: "How do I know if my sewer line needs replacement?",
    a: "The pattern matters: multiple drains backing up at once, sewage smells in the yard, a lush or sunken strip of lawn over the line, and clogs that keep returning weeks after cleaning. One clog is a cleaning job; the same clog three times in a year is a pipe problem. A camera inspection ($250–$500) settles it with video evidence.",
  },
  {
    q: "Can I stay in my home during sewer line replacement?",
    a: "Yes, in almost all cases. The crew will ask you not to run water or flush during a work window of a few hours on the connection day, and trench work makes the yard rough for a few days, but the house stays livable. Trenchless methods cut the disruption further — often just two small access pits.",
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
      title="Sewer Line Replacement Cost"
      description="Trench, pipe bursting, and lining priced per foot and per job for 2026 — plus the inspection, permit, and city fees most quotes leave vague."
      slug="sewer-line-replacement-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Get sewer quotes"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Replacing a residential sewer line costs{" "}
        <strong>$3,000–$15,000</strong> in 2026 for most homes, with a typical
        job landing near <strong>$7,500</strong>. Per foot, open-trench work
        runs <strong>$50–$150</strong>, trenchless pipe bursting{" "}
        <strong>$70–$200</strong>, and pipe lining{" "}
        <strong>$80–$250</strong>. The method matters less than the
        variables underneath it — depth, length, soil, and what sits on top
        of the line (a lawn is cheap to cross; a driveway is not). This is
        one of the biggest-ticket jobs in our{" "}
        <a href="/guides/plumber-cost">plumber cost guide</a>, and it is the
        one where a $300 camera inspection saves you from a five-figure
        guess.
      </p>

      <h2>Sewer replacement cost by method (2026)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Method</th>
            <th style={thStyle}>Per foot</th>
            <th style={thStyle}>Typical 50-ft job</th>
            <th style={thStyle}>Yard damage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Open trench (new PVC)</td>
            <td style={tdStyle}>$50–$150</td>
            <td style={tdStyle}>$3,000–$12,000</td>
            <td style={tdStyle}>Full trench — lawn, beds, sometimes hardscape</td>
          </tr>
          <tr>
            <td style={tdStyle}>Trenchless pipe bursting</td>
            <td style={tdStyle}>$70–$200</td>
            <td style={tdStyle}>$4,500–$15,000</td>
            <td style={tdStyle}>Two access pits only</td>
          </tr>
          <tr>
            <td style={tdStyle}>CIPP lining (cured-in-place)</td>
            <td style={tdStyle}>$80–$250</td>
            <td style={tdStyle}>$5,000–$18,000</td>
            <td style={tdStyle}>None — liner goes through the cleanout</td>
          </tr>
          <tr>
            <td style={tdStyle}>Spot repair (one section)</td>
            <td style={tdStyle}>—</td>
            <td style={tdStyle}>$1,500–$4,000</td>
            <td style={tdStyle}>One dig at the break</td>
          </tr>
        </tbody>
      </table>
      <p>
        All three full-replacement methods deliver a line rated for 50+
        years. Bursting installs brand-new HDPE pipe and can upsize the
        diameter. Lining renews the inside of the existing pipe (shrinking
        diameter by roughly a quarter inch) but cannot fix a collapsed or
        back-pitched section — a liner follows the pipe&apos;s existing
        shape, good and bad. Open trench costs the least per foot and the
        most in restoration, which is why it wins under lawns and loses
        under driveways, patios, and mature trees.
      </p>

      <h2>Start with the camera: the $250–$500 inspection</h2>
      <p>
        No legitimate sewer quote starts with a shovel. A camera inspection
        — a waterproof camera head pushed through the line while the plumber
        narrates what it finds — runs <strong>$250–$500</strong>, and many
        companies credit it toward the job if you hire them. Insist on the
        video file and a distance-marked diagnosis: where the damage is, at
        what depth, and what material your line is. That footage is what
        lets you get three comparable bids instead of three guesses, and it
        is the same camera work sold as an add-on in our{" "}
        <a href="/guides/drain-cleaning-cost">drain cleaning cost guide</a>.
        If the failure is a soft clog with healthy pipe behind it, cleaning
        or hydro jetting may end the story for a few hundred dollars — the
        camera is how you find out before signing anything.
      </p>

      <h2>How a replacement works, step by step</h2>
      <ol>
        <li><strong>Locate and diagnose.</strong> Camera inspection plus a surface locator maps the line&apos;s route, depth, and damage points.</li>
        <li><strong>Choose the method.</strong> Collapsed or bellied pipe points to trench or bursting; cracked-but-round pipe is a lining candidate; one isolated break may need only a spot repair.</li>
        <li><strong>Permit and utility locates.</strong> The crew pulls the sewer permit and calls 811 to mark gas, water, and electric lines before any digging.</li>
        <li><strong>Excavate or access.</strong> A full trench, or two pits for bursting; liners typically enter through an existing cleanout.</li>
        <li><strong>Install.</strong> New PVC bedded on gravel at correct slope (1/4&quot; per foot for 4&quot; pipe), or the bursting head pulls new HDPE through as it fractures the old pipe, or the resin liner is inverted in and cured.</li>
        <li><strong>Inspect and backfill.</strong> Most cities inspect the new line (or require a post-install camera pass) before the trench is closed and the surface restored.</li>
      </ol>

      <h2>Repair vs. replacement: when the smaller job wins</h2>
      <p>
        Replacement is not always the answer. A <strong>spot repair</strong>{" "}
        ($1,500–$4,000) beats full replacement when the camera shows one
        isolated failure — a single cracked joint, one root mass at a
        fitting — in a line that is otherwise round, sloped, and young
        enough to have decades left. Full replacement wins when the footage
        shows the systemic stuff:
      </p>
      <ul>
        <li><strong>Orangeburg pipe</strong> — the tar-paper material blisters and ovalizes; every section is on the same clock.</li>
        <li><strong>Pervasive root intrusion</strong> at multiple joints — roots return to any joint they have entered before.</li>
        <li><strong>A bellied (sagged) line</strong> holding standing water — lining cannot restore slope.</li>
        <li><strong>Collapsed or offset sections</strong> where the camera cannot pass.</li>
        <li><strong>Cast iron rotting from the inside</strong> — channeling along the bottom of the pipe across long runs.</li>
      </ul>
      <p>
        The honest rule: repair the exception, replace the pattern. And be
        suspicious of any bid written without camera footage — a contractor
        recommending $12,000 of work should be able to show you the video
        that justifies it.
      </p>

      <h2>Warning signs your sewer line is failing</h2>
      <ul>
        <li><strong>Multiple fixtures backing up together</strong> — tub, toilet, and floor drain at once means the problem is downstream of all of them: the main line.</li>
        <li><strong>Gurgling toilets</strong> when a washer drains or a tub empties — air displaced by a partial blockage.</li>
        <li><strong>A strip of suspiciously green lawn</strong> or a soft, sunken line across the yard — leaked sewage fertilizes and saturates the soil above the pipe.</li>
        <li><strong>Sewage odor</strong> in the yard or basement that comes and goes with water use.</li>
        <li><strong>Clogs that return within weeks</strong> of a cleaning — the snake opened a hole through roots or scale that closed right back up.</li>
        <li><strong>Slow drains everywhere at once</strong>, worst on the lowest floor of the house.</li>
      </ul>
      <p>
        Cold climates add one more: a partially blocked or shallow line is
        the one that freezes first in a hard snap. The freeze-prevention
        checklist in our{" "}
        <a href="/guides/home-winterization-cost">home winterization guide</a>{" "}
        covers the exposed-pipe side of that risk.
      </p>

      <h2>Permits, inspections, and the city&apos;s cut</h2>
      <p>
        Sewer work is permit territory almost everywhere. Budget{" "}
        <strong>$100–$600</strong> for the permit plus a city inspection of
        the new line before backfill. Two bigger municipal costs surprise
        homeowners:
      </p>
      <ul>
        <li><strong>Tap / connection fees:</strong> if the job extends to the city main or the tap is replaced, some municipalities charge <strong>$500–$3,000+</strong> in connection or capacity fees.</li>
        <li><strong>Your side of the line:</strong> in most cities the homeowner owns the lateral all the way to the main — including the stretch under the street or sidewalk. Confirm where your city draws the line before assuming any of the cost is theirs.</li>
        <li><strong>Surface restoration:</strong> sidewalk or street patches required after a dig are sometimes the homeowner&apos;s bill too — get them in the quote as named lines.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        There is almost no DIY tier here. Sewer replacement involves
        excavation around live utilities, shoring safety in trenches deeper
        than a few feet, correct pipe slope measured in fractions of an
        inch, and a municipal inspection — and a line sloped wrong fails
        slowly and expensively. The realistic homeowner contribution is the
        restoration work after: regrading, reseeding, and replanting the
        trench line can save $500–$2,000 if the contractor prices it
        separately and you are willing. Renting a camera yourself ($100–$200
        a day) before calling anyone is the other legitimate move — you will
        negotiate better having seen your own pipe.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Yes — virtually every jurisdiction requires a sewer permit and an
        inspection for lateral replacement, and many require the work be
        done by a licensed contractor registered with the city. Trenchless
        methods are not a loophole: lining and bursting replace the pipe
        just as fully as digging does. Unpermitted sewer work that later
        fails gives your insurer a reason to walk away and gives the next
        buyer&apos;s inspector a headline. Your contractor should name the
        permit fee in the bid and schedule the inspection — if neither
        appears, ask why.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Signing without seeing camera footage.</strong> The video is the diagnosis. No footage, no five-figure signature.</li>
        <li><strong>Lining a pipe that needs bursting.</strong> A liner preserves bellies and offsets along with the pipe. If slope is the problem, lining money is wasted money.</li>
        <li><strong>Forgetting restoration in the quote.</strong> Landscaping, driveway, and sidewalk repair can add $1,000–$5,000 — know whether it is in or out before work starts.</li>
        <li><strong>Repeatedly cleaning a dying line.</strong> Three $350 cleanings a year on a pipe the camera has condemned is $1,050 a year toward nothing.</li>
        <li><strong>Assuming the city pays past the curb.</strong> Most laterals are homeowner-owned to the main. Verify with the utility before budgeting.</li>
        <li><strong>Skipping the post-install camera pass.</strong> A final video documents correct slope and clean joints — your warranty evidence if anything settles later.</li>
      </ul>
      <p>
        Get at least three bids, each based on the same camera footage, and
        compare them line by line — method, footage, depth, restoration,
        permit, warranty. Then lock the winner in a{" "}
        <a href="/quote">written quote</a> before the first shovel (or
        bursting head) touches the yard.
      </p>

      <Faq items={faqs} heading="Sewer line replacement questions, answered" />
    </GuideArticle>
  );
}
