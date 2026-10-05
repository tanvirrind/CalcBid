import Link from "next/link";
import EmailCapture from "../components/EmailCapture";

const steps = [
  {
    n: "1",
    title: "Calculate the job",
    text: "Enter room dimensions, materials, and rates. CalcBid crunches quantities, gallons, and costs instantly — no spreadsheet, no guesswork.",
  },
  {
    n: "2",
    title: "Build the quote",
    text: "One click turns your estimate into a branded, professional quote with line items, totals, and your terms.",
  },
  {
    n: "3",
    title: "Send it to your client",
    text: "Share a link, download a PDF-ready file, or open it in email. Your client sees a quote that wins jobs.",
  },
];

const trades = [
  { name: "Paint", note: "Gallons, coats & labor", live: true },
  { name: "Roofing", note: "Squares, shingles & waste", live: false },
  { name: "Tile & flooring", note: "Boxes, cuts & layout", live: false },
  { name: "Deck & fence", note: "Boards, posts & concrete", live: false },
  { name: "HVAC / BTU", note: "Load sizing per room", live: false },
  { name: "Concrete & drywall", note: "Yards, sheets & mud", live: false },
];

const features = [
  {
    title: "Trade-accurate calculators",
    text: "Built for how contractors actually estimate — waste factors, coats, openings, and real coverage rates included.",
  },
  {
    title: "Quotes that close",
    text: "Branded quote documents with line items, taxes, discounts, and expiry dates. Look like the biggest crew in town.",
  },
  {
    title: "Send anywhere",
    text: "Shareable link, printable PDF layout, or straight into email. Meet the client wherever they are.",
  },
  {
    title: "Priced for small crews",
    text: "No $200/mo suite. CalcBid is built for independents and small teams who just need to win more bids.",
  },
  {
    title: "Estimates in minutes",
    text: "What takes 4–8 unpaid hours per bid today becomes a 10-minute job on your phone, on-site.",
  },
  {
    title: "Your numbers, your brand",
    text: "Your logo, your rates, your terms on every quote. No marketplace taking a cut of your work.",
  },
];

const faqs = [
  {
    q: "Is CalcBid free?",
    a: "The calculators are free forever. Quoting plans start at $19/mo — a fraction of the $49–199/mo suites — because independent contractors shouldn't need enterprise software to send a quote.",
  },
  {
    q: "Which trades are supported?",
    a: "Painting is live today. Roofing, tile & flooring, deck & fence, and HVAC sizing are on the roadmap, prioritized by waitlist demand.",
  },
  {
    q: "Can my client open the quote without an account?",
    a: "Yes. Every quote gets a shareable link your client can open on any device — no signup, no app to install.",
  },
  {
    q: "How is this different from Joist or Houzz Pro?",
    a: "Those start with quoting and bolt on generic fields. CalcBid starts with trade-accurate material calculators, so your quote is built on real quantities — not guesses typed into a template.",
  },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <h1>
            Calculate the job.
            <br />
            Send the quote. <span className="hl">Get paid.</span>
          </h1>
          <p className="lead">
            CalcBid pairs trade-accurate material calculators with professional
            quoting — so contractors estimate in minutes and send client-ready
            quotes that win jobs.
          </p>
          <div className="hero-cta">
            <Link href="/calculator" className="btn btn-primary">
              Try the paint calculator
            </Link>
            <Link href="/quote" className="btn btn-ghost">
              Build a quote
            </Link>
          </div>
          <div className="hero-proof">
            <span>✓ Free calculators, forever</span>
            <span>✓ No spreadsheet required</span>
            <span>✓ Client-ready in minutes</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="kicker">How it works</div>
          <h2 className="h2">From tape measure to signed quote in three steps</h2>
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
          <h2 className="h2">One platform, every trade you work</h2>
          <p className="sub">
            Painting is live today. Tell us your trade on the waitlist and help
            decide what we build next.
          </p>
          <div className="grid3">
            {trades.map((t) => (
              <div className="card trade" key={t.name}>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-note">{t.note}</div>
                </div>
                <span className={`pill ${t.live ? "live" : "soon"}`}>
                  {t.live ? "Live" : "Soon"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="kicker">Why CalcBid</div>
          <h2 className="h2">Built for the 70% still estimating in Excel</h2>
          <p className="sub">
            Most contractors lose 4–8 unpaid hours scoping every bid — and close
            barely a quarter of them. CalcBid turns that into minutes.
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
          <h2 className="h2">Software priced like a tool, not a tax</h2>
          <p className="sub">Launch pricing. Lock it in on the waitlist.</p>
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
              <Link href="/calculator" className="btn btn-ghost">Start free</Link>
            </div>
            <div className="card price-card featured">
              <div className="p-name">Starter</div>
              <div className="p-price">$19</div>
              <div className="p-per">per month</div>
              <ul>
                <li>Everything in Free</li>
                <li>Unlimited quotes</li>
                <li>Your logo & branding</li>
                <li>Quote templates</li>
              </ul>
              <Link href="#waitlist" className="btn btn-primary">Join the waitlist</Link>
            </div>
            <div className="card price-card">
              <div className="p-name">Pro</div>
              <div className="p-price">$49</div>
              <div className="p-per">per month</div>
              <ul>
                <li>Everything in Starter</li>
                <li>All trades & calculators</li>
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
          <h2 className="h2">Questions, answered</h2>
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
          <h2 className="h2">Be first in when your trade launches</h2>
          <p className="sub">
            Join the waitlist for launch pricing and to vote on which trade we
            build next.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
