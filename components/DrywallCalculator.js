"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const SHEETS = {
  "4x8": { label: '4×8 ft', sqft: 32, price: 12 },
  "4x12": { label: '4×12 ft', sqft: 48, price: 18 },
};

export default function DrywallCalculator() {
  const [mode, setMode] = useState("room");
  const [roomL, setRoomL] = useState("16");
  const [roomW, setRoomW] = useState("12");
  const [ceilingH, setCeilingH] = useState("8");
  const [wallArea, setWallArea] = useState("400");
  const [sheet, setSheet] = useState("4x8");
  const [includeCeiling, setIncludeCeiling] = useState(true);
  const [openings, setOpenings] = useState("3");
  const [installRate, setInstallRate] = useState("2.25");

  const r = useMemo(() => {
    const s = SHEETS[sheet];
    let area;
    if (mode === "room") {
      area = 2 * (num(roomL, 16) + num(roomW, 12)) * num(ceilingH, 8);
      if (includeCeiling) area += num(roomL, 16) * num(roomW, 12);
    } else {
      area = num(wallArea, 400);
    }
    const deducted = Math.max(0, area - num(openings, 3) * 21);
    const sheets = Math.ceil(deducted / s.sqft);
    const mudBuckets = Math.max(1, Math.ceil(sheets / 6));
    const tapeRolls = Math.max(1, Math.ceil(sheets / 12));
    const screwsLbs = Math.round(sheets * 1.25 * 10) / 10;
    const matCost = sheets * s.price + mudBuckets * 18 + tapeRolls * 6 + screwsLbs * 4;
    const rate = num(installRate, 2.25);
    const low = deducted * (rate - 0.5) + matCost;
    const high = deducted * (rate + 0.5) + matCost;
    return { area, deducted, sheets, mudBuckets, tapeRolls, screwsLbs, matCost, low, high };
  }, [mode, roomL, roomW, ceilingH, wallArea, sheet, includeCeiling, openings, installRate]);

  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify([
    { desc: `Drywall — ${r.sheets} sheets (${SHEETS[sheet].label}), materials`, qty: 1, price: Math.round(r.matCost) },
    { desc: `Drywall hang + finish — ${r.deducted.toFixed(0)} sq ft`, qty: 1, price: Math.round((r.low + r.high) / 2) },
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
        <h3 style={{ marginTop: 0 }}>Space to drywall</h3>
        <div className="field-row">
          <div className="field">
            <label>Input mode</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              <option value="room">Room dimensions</option>
              <option value="area">Total wall area</option>
            </select>
          </div>
          <div className="field">
            <label>Sheet size</label>
            <select value={sheet} onChange={(e) => setSheet(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              {Object.entries(SHEETS).map(([k, v]) => (
                <option key={k} value={k}>{v.label} ({v.sqft} sq ft)</option>
              ))}
            </select>
          </div>
        </div>
        {mode === "room" ? (
          <div className="field-row">
            <F label="Room length (ft)" value={roomL} set={setRoomL} />
            <F label="Room width (ft)" value={roomW} set={setRoomW} />
          </div>
        ) : (
          <div className="field-row">
            <F label="Total wall area (sq ft)" value={wallArea} set={setWallArea} hint="Length × height of every wall, added up" />
          </div>
        )}
        <div className="field-row">
          <F label="Ceiling height (ft)" value={ceilingH} set={setCeilingH} />
          <F label="Doors & windows (count)" value={openings} set={setOpenings} hint="Each deducts ~21 sq ft" />
        </div>
        {mode === "room" && (
          <div className="field-row">
            <div className="field" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input type="checkbox" id="ceil" checked={includeCeiling} onChange={(e) => setIncludeCeiling(e.target.checked)}
                style={{ width: 20, height: 20, accentColor: "var(--accent)" }} />
              <label htmlFor="ceil" style={{ fontWeight: 600 }}>Include ceiling</label>
            </div>
          </div>
        )}
        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Installed rate ($/sq ft)" value={installRate} set={setInstallRate} hint="2026 US average $1.75–$2.75/sq ft hang + finish" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Drywall order
        </div>
        <div className="r-row"><span className="r-label">Billable area</span><span>{r.deducted.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Sheets needed</span><span>{r.sheets} ({SHEETS[sheet].label})</span></div>
        <div className="r-row"><span className="r-label">Joint compound</span><span>{r.mudBuckets} × 5-gal buckets</span></div>
        <div className="r-row"><span className="r-label">Joint tape</span><span>{r.tapeRolls} × 500-ft rolls</span></div>
        <div className="r-row"><span className="r-label">Screws</span><span>{r.screwsLbs.toFixed(1)} lbs</span></div>
        <div className="r-row"><span className="r-label">Materials</span><span>{fmt$(r.matCost)}</span></div>
        <div className="r-row total"><span>Installed cost range</span><span>{fmt$(r.low)} – {fmt$(r.high)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Hang + finish runs about $1.75–$2.75/sq ft installed in 2026. Texture level, corners, and repairs move the rate.
          </div>
        </div>
      </div>
    </div>
  );
}
