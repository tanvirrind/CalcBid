"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const FINISHES = {
  smooth: { label: "Smooth", mat: 1.8 },
  sand: { label: "Sand / float", mat: 2.1 },
  dash: { label: "Dash", mat: 2.4 },
  lace: { label: "Lace / skip-trowel", mat: 2.6 },
};

export default function StuccoCalculator({ defaultFinish } = {}) {
  const [wallSqft, setWallSqft] = useState("400");
  const [repairPct, setRepairPct] = useState("20");
  const [coats, setCoats] = useState("2");
  const [finish, setFinish] = useState(defaultFinish || "sand");
  const [laborRate, setLaborRate] = useState("");

  const r = useMemo(() => {
    const f = FINISHES[finish];
    const area = num(wallSqft);
    const repairArea = area * (num(repairPct) / 100);
    const c = Math.min(3, Math.max(1, Math.round(num(coats, 2))));
    const matPerSqft = f.mat;
    const matCost = repairArea * matPerSqft * c;
    const hours = (repairArea * c) / 35;
    const lab = num(laborRate) > 0 ? num(laborRate) : 50;
    const laborCost = hours * lab;
    const low = (matCost + laborCost) * 0.85;
    const high = (matCost + laborCost) * 1.15;
    return {
      area, repairArea, c, hours,
      matPerSqft, matCost, laborCost,
      low, high, lab,
    };
  }, [wallSqft, repairPct, coats, finish, laborRate]);

  const quoteItems = [
    { desc: `Stucco repair (${FINISHES[finish].label} finish) — ${r.repairArea.toFixed(0)} sq ft × ${r.c} coats (materials)`, qty: 1, price: Math.round(r.matCost * 100) / 100 },
    { desc: `Stucco labor — ${r.hours.toFixed(1)} hrs @ ${fmt$(r.lab)}/hr`, qty: 1, price: Math.round(r.laborCost * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, step = "any", min = "0", hint }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min={min} step={step}
        onChange={(e) => set(e.target.value)} placeholder={hint || ""} />
      {hint && !String(value) && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Wall details</h3>
        <div className="field-row">
          <F label="Total wall area (sq ft)" value={wallSqft} set={setWallSqft} hint="Measure each wall: length × height, then add up" />
          <F label="Area needing repair (%)" value={repairPct} set={setRepairPct} hint="20% is a typical starting point" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Coats</label>
            <select value={coats} onChange={(e) => setCoats(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>{n} coat{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Finish type</label>
            <select value={finish} onChange={(e) => setFinish(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(FINISHES).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~{fmt$(v.mat)}/sq ft materials</option>
              ))}
            </select>
          </div>
        </div>
        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Labor rate ($/hr)" value={laborRate} set={setLaborRate} hint="Default $50 — stucco pros charge $40–$60" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Repair area</span><span>{r.repairArea.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Material cost</span><span>{fmt$(r.matCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor ({r.hours.toFixed(1)} hrs)</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total range</span><span>{fmt$(r.low)} – {fmt$(r.high)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Material covers cement, wire lath, and primer per finish type. Cure time between coats spans the calendar, not the estimate.
          </div>
        </div>
      </div>
    </div>
  );
}
