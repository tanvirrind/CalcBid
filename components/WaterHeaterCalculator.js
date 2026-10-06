"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function WaterHeaterCalculator() {
  const [people, setPeople] = useState("4");
  const [bathrooms, setBathrooms] = useState("2");
  const [fuel, setFuel] = useState("gas");
  const [tankless, setTankless] = useState(false);

  const r = useMemo(() => {
    const ppl = Math.max(1, parseInt(people) || 1);
    const baths = Math.max(1, parseInt(bathrooms) || 1);
    // Sizing: ~10-15 gal per person for first-hour rating; standard mapping
    const gallons = ppl <= 2 ? 40 : ppl <= 4 ? 50 : 75;
    const firstHour = gallons * 1.6;
    const btu = fuel === "gas" ? (tankless ? 180000 : 40000) : 0;
    const kw = fuel === "electric" ? (tankless ? 24 : 4.5) : 0;
    // Installed cost ranges 2026
    const unitCost = tankless
      ? (fuel === "gas" ? 2800 : 2200)
      : (fuel === "gas" ? 650 : 550);
    const installCost = tankless ? 1500 : 600;
    const total = unitCost + installCost;
    return { ppl, baths, gallons, firstHour, btu, kw, unitCost, installCost, total, tankless, fuel };
  }, [people, bathrooms, fuel, tankless]);

  const unit = r.tankless
    ? `${r.fuel === "gas" ? r.btu.toLocaleString() + " BTU" : r.kw + " kW"} tankless water heater`
    : `${r.gallons}-gal ${r.fuel} tank water heater`;
  const quoteItems = [
    { desc: `${unit} — unit`, qty: 1, price: r.unitCost },
    { desc: "Water heater installation (incl. permit & haul-away)", qty: 1, price: r.installCost },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, hint }) => (
    <div className="field">
      <label>{label}</label>
      <input type="number" value={value} min="1" step="1"
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
        <h3 style={{ marginTop: 0 }}>Household details</h3>
        <div className="field-row">
          <F label="People in home" value={people} set={setPeople} hint="Peak simultaneous use matters most" />
          <F label="Bathrooms" value={bathrooms} set={setBathrooms} hint="More baths = bigger first-hour demand" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Fuel type</label>
            <select value={fuel} onChange={(e) => setFuel(e.target.value)} style={sel}>
              <option value="gas">Natural gas / propane</option>
              <option value="electric">Electric</option>
            </select>
          </div>
          <div className="field">
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", marginTop: 28 }}>
              <input type="checkbox" checked={tankless} onChange={(e) => setTankless(e.target.checked)}
                style={{ width: 20, height: 20 }} />
              Tankless unit
            </label>
          </div>
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Recommendation
        </div>
        {!r.tankless && (
          <>
            <div className="r-row"><span className="r-label">Tank size</span><span>{r.gallons} gallons</span></div>
            <div className="r-row"><span className="r-label">First-hour rating</span><span>~{r.firstHour.toFixed(0)} gal</span></div>
          </>
        )}
        {r.tankless && (
          <div className="r-row"><span className="r-label">Unit size</span><span>{r.fuel === "gas" ? `${r.btu.toLocaleString()} BTU` : `${r.kw} kW`}</span></div>
        )}
        <div className="r-row"><span className="r-label">Unit cost</span><span>{fmt$(r.unitCost)}</span></div>
        <div className="r-row"><span className="r-label">Installation</span><span>{fmt$(r.installCost)}</span></div>
        <div className="r-row total"><span>Installed total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Sized for peak demand — back-to-back showers are what undersized heaters fail at.
          </div>
        </div>
      </div>
    </div>
  );
}
