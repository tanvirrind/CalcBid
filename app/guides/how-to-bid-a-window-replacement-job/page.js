import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Bid a Window Replacement Job",
  description:
    "How to bid window replacement: insert vs full-frame pricing, per-window bid structure, measuring protocol, and 2026 US price ranges.",
  keywords: [
    "how to bid a window replacement job",
    "how to quote window replacement",
    "window replacement bid",
    "how much to charge to install a window",
    "window installation estimate",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-bid-a-window-replacement-job" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Bid a Window Replacement Job | CalcBid",
    description:
      "Insert vs full-frame pricing, per-window bid structure, measuring protocol, and 2026 US ranges.",
    url: "https://calcbid.com/guides/how-to-bid-a-window-replacement-job",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Bid a Window Replacement Job | CalcBid",
    description: "Insert vs full-frame pricing, per-window bid structure, measuring protocol, and 2026 US ranges.",
  },
};

const faqs = [
  {
    q: "Should I bid window replacement per window or by the whole job?",
    a: "Per window — it's how homeowners compare bids, and it keeps multi-window math transparent. Build the whole-house total by multiplying, then show a visible 10–20% multi-window incentive on the bid. One mobilization, one dumpster, and crew rhythm genuinely cut your per-window cost, so pass some of it through as the reason to book the whole house now.",
  },
  {
    q: "How do I measure a window opening for an insert replacement?",
    a: "Measure the existing frame's interior width three times (top, middle, bottom) and height three times (left, center, right) — the shortest measurement in each direction is the one you order from. Check the diagonals: if they differ by more than 1/4 inch, the opening is out of square and the install gets harder. Confirm at least 3 1/4 inches of jamb depth for the insert to seat into. Record every number on the bid, not a napkin.",
  },
  {
    q: "How much deposit should I take on a window replacement job?",
    a: "Take 10–30% at contract signing, and never less than the full cost of the special-ordered units. Windows are manufactured to your measurements and are generally non-returnable — if the client cancels, you're holding custom glass. Put the deposit terms and the non-returnable nature of the order in the contract before you release the order to the dealer.",
  },
  {
    q: "How do I explain insert vs full-frame replacement to a homeowner?",
    a: "Insert is a new window inside the existing frame — faster, cheaper, and right when the frames are sound. Full-frame removes everything to the studs and fixes rot, air leaks, and insulation — 30–50% more, and the only honest option when sills are soft or rotted. Photograph the evidence during the walkthrough: 'your sills are rotted, here's the photo' sells the upgrade better than any brochure.",
  },
  {
    q: "Should trim and disposal be separate line items on a window bid?",
    a: "Yes. Interior trim and exterior capping run $75–$150 per window and disposal runs $25–$50 per old window — real costs that are frequently forgotten in low bids. Itemized lines get respected; 'included' gets forgotten, then disputed when the client notices the old windows stacked in their driveway. Visible lines also make your bid look more professional next to a competitor's single lump number.",
  },
  {
    q: "When does a window replacement job need a permit?",
    a: "Full-frame replacement needs a permit in many jurisdictions because it opens the wall envelope; insert/retrofit replacement rarely does. Permit fees run $50–$300 in the 2026 US range depending on the municipality. Check locally before you bid — pulling the permit is your line item, and 'the other guy didn't mention a permit' is not a defense at inspection.",
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
      title="How to Bid a Window Replacement Job"
      description="Price per window, nail the insert-vs-full-frame call, and itemize what low bidders hide — the contractor's window bidding playbook."
      slug="how-to-bid-a-window-replacement-job"
      updated="October 2026"
      calculatorHref="/calculators/window-replacement-calculator"
      calculatorLabel="Window Replacement Calculator"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Bid window replacement <strong>per window</strong> — it&apos;s how
        homeowners compare bids and how your crew thinks about the day. The
        2026 US range: <strong>$400–$800 per vinyl double-hung</strong>{" "}
        installed (the most common job in America), with the national
        average around <strong>$600–$900 per window installed</strong>. Whole
        house: 10 windows in vinyl <strong>$5,000–$9,000</strong>,
        fiberglass <strong>$8,000–$14,000</strong>, wood/clad{" "}
        <strong>$12,000–$20,000+</strong>. <strong>Full-frame adds
        30–50%</strong> over insert. The bid that wins isn&apos;t the
        cheapest — it&apos;s the one that proves you opened every window,
        measured every opening, and itemized the trim, disposal, and permit
        the low bidder &ldquo;forgot.&rdquo; See the full homeowner cost
        breakdown in our{" "}
        <a href="/guides/cost-to-replace-windows">cost to replace windows
        guide</a>.
      </p>

      <h2>2026 installed per-window prices by type</h2>
      <p>
        Installed prices per window, 2026 US range, consistent with our{" "}
        <a href="/guides/cost-to-replace-windows">window cost guide</a>.
        Insert/retrofit installation (new window in the existing frame) is
        the baseline; full-frame adds 30–50%.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Window type</th>
            <th style={thStyle}>Vinyl</th>
            <th style={thStyle}>Fiberglass</th>
            <th style={thStyle}>Wood / clad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Double-hung</td>
            <td style={tdStyle}>$400–$800</td>
            <td style={tdStyle}>$700–$1,200</td>
            <td style={tdStyle}>$900–$1,600</td>
          </tr>
          <tr>
            <td style={tdStyle}>Single-hung</td>
            <td style={tdStyle}>$350–$700</td>
            <td style={tdStyle}>$600–$1,000</td>
            <td style={tdStyle}>$800–$1,400</td>
          </tr>
          <tr>
            <td style={tdStyle}>Casement</td>
            <td style={tdStyle}>$500–$950</td>
            <td style={tdStyle}>$800–$1,400</td>
            <td style={tdStyle}>$1,000–$1,800</td>
          </tr>
          <tr>
            <td style={tdStyle}>Slider</td>
            <td style={tdStyle}>$400–$750</td>
            <td style={tdStyle}>$650–$1,100</td>
            <td style={tdStyle}>$850–$1,500</td>
          </tr>
          <tr>
            <td style={tdStyle}>Picture / fixed</td>
            <td style={tdStyle}>$450–$900</td>
            <td style={tdStyle}>$750–$1,300</td>
            <td style={tdStyle}>$950–$1,700</td>
          </tr>
          <tr>
            <td style={tdStyle}>Bay / bow</td>
            <td style={tdStyle}>$1,500–$3,500</td>
            <td style={tdStyle}>$2,000–$4,500</td>
            <td style={tdStyle}>$2,500–$6,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Material is the single biggest lever — vinyl to wood roughly doubles
        the job. Present material tiers side by side on every bid: the vinyl
        column, the fiberglass column, the wood column. Clients comparing
        three bids choose the one that teaches them something, and the
        tiered presentation makes your per-window number look like a
        choice, not a cost.
      </p>

      <h2>Insert vs. full-frame: the bid-defining choice</h2>
      <p>
        Get this call right on every opening, and note it on the bid itself
        — clients comparing quotes notice which contractor actually
        classified their windows:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Factor</th>
            <th style={thStyle}>Insert (retrofit)</th>
            <th style={thStyle}>Full-frame</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>What it is</td>
            <td style={tdStyle}>New window fitted inside the existing frame</td>
            <td style={tdStyle}>Everything removed to the studs; new frame, trim, and flashing</td>
          </tr>
          <tr>
            <td style={tdStyle}>Best when</td>
            <td style={tdStyle}>Frames are square, solid, and rot-free (~70% of jobs)</td>
            <td style={tdStyle}>Rot, warping, daylight around the frame, painted-shut sashes</td>
          </tr>
          <tr>
            <td style={tdStyle}>Time per window</td>
            <td style={tdStyle}>30–60 minutes</td>
            <td style={tdStyle}>1–2 hours</td>
          </tr>
          <tr>
            <td style={tdStyle}>Crew output (2-person)</td>
            <td style={tdStyle}>10–15 windows per day</td>
            <td style={tdStyle}>4–8 windows per day</td>
          </tr>
          <tr>
            <td style={tdStyle}>Cost impact</td>
            <td style={tdStyle}>Baseline</td>
            <td style={tdStyle}>+30–50%</td>
          </tr>
          <tr>
            <td style={tdStyle}>What it fixes</td>
            <td style={tdStyle}>Glass, operation, efficiency — not the frame</td>
            <td style={tdStyle}>Rot, air leaks, insulation gaps, structural issues</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bid insert by default; sell full-frame where the inspection
        justifies it. The tell-tale signs: soft or discolored wood at the
        sill (probe it with a screwdriver — if it sinks in, that&apos;s
        your photo), visible daylight around the frame, or windows painted
        shut for a decade. Full-frame is also the honest call when the
        client wants a different window size or style — inserts can&apos;t
        change the opening.
      </p>

      <h2>The per-window bid structure</h2>
      <p>
        Every window bid is the same seven lines. Build them for each
        opening, then roll up:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Line item</th>
            <th style={thStyle}>2026 US range</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Window unit</td>
            <td style={tdStyle}>Dealer cost + your markup</td>
            <td style={tdStyle}>Special-ordered to your measurements; non-returnable</td>
          </tr>
          <tr>
            <td style={tdStyle}>Labor per window</td>
            <td style={tdStyle}>Your crew rate × 0.5–1 hr (insert) or 1–2 hrs (full-frame)</td>
            <td style={tdStyle}>Second-story openings add ~15–25% on labor</td>
          </tr>
          <tr>
            <td style={tdStyle}>Interior trim &amp; exterior capping</td>
            <td style={tdStyle}>$75–$150 / window</td>
            <td style={tdStyle}>Brickmould, casing, aluminum capping — the forgotten line</td>
          </tr>
          <tr>
            <td style={tdStyle}>Disposal</td>
            <td style={tdStyle}>$25–$50 / old window</td>
            <td style={tdStyle}>Old windows are bulky; the dumpster isn&apos;t free</td>
          </tr>
          <tr>
            <td style={tdStyle}>Lead-safe (RRP)</td>
            <td style={tdStyle}>$100–$200 / window</td>
            <td style={tdStyle}>Pre-1978 homes only: containment, cleaning verification, documentation</td>
          </tr>
          <tr>
            <td style={tdStyle}>Permit</td>
            <td style={tdStyle}>$50–$300</td>
            <td style={tdStyle}>Full-frame in most jurisdictions; rarely for insert</td>
          </tr>
          <tr>
            <td style={tdStyle}>Deposit</td>
            <td style={tdStyle}>10–30% at signing</td>
            <td style={tdStyle}>Covers long lead times; never below the unit order cost</td>
          </tr>
        </tbody>
      </table>
      <p>
        Present the per-window installed price, the line-item breakdown,
        and the whole-house total with a visible 10–20% multi-window
        incentive. Three numbers, three reasons to say yes: the unit price
        is comparable, the breakdown is honest, and the bundle rewards
        booking everything now.
      </p>

      <h2>Worked example: the 10-window vinyl house</h2>
      <p>
        Put the structure to work on the most common job in America — ten
        vinyl double-hung inserts. At a mid-range $650/window installed,
        the units-and-labor core is $6,500. Then the visible lines: interior
        trim and exterior capping at $75–$150 per window adds $750–$1,500;
        disposal at $25–$50 per old window adds $250–$500; a permit
        ($50–$300) where required; and lead-safe RRP procedures at
        $100–$200 per window if the house is pre-1978. A clean, fully
        itemized bid lands around <strong>$7,500–$9,000</strong> — right in
        the $5,000–$9,000 whole-house vinyl band — with every dollar
        accounted for. Show the 10–20% multi-window incentive against a
        per-window rate and the client sees exactly what booking the whole
        house saves them.
      </p>

      <h2>Reading the house before you price</h2>
      <p>
        The openings set the product; the house sets the labor. Walk these
        before you finalize any number:
      </p>
      <ul>
        <li><strong>Access and staging:</strong> second-story openings need ladder or staging time — budget ~15–25% extra labor on those windows and say so on the bid. Note shrubs, decks, and AC condensers blocking exterior access.</li>
        <li><strong>Interior protection:</strong> furniture moves, drop cloths, and floor protection on every window. It&apos;s real time — and the crew that protects the house gets the referral.</li>
        <li><strong>Alarm sensors and smart hardware:</strong> window sensors, wired alarms, and integrated blinds must be disconnected and reconnected. Ask who handles the alarm company — a dead sensor is your callback.</li>
        <li><strong>Lead paint (pre-1978):</strong> decide during the walkthrough, not the install. RRP containment, cleaning verification, and documentation at $100–$200/window go on the bid as their own line.</li>
        <li><strong>Structural red flags:</strong> sagging headers, water stains below sills, and spongy exterior sheathing mean the full-frame scope may grow once opened. Bid an allowance for structural surprises — never fixed blind.</li>
      </ul>

      <h2>Plan the crew day: scheduling math</h2>
      <p>
        A two-person crew installs 10–15 windows per day on insert work and
        4–8 per day on full-frame. Schedule from those numbers and you stop
        promising one-day jobs that take two:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Job mix</th>
            <th style={thStyle}>Crew days (2-person)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>10 inserts</td>
            <td style={tdStyle}>1 day</td>
          </tr>
          <tr>
            <td style={tdStyle}>20 inserts</td>
            <td style={tdStyle}>2 days</td>
          </tr>
          <tr>
            <td style={tdStyle}>10 inserts + 4 full-frame</td>
            <td style={tdStyle}>2 days</td>
          </tr>
          <tr>
            <td style={tdStyle}>8 full-frame</td>
            <td style={tdStyle}>1–2 days</td>
          </tr>
        </tbody>
      </table>
      <p>
        Add a half day for interior trim and paint touch-up if that&apos;s in
        your scope — it&apos;s the work clients see up close, and rushing it
        undoes a perfect install. And remember the lead time: windows are
        manufactured to your measurements, typically weeks out, so the
        deposit (10–30%) and a realistic install date go in the contract
        together.
      </p>

      <h2>Measuring protocol: 3 widths, 3 heights, no guessing</h2>
      <p>
        Wrong measurements are the most expensive mistake in window work —
        the unit is custom-made and non-returnable. Follow this protocol on
        every opening:
      </p>
      <ol>
        <li><strong>Measure width three times</strong> — top, middle, and bottom of the existing frame interior. Record all three.</li>
        <li><strong>Measure height three times</strong> — left, center, and right. Record all three.</li>
        <li><strong>The shortest measurement governs.</strong> Order from the smallest width and the smallest height; the install gets shimmed square, never forced.</li>
        <li><strong>Diagonal check:</strong> measure both diagonals of the opening. If they differ by more than 1/4 inch, the opening is out of square — flag it for a harder install or a full-frame conversion.</li>
        <li><strong>Jamb depth:</strong> confirm at least 3 1/4 inches of depth for an insert to seat into. Shallow jambs mean a different product or a full-frame build-out.</li>
        <li><strong>Note the rest:</strong> crank clearances, blind and curtain hardware, alarm sensors, exterior obstructions (shrubs, hose bibs, AC condensers), and which windows are second-story.</li>
      </ol>
      <p>
        Put the measurements on the bid itself, per opening. It proves you
        were thorough, it protects you if an opening is out of square, and
        it&apos;s the first thing a manufacturer rep asks for when a unit
        arrives wrong.
      </p>

      <h2>Glass and option upsells</h2>
      <ul>
        <li><strong>Double-pane Low-E with argon:</strong> the 2026 standard — make it the baseline for every bid, not an upgrade.</li>
        <li><strong>Triple-pane (+$100–$200/window):</strong> worth it in cold climates (Zone 5+) and for noise near highways or airports. Sell with U-factor numbers, not adjectives.</li>
        <li><strong>Laminated glass (+$150–$300/window):</strong> security, storm protection, serious sound dampening — an easy upsell on ground-floor street-facing windows.</li>
        <li><strong>Tempered glass:</strong> required by code near doors, in bathrooms, and for large low windows. Not optional where it applies — know your local code and quote it before the inspector does.</li>
        <li><strong>Egress windows:</strong> bedrooms need code-compliant egress sizing. If the existing window doesn&apos;t meet it, the replacement is your moment to fix it — and a full-frame line item.</li>
        <li><strong>Grids, colors, and interior finishes:</strong> low-effort margin on the unit order. Never leave them off the options list.</li>
      </ul>
      <p>
        Federal tax credits and utility rebates for efficient windows
        change year to year — check energystar.gov and the client&apos;s
        utility before quoting, and put any rebate math on the bid as a
        separate line so the gross price stays honest.
      </p>

      <h2>Walk-away minimums</h2>
      <p>
        Not every job deserves your crew. Set these floors and hold them:
      </p>
      <ul>
        <li><strong>Single-window minimum:</strong> one window at your full per-window rate plus a trip charge — a lone replacement still costs you a site visit, ordering, and scheduling.</li>
        <li><strong>Whole-house incentive cap:</strong> discount 10–20% for the bundle, and stop there. Below that you&apos;re donating the efficiency, not sharing it.</li>
        <li><strong>Deposit floor:</strong> never take less than the unit order cost. Custom windows with no deposit is a liability, not a sale.</li>
        <li><strong>All-full-frame houses:</strong> if every opening needs full-frame, that&apos;s a premium job — price the carpentry honestly and walk if the client wants insert pricing for full-frame work.</li>
      </ul>
      <p>
        Build your standard estimate on the{" "}
        <a href="/guides/contractor-estimate-template">contractor estimate
        template</a> so minimums, deposits, and line items appear the same
        way on every bid — consistency is what lets you hold the floor
        without arguing about it.
      </p>

      <h2>The quoting process, step by step</h2>
      <ol>
        <li><strong>Walk every window.</strong> Open it, check the sill with a screwdriver, look for fog between panes (seal failure), and photograph every problem. Painted-shut, rotted, or fogged units change the scope — find them during the estimate, not the install.</li>
        <li><strong>Classify insert vs. full-frame per opening.</strong> Mark it on the bid. Mixed houses are normal — quote each opening honestly.</li>
        <li><strong>Measure per protocol.</strong> Three widths, three heights, shortest governs, 1/4-inch diagonal check, 3 1/4-inch jamb depth. On the bid, per opening.</li>
        <li><strong>Spec material tiers.</strong> Vinyl, fiberglass, wood/clad side by side with glass options. The tiered presentation is the close.</li>
        <li><strong>Build the seven-line bid.</strong> Unit, labor, trim/capping, disposal, lead-safe where applicable, permit, deposit — then the per-window total and the whole-house bundle price.</li>
        <li><strong>Take 10–30% at signing.</strong> Windows are special-ordered with long lead times; the deposit protects your material order and commits the client.</li>
        <li><strong>Quote the same day you measure.</strong> Run the count through the <a href="/calculators/window-replacement-calculator">window replacement calculator</a> and send the <a href="/quote">quote</a> from the driveway. Same-day quotes close at roughly double the rate of next-day ones.</li>
      </ol>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Quoting without opening every window.</strong> Painted-shut, rotted, or fogged units change the scope — find them during the estimate, not the install.</li>
        <li><strong>Ignoring lead paint rules.</strong> Pre-1978 means EPA RRP compliance: certified procedures, containment, documentation. The fine for skipping it runs $40,000+ per day. Price the $100–$200/window in.</li>
        <li><strong>Burying disposal and trim.</strong> They&apos;re real costs; hiding them just makes your bid look padded when the client finds out.</li>
        <li><strong>Promising energy savings you can&apos;t quantify.</strong> &ldquo;Up to 25%&rdquo; on the window portion of the bill is honest; &ldquo;cut your bills in half&rdquo; is a lawsuit.</li>
        <li><strong>One-size-fits-all glass.</strong> Street-facing gets laminated, cold climate gets triple-pane — spec the glass to the orientation.</li>
        <li><strong>Skipping the final walkthrough.</strong> Open, close, and lock every window with the client present. Ten minutes prevents ten callbacks.</li>
      </ul>

      <h2>DIY vs. hiring a pro</h2>
      <p>
        A skilled DIYer can handle a ground-floor insert on a square
        opening — the process is straightforward when nothing is wrong.
        Where DIY goes sideways: out-of-square openings, full-frame work
        (flashing and water management are unforgiving), second-story
        ladder work, lead-paint homes, and the measurement itself — one
        wrong number and the $600 unit doesn&apos;t fit, with no return.
        Your honest pitch: &ldquo;the window is custom-made to my
        measurements, and my warranty covers the install and the seal.&rdquo;
        Most homeowners do the math on one ruined unit and hire the pro.
      </p>

      <h2>Do you need a permit to replace windows?</h2>
      <p>
        For insert/retrofit replacement: generally no — you&apos;re not
        opening the wall envelope. For full-frame replacement: yes in many
        jurisdictions, because the framing, flashing, and weather barrier
        are exposed and inspectable. Permit fees run $50–$300 in the 2026
        US range. Pre-1978 homes add the EPA RRP lead-safe layer on top of
        any permit question. Put the permit on the bid as your line item
        and pull it yourself — &ldquo;the other guy didn&apos;t mention a
        permit&rdquo; is not a defense at inspection. When in doubt, check
        your municipality before you quote.
      </p>

      <Faq items={faqs} heading="Window bidding questions, answered" />
    </GuideArticle>
  );
}
