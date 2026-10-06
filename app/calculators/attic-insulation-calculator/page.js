import Link from "next/link";
import AtticInsulationCalculator from "../../../components/AtticInsulationCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Attic Insulation Calculator — Bags & Cost",
  description:
    "Free attic insulation calculator: blown-in bags needed by R-value, depth in inches, and installed cost. Built for contractors.",
  keywords: [
    "attic insulation calculator",
    "blown in insulation calculator",
    "how many bags of insulation do i need",
    "blown insulation calculator",
    "attic insulation cost calculator",
    "how much insulation do i need",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/attic-insulation-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Attic Insulation Calculator | CalcBid",
    description:
      "Blown-in bags by R-value, depth in inches, and installed cost. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/attic-insulation-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attic Insulation Calculator | CalcBid",
    description: "Blown-in bags by R-value, depth in inches, and installed cost. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How many bags of blown insulation do I need?",
    a: "It depends on your attic size and how much R-value you're adding. A 1,200 sq ft attic going from R-11 to R-38 needs roughly 30–35 bags of cellulose or 20–25 bags of fiberglass. The calculator above works it out from your exact numbers, plus 10% extra.",
  },
  {
    q: "What R-value should attic insulation be?",
    a: "The DOE recommends R-38 (about 10–14 inches of blown insulation) for most of the US, and R-49 in the coldest zones. Check your local energy code — it varies by climate zone.",
  },
  {
    q: "Blown cellulose vs. fiberglass — which is better?",
    a: "Cellulose is cheaper per R-value and fills gaps well, but settles over time. Fiberglass doesn't settle and is lighter on old ceilings. Both hit the same R-values; the choice usually comes down to price and what your supplier stocks.",
  },
  {
    q: "How much does it cost to insulate an attic?",
    a: "Pro-installed blown insulation runs $1.50–$3.50 per sq ft in 2026 — so $1,800–$4,200 for a typical 1,200 sq ft attic. DIY with a free loaner blower cuts that roughly in half, to materials plus a weekend.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Attic Insulation Calculator — CalcBid",
  url: "https://calcbid.com/calculators/attic-insulation-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free attic insulation calculator for contractors: blown-in bags needed by R-value, depth in inches, and installed cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function AtticInsulationCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Attic Insulation Calculator", href: "/calculators/attic-insulation-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Attic insulation calculator</h1>
        <p className="sub">
          Attic size and R-values in, bag count and installed cost out —
          for blown cellulose or fiberglass. Then send it straight into a quote.
        </p>
        <AtticInsulationCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Bag coverage varies by brand
          and blower settings — always check the coverage chart on the bag
          you&apos;re actually buying before quoting.
        </p>
        <Faq items={faqs} heading="Questions insulation contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional insulation quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
