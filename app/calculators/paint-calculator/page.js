import Link from "next/link";
import PaintCalculator from "../../../components/PaintCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Paint Calculator — How Much Paint Do You Need?",
  description:
    "Free paint calculator: find how many gallons of paint you need, estimate paint cost and labor for any room, and turn it into a client-ready quote.",
  keywords: [
    "paint calculator",
    "how much paint do i need",
    "paint coverage calculator",
    "painting cost calculator",
    "paint quantity calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/paint-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Paint Calculator — How Much Paint Do You Need? | CalcBid",
    description:
      "Free paint calculator: gallons, paint cost and labor for any room — then send it as a professional quote.",
    url: "https://calcbid.com/calculators/paint-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Calculator — How Much Paint Do You Need? | CalcBid",
    description: "Free paint calculator: gallons, paint cost and labor for any room — then send it as a professional quote.",
  },
};

const faqs = [
  {
    q: "How much paint do I need for a 12x12 room?",
    a: "A 12×12 room with 8-foot ceilings has about 384 square feet of wall space. Subtract roughly 35 square feet for a door and a window and you're near 350 — almost exactly one gallon per coat. Plan on two gallons for the standard two coats.",
  },
  {
    q: "How many square feet does a gallon of paint cover?",
    a: "About 350 square feet per gallon per coat for interior wall paint. Primer covers a little less, around 300 square feet per gallon. Rough or porous surfaces drink more — budget 10–15% extra on bare drywall or textured walls.",
  },
  {
    q: "How do I estimate what to charge for a painting job?",
    a: "Add up materials (gallons × price per gallon, plus primer, tape, and sundries), then labor (your hours × hourly rate), then apply your overhead and markup so the job protects your margin. The calculator above does the materials and labor math — the quote builder turns it into a number you can send.",
  },
  {
    q: "Does this paint calculator include primer?",
    a: "It estimates finish paint. As a rule of thumb, prime bare drywall, patched spots, and dramatic color changes, and budget primer at the same coverage — about 300 square feet per gallon. Add it as a line item in your quote so the client sees it.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Paint Calculator — CalcBid",
  url: "https://calcbid.com/calculators/paint-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free paint calculator for contractors: gallons needed, paint cost and labor from room dimensions.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function PaintCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Paint Calculator", href: "/calculators/paint-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Paint quantity calculator</h1>
        <p className="sub">
          Punch in the room, get the gallons and the job cost. Then send it
          straight into a quote your client can sign off on.
        </p>
        <PaintCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates materials from
          the numbers you punch in — always check against your supplier&apos;s
          specs and your own tape before ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions painters actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional painting quote
          </Link>{" "}
          your client can approve in minutes.
        </p>
      </div>
    </section>
  );
}
