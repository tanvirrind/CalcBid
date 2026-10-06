import Link from "next/link";
import PressureWashingCalculator from "../../../components/PressureWashingCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Pressure Washing Calculator — Price Any Job",
  description:
    "Free pressure washing calculator: price per sq ft by surface type, time on site, and minimum charge. Built for contractors.",
  keywords: [
    "pressure washing calculator",
    "power washing cost calculator",
    "pressure washing estimate calculator",
    "power washing cost per square foot",
    "how much to charge for pressure washing",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/pressure-washing-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Pressure Washing Calculator | CalcBid",
    description:
      "Price any pressure washing job by surface type — time, rate, and minimum charge. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/pressure-washing-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Calculator | CalcBid",
    description: "Price any pressure washing job by surface type — time, rate, and minimum charge. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much should I charge for pressure washing per square foot?",
    a: "Typical US rates: concrete/driveways $0.15–$0.35, house siding $0.20–$0.40, wood decks $0.25–$0.50, roof soft wash $0.30–$0.60 per sq ft. Set a minimum charge ($125–$200) so small jobs stay worth the trip.",
  },
  {
    q: "How long does it take to pressure wash a driveway?",
    a: "A standard 2-car driveway (~400–600 sq ft) takes 1–2 hours including setup. Figure roughly 300–500 sq ft per hour depending on how dirty the surface is.",
  },
  {
    q: "Pressure washing vs. soft washing — what's the difference?",
    a: "Pressure washing uses high-pressure water for hard surfaces like concrete. Soft washing uses low pressure plus detergents for roofs and siding — safer, and you should charge more for it.",
  },
  {
    q: "Should I charge by the hour or by the square foot?",
    a: "By the square foot for standard jobs — clients understand it and you get faster at quoting. Use hourly only for unusual work like graffiti removal or multi-story commercial.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pressure Washing Calculator — CalcBid",
  url: "https://calcbid.com/calculators/pressure-washing-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free pressure washing calculator for contractors: price per sq ft by surface type, time on site, and minimum charge.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function PressureWashingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Pressure Washing Calculator", href: "/calculators/pressure-washing-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Pressure washing calculator</h1>
        <p className="sub">
          Area and surface in, job price out — with your rate, minimum
          charge, and time on site. Then send it straight into a quote.
        </p>
        <PressureWashingCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This prices the job from the
          numbers you punch in — adjust for access difficulty, water supply,
          and local competition before quoting.
        </p>
        <Faq items={faqs} heading="Questions pressure washing pros actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your price?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional pressure washing quote
          </Link>{" "}
          and send it before you leave the driveway.
        </p>
      </div>
    </section>
  );
}
