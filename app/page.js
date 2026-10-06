import Link from "next/link";
import EmailCapture from "../components/EmailCapture";

const steps = [
  {
    n: "1",
    title: "Work the numbers",
    text: "Room size, coats, your paint, your rate. CalcBid figures the gallons, the waste, and the labor while you're still standing there with the tape measure.",
  },
  {
    n: "2",
    title: "Make it official",
    text: "One tap turns the estimate into a clean, branded quote — line items, totals, expiry date, your terms. No more Word docs at midnight.",
  },
  {
    n: "3",
    title: "Send it today",
    text: "Text the link, print the PDF, or email it straight from the driveway. No more \u201CI'll send it tonight\u201D and then forgetting.",
  },
];

const trades = [
  { name: "Paint", note: "Gallons, coats & labor", href: "/calculators/paint-calculator" },
  { name: "Roofing", note: "Squares, shingles & waste", href: "/calculators/roofing-calculator" },
  { name: "Tile & flooring", note: "Tiles, boxes & labor", href: "/calculators/tile-flooring-calculator" },
  { name: "Deck & fence", note: "Boards, posts & concrete", href: "/calculators/deck-fence-calculator" },
  { name: "HVAC / BTU", note: "Load sizing per room", href: "/calculators/hvac-btu-calculator" },
  { name: "Concrete & drywall", note: "Yards, sheets & mud", href: "/calculators/concrete-drywall-calculator" },
];

const features = [
  {
    title: "Math that holds up",
    text: "Waste factors, door and window deductions, real coverage rates. The numbers still make sense when you're standing at the paint counter.",
  },
  {
    title: "Quotes that look like you mean it",
    text: "Branded documents with line items, taxes, discounts, and expiry dates. Show up on paper like the biggest crew in town.",
  },
  {
    title: "Send it however they want it",
    text: "A link they can open on their phone, a PDF they can print, or straight into email. You meet the client where they are.",
  },
  {
    title: "Priced like a tool, not a tax",
    text: "No $200-a-month suite with features you'll never touch. Built for independents and small crews who just need to win more bids.",
  },
  {
    title: "Bids in minutes, not evenings",
    text: "The 4\u20138 unpaid hours you spend scoping every bid? That's a ten-minute job on your phone now. On-site, between coats.",
  },
  {
    title: "Your name on everything",
    text: "Your logo, your rates, your terms on every quote. No marketplace in the middle taking a cut of your work.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "The calculators are free, forever \u2014 no account, no catch. When you want unlimited branded quotes with your logo, plans start at $19 a month. That's it.",
  },
  {
    q: "What trades does CalcBid cover?",
    a: "Painting, roofing, tile & flooring, deck & fence, HVAC, and concrete & drywall \u2014 six calculators live today, and every one feeds the quote builder. Join the waitlist and tell us your trade, it genuinely decides what we build next.",
  },
  {
    q: "Does my client need an account to see the quote?",
    a: "Nope. They get a link, they open it on their phone, they see your quote. Nothing to install, nothing to sign up for.",
  },
  {
    q: "How is this different from Joist or Houzz Pro?",
    a: "Those start with a blank quote template and make you fill in the numbers by hand. CalcBid starts with the calculator \u2014 real quantities, real material costs \u2014 so the quote builds itself from math, not guesses.",
  },
];

function Squiggle() {
  return (
    <svg className="squiggle" viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 11 C 40 4, 70 13, 105 8 S 170 5, 197 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <h1>
            Calculate the job.
            <br />
            Send the quote.{" "}
            <span className="hl">
              Get paid.
              <Squiggle />
            </span>
          </h1>
          <p className="lead">
            CalcBid is the calculator-and-quote pad for contractors. Punch in
            the job, get exact materials and costs, and send a quote your
            client can sign off on &mdash; all before you&apos;ve left the driveway.
          </p>
          <div className="hero-cta">
            <Link href="/calculators/paint-calculator" className="btn btn-primary">
              Try the paint calculator
            </Link>
            <Link href="/quote" className="btn btn-ghost">
              Build a quote
            </Link>
          </div>
          <div className="hero-proof">
            <span>free calculators, forever</span>
            <span>no spreadsheet required</span>
            <span>client-ready in minutes</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="kicker">How it works</div>
          <h2 className="h2">Tape measure to signed quote, three steps</h2>
          <div className="grid3">
            {steps.map((s) => (
              <div className="card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="kicker">Trades</div>
          <h2 className="h2">One pad, every trade you work</h2>
          <p className="sub">
            Six trades live today, free to use. Tell us your trade on the
            waitlist &mdash; it genuinely decides what we build next.
          </p>
          <div className="grid3">
            {trades.map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className="card trade"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-note">{t.note}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">Why CalcBid</div>
          <h2 className="h2">Built for the 70% still estimating in Excel</h2>
          <p className="sub">
            Most contractors burn 4&ndash;8 unpaid hours scoping every bid &mdash; and
            close barely a quarter of them. Evenings back, quotes out the same
            day. That&apos;s the whole pitch.
          </p>
          <div className="grid3">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="kicker">Pricing</div>
          <h2 className="h2">Priced like a tool, not a tax</h2>
          <p className="sub">Launch pricing. Get on the waitlist and it&apos;s yours for good.</p>
          <div className="grid3">
            <div className="card price-card">
              <div className="p-name">Free</div>
              <div className="p-price">$0</div>
              <div className="p-per">forever</div>
              <ul>
                <li>All material calculators</li>
                <li>3 quotes per month</li>
                <li>Shareable quote links</li>
              </ul>
              <Link href="/calculators/paint-calculator" className="btn btn-ghost">Start free</Link>
            </div>
            <div className="card price-card featured">
              <div className="p-name">Solo</div>
              <div className="p-price">$19</div>
              <div className="p-per">per month</div>
              <ul>
                <li>Everything in Free</li>
                <li>Unlimited quotes</li>
                <li>Your logo &amp; branding</li>
                <li>Quote templates</li>
              </ul>
              <Link href="#waitlist" className="btn btn-primary">Join the waitlist</Link>
            </div>
            <div className="card price-card">
              <div className="p-name">Crew</div>
              <div className="p-price">$49</div>
              <div className="p-per">per month</div>
              <ul>
                <li>Everything in Solo</li>
                <li>All trades &amp; calculators</li>
                <li>Client follow-up reminders</li>
                <li>Priority support</li>
              </ul>
              <Link href="#waitlist" className="btn btn-ghost">Join the waitlist</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq">
          <div className="kicker">FAQ</div>
          <h2 className="h2">Straight answers</h2>
          <div style={{ marginTop: 24 }}>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="waitlist">
        <div className="wrap">
          <div className="kicker">Waitlist</div>
          <h2 className="h2">Get in before your trade launches</h2>
          <p className="sub">
            Lock in launch pricing and vote on which trade we build next. One
            email when it&apos;s ready &mdash; no drip campaign, we hate those too.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
