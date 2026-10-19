"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { F, Txt, Num, Stepper, Chips, Pill, Progress, DocView, PageHead, api, useApi, money, fmtDate, cx } from "./ui";
import { calcSlab, calcStair, calcRoof, calcDrywall, calcPaint, calcTile, calcDeck } from "../../../lib/app-calcs";

// Calculator screens for the /app section. Shared pattern: plain-language
// inputs, live results, prices behind "More options", sticky bar + quote CTA.

function Sticky({ total, children, cta, onCta }) {
  return (
    <div className="cbapp-sticky">
      <div className="cbapp-row" style={{ border: 0, padding: "2px 0" }}>
        <span className="cbapp-label">Estimated total</span>
        <span className="cbapp-val-big">{money(total)}</span>
      </div>
      {children}
      <button type="button" className="cbapp-btn cbapp-btn-primary" onClick={onCta}>
        {cta || "Turn into a quote →"}
      </button>
    </div>
  );
}

function RRow({ label, val }) {
  return (
    <div className="cbapp-row"><span className="cbapp-label">{label}</span><span className="cbapp-val">{val}</span></div>
  );
}

function Assumptions({ text }) {
  return <p className="cbapp-hint" style={{ marginTop: 10 }}>{text}</p>;
}

// turn a calc result into the quote wizard payload
export function startQuote(router, calc, items, jobTitle, inputs) {
  try {
    sessionStorage.setItem("cbapp-calc", JSON.stringify({ calc, items, jobTitle, inputs }));
  } catch { /* storage unavailable */ }
  router.push("/app/quotes/new");
}

