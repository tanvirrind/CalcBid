import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Roof Pitch Multiplier Chart (3/12–12/12)",
  description:
    "Roof pitch multiplier chart: convert footprint square footage to true roof area for any pitch from 3/12 to 12/12.",
  keywords: [
    "roof pitch multiplier chart",
    "roof pitch multiplier",
    "pitch factor chart roofing",
    "how to calculate roof pitch area",
  ],
  alternates: { canonical: "https://calcbid.com/guides/roof-pitch-multiplier-chart" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Roof Pitch Multiplier Chart (3/12–12/12) | CalcBid",
    description:
      "Footprint to true roof area for every common pitch — the chart roofers actually use.",
    url: "https://calcbid.com/guides/roof-pitch-multiplier-chart",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Pitch Multiplier Chart (3/12–12/12) | CalcBid",
    description: "Footprint to true roof area for every common pitch — the chart roofers actually use.",
  },
};

const rows = [
  ["3/12", "1.031", "+3%"],
  ["4/12", "1.054", "+5%"],
  ["5/12", "1.083", "+8%"],
  ["6/12", "1.118", "+12%"],
  ["7/12", "1.158", "+16%"],
  ["8/12", "1.202", "+20%"],
  ["9/12", "1.250", "+25%"],
  ["10/12", "1.302", "+30%"],
  ["11/12", "1.357", "+36%"],
  ["12/12", "1.414", "+41%"],
];

