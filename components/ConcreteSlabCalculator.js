"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function ConcreteSlabCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("12");
  const [thickness, setThickness] = useState("4");
  const [priceYd, setPriceYd] = useState("165");
  const [waste, setWaste] = useState("10");

  const r = useMemo(() => {
    const l = num(length, 20);
    const w = num(width, 12);
    const tIn = num(thickness, 4);
    const volCuFt = l * w * (tIn / 12);
    const yards = (volCuFt / 27) * (1 + num(waste, 10) / 100);
    const bags60 = Math.ceil(volCuFt / 0.45);
    const bags80 = Math.ceil(volCuFt / 0.6);
    const unit = num(priceYd, 165);
    const low = yards * unit * 0.9;
    const high = yards * unit * 1.15;
    return { l, w, tIn, volCuFt, yards, bags60, bags80, unit, low, high };
  }, [length, width, thickness, priceYd, waste]);

  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify([
    { desc: `Concrete slab ${r.l}×${r.w} ft, ${r.tIn}″ thick — ${r.yards.toFixed(2)} cu yd delivered`, qty: 1, price: Math.round(r.low) },
  ]));

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
        <h3 style={{ marginTop: 0 }}>Slab dimensions</h3>
        <div className="field-row">
          <F label="Length (feet)" value={length} set={setLength} />
          <F label="Width (feet)" value={width} set={setWidth} />
        </div>
        <div className="field-row">
          <F label="Thickness (inches)" value={thickness} set={setThickness} hint="4″ standard, 6″ for driveways/heavy loads" />
          <F label="Waste factor (%)" value={waste} set={setWaste} hint="10% is standard for grading overage" />
        </div>
        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Price per cubic yard ($)" value={priceYd} set={setPriceYd} hint="2026 US average $150–$180/yd delivered" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Concrete order
        </div>
        <div className="r-row"><span className="r-label">Volume</span><span>{r.volCuFt.toFixed(1)} cu ft</span></div>
        <div className="r-row"><span className="r-label">Order (with waste)</span><span>{r.yards.toFixed(2)} cubic yards</span></div>
        <div className="r-row"><span className="r-label">…or 60-lb bags</span><span>{r.bags60} bags</span></div>
        <div className="r-row"><span className="r-label">…or 80-lb bags</span><span>{r.bags80} bags</span></div>
        <div className="r-row total"><span>Delivered cost range</span><span>{fmt$(r.low)} – {fmt$(r.high)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            For structural slabs add #4 rebar 18″ on center or 6×6 W2.9 mesh. Most suppliers have a 3–5 yard minimum — short-load fees apply below that.
          </div>
        </div>
      </div>
    </div>
  );
}
