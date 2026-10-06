import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import DashboardClient from "../../components/DashboardClient";

export const metadata = {
  title: "Dashboard",
  description: "Your saved quotes and customers.",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/signin");

  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Dashboard</div>
        <h1 className="h2">
          Welcome back{session.user.name ? `, ${session.user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="sub">
          Your saved quotes and customers live here. Open any quote to edit
          and resend it.
        </p>
        <DashboardClient />
      </div>
    </section>
  );
}
