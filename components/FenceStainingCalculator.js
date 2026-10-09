"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function FenceStainingCalculator() {
  const [linearFt, setLinearFt] = useState("150");
  const [height, setHeight] = useState("6");
  const [sides, setSides] = useState("2");
  const [coats, setCoats] = useState("1");
  const [coverage, setCoverage] = useState("250");
  const [stainPrice, setStainPrice] = useState("45");
  const [laborRate, setLaborRate] = useState("2.5");

  const r = useMemo(() => {
    const area = num(linearFt) * num(height) * (parseInt(sides) || 1);
    const gallonsRaw = (area * (parseInt(coats) || 1)) / Math.max(1, num(coverage, 250));
    const gallons = Math.ceil(gallonsRaw * 1.1);
    const stainCost = gallons * num(stainPrice);
    const laborCost = area * num(laborRate);
    return { area, gallons, stainCost, laborCost, total: stainCost + laborCost };
  }, [linearFt, height, sides, coats, coverage, stainPrice, laborRate]);

  const quoteItems = [
    { desc: `Fence stain — ${r.gallons} gal (materials)`, qty: 1, price: Math.round(r.stainCost * 100) / 100 },
    { desc: `Stain labor — ${r.area.toFixed(0)} sq ft`, qty: 1, price: Math.round(r.laborCost * 100) / 100 },
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
        <h3 style={{ marginTop: 0 }}>Fence details</h3>
        <div className="field-row">
          <F label="Fence length (ft)" value={linearFt} set={setLinearFt} hint="Total linear feet" />
          <F label="Fence height (ft)" value={height} set={setHeight} hint="Usually 4–8 ft" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Sides to stain</label>
            <select value={sides} onChange={(e) => setSides(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              <option value="1">One side</option>
              <option value="2">Both sides</option>
            </select>
          </div>
          <div className="field">
            <label>Coats</label>
            <select value={coats} onChange={(e) => setCoats(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              <option value="1">1 coat</option>
              <option value="2">2 coats</option>
            </select>
          </div>
        </div>

        <h3 style={{ marginTop: 26 }}>Stain & labor</h3>
        <div className="field-row">
          <F label="Coverage (sq ft/gal)" value={coverage} set={setCoverage} hint="Stain: 150–300; check the can" />
          <F label="Stain price ($/gal)" value={stainPrice} set={setStainPrice} hint="Quality stain $40–$60" />
        </div>
        <div className="field-row">
          <F label="Labor ($/sq ft)" value={laborRate} set={setLaborRate} hint="Typical $1.50–$3.50" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Stainable area</span><span>{r.area.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Stain needed</span><span>{r.gallons} gal</span></div>
        <div className="r-row"><span className="r-label">Stain cost</span><span>{fmt$(r.stainCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Weathered gray wood drinks stain — budget an extra coat for fences that haven&apos;t been touched in years.
          </div>
        </div>
      </div>
    </div>
  );
}
