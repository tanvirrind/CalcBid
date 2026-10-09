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
    <input aria-label={label} type="number" value={value} min={min} step={step}
      onChange={(e) => set(e.target.value)} />
    {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{hint}</div>}
  </div>
);

const ModeBtn = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={active ? "btn btn-primary" : "btn btn-ghost"}
    style={{ flex: 1 }}
  >
    {children}
  </button>
);

export default function ConcreteDrywallCalculator({ defaultPriceYard, defaultLabor } = {}) {
  const [mode, setMode] = useState("concrete");

  // concrete state
  const [slabL, setSlabL] = useState("20");
  const [slabW, setSlabW] = useState("10");
  const [thick, setThick] = useState("4");
  const [concWaste, setConcWaste] = useState("10");
  const [priceYard, setPriceYard] = useState(defaultPriceYard || "150");
  const [bagPrice, setBagPrice] = useState("6");
  const [concLabor, setConcLabor] = useState(defaultLabor || "8");

  // drywall state
  const [roomL, setRoomL] = useState("12");
  const [roomW, setRoomW] = useState("10");
  const [roomH, setRoomH] = useState("8");
  const [ceiling, setCeiling] = useState(true);
  const [openings, setOpenings] = useState("35");
  const [sheetPrice, setSheetPrice] = useState("14");
  const [mudPrice, setMudPrice] = useState("18");
  const [dryLabor, setDryLabor] = useState("2.25");

  const conc = useMemo(() => {
    const L = Math.max(0.1, num(slabL)), W = Math.max(0.1, num(slabW));
    const t = Math.max(0.5, num(thick, 4)) / 12;
    const area = L * W;
    const cuft = area * t;
    const yards = (cuft / 27) * (1 + num(concWaste) / 100);
    const bags = Math.ceil((cuft * (1 + num(concWaste) / 100)) / 0.6); // 80 lb bag ≈ 0.6 cu ft
    const readyMixCost = yards * num(priceYard);
    const bagCost = bags * num(bagPrice);
    const laborCost = area * num(concLabor);
    return { area, cuft, yards, bags, readyMixCost, bagCost, laborCost };
  }, [slabL, slabW, thick, concWaste, priceYard, bagPrice, concLabor]);

  const dry = useMemo(() => {
    const L = Math.max(0.1, num(roomL)), W = Math.max(0.1, num(roomW)), H = Math.max(0.1, num(roomH));
    const wallArea = 2 * (L + W) * H - Math.max(0, num(openings));
    const total = Math.max(1, wallArea + (ceiling ? L * W : 0));
    const sheets = Math.ceil(total / 32); // 4×8 sheet
    const screws = sheets * 32;
    const buckets = Math.ceil(total / 400); // joint compound
    const tapeRolls = Math.ceil(total / 400);
    const sheetCost = sheets * num(sheetPrice);
    const mudCost = buckets * num(mudPrice);
    const laborCost = total * num(dryLabor);
    return { wallArea, total, sheets, screws, buckets, tapeRolls, sheetCost, mudCost, laborCost,
             total_cost: sheetCost + mudCost + laborCost };
  }, [roomL, roomW, roomH, ceiling, openings, sheetPrice, mudPrice, dryLabor]);

  const quoteItems =
    mode === "concrete"
      ? [
          { desc: `Concrete — ${conc.yards.toFixed(2)} cubic yards (ready-mix, materials)`, qty: 1, price: Math.round(conc.readyMixCost * 100) / 100 },
          { desc: "Labor", qty: 1, price: Math.round(conc.laborCost * 100) / 100 },
        ]
      : [
          { desc: `Drywall — ${dry.sheets} sheets + mud & tape (materials)`, qty: 1, price: Math.round((dry.sheetCost + dry.mudCost) * 100) / 100 },
          { desc: "Labor (hang & finish)", qty: 1, price: Math.round(dry.laborCost * 100) / 100 },
        ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  return (
    <div className="calc-layout">
      <div className="card">
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <ModeBtn active={mode === "concrete"} onClick={() => setMode("concrete")}>Concrete</ModeBtn>
          <ModeBtn active={mode === "drywall"} onClick={() => setMode("drywall")}>Drywall</ModeBtn>
        </div>

        {mode === "concrete" ? (
          <>
            <h3 style={{ marginTop: 0 }}>Slab size</h3>
            <div className="field-row">
              <F label="Length (ft)" value={slabL} set={setSlabL} />
              <F label="Width (ft)" value={slabW} set={setSlabW} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Thickness (in)" value={thick} set={setThick} hint="4 in standard, 6 in for driveways" />
              <F label="Waste %" value={concWaste} set={setConcWaste} hint="10% is the safe default" />
            </div>
            <h3 style={{ marginTop: 26 }}>Pricing</h3>
            <div className="field-row">
              <F label="Ready-mix ($ / yard)" value={priceYard} set={setPriceYard} hint="US: roughly $125–175" />
              <F label="Bag price ($ each)" value={bagPrice} set={setBagPrice} hint="80 lb bag" />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Labor ($ / sq ft)" value={concLabor} set={setConcLabor} hint="US: roughly $6–12" />
            </div>
          </>
        ) : (
          <>
            <h3 style={{ marginTop: 0 }}>Room size</h3>
            <div className="field-row">
              <F label="Length (ft)" value={roomL} set={setRoomL} />
              <F label="Width (ft)" value={roomW} set={setRoomW} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Ceiling height (ft)" value={roomH} set={setRoomH} />
              <F label="Openings (sq ft)" value={openings} set={setOpenings} hint="~21 per door, ~15 per window" />
            </div>
            <div className="field" style={{ marginTop: 12 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={ceiling}
                  onChange={(e) => setCeiling(e.target.checked)}
                  style={{ width: 18, height: 18 }}
                />
                Include ceiling
              </label>
            </div>
            <h3 style={{ marginTop: 26 }}>Pricing</h3>
            <div className="field-row">
              <F label="Sheet price ($ each)" value={sheetPrice} set={setSheetPrice} hint="4×8 sheet" />
              <F label="Mud bucket ($ each)" value={mudPrice} set={setMudPrice} hint="4.5 gal bucket" />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Labor ($ / sq ft)" value={dryLabor} set={setDryLabor} hint="Hang & finish, US: ~$1.50–3" />
            </div>
          </>
        )}
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        {mode === "concrete" ? (
          <>
            <div className="r-row"><span className="r-label">Slab area</span><span>{conc.area.toFixed(0)} sq ft</span></div>
            <div className="r-row"><span className="r-label">Volume</span><span>{conc.cuft.toFixed(1)} cu ft</span></div>
            <div className="r-row"><span className="r-label">Ready-mix to order</span><span>{conc.yards.toFixed(2)} cubic yards</span></div>
            <div className="r-row"><span className="r-label">Or bags (80 lb)</span><span>{conc.bags.toLocaleString()} bags</span></div>
            <div className="r-row"><span className="r-label">Ready-mix cost</span><span>{fmt$(conc.readyMixCost)}</span></div>
            <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(conc.laborCost)}</span></div>
            <div className="r-row total"><span>Job total</span><span>{fmt$(conc.readyMixCost + conc.laborCost)}</span></div>
            <div style={{ fontSize: 12.5, color: "#94a3b8", marginTop: 10 }}>
              Bag route would run about {fmt$(conc.bagCost)} in bags — ready-mix wins past ~1 yard.
            </div>
          </>
        ) : (
          <>
            <div className="r-row"><span className="r-label">Drywall area</span><span>{dry.total.toFixed(0)} sq ft</span></div>
            <div className="r-row"><span className="r-label">Sheets (4×8)</span><span>{dry.sheets} sheets</span></div>
            <div className="r-row"><span className="r-label">Screws (approx)</span><span>{dry.screws.toLocaleString()}</span></div>
            <div className="r-row"><span className="r-label">Mud buckets</span><span>{dry.buckets} buckets</span></div>
            <div className="r-row"><span className="r-label">Tape rolls</span><span>{dry.tapeRolls} rolls</span></div>
            <div className="r-row"><span className="r-label">Materials cost</span><span>{fmt$(dry.sheetCost + dry.mudCost)}</span></div>
            <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(dry.laborCost)}</span></div>
            <div className="r-row total"><span>Job total</span><span>{fmt$(dry.total_cost)}</span></div>
          </>
        )}
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>
            Send to quote →
          </Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            {mode === "concrete"
              ? "Order ready-mix by the cubic yard with waste included — short loads cost extra."
              : "Sheets rounded up to full 4×8s — keep one spare for patches."}
          </div>
        </div>
      </div>
    </div>
  );
}
