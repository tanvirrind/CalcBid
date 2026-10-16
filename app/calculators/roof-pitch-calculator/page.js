import Link from "next/link";
import RoofPitchCalculator from "../../../components/RoofPitchCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Roof Pitch Calculator — Pitch, Angle & Multiplier",
  description:
    "Free roof pitch calculator: rise and run to x/12 pitch, angle degrees, slope percent, pitch multiplier and rafter length for any span. Contractor tool.",
  keywords: [
    "roof pitch calculator",
    "how to calculate roof pitch",
    "roof pitch multiplier",
    "pitch multiplier calculator",
    "rafter length calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/roof-pitch-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Roof Pitch Calculator | CalcBid",
    description:
      "Rise and run to pitch, angle, slope, multiplier and rafter length. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/roof-pitch-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Pitch Calculator | CalcBid",
    description: "Pitch, angle, slope, multiplier and rafter length from rise and run. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How do you calculate roof pitch from rise and run?",
    a: "Divide the rise by the run and multiply by 12 — that's your x/12 pitch. A roof that climbs 7 inches over a 12-inch run is a 7/12. Enter any rise and run above and the calculator converts it to pitch, angle degrees, slope percent, and the multiplier.",
  },
  {
    q: "What is the roof pitch multiplier used for?",
    a: "The multiplier converts a roof's footprint area into true surface area: multiply any footprint square footage by it. For a 7/12 pitch the multiplier is 1.158 — a 1,500 sq ft footprint is really 1,737 sq ft of roof. That number drives material orders and pricing.",
  },
  {
    q: "What pitch is considered walkable?",
    a: "Up to 4/12 is generally walkable with standard fall protection. Steeper than 6/12, most crews stage the roof or use roof jacks and safety lines — and expect 10–20% more labor on the bid for anything above 8/12.",
  },
  {
    q: "How long should a common rafter be?",
    a: "Multiply the pitch multiplier by half the building span: a 28-foot span on a 7/12 pitch needs a 16.2-foot common rafter before the ridge cut and tail. The calculator above computes this for any span you enter.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Roof Pitch Calculator — CalcBid",
  url: "https://calcbid.com/calculators/roof-pitch-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free roof pitch calculator for contractors: rise and run to x/12 pitch, angle degrees, slope percent, pitch multiplier and rafter length.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RoofPitchCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Roof Pitch Calculator", href: "/calculators/roof-pitch-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Roof pitch calculator</h1>
        <p className="sub">
          Rise and run in, real roof math out — x/12 pitch, angle, slope,
          multiplier, and rafter length. Pair it with the roofing calculator
          to turn footprint into a full material order.
        </p>
        <RoofPitchCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This converts the rise and run
          you enter into pitch math — verify pitch on the roof itself with a
          level and tape before ordering, since sag and settled framing can
          fool a measurement.
        </p>
        <Faq items={faqs} heading="Questions roofers actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/calculators/roofing-calculator" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Roofing Calculator</Link>
          {" · "}
          <Link href="/guides/roof-installation-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Roof Installation Cost</Link>
          {" · "}
          <Link href="/guides/roof-replacement-cost-2026" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Roof Replacement Cost</Link>
          {" · "}
          <Link href="/guides/bundles-per-square" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Bundles Per Square</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your pitch?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this measurement into a professional roofing quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
