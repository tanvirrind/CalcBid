import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Landscape Lighting Installation Cost (2026)",
  description:
    "Landscape lighting cost in 2026: $3,000–$6,500 pro-installed, $200–$500 per fixture — by project size and fixture type broken down.",
  keywords: [
    "landscape lighting installation cost",
    "outdoor lighting installation cost",
    "landscape lighting cost per light",
    "low voltage landscape lighting cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/landscape-lighting-installation-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Landscape Lighting Installation Cost (2026) | CalcBid",
    description:
      "Landscape lighting runs $3,000–$6,500 professionally installed in 2026. Per-fixture pricing, transformer sizing, brass vs. aluminum fixtures, and the DIY low-voltage option.",
    url: "https://calcbid.com/guides/landscape-lighting-installation-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscape Lighting Installation Cost (2026) | CalcBid",
    description: "Landscape lighting costs $200–$500 per installed fixture in 2026. Where the money goes — and where a DIY kit beats a pro install.",
  },
};

const faqs = [
  {
    q: "How much does landscape lighting cost?",
    a: "In 2026, a professionally installed low-voltage landscape lighting system on a typical suburban lot costs $3,000–$6,500, with most homeowners paying around $4,200. Think per-fixture: $200–$500 per installed fixture covers the light, wiring, trenching, and labor. A DIY weekend project with a handful of path lights can come in under $400; a full architectural job with 30+ fixtures, a smart controller, and brass housings can exceed $12,000.",
  },
  {
    q: "How much does it cost per landscape light installed?",
    a: "Expect $200–$500 per installed fixture for standard low-voltage path lights, spotlights, and wash lights when a professional handles everything from trenching to final aiming. The fixture itself is typically $70–$150; the rest is transformer capacity, buried cable, labor, and the design. Solar or plug-in path lights cost $25–$60 each with no wiring — a fundamentally different product with fundamentally different light output.",
  },
  {
    q: "Is DIY landscape lighting worth it?",
    a: "For low-voltage (12V) kits, often yes. Low-voltage landscape wiring is genuinely DIY-friendly — no permit, no conduit in most jurisdictions, safe to work with, and the parts are standardized (transformer + cable + fixtures). A 6–10 light path-light kit is a weekend project under $400. The pro earns their price on design (fixture selection, placement, aiming), trenching across established landscaping, transformer sizing for 20–30 fixtures, and warranty — the things that separate a yard that glows from a yard with some lights in it.",
  },
  {
    q: "Do landscape lights increase home value?",
    a: "Outdoor lighting consistently ranks among the highest-ROI landscape improvements: it extends usable hours of outdoor space, improves security perception, and boosts curb appeal after dark — which is when most buyers drive by. No credible study gives a clean ROI percentage for lighting alone, but appraisers and realtors treat professional landscape lighting as a positive differentiator comparable to other $4,000–$6,000 hardscape upgrades. Solar stake lights, by contrast, add essentially nothing.",
  },
  {
    q: "How long do landscape lights last?",
    a: "LED fixtures last 40,000–50,000 hours — 10–15 years of nightly use — and LEDs are now standard. The fixture housings determine the real lifespan: aluminum lasts 5–10 years in normal conditions (less in coastal salt air), brass and copper last decades and are the standard for premium installs. Transformers last 10–15 years. The failure pattern on cheap systems is never the LED dying — it's corrosion, water intrusion, and wire-nut connections rotting underground.",
  },
  {
    q: "Do I need a permit for landscape lighting?",
    a: "Low-voltage (12V) landscape lighting typically needs no permit anywhere — it's Class 2 wiring, the same category as doorbells. Line-voltage (120V) outdoor lighting, new outdoor receptacles, or a new dedicated circuit for the transformer do need permits ($50–$150) and must meet outdoor-rated, GFCI, and burial-depth code requirements. If your transformer plugs into an existing outdoor receptacle, you're done with permits entirely.",
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
      title="Landscape Lighting Installation Cost: Per-Fixture Guide"
      description="What landscape lighting really costs in 2026 — professional vs. DIY pricing, per-fixture economics, transformer sizing, brass vs. aluminum, and the design mistakes that make a $5,000 system look like a $500 one."
      slug="landscape-lighting-installation-cost"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Compare landscape lighting quotes"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Professionally installed landscape lighting costs{" "}
        <strong>$3,000–$6,500</strong> on a typical suburban lot in
        2026, with most homeowners paying around <strong>$4,200</strong>.
        The cleanest way to think about it is per fixture:{" "}
        <strong>$200–$500 per installed light</strong> for standard
        low-voltage path lights, spotlights, and wash lights — fixture,
        buried cable, trenching, transformer share, and aiming. A DIY
        weekend project with a few path lights comes in under{" "}
        <strong>$400</strong>; a 30-fixture architectural job with brass
        housings and a smart controller can exceed <strong>$12,000</strong>.
        Electrician-rate context lives in the{" "}
        <a href="/guides/electrician-cost">electrician cost hub</a>.
      </p>

      <h2>Cost by project size (2026)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Project</th>
            <th style={thStyle}>Fixtures</th>
            <th style={thStyle}>Pro-installed cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Front walkway + entry</td>
            <td style={tdStyle}>6–8</td>
            <td style={tdStyle}>$1,500–$3,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Front yard, typical suburban lot</td>
            <td style={tdStyle}>12–18</td>
            <td style={tdStyle}>$3,000–$6,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full front + back</td>
            <td style={tdStyle}>20–30</td>
            <td style={tdStyle}>$6,000–$12,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Architectural (brass, smart control, zones)</td>
            <td style={tdStyle}>30+</td>
            <td style={tdStyle}>$12,000+</td>
          </tr>
          <tr>
            <td style={tdStyle}>DIY low-voltage kit</td>
            <td style={tdStyle}>6–10</td>
            <td style={tdStyle}>$150–$400 (materials only)</td>
          </tr>
        </tbody>
      </table>
      <p>
        The per-fixture price is the honest unit of comparison between
        quotes. Two $4,500 quotes for &ldquo;front yard lighting&rdquo;
        can be 12 fixtures or 22 fixtures — the cheaper per-light quote
        is the better deal, and the quote that won&apos;t give you a
        fixture count is the one to worry about.
      </p>

      <h2>Fixture types and what they cost installed</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Fixture type</th>
            <th style={thStyle}>Installed per light</th>
            <th style={thStyle}>Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Path lights</td>
            <td style={tdStyle}>$200–$350</td>
            <td style={tdStyle}>Walkways, driveways — the workhorse</td>
          </tr>
          <tr>
            <td style={tdStyle}>Spotlights / accent</td>
            <td style={tdStyle}>$250–$450</td>
            <td style={tdStyle}>Trees, architecture, focal points</td>
          </tr>
          <tr>
            <td style={tdStyle}>Wash / flood</td>
            <td style={tdStyle}>$250–$450</td>
            <td style={tdStyle}>Walls, hedges, wide surfaces</td>
          </tr>
          <tr>
            <td style={tdStyle}>Deck / step lights</td>
            <td style={tdStyle}>$150–$300</td>
            <td style={tdStyle}>Stairs, railings — often low-voltage too</td>
          </tr>
          <tr>
            <td style={tdStyle}>Well lights (in-grade)</td>
            <td style={tdStyle}>$300–$500</td>
            <td style={tdStyle}>Uplighting trees from grade — premium look</td>
          </tr>
        </tbody>
      </table>
      <p>
        The other lines in the quote: a multi-tap transformer ($150–$400
        sized to total wattage plus 25% headroom), direct-burial cable
        ($0.50–$1.50/ft), and labor for trenching and aiming. On
        established landscaping, trenching labor is often the surprise —
        hand-digging cable runs under mature plantings is slow,
        expensive work.
      </p>

      <h2>Brass vs. aluminum: the fixture material that decides lifespan</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Cost multiplier</th>
            <th style={thStyle}>Lifespan</th>
            <th style={thStyle}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Aluminum (powder-coated)</td>
            <td style={tdStyle}>1×</td>
            <td style={tdStyle}>5–10 years</td>
            <td style={tdStyle}>Fine for budget installs; corrodes fast in coastal salt air</td>
          </tr>
          <tr>
            <td style={tdStyle}>Brass</td>
            <td style={tdStyle}>2–3×</td>
            <td style={tdStyle}>Decades — patinas gracefully</td>
            <td style={tdStyle}>The standard for premium installs; worth it on any job over $5,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Copper</td>
            <td style={tdStyle}>2–3×</td>
            <td style={tdStyle}>Decades</td>
            <td style={tdStyle}>Similar to brass; aesthetic choice</td>
          </tr>
        </tbody>
      </table>
      <p>
        The LED inside lasts 40,000–50,000 hours either way. It&apos;s
        the housing that fails — corrosion, water intrusion, and
        rotting wire-nut connections underground. On a $5,000+ system,
        the brass premium ($50–$100 more per fixture) is the cheapest
        insurance in the project.
      </p>

      <h2>Transformer sizing (the part people undersize)</h2>
      <p>
        Add up fixture wattage, then size the transformer with{" "}
        <strong>25–30% headroom</strong> — a 600W transformer for 450W of
        fixtures, not a 300W transformer running at 100% and cooking
        itself. LED fixtures draw 3–8W each, so even a 20-fixture LED
        system often lands under 150W total; the headroom covers voltage
        drop on long runs (use multi-tap transformers for runs over 50
        ft) and future additions. Smart controllers with zoning and
        app scheduling add $100–$300 but are what make a 25-fixture
        system actually usable — nobody wants all-or-nothing lighting.
      </p>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        Low-voltage (12V) landscape lighting is one of the most
        DIY-friendly electrical projects that exists: no permit, safe to
        work with, standardized parts, and forgiving wiring — a
        6–10 light path-light kit is a genuine weekend project under
        $400. What the pro sells is design: fixture selection,
        placement, aiming, transformer sizing, trenching through
        established beds without killing anything, and a warranty on the
        whole system. The $4,500 that separates a pro job from a DIY kit
        buys the difference between &ldquo;a yard with some lights in
        it&rdquo; and &ldquo;a yard that glows.&rdquo; Hire the design;
        DIY the extra path lights once the transformer and main runs are
        in. Anything 120V, any new outdoor circuit, or burial work near
        utilities goes to a licensed electrician — rates in the{" "}
        <a href="/guides/electrician-cost">electrician cost hub</a>.
      </p>

      <h2>Worked example: a 15-fixture front yard</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>8 path lights (aluminum, LED)</td>
            <td style={tdStyle}>$1,600–$2,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>4 spotlights (trees + architecture)</td>
            <td style={tdStyle}>$1,000–$1,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>3 wash lights (hedge + wall)</td>
            <td style={tdStyle}>$750–$1,350</td>
          </tr>
          <tr>
            <td style={tdStyle}>300W multi-tap transformer + smart timer</td>
            <td style={tdStyle}>$250–$500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Direct-burial cable (~400 ft)</td>
            <td style={tdStyle}>$200–$600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Trenching + aiming labor</td>
            <td style={tdStyle}>$800–$1,500</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Total</strong></td>
            <td style={tdStyle}><strong>$4,600–$8,150</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        The DIY version of the same yard: brass-free aluminum fixtures
        retail ($70–$120 each), a 300W transformer kit, and cable comes
        in around <strong>$1,200–$1,800 in materials</strong> and two
        weekends of trenching. The $3,000–$6,000 gap buys the design
        eye, the trenching labor, and the warranty — which is exactly
        the trade to make consciously. If you DIY, spend the savings on
        brass fixtures for the visible spots; they&apos;re the parts
        you&apos;ll look at for twenty years.
      </p>

      <h2>Seasonal and specialty adders</h2>
      <p>
        A few costs that show up as change orders when they aren&apos;t
        quoted up front: <strong>holiday/festoon lighting taps</strong>
        ($200–$400 for dedicated switched circuits),{" "}
        <strong>pool-area lighting</strong> (wet-rated fixtures at a
        30–50% premium, plus stricter code), <strong>tree-mounted
        downlights</strong> ($300–$600 each installed — the
        &ldquo;moonlight&rdquo; effect, worth every penny on mature
        trees), and <strong>security add-ons</strong> (motion-sensor
        floods tied to the transformer, $150–$300 per zone). None of
        these belong in the base quote unless you asked — but ask before
        the trenching crew leaves, because re-trenching for a forgotten
        zone costs more than the fixture did.
      </p>

      <h2>Do you need a permit?</h2>
      <p>
        Low-voltage (12V) landscape lighting needs <strong>no
        permit</strong> anywhere — it&apos;s Class 2 wiring, the same
        category as doorbells. The permit line appears with 120V outdoor
        lighting, new outdoor receptacles, or a new dedicated circuit
        for the transformer: typically <strong>$50–$150</strong>, with
        GFCI, outdoor-rated hardware, and burial-depth code
        requirements. Practical note: if your transformer plugs into an
        existing outdoor receptacle, you never touch the permit line at
        all — one more reason low-voltage kits are the DIY standard.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Solar stake lights as &ldquo;landscape lighting.&rdquo;</strong> $25–$60 each, dim by midnight, dead in 18 months. They&apos;re decorations, not lighting — a 12V system is the minimum that counts.</li>
        <li><strong>No fixture count in the quote.</strong> &ldquo;Front yard lighting, $4,500&rdquo; with no fixture list is how 22-fixture quotes become 12-fixture installs. Demand the count and the per-fixture math.</li>
        <li><strong>Undersized transformer.</strong> Running a 300W transformer at 300W cooks it. Size 25–30% over, and use multi-tap for long runs to beat voltage drop.</li>
        <li><strong>Even spacing with no accents.</strong> A row of identical path lights is security lighting, not landscape lighting. Accent at least the focal tree and the architecture — spots and washes are what make the photos.</li>
        <li><strong>Aluminum in salt air.</strong> Coastal homes need brass or copper — aluminum fixtures corrode in seasons, not years.</li>
        <li><strong>Buried wire nuts.</strong> Direct-burial gel-filled connectors or above-grade junction boxes only. Standard wire nuts underground rot and fail in 2–4 years — the #1 service call in landscape lighting.</li>
      </ul>

      <Faq items={faqs} heading="Landscape lighting cost questions, answered" />
    </GuideArticle>
  );
}
