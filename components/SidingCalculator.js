"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const SIDING = {
  vinyl: { label: "Vinyl", mat: 5.5, labor: 4.5 },
  fiber: { label: "Fiber cement", mat: 9, labor: 7 },
  wood: { label: "Wood / cedar", mat: 12, labor: 8 },
  metal: { label: "Metal / aluminum", mat: 8, labor: 6.5 },
};

export default function SidingCalculator({ defaultType } = {}) {
  const [wallSqft, setWallSqft] = useState("1800");
  const [openingsPct, setOpeningsPct] = useState("15");
  const [type, setType] = useState(defaultType || "vinyl");
  const [matRate, setMatRate] = useState("");
  const [laborRate, setLaborRate] = useState("");
  const [waste, setWaste] = useState("10");

  const r = useMemo(() => {
    const t = SIDING[type];
    const gross = num(wallSqft);
    const net = gross * (1 - num(openingsPct) / 100);
    const withWaste = net * (1 + num(waste) / 100);
    const squares = withWaste / 100;
    const mat = num(matRate) > 0 ? num(matRate) : t.mat;
    const lab = num(laborRate) > 0 ? num(laborRate) : t.labor;
    const matCost = withWaste * mat;
    const laborCost = withWaste * lab;
    const trimCost = Math.ceil(withWaste / 500) * 85; // ~1 trim bundle per 500 sq ft
    return {
      gross, net, squares,
      matCost, laborCost, trimCost,
      total: matCost + laborCost + trimCost,
      mat, lab,
    };
  }, [wallSqft, openingsPct, type, matRate, laborRate, waste]);

  const quoteItems = [
    { desc: `${SIDING[type].label} siding — ${r.squares.toFixed(1)} squares (materials)`, qty: 1, price: Math.round(r.matCost * 100) / 100 },
    { desc: "Siding labor", qty: 1, price: Math.round(r.laborCost * 100) / 100 },
    { desc: "Trim & accessories", qty: 1, price: Math.round(r.trimCost * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, step = "any", min = "0", hint }) => (
    <div className="field">
      <label>{label}</label>
      <input type="number" value={value} min={min} step={step}
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
          <F label="Windows/doors (%)" value={openingsPct} set={setOpeningsPct} hint="15% is typical" />
        </div>
        <div className="field">
          <label>Siding type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
            {Object.entries(SIDING).map(([k, v]) => (
              <option key={k} value={k}>{v.label} — ~{fmt$(v.mat)}/sq ft materials</option>
            ))}
          </select>
        </div>

        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Material ($/sq ft)" value={matRate} set={setMatRate} hint={`Default ${fmt$(r.mat)}`} />
          <F label="Labor ($/sq ft)" value={laborRate} set={setLaborRate} hint={`Default ${fmt$(r.lab)}`} />
        </div>
        <div className="field-row">
          <F label="Waste (%)" value={waste} set={setWaste} hint="10% standard" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Net siding area</span><span>{r.net.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Siding squares</span><span>{r.squares.toFixed(1)}</span></div>
        <div className="r-row"><span className="r-label">Material cost</span><span>{fmt$(r.matCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row"><span className="r-label">Trim & accessories</span><span>{fmt$(r.trimCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            1 square = 100 sq ft. Trim estimate covers J-channel, corners, and starter strips.
          </div>
        </div>
      </div>
    </div>
  );
}
