import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Stucco Repair Cost Guide (2026)",
  description:
    "Stucco repair costs $8–$50 per sq ft in 2026: crack sealing, patching, water-damage fixes, and when re-stuccoing beats repairing.",
  keywords: [
    "stucco repair cost",
    "cost to repair stucco",
    "stucco crack repair cost",
    "stucco repair cost per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/guides/stucco-repair-cost" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Stucco Repair Cost Guide (2026) | CalcBid",
    description:
      "Stucco repair costs $8–$50 per sq ft: crack sealing, patching, water-damage fixes, and when re-stuccoing beats repairing.",
    url: "https://calcbid.com/guides/stucco-repair-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stucco Repair Cost Guide (2026) | CalcBid",
    description:
      "Stucco repair costs $8–$50 per sq ft: crack sealing, patching, water-damage fixes, and when re-stuccoing beats repairing.",
  },
};

const faqs = [
  {
    q: "How do I tell if a stucco crack is serious?",
    a: "Measure the width — it's the fastest triage you can do yourself. Cracks under 1/8 inch are cosmetic (shrinkage from curing) and seal easily. Cracks over 1/4 inch are structural: something moved — settlement, framing shifts — and you should call a pro to assess the cause before you price any repair. Anything in between is worth watching and sealing before water gets in.",
  },
  {
    q: "Can I fix hairline stucco cracks myself?",
    a: "Yes, for hairline cracks this is one of the most DIY-friendly exterior repairs. Clean the crack, fill it with an elastomeric sealant or a stucco patch kit, tool it smooth, and touch up with paint. The hard part isn't the fill — it's the texture match on the patch, so keep DIY to small areas in low-visibility spots. Anything that needs cutting out stucco, or any crack over 1/4 inch, belongs to a pro.",
  },
  {
    q: "How long does stucco last?",
    a: "Stucco is a decades-long material — a well-built stucco wall can serve 50 years or more. What fails early is almost never the cement itself; it's the moisture management behind it: building paper, flashing, and lath. That's why small cracks matter so much — they're the entry points that shorten a 50-year wall into a 15-year one.",
  },
  {
    q: "Why does the patch always look different from the rest of the wall?",
    a: "Texture and color matching is genuinely the hardest part of stucco repair. The finish coat's look depends on the aggregate, the trowel technique, and how it cured — all things that are nearly impossible to duplicate exactly with a dabbed-on patch. Pros feather the edges of the wet patch into the surrounding texture and often repaint the whole wall section so the repair disappears. If your patch is in a prominent spot, pay for the pro.",
  },
  {
    q: "Should I get a stucco inspection before buying a house?",
    a: "Yes — this is the inspection most homebuyers skip and most regret skipping. A stucco moisture inspection ($500–$1,000) uses probes around windows, doors, and parapets to find trapped water you can't see from the sidewalk. Water damage behind stucco routinely runs $600–$2,650 to fix, and full re-stucco of a house is $14,000–$24,000. The inspection is the cheapest money in the transaction.",
  },
  {
    q: "When is re-stuccoing better than repairing?",
    a: "Repair wins for isolated damage. Re-stucco wins when the damage is systemic — widespread cracking, water intrusion across multiple walls, or repeated failures after past repairs. The math tells the story: large section repairs run $20–$50 per sq ft, while full re-stucco is only $7–$12 per sq ft. Once you're patching a third or more of the wall area, re-stuccoing the whole house is usually cheaper per square foot and gives you a uniform finish.",
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
      title="Stucco Repair Cost Guide"
      description="What stucco repair really costs — crack sealing, patching, and water-damage repair, plus the inspection step most homeowners skip."
      slug="stucco-repair-cost"
      calculatorHref="/calculators/siding-calculator"
      calculatorLabel="Estimate wall area"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Stucco repair costs <strong>$8–$50 per square foot</strong> in the 2026
        US range, and the average repair job lands between{" "}
        <strong>$600 and $2,650</strong>. That spread looks absurd until you
        understand what drives it: the crack itself is cheap to fix, but what
        the crack let in is what gets expensive. A hairline crack sealed early
        is a $200–$800 visit. The same crack ignored for two rainy seasons —
        now there&apos;s rotted sheathing and corroded lath behind it — is a
        $2,000+ rebuild of the wall system. Stucco is a system, not a surface:
        three coats of cement over wire lath and moisture barriers, and every
        repair price is really a price for how deep the damage goes.
      </p>
      <p>
        Before you call anyone, the most useful thing you can know is the width
        of your crack. Under 1/8 inch is cosmetic. Over 1/4 inch is structural
        — stop and call a pro before you price anything else. Between those two
        numbers, you&apos;re in patch territory, and this guide covers what
        each kind of repair should cost you.
      </p>

      <h2>2026 stucco repair prices by repair type</h2>
      <p>
        Every price below is the 2026 US range for professional repair. The
        pattern to notice: sealing is priced per linear foot, cutting and
        re-coating is priced per square foot, and anything involving the layers
        behind the stucco jumps to flat four-figure bids.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Repair type</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Typical job total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Sealing hairline cracks</td>
            <td style={tdStyle}>$19–$23/linear ft</td>
            <td style={tdStyle}>$200–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cut-out, patch &amp; blend (moderate cracks)</td>
            <td style={tdStyle}>Flat bid</td>
            <td style={tdStyle}>$400–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Water-damage repair (paper + lath replaced)</td>
            <td style={tdStyle}>Flat bid</td>
            <td style={tdStyle}>$600–$2,650</td>
          </tr>
          <tr>
            <td style={tdStyle}>Large section repair</td>
            <td style={tdStyle}>$20–$50/sq ft</td>
            <td style={tdStyle}>Varies by area</td>
          </tr>
          <tr>
            <td style={tdStyle}>Full re-stucco (whole house)</td>
            <td style={tdStyle}>$7–$12/sq ft</td>
            <td style={tdStyle}>$14,000–$24,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Moisture-probe inspection</td>
            <td style={tdStyle}>Flat fee</td>
            <td style={tdStyle}>$500–$1,000</td>
          </tr>
          <tr>
            <td style={tdStyle}>Repainting stucco after repair</td>
            <td style={tdStyle}>$2–$5/sq ft</td>
            <td style={tdStyle}>Varies by area</td>
          </tr>
        </tbody>
      </table>
      <p>
        Labor is the bulk of every one of those numbers — stucco pros charge{" "}
        <strong>$40–$60 per hour</strong>, and a typical repair takes{" "}
        <strong>5–12 hours</strong> of hands-on work. That&apos;s before curing
        time between coats, which is why even a modest patch often spans two or
        three days of calendar time. Material is cheap cement and wire; what
        you&apos;re paying for is the layered craftsmanship — each coat has to
        cure before the next goes on.
      </p>

      <h2>Prices by damage level</h2>
      <p>
        Contractors think in damage levels, not square feet, because the level
        sets the scope of work. Match your situation to a row:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>What you see</th>
            <th style={thStyle}>Damage level</th>
            <th style={thStyle}>What it takes</th>
            <th style={thStyle}>Cost range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Thin hairline cracks, no staining</td>
            <td style={tdStyle}>Cosmetic</td>
            <td style={tdStyle}>Clean, seal or caulk</td>
            <td style={tdStyle}>$200–$800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cracks with small chips or flaking</td>
            <td style={tdStyle}>Moderate</td>
            <td style={tdStyle}>Cut out, patch, texture-blend</td>
            <td style={tdStyle}>$400–$1,200</td>
          </tr>
          <tr>
            <td style={tdStyle}>Staining, soft spots, bulging areas</td>
            <td style={tdStyle}>Water intrusion</td>
            <td style={tdStyle}>Open the wall; replace paper &amp; lath; re-coat</td>
            <td style={tdStyle}>$600–$2,650</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cracks over 1/4 inch, doors sticking</td>
            <td style={tdStyle}>Structural</td>
            <td style={tdStyle}>Pro assessment first, then repair</td>
            <td style={tdStyle}>Priced per job</td>
          </tr>
          <tr>
            <td style={tdStyle}>Failures across multiple walls</td>
            <td style={tdStyle}>Systemic</td>
            <td style={tdStyle}>Full re-stucco</td>
            <td style={tdStyle}>$14,000–$24,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        The expensive rows all share one trait: the damage went behind the
        stucco. The $8–$50 per square foot repair range exists because a patch
        on the surface is $8 and a rebuild of the wall system is $50. If a
        quote comes in far below these ranges, ask what&apos;s being skipped —
        usually it&apos;s the building paper and lath behind the crack, which
        is exactly where the real problem lives.
      </p>

      <h2>How stucco repair actually works, step by step</h2>
      <p>
        Knowing the process is how you read a bid and spot a shortcut. A real
        stucco repair follows six steps, and each one has a reason:
      </p>
      <ol>
        <li>
          <strong>Inspect and probe.</strong> The contractor checks the wall
          for soft spots, staining, and moisture — sometimes with probe meters
          that read water trapped behind the finish. This decides whether
          you&apos;re sealing a crack or opening a wall.
        </li>
        <li>
          <strong>Cut back to solid stucco.</strong> Damaged stucco gets cut
          out past the last cracked or hollow inch. This is the part that
          alarms homeowners — the hole always looks bigger than the crack —
          but patching over delaminated stucco guarantees the patch fails with
          it.
        </li>
        <li>
          <strong>Replace the layers behind.</strong> Building paper and wire
          lath go back in where water damaged them. This is the expensive,
          invisible work, and it&apos;s what separates a $1,200 repair from a
          $400 cosmetic patch that fails in two years.
        </li>
        <li>
          <strong>Three coats, in order.</strong> Scratch coat, brown coat,
          finish coat — each one curing before the next. Rushing this sequence
          is the #1 cause of new cracks in a fresh repair, because the coats
          shrink at different rates if they don&apos;t cure properly.
        </li>
        <li>
          <strong>Texture and color match.</strong> The make-or-break step.
          The finish coat is worked to mimic the surrounding texture while
          it&apos;s wet, then often painted to blend. Ask your contractor how
          they match texture — their answer tells you how the repair will look.
        </li>
        <li>
          <strong>Cure, seal, and paint.</strong> Fresh stucco cures for days,
          then gets sealed and painted ($2–$5 per sq ft) so the repair and the
          old wall weather as one. See our{" "}
          <a href="/guides/cost-to-paint-house-exterior">
            exterior painting cost guide
          </a>{" "}
          if you&apos;re pricing the whole-house repaint alongside.
        </li>
      </ol>

      <h2>Reading your cracks: cosmetic vs. structural</h2>
      <p>
        Ninety percent of the cracks homeowners call about are cosmetic. Here
        is how to tell which ten percent yours falls in:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}></th>
            <th style={thStyle}>Cosmetic cracks</th>
            <th style={thStyle}>Structural cracks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Width</td>
            <td style={tdStyle}>Under 1/8 inch</td>
            <td style={tdStyle}>Over 1/4 inch</td>
          </tr>
          <tr>
            <td style={tdStyle}>Usual cause</td>
            <td style={tdStyle}>Shrinkage as the stucco cured</td>
            <td style={tdStyle}>Settlement, framing movement, foundation issues</td>
          </tr>
          <tr>
            <td style={tdStyle}>Pattern</td>
            <td style={tdStyle}>Short, scattered, spider-webbing</td>
            <td style={tdStyle}>Long, diagonal, or stair-stepping across the wall</td>
          </tr>
          <tr>
            <td style={tdStyle}>Right response</td>
            <td style={tdStyle}>Seal it — DIY or a $200–$800 pro visit</td>
            <td style={tdStyle}>Call a pro to assess the cause first</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cracks between 1/8 and 1/4 inch live in the gray zone: seal them, then
        watch them. Photograph them with a coin for scale and check again in
        three months. If a crack is growing, it&apos;s telling you something
        moved — and that conversation starts with a professional assessment,
        not a tube of caulk.
      </p>

      <h2>The inspection most homeowners skip</h2>
      <p>
        A stucco moisture inspection costs <strong>$500–$1,000</strong> — probes
        inserted around windows, doors, rooflines, and parapets to find water
        trapped behind the finish where you can&apos;t see it. If you&apos;re
        buying a home with stucco, this is non-negotiable. Water damage behind
        stucco routinely costs $600–$2,650 to fix and can reach full re-stucco
        money ($14,000–$24,000) on a neglected house. The inspection is the
        cheapest line item in the entire transaction.
      </p>
      <p>
        Even if you&apos;re not buying, call for an inspection when you spot
        any of these: brown staining below windows, white powdery residue
        (efflorescence), areas that feel soft or sound hollow when tapped,
        bulging sections, or musty smells and interior drywall stains on the
        other side of a stucco wall. Each one means water has already gotten
        behind the system — and every month it stays there, the repair gets
        bigger.
      </p>

      <h2>DIY vs. hire a pro</h2>
      <p>
        Hairline cracks are genuinely DIY-friendly: clean the crack, press in
        an elastomeric sealant or stucco patch, tool it flat, and paint. A
        patch kit runs a fraction of the $200–$800 a pro charges for the same
        small job, and it&apos;ll hold just as well. The honest limit of DIY
        is cosmetic: keep it to cracks under 1/8 inch, in spots where a
        slightly-off texture won&apos;t bother you every time you pull into
        the driveway.
      </p>
      <p>
        Hire a pro for everything else. The line is clear: any crack over 1/4
        inch (get the cause assessed first), any crack with staining or soft
        spots around it (water behind the wall), any repair that requires
        cutting out stucco (you&apos;re now rebuilding a wall system), and any
        patch on the front of the house where the texture match will show. At{" "}
        <strong>$40–$60 per hour</strong> and{" "}
        <strong>5–12 hours</strong> of typical labor, a small pro job lands
        around $200–$720 in labor — a fair price for a repair that disappears
        instead of announcing itself.
      </p>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Ignoring hairline cracks.</strong> They&apos;re water&apos;s
          front door. A $200 sealing job ignored for two years becomes a
          $2,000 wall rebuild. Seal every crack you can see, even the
          cosmetic ones.
        </li>
        <li>
          <strong>Painting over cracks without sealing them.</strong> Paint
          hides cracks for about a season. Elastomeric sealant first, then
          paint — otherwise you&apos;ve paid $2–$5 per sq ft for a coat that
          cracks right along with the stucco underneath.
        </li>
        <li>
          <strong>Caulking a structural crack.</strong> A crack over 1/4 inch
          needs a professional assessment of the cause, not a tube of sealant.
          Covering up movement buys you nothing and can hide a foundation
          problem that gets worse.
        </li>
        <li>
          <strong>Skipping the inspection when buying.</strong> A $500–$1,000
          moisture inspection versus inheriting a $14,000–$24,000 re-stucco.
          This is the easiest financial decision in homebuying — always do the
          inspection.
        </li>
        <li>
          <strong>DIY-ing a patch on the most visible wall.</strong> Texture
          matching is the hard part of stucco repair. A patch that&apos;s
          structurally perfect but visibly different is worse than the crack
          was — save DIY for side walls and garage bays.
        </li>
        <li>
          <strong>Taking the cheapest bid that skips the layers behind.</strong>{" "}
          If the quote doesn&apos;t mention replacing building paper and lath,
          you&apos;re buying a cosmetic patch over rotting bones. It&apos;ll be
          back — bigger and more expensive — within a couple of years.
        </li>
      </ul>
      <p>
        Start with your numbers: measure the wall area in the{" "}
        <a href="/calculators/siding-calculator">siding calculator</a>, then
        compare stucco against replacement options in our{" "}
        <a href="/guides/siding-cost-per-square-foot">
          siding cost per square foot guide
        </a>
        . When you&apos;re ready for quotes, turn the scope into a{" "}
        <a href="/quote">professional quote</a> — a bid that lists inspection,
        cut-out, paper and lath, three coats, and texture matching separately
        is one you can actually compare.
      </p>

      <Faq items={faqs} heading="Stucco repair questions, answered" />
    </GuideArticle>
  );
}
