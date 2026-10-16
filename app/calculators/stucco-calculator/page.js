import Link from "next/link";
import StuccoCalculator from "../../../components/StuccoCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Stucco Calculator — Repair Cost Estimator",
  description:
    "Free stucco calculator: wall area, coats, finish type, repair percentage and labor rate into a material + labor estimate. Built for contractors.",
  keywords: [
    "stucco calculator",
    "stucco repair cost calculator",
    "stucco estimate calculator",
    "how much stucco do i need",
    "stucco cost estimator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/stucco-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Stucco Calculator | CalcBid",
    description:
      "Wall area, coats, finish type and repair percentage into a material + labor estimate. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/stucco-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stucco Calculator | CalcBid",
    description: "Wall area, coats, finish and repair percentage into a material + labor estimate. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How do you estimate a stucco repair job?",
    a: "Measure the wall area, estimate what percentage actually needs repair (not the whole wall), count the coats the system needs, and apply material cost per square foot for the finish type plus your hourly rate. The calculator above runs exactly that math and ranges the total.",
  },
  {
    q: "How much stucco material do I need per square foot?",
    a: "Roughly $1.80–$2.60 per square foot per coat in cement, wire lath, and primer, depending on the finish — smooth is cheapest, lace and dash run higher. Multiply by coats: a two-coat patch on 80 sq ft is about $290–$420 in materials.",
  },
  {
    q: "What do stucco contractors charge per hour?",
    a: "Most stucco pros charge $40–$60 per hour, and a typical repair takes 5–12 hours of hands-on work — before curing time between coats, which is why even a modest patch often spans two or three calendar days.",
  },
  {
    q: "How many coats does stucco need?",
    a: "Traditional three-coat stucco (scratch, brown, finish) is the full system; repairs often use two coats where the base layers are sound. One coat is a patch, not a system — it fails early.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Stucco Calculator — CalcBid",
  url: "https://calcbid.com/calculators/stucco-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free stucco calculator for contractors: wall area, coats, finish type, repair percentage and labor rate into a material + labor estimate.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function StuccoCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Stucco Calculator", href: "/calculators/stucco-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Stucco calculator</h1>
        <p className="sub">
          Wall area in, stucco repair estimate out — coats, finish type, repair
          percentage, and labor. Then send it straight into a quote.
        </p>
        <StuccoCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates stucco
          materials and labor from the numbers you punch in — damage depth is
          what moves real stucco jobs, so verify against your inspection
          before quoting.
        </p>
        <Faq items={faqs} heading="Questions stucco contractors actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/stucco-repair-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Stucco Repair Cost</Link>
          {" · "}
          <Link href="/guides/siding-cost-per-square-foot" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Siding Cost Per Sq Ft</Link>
          {" · "}
          <Link href="/guides/cost-to-paint-house-exterior" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Exterior House Painting Cost</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional stucco quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
