import ConcreteDrywallCalculator from "../../../../components/ConcreteDrywallCalculator";
import LeadForm from "../../../../components/LeadForm";
import Faq, { faqJsonLd } from "../../../../components/Faq";
import JsonLd from "../../../../components/JsonLd";
import Breadcrumbs from "../../../../components/Breadcrumbs";

export const metadata = {
  title: "Concrete Contractors in Boise, ID — Free Quotes",
  description:
    "Find concrete contractors in Boise, ID. Local 2026 pricing for driveways, patios & slabs, plus a free cost calculator.",
  keywords: [
    "concrete contractors boise id",
    "concrete companies boise",
    "driveway contractors boise idaho",
    "concrete patio boise",
    "boise concrete work cost",
  ],
  alternates: { canonical: "https://calcbid.com/contractors/concrete/boise-id" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Concrete Contractors in Boise, ID | CalcBid",
    description:
      "Local Boise concrete pricing, a free cost calculator, and quotes from local pros.",
    url: "https://calcbid.com/contractors/concrete/boise-id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Contractors in Boise, ID | CalcBid",
    description: "Local Boise concrete pricing, a free cost calculator, and quotes from local pros.",
  },
};

const faqs = [
  {
    q: "Do I need a permit for concrete work in Boise?",
    a: "It depends on the project. Driveway approaches that cross the public right-of-way need a permit from the City of Boise or Ada County Highway District; a backyard patio usually doesn't. Your contractor should know — if they shrug at the permit question, that's a red flag.",
  },
  {
    q: "How deep does concrete need to be for Boise winters?",
    a: "4 inches is standard for driveways and patios, 5–6 inches if you'll park heavy trucks on it. Footings need to go below the frost line — about 24 inches in the Boise area. Shallow footings heave when the ground freezes, and you'll see the cracks by spring.",
  },
  {
    q: "Can concrete be poured in winter in Boise?",
    a: "Yes, but it costs more. Below about 40°F the mix needs accelerators, heated enclosures, or insulated blankets — and the crew watches the forecast like hawks. Most Boise contractors prefer April through October; winter pours add 10–20% to the bid.",
  },
  {
    q: "Why does concrete crack so much in Idaho?",
    a: "Freeze-thaw cycles. Water gets into tiny pores, freezes, expands, and pops the surface — especially where de-icers are used. Proper air-entrained mix (standard for exterior Boise concrete), control joints every 8–12 feet, and sealing every 2–3 years prevent most of it.",
  },
  {
    q: "How thick should a Boise driveway be?",
    a: "4 inches of 4,000 PSI concrete over 4 inches of compacted gravel is the local standard for passenger vehicles. Go 5–6 inches with rebar if you park a work truck, RV, or trailer on it.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Concrete Contractors in Boise, ID",
  url: "https://calcbid.com/contractors/concrete/boise-id",
  provider: { "@type": "Organization", name: "CalcBid", url: "https://calcbid.com" },
  areaServed: { "@type": "City", name: "Boise", containedInPlace: { "@type": "State", name: "Idaho" } },
  description:
    "Connect with concrete contractors in Boise, Idaho for driveways, patios, and slabs. Free local cost calculator and quote requests.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function BoiseConcretePage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={serviceJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Contractors", href: "/contractors" },
          { label: "Concrete", href: "/contractors/concrete/boise-id" },
          { label: "Boise, ID", href: "/contractors/concrete/boise-id" },
        ]} />
        <div className="kicker">Boise, Idaho</div>
        <h1 className="h2">Concrete contractors in Boise, ID</h1>
        <p className="sub">
          Driveways, patios, and slabs priced for the Treasure Valley — with a
          free calculator preset to Boise rates and quotes from local pros.
        </p>

        <h2>What concrete work costs in Boise (2026)</h2>
        <p>
          Boise runs slightly below the national average for concrete labor,
          which is good news in a market where half the metro seems to be a
          construction zone. As of October 2026, expect:
        </p>
        <ul>
          <li><strong>Driveway replacement:</strong> $6–$11 per sq ft installed — a 20×20 driveway lands around $2,400–$4,400</li>
          <li><strong>Patio slab:</strong> $6–$10 per sq ft, depending on finish and access</li>
          <li><strong>Concrete itself:</strong> roughly $140–$160 per yard delivered in the valley</li>
          <li><strong>Demo and haul-off:</strong> $2–$4 per sq ft on top, if old concrete has to go</li>
        </ul>
        <p>
          New subdivisions from Meridian to Star to Eagle are pouring driveways
          by the dozen, which keeps crews busy — book 2–4 weeks out in summer.
          The flip side of growth: freeze-thaw winters punish cheap work. Boise
          gets dozens of freeze-thaw cycles a year, and concrete without
          air-entrained mix and proper control joints will spall and crack
          within a few seasons. The cheapest bid is often the most expensive
          driveway.
        </p>

        <h2>Estimate your project</h2>
        <p>
          Punch in your dimensions — the calculator below is preset with Boise-area
          material and labor rates. Adjust anything to match a bid you&apos;ve received.
        </p>
        <ConcreteDrywallCalculator defaultPriceYard="145" defaultLabor="7" />

        <h2>Boise-specific things to get right</h2>
        <ul>
          <li><strong>Frost depth:</strong> footings go ~24 inches deep here. Shallow footings heave.</li>
          <li><strong>De-icers:</strong> magnesium chloride eats concrete surfaces. Seal every 2–3 years if you use it.</li>
          <li><strong>Pour season:</strong> April–October is the sweet spot. Winter pours need blankets and accelerators (+10–20%).</li>
          <li><strong>Permits:</strong> driveway approaches crossing the right-of-way need one — patios typically don&apos;t. Confirm with the City of Boise or your contractor.</li>
          <li><strong>Soil:</strong> much of the valley sits on expansive clay or sandy loam. A proper 4-inch compacted gravel base isn&apos;t optional.</li>
        </ul>

        <h2>Choosing a Boise concrete contractor</h2>
        <p>
          Ask for the mix design (4,000 PSI, air-entrained for exterior), the
          joint spacing plan, and how they handle the base. A pro talks about
          compaction and drainage before price. Get the PSI, thickness, finish,
          and demo scope in writing — concrete has no undo button. And check
          that they&apos;re actually pouring in Ada or Canyon County regularly;
          out-of-area crews chasing growth sometimes vanish before the sealer coat.
        </p>

        <div style={{ marginTop: 32 }}>
          <LeadForm trade="concrete" city="boise-id" cityLabel="Boise, ID" tradeLabel="concrete" />
        </div>

        <p className="disclaimer" style={{ marginTop: 24 }}>
          <strong>Ballpark, not gospel.</strong> Boise pricing updated October 2026
          from regional contractor rates — your bids will vary with access, soil,
          and season. Always get it in writing.
        </p>

        <Faq items={faqs} heading="Boise concrete questions, answered" />
      </div>
    </section>
  );
}
