import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "How to Handle Change Orders (Without Losing Money)",
  description:
    "The change order process that protects your margin: what to document, how to price changes, and the exact words to use with clients.",
  keywords: [
    "how to handle change orders",
    "change order process construction",
    "contractor change order template",
    "pricing change orders",
  ],
  alternates: { canonical: "https://calcbid.com/guides/how-to-handle-change-orders" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "How to Handle Change Orders (Without Losing Money) | CalcBid",
    description:
      "The change order process that protects your margin: documentation, pricing, and client conversations.",
    url: "https://calcbid.com/guides/how-to-handle-change-orders",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Handle Change Orders (Without Losing Money) | CalcBid",
    description: "The change order process that protects your margin: documentation, pricing, and client conversations.",
  },
};

const faqs = [
  {
    q: "What is a change order in construction?",
    a: "A change order is a written amendment to the original contract that describes added, removed, or altered work — with its price and schedule impact — signed by both contractor and client before the work happens. Verbal agreements to 'just do it' are not change orders; they're how contractors end up working for free.",
  },
  {
    q: "Should I charge more for change order work than the original bid?",
    a: "Usually, yes. Change orders disrupt your schedule, require remobilization, and often involve small quantities at retail prices. Many contractors price change-order labor 10–25% above their bid rate. The key is consistency: set your change-order rates in the original contract so the client isn't surprised.",
  },
  {
    q: "Can a client refuse to pay for a change order?",
    a: "They can dispute it, which is exactly why the signature comes before the work. A signed change order with a clear scope description and price is enforceable; a verbal 'go ahead' is a collections problem. If a client won't sign, don't start the extra work — that's the entire point of the process.",
  },
  {
    q: "What's the difference between a change order and a contingency?",
    a: "Contingency is money budgeted upfront for unknowns (typically 5–10% of the contract) — it covers surprises without paperwork. A change order is a formal scope change with its own price and signature. Use contingency for hidden conditions you discover; use change orders for anything the client asks to add, remove, or alter.",
  },
  {
    q: "Do I need a change order for small extras?",
    a: "Yes — especially for small extras. A $50 favor becomes a $500 expectation by the third time. Small changes are where margins bleed out silently because they never feel worth the paperwork. Batch tiny requests into one weekly change order if you must, but never let extra work go undocumented.",
  },
  {
    q: "What should a change order include?",
    a: "The original contract reference, a plain-language description of the added/changed work, itemized cost (labor, materials, markup), schedule impact in days, payment terms, and signature lines for both parties with dates. Anything less is a handshake with extra steps.",
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
      title="How to Handle Change Orders (Without Losing Money)"
      description="Change orders are where contractor profits go to die — or where they're made. The process, the pricing, and the client conversation."
      slug="how-to-handle-change-orders"
      updated="October 2026"
      calculatorHref="/quote"
      calculatorLabel="Build the change order"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Change orders are the #1 profit leak in contracting — not because the
        work is unprofitable, but because it happens <strong>without
        paperwork</strong>. The rule is absolute:{" "}
        <strong>no signature, no extra work</strong>. A proper change order
        takes five minutes to write and protects thousands of dollars. The
        contractors who lose money on changes aren&apos;t the ones who price
        them wrong — they&apos;re the ones who never price them at all.
      </p>

      <h2>The change order process (5 steps)</h2>
      <ol>
        <li><strong>Stop and scope it.</strong> When the client asks for something extra — or you discover something hidden — pause. Define exactly what changes: what&apos;s added, what&apos;s removed, what&apos;s different. Vague scope is how a &ldquo;small tile change&rdquo; becomes a bathroom redesign.</li>
        <li><strong>Price it like a mini-bid.</strong> Labor, materials, markup, schedule impact in days. Price change-order labor at your standard rate or 10–25% above — small quantities and schedule disruption cost real money.</li>
        <li><strong>Write it up.</strong> One page: contract reference, plain-language description, itemized cost, days added to the schedule, payment terms, signature lines with dates.</li>
        <li><strong>Get the signature first.</strong> The client signs before any changed work begins. No exceptions, no &ldquo;we&apos;ll sort it out Friday.&rdquo; Friday never sorts it out.</li>
        <li><strong>File it with the contract.</strong> Number your change orders (CO-001, CO-002) and keep them with the original agreement. At final invoice, there&apos;s no argument about what was approved.</li>
      </ol>
      <p>
        Build each one in <a href="/quote">CalcBid&apos;s quote builder</a> —
        itemized lines, your markup, and a signature-ready total in minutes,
        sent from the job site before the crew moves on.
      </p>

      <h2>How to price change orders</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Pricing approach</th>
            <th style={thStyle}>When to use it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}><strong>Same rates as the bid</strong></td>
            <td style={tdStyle}>Straightforward additions of identical work (extra 50 sq ft of the same flooring). Fair and easy to defend.</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Bid rate + 10–25%</strong></td>
            <td style={tdStyle}>Disruptive changes: remobilization, small quantities, schedule shuffling. The default for most change orders.</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Time &amp; materials</strong></td>
            <td style={tdStyle}>Unknown-scope discoveries (rot behind the wall, bad wiring). Cap it with a not-to-exceed number.</td>
          </tr>
          <tr>
            <td style={tdStyle}><strong>Credit for deleted work</strong></td>
            <td style={tdStyle}>Client removes scope: credit materials at cost and labor at 50–70% (you already planned, scheduled, and possibly ordered).</td>
          </tr>
        </tbody>
      </table>
      <p>
        Set your change-order policy in the original contract — one paragraph
        stating that extras are priced in writing and require signature
        before work begins. If the contract still mixes up{" "}
        <a href="/guides/quote-vs-estimate-vs-bid">quotes, estimates, and
        bids</a>, tighten the language first: the distinction decides who
        pays for ambiguity. Clients who agree upfront almost never fight it
        later. Clients who first hear about it mid-job always do.
      </p>

      <h2>The client conversation (exact words)</h2>
      <p>
        Most contractors dread this conversation far more than it deserves.
        Clients expect extras to cost money — they just need to hear it
        plainly and early:
      </p>
      <ul>
        <li><strong>When they ask for more:</strong> &ldquo;Happy to do that. Let me price it up and send you a change order — I&apos;ll need your sign-off before we start so we&apos;re both clear on the cost and the schedule impact.&rdquo;</li>
        <li><strong>When you find hidden damage:</strong> &ldquo;We opened the wall and found [X]. It&apos;s outside the original scope. Here&apos;s what it takes to fix it right, and here&apos;s what it adds to the timeline. I need your approval before we proceed.&rdquo;</li>
        <li><strong>When they push back on price:</strong> &ldquo;I understand. We can also leave it as originally planned — your call. I just can&apos;t do the extra work without the paperwork, for both our protection.&rdquo;</li>
        <li><strong>When they say &ldquo;just do it, we&apos;ll settle up&rdquo;:</strong> &ldquo;I appreciate the trust, but my policy is signature first — it protects you as much as me. I can have it to you in ten minutes.&rdquo;</li>
      </ul>
      <p>
        Notice what&apos;s missing: apologies, defensiveness, and negotiation
        against yourself. You&apos;re not asking permission to be paid for
        work — you&apos;re running a process they already agreed to.
      </p>

      <h2>The five change orders that sink jobs</h2>
      <ul>
        <li><strong>The verbal yes.</strong> &ldquo;Sure, move the outlet&rdquo; — three outlets, two switches, and a ceiling fan later, you&apos;ve donated a day.</li>
        <li><strong>The material upgrade.</strong> Client switches from laminate to quartz mid-job. Price the material delta <em>plus</em> the different install labor — they&apos;re not the same job.</li>
        <li><strong>The hidden condition.</strong> Rot, bad wiring, buried surprises. Document with photos, price time-and-materials with a cap, get the signature before touching it.</li>
        <li><strong>The schedule stretch.</strong> &ldquo;Can you also do the hallway while you&apos;re here?&rdquo; Yes — and it adds three days, which pushes your next job. Price the days.</li>
        <li><strong>The free sample.</strong> Doing the first extra free &ldquo;as a goodwill gesture&rdquo; trains the client that changes are free. Goodwill is a discount you choose on the final invoice, not a policy.</li>
      </ul>

      <h2>Costly mistakes to avoid</h2>
      <ul>
        <li><strong>Working before the signature.</strong> The single most expensive habit in contracting. Every time.</li>
        <li><strong>No change-order clause in the contract.</strong> Without it, you&apos;re negotiating the process mid-crisis instead of following an agreed one.</li>
        <li><strong>Pricing at cost to &ldquo;keep the client happy.&rdquo;</strong> Happy clients who don&apos;t pay don&apos;t keep you in business. Fair price, clearly stated, beats free work every time.</li>
        <li><strong>Forgetting schedule impact.</strong> Every change order should state days added. Time is money, and undocumented delays become your fault.</li>
        <li><strong>Batching without documentation.</strong> &ldquo;We&apos;ll true it up at the end&rdquo; means you&apos;ll argue about it at the end. Document each change when it happens.</li>
        <li><strong>No photos of hidden conditions.</strong> When you find rot or bad wiring, photograph before you touch anything. Photos end disputes; memory doesn&apos;t.</li>
      </ul>
      <p>
        Set up your change-order template once in the{" "}
        <a href="/quote">quote builder</a> — numbered, itemized, and ready to
        send from the driveway. The contractors who get paid for every hour
        they work aren&apos;t tougher negotiators. They just have a process.
      </p>

      <h2>Anatomy of an enforceable change order form</h2>
      <p>
        A change order only protects you if it would hold up in a dispute,
        and that comes down to fields, not formatting. Every form — yours
        should carry these whether it lives on paper or in a phone:
      </p>
      <ul>
        <li><strong>Change order number and contract reference.</strong> CO-001, tied to the original signed agreement by date and job address, so the paper trail is one file, not two arguments.</li>
        <li><strong>Scope delta in plain language.</strong> What is added, what is removed, and what stays exactly as contracted. &ldquo;Repair rot&rdquo; is not a scope; &ldquo;Remove and replace 24 sq ft of rotted subfloor and one sill plate section found at demo&rdquo; is.</li>
        <li><strong>Itemized price.</strong> Labor, materials, and markup as separate lines, priced by the method in your contract — never a bare total the client has to take on faith.</li>
        <li><strong>Schedule impact in days.</strong> &ldquo;Adds 1 day; new completion date June 14&rdquo; — written on the form, not mentioned in the hallway.</li>
        <li><strong>Revised cumulative total.</strong> Original contract, plus each prior change order, plus this one. The client should always see the full running number they are committing to.</li>
        <li><strong>The stop-work clause.</strong> One sentence above the signature line: work on this change does not proceed until this form is signed. It converts your policy from a preference into a term they agreed to.</li>
        <li><strong>Signatures and dates for both parties.</strong> Unsigned is a draft. Dated signatures are what make it an amendment instead of a note.</li>
      </ul>
      <p>
        Digital forms beat paper on one point that matters in disputes:
        attachments. Photograph the hidden condition, attach the photos to
        the change order itself, and send it from the{" "}
        <a href="/quote">quote builder</a> while you are standing in front of
        the damage. A signed form with timestamped photos ends the &ldquo;I
        never saw any rot&rdquo; conversation before it starts. Paper works
        too — if it is signed before the work and filed with the contract,
        not reconstructed from memory at invoice time.
      </p>

      <h2>Worked example: the $850 change that protected a $14,000 job</h2>
      <p>
        A bathroom remodel is contracted at $14,000. At demo, the crew finds
        rot in the subfloor around the tub — a hidden condition, outside the
        original scope. Priced by the method in the table above, as
        time-and-materials work at the change-order rate: replacement lumber
        and subfloor material $260, labor $420 for the tear-out and rebuild,
        a direct-cost subtotal of $680. With the 25% change-order markup the
        contract already specifies, the change order totals{" "}
        <strong>$850</strong>, with one day added to the schedule, stated on
        the form.
      </p>
      <p>
        The presentation uses the hidden-damage script from the conversation
        section above: here is what we found (with photos), here is what it
        takes to fix it right, here is the cost and the extra day, and I need
        your approval before we proceed. The client signs CO-001 in ten
        minutes because none of it is a surprise — the process was in the
        original contract.
      </p>
      <p>
        Now the outcome math. Say the $14,000 job was bid at a 20% gross
        margin — $2,800 of expected gross profit. Absorbing the rot repair
        &ldquo;to keep the client happy&rdquo; spends $680 of real cost,
        cutting that margin to $2,120: one hidden condition just took 24% of
        the profit on the job, and the undocumented extra day pushes the next
        job with no paper to explain why. With the signed change order
        instead, the contract becomes $14,850, the repair is paid work with
        its markup intact, the schedule slip is documented as
        client-approved, and the margin survives whole. The $850 was never
        the point. The signature was.
      </p>

      <Faq items={faqs} heading="Change order questions, answered" />
    </GuideArticle>
  );
}
