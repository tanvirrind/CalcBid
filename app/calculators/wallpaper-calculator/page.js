import Link from "next/link";
import WallpaperCalculator from "../../../components/WallpaperCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Wallpaper Calculator — Rolls, Repeat & Room Cost",
  description:
    "Free wallpaper calculator with pattern repeat: room dimensions to roll count, repeat-adjusted strip length and material cost. For contractors.",
  keywords: [
    "wallpaper calculator",
    "wallpaper calculator with repeat",
    "how many rolls of wallpaper do i need",
    "wallpaper roll calculator",
    "wallpaper estimate calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/wallpaper-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Wallpaper Calculator | CalcBid",
    description:
      "Room dimensions to roll count with pattern repeat math. Free, then send it as a quote.",
    url: "https://calcbid.com/calculators/wallpaper-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallpaper Calculator | CalcBid",
    description: "Roll count with pattern repeat, from room dimensions. Free, then quote it.",
  },
};

const faqs = [
  {
    q: "How do you calculate how many rolls of wallpaper you need?",
    a: "Divide the net wall area (minus doors and windows) by the usable area per roll: strips per roll times strip width times wall height. Pattern repeats eat strips — a 20-inch repeat on 8-foot walls drops a standard 33-foot roll from 4 strips to 3. The calculator above runs the repeat math for you.",
  },
  {
    q: "What does pattern repeat mean on wallpaper?",
    a: "Pattern repeat is the vertical distance before the design starts over — printed on every roll. Each strip must be cut to a whole number of repeats, so a 20″ repeat on an 8-foot wall wastes 16 inches per strip. Always order one spare roll from the same dye lot.",
  },
  {
    q: "How much does professional wallpaper installation cost?",
    a: "Expect $3–$7 per square foot installed in 2026 — hanging runs about the same as painting per square foot, but prep (skim-coating, priming) and pattern matching add labor. Removal of old wallpaper adds $1–$3 per square foot.",
  },
  {
    q: "Should I include ceilings when calculating wallpaper?",
    a: "Only if the ceiling is being papered too. For walls alone, use the perimeter × ceiling height minus doors and windows — the room-dimensions mode does exactly this.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Wallpaper Calculator — CalcBid",
  url: "https://calcbid.com/calculators/wallpaper-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free wallpaper calculator for contractors: room dimensions to roll count with pattern repeat math and material cost.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function WallpaperCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Wallpaper Calculator", href: "/calculators/wallpaper-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Wallpaper calculator</h1>
        <p className="sub">
          Room dimensions in, a roll count you can actually order — pattern
          repeat math, strip cuts, and a spare roll included. Then send it
          straight into a quote.
        </p>
        <WallpaperCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates rolls and
          material cost from your dimensions — wall condition and old-paper
          removal are what move real wallpaper jobs, so inspect before quoting.
        </p>
        <Faq items={faqs} heading="Questions wallpaper contractors actually ask" />
        <p style={{ marginTop: 28, maxWidth: 640, color: "var(--muted)" }}>
          <strong style={{ color: "var(--ink)" }}>Related guides:</strong>{" "}
          <Link href="/guides/interior-painting-cost-per-sqft" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Interior Painting Cost Per Sq Ft</Link>
          {" · "}
          <Link href="/guides/cost-to-paint-12x12-room" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Cost to Paint a 12×12 Room</Link>
          {" · "}
          <Link href="/calculators/paint-calculator" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Paint Calculator</Link>
        </p>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your roll count?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional wallpaper quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
