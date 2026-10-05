import PaintCalculator from "../../../components/PaintCalculator";

export const metadata = {
  title: "Paint calculator — CalcBid",
  description: "Free paint quantity calculator for contractors: gallons, paint cost, and labor in seconds.",
};

export default function PaintCalculatorPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Free calculator</div>
        <h1 className="h2">Paint quantity calculator</h1>
        <p className="sub">
          Punch in the room, get the gallons and the job cost. Then send it
          straight into a quote your client can sign off on.
        </p>
        <PaintCalculator />
      </div>
    </section>
  );
}
