import Link from "next/link";
import EpoxyCalculator from "../../../components/EpoxyCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Epoxy Garage Floor Cost Calculator (2026)",
  description:
    "Free epoxy garage floor calculator: kits needed, DIY vs pro installed cost. Built for contractors.",
  keywords: [
    "epoxy garage floor cost calculator",
    "cost to epoxy a garage floor",
    "how much does it cost to epoxy a 2 car garage",
    "garage floor epoxy calculator",
    "epoxy flooring cost per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/epoxy-garage-floor-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Epoxy Garage Floor Cost Calculator | CalcBid",
    description:
      "Kits needed, DIY cost, and pro installed price. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/epoxy-garage-floor-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Garage Floor Cost Calculator | CalcBid",
    description: "Kits needed, DIY cost, and pro installed price. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to epoxy a 2-car garage?",
    a: "DIY with quality kits runs $500–$1,000 for a 400–500 sq ft garage. Pro-installed epoxy costs $3–$12 per sq ft — $1,500–$5,000+ for the same garage — depending on prep work and coating system.",
  },
  {
    q: "How many epoxy kits do I need for a garage?",
    a: "Divide your square footage by the kit's coverage (usually 200–300 sq ft). A 450 sq ft garage needs 2 kits at 250 sq ft coverage. Buy the same batch for color consistency.",
  },
  {
    q: "How long does epoxy garage floor last?",
    a: "Pro-installed 100% solids epoxy lasts 10–20 years with normal use. DIY water-based kits last 2–5 years. Prep is everything — grinding beats etching every time.",
  },
  {
    q: "Can you epoxy over a stained or cracked garage floor?",
    a: "Stains need degreasing and etching first; cracks need filling. Oil-soaked concrete may never bond properly — that's when you quote a grind-and-seal or a polyaspartic system instead.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Epoxy Garage Floor Cost Calculator — CalcBid",
  url: "https://calcbid.com/calculators/epoxy-garage-floor-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free epoxy garage floor calculator for contractors: kits needed, DIY vs pro installed cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function EpoxyCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Epoxy Garage Floor Calculator", href: "/calculators/epoxy-garage-floor-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Epoxy garage floor calculator</h1>
        <p className="sub">
          Floor area in, kits and cost out — DIY breakdown and pro installed
          price side by side. Then send it straight into a quote.
        </p>
        <EpoxyCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Kit coverage and pro rates
          vary by product and region — verify with your supplier before quoting.
        </p>
        <Faq items={faqs} heading="Questions garage floor pros actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional epoxy quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
