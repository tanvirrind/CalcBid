import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Composite Deck Cost (2026)",
  description:
    "Composite decks cost $35–$70 per sq ft installed in 2026 — $10,500–$21,000 for a 300 sq ft build. Entry, mid and premium tiers compared.",
  keywords: [
    "composite deck cost",
    "composite decking cost per square foot",
    "trex deck cost",
    "how much does a composite deck cost",
  ],
  alternates: { canonical: "https://calcbid.com/guides/composite-deck-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Composite Deck Cost (2026) | CalcBid",
    description:
      "Per-sq-ft pricing by tier, brand comparisons, and what the deck quote is really made of — the full composite cost picture.",
    url: "https://calcbid.com/guides/composite-deck-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Composite Deck Cost (2026) | CalcBid",
    description: "Per-sq-ft pricing by tier, brand comparisons, and what the deck quote is really made of.",
  },
};

const faqs = [
  {
    q: "How much does a composite deck cost per square foot?",
    a: "In the 2026 US range, composite decks run $35–$70 per square foot installed, covering framing, decking boards, fasteners, railings, and professional labor. Entry-tier boards land at the low end; premium capped composites and PVC run $55–$80+. A typical 300 sq ft deck lands $10,500–$21,000 all-in before stairs, lighting, or permits.",
  },
  {
    q: "Is composite decking worth it over pressure-treated wood?",
    a: "Up front, composite costs roughly twice as much as pressure-treated pine ($35–$70 vs $30–$60 per sq ft installed for comparable builds). Over 25 years, the math flips: wood needs staining or sealing every 2–3 years plus periodic board replacements, which typically makes composite cheaper to own by year 10–12 — and it keeps a cleaner resale story.",
  },
  {
    q: "How much does a 16x20 composite deck cost?",
    a: "A 16×20 (320 sq ft) composite deck runs $12,800–$25,600 installed in the 2026 range for standard designs. The 2025 Zonda Cost vs Value Report put a 16×20 composite deck addition at $25,096 nationally — the high side, reflecting premium materials and labor — with 88.5% of the cost recouped at resale.",
  },
  {
    q: "How much more is TimberTech or Trex than entry-level composite?",
    a: "Trex and TimberTech mid-range lines typically run $28–$60 per sq ft installed, about 30–60% more than budget composites ($30–$45). The premium buys denser capping, better fade and stain warranties, and richer color depth. For a 300 sq ft deck, the brand step-up adds roughly $3,000–$6,000 to the installed total.",
  },
  {
    q: "How long does a composite deck last?",
    a: "Entry wood-plastic composites carry 25-year warranties and typically last 25–30 years in residential use. Premium capped composites and cellular PVC are warrantied 30–50 years and realistically last 40+ with basic cleaning. Longevity is set by the substructure too — pressure-treated framing lasts 20–25 years, steel or premium lumber longer.",
  },
  {
    q: "Can composite decking be installed over an existing deck frame?",
    a: "Sometimes, but it has to be verified first: the existing framing must be sound (probe joists and the ledger for rot), and joist spacing must meet the composite manufacturer's spec — usually 16 inches on center, 12 inches for diagonal patterns. Composite is heavier and slicker than wood, so weak or mis-spaced framing gets rebuilt, not reused.",
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
      title="Composite Deck Cost"
      description="What composite decks really cost in 2026 — tier-by-tier per-sq-ft pricing, brand comparisons, and the line items most quotes hide."
      slug="composite-deck-cost"
      updated="October 2026"
      calculatorHref="/calculators/deck-fence-calculator"
      calculatorLabel="Estimate your deck"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        A composite deck costs <strong>$35–$70 per square foot installed</strong>{" "}
        in the 2026 US range, and a typical 300 sq ft backyard build lands{" "}
        <strong>$10,500–$21,000</strong> all-in — framing, boards, railings, and
        labor. That band is wide because "composite" is a category, not a
        product: entry wood-plastic boards with a 25-year warranty and premium
        capped polymer with a 50-year warranty share almost nothing but a
        name. If you already have a wood deck, start with our{" "}
        <a href="/guides/deck-repair-cost">deck repair cost guide</a> to
        sanity-check whether repair beats a full build — and for the
        all-materials picture, see our{" "}
        <a href="/guides/cost-to-build-a-deck">cost to build a deck</a>{" "}
        guide — otherwise, here&apos;s exactly where composite money goes,
        tier by tier, and where quotes quietly pad.
      </p>

      <h2>2026 composite deck prices by tier</h2>
      <p>
        Installed per-sq-ft pricing including substructure, boards, hidden
        fasteners, code railings, and professional labor — the all-in number a
        contractor quote should match.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Tier</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>Board-only $/linear ft</th>
            <th style={thStyle}>Typical brands</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Entry composite</td>
            <td style={tdStyle}>$30–$45</td>
            <td style={tdStyle}>$3–$5</td>
            <td style={tdStyle}>Trex Enhance, Fiberon Good Life</td>
          </tr>
          <tr>
            <td style={tdStyle}>Mid-range capped composite</td>
            <td style={tdStyle}>$40–$60</td>
            <td style={tdStyle}>$5–$7</td>
            <td style={tdStyle}>Trex Transcend, TimberTech Prime+</td>
          </tr>
          <tr>
            <td style={tdStyle}>Premium composite</td>
            <td style={tdStyle}>$55–$75</td>
            <td style={tdStyle}>$7–$9</td>
            <td style={tdStyle}>TimberTech Reserve/Legacy, Fiberon Concordia</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cellular PVC (capped polymer)</td>
            <td style={tdStyle}>$60–$80</td>
            <td style={tdStyle}>$8–$11</td>
            <td style={tdStyle}>TimberTech AZEK, Fiberon Promenade</td>
          </tr>
        </tbody>
      </table>
      <p>
        Board-only pricing is the number most homeowners see in stores —
        $3–$9 per linear foot — but it&apos;s roughly a third of the project.
        Materials as a whole (framing, boards, fasteners, railings) run
        $16–$32 per sq ft; labor adds $13–$25 per sq ft for standard builds,
        more for elevated or multi-level designs.
      </p>

      <h2>Cost by deck size</h2>
      <p>
        Typical installed totals at mid-range pricing for ordinary attached
        decks with a new substructure, basic railing, and a simple stair run.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Deck size</th>
            <th style={thStyle}>Sq ft</th>
            <th style={thStyle}>Entry composite</th>
            <th style={thStyle}>Mid-range composite</th>
            <th style={thStyle}>Premium / PVC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10 × 10</td>
            <td style={tdStyle}>100</td>
            <td style={tdStyle}>$3,000–$4,500</td>
            <td style={tdStyle}>$4,000–$6,000</td>
            <td style={tdStyle}>$5,500–$8,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>12 × 16</td>
            <td style={tdStyle}>192</td>
            <td style={tdStyle}>$5,760–$8,640</td>
            <td style={tdStyle}>$7,680–$11,520</td>
            <td style={tdStyle}>$10,560–$15,360</td>
          </tr>
          <tr>
            <td style={tdStyle}>16 × 20</td>
            <td style={tdStyle}>320</td>
            <td style={tdStyle}>$9,600–$14,400</td>
            <td style={tdStyle}>$12,800–$19,200</td>
            <td style={tdStyle}>$17,600–$25,600</td>
          </tr>
          <tr>
            <td style={tdStyle}>20 × 20</td>
            <td style={tdStyle}>400</td>
            <td style={tdStyle}>$12,000–$18,000</td>
            <td style={tdStyle}>$16,000–$24,000</td>
            <td style={tdStyle}>$22,000–$32,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Simple ground-level platforms can land below these bands; second-story,
        multi-level, or heavily customized builds land above. For reference,
        the 2025 Zonda Cost vs Value Report pegs a 16×20 composite deck
        addition at $25,096 nationally — the high side of mid-range pricing,
        reflecting professional labor and premium finishes.
      </p>

      <h2>Composite vs. wood vs. PVC</h2>
      <p>
        The three materials are really three different financial stories. Wood
        is cheap to build and expensive to own; composite is expensive to
        build and nearly free to own; PVC is expensive to build and the
        longest-lived of the three.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Material</th>
            <th style={thStyle}>Installed $/sq ft</th>
            <th style={thStyle}>Lifespan</th>
            <th style={thStyle}>Annual upkeep</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Pressure-treated pine</td>
            <td style={tdStyle}>$30–$60</td>
            <td style={tdStyle}>15–25 years</td>
            <td style={tdStyle}>Stain/seal every 2–3 years (~$500–$1,500 a cycle)</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cedar</td>
            <td style={tdStyle}>$45–$70</td>
            <td style={tdStyle}>20–30 years</td>
            <td style={tdStyle}>Same maintenance as pine, pricier boards</td>
          </tr>
          <tr>
            <td style={tdStyle}>Composite (capped)</td>
            <td style={tdStyle}>$35–$70</td>
            <td style={tdStyle}>25–40 years</td>
            <td style={tdStyle}>Soap-and-water wash, ~$0</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cellular PVC</td>
            <td style={tdStyle}>$60–$80</td>
            <td style={tdStyle}>40–50 years</td>
            <td style={tdStyle}>Soap-and-water wash, ~$0</td>
          </tr>
        </tbody>
      </table>
      <p>
        The 25-year math is where composite earns its premium. A 300 sq ft
        pressure-treated deck at $9,000 installed plus eight to ten
        stain-and-seal cycles and a mid-life board replacement often totals
        $14,000–$18,000 in real ownership cost. A mid-range composite at
        $15,000 installed with a bucket-and-hose maintenance routine typically
        totals $15,500–$16,500 over the same span — cheaper by year 10–12,
        and it looks newer at resale. If the project involves replacing an
        aging wood deck, compare against{" "}
        <a href="/guides/deck-replacement-cost">deck replacement cost</a>{" "}
        before you commit to the material.
      </p>

      <h2>What the quote is really made of</h2>
      <p>
        A composite deck quote is five line items, and boards are only the
        second-biggest:
      </p>
      <ul>
        <li><strong>Substructure (~25–35% of total).</strong> Pressure-treated framing, footings, ledger attachment, and hardware. On elevated decks this is the single largest line — engineered footings and beams are real structural work.</li>
        <li><strong>Decking boards (~20–30%).</strong> $3–$9 per linear foot depending on tier; a 300 sq ft deck eats 600–700 linear feet of board.</li>
        <li><strong>Labor (~20–30%).</strong> $13–$25 per sq ft for standard builds. Composite is slower to install than wood — hidden fasteners, precise gapping, heat-bent details — and that&apos;s priced in.</li>
        <li><strong>Railings (~10–20%).</strong> Code-required above 30 inches of elevation. Wood or basic composite rail runs $800–$2,400; aluminum or cable systems run $50–$100+ per linear foot.</li>
        <li><strong>Stairs, lighting, extras.</strong> Stairs run $200–$500 per step (or ~$25/sq ft); low-voltage lighting $500–$2,000; permits $100–$500; under-deck drainage $3–$8/sq ft.</li>
      </ul>
      <p>
        Any quote that doesn&apos;t itemize these separately — especially
        railings and stairs — is hiding its margin in the lump sum. For the
        board-level detail behind installation pricing, see our{" "}
        <a href="/guides/cost-to-install-deck-boards">deck board installation
        cost guide</a>.
      </p>

      <h2>What moves the price</h2>
      <ul>
        <li><strong>Board tier.</strong> The single biggest lever — entry to premium is a 2× swing on the same deck footprint.</li>
        <li><strong>Height above grade.</strong> A ground-level platform is framing-lite; a second-story deck needs engineered footings, beams, and fall protection, often adding $10–$20 per sq ft.</li>
        <li><strong>Railing choice.</strong> Basic composite rail doubles the railing line; aluminum or cable systems can exceed the cost of the decking itself.</li>
        <li><strong>Stairs and levels.</strong> Multi-level designs and long stair runs are carpentry-heavy — each step is $200–$500 of labor plus materials.</li>
        <li><strong>Demolition of the old deck.</strong> Tear-out and disposal of an existing deck adds $3–$5 per sq ft to the project.</li>
        <li><strong>Access and site work.</strong> Tight lot lines, steep grades, and remote backyards slow material handling and crew movement; grading and drainage can add thousands.</li>
        <li><strong>Lighting and extras.</strong> Recessed stair lighting, post-cap lights, and under-deck systems are priced separately and add up fast — budget them, don&apos;t discover them.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Comparing quotes by board brand alone.</strong> Two "Trex deck" quotes can be $5,000 apart because one includes railings, stairs, and permits and the other doesn&apos;t. Demand identical scope before comparing.</li>
        <li><strong>Reusing a tired frame to "save money."</strong> Composite on rotted joists is the most expensive mistake in this category — the boards have to come off for the repair you should have done first. Probe every joist and the ledger.</li>
        <li><strong>Wrong joist spacing.</strong> Composite needs 16 inches on center (12 for diagonal patterns) per manufacturer spec. A frame built for wood at 24-inch spacing gets rebuilt — a surprise if it&apos;s not in the bid.</li>
        <li><strong>Ignoring the railing line item.</strong> On elevated decks, railings can be a fifth of the project. A quote that buries them is the one that "discovers" them later.</li>
        <li><strong>Buying on color, not capping.</strong> First-generation uncapped composites stained and faded — the warranty and the price are in the capping. Entry-tier today is capped, but know which generation you&apos;re buying.</li>
        <li><strong>No permit on an attached deck.</strong> Attached decks need permits and inspections in most jurisdictions. Unpermitted work torpedoes insurance claims and resale — the $100–$500 permit is the cheapest part of the project.</li>
      </ul>
      <p>
        Run your numbers in the{" "}
        <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a> — boards, posts, and framing by the square foot —
        then turn the material plan into a professional{" "}
        <a href="/quote">quote</a> before you&apos;re off the site.
      </p>

      <h2>Regional pricing notes</h2>
      <p>
        The tier bands on this page — <strong>$30–$45 per sq ft</strong> for entry composite
        up to <strong>$60–$80</strong> for cellular PVC — are national, and labor is the part
        that moves. With labor at <strong>$13–$25 per sq ft</strong> for standard builds,
        high-wage coastal and Northeast markets quote mid-range decks toward the{" "}
        <strong>top of the $40–$60 band</strong>, while Southeast and Midwest crews commonly
        land the same design in the lower half. Climate adds its own line items. In the{" "}
        <strong>snow belt</strong>, footings must reach below the frost line, which means
        deeper holes, more concrete, and sometimes engineered footing inspections — permit
        and footing costs together tend to sit toward the <strong>$300–$500</strong> end of
        this page&apos;s $100–$500 permit range, and frozen-ground scheduling can delay a
        spring start. In the <strong>Sun Belt</strong>, shallow footings and year-round
        building keep those costs at the low end, but heat dictates midday breaks that stretch
        the schedule. Same boards, same footprint — the ground and the labor market write the
        difference.
      </p>

      <h2>Worked example: a 16×20 deck at the mid tier</h2>
      <p>
        Price the 16×20 from the size table — <strong>320 sq ft</strong> — at the mid-range
        capped composite tier of <strong>$40–$60 per sq ft</strong>, and the base build lands
        at <strong>$12,800–$19,200</strong> before the itemized extras most quotes separate.
        Walking the stack at a mid-point rate of about $50 per sq ft gives a base of roughly{" "}
        <strong>$16,000</strong>, which already covers substructure, boards, hidden fasteners,
        standard railing, and labor per the tier definition. Now the lines homeowners
        actually ask about. Railing: a 16×20 attached deck exposes roughly{" "}
        <strong>52 linear feet</strong> of edge (two 16-ft sides and one 20-ft side, with the
        house closing the fourth) — basic composite rail is inside the base price, while
        upgrading to aluminum at $50–$100 per linear foot would add roughly{" "}
        <strong>$2,600–$5,200</strong> before crediting back the standard rail. Stairs: a
        typical 4-step run to grade at <strong>$200–$500 per step</strong> adds{" "}
        <strong>$800–$2,000</strong> if not already in the base scope. Fascia and skirting to
        close the deck&apos;s edge and underside are commonly quoted as a modest add-on —
        budget a few hundred dollars for fascia boards on 52 linear feet and more for full
        skirting. Permits for an attached deck run <strong>$100–$500</strong>.
      </p>
      <p>
        Stacked honestly: base build <strong>$12,800–$19,200</strong>, plus stairs{" "}
        <strong>$800–$2,000</strong> where they are quoted separately, plus permit{" "}
        <strong>$100–$500</strong>, puts a realistic all-in range at roughly{" "}
        <strong>$13,700–$21,700</strong> — consistent with the FAQ&apos;s $12,800–$25,600
        range for this size once premium finishes are allowed for. Run your own footprint
        through the <a href="/calculators/deck-fence-calculator">deck &amp; fence
        calculator</a> and compare any bid line by line against this stack.
      </p>

      <Faq items={faqs} heading="Composite deck questions, answered" />
    </GuideArticle>
  );
}
