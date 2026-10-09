"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const PRESETS = [
  { label: "12 × 12 in", l: 12, w: 12 },
  { label: "18 × 18 in", l: 18, w: 18 },
  { label: "24 × 24 in", l: 24, w: 24 },
  { label: "12 × 24 in", l: 12, w: 24 },
  { label: '6 × 36 in plank', l: 6, w: 36 },
  { label: "Custom…", l: null, w: null },
];

export default function TileCalculator({ onSendToQuote }) {
  const [length, setLength] = useState("12");
  const [width, setWidth] = useState("10");
  const [preset, setPreset] = useState(0);
  const [customL, setCustomL] = useState("12");
  const [customW, setCustomW] = useState("12");
  const [waste, setWaste] = useState("10");
  const [sqftPerBox, setSqftPerBox] = useState("10");
  const [priceSqft, setPriceSqft] = useState("4");
  const [laborRate, setLaborRate] = useState("8");

  const p = PRESETS[preset];
  const tileL = p.l ?? num(customL, 12);
  const tileW = p.w ?? num(customW, 12);

  const r = useMemo(() => {
    const floorArea = num(length) * num(width);
    const tileSqft = (Math.max(0.01, tileL) * Math.max(0.01, tileW)) / 144;
    const baseTiles = floorArea / tileSqft;
    const wasteF = num(waste) / 100;
    const tiles = Math.ceil(baseTiles * (1 + wasteF));
    const sqftWithWaste = tiles * tileSqft;
    const boxes = Math.ceil(sqftWithWaste / Math.max(0.01, num(sqftPerBox, 10)));
    const tileCost = sqftWithWaste * num(priceSqft);
    const laborCost = floorArea * num(laborRate);
    return { floorArea, tileSqft, tiles, boxes, sqftWithWaste, tileCost, laborCost, total: tileCost + laborCost };
  }, [length, width, tileL, tileW, waste, sqftPerBox, priceSqft, laborRate]);

  const quoteItems = [
    {
      desc: `Floor tile — ${r.tiles} tiles (${r.boxes} boxes, materials)`,
      qty: 1,
      price: Math.round(r.tileCost * 100) / 100,
    },
    { desc: "Labor", qty: 1, price: Math.round(r.laborCost * 100) / 100 },
  ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  const F = ({ label, value, set, step = "any", min = "0", hint }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min={min} step={step}
        onChange={(e) => set(e.target.value)} />
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Room details</h3>
        <div className="field-row">
          <F label="Length (ft)" value={length} set={setLength} />
          <F label="Width (ft)" value={width} set={setWidth} />
        </div>

        <h3 style={{ marginTop: 26 }}>Tile</h3>
        <div className="field">
          <label>Tile size</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
            {PRESETS.map((pr, i) => (
              <button
                key={pr.label}
                type="button"
                onClick={() => setPreset(i)}
                className={i === preset ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
              >
                {pr.label}
              </button>
            ))}
          </div>
        </div>
        {p.l === null && (
          <div className="field-row" style={{ marginTop: 12 }}>
            <F label="Tile length (in)" value={customL} set={setCustomL} />
            <F label="Tile width (in)" value={customW} set={setCustomW} />
          </div>
        )}
        <div className="field-row" style={{ marginTop: 12 }}>
          <F label="Waste %" value={waste} set={setWaste} hint="10% straight lay, 15–20% diagonal" />
          <F label="Sq ft per box" value={sqftPerBox} set={setSqftPerBox} hint="On the box label" />
        </div>

        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Tile price ($ / sq ft)" value={priceSqft} set={setPriceSqft} />
          <F label="Labor rate ($ / sq ft)" value={laborRate} set={setLaborRate} hint="US: roughly $5–15" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Floor area</span><span>{r.floorArea.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Tiles needed</span><span>{r.tiles} tiles</span></div>
        <div className="r-row"><span className="r-label">Boxes to order</span><span>{r.boxes} boxes</span></div>
        <div className="r-row"><span className="r-label">Tile cost</span><span>{fmt$(r.tileCost)}</span></div>
        <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(r.laborCost)}</span></div>
        <div className="r-row total"><span>Job total</span><span>{fmt$(r.total)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          {onSendToQuote ? (
            <button className="btn btn-primary" onClick={() => onSendToQuote(r)}>
              Send to quote →
            </button>
          ) : (
            <Link className="btn btn-primary" href={quoteHref}>
              Send to quote →
            </Link>
          )}
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Tiles rounded up, boxes rounded up — order the full box, keep spares from the same batch.
          </div>
        </div>
      </div>
    </div>
  );
}
