"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const MATERIALS = {
  aluminum: { label: "Aluminum (seamless)", perFt: 10, downspout: 85 },
  steel: { label: "Galvanized steel", perFt: 13, downspout: 110 },
  copper: { label: "Copper", perFt: 32, downspout: 250 },
};

export default function GutterCalculator() {
  const [linearFt, setLinearFt] = useState("180");
  const [stories, setStories] = useState("1");
  const [downspouts, setDownspouts] = useState("4");
  const [material, setMaterial] = useState("aluminum");
  const [guards, setGuards] = useState(false);
  const [guardRate, setGuardRate] = useState("7");

  const r = useMemo(() => {
    const m = MATERIALS[material];
    const ft = num(linearFt);
    const storyMult = 1 + (Math.max(1, parseInt(stories) || 1) - 1) * 0.25;
    const gutterCost = ft * m.perFt * storyMult;
    const dsCost = num(downspouts) * m.downspout;
    const guardCost = guards ? ft * num(guardRate) : 0;
    return { ft, gutterCost, dsCost, guardCost, total: gutterCost + dsCost + guardCost };
  }, [linearFt, stories, downspouts, material, guards, guardRate]);

  const quoteItems = [
    { desc: `Seamless gutters — ${r.ft.toFixed(0)} lin ft (${MATERIALS[material].label}), installed`, qty: 1, price: Math.round(r.gutterCost * 100) / 100 },
    { desc: "Downspouts, installed", qty: num(downspouts), price: MATERIALS[material].downspout },
  ];
  if (guards) quoteItems.push({ desc: "Gutter guards", qty: 1, price: Math.round(r.guardCost * 100) / 100 });
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
        <h3 style={{ marginTop: 0 }}>Roofline details</h3>
        <div className="field-row">
          <F label="Gutter linear feet" value={linearFt} set={setLinearFt} hint="Measure each eave, add them up" />
          <F label="Stories" value={stories} set={setStories} hint="2nd story adds ~25% labor" />
        </div>
        <div className="field-row">
          <F label="Downspouts" value={downspouts} set={setDownspouts} hint="One per ~30–40 ft is typical" />
          <div className="field">
            <label>Gutter material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(MATERIALS).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~{fmt$(v.perFt)}/ft</option>
              ))}
            </select>
          </div>
        </div>

        <h3 style={{ marginTop: 26 }}>Gutter guards</h3>
        <div className="field-row">
          <div className="field">
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input type="checkbox" checked={guards} onChange={(e) => setGuards(e.target.checked)}
                style={{ width: 20, height: 20 }} />
              Add gutter guards
            </label>
          </div>
          {guards && <F label="Guard price ($/ft)" value={guardRate} set={setGuardRate} hint="Typical $5–$10" />}
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Gutters ({MATERIALS[material].label})</span><span>{fmt$(r.gutterCost)}</span></div>
        <div className="r-row"><span className="r-label">Downspouts</span><span>{fmt$(r.dsCost)}</span></div>
        {guards && <div className="r-row"><span className="r-label">Gutter guards</span><span>{fmt$(r.guardCost)}</span></div>}
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Installed prices include materials and labor. Fascia repair, if needed, is extra.
          </div>
        </div>
      </div>
    </div>
  );
}