// ── Slab ───────────────────────────────────────────────────────────────────
function SlabCalc() {
  const router = useRouter();
  const [len, setLen] = useState("10"); const [lenIn, setLenIn] = useState("");
  const [wid, setWid] = useState("10"); const [widIn, setWidIn] = useState("");
  const [thick, setThick] = useState("4"); const [waste, setWaste] = useState("10");
  const [mode, setMode] = useState("ready-mix"); const [priceYd, setPriceYd] = useState("165");
  const [bagLb, setBagLb] = useState(80); const [priceBag, setPriceBag] = useState("6.50");
  const [labor, setLabor] = useState("");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcSlab({ len: n(len), lenIn: n(lenIn), wid: n(wid), widIn: n(widIn), thickIn: n(thick, 4), wastePct: n(waste, 10), mode, priceYd: n(priceYd, 165), bagLb, priceBag: n(priceBag, 6.5), laborRate: n(labor) });
  const items = [
    { desc: `Concrete slab ${len || 0}×${wid || 0} ft, ${thick || 0} in — materials`, qty: mode === "bags" ? r.bags : Math.round(r.orderYards * 100) / 100, price: mode === "bags" ? n(priceBag, 6.5) : n(priceYd, 165) },
    ...(r.labor > 0 ? [{ desc: "Concrete labor", qty: Math.round(r.area * 100) / 100, price: n(labor) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <F label="Length"><div className="cbapp-grid2"><Num value={len} set={setLen} placeholder="ft" /><Num value={lenIn} set={setLenIn} placeholder="in" /></div></F>
        <F label="Width"><div className="cbapp-grid2"><Num value={wid} set={setWid} placeholder="ft" /><Num value={widIn} set={setWidIn} placeholder="in" /></div></F>
        <F label="Thickness"><Chips options={["4", "5", "6", "8"]} value={thick} set={setThick} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Order (with waste)" val={`${r.orderYards.toFixed(2)} yd³`} />
        <RRow label="Exact volume" val={`${r.yardsExact.toFixed(2)} yd³ (${r.volCuFt.toFixed(1)} cu ft)`} />
        <RRow label={`${r.bagLb}-lb bags`} val={`${r.bags} bags`} />
        <RRow label="Materials" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
        <Assumptions text={`Thickness ${thick} in · waste ${waste}% · ${mode === "bags" ? `bags at $${n(priceBag, 6.5)}/bag` : `ready-mix at $${n(priceYd, 165)}/yd`} — quantities are estimates.`} />
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <F label="Buying mode"><Seg options={[{ label: "Ready-mix", value: "ready-mix" }, { label: "Bags", value: "bags" }]} value={mode} set={setMode} /></F>
          {mode === "ready-mix" ? (
            <F label="Price per cubic yard ($)"><Num value={priceYd} set={setPriceYd} /></F>
          ) : (
            <div className="cbapp-grid2">
              <F label="Bag size"><Seg options={[{ label: "80 lb", value: 80 }, { label: "60 lb", value: 60 }]} value={bagLb} set={setBagLb} /></F>
              <F label="Price per bag ($)"><Num value={priceBag} set={setPriceBag} /></F>
            </div>
          )}
          <F label="Waste %"><Stepper value={waste} set={setWaste} min={0} max={50} suffix="%" /></F>
          <F label="Labor rate ($ / sq ft, optional)"><Num value={labor} set={setLabor} placeholder="0" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, "slab", items, `Concrete slab ${len}×${wid} ft`, { len, wid, thick })} />
    </>
  );
}

// ── Stair ──────────────────────────────────────────────────────────────────
function StairCalc() {
  const router = useRouter();
  const [rise, setRise] = useState("108"); const [maxRiser, setMaxRiser] = useState("7.75");
  const [tread, setTread] = useState("10"); const [width, setWidth] = useState("36");
  const [sPrice, setSPrice] = useState("28"); const [tPrice, setTPrice] = useState("14");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcStair({ riseIn: n(rise, 108), maxRiser: n(maxRiser, 7.75), treadDepth: n(tread, 10), widthIn: n(width, 36), stringerPrice: n(sPrice, 28), treadPrice: n(tPrice, 14) });
  const items = [
    { desc: `Stair build — ${r.risers} risers × ${r.actualRiser.toFixed(2)} in, ${r.treads} treads`, qty: 1, price: 0 },
    { desc: `Stringers (${r.buyLen} ft boards × ${r.stringers})`, qty: r.stringers, price: n(sPrice, 28) },
    { desc: "Tread boards", qty: r.treads, price: n(tPrice, 14) },
  ];
  return (
    <>
      <div className="cbapp-card">
        <F label="Total rise — floor to floor (inches)"><Num value={rise} set={setRise} /></F>
        <F label="Max riser height (in)"><Num value={maxRiser} set={setMaxRiser} /></F>
        <F label="Tread depth (in)"><Num value={tread} set={setTread} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Risers" val={`${r.risers} × ${r.actualRiser.toFixed(2)} in`} />
        <RRow label="Treads" val={`${r.treads} × ${n(tread, 10).toFixed(1)} in`} />
        <RRow label="Total run" val={`${r.totalRun.toFixed(1)} in (${(r.totalRun / 12).toFixed(2)} ft)`} />
        <RRow label="Stringer length" val={`${r.stringerIn.toFixed(1)} in`} />
        <RRow label="Buy boards" val={`${r.buyLen} ft × ${r.stringers}`} />
        <RRow label="Materials" val={money(r.material)} />
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          <Pill status={r.checks.riserOk ? "approved" : "declined"} /><span className="cbapp-hint">riser ≤ 7¾ in</span>
          <Pill status={r.checks.treadOk ? "approved" : "declined"} /><span className="cbapp-hint">tread ≥ 10 in</span>
          <Pill status={r.checks.comfortOk ? "approved" : "declined"} /><span className="cbapp-hint">2R+T {r.comfort.toFixed(1)} (24–27)</span>
        </div>
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <div className="cbapp-grid2">
            <F label="Stair width (in)"><Num value={width} set={setWidth} /></F>
            <F label="Stringer board price ($)"><Num value={sPrice} set={setSPrice} /></F>
          </div>
          <F label="Tread board price ($)"><Num value={tPrice} set={setTPrice} /></F>
        </div>
      </details>
      <Sticky total={r.material} onCta={() => startQuote(router, "stair", items, `Stair — ${r.risers} risers`, { rise })} />
    </>
  );
}

// ── Roofing & pitch ────────────────────────────────────────────────────────
function RoofCalc() {
  const router = useRouter();
  const [len, setLen] = useState("30"); const [wid, setWid] = useState("40");
  const [rise, setRise] = useState(6); const [waste, setWaste] = useState("10");
  const [pBundle, setPBundle] = useState("38"); const [laborSq, setLaborSq] = useState("");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcRoof({ len: n(len, 30), wid: n(wid, 40), rise: n(rise, 6), wastePct: n(waste, 10), priceBundle: n(pBundle, 38), laborSq: n(laborSq) });
  const items = [
    { desc: `Shingles — ${r.bundles} bundles (${r.squares.toFixed(1)} squares, ${rise}/12 pitch)`, qty: r.bundles, price: n(pBundle, 38) },
    ...(r.labor > 0 ? [{ desc: "Roofing labor", qty: Math.round(r.sqWaste * 100) / 100, price: n(laborSq) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-grid2">
          <F label="Building length (ft)"><Num value={len} set={setLen} /></F>
          <F label="Building width (ft)"><Num value={wid} set={setWid} /></F>
        </div>
        <F label="Roof pitch (rise / 12)"><Chips options={[3, 4, 5, 6, 7, 8, 10, 12].map((p) => ({ label: `${p}/12`, value: p }))} value={rise} set={setRise} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Pitch multiplier" val={r.mult.toFixed(3)} />
        <RRow label="Roof angle" val={`${r.angle.toFixed(1)}°`} />
        <RRow label="Roof area" val={`${r.area.toFixed(0)} sq ft`} />
        <RRow label="Squares" val={`${r.squares.toFixed(1)} (${r.sqWaste.toFixed(1)} w/ waste)`} />
        <RRow label="Shingle bundles" val={`${r.bundles}`} />
        <RRow label="Underlayment rolls" val={`${r.rolls}`} />
        <RRow label="Materials" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
        <Assumptions text="Gable-roof assumption · 3 bundles per square · 1 underlayment roll ≈ 400 sq ft." />
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <F label="Price per bundle ($)"><Num value={pBundle} set={setPBundle} /></F>
          <F label="Labor rate ($ / square, optional)"><Num value={laborSq} set={setLaborSq} placeholder="0" /></F>
          <F label="Waste %"><Stepper value={waste} set={setWaste} min={0} max={40} suffix="%" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, "roofing", items, `Roofing — ${len}×${wid} ft, ${rise}/12`, { len, wid, rise })} />
    </>
  );
}

// ── Drywall ────────────────────────────────────────────────────────────────
function DrywallCalc() {
  const router = useRouter();
  const [len, setLen] = useState("12"); const [wid, setWid] = useState("12"); const [h, setH] = useState("8");
  const [ceil, setCeil] = useState(true); const [sheet, setSheet] = useState(32);
  const [waste, setWaste] = useState("10"); const [pSheet, setPSheet] = useState("14"); const [labor, setLabor] = useState("");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcDrywall({ len: n(len, 12), wid: n(wid, 12), height: n(h, 8), ceiling: ceil, sheetSqft: sheet, wastePct: n(waste, 10), priceSheet: n(pSheet, 14), laborRate: n(labor) });
  const items = [
    { desc: `Drywall sheets 4×${sheet === 32 ? 8 : 12} — ${r.sheets} sheets`, qty: r.sheets, price: n(pSheet, 14) },
    { desc: "Joint compound (4.5-gal buckets)", qty: r.buckets, price: 0 },
    ...(r.labor > 0 ? [{ desc: "Drywall labor", qty: Math.round(r.adj * 100) / 100, price: n(labor) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-grid2">
          <F label="Room length (ft)"><Num value={len} set={setLen} /></F>
          <F label="Room width (ft)"><Num value={wid} set={setWid} /></F>
        </div>
        <F label="Wall height (ft)"><Num value={h} set={setH} /></F>
        <F label="Include ceiling"><Seg options={[{ label: "Yes", value: true }, { label: "No", value: false }]} value={ceil} set={setCeil} /></F>
        <F label="Sheet size"><Seg options={[{ label: "4×8", value: 32 }, { label: "4×12", value: 48 }]} value={sheet} set={setSheet} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Sheets needed" val={`${r.sheets}`} />
        <RRow label="Joint compound" val={`${r.buckets} buckets`} />
        <RRow label="Joint tape" val={`${r.tape} roll${r.tape > 1 ? "s" : ""}`} />
        <RRow label="Drywall screws" val={`${r.screws} lb`} />
        <RRow label="Sheets cost" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
        <Assumptions text="Rules of thumb: 1 bucket / 450 sq ft · 0.37 ft tape / sq ft · 1 lb screws / 240 sq ft. Estimates only." />
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <F label="Price per sheet ($)"><Num value={pSheet} set={setPSheet} /></F>
          <F label="Labor rate ($ / sq ft, optional)"><Num value={labor} set={setLabor} placeholder="0" /></F>
          <F label="Waste %"><Stepper value={waste} set={setWaste} min={0} max={40} suffix="%" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, "drywall", items, `Drywall — ${len}×${wid} ft room`, { len, wid, h })} />
    </>
  );
}

// ── Paint ──────────────────────────────────────────────────────────────────
function PaintCalc() {
  const router = useRouter();
  const [len, setLen] = useState("12"); const [wid, setWid] = useState("14"); const [h, setH] = useState("8");
  const [coats, setCoats] = useState(2); const [doors, setDoors] = useState("2"); const [wins, setWins] = useState("2");
  const [ceil, setCeil] = useState(false); const [cov, setCov] = useState("350");
  const [pGal, setPGal] = useState("45"); const [labor, setLabor] = useState("");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcPaint({ len: n(len, 12), wid: n(wid, 14), height: n(h, 8), coats, doors: parseInt(doors) || 0, windows: parseInt(wins) || 0, ceiling: ceil, coverage: n(cov, 350), priceGal: n(pGal, 45), laborRate: n(labor) });
  const items = [
    { desc: `Interior paint — ${r.buy} gal (materials)`, qty: r.buy, price: n(pGal, 45) },
    ...(r.labor > 0 ? [{ desc: "Painting labor", qty: Math.round(r.paintable * 100) / 100, price: n(labor) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-grid2">
          <F label="Room length (ft)"><Num value={len} set={setLen} /></F>
          <F label="Room width (ft)"><Num value={wid} set={setWid} /></F>
        </div>
        <F label="Wall height (ft)"><Num value={h} set={setH} /></F>
        <F label="Coats"><Seg options={[{ label: "1 coat", value: 1 }, { label: "2 coats", value: 2 }]} value={coats} set={setCoats} /></F>
        <div className="cbapp-grid2">
          <F label="Doors"><Stepper value={doors} set={setDoors} min={0} max={20} /></F>
          <F label="Windows"><Stepper value={wins} set={setWins} min={0} max={30} /></F>
        </div>
        <F label="Paint ceiling"><Seg options={[{ label: "No", value: false }, { label: "Yes", value: true }]} value={ceil} set={setCeil} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Paintable area" val={`${r.paintable.toFixed(0)} sq ft`} />
        <RRow label="Paint (exact)" val={`${r.exact.toFixed(2)} gal`} />
        <RRow label="Buy" val={`${r.buy} gal`} />
        <RRow label="Paint cost" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
        <Assumptions text="Doors 21 sq ft · windows 15 sq ft deducted. Gallons rounded up — stores sell whole gallons." />
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <F label="Coverage (sq ft / gal)"><Num value={cov} set={setCov} /></F>
          <F label="Price per gallon ($)"><Num value={pGal} set={setPGal} /></F>
          <F label="Labor rate ($ / sq ft, optional)"><Num value={labor} set={setLabor} placeholder="0" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, "paint", items, `Paint — ${len}×${wid} ft room`, { len, wid, h })} />
    </>
  );
}

// ── Tile & flooring ────────────────────────────────────────────────────────
function TileCalc() {
  const router = useRouter();
  const [len, setLen] = useState("10"); const [wid, setWid] = useState("12");
  const [mode, setMode] = useState("tile"); const [size, setSize] = useState("12x24");
  const [perBox, setPerBox] = useState("10"); const [pBox, setPBox] = useState("55");
  const [cov, setCov] = useState("20"); const [waste, setWaste] = useState("10"); const [labor, setLabor] = useState("");
  const [tl, tw] = size.split("x").map(Number);
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcTile({ len: n(len, 10), wid: n(wid, 12), mode, tileL: tl, tileW: tw, perBox: n(perBox, 10), priceBox: mode === "tile" ? n(pBox, 55) : n(pBox, 48), covPerBox: n(cov, 20), wastePct: n(waste, 10), laborRate: n(labor) });
  const items = [
    { desc: mode === "tile" ? `Floor tile — ${r.tiles} tiles (${r.boxes} boxes, materials)` : `Flooring — ${r.boxes} boxes (${r.buySqft} sq ft to buy)`, qty: r.boxes, price: mode === "tile" ? n(pBox, 55) : n(pBox, 48) },
    ...(r.labor > 0 ? [{ desc: "Install labor", qty: Math.round(r.adj * 100) / 100, price: n(labor) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <F label="Material"><Seg options={[{ label: "Tile", value: "tile" }, { label: "Flooring", value: "flooring" }]} value={mode} set={setMode} /></F>
        <div className="cbapp-grid2">
          <F label="Room length (ft)"><Num value={len} set={setLen} /></F>
          <F label="Room width (ft)"><Num value={wid} set={setWid} /></F>
        </div>
        {mode === "tile" ? (
          <F label="Tile size (in)"><Chips options={["12x12", "12x24", "18x18", "24x24"]} value={size} set={setSize} /></F>
        ) : (
          <F label="Coverage per box (sq ft)"><Num value={cov} set={setCov} /></F>
        )}
      </div>
      <div className="cbapp-card">
        {mode === "tile" ? (
          <>
            <RRow label="Tiles needed" val={`${r.tiles}`} />
            <RRow label="Boxes" val={`${r.boxes}`} />
          </>
        ) : (
          <>
            <RRow label="Sq ft to buy" val={`${r.buySqft}`} />
            <RRow label="Boxes" val={`${r.boxes}`} />
          </>
        )}
        <RRow label="Materials" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <div className="cbapp-grid2">
            <F label="Price per box ($)"><Num value={pBox} set={setPBox} /></F>
            {mode === "tile" ? (
              <F label="Tiles per box"><Num value={perBox} set={setPerBox} /></F>
            ) : null}
          </div>
          <F label="Labor rate ($ / sq ft, optional)"><Num value={labor} set={setLabor} placeholder="0" /></F>
          <F label="Waste %"><Stepper value={waste} set={setWaste} min={0} max={40} suffix="%" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, mode === "tile" ? "tile" : "flooring", items, `${mode === "tile" ? "Tile" : "Flooring"} — ${len}×${wid} ft`, { len, wid })} />
    </>
  );
}

// ── Deck board ─────────────────────────────────────────────────────────────
function DeckCalc() {
  const router = useRouter();
  const [len, setLen] = useState("16"); const [wid, setWid] = useState("12");
  const [along, setAlong] = useState("length"); const [blen, setBlen] = useState(16);
  const [waste, setWaste] = useState("10"); const [pBoard, setPBoard] = useState("18"); const [labor, setLabor] = useState("");
  const n = (v, d = 0) => { const x = parseFloat(v); return Number.isFinite(x) && x >= 0 ? x : d; };
  const r = calcDeck({ len: n(len, 16), wid: n(wid, 12), along, boardLen: blen, wastePct: n(waste, 10), priceBoard: n(pBoard, 18), laborRate: n(labor) });
  const items = [
    { desc: `Decking — ${r.boards} boards (${blen} ft, ${len}×${wid} ft deck)`, qty: r.boards, price: n(pBoard, 18) },
    ...(r.labor > 0 ? [{ desc: "Deck labor", qty: n(len, 16) * n(wid, 12), price: n(labor) }] : []),
  ];
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-grid2">
          <F label="Deck length (ft)"><Num value={len} set={setLen} /></F>
          <F label="Deck width (ft)"><Num value={wid} set={setWid} /></F>
        </div>
        <F label="Boards run along"><Seg options={[{ label: "Length", value: "length" }, { label: "Width", value: "width" }]} value={along} set={setAlong} /></F>
        <F label="Board length"><Chips options={[8, 10, 12, 16].map((b) => ({ label: `${b} ft`, value: b }))} value={blen} set={setBlen} /></F>
      </div>
      <div className="cbapp-card">
        <RRow label="Rows" val={`${r.rows}`} />
        <RRow label="Boards (with waste)" val={`${r.boards}`} />
        <RRow label="Linear feet" val={`${r.linearFt} ft`} />
        <RRow label="Fasteners ≈" val={`${r.fasteners.toLocaleString()}`} />
        <RRow label="Boards cost" val={money(r.material)} />
        {r.labor > 0 && <RRow label="Labor" val={money(r.labor)} />}
        <Assumptions text="5½ in boards + ⅛ in gap · 16 in joist spacing. Fasteners are approximate (2 per joist intersection)." />
      </div>
      <details className="cbapp-disc" style={{ background: "#fff" }}>
        <summary>More options <span aria-hidden>▾</span></summary>
        <div className="cbapp-disc-body">
          <F label="Price per board ($)"><Num value={pBoard} set={setPBoard} /></F>
          <F label="Labor rate ($ / sq ft, optional)"><Num value={labor} set={setLabor} placeholder="0" /></F>
          <F label="Waste %"><Stepper value={waste} set={setWaste} min={0} max={40} suffix="%" /></F>
        </div>
      </details>
      <Sticky total={r.total} onCta={() => startQuote(router, "deck", items, `Deck boards — ${len}×${wid} ft`, { len, wid })} />
    </>
  );
}

export const CALCS = [
  { slug: "slab", name: "Concrete Slab", ico: "🧱", el: <SlabCalc /> },
  { slug: "stair", name: "Stair", ico: "🪜", el: <StairCalc /> },
  { slug: "roofing", name: "Roofing & Pitch", ico: "🏠", el: <RoofCalc /> },
  { slug: "drywall", name: "Drywall", ico: "🧱", el: <DrywallCalc /> },
  { slug: "paint", name: "Paint", ico: "🎨", el: <PaintCalc /> },
  { slug: "tile", name: "Tile & Flooring", ico: "🧩", el: <TileCalc /> },
  { slug: "deck", name: "Deck Board", ico: "🪵", el: <DeckCalc /> },
];

export function calcBySlug(slug) {
  return CALCS.find((c) => c.slug === slug) || null;
}
