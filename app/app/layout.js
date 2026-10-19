import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import { AppChrome } from "./_components/ui";
import "./app.css";

export const metadata = {
  title: "CalcBid App",
  description: "Your CalcBid job tools: calculators, quotes, invoices.",
  robots: { index: false, follow: false },
};

export default async function AppLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/signin?callbackUrl=/app");
  return <AppChrome>{children}</AppChrome>;
}
