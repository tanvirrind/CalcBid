"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

const MATERIALS = {
  pt: { label: "Pressure-treated", perSqft: 2.5 },
  composite: { label: "Composite", perSqft: 6.5 },
  pvc: { label: "PVC", perSqft: 8.5 },
};

const BOARD_LENGTHS = [8, 10, 12, 16];

export default function DeckBoardCalculator() {
  const [deckL, setDeckL] = useState("16");
  const [deckW, setDeckW] = useState("12");
  const [boardWidth, setBoardWidth] = useState("5.5");
  const [gap, setGap] = useState("0.25");
  const [boardLen, setBoardLen] = useState("16");
  const [material, setMaterial] = useState("pt");

  const r = useMemo(() => {
    const l = num(deckL, 16);
    const w = num(deckW, 12);
    const bw = Math.max(1, num(boardWidth, 5.5));
    const g = num(gap, 0.25);
    const bl = num(boardLen, 16);
    const widthIn = w * 12;
    const rows = Math.ceil(widthIn / (bw + g));
    const boardsPerRow = Math.ceil(l / bl);
    const boards = rows * boardsPerRow;
    const linearFt = rows * l;
    const sqft = l * w;
    const m = MATERIALS[material];
    const matCost = sqft * m.perSqft;
    const fasteners = boards * Math.max(2, Math.ceil(bl / 16)) * 2;
    const fastCost = fasteners * 0.15;
    return { l, w, rows, boardsPerRow, boards, linearFt, sqft, matCost, fasteners, fastCost, m };
  }, [deckL, deckW, boardWidth, gap, boardLen, material]);

  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify([
    { desc: `Decking — ${r.boards} boards (${r.m.label}), ${r.l}×${r.w} ft deck`, qty: 1, price: Math.round(r.matCost) },
    { desc: `Deck fasteners — ${r.fasteners} pcs`, qty: 1, price: Math.round(r.fastCost) },
  ]));

  const F = ({ label, value, set, step = "any", min = "0", hint }) => (
    <div className="field">
      <label>{label}</label>
      <input aria-label={label} type="number" value={value} min={min} step={step}
        onChange={(e) => set(e.target.value)} placeholder={hint || ""} />
      {hint && !String(value) && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
    </div>
  );

  const sel = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" };

  return (
    <div className="calc-layout">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Deck size</h3>
        <div className="field-row">
          <F label="Deck length (ft)" value={deckL} set={setDeckL} hint="Long direction of the boards" />
          <F label="Deck width (ft)" value={deckW} set={setDeckW} hint="Boards run along the length" />
        </div>
        <div className="field-row">
          <F label="Board width (in)" value={boardWidth} set={setBoardWidth} hint="5.5″ is the standard 6″ nominal deck board" />
          <F label="Gap spacing (in)" value={gap} set={setGap} hint="¼″ standard, ⅛″ for tight installs" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Board length</label>
            <select value={boardLen} onChange={(e) => setBoardLen(e.target.value)} style={sel}>
              {BOARD_LENGTHS.map((n) => (
                <option key={n} value={n}>{n} ft</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)} style={sel}>
              {Object.entries(MATERIALS).map(([k, v]) => (
                <option key={k} value={k}>{v.label} — ~{fmt$(v.perSqft)}/sq ft</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Board order
        </div>
        <div className="r-row"><span className="r-label">Board rows</span><span>{r.rows}</span></div>
        <div className="r-row"><span className="r-label">Boards ({num(boardLen, 16).toFixed(0)} ft)</span><span>{r.boards}</span></div>
        <div className="r-row"><span className="r-label">Total linear feet</span><span>{r.linearFt.toFixed(0)} ft</span></div>
        <div className="r-row"><span className="r-label">Fasteners (est.)</span><span>{r.fasteners}</span></div>
        <div className="r-row"><span className="r-label">Material cost</span><span>{fmt$(r.matCost)}</span></div>
        <div className="r-row total"><span>Materials + fasteners</span><span>{fmt$(r.matCost + r.fastCost)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            Order 5–10% extra for ripping and defects. Framing lumber, footings, and railings are separate — this covers decking surface only.
          </div>
        </div>
      </div>
    </div>
  );
}
