import { Suspense } from "react";
import QuoteBuilder from "../../components/QuoteBuilder";

export const metadata = {
  title: "Free Contractor Quote Generator — Build & Send",
  description:
    "Free contractor quote generator: build a professional estimate with line items, tax and discounts — share it by link, email or PDF.",
  keywords: [
    "free contractor quote generator",
    "contractor estimate generator",
    "quote builder for contractors",
    "painting estimate template",
    "free estimate maker",
  ],
  alternates: { canonical: "https://calcbid.com/quote" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 1200,
        height: 630,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Free Contractor Quote Generator — Build & Send Estimates | CalcBid",
    description:
      "Build a professional contractor quote in minutes — line items, tax, discounts — and send it by link, email or PDF.",
    url: "https://calcbid.com/quote",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Contractor Quote Generator — Build & Send Estimates | CalcBid",
    description: "Build a professional contractor quote in minutes — line items, tax, discounts — and send it by link, email or PDF.",
  },
};

export default function QuotePage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Quote generator</div>
        <h1 className="h2">Build a quote worth signing</h1>
        <p className="sub">
          Fill in the details, watch the quote take shape below, then send it
          to your client before you&apos;ve left the driveway.
        </p>
        <Suspense fallback={<div className="card">Loading quote builder…</div>}>
          <QuoteBuilder />
        </Suspense>
      </div>
    </section>
  );
}
