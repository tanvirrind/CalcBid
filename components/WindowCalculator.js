"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const TYPES = {
  doublehung: { label: "Double-hung", base: 550 },
  casement: { label: "Casement", base: 650 },
  slider: { label: "Slider", base: 500 },
  picture: { label: "Picture / fixed", base: 700 },
  bay: { label: "Bay / bow", base: 1800 },
};

const MATERIALS = {
  vinyl: { label: "Vinyl", mult: 1.0 },
  fiberglass: { label: "Fiberglass", mult: 1.35 },
  wood: { label: "Wood / clad", mult: 1.6 },
};

export default function WindowCalculator() {
  const [count, setCount] = useState("10");
  const [type, setType] = useState("doublehung");
  const [material, setMaterial] = useState("vinyl");
  const [installEach, setInstallEach] = useState("175");
  const [retrofit, setRetrofit] = useState("retrofit");

  const r = useMemo(() => {
    const t = TYPES[type];
    const m = MATERIALS[material];
    const n = Math.max(1, parseInt(count) || 1);
    const fullFrame = retrofit === "fullframe";
    const windowCost = t.base * m.mult * (fullFrame ? 1.3 : 1);
    const install = num(installEach) * (fullFrame ? 1.5 : 1);
    const perWindow = windowCost + install;
    return { n, perWindow, windowCost, install, total: perWindow * n, fullFrame };
  }, [count, type, material, installEach, retrofit]);

  const quoteItems = [
    { desc: `${r.n} × ${TYPES[type].label} windows (${MATERIALS[material].label}, ${r.fullFrame ? "full-frame" : "retrofit"}) — materials`, qty: r.n, price: Math.round(r.windowCost * 100) / 100 },
    { desc: "Window installation labor", qty: r.n, price: Math.round(r.install * 100) / 100 },
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

  const sel = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: "2px solid var(--line)", fontSize: 15, background: "#fff",
  };

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Window details</h3>
        <div className="field-row">
          <F label="Number of windows" value={count} set={setCount} hint="Count every opening" />
          <div className="field">
            <label>Window type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} style={sel}>
              {Object.entries(TYPES).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~{fmt$(v.base)}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label>Frame material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)} style={sel}>
              {Object.entries(MATERIALS).map(([k, v]) => (
                <option key={k} value={k}>{v.label}{v.mult !== 1 ? ` (+${Math.round((v.mult - 1) * 100)}%)` : ""}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Install type</label>
            <select value={retrofit} onChange={(e) => setRetrofit(e.target.value)} style={sel}>
              <option value="retrofit">Retrofit (insert)</option>
              <option value="fullframe">Full-frame replacement</option>
            </select>
          </div>
        </div>

        <h3 style={{ marginTop: 26 }}>Labor</h3>
        <div className="field-row">
          <F label="Install labor ($/window)" value={installEach} set={setInstallEach} hint="Typical $150–$250 retrofit" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Windows</span><span>{r.n}</span></div>
        <div className="r-row"><span className="r-label">Per window (materials)</span><span>{fmt$(r.windowCost)}</span></div>
        <div className="r-row"><span className="r-label">Per window (labor)</span><span>{fmt$(r.install)}</span></div>
        <div className="r-row"><span className="r-label">Per window (total)</span><span>{fmt$(r.perWindow)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Full-frame replacement costs ~30% more in materials and ~50% more in labor than retrofit.
          </div>
        </div>
      </div>
    </div>
  );
}
