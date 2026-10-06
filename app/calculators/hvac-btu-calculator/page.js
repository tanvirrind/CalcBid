import Link from "next/link";
import HvacCalculator from "../../../components/HvacCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "BTU Calculator — What Size AC Do I Need?",
  description:
    "Free BTU calculator: find the right AC size for any room from square footage, climate, insulation, and sun exposure. Built for contractors.",
  keywords: [
    "btu calculator",
    "what size ac do i need",
    "ac size calculator",
    "what size air conditioner do i need",
    "hvac load calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/hvac-btu-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "BTU Calculator — What Size AC Do I Need? | CalcBid",
    description:
      "Cooling and heating BTU for any space, sized to the right tonnage — then send it as a professional HVAC quote.",
    url: "https://calcbid.com/calculators/hvac-btu-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTU Calculator — What Size AC Do I Need? | CalcBid",
    description: "Cooling and heating BTU for any space, sized to the right tonnage — then send it as a professional HVAC quote.",
  },
};

const faqs = [
  {
    q: "What size AC do I need for 1,000 square feet?",
    a: "Roughly 20,000 BTU, or about 1.7 tons — so a 2-ton unit. The rule of thumb is 20 BTU per square foot for cooling, adjusted up for hot climates, poor insulation, sunny rooms, and kitchens. Punch your exact space into the calculator above for a number that accounts for all of that.",
  },
  {
    q: "How many BTU per square foot do I need?",
    a: "For cooling, about 20 BTU per square foot is the standard starting point. For heating, it runs 25–50 BTU per square foot depending on climate — around 25 in mild regions, 35 in moderate ones, and 50 where winters are harsh.",
  },
  {
    q: "Is it bad to oversize an air conditioner?",
    a: "Yes. An oversized AC cools the air too fast and shuts off before it dehumidifies — leaving the space cold and clammy, and short-cycling wears the compressor out faster. Slightly undersized beats oversized for comfort; the calculator rounds up only to the nearest half ton.",
  },
  {
    q: "How much does AC installation cost per ton?",
    a: "In the US, a full system replacement typically runs $2,500–$4,000 per ton installed, depending on equipment efficiency (SEER2 rating), ductwork condition, and region. A 3-ton system commonly lands $7,500–$12,000 all-in.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BTU Calculator — CalcBid",
  url: "https://calcbid.com/calculators/hvac-btu-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free BTU calculator for HVAC contractors: cooling and heating load for any space, recommended tonnage, and installed cost estimates.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function HvacCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "HVAC BTU Calculator", href: "/calculators/hvac-btu-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">HVAC / BTU calculator</h1>
        <p className="sub">
          Room size, climate, insulation, and sun in — cooling BTU, heating
          BTU, and the right tonnage out. Then send it straight into a quote.
        </p>
        <HvacCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates load from the
          numbers you punch in — run a proper Manual J calculation and check
          local code before sizing equipment or quoting a system.
        </p>
        <Faq items={faqs} heading="Questions HVAC contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your tonnage?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional HVAC quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