const faqs = [
  {
    q: "How do I measure my roof pitch?",
    a: "From inside the attic: hold a 12-inch level horizontal against a rafter, measure straight down from the 12-inch mark to the rafter — that vertical drop in inches is your rise over a 12-inch run. From the ground, a speed square and tape on a ladder at the rake edge works. Smartphone pitch apps are decent for a sanity check but verify before ordering.",
  },
  {
    q: "What is a 6/12 roof pitch in degrees?",
    a: "About 26.6 degrees. The conversion is arctangent(rise/12): 4/12 is 18.4°, 8/12 is 33.7°, 12/12 is exactly 45°. Pitch notation (x/12) is the roofing standard; degrees show up more in engineering and solar specs.",
  },
  {
    q: "Is 8/12 considered a steep roof?",
    a: "Yes — 8/12 (33.7°) is where most roofers start calling it steep: crews move to roof jacks and harnesses, shingle staging gets harder, and labor rates climb 15–30% over walkable pitches. Anything 7/12 and under is generally walkable for experienced crews.",
  },
  {
    q: "Do I need a pitch multiplier for a flat or low-slope roof?",
    a: "Below 3/12 the multiplier is negligible (under 3%), and the material changes anyway — shingles aren't rated below 2/12, and 2/12–4/12 needs special low-slope underlayment procedures. Low-slope roofs are measured as essentially their footprint area, priced by the square like everything else.",
  },
  {
    q: "Does roof pitch affect shingle warranty?",
    a: "It can. Below 4/12, most manufacturers require specific low-slope installation (double underlayment or ice-and-water-shield full coverage) to keep the warranty valid. Above that, standard installation applies — but always check the shingle's spec sheet, not the brochure.",
  },
  {
    q: "What pitch requires roof jacks or safety harnesses?",
    a: "OSHA requires fall protection at 6 feet regardless of pitch, but in practice most crews break out roof jacks around 7/12–8/12 and full harness setups on 9/12+. Steep-slope work is slower and riskier — that's exactly why steep roofs cost more per square in labor.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Roof Pitch Multiplier Chart"
      description="A roof's true area is always bigger than its footprint. Find your pitch, multiply, and you've got the real number to order and price from."
      slug="roof-pitch-multiplier-chart"
      calculatorHref="/calculators/roofing-calculator"
      calculatorLabel="Calculate your roof"
    >
      <p>
        A roof&apos;s true surface area is always bigger than the
        house&apos;s footprint — pitch stretches it. Find your pitch in the
        chart, multiply the footprint area by the multiplier, and you have
        the real number to order materials and price labor from. A 2,000 sq
        ft footprint under an 8/12 roof is really 2,404 sq ft of roofing —
        that&apos;s 24 squares, not 20, and ordering for 20 is how jobs go
        sideways on day one.
      </p>
      <h2>The chart</h2>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>Multiplier</th>
              <th style={{ padding: "10px 8px" }}>Area added</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} style={{ borderBottom: "1px solid var(--line)" }}>
                {r.map((c, i) => (
                  <td key={i} style={{ padding: "10px 8px" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Where the number comes from</h2>
      <p>
        The multiplier is √(12² + rise²) ÷ 12 — the ratio of the sloped rafter
        length to its horizontal run. For 12/12 that&apos;s √288 ÷ 12 =
        1.414. Steeper pitch, longer slope, more shingles. Simple geometry,
        expensive to ignore: skipping the multiplier on a 10/12 roof
        under-orders materials by nearly a third.
      </p>
      <h2>How to measure pitch in the field</h2>
      <ul>
        <li><strong>From the attic (most accurate):</strong> hold a 12-inch level horizontal against a rafter, then measure vertically from the 12-inch mark down to the rafter face. That drop in inches is your rise — a 7-inch drop means 7/12.</li>
        <li><strong>At the rake edge:</strong> from a ladder, hook your tape on the rake, hold a level out 12 inches, and measure down. Same number, no attic crawl.</li>
        <li><strong>Phone apps:</strong> pitch-finder apps using the accelerometer are fine for a sanity check, but verify with a tape before you order 30 squares off them.</li>
        <li><strong>From blueprints:</strong> roof plans often note pitch directly (e.g. &ldquo;6:12 TYP&rdquo;). Trust but verify — as-builts lie.</li>
      </ul>
      <h2>Worked examples</h2>
      <p>
        Footprint × multiplier = true roof area. Divide by 100 for squares,
        then add waste on top:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Footprint</th>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>True area</th>
              <th style={{ padding: "10px 8px" }}>Squares</th>
              <th style={{ padding: "10px 8px" }}>Order (+12% waste)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>1,500 sq ft</td>
              <td style={{ padding: "10px 8px" }}>5/12</td>
              <td style={{ padding: "10px 8px" }}>1,625 sq ft</td>
              <td style={{ padding: "10px 8px" }}>16.3</td>
              <td style={{ padding: "10px 8px" }}>~18.5 sq</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>2,000 sq ft</td>
              <td style={{ padding: "10px 8px" }}>8/12</td>
              <td style={{ padding: "10px 8px" }}>2,404 sq ft</td>
              <td style={{ padding: "10px 8px" }}>24.0</td>
              <td style={{ padding: "10px 8px" }}>~27 sq</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>2,500 sq ft</td>
              <td style={{ padding: "10px 8px" }}>10/12</td>
              <td style={{ padding: "10px 8px" }}>3,255 sq ft</td>
              <td style={{ padding: "10px 8px" }}>32.6</td>
              <td style={{ padding: "10px 8px" }}>~36.5 sq</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Pitch categories and what they mean for labor</h2>
      <p>
        Pitch doesn&apos;t just change material quantities — it changes how
        the crew works, and your labor price should reflect it:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Category</th>
              <th style={{ padding: "10px 8px" }}>Pitch range</th>
              <th style={{ padding: "10px 8px" }}>Labor impact</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Low slope</td>
              <td style={{ padding: "10px 8px" }}>2/12–4/12</td>
              <td style={{ padding: "10px 8px" }}>Walkable; special underlayment rules below 4/12</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Medium / walkable</td>
              <td style={{ padding: "10px 8px" }}>5/12–7/12</td>
              <td style={{ padding: "10px 8px" }}>Standard production rates</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Steep</td>
              <td style={{ padding: "10px 8px" }}>8/12–10/12</td>
              <td style={{ padding: "10px 8px" }}>Roof jacks + harnesses; +15–30% labor</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>Very steep</td>
              <td style={{ padding: "10px 8px" }}>11/12–12/12</td>
              <td style={{ padding: "10px 8px" }}>Staging-intensive; price per square jumps sharply</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Pitch vs. material suitability</h2>
      <ul>
        <li><strong>Below 2/12:</strong> no shingles — this is membrane/TPO/built-up territory.</li>
        <li><strong>2/12–4/12:</strong> shingles allowed only with manufacturer low-slope procedures (typically full ice-and-water-shield coverage or double underlayment).</li>
        <li><strong>4/12 and up:</strong> standard shingle installation. 3-tab and architectural both fine.</li>
        <li><strong>Metal:</strong> standing seam works down to very low slopes (check panel specs); exposed-fastener panels need 3/12+.</li>
        <li><strong>Tile:</strong> generally 4/12 minimum, with special fastening on steep slopes.</li>
      </ul>
      <h2>What the multiplier doesn&apos;t cover</h2>
      <ul>
        <li><strong>Waste:</strong> add 10% for simple roofs, 15%+ for hips, valleys, and dormers — on top of the pitch adjustment, not instead of it.</li>
        <li><strong>Overhangs:</strong> the footprint math assumes the roof edge meets the wall; eave overhangs add area most estimators fold into waste.</li>
        <li><strong>Labor:</strong> steep roofs cost more per square to install — staging, safety, and slower crews. Price the pitch, not just the materials.</li>
        <li><strong>Complexity:</strong> the multiplier assumes a flat plane. Valleys, dormers, and hips add cutting waste the multiplier can&apos;t see.</li>
      </ul>
      <p>
        Turn footprint and pitch into a full material list with the{" "}
        <a href="/calculators/roofing-calculator">roofing calculator</a> — it
        bakes the multiplier in automatically — then convert squares to
        bundles with the <a href="/guides/roofing-squares-chart">squares
        chart</a> and price the job against{" "}
        <a href="/guides/roof-replacement-cost-2026">2026 replacement
        costs</a>.
      </p>
      <h2>Pitch in degrees: the full conversion table</h2>
      <p>
        Roofers speak in twelfths; engineers, solar installers, and building
        departments sometimes speak in degrees. The conversion is
        arctan(rise ÷ 12):
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>Degrees</th>
              <th style={{ padding: "10px 8px" }}>Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>3/12</td>
              <td style={{ padding: "10px 8px" }}>14.0°</td>
              <td style={{ padding: "10px 8px" }}>1.031</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>4/12</td>
              <td style={{ padding: "10px 8px" }}>18.4°</td>
              <td style={{ padding: "10px 8px" }}>1.054</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>5/12</td>
              <td style={{ padding: "10px 8px" }}>22.6°</td>
              <td style={{ padding: "10px 8px" }}>1.083</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>6/12</td>
              <td style={{ padding: "10px 8px" }}>26.6°</td>
              <td style={{ padding: "10px 8px" }}>1.118</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>7/12</td>
              <td style={{ padding: "10px 8px" }}>30.3°</td>
              <td style={{ padding: "10px 8px" }}>1.158</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>8/12</td>
              <td style={{ padding: "10px 8px" }}>33.7°</td>
              <td style={{ padding: "10px 8px" }}>1.202</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>9/12</td>
              <td style={{ padding: "10px 8px" }}>36.9°</td>
              <td style={{ padding: "10px 8px" }}>1.250</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>10/12</td>
              <td style={{ padding: "10px 8px" }}>39.8°</td>
              <td style={{ padding: "10px 8px" }}>1.302</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>11/12</td>
              <td style={{ padding: "10px 8px" }}>42.5°</td>
              <td style={{ padding: "10px 8px" }}>1.357</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>12/12</td>
              <td style={{ padding: "10px 8px" }}>45.0°</td>
              <td style={{ padding: "10px 8px" }}>1.414</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Common pitches by house style</h2>
      <p>
        If you know the architecture, you can often guess the pitch before
        measuring — useful for ballparking bids from the curb:
      </p>
      <ul>
        <li><strong>Ranch / rambler:</strong> 4/12–6/12 — low, sprawling, walkable.</li>
        <li><strong>Colonial / two-story traditional:</strong> 8/12–10/12 — steep enough to need jacks.</li>
        <li><strong>Cape Cod:</strong> 10/12–12/12 — famously steep, with dormers cut in.</li>
        <li><strong>Craftsman bungalow:</strong> 6/12–8/12 with wide overhangs.</li>
        <li><strong>Modern / contemporary:</strong> 2/12–4/12 shed or low gable — verify shingle suitability.</li>
        <li><strong>Tudor:</strong> 10/12–12/12 — steep decorative gables.</li>
      </ul>
      <h2>How pitch affects the rest of the house</h2>
      <p>
        Pitch isn&apos;t just a roofing number — it ripples through the whole
        building:
      </p>
      <ul>
        <li><strong>Attic space:</strong> 8/12+ creates usable attic volume; 4/12 barely fits ductwork. Pitch determines whether that &ldquo;bonus room&rdquo; conversion is feasible.</li>
        <li><strong>Snow load:</strong> steep roofs shed snow; low-slope roofs hold it. In snow country, 6/12+ is structural peace of mind — and building codes in heavy-snow zones reflect it.</li>
        <li><strong>Solar panels:</strong> 4/12–7/12 facing south is the sweet spot for production without tilt racks. Steeper pitches cost more to install on (same labor premium as roofing).</li>
        <li><strong>Gutters:</strong> steep roofs shed water faster — size gutters and downspouts up on 9/12+ roofs or watch them overshoot in heavy rain.</li>
        <li><strong>Insurance:</strong> some carriers in hail zones offer discounts for impact-rated shingles, which matter more on the steep slopes that take hail head-on.</li>
      </ul>
      <h2>Pitch mistakes with dollar signs</h2>
      <ul>
        <li><strong>Quoting a 10/12 at 6/12 labor rates:</strong> on a 30-square roof at $200/square labor, the 15–30% steep premium you forgot is $900–$1,800 of margin gone.</li>
        <li><strong>Ordering for the footprint:</strong> a 2,500 sq ft home at 10/12 needs ~36.5 squares with waste, not 28. The 8-square shortfall is a second delivery, a schedule slip, and a possible dye-lot mismatch — roughly $1,500–$2,500 in real cost.</li>
        <li><strong>Assuming one pitch:</strong> additions and dormers often differ from the main roof. Measure each plane; blended averages under-order the steep parts.</li>
        <li><strong>Ignoring the warranty threshold:</strong> installing standard shingles at 3/12 without the manufacturer&apos;s low-slope procedure voids the warranty — a $15,000 roof with no warranty is a liability, not an asset.</li>
      </ul>
      <h2>Rafter length table: pitch to actual lumber</h2>
      <p>
        The multiplier has a carpentry cousin: rafter length per foot of
        horizontal run. For a 12-inch run, the rafter measures:
      </p>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Pitch</th>
              <th style={{ padding: "10px 8px" }}>Rafter per 12&Prime; run</th>
              <th style={{ padding: "10px 8px" }}>Example: 14-ft run</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>4/12</td>
              <td style={{ padding: "10px 8px" }}>12.65&Prime;</td>
              <td style={{ padding: "10px 8px" }}>14.76 ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>6/12</td>
              <td style={{ padding: "10px 8px" }}>13.42&Prime;</td>
              <td style={{ padding: "10px 8px" }}>15.65 ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>8/12</td>
              <td style={{ padding: "10px 8px" }}>14.42&Prime;</td>
              <td style={{ padding: "10px 8px" }}>16.83 ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>10/12</td>
              <td style={{ padding: "10px 8px" }}>15.62&Prime;</td>
              <td style={{ padding: "10px 8px" }}>18.22 ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>12/12</td>
              <td style={{ padding: "10px 8px" }}>16.97&Prime;</td>
              <td style={{ padding: "10px 8px" }}>19.80 ft</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Same math as the multiplier — just expressed in inches of lumber
        instead of a decimal factor. Framers use this column; estimators use
        the multiplier column. Both come from √(144 + rise²).
      </p>
      <h2>Pitch and building code</h2>
      <ul>
        <li><strong>Minimum slope for shingles:</strong> 2/12 per the International Residential Code — and only with the manufacturer&apos;s low-slope installation method.</li>
        <li><strong>Underlayment rules:</strong> below 4/12, code requires ice-barrier-style underlayment or double felt coverage in most jurisdictions.</li>
        <li><strong>Fastening:</strong> high-wind zones (110+ mph design wind) require 6 nails per shingle regardless of pitch — check local amendments.</li>
        <li><strong>Snow country:</strong> some jurisdictions mandate minimum pitches or enhanced fastening schedules; the local building department&apos;s roofing handout is worth the read before you bid.</li>
      </ul>
      <h2>Using the multiplier beyond roofing</h2>
      <p>
        The pitch multiplier applies to anything that covers the sloped
        plane — not just shingles:
      </p>
      <ul>
        <li><strong>Siding on gable ends:</strong> the triangular gable wall area grows with pitch. Estimate gable siding as (half-span × rise) and add it to the wall takeoff — on steep roofs it&apos;s significant.</li>
        <li><strong>Metal roofing:</strong> same multiplier, but panel lengths are ordered to the rafter length — use the rafter table above, not just squares.</li>
        <li><strong>Roof coatings:</strong> elastomeric and silicone coatings are sold by coverage per gallon over the true sloped area. Under-measuring by skipping the multiplier is the #1 cause of coating callbacks.</li>
        <li><strong>Christmas lights and holiday installs:</strong> yes, really — installers pricing by the linear foot of roofline need the rake length, which is pure pitch math.</li>
      </ul>
      <h2>Quick reference: common footprints × pitches</h2>
      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
              <th style={{ padding: "10px 8px" }}>Footprint</th>
              <th style={{ padding: "10px 8px" }}>6/12 area</th>
              <th style={{ padding: "10px 8px" }}>8/12 area</th>
              <th style={{ padding: "10px 8px" }}>10/12 area</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>1,200 sq ft</td>
              <td style={{ padding: "10px 8px" }}>1,342 sq ft</td>
              <td style={{ padding: "10px 8px" }}>1,442 sq ft</td>
              <td style={{ padding: "10px 8px" }}>1,562 sq ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>1,800 sq ft</td>
              <td style={{ padding: "10px 8px" }}>2,012 sq ft</td>
              <td style={{ padding: "10px 8px" }}>2,164 sq ft</td>
              <td style={{ padding: "10px 8px" }}>2,344 sq ft</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--line)" }}>
              <td style={{ padding: "10px 8px" }}>2,400 sq ft</td>
              <td style={{ padding: "10px 8px" }}>2,683 sq ft</td>
              <td style={{ padding: "10px 8px" }}>2,885 sq ft</td>
              <td style={{ padding: "10px 8px" }}>3,125 sq ft</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Estimating pitch from a listing photo</h2>
      <p>
        Sometimes you need a pitch number before you ever visit the property
        — for a ballpark bid from a real-estate listing, say. Three tricks:
      </p>
      <ul>
        <li><strong>Count the stories against the roof height.</strong> In a front elevation photo, compare the visible roof triangle&apos;s height to one story (~9–10 ft including floor framing). A roof triangle about one story tall on a 24-ft-wide house is roughly 10/12; half a story is roughly 5/12.</li>
        <li><strong>Use the gable rake angle.</strong> Screenshot the gable end, measure the rake angle with a protractor app, and convert: 27° ≈ 6/12, 34° ≈ 8/12, 40° ≈ 10/12.</li>
        <li><strong>Check the listing details.</strong> Some MLS listings and appraisal records note roof pitch or at least roof type — &ldquo;steep&rdquo; in a listing usually means 9/12+.</li>
      </ul>
      <p>
        Treat photo estimates as ±2/12 accuracy — good enough for a
        ballpark, never good enough for an order. Always verify with a tape
        before material day.
      </p>
      <h2>Pitch and drone measurements</h2>
      <p>
        Drone-based roof measurements (EagleView, GAF QuickMeasure, and
        similar) have become the industry standard for remote estimating —
        and they report pitch per roof plane automatically. They&apos;re
        accurate to within a square or two on most homes and worth the
        $15–$50 per report when the roof is steep, high, or far away. But
        treat the report as a takeoff, not gospel: verify the pitch on site
        with a level before ordering, especially on older homes where
        additions may have different pitches than the main roof. The report
        that says &ldquo;8/12&rdquo; across the whole house won&apos;t flag
        the 4/12 porch addition — your tape will.
      </p>
      <JsonLd data={faqJsonLd(faqs)} />
      <Faq items={faqs} heading="Questions roofers actually ask about pitch" />
    </GuideArticle>
  );
}
