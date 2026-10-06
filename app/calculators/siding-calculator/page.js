import Link from "next/link";
import SidingCalculator from "../../../components/SidingCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Siding Calculator — Cost & Squares Estimator",
  description:
    "Free siding calculator: siding squares, material and labor cost for vinyl, fiber cement, wood or metal siding. Built for contractors.",
  keywords: [
    "siding calculator",
    "siding cost calculator",
    "vinyl siding calculator",
    "how many squares of siding do i need",
    "siding squares calculator",
    "house siding cost estimator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/siding-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Siding Calculator | CalcBid",
    description:
      "Siding squares, material and labor cost for vinyl, fiber cement, wood or metal. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/siding-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siding Calculator | CalcBid",
    description: "Siding squares, material and labor cost for vinyl, fiber cement, wood or metal. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How many squares of siding do I need?",
    a: "Measure each exterior wall (length × height), add them up, subtract about 15% for windows and doors, then divide by 100 — one square covers 100 sq ft. A 1,800 sq ft wall area with typical openings needs about 15.3 squares before waste; add 10% waste for cuts.",
  },
  {
    q: "How much does siding cost per square foot installed?",
    a: "Installed, vinyl runs roughly $8–$12 per sq ft, fiber cement $12–$18, wood/cedar $15–$22, and metal $12–$16. Material alone is about half of that. The calculator above breaks out materials vs. labor for each type.",
  },
  {
    q: "How much siding waste should I order?",
    a: "10% is the standard for straightforward walls. Bump to 15% for houses with lots of gables, dormers, or angled cuts — every angle eats a board.",
  },
  {
    q: "Vinyl vs. fiber cement siding — which should I quote?",
    a: "Vinyl wins on price and speed; fiber cement wins on durability, fire resistance, and perceived value. In 2026, fiber cement is the most common upsell — quote both and let the homeowner choose.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Siding Calculator — CalcBid",
  url: "https://calcbid.com/calculators/siding-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free siding calculator for contractors: siding squares, material and labor cost for vinyl, fiber cement, wood or metal siding.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function SidingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Siding Calculator", href: "/calculators/siding-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Siding calculator</h1>
        <p className="sub">
          Wall area in, siding squares and installed cost out — for vinyl,
          fiber cement, wood, or metal. Then send it straight into a quote.
        </p>
        <SidingCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates siding squares,
          materials, and labor from the numbers you punch in — always verify
          against your supplier&apos;s specs and your own measurements before
          ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions siding contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional siding quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
