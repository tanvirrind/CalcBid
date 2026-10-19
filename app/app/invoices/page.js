import { redirect } from "next/navigation";

// Invoices live in the Quotes section (Quotes | Invoices segmented list).
export default function InvoicesIndex() {
  redirect("/app/quotes");
}
