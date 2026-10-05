import PaintCalculator from "../../components/PaintCalculator";

export const metadata = {
  title: "Paint calculator — CalcBid",
  description: "Free paint quantity calculator for contractors: gallons, paint cost, and labor in seconds.",
};

export default function CalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Paint quantity calculator</h1>
        <p className="sub">
          Enter the room, get gallons and job cost. Then send it straight into
          a client-ready quote.
        </p>
        <PaintCalculator />
      </div>
    </section>
  );
}
