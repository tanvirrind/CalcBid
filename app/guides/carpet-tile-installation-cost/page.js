import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Carpet Tile Installation Cost (2026 Guide)",
  description:
    "Carpet tile installation costs $2–$8 per sq ft installed in 2026. Material, labor, DIY vs pro, and the costly mistakes — the full homeowner pricing guide.",
  keywords: [
    "carpet tile installation cost",
    "carpet tile cost per square foot",
    "how much do carpet tiles cost",
    "carpet tiles vs carpet cost",
    "peel and stick carpet tile cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/carpet-tile-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Carpet Tile Installation Cost (2026 Guide) | CalcBid",
    description:
      "Carpet tile installation costs $2–$8 per sq ft installed in 2026. Material, labor, DIY vs pro, and the costly mistakes — the full homeowner pricing guide.",
    url: "https://calcbid.com/guides/carpet-tile-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Tile Installation Cost (2026 Guide) | CalcBid",
    description: "Carpet tile installation costs $2–$8 per sq ft installed in 2026. Material, labor, DIY vs pro, and the costly mistakes.",
  },
};

const faqs = [
  {
    q: "How much does it cost to install carpet tile?",
    a: "Professional carpet tile installation runs $2–$8 per square foot installed in 2026, which covers both the tiles and labor. The national average lands around $920 for a typical 12-by-18-foot room (216 sq ft), with most jobs falling between $540 and $2,380 depending on tile quality and floor condition. DIY with peel-and-stick tiles cuts the price to the material cost alone — roughly $1–$5 per square foot.",
  },
  {
    q: "Are carpet tiles cheaper than carpet?",
    a: "It depends who installs them. Carpet tile material runs $1–$5 per square foot versus $1–$8 for broadloom (roll) carpet, but broadloom installed averages $3–$11 per square foot because it almost always needs a professional and a separate pad. Since carpet tiles are easy to DIY, homeowners who install their own often come out cheaper with tiles. If you hire a pro for both, broadloom in a budget polyester can undercut tiles on large, simple rooms.",
  },
  {
    q: "Can I install carpet tiles myself?",
    a: "Yes — carpet tile is the most DIY-friendly flooring you can buy. Peel-and-stick tiles need only a utility knife, a straightedge, and a chalk line; most homeowners cover a standard bedroom in an afternoon. Glue-down tiles are harder because the adhesive grabs fast and leaves no room to reposition. For a big commercial-style glue-down job (1,000+ sq ft) with heavy furniture and tight pattern work, the time and pattern risk often justify a pro.",
  },
  {
    q: "Do carpet tiles need padding or underlayment?",
    a: "No. Unlike broadloom carpet, carpet tiles install directly onto a firm subfloor — plywood, concrete, or existing hard flooring — and most have backing or cushion built in. You can buy padded carpet tiles for extra comfort in bedrooms or kids' rooms. Do not put a separate pad under standard carpet tiles; it creates a floating, unstable surface that the tiles were never engineered for.",
  },
  {
    q: "How much extra carpet tile should I order?",
    a: "Order 5–10% extra for a straightforward room, and push that to 10–15% if you're running a pattern, mixing colors, or the room has lots of angles and doorways. Tiles come in cartons (usually 24-inch by 24-inch, often 20 tiles per carton), so round your coverage up to whole cartons. Keep at least a few spare tiles — that's the whole advantage of carpet tile. A wine-stained tile is a 2-minute swap, not a new floor.",
  },
  {
    q: "How long do carpet tiles last?",
    a: "With normal residential use, carpet tiles last 10–20 years, with nylon and commercial-grade loop pile at the long end of that range. In practice they often outlast broadloom in real homes because a worn or stained tile gets swapped instead of dooming the whole floor. Keep spares from the same dye lot — a replacement tile from a later production run can be visibly off-color.",
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
      title="Carpet Tile Installation Cost"
      description="The most DIY-friendly flooring also happens to be the most replaceable — price carpet tile by type, grade, and install method before you buy."
      slug="carpet-tile-installation-cost"
      updated="October 2026"
      calculatorHref="/calculators/tile-flooring-calculator"
      calculatorLabel="Tile Flooring Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Carpet tile installation costs <strong>$2–$8 per square foot installed</strong> in the
        2026 US range — tiles plus labor. DIY with peel-and-stick tiles drops the price to
        the material alone: <strong>$1–$5 per square foot</strong>. For a 12-by-18-foot room
        (216 sq ft), the average professional job lands around <strong>$920</strong>, with most
        projects falling between <strong>$540 and $2,380</strong> depending on tile quality and
        the condition of the subfloor. Those numbers make carpet tile the cheapest pro-installed
        soft flooring — and because it's modular, a damaged tile is a 2-minute swap instead of
        a new floor.
      </p>

      <h2>2026 carpet tile prices by type</h2>
      <p>
        Material prices below are per square foot for the tiles alone, residential pricing.
        Peel-and-stick is the DIY standard; glue-down dominates commercial work.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tile type</th>
            <th style={thStyle}>Material / sq ft</th>
            <th style={thStyle}>Installed / sq ft</th>
            <th style={thStyle}>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Peel-and-stick, polyester/olefin</td>
            <td style={tdStyle}>$1–$2.50</td>
            <td style={tdStyle}>$2–$4.50</td>
            <td style={tdStyle}>Bedrooms, rentals, budget refreshes</td>
          </tr>
          <tr>
            <td style={tdStyle}>Peel-and-stick, nylon</td>
            <td style={tdStyle}>$2.50–$5</td>
            <td style={tdStyle}>$4–$7</td>
            <td style={tdStyle}>Living rooms, hallways, kids' rooms</td>
          </tr>
          <tr>
            <td style={tdStyle}>Glue-down commercial loop</td>
            <td style={tdStyle}>$2–$5</td>
            <td style={tdStyle}>$4–$8</td>
            <td style={tdStyle}>Home offices, basements, playrooms</td>
          </tr>
          <tr>
            <td style={tdStyle}>Designer patterned (modular brands)</td>
            <td style={tdStyle}>$5–$11</td>
            <td style={tdStyle}>$7–$14</td>
            <td style={tdStyle}>Statement floors, open living spaces</td>
          </tr>
          <tr>
            <td style={tdStyle}>Padded residential tiles</td>
            <td style={tdStyle}>$3–$6</td>
            <td style={tdStyle}>$5–$9</td>
            <td style={tdStyle}>Bedrooms where comfort matters</td>
          </tr>
        </tbody>
      </table>

      <h2>What does labor cost for carpet tile installation?</h2>
      <p>
        Installation labor runs <strong>$1–$3 per square foot</strong> for most residential
        jobs. Pro jobs under 200 sq ft often carry a minimum charge of $250–$400, so small rooms
        cost more per foot than big ones. Glue-down installs sit at the high end of the labor
        range because of adhesive handling and subfloor prep; peel-and-stick on a clean subfloor
        sits at the low end. The extras that move a quote more than the labor rate itself:
      </p>
      <ul>
        <li>
          <strong>Old flooring removal:</strong> $0.50–$1.50/sq ft for carpet tear-out and
          disposal, more for tile or stapled-down hardwood that has to come up.
        </li>
        <li>
          <strong>Subfloor repair and leveling:</strong> $2–$10/sq ft when concrete needs patching
          or plywood needs replaced sections.
        </li>
        <li>
          <strong>Furniture moving:</strong> $50–$200 flat on a residential job if the installer
          moves it; free if you clear the room yourself.
        </li>
        <li>
          <strong>Stairs:</strong> $1–$2/sq ft over the room rate, or $11–$26 per step, because
          every tile is a custom cut.
        </li>
      </ul>
      <p>
        Get the quote itemized with removal, prep, and install as separate lines — a single
        blended number is where surprise surcharges hide. If you're pricing a whole-floor
        project, run the room numbers through the{" "}
        <a href="/calculators/tile-flooring-calculator">Tile Flooring Calculator</a> first so
        you can sanity-check any bid you receive.
      </p>

      <h2>Peel-and-stick vs. glue-down</h2>
      <p>
        The install method is the single biggest fork in a carpet tile project. Peel-and-stick
        tiles have adhesive pre-applied — peel the backing, drop the tile, done. Glue-down
        tiles need a full-spread or pressure-sensitive adhesive troweled onto the subfloor.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Factor</th>
            <th style={thStyle}>Peel-and-stick</th>
            <th style={thStyle}>Glue-down</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Difficulty</td>
            <td style={tdStyle}>Easiest flooring DIY; repositionable while dry</td>
            <td style={tdStyle}>Intermediate; adhesive grabs fast, little repositioning</td>
          </tr>
          <tr>
            <td style={tdStyle}>Tools</td>
            <td style={tdStyle}>Utility knife, straightedge, chalk line</td>
            <td style={tdStyle}>Plus trowel, knee pads, adhesive</td>
          </tr>
          <tr>
            <td style={tdStyle}>Hold</td>
            <td style={tdStyle}>Good on flat subfloors; edges can lift in heat or humidity</td>
            <td style={tdStyle}>Strong; handles traffic, rolling chairs, temperature swings</td>
          </tr>
          <tr>
            <td style={tdStyle}>Removal</td>
            <td style={tdStyle}>Peels up cleanly — renter-friendly</td>
            <td style={tdStyle}>Adhesive residue stays; needs solvent or scraping</td>
          </tr>
          <tr>
            <td style={tdStyle}>Typical cost</td>
            <td style={tdStyle}>$1–$5/sq ft material</td>
            <td style={tdStyle}>$2–$5/sq ft material + adhesive</td>
          </tr>
        </tbody>
      </table>
      <p>
        For renters and first-time DIYers, peel-and-stick is the obvious pick — it peels back
        up when the lease ends. For home offices with rolling chairs, basement stairs, or any
        room where tiles take lateral force, glue-down (or at least full-room adhesive tape
        under peel-and-stick) prevents the tiles from drifting apart over time.
      </p>

      <h2>Carpet tiles vs. broadloom vs. LVP vs. ceramic tile</h2>
      <p>
        Homeowners usually cross-shop carpet tile against four alternatives. Here's how the
        installed 2026 ranges compare per square foot:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Flooring</th>
            <th style={thStyle}>Installed / sq ft</th>
            <th style={thStyle}>Softness</th>
            <th style={thStyle}>Replaceability</th>
            <th style={thStyle}>Waterproof</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Carpet tiles</td>
            <td style={tdStyle}>$2–$8</td>
            <td style={tdStyle}>Medium (no pad beneath)</td>
            <td style={tdStyle}>Best — swap single tiles</td>
            <td style={tdStyle}>No</td>
          </tr>
          <tr>
            <td style={tdStyle}>Broadloom carpet</td>
            <td style={tdStyle}>$3–$11</td>
            <td style={tdStyle}>Best (pad included)</td>
            <td style={tdStyle}>Worst — patch or replace room</td>
            <td style={tdStyle}>No</td>
          </tr>
          <tr>
            <td style={tdStyle}>LVP (luxury vinyl plank)</td>
            <td style={tdStyle}>$4–$9</td>
            <td style={tdStyle}>Firm</td>
            <td style={tdStyle}>Fair — click-lock sections</td>
            <td style={tdStyle}>Yes</td>
          </tr>
          <tr>
            <td style={tdStyle}>Ceramic/porcelain tile</td>
            <td style={tdStyle}>$9–$18</td>
            <td style={tdStyle}>Hard</td>
            <td style={tdStyle}>Hard — grout and thinset</td>
            <td style={tdStyle}>Yes</td>
          </tr>
        </tbody>
      </table>
      <p>
        Carpet tile wins when you want soft flooring cheap, need easy replacement (pets, kids,
        rentals), or are DIYing. Broadloom wins on pure comfort — the pad underneath makes a
        bedroom feel warmer. LVP wins in kitchens, bathrooms, and anywhere water is a fact of
        life; compare the two directly with the{" "}
        <a href="/calculators/lvp-flooring-calculator">LVP Flooring Calculator</a> before you
        commit. And if you're comparing against hard tile properly, see{" "}
        <a href="/guides/tile-installation-cost">tile installation cost</a> and{" "}
        <a href="/guides/floor-tile-installation-cost">floor tile installation cost</a> for the
        full ceramic and porcelain numbers.
      </p>

      <h2>What drives the final price up or down</h2>
      <p>
        Two rooms with identical square footage can quote 40% apart. These are the levers:
      </p>
      <ul>
        <li>
          <strong>Fiber and density:</strong> a nylon tile at $4/sq ft outlasts a polyester tile
          at $1.75/sq ft by years, but you pay for every one of those years up front.
        </li>
        <li>
          <strong>Pattern complexity:</strong> quarter-turn, monolithic, or multi-color layouts
          add 15–30% more labor time and push waste from 5% toward 15%.
        </li>
        <li>
          <strong>Room geometry:</strong> a square room is cheap; an L-shape with a fireplace
          bump-out, angled walls, and three doorways means more cuts, more waste, more hours.
        </li>
        <li>
          <strong>Subfloor condition:</strong> a clean plywood or sealed-concrete slab adds
          nothing; patching, grinding, or replacing subfloor sections adds $2–$10/sq ft fast.
        </li>
        <li>
          <strong>Region:</strong> labor in coastal metros runs 30–50% above the Midwest and
          South for identical work — the material costs the same everywhere.
        </li>
      </ul>

      <h2>Room-size examples: what homeowners actually pay</h2>
      <p>
        Peel-and-stick nylon DIY vs. pro-installed glue-down commercial loop, including 8%
        waste and typical prep on a clean subfloor:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Room</th>
            <th style={thStyle}>Size</th>
            <th style={thStyle}>DIY peel-and-stick</th>
            <th style={thStyle}>Pro glue-down installed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Bedroom 10×12</td>
            <td style={tdStyle}>120 sq ft</td>
            <td style={tdStyle}>$310–$650</td>
            <td style={tdStyle}>$480–$960</td>
          </tr>
          <tr>
            <td style={tdStyle}>Living room 12×18</td>
            <td style={tdStyle}>216 sq ft</td>
            <td style={tdStyle}>$560–$1,170</td>
            <td style={tdStyle}>$860–$1,730</td>
          </tr>
          <tr>
            <td style={tdStyle}>Basement 20×25</td>
            <td style={tdStyle}>500 sq ft</td>
            <td style={tdStyle}>$1,300–$2,700</td>
            <td style={tdStyle}>$2,000–$4,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Home office 12×12</td>
            <td style={tdStyle}>144 sq ft</td>
            <td style={tdStyle}>$375–$780</td>
            <td style={tdStyle}>$575–$1,150</td>
          </tr>
        </tbody>
      </table>
      <p>
        The lifetime math favors tiles further: a broadloom room that needs full replacement
        at year 8 because of one ruined patch costs the whole installation again, while a
        carpet tile floor at year 8 needs a $30 carton of same-lot spares. On high-risk floors
        (kids, dogs, basement), that replaceability is worth more than the upfront savings.
      </p>

      <h2>Residential vs. commercial grades</h2>
      <p>
        Carpet tile was born in offices, so the commercial market is huge — and commercial
        grades are sold to homeowners too. Know what you're buying:
      </p>
      <ul>
        <li>
          <strong>Residential tiles:</strong> cut-pile (plush) construction like broadloom,
          softer underfoot, more colors and patterns. Shorter lifespan in heavy traffic — 5–10
          years in a busy family room — but more comfortable.
        </li>
        <li>
          <strong>Commercial grades:</strong> low loop-pile construction, dense and flat. Ugly
          to some, but they handle wheelchairs, office chairs, and dogs without matting down.
          Often cheaper per square foot than designer residential tiles and rated for 10–20
          years. The workhorse pick for basements, playrooms, and home offices.
        </li>
        <li>
          <strong>Loop vs. cut pile:</strong> loop pile is the tight, flat weave that resists
          crushing and stains; cut pile is the soft, upright fiber that feels better barefoot
          but shows traffic lanes sooner. Households with pets should default to low loop —
          pet claws snag cut pile and turn it ragged.
        </li>
        <li>
          <strong>Fiber:</strong> nylon is the premium fiber (resilient, stain-resistant,
          most expensive). Polyester and olefin/polypropylene are budget fibers that look fine
          in low-traffic rooms but crush faster. Check the fiber before you fall for a price —
          a $1.50/sq ft polyester tile and a $4/sq ft nylon tile are not the same product.
        </li>
      </ul>

      <h2>How carpet tile is installed, step by step</h2>
      <p>
        Peel-and-stick, the residential standard. A 12×12 bedroom takes most DIYers 3–5 hours
        including prep.
      </p>
      <ol>
        <li>
          <strong>Clear the room and acclimate the tiles.</strong> Move all furniture out. Let
          tiles sit in the room for 24–48 hours so they adjust to the temperature and humidity —
          installing cold tiles that then expand leaves gaps.
        </li>
        <li>
          <strong>Prep the subfloor.</strong> Sweep, vacuum, and mop. Pull every staple from
          old carpet. Fill dips and cracks with floor patch, scrape off high spots, and let
          concrete dry fully. Carpet tile shows every subfloor flaw through its low profile.
        </li>
        <li>
          <strong>Find your center and snap chalk lines.</strong> Measure to the midpoint of
          each wall and snap two chalk lines crossing at the room's center. All tiles start
          from this intersection, which keeps the border cuts at the walls even on both sides.
        </li>
        <li>
          <strong>Dry-lay the first rows.</strong> Set tiles (without peeling the backing)
          along the chalk lines in a pyramid pattern from the center outward, alternating the
          pile direction if the tile has an arrow. This is your only chance to catch a layout
          problem before adhesive touches the floor.
        </li>
        <li>
          <strong>Stick, working from the center out.</strong> Peel and set each tile tight
          against the last — no gaps, no overlaps. Cut border tiles by placing a loose tile
          on the last full tile, butting a third tile against the wall, and cutting along its
          edge. A sharp utility knife blade is non-negotiable; change blades often.
        </li>
        <li>
          <strong>Roll the floor.</strong> Walk the whole room (or rent a 75-lb floor roller for
          a large space) to press every tile's adhesive fully into the subfloor. Check dye
          lots as you go — swap a mismatched tile now, while you still have spares.
        </li>
      </ol>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Honestly: carpet tile is the one flooring job where DIY is the default recommendation.
        There are no wet materials, no loud tools, and no curing time. A homeowner who can
        follow chalk lines and cut straight can do a peel-and-stick bedroom in an afternoon and
        save the <strong>$1–$3/sq ft</strong> labor charge — $200–$650 on a typical room.
        There's also no risk of ruining a $5,000 slab of stone; the worst mistake is peeling a
        tile back up and redoing it.
      </p>
      <p>Hire a pro when any of these are true:</p>
      <ul>
        <li>
          <strong>Glue-down over 500 sq ft.</strong> Troweling adhesive fast enough that it
          stays tacky across a whole room is a two-person skill, and glue-down has no
          repositioning margin.
        </li>
        <li>
          <strong>The subfloor needs real work.</strong> Concrete that needs leveling or plywood
          that needs patching is the part of this job where pros earn their money — $2–$10/sq
          ft of prep done badly will telegraph through every tile.
        </li>
        <li>
          <strong>Pattern matching or mixed sizes.</strong> Random-lay patterns are forgiving;
          quarter-turn and monolithic patterns with direction arrows across a large open plan
          are where DIY layouts drift visibly out of alignment.
        </li>
        <li>
          <strong>Stairs.</strong> Every step is a custom cut under tension; the $11–$26/step
          premium reflects real skill, not gouging.
        </li>
      </ul>
      <p>
        Getting both worlds is common: DIY the rooms, hire a pro for the stairs and the
        basement prep, and get the whole project on one{" "}
        <a href="/quote">quote request</a> so you can compare the labor number against what
        you'd save doing it yourself.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ol>
        <li>
          <strong>Installing over a bad subfloor.</strong> Carpet tile is thin — lumps, staple
          holes, and crumbling concrete show straight through, and adhesive won't bond to dust
          or paint overspray. An hour of prep saves a floor that otherwise bubbles and lifts
          within months.
        </li>
        <li>
          <strong>Mixing dye lots.</strong> Tiles from different production runs can be a shade
          off, and it's invisible in the carton but glaring on the floor. Buy all cartons at
          once, check the lot numbers, and keep your spares from the same lot.
        </li>
        <li>
          <strong>Wrong adhesive (or none).</strong> Glue-down tiles need the adhesive type the
          manufacturer specifies — pressure-sensitive vs. permanent — matched to the tile
          backing. Wrong adhesive voids the warranty and can dissolve some backings.
          Conversely, installing standard carpet tiles with zero adhesive on a floor with
          rolling traffic lets them drift into gaps.
        </li>
        <li>
          <strong>Ignoring pile direction.</strong> Most tiles have an arrow on the back.
          Quarter-turn and monolithic installs are designed around it; ignoring it gives the
          floor a patchwork, checkerboard look the manufacturer never intended. Lay all arrows
          the same way unless the instructions call for a quarter turn.
        </li>
        <li>
          <strong>Skipping acclimation.</strong> Tiles installed straight off a cold delivery
          truck expand as they warm, opening gaps along every seam. The 24–48 hour room
          acclimation is free insurance — do it.
        </li>
        <li>
          <strong>Under-ordering waste.</strong> Five percent extra sounds safe until the room
          has a fireplace bump-out and three doorways. Complex rooms need 10–15%, and running
          short means a second dye lot that may not match. Waste is cheap; a mismatch is
          forever.
        </li>
      </ol>

      <h2>Do you need a permit?</h2>
      <p>
        No. Carpet tile installation is cosmetic flooring work — no permit is required anywhere
        in the US for laying flooring in an existing home. The one exception-adjacent case is
        commercial spaces, where some jurisdictions want the carpet's flammability/pill-test
        rating documented for the certificate of occupancy; commercial-grade tiles carry those
        ratings on the spec sheet. If your project is part of a larger permitted remodel
        (structural, electrical, plumbing), the flooring itself still needs no separate
        permit.
      </p>

      <h2>Homeowner tips to get the best price</h2>
      <ul>
        <li>
          <strong>Buy all cartons at once</strong> from the same lot — even mid-project
          reorders risk a dye-lot mismatch, and buying bulk often unlocks a volume discount.
        </li>
        <li>
          <strong>Do the free parts yourself</strong> even when hiring: clearing furniture,
          pulling old carpet, and disposing of it yourself removes $100–$300 of easy charges
          from the invoice.
        </li>
        <li>
          <strong>Consider commercial loop for kids and pets.</strong> It often costs less than
          designer residential tiles, lasts longer under abuse, and the stain resistance is
          engineered in rather than sprayed on.
        </li>
        <li>
          <strong>Keep a "repair carton," not just spare tiles.</strong> One sealed carton in
          the attic guarantees same-lot replacements for a decade — the cheapest warranty
          you'll ever buy.
        </li>
        <li>
          <strong>Measure twice, carton-round once.</strong> Tiles are 24"×24" (4 sq ft each),
          most commonly 20 per carton = 80 sq ft per carton. Divide your room square footage
          by the carton coverage, add your waste %, and round up to whole cartons before you
          price-shop.
        </li>
      </ul>

      <Faq items={faqs} heading="Carpet tile installation questions, answered" />
    </GuideArticle>
  );
}
