import Link from "next/link";

export const metadata = {
  title: "Find Local Contractors — CalcBid",
  description:
    "Browse CalcBid's pilot contractor directory: local pros, local pricing, and free quote requests by city and trade.",
  keywords: ["find a contractor", "local contractors", "contractor directory"],
  alternates: { canonical: "https://calcbid.com/contractors" },
  openGraph: {
    images: [
      {
        url: "https://calcbid.com/og-image",
        width: 800,
        height: 420,
        alt: "CalcBid — Calculate the job. Send the quote. Get paid.",
      },
    ],
    title: "Find Local Contractors | CalcBid",
    description: "Local pros, local pricing, and free quote requests by city and trade.",
    url: "https://calcbid.com/contractors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Local Contractors | CalcBid",
    description: "Local pros, local pricing, and free quote requests by city and trade.",
  },
};

const listings = [
  {
    trade: "Concrete",
    city: "Boise, ID",
    href: "/contractors/concrete/boise-id",
    note: "Driveways, patios & slabs — priced for freeze-thaw country.",
  },
  {
    trade: "Siding",
    city: "Colorado Springs, CO",
    href: "/contractors/siding/colorado-springs-co",
    note: "Vinyl & fiber cement — priced for hail country.",
  },
  {
    trade: "HVAC",
    city: "El Paso, TX",
    href: "/contractors/hvac/el-paso-tx",
    note: "AC replacement & mini-splits — priced for the desert.",
  },
];

export default function ContractorsHub() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Pilot program</div>
        <h1 className="h2">Find local contractors</h1>
        <p className="sub">
          We&apos;re piloting a contractor directory in three cities — each page
          has real local pricing, a free cost calculator, and quote requests
          that go to one local pro. More cities coming if the pilot works.
        </p>
        <div className="grid3" style={{ marginTop: 28 }}>
          {listings.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="card trade"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <div className="t-name">{l.trade} — {l.city}</div>
                <div className="t-note">{l.note}</div>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: 32, maxWidth: 640, color: "var(--muted)" }}>
          A contractor yourself?{" "}
          <Link href="/pricing" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            See CalcBid plans
          </Link>{" "}
          — directory listings will be a subscriber perk as the pilot expands.
        </p>
      </div>
    </section>
  );
}
