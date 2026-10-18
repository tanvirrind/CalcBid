import Link from "next/link";
import DrywallCalculator from "../../../components/DrywallCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Drywall Calculator — Sheets, Mud & Installed Cost",
  description:
    "Free drywall calculator: room dimensions or wall area to sheets, joint compound, tape and screws — plus materials and installed cost. Contractor tool.",
  keywords: [
    "drywall calculator",
    "drywall installation cost calculator",
    "how many sheets of drywall do i need",
    "drywall estimate calculator",
    "sheetrock calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/drywall-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Drywall Calculator | CalcBid",
    description:
      "Wall area to sheets, mud, tape and screws — plus installed cost. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/drywall-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Calculator | CalcBid",
    description: "Sheets, mud, tape and screws from wall area — plus installed cost. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How many sheets of drywall do I need for a room?",
    a: "Divide your wall area (minus doors and windows at ~21 sq ft each) by the sheet size — 32 sq ft for a 4×8, 48 for a 4×12 — and round up. A 16×12 room with 8-foot ceilings and the ceiling included needs about 27 4×8 sheets. The calculator above handles the whole count.",
  },
  {
    q: "How much does drywall installation cost in 2026?",
    a: "Hang + finish runs $1.75–$2.75 per square foot installed in 2026 — materials are a small slice, roughly $12–$18 per sheet plus mud and tape. Texture level, corners, and patches move the rate.",
  },
  {
    q: "How much joint compound do I need per sheet?",
    a: "Budget roughly one 5-gallon bucket per 6 sheets for a standard hang-and-finish job, plus one 500-foot tape roll per 12 sheets. Smooth level-5 finishes can double the compound.",
  },
  {
    q: "Should I use 4×8 or 4×12 drywall sheets?",
    a: "4×12 sheets mean fewer seams and a faster finish — but they need two people and a truck. Solo crews and DIY jobs should stick with 4×8.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Drywall Calculator — CalcBid",
  url: "https://calcbid.com/calculators/drywall-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free drywall calculator for contractors: wall area to sheets, joint compound, tape and screws, plus materials and installed cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function DrywallCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Drywall Calculator", href: "/calculators/drywall-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Drywall calculator</h1>
        <p className="sub">
          Wall area in, a full drywall order out — sheets, mud, tape, screws,
          and the installed price. Then send it straight into a quote.
        </p>
        <DrywallCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates drywall
          materials and installed cost from your dimensions — texture level
          and corner count are what move real drywall jobs, so price those
          before quoting.
        </p>
        <Faq items={faqs} heading="Questions drywall contractors actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/interior-painting-cost-per-sqft" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Interior Painting Cost Per Sq Ft</Link>
          {" · "}
          <Link href="/guides/cost-to-paint-12x12-room" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Cost to Paint a 12×12 Room</Link>
          {" · "}
          <Link href="/calculators/paint-calculator" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Paint Coverage Calculator</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your sheet count?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional drywall quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
