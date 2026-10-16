"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function WallpaperCalculator() {
  const [mode, setMode] = useState("room");
  const [roomL, setRoomL] = useState("14");
  const [roomW, setRoomW] = useState("12");
  const [ceilingH, setCeilingH] = useState("8");
  const [wallArea, setWallArea] = useState("400");
  const [rollWidth, setRollWidth] = useState("20.5");
  const [rollLength, setRollLength] = useState("33");
  const [repeat, setRepeat] = useState("0");
  const [openings, setOpenings] = useState("2");
  const [rollPrice, setRollPrice] = useState("65");

  const r = useMemo(() => {
    let area;
    if (mode === "room") {
      area = 2 * (num(roomL, 14) + num(roomW, 12)) * num(ceilingH, 8);
    } else {
      area = num(wallArea, 400);
    }
    const h = num(ceilingH, 8);
    const areaNet = Math.max(0, area - num(openings, 2) * 21);
    const rwFt = num(rollWidth, 20.5) / 12;
    const rep = num(repeat, 0);
    const stripLen = rep > 0 ? Math.ceil(h / rep) * rep : h;
    const stripsPerRoll = Math.max(1, Math.floor(num(rollLength, 33) / stripLen));
    const stripArea = rwFt * h;
    const stripsNeeded = Math.ceil(areaNet / stripArea);
    const rolls = Math.ceil(stripsNeeded / stripsPerRoll);
    const buyRolls = rolls + 1;
    const matCost = buyRolls * num(rollPrice, 65);
    return { area, areaNet, stripLen, stripsPerRoll, stripsNeeded, rolls, buyRolls, matCost, rep };
  }, [mode, roomL, roomW, ceilingH, wallArea, rollWidth, rollLength, repeat, openings, rollPrice]);

  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify([
    { desc: `Wallpaper — ${r.buyRolls} rolls (${r.stripsNeeded} strips, ${r.rep > 0 ? `${r.rep.toFixed(0)}″ repeat` : "no pattern repeat"})`, qty: 1, price: Math.round(r.matCost) },
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
        <h3 style={{ marginTop: 0 }}>Walls to paper</h3>
        <div className="field-row">
          <div className="field">
            <label>Input mode</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
              <option value="room">Room dimensions</option>
              <option value="area">Total wall area</option>
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
        <h3 style={{ marginTop: 26 }}>Roll details</h3>
        <div className="field-row">
          <F label="Roll width (inches)" value={rollWidth} set={setRollWidth} hint="Standard US roll: 20.5″" />
          <F label="Roll length (feet)" value={rollLength} set={setRollLength} hint="Standard US roll: 33 ft" />
        </div>
        <div className="field-row">
          <F label="Pattern repeat (inches, 0 = none)" value={repeat} set={setRepeat} hint="Printed on the roll — big repeats need more rolls" />
          <F label="Roll price ($)" value={rollPrice} set={setRollPrice} />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Wallpaper order
        </div>
        <div className="r-row"><span className="r-label">Net wall area</span><span>{r.areaNet.toFixed(0)} sq ft</span></div>
        <div className="r-row"><span className="r-label">Cut strip length</span><span>{r.stripLen.toFixed(1)} ft{r.rep > 0 ? " (repeat-adjusted)" : ""}</span></div>
        <div className="r-row"><span className="r-label">Strips per roll</span><span>{r.stripsPerRoll}</span></div>
        <div className="r-row"><span className="r-label">Strips needed</span><span>{r.stripsNeeded}</span></div>
        <div className="r-row"><span className="r-label">Rolls (exact)</span><span>{r.rolls}</span></div>
        <div className="r-row total"><span>Buy (+1 spare roll)</span><span>{r.buyRolls} rolls · {fmt$(r.matCost)}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            A 20″ pattern repeat on 8-ft walls cuts strips-per-roll from 4 to 3 — always order one spare roll from the same dye lot.
          </div>
        </div>
      </div>
    </div>
  );
}
