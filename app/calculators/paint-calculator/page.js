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
        <p className="disclaimer">
          <strong>Ballpark, not gospel.</strong> This estimates materials from
          the numbers you punch in — always check against your supplier&apos;s
          specs and your own tape before ordering or quoting.
        </p>
      </div>
    </section>
  );
}
