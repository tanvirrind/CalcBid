"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const SURFACES = {
  concrete: { label: "Driveway / concrete", rate: 0.25, speed: 400 },
  siding: { label: "House siding", rate: 0.3, speed: 500 },
  deck: { label: "Deck / wood", rate: 0.4, speed: 300 },
  roof: { label: "Roof (soft wash)", rate: 0.45, speed: 350 },
};

export default function PressureWashingCalculator() {
  const [area, setArea] = useState("1200");
  const [surface, setSurface] = useState("concrete");
  const [rate, setRate] = useState("");
  const [minCharge, setMinCharge] = useState("150");
  const [chems, setChems] = useState("25");

  const r = useMemo(() => {
    const s = SURFACES[surface];
    const sqft = num(area);
    const r_ = num(rate) > 0 ? num(rate) : s.rate;
    const jobPrice = Math.max(num(minCharge), sqft * r_);
    const hours = sqft / s.speed;
    const chemCost = num(chems);
    return { sqft, jobPrice, hours, chemCost, rate: r_ };
  }, [area, surface, rate, minCharge, chems]);

  const quoteItems = [
    { desc: `Pressure washing — ${r.sqft.toFixed(0)} sq ft (${SURFACES[surface].label})`, qty: 1, price: Math.round((r.jobPrice - r.chemCost) * 100) / 100 },
    { desc: "Cleaning chemicals & supplies", qty: 1, price: Math.round(r.chemCost * 100) / 100 },
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
        <h3 style={{ marginTop: 0 }}>Job details</h3>
        <div className="field-row">
          <F label="Area (sq ft)" value={area} set={setArea} hint="Length × width of the surface" />
          <div className="field">
            <label>Surface type</label>
            <select value={surface} onChange={(e) => setSurface(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(SURFACES).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~{fmt$(v.rate)}/sq ft</option>
              ))}
            </select>
          </div>
        </div>

        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Your rate ($/sq ft)" value={rate} set={setRate} hint={`Default ${fmt$(r.rate)}`} />
          <F label="Minimum charge ($)" value={minCharge} set={setMinCharge} hint="Small jobs still cost to show up" />
        </div>
        <div className="field-row">
          <F label="Chemicals & supplies ($)" value={chems} set={setChems} hint="Detergent, gas, wear" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Area</span><span>{r.sqft.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Time on site</span><span>~{r.hours.toFixed(1)} hrs</span></div>
        <div className="r-row"><span className="r-label">Supplies</span><span>{fmt$(r.chemCost)}</span></div>
        <div className="r-row total"><span>Quote this job at</span><span>{fmt$(r.jobPrice)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            The minimum charge protects you on small jobs — showing up still costs fuel and time.
          </div>
        </div>
      </div>
    </div>
  );
}
