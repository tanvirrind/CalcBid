"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { calcBySlug } from "../../_components/calcs";
import { PageHead } from "../../_components/ui";

export default function CalculatorPage() {
  const { calc } = useParams();
  const c = calcBySlug(calc);
  if (!c) {
    return (
      <main className="cbapp-page">
        <PageHead title="Not found" back="/app" />
        <p className="cbapp-sub">Unknown calculator.</p>
        <Link href="/app" className="cbapp-btn cbapp-btn-primary">All calculators</Link>
      </main>
    );
  }
  return (
    <main className="cbapp-page">
      <PageHead title={`${c.ico} ${c.name}`} sub="Estimates, not replacements for engineered specs." back="/app" />
      {c.el}
    </main>
  );
}
