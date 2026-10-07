import GuideArticle from "../../../components/GuideArticle";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Quote vs Estimate vs Bid: What to Send When",
  description:
    "Contractor quote vs estimate vs bid: what each one means, when to send it, and which one protects you legally.",
  keywords: [
    "quote vs estimate vs bid",
    "difference between quote and estimate contractor",
    "contractor estimate vs quote",
    "what is a bid vs quote",
  ],
  alternates: { canonical: "https://calcbid.com/guides/quote-vs-estimate-vs-bid" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Quote vs Estimate vs Bid: What to Send When | CalcBid",
    description:
      "What each document means, when to send it, and which one protects you.",
    url: "https://calcbid.com/guides/quote-vs-estimate-vs-bid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quote vs Estimate vs Bid: What to Send When | CalcBid",
    description: "What each document means, when to send it, and which one protects you.",
  },
};

const faqs = [
  {
    q: "Is a contractor estimate legally binding?",
    a: "Generally no — an estimate is understood to be approximate, typically within 10–15% of the final cost. But the label isn\u2019t magic: if your \u2018estimate\u2019 reads like a fixed price with a detailed scope and the client accepts it, a court may treat it as a quote. When the number is firm, call it a quote; when it isn\u2019t, say so in writing.",
  },
  {
    q: "Is a signed quote a contract?",
    a: "In most US states, yes — a signed quote with a defined scope, price, and acceptance becomes an enforceable agreement. That\u2019s exactly why you want it signed: it locks the scope as well as the price, which is your defense against \u2018while you\u2019re at it\u2019 scope creep.",
  },
  {
    q: "What\u2019s the difference between a bid and a quote?",
    a: "A quote is a fixed price offered directly to a client. A bid is a formal proposal submitted in competition with other contractors — common in commercial work and tender processes. Bids include everything a quote has, plus company credentials, project timeline, references, and terms designed to win against rivals.",
  },
  {
    q: "Can a contractor charge more than the estimate?",
    a: "An honest estimate can move with scope changes — that\u2019s what estimates are for. But surprise overruns on the original scope destroy trust and invite disputes (and in some states, consumer-protection complaints). If costs rise, document the change, get written approval, and issue a change order before doing the work.",
  },
  {
    q: "Should I give a free estimate or charge for quotes?",
    a: "Free estimates are the residential standard — clients expect them and charging upfront costs you jobs. For complex commercial work, many contractors charge a design or estimating fee credited against the job. The middle path: free estimates for standard work, paid site assessments for anything requiring real design time.",
  },
  {
    q: "How do I turn an estimate into a quote?",
    a: "Measure the full scope, finalize material selections and pricing, add your contingency, then reissue the document labeled \u2018Quote\u2019 with a fixed total, validity date, payment terms, and signature line. Never just tell the client \u2018the estimate is now the price\u2019 — the paperwork has to change, because the commitment changed.",
  },
];

