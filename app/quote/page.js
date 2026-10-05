import { Suspense } from "react";
import QuoteBuilder from "../../components/QuoteBuilder";

export const metadata = {
  title: "Quote generator — CalcBid",
  description: "Build a professional contractor quote in minutes and send it to your client.",
};

export default function QuotePage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Quote generator</div>
        <h1 className="h2">Build a quote worth signing</h1>
        <p className="sub">
          Fill in the details, watch the professional preview update live, then
          send it to your client.
        </p>
        <Suspense fallback={<div className="card">Loading quote builder…</div>}>
          <QuoteBuilder />
        </Suspense>
      </div>
    </section>
  );
}
