"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const F = ({ label, value, set, step = "any", min = "0", hint }) => (
  <div className="field">
    <label>{label}</label>
    <input type="number" value={value} min={min} step={step}
      onChange={(e) => set(e.target.value)} />
    {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
  </div>
);

const Seg = ({ label, options, value, set }) => (
  <div className="field">
    <label>{label}</label>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => set(o.value)}
          className={value === o.value ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
);

export default function HvacCalculator() {
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("15");
  const [height, setHeight] = useState("8");
  const [climate, setClimate] = useState("moderate");
  const [insulation, setInsulation] = useState("average");
  const [sun, setSun] = useState("average");
  const [roomType, setRoomType] = useState("living");
  const [people, setPeople] = useState("2");
  const [installPerTon, setInstallPerTon] = useState("3500");

  const r = useMemo(() => {
    const sqft = Math.max(1, num(length)) * Math.max(1, num(width));
    const hF = Math.max(0.5, num(height, 8)) / 8;

    let cooling = sqft * 20 * hF;
    if (climate === "hot") cooling *= 1.15;
    if (climate === "cold") cooling *= 0.9;
    if (insulation === "poor") cooling *= 1.15;
    if (insulation === "good") cooling *= 0.9;
    if (sun === "sunny") cooling *= 1.1;
    if (sun === "shady") cooling *= 0.9;
    if (roomType === "kitchen") cooling += 4000;
    cooling += Math.max(0, num(people) - 2) * 600;

    const heatFactor = climate === "cold" ? 50 : climate === "hot" ? 25 : 35;
    const heating = sqft * heatFactor * hF;

    const tons = cooling / 12000;
    const recTons = Math.ceil(tons * 2) / 2; // round up to nearest half ton
    const installCost = recTons * num(installPerTon);

    return { sqft, cooling, heating, tons, recTons, installCost };
  }, [length, width, height, climate, insulation, sun, roomType, people, installPerTon]);

  const quoteItems = [
    {
      desc: `HVAC equipment — ${r.recTons} ton system (${Math.round(r.cooling).toLocaleString()} BTU cooling)`,
      qty: 1,
      price: Math.round(r.installCost * 100) / 100,
    },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Space</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>
        <div className="field-row" style={{ marginTop: 12 }}>
          <F label="Ceiling height (ft)" value={height} set={setHeight} />
          <F label="Occupants" value={people} set={setPeople} hint="+600 BTU per person past 2" />
        </div>

        <h3 style={{ marginTop: 26 }}>Conditions</h3>
        <Seg label="Climate" value={climate} set={setClimate} options={[
          { value: "hot", label: "Hot" },
          { value: "moderate", label: "Moderate" },
          { value: "cold", label: "Cold" },
        ]} />
        <div style={{ marginTop: 12 }}>
          <Seg label="Insulation" value={insulation} set={setInsulation} options={[
            { value: "poor", label: "Poor" },
            { value: "average", label: "Average" },
            { value: "good", label: "Good" },
          ]} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Seg label="Sun exposure" value={sun} set={setSun} options={[
            { value: "shady", label: "Shady" },
            { value: "average", label: "Average" },
            { value: "sunny", label: "Sunny" },
          ]} />
        </div>
        <div style={{ marginTop: 12 }}>
          <Seg label="Room type" value={roomType} set={setRoomType} options={[
            { value: "bedroom", label: "Bedroom" },
            { value: "living", label: "Living" },
            { value: "kitchen", label: "Kitchen (+4,000 BTU)" },
          ]} />
        </div>

        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <F label="Installed cost ($ / ton)" value={installPerTon} set={setInstallPerTon} hint="US: roughly $2,500–4,000 per ton" />
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Floor area</span><span>{r.sqft.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Cooling needed</span><span>{Math.round(r.cooling).toLocaleString()} BTU/hr</span></div>
        <div className="r-row"><span className="r-label">Heating needed</span><span>{Math.round(r.heating).toLocaleString()} BTU/hr</span></div>
        <div className="r-row"><span className="r-label">System size</span><span>{r.tons.toFixed(1)} tons → {r.recTons} ton unit</span></div>
        <div className="r-row"><span className="r-label">Est. installed cost</span><span>{fmt$(r.installCost)}</span></div>
        <div className="r-row total"><span>Recommended</span><span>{r.recTons}-ton system</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>
            Send to quote →
          </Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Sized up to the nearest half ton — a Manual J load calculation is the right call before you buy.
          </div>
        </div>
      </div>
    </div>
  );
}
