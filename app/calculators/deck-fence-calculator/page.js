import Link from "next/link";
import DeckFenceCalculator from "../../../components/DeckFenceCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";
import Breadcrumbs from "../../../components/Breadcrumbs";

export const metadata = {
  title: "Deck Calculator — Boards, Joists & Fence Materials",
  description:
    "Free deck & fence calculator: how many deck boards, joists, posts and screws you need — or pickets, rails and concrete for a fence. Built for contractors.",
  keywords: [
    "deck calculator",
    "how many deck boards do i need",
    "fence calculator",
    "how many fence pickets do i need",
    "deck board calculator",
    "fence picket calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/deck-fence-calculator" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Deck & Fence Calculator | CalcBid",
    description:
      "Deck boards, joists, posts — or fence pickets, rails and concrete. Free material + labor estimates, then send it as a quote.",
    url: "https://calcbid.com/calculators/deck-fence-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck & Fence Calculator | CalcBid",
    description: "Deck boards, joists, posts — or fence pickets, rails and concrete. Free material + labor estimates, then send it as a quote.",
  },
};

const faqs = [
  {
    q: "How many deck boards do I need?",
    a: "Divide your deck width in inches by (board width + gap). A 12-foot-wide deck with 5.5-inch boards and a 1/4-inch gap needs about 25 boards across — each the full length of the deck. The calculator above does the exact math including your gap and stock board lengths.",
  },
  {
    q: "How far apart should deck joists be?",
    a: "16 inches on center is the standard for residential decks. Use 12 inches on center for diagonal decking patterns, composite boards that need tighter support, or heavy-load areas like hot tubs.",
  },
  {
    q: "How many fence pickets do I need?",
    a: "Multiply your total linear feet by 12, divide by the picket width in inches, and add 5% waste. A 150-foot fence with 5.5-inch pickets needs about 345 pickets. The calculator also works out posts, rails, and concrete bags.",
  },
  {
    q: "How many bags of concrete per fence post?",
    a: "One bag per post is the rule of thumb — an 80 lb bag fills a typical 8–10 inch diameter hole about 2 feet deep. For 4×4 posts set 2 feet deep, one 50 lb bag is usually enough; in soft soil, plan on more.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Deck & Fence Calculator — CalcBid",
  url: "https://calcbid.com/calculators/deck-fence-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free deck & fence calculator for contractors: deck boards, joists, posts, screws — or fence pickets, rails, posts and concrete, with labor estimates.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function DeckFenceCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Calculators", href: "/calculators" }, { label: "Deck & Fence Calculator", href: "/calculators/deck-fence-calculator" }]} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Deck & fence calculator</h1>
        <p className="sub">
          Switch between deck and fence mode. Dimensions in, full material
          list and labor estimate out — then send it straight into a quote.
        </p>
        <DeckFenceCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates boards, joists,
          pickets, posts, and costs from the numbers you punch in — always check
          against your supplier&apos;s specs and your own measurements before
          ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions deck & fence builders actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your material list?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional deck or fence quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
