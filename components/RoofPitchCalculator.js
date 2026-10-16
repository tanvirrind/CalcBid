"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function RoofPitchCalculator() {
  const [rise, setRise] = useState("7");
  const [run, setRun] = useState("12");
  const [span, setSpan] = useState("28");

  const r = useMemo(() => {
    const rs = num(rise, 7);
    const rn = Math.max(1, num(run, 12));
    const ratio = rs / rn;
    const pitch12 = ratio * 12;
    const angle = (Math.atan(ratio) * 180) / Math.PI;
    const slopePct = ratio * 100;
    const multiplier = Math.sqrt(1 + ratio * ratio);
    const halfSpan = num(span, 28) / 2;
    const rafterLen = multiplier * halfSpan;
    const walkable = pitch12 <= 4;
    return { rs, rn, pitch12, angle, slopePct, multiplier, rafterLen, walkable };
  }, [rise, run, span]);

  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify([
    { desc: `Roof pitch measurement — ${r.pitch12.toFixed(1)}/12 pitch (${r.angle.toFixed(1)}°), ${r.multiplier.toFixed(3)}× multiplier`, qty: 1, price: 0 },
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
        <h3 style={{ marginTop: 0 }}>Roof dimensions</h3>
        <div className="field-row">
          <F label="Rise (inches)" value={rise} set={setRise} hint="Vertical climb — e.g. 7 for a 7/12" />
          <F label="Run (inches)" value={run} set={setRun} hint="Horizontal run — almost always 12" />
        </div>
        <div className="field-row">
          <F label="Building span (feet)" value={span} set={setSpan} hint="Eave-to-eave width, for rafter length" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Pitch math
        </div>
        <div className="r-row"><span className="r-label">Pitch</span><span>{r.pitch12.toFixed(2)}/12</span></div>
        <div className="r-row"><span className="r-label">Angle</span><span>{r.angle.toFixed(1)}°</span></div>
        <div className="r-row"><span className="r-label">Slope</span><span>{r.slopePct.toFixed(1)}%</span></div>
        <div className="r-row"><span className="r-label">Pitch multiplier</span><span>{r.multiplier.toFixed(3)}×</span></div>
        <div className="r-row"><span className="r-label">Common rafter length ({num(span, 28).toFixed(0)} ft span)</span><span>{r.rafterLen.toFixed(2)} ft</span></div>
        <div className="r-row total"><span>{r.walkable ? "Walkable pitch" : "Steep — staging required"}</span><span>{r.walkable ? "≤ 4/12" : "> 4/12"}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Multiply any footprint area by the pitch multiplier to get true roof surface area. Rafter length excludes the tail and ridge cut.
          </div>
        </div>
      </div>
    </div>
  );
}
