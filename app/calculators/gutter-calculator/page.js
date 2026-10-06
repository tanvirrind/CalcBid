import Link from "next/link";
import GutterCalculator from "../../../components/GutterCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Gutter Calculator — Installation Cost Estimator",
  description:
    "Free gutter calculator: linear feet, downspouts, and gutter guards for aluminum, steel or copper. Built for contractors.",
  keywords: [
    "gutter calculator",
    "gutter installation cost calculator",
    "how much do gutters cost",
    "gutter cost per linear foot",
    "seamless gutter cost estimator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/gutter-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Gutter Calculator | CalcBid",
    description:
      "Gutters, downspouts, and guards — aluminum, steel or copper. Free installed-cost estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/gutter-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutter Calculator | CalcBid",
    description: "Gutters, downspouts, and guards — aluminum, steel or copper. Free installed-cost estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much do gutters cost per linear foot installed?",
    a: "Seamless aluminum runs $8–$12 per foot installed, galvanized steel $10–$16, and copper $25–$40. Downspouts add roughly $75–$125 each for aluminum. Two-story homes cost about 25% more in labor.",
  },
  {
    q: "How do I measure for gutters?",
    a: "Measure each eave (the horizontal roof edges where gutters mount) and add them up — that's your linear footage. Count inside/outside corners separately; each one adds a fitting and a little labor.",
  },
  {
    q: "How many downspouts do I need?",
    a: "One downspout per 30–40 feet of gutter is the rule of thumb, and never fewer than one per continuous run. Long runs without enough downspouts overflow in heavy rain.",
  },
  {
    q: "Are gutter guards worth quoting?",
    a: "At $5–$10 per foot installed, guards are a high-margin upsell — especially for homes under trees. Quote them as a separate line item so the base gutter price stays competitive.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gutter Calculator — CalcBid",
  url: "https://calcbid.com/calculators/gutter-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free gutter calculator for contractors: linear feet, downspouts, and gutter guards for aluminum, steel or copper gutters.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function GutterCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Gutter Calculator", href: "/calculators/gutter-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Gutter calculator</h1>
        <p className="sub">
          Linear feet, downspouts, and guards in — installed cost out, for
          aluminum, steel, or copper. Then send it straight into a quote.
        </p>
        <GutterCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates installed
          gutter cost from the numbers you punch in — check fascia condition
          and local rates before quoting.
        </p>
        <Faq items={faqs} heading="Questions gutter installers actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional gutter quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
