import Link from "next/link";
import StairCalculator from "../../../components/StairCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Stair Calculator — Rise, Run, Steps & Stringers",
  description:
    "Free stair calculator: total rise to steps, riser height, tread depth, total run, stringer length and stair angle — with IRC code flags.",
  keywords: [
    "stair calculator",
    "stair stringer calculator",
    "deck stair calculator",
    "how to calculate stairs",
    "riser and tread calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/stair-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Stair Calculator | CalcBid",
    description:
      "Total rise to steps, riser height, tread depth, total run and stringer length — with code flags. Free, then quote it.",
    url: "https://calcbid.com/calculators/stair-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stair Calculator | CalcBid",
    description: "Rise, run, steps and stringer length with IRC code flags. Free, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How do you calculate the number of steps for a staircase?",
    a: "Divide the total floor-to-floor rise by your target riser height — typically 7 inches — and round to the nearest whole number. Then divide the actual rise by that step count to get the exact riser height, which must stay within ⅜″ of uniform. The calculator above does this and flags code issues automatically.",
  },
  {
    q: "What is the standard riser height and tread depth for stairs?",
    a: "The International Residential Code allows a maximum riser height of 7¾ inches and a minimum tread depth of 10 inches. The comfortable sweet spot most carpenters use is a 7-inch riser with an 11-inch tread.",
  },
  {
    q: "How do you calculate stringer length?",
    a: "Stringer length is the hypotenuse of the total rise and total run: square both, add them, and take the square root. For a 36-inch rise with 13 steps on 11-inch treads (143-inch run), the stringer is about 147.5 inches — roughly 12.3 feet.",
  },
  {
    q: "How much does it cost to build stairs?",
    a: "A simple straight stair run costs roughly $1,000–$3,000 installed in 2026, depending on material and finish — pressure-treated deck stairs run lower, hardwoods and finished interiors run higher. Two 2×12 stringers are the minimum; stairs wider than 36 inches need a center stringer.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Stair Calculator — CalcBid",
  url: "https://calcbid.com/calculators/stair-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free stair calculator for contractors: total rise to steps, riser height, tread depth, total run, stringer length and stair angle, with IRC code flags.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function StairCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Stair Calculator", href: "/calculators/stair-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Stair calculator</h1>
        <p className="sub">
          Total rise in, a code-checked stair layout out — steps, riser height,
          tread depth, run, stringer length, and angle. Then send it straight
          into a quote.
        </p>
        <StairCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This computes stair geometry
          from your rise and tread inputs — local code can differ from the IRC
          baselines shown, so confirm with your inspector before cutting.
        </p>
        <Faq items={faqs} heading="Questions stair builders actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/deck-stairs-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Deck Stairs Cost</Link>
          {" · "}
          <Link href="/guides/deck-repair-cost" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Deck Repair Cost</Link>
          {" · "}
          <Link href="/guides/cost-to-install-deck-boards" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Cost to Install Deck Boards</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your stair math?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
