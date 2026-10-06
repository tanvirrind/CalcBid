import Link from "next/link";
import WindowCalculator from "../../../components/WindowCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Window Replacement Cost Calculator (2026)",
  description:
    "Free window replacement calculator: cost per window by type and material, retrofit vs full-frame. Built for contractors.",
  keywords: [
    "window replacement cost calculator",
    "how much do new windows cost",
    "cost to replace windows",
    "window installation cost estimator",
    "how much does it cost to replace all windows in a house",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/window-replacement-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Window Replacement Cost Calculator | CalcBid",
    description:
      "Cost per window by type and material — retrofit or full-frame. Free estimate, then send it as a quote.",
    url: "https://calcbid.com/calculators/window-replacement-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Replacement Cost Calculator | CalcBid",
    description: "Cost per window by type and material — retrofit or full-frame. Free estimate, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How much does it cost to replace a window in 2026?",
    a: "Vinyl double-hung windows run $400–$800 installed each; fiberglass $700–$1,200; wood/clad $900–$1,600. Bay and bow windows start around $1,800. Full-frame replacement adds roughly 30–50% over retrofit.",
  },
  {
    q: "How much does it cost to replace all the windows in a house?",
    a: "A typical home with 10 vinyl windows costs $5,000–$9,000 installed. Whole-house jobs with premium materials run $12,000–$25,000+. The calculator above prices your exact count, type, and material.",
  },
  {
    q: "Retrofit vs. full-frame window replacement?",
    a: "Retrofit (insert) fits the new window into the existing frame — faster and cheaper. Full-frame removes everything down to the studs, fixing rot and air leaks but costing 30–50% more. Quote retrofit by default; sell full-frame where frames are damaged.",
  },
  {
    q: "How long does it take to install a window?",
    a: "About 30–60 minutes per window for retrofit, 1–2 hours for full-frame. A 10-window house is usually a one-day job for a two-person crew.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Window Replacement Cost Calculator — CalcBid",
  url: "https://calcbid.com/calculators/window-replacement-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free window replacement calculator for contractors: cost per window by type and material, retrofit vs full-frame installation.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function WindowCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Window Replacement Calculator", href: "/calculators/window-replacement-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Window replacement calculator</h1>
        <p className="sub">
          Window count, type, and material in — per-window and whole-house
          cost out. Then send it straight into a quote.
        </p>
        <WindowCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> Window prices vary widely by
          brand, glazing options, and region — confirm with your supplier
          before quoting.
        </p>
        <Faq items={faqs} heading="Questions window contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your numbers?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional window quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
