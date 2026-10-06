import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Free Calculators — Paint, Roofing, Tile & More",
  description:
    "Free contractor calculators: paint, roofing, tile, deck & fence, HVAC/BTU, concrete & drywall. Every result feeds a client-ready quote.",
  keywords: [
    "contractor calculators",
    "construction calculators",
    "paint calculator",
    "roofing calculator",
    "deck calculator",
    "btu calculator",
    "concrete calculator",
    "trade calculators",
  ],
  alternates: { canonical: "https://calcbid.com/calculators" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Free Contractor Calculators — Paint, Roofing & More | CalcBid",
    description:
      "Six free material calculators for contractors: paint, roofing, tile, deck & fence, HVAC/BTU, concrete & drywall. Every result feeds a client-ready quote.",
    url: "https://calcbid.com/calculators",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Contractor Calculators — Paint, Roofing & More | CalcBid",
    description: "Six free material calculators for contractors: paint, roofing, tile, deck & fence, HVAC/BTU, concrete & drywall. Every result feeds a client-ready quote.",
  },
};

const calcs = [
  { name: "Paint calculator", note: "Gallons, coats, labor & job cost", href: "/calculators/paint-calculator" },
  { name: "Roofing calculator", note: "Squares, shingles, tear-off & labor", href: "/calculators/roofing-calculator" },
  { name: "Tile & flooring calculator", note: "Tiles, boxes, cuts & labor", href: "/calculators/tile-flooring-calculator" },
  { name: "Deck & fence calculator", note: "Boards, posts, pickets & concrete", href: "/calculators/deck-fence-calculator" },
  { name: "HVAC / BTU calculator", note: "Load sizing per room", href: "/calculators/hvac-btu-calculator" },
  { name: "Concrete & drywall calculator", note: "Yards, sheets & mud", href: "/calculators/concrete-drywall-calculator" },
  { name: "Siding calculator", note: "Squares, materials & labor", href: "/calculators/siding-calculator" },
  { name: "Pressure washing calculator", note: "Price any wash job", href: "/calculators/pressure-washing-calculator" },
  { name: "Attic insulation calculator", note: "Bags, R-value & cost", href: "/calculators/attic-insulation-calculator" },
  { name: "Gutter calculator", note: "Linear feet, downspouts & guards", href: "/calculators/gutter-calculator" },
  { name: "Fence staining calculator", note: "Stain gallons & job cost", href: "/calculators/fence-staining-calculator" },
  { name: "Window replacement calculator", note: "Per-window & whole-house cost", href: "/calculators/window-replacement-calculator" },
  { name: "Epoxy garage floor calculator", note: "Kits, DIY vs pro", href: "/calculators/epoxy-garage-floor-calculator" },
  { name: "Paver calculator", note: "Pavers, base & labor", href: "/calculators/paver-calculator" },
  { name: "Water heater calculator", note: "Sizing & installed cost", href: "/calculators/water-heater-calculator" },
  { name: "Mulch calculator", note: "Cubic yards & bags", href: "/calculators/mulch-calculator" },
];

export default function CalculatorsHub() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }]} />
        <div className="kicker">Free calculators</div>
        <h1 className="h2">One pad, every trade you work</h1>
        <p className="sub">
          Punch in the job, get exact materials and costs. Every calculator
          feeds straight into a client-ready quote.
        </p>
        <div className="grid3">
          {calcs.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="card trade"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <div className="t-name">{c.name}</div>
                <div className="t-note">{c.note}</div>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ color: "var(--muted)", marginTop: 26, maxWidth: 640 }}>
          On the waitlist? Tell us your trade and it genuinely decides what we
          build next. <Link href="/#waitlist">Join here</Link>.
        </p>
      </div>
    </section>
  );
}
