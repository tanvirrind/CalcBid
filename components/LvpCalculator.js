"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function LvpCalculator() {
  const [length, setLength] = useState("25");
  const [width, setWidth] = useState("20");
  const [plankCost, setPlankCost] = useState("");
  const [underlayment, setUnderlayment] = useState(false);
  const [waste, setWaste] = useState("10");
  const [method, setMethod] = useState("pro");

  const r = useMemo(() => {
    const area = num(length) * num(width);
    const withWaste = area * (1 + num(waste) / 100);
    const boxes = Math.ceil(withWaste / 20);
    const plank = num(plankCost) > 0 ? num(plankCost) : 3.5;
    const matCost = withWaste * plank;
    const undCost = underlayment ? withWaste * 0.5 : 0;
    const labRate = method === "pro" ? 3.5 : 0;
    const laborCost = withWaste * labRate;
    return {
      area, withWaste, boxes, plank,
      matCost, undCost, laborCost, labRate,
      total: matCost + undCost + laborCost,
    };
  }, [length, width, plankCost, underlayment, waste, method]);

  const quoteItems = [
    { desc: `LVP materials — ${r.boxes} boxes (${r.withWaste.toFixed(0)} sq ft incl. waste)`, qty: 1, price: Math.round(r.matCost * 100) / 100 },
    ...(r.undCost > 0 ? [{ desc: "Underlayment", qty: 1, price: Math.round(r.undCost * 100) / 100 }] : []),
    ...(r.laborCost > 0 ? [{ desc: "LVP install labor", qty: 1, price: Math.round(r.laborCost * 100) / 100 }] : []),
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
        <h3 style={{ marginTop: 0 }}>Room details</h3>
        <div className="field-row">
          <F label="Room length (ft)" value={length} set={setLength} hint="Longest wall" />
          <F label="Room width (ft)" value={width} set={setWidth} hint="Adjacent wall" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Install method</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              <option value="pro">Pro install — ~$3.50/sq ft labor</option>
              <option value="diy">DIY — $0 labor</option>
            </select>
          </div>
          <div className="field">
            <label>Waste (%)</label>
            <input aria-label="Waste" type="number" value={waste} min="0" step="any"
              onChange={(e) => setWaste(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15 }} />
          </div>
        </div>
        <h3 style={{ marginTop: 26 }}>Materials</h3>
        <div className="field-row">
          <F label="Plank cost ($/sq ft)" value={plankCost} set={setPlankCost} hint="Default $3.50 — mid-grade is $3–$4" />
        </div>
        <div className="field">
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" checked={underlayment} onChange={(e) => setUnderlayment(e.target.checked)}
              style={{ width: 20, height: 20 }} />
            Add underlayment (+$0.50/sq ft)
          </label>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>Many rigid-core planks have pad attached — skip it if yours do.</div>
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Room area</span><span>{r.area.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Boxes needed (20 sq ft/box)</span><span>{r.boxes}</span></div>
        <div className="r-row"><span className="r-label">Material cost</span><span>{fmt$(r.matCost)}</span></div>
        {r.undCost > 0 && <div className="r-row"><span className="r-label">Underlayment</span><span>{fmt$(r.undCost)}</span></div>}
        <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Demo, subfloor leveling, and stairs are separate line items — add them to the quote above.
          </div>
        </div>
      </div>
    </div>
  );
}
