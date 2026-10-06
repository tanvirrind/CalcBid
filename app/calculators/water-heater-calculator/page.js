import Link from "next/link";
import WaterHeaterCalculator from "../../../components/WaterHeaterCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Water Heater Sizing Calculator — What Size?",
  description:
    "Free water heater sizing calculator: tank gallons or tankless BTU by household size, plus installed cost. Built for contractors.",
  keywords: [
    "water heater sizing calculator",
    "what size water heater do i need",
    "hot water heater size calculator",
    "tankless water heater sizing",
    "water heater installation cost",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/water-heater-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Water Heater Sizing Calculator | CalcBid",
    description:
      "Tank gallons or tankless BTU by household size, plus installed cost. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/water-heater-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Sizing Calculator | CalcBid",
    description: "Tank gallons or tankless BTU by household size, plus installed cost. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "What size water heater do I need?",
    a: "Rule of thumb: 1–2 people → 30–40 gallons, 3–4 people → 40–50 gallons, 5+ people → 50–75 gallons. What really matters is the first-hour rating — it should cover your peak simultaneous use (showers + dishwasher + laundry).",
  },
  {
    q: "How much does it cost to install a water heater?",
    a: "Tank water heaters run $1,100–$1,500 installed in 2026 ($500–$700 unit + ~$600 install). Tankless runs $3,500–$4,500+ installed — pricier upfront, cheaper to run.",
  },
  {
    q: "Tank vs. tankless water heater — which should I quote?",
    a: "Tanks win on upfront cost and simplicity. Tankless wins on endless hot water and efficiency, but needs gas line or electrical upgrades that add $500–$2,000. Quote both when the panel or gas line allows it.",
  },
  {
    q: "How long do water heaters last?",
    a: "Tank heaters: 8–12 years. Tankless: 15–20+ years with annual descaling. If the unit is over 10 years old and the quote is for a repair, price the replacement too — most clients choose it.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Water Heater Sizing Calculator — CalcBid",
  url: "https://calcbid.com/calculators/water-heater-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free water heater sizing calculator for contractors: tank gallons or tankless BTU by household size, plus installed cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function WaterHeaterCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Water Heater Calculator", href: "/calculators/water-heater-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Water heater sizing calculator</h1>
        <p className="sub">
          Household size in, correctly sized unit and installed cost out —
          tank or tankless, gas or electric. Then send it straight into a quote.
        </p>
        <WaterHeaterCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Sizing depends on peak demand
          and local code — verify gas line capacity and venting requirements
          before quoting tankless.
        </p>
        <Faq items={faqs} heading="Questions plumbing pros actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional water heater quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
