"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const PITCHES = [
  { label: "3/12 — low slope", rise: 3 },
  { label: "4/12 — gentle", rise: 4 },
  { label: "5/12", rise: 5 },
  { label: "6/12 — common", rise: 6 },
  { label: "7/12", rise: 7 },
  { label: "8/12 — steep", rise: 8 },
  { label: "10/12 — very steep", rise: 10 },
  { label: "12/12 — extreme", rise: 12 },
];

const STYLES = [
  { label: "Gable", waste: 0.1, note: "Two slopes, least waste" },
  { label: "Hip", waste: 0.15, note: "Four slopes, more cutting" },
  { label: "Flat / low-slope", waste: 0.08, note: "Minimal cutting" },
];

export default function RoofingCalculator() {
  const [length, setLength] = useState("40");
  const [width, setWidth] = useState("30");
  const [pitch, setPitch] = useState(6);
  const [style, setStyle] = useState("Gable");
  const [priceSq, setPriceSq] = useState("180");
  const [laborSq, setLaborSq] = useState("250");
  const [tearoffLayers, setTearoffLayers] = useState("1");
  const [tearoffSq, setTearoffSq] = useState("60");

  const r = useMemo(() => {
    const L = num(length), W = num(width);
    const rise = num(pitch, 6);
    const pitchMult = Math.sqrt(1 + (rise / 12) ** 2);
    const waste = (STYLES.find((s) => s.label === style) || STYLES[0]).waste;
    const footprint = L * W;
    const roofArea = footprint * pitchMult;
    const squares = roofArea / 100;
    const bundles = Math.ceil(squares * 3 * (1 + waste));
    const materialSquares = squares * (1 + waste);
    const materialsCost = materialSquares * num(priceSq);
    const laborCost = squares * num(laborSq);
    const layers = Math.min(2, Math.max(0, Math.floor(num(tearoffLayers))));
    const tearoffCost = layers * num(tearoffSq) * squares;
    return {
      footprint, roofArea, squares, bundles, layers,
      materialsCost, laborCost, tearoffCost,
      total: materialsCost + laborCost + tearoffCost,
    };
  }, [length, width, pitch, style, priceSq, laborSq, tearoffLayers, tearoffSq]);

  const quoteItems = [
    {
      desc: `Shingles — ${r.bundles} bundles (${r.squares.toFixed(1)} squares, ${style.toLowerCase()} roof)`,
      qty: 1,
      price: Math.round(r.materialsCost * 100) / 100,
    },
    { desc: "Roofing labor", qty: 1, price: Math.round(r.laborCost * 100) / 100 },
  ];
  if (r.tearoffCost > 0)
    quoteItems.push({
      desc: `Tear-off — ${r.layers} layer${r.layers > 1 ? "s" : ""}`,
      qty: 1,
      price: Math.round(r.tearoffCost * 100) / 100,
    });
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, step = "any", min = "0", hint }) => (
    <div className="field">
      <label>{label}</label>
      <input type="number" value={value} min={min} step={step}
        onChange={(e) => set(e.target.value)} />
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Roof details</h3>
        <div className="field-row">
          <F label="Building length (ft)" value={length} set={setLength} />
          <F label="Building width (ft)" value={width} set={setWidth} />
        </div>
        <div className="field">
          <label>Roof pitch</label>
          <select value={pitch} onChange={(e) => setPitch(e.target.value)}>
            {PITCHES.map((p) => (
              <option key={p.rise} value={p.rise}>{p.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Roof style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            {STYLES.map((s) => (
              <option key={s.label} value={s.label}>
                {s.label} — {s.note}
              </option>
            ))}
          </select>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
            Waste factor adjusts automatically: gable 10%, hip 15%, flat 8%.
          </div>
        </div>

        <h3 style={{ marginTop: 26 }}>Materials & labor</h3>
        <div className="field-row">
          <F label="Shingle price ($ / square)" value={priceSq} set={setPriceSq} hint="1 square = 100 sq ft" />
          <F label="Labor rate ($ / square)" value={laborSq} set={setLaborSq} />
        </div>
        <div className="field-row">
          <F label="Tear-off layers (0–2)" value={tearoffLayers} set={setTearoffLayers} step="1" />
          <F label="Tear-off cost ($ / square / layer)" value={tearoffSq} set={setTearoffSq} />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Roof area</span><span>{r.roofArea.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Roofing squares</span><span>{r.squares.toFixed(1)}</span></div>
        <div className="r-row"><span className="r-label">Shingle bundles</span><span>{r.bundles}</span></div>
        <div className="r-row"><span className="r-label">Materials</span><span>{fmt$(r.materialsCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor</span><span>{fmt$(r.laborCost)}</span></div>
        {r.tearoffCost > 0 && (
          <div className="r-row"><span className="r-label">Tear-off</span><span>{fmt$(r.tearoffCost)}</span></div>
        )}
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>
            Send to quote →
          </Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            3 bundles per square, waste included, bundles rounded up — you order
            whole bundles, not fractions.
          </div>
        </div>
      </div>
    </div>
  );
}
