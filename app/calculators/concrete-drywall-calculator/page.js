import Link from "next/link";
import ConcreteDrywallCalculator from "../../../components/ConcreteDrywallCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Concrete Calculator — Yards, Bags & Drywall Sheets",
  description:
    "Free concrete calculator: cubic yards to order or bags to buy for any slab — plus a drywall mode for sheets, mud, and tape. Built for contractors.",
  keywords: [
    "concrete calculator",
    "how many bags of concrete do i need",
    "cubic yards calculator",
    "drywall calculator",
    "how many drywall sheets do i need",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/concrete-drywall-calculator" },
  openGraph: {
    title: "Concrete & Drywall Calculator | CalcBid",
    description:
      "Cubic yards, bags, or drywall sheets — free material + labor estimates, then send it as a professional quote.",
    url: "https://calcbid.com/calculators/concrete-drywall-calculator",
  },
};

const faqs = [
  {
    q: "How many bags of concrete do I need?",
    a: "An 80 lb bag yields about 0.6 cubic feet. A 10×10 slab at 4 inches thick is 33.3 cubic feet — about 56 bags before waste, 62 with 10% waste. Past about 1 cubic yard, ready-mix delivery is cheaper than bags. The calculator shows both routes.",
  },
  {
    q: "How many cubic yards are in a 10x10 slab?",
    a: "A 10×10 slab at 4 inches thick is 1.23 cubic yards before waste — order 1.4 yards with a 10% waste factor. At 6 inches thick it's 1.85 yards, so order 2 yards.",
  },
  {
    q: "How many drywall sheets do I need for a 12x12 room?",
    a: "A 12×12 room with 8-foot ceilings has about 384 square feet of wall plus 144 for the ceiling — 528 total, minus doors and windows. That works out to 15–17 full 4×8 sheets. The calculator does the exact math from your room dimensions.",
  },
  {
    q: "How much does drywall installation cost per square foot?",
    a: "In the US, hanging and finishing drywall typically runs $1.50–$3.00 per square foot of drywall, depending on region and finish level. Materials add roughly $0.50–$1.00 per square foot.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Concrete & Drywall Calculator — CalcBid",
  url: "https://calcbid.com/calculators/concrete-drywall-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free concrete & drywall calculator for contractors: cubic yards, concrete bags, drywall sheets, mud, tape, and labor estimates.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ConcreteDrywallCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Concrete & drywall calculator</h1>
        <p className="sub">
          Switch between concrete and drywall mode. Dimensions in, yards,
          bags, sheets, and labor out — then send it straight into a quote.
        </p>
        <ConcreteDrywallCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates yards, bags,
          sheets, and costs from the numbers you punch in — always check
          against your supplier&apos;s specs and your own measurements before
          ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions concrete & drywall contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your quantities?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
