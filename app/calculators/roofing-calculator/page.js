import RoofingCalculator from "../../../components/RoofingCalculator";

export const metadata = {
  title: "Roofing calculator — CalcBid",
  description:
    "Free roofing calculator for contractors: squares, shingle bundles, tear-off and labor cost from footprint and pitch.",
};

export default function RoofingCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Roofing calculator</h1>
        <p className="sub">
          Footprint and pitch in, squares and bundles out — with tear-off and
          labor priced the way roofers actually bid. Then send it straight
          into a quote.
        </p>
        <RoofingCalculator />
      </div>
    </section>
  );
}
