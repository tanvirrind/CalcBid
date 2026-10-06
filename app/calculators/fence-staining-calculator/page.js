import Link from "next/link";
import FenceStainingCalculator from "../../../components/FenceStainingCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Fence Staining Calculator — Cost Estimator",
  description:
    "Free fence staining calculator: stain gallons, material and labor cost per linear foot. Built for contractors.",
  keywords: [
    "fence staining calculator",
    "fence staining cost calculator",
    "cost to stain a fence",
    "how much does it cost to stain a fence",
    "fence stain cost per linear foot",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/fence-staining-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Fence Staining Calculator | CalcBid",
    description:
      "Stain gallons and cost per linear foot — one or both sides. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/fence-staining-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fence Staining Calculator | CalcBid",
    description: "Stain gallons and cost per linear foot — one or both sides. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to stain a fence per linear foot?",
    a: "Pro fence staining runs $3–$7 per linear foot for a 6-foot fence (both sides, one coat), or roughly $1.50–$3.50 per sq ft. Stain alone is $0.50–$1.00 per sq ft — labor is the bulk of the price.",
  },
  {
    q: "How much stain do I need for a fence?",
    a: "Fence area (length × height × sides) divided by the stain's coverage — usually 150–300 sq ft per gallon. A 150-foot, 6-foot fence stained both sides is 1,800 sq ft, needing about 8 gallons at 250 sq ft/gal plus 10% waste.",
  },
  {
    q: "Should I spray or brush fence stain?",
    a: "Spray for speed, then back-brush — it pushes stain into the grain and avoids the thin, uneven coat spraying alone leaves. Quote spraying labor rates but budget the back-brush time.",
  },
  {
    q: "How often does a fence need restaining?",
    a: "Every 2–4 years depending on sun exposure and stain quality. That's a built-in repeat customer — note the date on every staining quote and follow up.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fence Staining Calculator — CalcBid",
  url: "https://calcbid.com/calculators/fence-staining-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free fence staining calculator for contractors: stain gallons, material and labor cost per linear foot.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function FenceStainingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Fence Staining Calculator", href: "/calculators/fence-staining-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Fence staining calculator</h1>
        <p className="sub">
          Fence length and height in, stain gallons and job cost out — one
          side or both. Then send it straight into a quote.
        </p>
        <FenceStainingCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates stain and labor
          from the numbers you punch in — weathered wood drinks more stain,
          so check the can&apos;s coverage and the fence&apos;s condition.
        </p>
        <Faq items={faqs} heading="Questions fence pros actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your price?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional fence staining quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
