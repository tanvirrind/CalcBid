"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function StairCalculator() {
  const [totalRise, setTotalRise] = useState("36");
  const [targetRiser, setTargetRiser] = useState("7");
  const [treadDepth, setTreadDepth] = useState("11");
  const [codeMode, setCodeMode] = useState(true);

  const r = useMemo(() => {
    const rise = num(totalRise, 36);
    const riserTarget = codeMode ? 7 : num(targetRiser, 7);
    const tread = codeMode ? 11 : num(treadDepth, 11);
    const steps = Math.max(1, Math.round(rise / riserTarget));
    const actualRiser = rise / steps;
    const totalRun = steps * tread;
    const stringerLen = Math.sqrt(rise * rise + totalRun * totalRun);
    const angle = (Math.atan(rise / totalRun) * 180) / Math.PI;
    const codeIssues = [];
    if (actualRiser > 7.75) codeIssues.push(`Riser height ${actualRiser.toFixed(2)}″ exceeds the IRC maximum of 7¾″ — add a step.`);
    if (tread < 10) codeIssues.push(`Tread depth ${tread.toFixed(1)}″ is under the IRC minimum of 10″ — deepen the treads.`);
    if (Math.abs(actualRiser - riserTarget) > 0.375) codeIssues.push("Riser heights vary more than ⅜″ — IRC requires uniform risers within ⅜″.");
    return { rise, riserTarget, tread, steps, actualRiser, totalRun, stringerLen, angle, codeIssues };
  }, [totalRise, targetRiser, treadDepth, codeMode]);

  const riseIn = num(totalRise, 36);
  const quoteItems = [
    { desc: `Stair build — ${r.steps} steps, ${r.actualRiser.toFixed(2)}″ risers × ${r.tread.toFixed(1)}″ treads (${riseIn.toFixed(0)}″ total rise)`, qty: 1, price: 0 },
    { desc: "Stringers (2×12, cut)", qty: Math.max(2, Math.ceil(r.totalRun / 48)), price: 0 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, step = "any", min = "0", hint, disabled }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min={min} step={step}
        disabled={disabled} onChange={(e) => set(e.target.value)} placeholder={hint || ""} />
      {hint && !String(value) && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Stair dimensions</h3>
        <div className="field-row">
          <F label="Total rise — floor to floor (inches)" value={totalRise} set={setTotalRise} hint="Measure from finished lower floor to finished upper floor" />
        </div>
        <div className="field-row">
          <div className="field" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="checkbox" id="codemode" checked={codeMode} onChange={(e) => setCodeMode(e.target.checked)}
              style={{ width: 20, height: 20, accentColor: "var(--accent)" }} />
            <label htmlFor="codemode" style={{ fontWeight: 600 }}>Auto code-compliant mode (7″ riser · 11″ tread)</label>
          </div>
        </div>
        <div className="field-row">
          <F label="Target riser height (in)" value={targetRiser} set={setTargetRiser} disabled={codeMode} hint="IRC max 7¾″" />
          <F label="Tread depth (in)" value={treadDepth} set={setTreadDepth} disabled={codeMode} hint="IRC min 10″" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Stair math
        </div>
        <div className="r-row"><span className="r-label">Number of steps</span><span>{r.steps}</span></div>
        <div className="r-row"><span className="r-label">Actual riser height</span><span>{r.actualRiser.toFixed(2)}″</span></div>
        <div className="r-row"><span className="r-label">Tread depth</span><span>{r.tread.toFixed(1)}″</span></div>
        <div className="r-row"><span className="r-label">Total run</span><span>{r.totalRun.toFixed(1)}″ ({(r.totalRun / 12).toFixed(2)} ft)</span></div>
        <div className="r-row"><span className="r-label">Stringer length</span><span>{r.stringerLen.toFixed(1)}″</span></div>
        <div className="r-row"><span className="r-label">Stair angle</span><span>{r.angle.toFixed(1)}°</span></div>
        {r.codeIssues.length > 0 && (
          <div style={{ marginTop: 14, padding: "10px 12px", borderRadius: 10, background: "#fef3c7", color: "#92400e", fontSize: 13.5 }}>
            <strong>Code flags:</strong>
            <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
              {r.codeIssues.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Stringers cut from 2×12s; two stringers up to ~36″ wide, three for wider stairs. Headroom needs 6′8″ minimum per code.
          </div>
        </div>
      </div>
    </div>
  );
}
