import Link from "next/link";

export const metadata = {
  title: "Free Contractor Calculators — Paint, Roofing & More",
  description:
    "Free construction calculators for contractors: paint quantity, roofing squares and cost, plus tile, deck, HVAC and concrete tools coming soon.",
  keywords: [
    "contractor calculators",
    "construction calculators",
    "paint calculator",
    "roofing calculator",
    "trade calculators",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/" },
  openGraph: {
    title: "Free Contractor Calculators — Paint, Roofing & More | CalcBid",
    description:
      "Free material calculators for contractors: paint, roofing squares and job costs. Every result feeds a client-ready quote.",
    url: "https://calcbid.com/calculators/",
  },
};

const calcs = [
  {
    name: "Paint calculator",
    note: "Gallons, coats, labor & job cost",
    href: "/calculators/paint-calculator",
    live: true,
  },
  {
    name: "Roofing calculator",
    note: "Squares, shingles, tear-off & labor",
    href: "/calculators/roofing-calculator",
    live: true,
  },
  { name: "Tile & flooring calculator", note: "Tiles, boxes, cuts & labor", href: "/calculators/tile-flooring-calculator", live: true },
  { name: "Deck & fence calculator", note: "Boards, posts & concrete", live: false },
  { name: "HVAC / BTU calculator", note: "Load sizing per room", live: false },
  { name: "Concrete & drywall calculator", note: "Yards, sheets & mud", live: false },
];

export default function CalculatorsHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Free calculators</div>
        <h1 className="h2">One pad, every trade you work</h1>
        <p className="sub">
          Punch in the job, get exact materials and costs. Every calculator
          feeds straight into a client-ready quote.
        </p>
        <div className="grid3">
          {calcs.map((c) => {
            const inner = (
              <>
                <div>
                  <div className="t-name">{c.name}</div>
                  <div className="t-note">{c.note}</div>
                </div>
                <span className={`stamp ${c.live ? "live" : "soon"}`}>
                  {c.live ? "Live" : "Soon"}
                </span>
              </>
            );
            return c.live ? (
              <Link
                key={c.name}
                href={c.href}
                className="card trade"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {inner}
              </Link>
            ) : (
              <div className="card trade" key={c.name} style={{ opacity: 0.85 }}>
                {inner}
              </div>
            );
          })}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          On the waitlist? Tell us your trade and it genuinely decides what we
          build next. <Link href="/#waitlist">Join here</Link>.
        </p>
      </div>
    </section>
  );
}
