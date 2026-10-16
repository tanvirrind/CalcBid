import Link from "next/link";
import ConcreteSlabCalculator from "../../../components/ConcreteSlabCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Concrete Slab Calculator — Yards, Bags & Cost",
  description:
    "Free concrete slab cost calculator: length, width and thickness to cubic yards, 60/80-lb bag counts and delivered cost. Built for contractors.",
  keywords: [
    "concrete slab calculator",
    "concrete slab cost calculator",
    "how much concrete do i need",
    "concrete cost calculator",
    "concrete yards calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/concrete-slab-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Concrete Slab Calculator | CalcBid",
    description:
      "Slab dimensions to cubic yards, bag counts and delivered cost. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/concrete-slab-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Slab Calculator | CalcBid",
    description: "Dimensions to yards, bags and delivered cost. Free, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much concrete do I need for a slab?",
    a: "Multiply length × width × thickness (in feet), divide by 27 to get cubic yards, then add 10% waste. A 20×12-foot slab at 4 inches needs about 3.3 cubic yards with waste. The calculator above runs the whole thing including the bag alternative.",
  },
  {
    q: "How many bags of concrete make a yard?",
    a: "Roughly 45 sixty-pound bags or 60 eighty-pound bags per cubic yard. Bags make sense under half a yard — beyond that, a ready-mix truck is cheaper per yard and far faster.",
  },
  {
    q: "How thick should a concrete slab be?",
    a: "Four inches handles patios, walkways, and sheds. Driveways and slabs carrying trucks need 6 inches, and structural slabs need rebar or mesh on top of the thickness. Never go under 4 inches for anything bearing weight.",
  },
  {
    q: "What does a concrete slab cost per square foot in 2026?",
    a: "Materials run about $4–$8 per square foot for a standard 4-inch slab; installed with forming, rebar, and finishing, expect $6–$12. Ready-mix delivered averages $150–$180 per cubic yard in 2026.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Concrete Slab Calculator — CalcBid",
  url: "https://calcbid.com/calculators/concrete-slab-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free concrete slab calculator for contractors: length, width and thickness to cubic yards, bag counts and delivered cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ConcreteSlabCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Concrete Slab Calculator", href: "/calculators/concrete-slab-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Concrete slab calculator</h1>
        <p className="sub">
          Slab dimensions in, order-ready concrete math out — cubic yards,
          bag counts, and delivered cost. Then send it straight into a quote.
        </p>
        <ConcreteSlabCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates concrete volume
          and delivered cost from your dimensions — grade overage and pump fees
          are what move real concrete jobs, so confirm with your supplier
          before ordering.
        </p>
        <Faq items={faqs} heading="Questions concrete contractors actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/concrete-paint-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Concrete Paint Cost</Link>
          {" · "}
          <Link href="/guides/cost-to-epoxy-garage" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Epoxy Garage Floor Cost</Link>
          {" · "}
          <Link href="/calculators/concrete-drywall-calculator" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Concrete & Drywall Calculator</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your yards?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional concrete quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
