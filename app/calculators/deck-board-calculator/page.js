import Link from "next/link";
import DeckBoardCalculator from "../../../components/DeckBoardCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Deck Board Calculator — Boards, Fasteners & Cost",
  description:
    "Free deck board calculator: deck size and board width to board count, linear feet, fastener count and material cost by pressure-treated, composite or PVC.",
  keywords: [
    "deck board calculator",
    "how many deck boards do i need",
    "decking calculator",
    "composite decking calculator",
    "deck material calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/deck-board-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck Board Calculator | CalcBid",
    description:
      "Deck size to board count, fasteners and material cost. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/deck-board-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Board Calculator | CalcBid",
    description: "Board count, linear feet, fasteners and cost. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How many deck boards do I need?",
    a: "Divide the deck width (in inches) by the board width plus your gap spacing to get the rows, then multiply by the number of boards per row for your deck length. A 16×12 deck with 5.5″ boards and a ¼″ gap needs 26 rows — with 16-foot boards that's 26 boards. The calculator above runs it for any size.",
  },
  {
    q: "What gap should I leave between deck boards?",
    a: "¼ inch is the standard for pressure-treated lumber, which shrinks as it dries. Composite and PVC often spec ⅛ inch. Never butt boards tight — trapped water rots joists.",
  },
  {
    q: "How much does decking material cost in 2026?",
    a: "Pressure-treated decking runs about $2.50 per square foot in materials; composite $6–$7; PVC $8–$9. Framing lumber, footings, and railings are on top of those numbers.",
  },
  {
    q: "Should deck boards run parallel to the house?",
    a: "Run boards perpendicular to the house along the longest span — it looks better, drains better, and wastes less lumber. Boards must cross joists every 16 inches, which is why your board length choice changes the count.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Deck Board Calculator — CalcBid",
  url: "https://calcbid.com/calculators/deck-board-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free deck board calculator for contractors: deck size to board count, linear feet, fastener count and material cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function DeckBoardCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Deck Board Calculator", href: "/calculators/deck-board-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Deck board calculator</h1>
        <p className="sub">
          Deck dimensions in, an order-ready board list out — rows, board
          count by length, fasteners, and material cost. Then send it straight
          into a quote.
        </p>
        <DeckBoardCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates decking surface
          materials from your dimensions — framing, footings, and railings are
          separate line items, so build those into the quote too.
        </p>
        <Faq items={faqs} heading="Questions deck builders actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/cost-to-install-deck-boards" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Cost to Install Deck Boards</Link>
          {" · "}
          <Link href="/guides/composite-deck-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Composite Deck Cost</Link>
          {" · "}
          <Link href="/guides/deck-repair-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Deck Repair Cost</Link>
          {" · "}
          <Link href="/calculators/deck-fence-calculator" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Deck & Fence Calculator</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your board count?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional deck quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
