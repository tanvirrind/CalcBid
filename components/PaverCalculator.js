"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const PAVERS = {
  "4x8": { label: '4" × 8" (standard)', sqft: 0.222 },
  "6x6": { label: '6" × 6"', sqft: 0.25 },
  "6x9": { label: '6" × 9"', sqft: 0.375 },
  "12x12": { label: '12" × 12"', sqft: 1.0 },
};

export default function PaverCalculator() {
  const [area, setArea] = useState("400");
  const [paver, setPaver] = useState("4x8");
  const [paverPrice, setPaverPrice] = useState("4.5");
  const [baseDepth, setBaseDepth] = useState("4");
  const [laborRate, setLaborRate] = useState("9");

  const r = useMemo(() => {
    const sqft = num(area);
    const p = PAVERS[paver];
    const pavers = Math.ceil((sqft / p.sqft) * 1.07); // 7% cuts/waste
    const paverCost = sqft * num(paverPrice);
    // base: gravel depth in inches -> cubic yards, ~1.4 tons/yd3
    const baseYards = (sqft * (num(baseDepth) / 12)) / 27;
    const sandYards = (sqft * (1 / 12)) / 27; // 1" bedding sand
    const baseCost = (baseYards + sandYards) * 55; // ~$55/yd delivered
    const edgeFt = Math.ceil(2 * (Math.sqrt(sqft) * 2)); // approx perimeter
    const edgeCost = edgeFt * 2.5;
    const laborCost = sqft * num(laborRate);
    return {
      sqft, pavers, paverCost, baseYards: baseYards + sandYards,
      baseCost, edgeFt, edgeCost, laborCost,
      total: paverCost + baseCost + edgeCost + laborCost,
    };
  }, [area, paver, paverPrice, baseDepth, laborRate]);

  const quoteItems = [
    { desc: `Pavers — ${r.pavers} pcs (${PAVERS[paver].label}), materials`, qty: 1, price: Math.round(r.paverCost * 100) / 100 },
    { desc: `Base & bedding — ${r.baseYards.toFixed(1)} cu yd delivered`, qty: 1, price: Math.round(r.baseCost * 100) / 100 },
    { desc: "Edge restraints", qty: 1, price: Math.round(r.edgeCost * 100) / 100 },
    { desc: "Paver installation labor", qty: 1, price: Math.round(r.laborCost * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, hint }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min="0" step="any"
        onChange={(e) => set(e.target.value)} />
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Patio details</h3>
        <div className="field-row">
          <F label="Area (sq ft)" value={area} set={setArea} hint="Length × width" />
          <div className="field">
            <label>Paver size</label>
            <select value={paver} onChange={(e) => setPaver(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(PAVERS).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field-row">
          <F label="Base depth (inches)" value={baseDepth} set={setBaseDepth} hint="4–6 in of compacted gravel" />
          <F label="Paver price ($/sq ft)" value={paverPrice} set={setPaverPrice} hint="Materials $3–$8" />
        </div>

        <h3 style={{ marginTop: 26 }}>Labor</h3>
        <div className="field-row">
          <F label="Install labor ($/sq ft)" value={laborRate} set={setLaborRate} hint="Typical $6–$14" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Pavers needed</span><span>{r.pavers.toLocaleString()}</span></div>
        <div className="r-row"><span className="r-label">Base & sand</span><span>{r.baseYards.toFixed(1)} cu yd</span></div>
        <div className="r-row"><span className="r-label">Paver materials</span><span>{fmt$(r.paverCost)}</span></div>
        <div className="r-row"><span className="r-label">Base, sand & edging</span><span>{fmt$(r.baseCost + r.edgeCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Includes 7% cutting waste. Polymeric sand and sealer are popular add-ons — quote them separately.
          </div>
        </div>
      </div>
    </div>
  );
}