export default function Guide() {
  return (
    <GuideArticle
      title="Quote vs Estimate vs Bid: What to Send When"
      description="Contractors use these words interchangeably. Clients and courts don't. Here's the real difference — and which document to send."
      slug="quote-vs-estimate-vs-bid"
      calculatorHref="/calculators/paint-calculator"
      calculatorLabel="Price the job"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <p>
        Contractors use &ldquo;quote,&rdquo; &ldquo;estimate,&rdquo; and
        &ldquo;bid&rdquo; interchangeably. Clients and courts don&apos;t.
        Each word carries a different level of commitment — and sending the
        wrong one is how you end up eating a $2,000 overrun or losing a job
        you should have won.
      </p>
      <p>
        Here&apos;s the real difference between the three, when to send each
        one, what each must contain, and the legal and sales implications
        most contractors learn the expensive way.
      </p>

      <h2>The three documents, side by side</h2>
      <table className="q-table">
        <thead>
          <tr><th></th><th>Estimate</th><th>Quote</th><th>Bid</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>What it is</strong></td><td>Educated guess, ±10–15%</td><td>Fixed price for defined scope</td><td>Formal competitive proposal</td></tr>
          <tr><td><strong>Legally binding?</strong></td><td>Generally no</td><td>Yes, once accepted</td><td>Yes, once accepted</td></tr>
          <tr><td><strong>When to send</strong></td><td>Early, scope still forming</td><td>Measured, ready to commit</td><td>Competing against other contractors</td></tr>
          <tr><td><strong>Detail level</strong></td><td>Ballpark with assumptions stated</td><td>Fully itemized, signed scope</td><td>Quote + credentials, timeline, terms</td></tr>
          <tr><td><strong>Typical use</strong></td><td>Residential first conversations</td><td>Residential committed work</td><td>Commercial, tenders, GC sub-bids</td></tr>
        </tbody>
      </table>

      <h2>Estimate: your educated guess</h2>
      <p>
        An <strong>estimate</strong> is an approximate cost based on what you
        know so far — typically within 10–15% of the final number. Send it
        early, when the scope isn&apos;t fully nailed down: the first phone
        call, the walkthrough, the &ldquo;roughly what are we talking
        about?&rdquo; moment.
      </p>
      <p>
        Always label it &ldquo;estimate&rdquo; in the document itself, state
        your assumptions (&ldquo;assumes two coats, walls in good
        condition&rdquo;), and note that the final price may vary with scope
        changes. Estimates are generally <em>not</em> legally binding — but
        the label isn&apos;t magic. If your &ldquo;estimate&rdquo; reads like
        a fixed price with a detailed scope and the client accepts it, a
        court may treat it as a quote. Honest estimates set expectations;
        sloppy ones set traps.
      </p>
      <h3>What a good estimate contains</h3>
      <ul>
        <li>The word &ldquo;ESTIMATE&rdquo; at the top — not buried, not implied</li>
        <li>Scope as you understand it, with assumptions listed</li>
        <li>A price range rather than a false-precise single number</li>
        <li>What would move the number up or down</li>
        <li>Next step: &ldquo;Reply to schedule a detailed measurement for a fixed quote&rdquo;</li>
      </ul>

      <h2>Quote: your fixed promise</h2>
      <p>
        A <strong>quote</strong> (or quotation) is a fixed price for a
        defined scope — and in most states, once the client accepts it
        (signature, deposit, or written &ldquo;go ahead&rdquo;), it&apos;s a
        binding commitment. Send it when the scope is fully measured and
        you&apos;re confident in the number.
      </p>
      <p>
        This is the document that protects both sides: the client knows the
        price won&apos;t move, and you have a signed scope to point at when
        &ldquo;while you&apos;re at it&rdquo; requests appear. Everything
        outside the signed scope is a change order — quoted separately,
        approved in writing, before the work happens.
      </p>
      <h3>What a good quote contains</h3>
      <ul>
        <li>Itemized line items with quantities (see the <a href="/guides/painting-estimate-template">painting estimate template</a> for the full anatomy)</li>
        <li>Materials specified by brand and product line</li>
        <li>Exclusions — what&apos;s explicitly not included</li>
        <li>Total, deposit (30–50% residential is standard), and payment schedule</li>
        <li>Validity date — 30 days is standard</li>
        <li>Signature line and date</li>
      </ul>

      <h2>Bid: your competitive proposal</h2>
      <p>
        A <strong>bid</strong> is a formal offer submitted in competition
        with other contractors — standard on commercial work, property
        management contracts, and anything involving a tender or RFP process.
        It&apos;s quote-like in pricing precision but proposal-like in
        format: company credentials, project timeline, safety record,
        references, insurance certificates, terms, and price — packaged to
        win against rivals, not just to inform.
      </p>
      <h3>What separates a winning bid from a losing one</h3>
      <ul>
        <li>
          <strong>Compliance first.</strong> Read the bid documents fully —
          most losing bids lose on a missed requirement (bonding, insurance
          limits, submission format), not on price.
        </li>
        <li>
          <strong>Sell the company, not just the number.</strong> Similar
          scopes, crew bios, and a project schedule show the buyer what
          they&apos;re actually purchasing: reliability.
        </li>
        <li>
          <strong>Price to win <em>and</em> survive.</strong> Bid too low and
          you&apos;ve bought yourself a job that loses money for six weeks.
          Know your true costs — labor burden, overhead, contingency — before
          you sharpen the pencil.
        </li>
        <li>
          <strong>Follow up.</strong> A short call after submission —
          &ldquo;any questions on our proposal?&rdquo; — wins a surprising
          share of close decisions. Many bids are awarded to the contractor
          who showed the most professional persistence, not the lowest
          number — especially with property managers who value reliability
          over shaving 3%.
        </li>
      </ul>

      <h2>When to send which: the decision flow</h2>
      <ul>
        <li><strong>First conversation, rough scope:</strong> estimate — fast, sets the budget conversation, buys you the measurement visit.</li>
        <li><strong>Measured job, ready to commit:</strong> quote — fixed price, signed scope, deposit, get to work.</li>
        <li><strong>Competing for the job:</strong> bid — full proposal package that sells your company, not just the price.</li>
        <li><strong>Scope changed mid-job:</strong> change order — a mini-quote for the new work, signed before it starts.</li>
      </ul>

      <h2>The mistakes that cost real money</h2>
      <ul>
        <li>
          <strong>The estimate treated as a quote.</strong> The classic:
          you send an &ldquo;estimate,&rdquo; the client hears a fixed
          price, the job runs 20% over, and you eat it to avoid a fight. If
          the number is firm, call it a quote and get it signed. If it
          isn&apos;t firm, say so in writing.
        </li>
        <li>
          <strong>Verbal quotes.</strong> A price spoken on a driveway is
          worth nothing when memories differ. If you discussed numbers out
          loud, follow up with the document the same day.
        </li>
        <li>
          <strong>No validity date.</strong> Material prices move. A quote
          with no expiry is an open-ended promise — date every one.
        </li>
        <li>
          <strong>Scope described in vibes.</strong> &ldquo;Paint the
          interior&rdquo; is not a scope. Rooms, surfaces, coats, and
          exclusions — in writing — are what keep change orders billable
          instead of arguable.
        </li>
        <li>
          <strong>Starting work with no money down.</strong> Starting work with no money
          down tells the client your schedule has no value. 30–50% on
          signing is standard for a reason — it commits both sides.
        </li>
      </ul>

      <h2>State law notes worth knowing</h2>
      <p>
        Contractor paperwork isn&apos;t just custom — it&apos;s regulated,
        and the rules vary:
      </p>
      <ul>
        <li>Several states cap deposits (California: 10% or $1,000, whichever is less, for home improvement).</li>
        <li>Many states require specific contract elements: license number on the document, cancellation notices, start/completion dates.</li>
        <li>Some jurisdictions give homeowners a multi-day right to cancel signed home-improvement contracts.</li>
      </ul>
      <p>
        None of this is legal advice — but &ldquo;I didn&apos;t know&rdquo;
        has never won a contractor board hearing. Ten minutes with your
        state&apos;s contractor board website is the cheapest insurance you
        own — and printing the relevant page for your job file takes eleven.
      </p>

      <h2>The paper trail: what to keep</h2>
      <p>
        The document you sent is only half the protection — the other half
        is being able to produce it later. Keep every signed quote, accepted
        bid, and change order for at least 7 years (longer where your state
        requires it for tax or licensing purposes). Store them digitally,
        searchable by client name and address, not in a truck glovebox.
        Alongside each one, keep the measurement notes and photos the price
        was built from: when a client claims &ldquo;you never mentioned the
        trim,&rdquo; the dated photo of the trim with your notes ends the
        conversation. The <a href="/quote">quote builder</a> keeps this
        history automatically for quotes you create in CalcBid — one more
        reason to stop emailing Word docs.
      </p>

      <p>
        <strong>The shortcut:</strong> the{" "}
        <a href="/quote">CalcBid quote builder</a> produces proper quotes —
        itemized, with validity dates and terms — in minutes. Estimates and
        bids start from the same numbers; what changes is the label and the
        commitment behind it. Build the numbers in the right{" "}
        <a href="/calculators">calculator</a> first, then send the right
        document for the moment you&apos;re in — and file a copy of everything.
      </p>

      <h2>Residential vs commercial: which document rules</h2>
      <table className="q-table">
        <thead>
          <tr><th>Setting</th><th>Usual document</th><th>Why</th></tr>
        </thead>
        <tbody>
          <tr><td>Residential repaint</td><td>Estimate → Quote</td><td>Fast estimate wins the visit; fixed quote closes the job</td></tr>
          <tr><td>Residential remodel</td><td>Quote</td><td>Defined scope, single decision-maker, deposit on signing</td></tr>
          <tr><td>Property management</td><td>Bid</td><td>Competing vendors, recurring work, formal approval chains</td></tr>
          <tr><td>Commercial / institutional</td><td>Bid</td><td>RFPs, bonding, insurance certs, compliance requirements</td></tr>
          <tr><td>Insurance restoration</td><td>Estimate (Xactimate-style)</td><td>Carrier sets the price book; your estimate justifies the scope</td></tr>
        </tbody>
      </table>

      <h2>What to write when you send each one</h2>
      <p>
        The document matters; the email around it matters almost as much.
        Keep it short and label-forward:
      </p>
      <ul>
        <li>
          <strong>Estimate email:</strong> &ldquo;Attached is a preliminary
          estimate of $X–$Y based on today&apos;s walkthrough. The final
          number depends on [paint selection / prep findings]. Reply to
          schedule the detailed measurement and I&apos;ll turn this into a
          fixed quote.&rdquo;
        </li>
        <li>
          <strong>Quote email:</strong> &ldquo;Attached is your fixed quote:
          $X, valid through [date]. It covers [one-line scope]. To book
          your dates, sign and return with the deposit — I&apos;m currently
          scheduling [timeframe].&rdquo;
        </li>
        <li>
          <strong>Bid cover note:</strong> &ldquo;Please find our proposal
          for [project]. We&apos;ve completed [X] similar projects in [area];
          references and certificates attached. I&apos;m available this week
          to walk through any questions.&rdquo;
        </li>
      </ul>
      <p>
        Notice the pattern: each message names the document type, states
        the number plainly, and gives one clear next step. Confusion about
        what the client just received is how estimates get treated as
        quotes.
      </p>

      <h2>Deposits and billing by document type</h2>
      <ul>
        <li>
          <strong>Estimates:</strong> no money changes hands. An estimate is
          a conversation, not a transaction — asking for a deposit on an
          estimate confuses the client about what they agreed to.
        </li>
        <li>
          <strong>Quotes:</strong> 30–50% deposit on signing for
          residential work, balance on completion. The deposit is what turns
          the quote into a scheduled job.
        </li>
        <li>
          <strong>Bids:</strong> follow the bid documents — commercial work
          often runs on progress billing (monthly pay apps against percent
          complete) with 5–10% retainage held until final acceptance. Know
          the terms before you price, because retainage is an interest-free
          loan you give the client.
        </li>
      </ul>

      <Faq items={faqs} heading="Quote, estimate &amp; bid questions, answered" />
    </GuideArticle>
  );
}
