import Link from "next/link";
import TileCalculator from "../../../components/TileCalculator";
import Faq, { faqJsonLd } from "../../../components/Faq";
import JsonLd from "../../../components/JsonLd";

export const metadata = {
  title: "Tile Calculator — How Many Tiles Do I Need?",
  description:
    "Free tile calculator: find how many tiles and boxes you need, estimate tile cost and installation labor for any floor. Built for tile contractors.",
  keywords: [
    "tile calculator",
    "how many tiles do i need",
    "floor tile calculator",
    "tile estimator",
    "tiles needed calculator",
  ],
  alternates: { canonical: "https://calcbid.com/calculators/tile-flooring-calculator" },
  openGraph: {
    title: "Tile Calculator — How Many Tiles Do I Need? | CalcBid",
    description:
      "Free tile calculator: tiles, boxes, material cost and labor for any floor — then send it as a professional quote.",
    url: "https://calcbid.com/calculators/tile-flooring-calculator",
  },
};

const faqs = [
  {
    q: "How many tiles do I need for a 10x10 room?",
    a: "A 10×10 room is 100 square feet. With 12×12 tiles (1 square foot each), that's 100 tiles plus 10% waste for cuts — 110 tiles total. Check your box label for square feet per box and round up to full boxes; a typical 12×12 box covers about 10 square feet, so you'd order 11 boxes.",
  },
  {
    q: "How much extra tile should I order for waste?",
    a: "Order 10% extra for a straight lay and 15–20% for a diagonal layout or a room with lots of corners — diagonal cuts waste more. Always keep a few spare tiles from the same batch; later batches can differ slightly in shade, which makes repairs obvious.",
  },
  {
    q: "How many tiles come in a box?",
    a: "It varies by size and manufacturer — the number that matters is the square footage per box, printed on the box label. Divide your total square feet (with waste) by that number and round up. As a rough guide, 12×12 tiles often come about 10 square feet to a box.",
  },
  {
    q: "How much does tile installation cost per square foot?",
    a: "In the US, tile installation labor typically runs $5–$15 per square foot depending on tile size, layout complexity, and region — large-format and diagonal layouts cost more. Materials add roughly $2–$15 per square foot. Run your room through the calculator above for a job-specific number.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Tile Calculator — CalcBid",
  url: "https://calcbid.com/calculators/tile-flooring-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free tile calculator for contractors: tiles needed, boxes to order, material cost and installation labor for any floor.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function TileCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Tile & flooring calculator</h1>
        <p className="sub">
          Room dimensions in, tile count and boxes out — with material and
          installation labor priced per square foot. Then send it straight
          into a quote.
        </p>
        <TileCalculator />
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates tiles, boxes,
          and costs from the numbers you punch in — always check against your
          supplier&apos;s specs and your own measurements before ordering or quoting.
        </p>
        <Faq items={faqs} heading="Questions tile contractors actually ask" />
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          Got your tile count?{" "}
          <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            Turn this estimate into a professional tile quote
          </Link>{" "}
          and send it before you leave the job site.
        </p>
      </div>
    </section>
  );
}
