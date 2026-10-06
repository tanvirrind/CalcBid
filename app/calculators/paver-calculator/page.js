import Link from "next/link";
import PaverCalculator from "../../../components/PaverCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Paver Calculator — Patio & Driveway Estimator",
  description:
    "Free paver calculator: paver count, base material, edging, and installed cost for patios and driveways. Built for contractors.",
  keywords: [
    "paver calculator",
    "how many pavers do i need",
    "patio paver calculator",
    "paver patio cost calculator",
    "paver installation cost per square foot",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/paver-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Paver Calculator | CalcBid",
    description:
      "Paver count, base, edging, and installed cost for patios and driveways. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/paver-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paver Calculator | CalcBid",
    description: "Paver count, base, edging, and installed cost for patios and driveways. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How many pavers do I need?",
    a: "Divide your square footage by the square footage of one paver, then add 7% for cuts. A 400 sq ft patio with 4×8 pavers (0.222 sq ft each) needs about 1,930 pavers. The calculator above does it for common paver sizes.",
  },
  {
    q: "How much does a paver patio cost per square foot?",
    a: "Installed paver patios run $10–$25 per sq ft in 2026 — $4,000–$10,000 for a 400 sq ft patio. Materials are $3–$8/sq ft; labor $6–$14. Driveways cost more due to deeper base requirements.",
  },
  {
    q: "How deep should the base be under pavers?",
    a: "4–6 inches of compacted gravel for patios and walkways, 8–12 inches for driveways, plus 1 inch of bedding sand. Skimping on base is the #1 cause of callbacks — quote the full depth.",
  },
  {
    q: "Do I need edge restraints for pavers?",
    a: "Yes — without them pavers migrate and the patio spreads. Budget about $2–$3 per linear foot of perimeter for plastic or aluminum edging, staked every foot.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Paver Calculator — CalcBid",
  url: "https://calcbid.com/calculators/paver-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free paver calculator for contractors: paver count, base material, edging, and installed cost for patios and driveways.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function PaverCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Paver Calculator", href: "/calculators/paver-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Paver calculator</h1>
        <p className="sub">
          Patio area and paver size in — paver count, base yards, and
          installed cost out. Then send it straight into a quote.
        </p>
        <PaverCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates pavers, base,
          and labor from the numbers you punch in — verify paver dimensions
          with your supplier before ordering.
        </p>
        <Faq items={faqs} heading="Questions hardscape contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional paver quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
