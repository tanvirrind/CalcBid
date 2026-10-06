import Link from "next/link";
import RoofingCalculator from "../../../components/RoofingCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Roofing Calculator — Replacement Cost Estimator",
  description:
    "Free roofing calculator: estimate roof squares, shingle bundles, tear-off and labor cost from footprint and pitch. Built for roofing contractors.",
  keywords: [
    "roofing calculator",
    "roof replacement cost calculator",
    "roofing squares calculator",
    "how many shingles do i need",
    "roof cost estimator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/roofing-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 1200,
        height: 630,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Roofing Calculator — Roof Replacement Cost Estimator | CalcBid",
    description:
      "Free roofing calculator: squares, shingle bundles, tear-off and labor from footprint and pitch.",
    url: "https://calcbid.com/calculators/roofing-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Calculator — Roof Replacement Cost Estimator | CalcBid",
    description: "Free roofing calculator: squares, shingle bundles, tear-off and labor from footprint and pitch.",
  },
};

const faqs = [
  {
    q: "What is a roofing square?",
    a: "One roofing square equals 100 square feet of roof surface. Roofers price materials and labor by the square, so a 2,000-square-foot roof is 20 squares. Shingles are sold by the bundle — it takes 3 bundles to cover one square.",
  },
  {
    q: "How many bundles of shingles do I need?",
    a: "Divide your roof area in squares by one and multiply by 3 — three bundles per square for standard 3-tab and architectural shingles. Then add your waste factor: 10% for a simple gable roof, 15% for a cut-up hip roof. A 20-square gable roof needs about 66 bundles.",
  },
  {
    q: "How do you measure roof pitch?",
    a: "Pitch is the rise over a 12-inch run — a 6/12 pitch rises 6 inches for every 12 inches across. Steeper pitch means more surface area: multiply the footprint by 1.15 for a 6/12, 1.30 for an 8/12, and up to 1.54 for a 12/12. The calculator above applies the multiplier for you.",
  },
  {
    q: "How much does a roof replacement cost?",
    a: "In the US, architectural shingle replacement typically runs $4.50–$7.50 per square foot installed, so a 2,000-square-foot roof lands around $9,000–$15,000. Tear-off of old layers, steep pitch, and decking repairs push it higher. Run your footprint and pitch through the calculator for a job-specific number.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Roofing Calculator — CalcBid",
  url: "https://calcbid.com/calculators/roofing-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free roofing calculator for contractors: roof squares, shingle bundles, tear-off and labor cost from footprint and pitch.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RoofingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Roofing Calculator", href: "/calculators/roofing-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Roofing calculator</h1>
        <p className="sub">
          Footprint and pitch in, squares and bundles out — with tear-off and
          labor priced the way roofers actually bid. Then send it straight
          into a quote.
        </p>
        <RoofingCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates squares, bundles,
          and costs from the numbers you punch in — always check against your
          supplier&apos;s specs and your own measurements before ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions roofers actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your squares?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional roofing quote
          </Link>{" "}
          and send it before you leave the driveway.
        </p>
      </div>
    </section>
  );
}
