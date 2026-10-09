"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

// Blown insulation data: R per inch, sq ft covered per bag at R-38, bag price
const TYPES = {
  cellulose: { label: "Blown cellulose", rPerInch: 3.7, bagSqft: 40, bagPrice: 11 },
  fiberglass: { label: "Blown fiberglass", rPerInch: 2.5, bagSqft: 60, bagPrice: 45 },
};

export default function AtticInsulationCalculator() {
  const [atticSqft, setAtticSqft] = useState("1200");
  const [currentR, setCurrentR] = useState("11");
  const [targetR, setTargetR] = useState("38");
  const [type, setType] = useState("cellulose");
  const [proRate, setProRate] = useState("2.25");

  const r = useMemo(() => {
    const t = TYPES[type];
    const sqft = num(atticSqft);
    const addR = Math.max(0, num(targetR) - num(currentR));
    const inchesNeeded = addR / t.rPerInch;
    // bags scale with depth: bagSqft is rated at R-38 depth
    const depthFactor = addR / 38;
    const bagsRaw = (sqft / t.bagSqft) * depthFactor;
    const bags = Math.ceil(bagsRaw * 1.1); // 10% extra
    const matCost = bags * t.bagPrice;
    const proCost = sqft * num(proRate);
    return { sqft, addR, inchesNeeded, bags, matCost, proCost, bagPrice: t.bagPrice };
  }, [atticSqft, currentR, targetR, type, proRate]);

  const quoteItems = [
    { desc: `Blown insulation — ${r.bags} bags (${TYPES[type].label}), attic ${r.sqft.toFixed(0)} sq ft`, qty: 1, price: Math.round(r.matCost * 100) / 100 },
    { desc: "Blower rental & installation labor", qty: 1, price: Math.round((r.proCost - r.matCost > 0 ? r.proCost - r.matCost : r.proCost * 0.5) * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, hint }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min="0" step="any"
        onChange={(e) => set(e.target.value)} />
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Attic details</h3>
        <div className="field-row">
          <F label="Attic floor area (sq ft)" value={atticSqft} set={setAtticSqft} hint="Length × width of the attic floor" />
          <div className="field">
            <label>Insulation type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(TYPES).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~R-{v.rPerInch}/inch</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field-row">
          <F label="Current R-value" value={currentR} set={setCurrentR} hint="R-11 ≈ 3.5 in batts; 0 if bare" />
          <F label="Target R-value" value={targetR} set={setTargetR} hint="R-38 is the DOE recommendation for most of the US" />
        </div>

        <h3 style={{ marginTop: 26 }}>Pro pricing</h3>
        <div className="field-row">
          <F label="Installed price ($/sq ft)" value={proRate} set={setProRate} hint="Typical $1.50–$3.50" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">R-value to add</span><span>R-{r.addR.toFixed(0)}</span></div>
        <div className="r-row"><span className="r-label">Depth to blow</span><span>{r.inchesNeeded.toFixed(1)} inches</span></div>
        <div className="r-row"><span className="r-label">Bags needed</span><span>{r.bags} bags</span></div>
        <div className="r-row"><span className="r-label">Material cost</span><span>{fmt$(r.matCost)}</span></div>
        <div className="r-row total"><span>Installed price</span><span>{fmt$(r.proCost)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Bag counts include 10% extra. Most home stores loan the blower free with a minimum bag purchase.
          </div>
        </div>
      </div>
    </div>
  );
}
