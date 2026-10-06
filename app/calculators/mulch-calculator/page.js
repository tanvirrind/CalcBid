import Link from "next/link";
import MulchCalculator from "../../../components/MulchCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Mulch Calculator — Cubic Yards & Bags",
  description:
    "Free mulch calculator: cubic yards and bags needed by bed area and depth, bulk vs bag cost. Built for contractors.",
  keywords: [
    "mulch calculator",
    "how much mulch do i need",
    "cubic yards of mulch calculator",
    "how many bags of mulch do i need",
    "topsoil calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/mulch-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Mulch Calculator | CalcBid",
    description:
      "Cubic yards and bags by bed area and depth — bulk vs. bag cost compared. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/mulch-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulch Calculator | CalcBid",
    description: "Cubic yards and bags by bed area and depth — bulk vs. bag cost compared. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much mulch do I need?",
    a: "Multiply bed area (sq ft) by depth in inches, divide by 324 — that's cubic yards. A 500 sq ft bed at 3 inches needs about 4.6 cubic yards. One yard covers roughly 100 sq ft at 3 inches deep.",
  },
  {
    q: "How many bags of mulch equal a cubic yard?",
    a: "About 13.5 two-cubic-foot bags make one cubic yard. For anything over a yard, bulk delivery is far cheaper than bags — the calculator above shows the savings.",
  },
  {
    q: "How deep should mulch be?",
    a: "3 inches for maintaining existing beds, 4–6 inches for new beds or weed suppression. More than 4 inches around tree trunks causes rot — keep the 'mulch volcano' away from bark.",
  },
  {
    q: "How much does it cost to mulch a yard?",
    a: "Pro mulching runs $0.75–$1.50 per sq ft installed in 2026, including materials. A 500 sq ft bed job typically quotes $500–$900 with bulk mulch and spreading labor.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mulch Calculator — CalcBid",
  url: "https://calcbid.com/calculators/mulch-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free mulch calculator for contractors: cubic yards and bags needed by bed area and depth, bulk vs bag cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function MulchCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Mulch Calculator", href: "/calculators/mulch-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Mulch calculator</h1>
        <p className="sub">
          Bed area and depth in, cubic yards and bags out — with bulk vs.
          bag cost compared. Then send it straight into a quote.
        </p>
        <MulchCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Bulk prices vary by supplier
          and region — confirm delivery fees before quoting.
        </p>
        <Faq items={faqs} heading="Questions landscapers actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional landscaping quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
