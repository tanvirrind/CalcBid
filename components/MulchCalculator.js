"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const num = (v, d = 0) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : d;
};

export default function MulchCalculator() {
  const [area, setArea] = useState("500");
  const [depth, setDepth] = useState("3");
  const [material, setMaterial] = useState("mulch");
  const [bulkPrice, setBulkPrice] = useState("45");
  const [bagPrice, setBagPrice] = useState("4.5");

  const r = useMemo(() => {
    const sqft = num(area);
    const yards = (sqft * (num(depth) / 12)) / 27;
    const bags = Math.ceil(yards / 0.074); // 2 cu ft bag ≈ 0.074 cu yd
    const bulkCost = yards * num(bulkPrice);
    const bagCost = bags * num(bagPrice);
    const delivery = yards >= 1 ? 75 : 0;
    return { sqft, yards, bags, bulkCost, bagCost, delivery };
  }, [area, depth, material, bulkPrice, bagPrice]);

  const isMulch = material === "mulch";
  const quoteItems = [
    { desc: `${isMulch ? "Hardwood mulch" : "Topsoil"} — ${r.yards.toFixed(1)} cu yd delivered`, qty: 1, price: Math.round((r.bulkCost + r.delivery) * 100) / 100 },
    { desc: `Spreading labor — ${r.sqft.toFixed(0)} sq ft`, qty: 1, price: Math.round(r.sqft * 0.75 * 100) / 100 },
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
        <h3 style={{ marginTop: 0 }}>Bed details</h3>
        <div className="field-row">
          <F label="Bed area (sq ft)" value={area} set={setArea} hint="Length × width of all beds" />
          <F label="Depth (inches)" value={depth} set={setDepth} hint="3 in for mulch, 4–6 for new beds" />
        </div>
        <div className="field">
          <label>Material</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "2px solid var(--line)", fontSize: 15, background: "#fff" }}>
            <option value="mulch">Hardwood mulch</option>
            <option value="soil">Topsoil / garden mix</option>
          </select>
        </div>

        <h3 style={{ marginTop: 26 }}>Pricing</h3>
        <div className="field-row">
          <F label="Bulk price ($/cu yd)" value={bulkPrice} set={setBulkPrice} hint="Delivered, typical $35–$60" />
          <F label="Bag price ($/2 cu ft)" value={bagPrice} set={setBagPrice} hint="Retail bags $3–$6" />
        </div>
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        <div className="r-row"><span className="r-label">Cubic yards</span><span>{r.yards.toFixed(1)} cu yd</span></div>
        <div className="r-row"><span className="r-label">Or in bags</span><span>{r.bags.toLocaleString()} bags (2 cu ft)</span></div>
        <div className="r-row"><span className="r-label">Bulk delivered</span><span>{fmt$(r.bulkCost + r.delivery)}</span></div>
        <div className="r-row"><span className="r-label">Bags retail</span><span>{fmt$(r.bagCost)}</span></div>
        <div className="r-row total"><span>Bulk saves you</span><span>{fmt$(Math.max(0, r.bagCost - r.bulkCost - r.delivery))}</span></div>
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>Send to quote →</Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            One cubic yard covers ~100 sq ft at 3 inches deep. Bulk beats bags on anything over a yard.
          </div>
        </div>
      </div>
    </div>
  );
}
