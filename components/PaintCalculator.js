"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function PaintCalculator({ onSendToQuote }) {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("8");
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("2");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("350");
  const [priceGal, setPriceGal] = useState("45");
  const [laborHours, setLaborHours] = useState("8");
  const [laborRate, setLaborRate] = useState("50");

  const r = useMemo(() => {
    const L = num(length), W = num(width), H = num(height);
    const wallArea = 2 * (L + W) * H;
    const openings = num(doors) * 21 + num(windows) * 15; // sq ft each
    const paintable = Math.max(0, wallArea - openings);
    const gallonsRaw = (paintable * num(coats, 1)) / Math.max(1, num(coverage, 350));
    const gallons = Math.ceil(gallonsRaw * 1.1); // 10% waste, round up
    const paintCost = gallons * num(priceGal);
    const laborCost = num(laborHours) * num(laborRate);
    return { wallArea, paintable, gallons, paintCost, laborCost, total: paintCost + laborCost };
  }, [length, width, height, doors, windows, coats, coverage, priceGal, laborHours, laborRate]);

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
        <h3 style={{ marginTop: 0 }}>Room details</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <div className="field-row">
          <F label="Ceiling height (ft)" value={height} set={setHeight} />
          <F label="Coats" value={coats} set={setCoats} min="1" step="1" />
        </div>
        <div className="field-row">
          <F label="Doors" value={doors} set={setDoors} step="1" hint="≈21 sq ft each" />
          <F label="Windows" value={windows} set={setWindows} step="1" hint="≈15 sq ft each" />
        </div>

        <h3 style={{ marginTop: 26 }}>Paint & labor</h3>
        <div className="field-row">
          <F label="Coverage (sq ft / gallon)" value={coverage} set={setCoverage} hint="Typically 300–400" />
          <F label="Price per gallon ($)" value={priceGal} set={setPriceGal} />
        </div>
        <div className="field-row">
          <F label="Labor hours" value={laborHours} set={setLaborHours} />
          <F label="Labor rate ($/hr)" value={laborRate} set={setLaborRate} />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Wall area</span><span>{r.wallArea.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Paintable area</span><span>{r.paintable.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Paint needed</span><span>{r.gallons} gal</span></div>
        <div className="r-row"><span className="r-label">Paint cost</span><span>{fmt$(r.paintCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          {onSendToQuote ? (
            <button className="btn btn-primary" onClick={() => onSendToQuote(r)}>
              Send to quote →
            </button>
          ) : (
            <Link
              className="btn btn-primary"
              href={`/quote?paint=${r.gallons}&paintCost=${r.paintCost.toFixed(2)}&labor=${r.laborCost.toFixed(2)}`}
            >
              Send to quote →
            </Link>
          )}
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Includes 10% waste factor. Gallons rounded up — you can&apos;t buy half a gallon at the counter.
          </div>
        </div>
      </div>
    </div>
  );
}
