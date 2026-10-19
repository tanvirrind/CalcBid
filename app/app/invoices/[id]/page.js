"use client";

import { useParams } from "next/navigation";
import { InvoiceDetail } from "../../_components/invoices";

export default function InvoicePage() {
  const { id } = useParams();
  return (
    <main className="cbapp-page">
      <InvoiceDetail id={id} />
    </main>
  );
}
