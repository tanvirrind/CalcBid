import HvacCalculator from "../../../../components/HvacCalculator";
import LeadForm from "../../../../components/LeadForm";
import Faq, { faqJsonLd } from "../../../../components/Faq";
import JsonLd from "../../../../components/JsonLd";
import Breadcrumbs from "../../../../components/Breadcrumbs";

export const metadata = {
  title: "HVAC Contractors in El Paso, TX — Free Quotes",
  description:
    "Find HVAC contractors in El Paso, TX. Local 2026 AC replacement & mini-split pricing, plus a free sizing calculator.",
  keywords: [
    "hvac contractors el paso tx",
    "ac repair el paso",
    "air conditioning installation el paso",
    "mini split installation el paso tx",
    "el paso hvac cost",
  ],
  alternates: { canonical: "https://calcbid.com/contractors/hvac/el-paso-tx" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "HVAC Contractors in El Paso, TX | CalcBid",
    description:
      "Local El Paso HVAC pricing, a free AC sizing calculator, and quotes from local pros.",
    url: "https://calcbid.com/contractors/hvac/el-paso-tx",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Contractors in El Paso, TX | CalcBid",
    description: "Local El Paso HVAC pricing, a free AC sizing calculator, and quotes from local pros.",
  },
};

const faqs = [
  {
    q: "Swamp cooler or refrigerated air in El Paso?",
    a: "Swamp (evaporative) coolers are cheap to run but only work in dry heat — during monsoon season (July–September) when humidity spikes, they blow warm damp air. Most of El Paso has converted or is converting to refrigerated air. If your cooler is 10+ years old, price the conversion: a 3-ton system replacement runs $7,000–$12,000 installed.",
  },
  {
    q: "What size AC do I need in El Paso?",
    a: "Desert heat pushes sizing up: roughly 1 ton per 400–500 sq ft for a well-insulated El Paso home, versus 500–600 in milder climates. A 2,000 sq ft home typically needs 4–5 tons. Oversizing causes short-cycling and humidity problems — get a Manual J load calculation, not a rule of thumb.",
  },
  {
    q: "Do I need a permit for HVAC work in El Paso?",
    a: "Yes — mechanical permits for system replacements go through the City of El Paso Planning & Inspections. Change-outs also trigger current code requirements (which is why conversions from swamp coolers often need new electrical and ductwork). Licensed contractors handle permits as part of the job.",
  },
  {
    q: "How much does AC replacement cost in El Paso?",
    a: "Full system replacement: $7,000–$12,000 for most homes in 2026, depending on tonnage, SEER2 rating, and whether ductwork needs replacing. Duct replacement adds $3,000–$7,000. Mini-splits run $2,500–$5,000 per zone — popular for additions and garage conversions.",
  },
  {
    q: "How do I keep my AC alive in El Paso dust?",
    a: "Change filters monthly in summer — dust storms clog them fast. Hose down the condenser coils each spring before the heat hits, and get a yearly tune-up; a $100 maintenance visit catches the capacitor and contactor failures that strand people in August.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Contractors in El Paso, TX",
  url: "https://calcbid.com/contractors/hvac/el-paso-tx",
  provider: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
  areaServed: { "@type": "City", name: "El Paso", containedInPlace: { "@type": "State", name: "Texas" } },
  description:
    "Connect with HVAC contractors in El Paso, Texas for AC replacement, mini-splits, and swamp-cooler conversions. Free local cost calculator and quote requests.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ElPasoHvacPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={serviceJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Contractors", href: "/contractors" },
          { label: "HVAC", href: "/contractors/hvac/el-paso-tx" },
          { label: "El Paso, TX", href: "/contractors/hvac/el-paso-tx" },
        ]} />
        <div className="kicker">El Paso, Texas</div>
        <h1 className="h2">HVAC contractors in El Paso, TX</h1>
        <p className="sub">
          AC replacement, mini-splits, and swamp-cooler conversions priced for
          the Chihuahuan Desert — with a free sizing calculator and quotes from local pros.
        </p>

        <h2>What HVAC work costs in El Paso (2026)</h2>
        <p>
          El Paso is one of the hottest major cities in the country — 100°F+
          days are routine from May through September, and AC isn&apos;t
          comfort here, it&apos;s survival. That urgency shapes the market:
          summer breakdowns command premium pricing, and the smart money does
          replacements in the shoulder seasons. As of October 2026:
        </p>
        <ul>
          <li><strong>Full AC system replacement:</strong> $7,000–$12,000 installed (3–5 ton, most homes)</li>
          <li><strong>Swamp-cooler-to-refrigerated-air conversion:</strong> $8,000–$14,000 — new electrical, ductwork, and pad included</li>
          <li><strong>Mini-split, per zone:</strong> $2,500–$5,000 — the go-to for additions and converted garages</li>
          <li><strong>Duct replacement:</strong> $3,000–$7,000 when the old ducts are undersized or leaking</li>
        </ul>
        <p>
          The conversion story is the big local dynamic. Thousands of El Paso
          homes still run evaporative coolers, and every monsoon season reminds
          their owners why: swamp coolers quit when humidity arrives. Contractors
          here sell conversions all summer, and the economics work — refrigerated
          air uses more electricity but actually cools in August, which is rather
          the point.
        </p>

        <h2>Size your system</h2>
        <p>
          The calculator below is set to hot-desert climate with El Paso-area
          installed rates. Desert heat pushes sizing up — don&apos;t let anyone
          quote tonnage without a load calculation.
        </p>
        <HvacCalculator defaultClimate="hot" defaultInstallPerTon="3200" />

        <h2>El Paso specifics</h2>
        <ul>
          <li><strong>Permits:</strong> mechanical permits via City of El Paso Planning &amp; Inspections. Conversions trigger current-code electrical and duct requirements.</li>
          <li><strong>Refrigerant:</strong> new systems use R-454B (R-410A is phased down). If a bidder quotes R-410A equipment in late 2026, ask questions.</li>
          <li><strong>Dust:</strong> monthly filter changes in summer, coil cleaning each spring. Dust storms are an HVAC maintenance schedule all by themselves.</li>
          <li><strong>Monsoon season:</strong> July–September humidity is when swamp coolers fail and conversion quotes spike. Book shoulder-season for better pricing.</li>
          <li><strong>Fort Bliss turnover:</strong> constant PCS moves mean steady demand — established local shops stay booked, which is both a scheduling note and a vetting signal.</li>
        </ul>

        <h2>Choosing an El Paso HVAC contractor</h2>
        <p>
          Demand a Manual J load calculation — any contractor sizing by
          &ldquo;tons per square foot&rdquo; alone is guessing, and oversized
          systems short-cycle themselves to an early grave in this climate. Ask
          about the SEER2 rating (higher = lower summer electric bills, which
          are the real cost here), what happens to your ductwork, and who pulls
          the permit. Texas requires HVAC contractors to hold a state license
          (TACL) — verify it; the number should be on their truck, their card,
          and their quote.
        </p>

        <div style={{ marginTop: 32 }}>
          <LeadForm trade="hvac" city="el-paso-tx" cityLabel="El Paso, TX" tradeLabel="HVAC" />
        </div>

        <p className="disclaimer" style={{ marginTop: 24 }}>
          <strong>Ballpark, not gospel.</strong> El Paso pricing updated October 2026
          from regional contractor rates — summer emergency premiums and duct conditions move bids. Always get it in writing.
        </p>

        <Faq items={faqs} heading="El Paso HVAC questions, answered" />
      </div>
    </section>
  );
}
