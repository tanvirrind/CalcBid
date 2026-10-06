"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function EpoxyCalculator() {
  const [area, setArea] = useState("450");
  const [kitCoverage, setKitCoverage] = useState("250");
  const [kitPrice, setKitPrice] = useState("130");
  const [prepCost, setPrepCost] = useState("300");
  const [proRate, setProRate] = useState("7");

  const r = useMemo(() => {
    const sqft = num(area);
    const kits = Math.ceil(sqft / Math.max(1, num(kitCoverage, 250)));
    const diyMats = kits * num(kitPrice);
    const diyTotal = diyMats + num(prepCost);
    const proTotal = sqft * num(proRate);
    return { sqft, kits, diyMats, diyTotal, proTotal };
  }, [area, kitCoverage, kitPrice, prepCost, proRate]);

  const quoteItems = [
    { desc: `Epoxy floor coating — ${r.sqft.toFixed(0)} sq ft (${r.kits} kits, materials)`, qty: 1, price: Math.round(r.diyMats * 100) / 100 },
    { desc: "Surface prep (grind/etch) & application labor", qty: 1, price: Math.round((r.proTotal - r.diyMats > 0 ? r.proTotal - r.diyMats : r.proTotal * 0.6) * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, hint }) => (
    <div className="field">
      <label>{label}</label>
      <input type="number" value={value} min="0" step="any"
        onChange={(e) => set(e.target.value)} />
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Floor details</h3>
        <div className="field-row">
          <F label="Garage floor area (sq ft)" value={area} set={setArea} hint="Length × width; a 2-car garage ≈ 400–500" />
          <F label="Kit coverage (sq ft)" value={kitCoverage} set={setKitCoverage} hint="Usually 200–300 per kit" />
        </div>

        <h3 style={{ marginTop: 26 }}>DIY costs</h3>
        <div className="field-row">
          <F label="Epoxy kit price ($)" value={kitPrice} set={setKitPrice} hint="Quality kits $100–$180" />
          <F label="Prep supplies ($)" value={prepCost} set={setPrepCost} hint="Grinder rental, etch, crack filler" />
        </div>

        <h3 style={{ marginTop: 26 }}>Pro pricing</h3>
        <div className="field-row">
          <F label="Pro installed ($/sq ft)" value={proRate} set={setProRate} hint="Typical $3–$12" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Epoxy kits needed</span><span>{r.kits}</span></div>
        <div className="r-row"><span className="r-label">DIY total</span><span>{fmt$(r.diyTotal)}</span></div>
        <div className="r-row total"><span>Pro installed</span><span>{fmt$(r.proTotal)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            The DIY-vs-pro gap is your sales pitch: most homeowners try DIY once, then call you.
          </div>
        </div>
      </div>
    </div>
  );
}
