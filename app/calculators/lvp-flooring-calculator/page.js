import Link from "next/link";
import LvpCalculator from "../../../components/LvpCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "LVP Calculator — Boxes, Materials & Cost",
  description:
    "Free LVP calculator: room size, plank cost, underlayment, waste and install method into boxes needed plus material + labor cost. Built for contractors.",
  keywords: [
    "lvp calculator",
    "luxury vinyl plank calculator",
    "vinyl plank flooring calculator",
    "how many boxes of lvp do i need",
    "lvp cost calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/lvp-flooring-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "LVP Calculator | CalcBid",
    description:
      "Room size, plank cost, underlayment, waste and install method into boxes needed and job cost. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/lvp-flooring-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVP Calculator | CalcBid",
    description: "Room size, plank cost, waste and install method into boxes needed and job cost. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How many boxes of LVP do I need?",
    a: "Divide the room's square footage (plus 10% waste) by 20 — most LVP boxes cover about 20 sq ft. A 500 sq ft room with 10% waste needs 550 sq ft, or 28 boxes. The calculator above rounds up automatically.",
  },
  {
    q: "How much waste should I add for LVP?",
    a: "10% is standard for straight-lay rooms. Bump to 12–15% for diagonal patterns, herringbone, or rooms with lots of jogs and doorways — every angle eats a plank.",
  },
  {
    q: "What does LVP cost per square foot installed?",
    a: "$4–$10 per sq ft in 2026: $2–$5 for materials and $2–$5 for labor. Budget grades land near the bottom, premium 20-mil rigid-core near the top.",
  },
  {
    q: "Do I need underlayment under LVP?",
    a: "Only if your planks don't have a pad attached. Many rigid-core LVP products ship with attached underlayment — adding a second layer can void the warranty. If needed, budget about $0.50 per sq ft.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "LVP Calculator — CalcBid",
  url: "https://calcbid.com/calculators/lvp-flooring-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free LVP calculator for contractors: room size, plank cost, underlayment, waste and install method into boxes needed plus material + labor cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function LvpCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "LVP Calculator", href: "/calculators/lvp-flooring-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">LVP calculator</h1>
        <p className="sub">
          Room size in, boxes and installed cost out — plank grade, waste,
          underlayment, and pro vs. DIY. Then send it straight into a quote.
        </p>
        <LvpCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates LVP boxes,
          materials, and labor from the numbers you punch in — demo, subfloor
          leveling, and stairs are separate line items on every real bid.
        </p>
        <Faq items={faqs} heading="Questions flooring contractors actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/lvp-flooring-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>LVP Flooring Cost</Link>
          {" · "}
          <Link href="/guides/floor-tile-installation-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Floor Tile Installation Cost</Link>
          {" · "}
          <Link href="/guides/how-to-quote-tile-job" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>How to Quote a Tile Job</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional flooring quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
