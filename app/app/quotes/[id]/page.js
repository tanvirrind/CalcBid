"use client";

import { useParams } from "next/navigation";
import { QuoteDetail } from "../../_components/quotes";

export default function QuotePage() {
  const { id } = useParams();
  return (
    <main className="cbapp-page">
      <QuoteDetail id={id} />
    </main>
  );
}
