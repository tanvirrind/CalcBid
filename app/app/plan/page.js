"use client";

import { Suspense } from "react";
import { PlanScreen } from "../_components/appdata";

export default function PlanPage() {
  return (
    <main className="cbapp-page">
      <Suspense fallback={<p className="cbapp-sub">Loading…</p>}>
        <PlanScreen />
      </Suspense>
    </main>
  );
}
