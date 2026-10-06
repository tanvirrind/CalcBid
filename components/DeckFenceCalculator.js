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

export default function DeckFenceCalculator() {
  const [mode, setMode] = useState("deck");

  // deck state
  const [deckL, setDeckL] = useState("16");
  const [deckW, setDeckW] = useState("12");
  const [boardW, setBoardW] = useState("5.5");
  const [boardLen, setBoardLen] = useState("12");
  const [gap, setGap] = useState("0.25");
  const [joistSpacing, setJoistSpacing] = useState("16");
  const [deckPriceLF, setDeckPriceLF] = useState("2");
  const [framePriceLF, setFramePriceLF] = useState("1.2");
  const [postPrice, setPostPrice] = useState("15");
  const [deckLabor, setDeckLabor] = useState("15");

  // fence state
  const [fenceLF, setFenceLF] = useState("150");
  const [fenceH, setFenceH] = useState("6");
  const [picketW, setPicketW] = useState("5.5");
  const [postSpacing, setPostSpacing] = useState("8");
  const [gates, setGates] = useState("1");
  const [picketPrice, setPicketPrice] = useState("3.5");
  const [fencePostPrice, setFencePostPrice] = useState("18");
  const [railPrice, setRailPrice] = useState("8");
  const [bagPrice, setBagPrice] = useState("6.5");
  const [fenceLabor, setFenceLabor] = useState("25");

  const deck = useMemo(() => {
    const L = Math.max(0.1, num(deckL)), W = Math.max(0.1, num(deckW));
    const bW = Math.max(0.5, num(boardW, 5.5)), bLen = Math.max(1, num(boardLen, 12));
    const g = Math.max(0, num(gap));
    const spacing = Math.max(1, num(joistSpacing, 16));
    const area = L * W;
    const boardsAcross = Math.ceil((W * 12) / (bW + g));
    const deckingLF = boardsAcross * L;
    const boardsToBuy = boardsAcross * Math.ceil(L / bLen);
    const joists = Math.ceil((W * 12) / spacing) + 1;
    const frameLF = (joists + 2) * L; // joists + 2 rim joists
    const posts = (Math.floor(L / 8) + 1) * (Math.floor(W / 8) + 1);
    const concreteBags = posts; // 1 bag per footing
    const screws = Math.ceil(area / 100) * 350;
    const deckingCost = deckingLF * num(deckPriceLF);
    const frameCost = frameLF * num(framePriceLF) + posts * num(postPrice) + concreteBags * 6.5;
    const laborCost = area * num(deckLabor);
    return {
      area, boardsAcross, deckingLF, boardsToBuy, joists, frameLF, posts,
      concreteBags, screws, deckingCost, frameCost, laborCost,
      total: deckingCost + frameCost + laborCost,
    };
  }, [deckL, deckW, boardW, boardLen, gap, joistSpacing, deckPriceLF, framePriceLF, postPrice, deckLabor]);

  const fence = useMemo(() => {
    const lf = Math.max(1, num(fenceLF));
    const pW = Math.max(0.5, num(picketW, 5.5));
    const spacing = Math.max(1, num(postSpacing, 8));
    const pickets = Math.ceil(((lf * 12) / pW) * 1.05); // 5% waste
    const sections = Math.ceil(lf / spacing);
    const posts = sections + 1 + num(gates) * 2;
    const railsPerSection = num(fenceH) >= 8 ? 3 : 2;
    const rails = sections * railsPerSection;
    const bags = posts;
    const picketCost = pickets * num(picketPrice);
    const postCost = posts * num(fencePostPrice);
    const railCost = rails * num(railPrice);
    const concreteCost = bags * num(bagPrice);
    const laborCost = lf * num(fenceLabor);
    return {
      pickets, posts, rails, bags, picketCost, postCost, railCost,
      concreteCost, laborCost,
      total: picketCost + postCost + railCost + concreteCost + laborCost,
    };
  }, [fenceLF, fenceH, picketW, postSpacing, gates, picketPrice, fencePostPrice, railPrice, bagPrice, fenceLabor]);

  const quoteItems =
    mode === "deck"
      ? [
          { desc: `Decking boards — ${deck.boardsToBuy} boards (${deck.deckingLF.toFixed(0)} LF, materials)`, qty: 1, price: Math.round(deck.deckingCost * 100) / 100 },
          { desc: `Framing — ${deck.joists} joists + posts + footings (materials)`, qty: 1, price: Math.round(deck.frameCost * 100) / 100 },
          { desc: "Labor", qty: 1, price: Math.round(deck.laborCost * 100) / 100 },
        ]
      : [
          { desc: `Fence pickets — ${fence.pickets} pickets (materials)`, qty: 1, price: Math.round(fence.picketCost * 100) / 100 },
          { desc: `Posts, rails & concrete — ${fence.posts} posts, ${fence.rails} rails (materials)`, qty: 1, price: Math.round((fence.postCost + fence.railCost + fence.concreteCost) * 100) / 100 },
          { desc: "Labor", qty: 1, price: Math.round(fence.laborCost * 100) / 100 },
        ];
  const quoteHref = "/quote?items=" + encodeURIComponent(JSON.stringify(quoteItems));

  return (
    <div className="calc-layout">
      <div className="card">
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <ModeBtn active={mode === "deck"} onClick={() => setMode("deck")}>Deck</ModeBtn>
          <ModeBtn active={mode === "fence"} onClick={() => setMode("fence")}>Fence</ModeBtn>
        </div>

        {mode === "deck" ? (
          <>
            <h3 style={{ marginTop: 0 }}>Deck size</h3>
            <div className="field-row">
              <F label="Length (ft)" value={deckL} set={setDeckL} />
              <F label="Width (ft)" value={deckW} set={setDeckW} />
            </div>
            <h3 style={{ marginTop: 26 }}>Decking</h3>
            <div className="field-row">
              <F label="Board width (in)" value={boardW} set={setBoardW} hint='5.5" for 5/4×6, 3.5" for 2×4' />
              <F label="Board length (ft)" value={boardLen} set={setBoardLen} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Gap between boards (in)" value={gap} set={setGap} hint="Usually 1/8–1/4 in" />
              <F label="Joist spacing (in)" value={joistSpacing} set={setJoistSpacing} hint='16" standard, 12" for diagonal' />
            </div>
            <h3 style={{ marginTop: 26 }}>Pricing</h3>
            <div className="field-row">
              <F label="Decking ($ / LF)" value={deckPriceLF} set={setDeckPriceLF} hint="PT ~$1.50–2.50, composite ~$3–5" />
              <F label="Framing lumber ($ / LF)" value={framePriceLF} set={setFramePriceLF} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Post price ($ each)" value={postPrice} set={setPostPrice} />
              <F label="Labor ($ / sq ft)" value={deckLabor} set={setDeckLabor} hint="US: roughly $15–35" />
            </div>
          </>
        ) : (
          <>
            <h3 style={{ marginTop: 0 }}>Fence run</h3>
            <div className="field-row">
              <F label="Total length (ft)" value={fenceLF} set={setFenceLF} />
              <F label="Fence height (ft)" value={fenceH} set={setFenceH} hint="4, 6, or 8" />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Picket width (in)" value={picketW} set={setPicketW} hint='5.5" typical' />
              <F label="Post spacing (ft)" value={postSpacing} set={setPostSpacing} hint="8 ft standard" />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Gates" value={gates} set={setGates} hint="Adds 2 posts each" />
            </div>
            <h3 style={{ marginTop: 26 }}>Pricing</h3>
            <div className="field-row">
              <F label="Picket ($ each)" value={picketPrice} set={setPicketPrice} />
              <F label="Post ($ each)" value={fencePostPrice} set={setFencePostPrice} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Rail ($ each)" value={railPrice} set={setRailPrice} />
              <F label="Concrete bag ($ each)" value={bagPrice} set={setBagPrice} />
            </div>
            <div className="field-row" style={{ marginTop: 12 }}>
              <F label="Labor ($ / LF)" value={fenceLabor} set={setFenceLabor} hint="US: roughly $15–40" />
            </div>
          </>
        )}
      </div>

      <div className="result-card">
        <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".1em", color: "#94a3b8", marginBottom: 8 }}>
          Estimate
        </div>
        {mode === "deck" ? (
          <>
            <div className="r-row"><span className="r-label">Deck area</span><span>{deck.area.toFixed(0)} sq ft</span></div>
            <div className="r-row"><span className="r-label">Decking boards</span><span>{deck.boardsToBuy} boards</span></div>
            <div className="r-row"><span className="r-label">Decking linear ft</span><span>{deck.deckingLF.toFixed(0)} LF</span></div>
            <div className="r-row"><span className="r-label">Joists + rim</span><span>{deck.joists + 2} pcs ({deck.frameLF.toFixed(0)} LF)</span></div>
            <div className="r-row"><span className="r-label">Posts + footings</span><span>{deck.posts} ({deck.concreteBags} bags concrete)</span></div>
            <div className="r-row"><span className="r-label">Screws (approx)</span><span>{deck.screws.toLocaleString()}</span></div>
            <div className="r-row"><span className="r-label">Decking cost</span><span>{fmt$(deck.deckingCost)}</span></div>
            <div className="r-row"><span className="r-label">Framing cost</span><span>{fmt$(deck.frameCost)}</span></div>
            <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(deck.laborCost)}</span></div>
            <div className="r-row total"><span>Job total</span><span>{fmt$(deck.total)}</span></div>
          </>
        ) : (
          <>
            <div className="r-row"><span className="r-label">Pickets needed</span><span>{fence.pickets.toLocaleString()} pickets</span></div>
            <div className="r-row"><span className="r-label">Posts</span><span>{fence.posts} posts</span></div>
            <div className="r-row"><span className="r-label">Rails</span><span>{fence.rails} rails</span></div>
            <div className="r-row"><span className="r-label">Concrete bags</span><span>{fence.bags} bags</span></div>
            <div className="r-row"><span className="r-label">Materials cost</span><span>{fmt$(fence.picketCost + fence.postCost + fence.railCost + fence.concreteCost)}</span></div>
            <div className="r-row"><span className="r-label">Labor cost</span><span>{fmt$(fence.laborCost)}</span></div>
            <div className="r-row total"><span>Job total</span><span>{fmt$(fence.total)}</span></div>
          </>
        )}
        <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
          <Link className="btn btn-primary" href={quoteHref}>
            Send to quote →
          </Link>
          <div style={{ fontSize: 12.5, color: "#94a3b8" }}>
            {mode === "deck"
              ? "Board counts include a full board per run — check your supplier's actual stock lengths."
              : "Picket count includes 5% waste; gates add 2 posts each."}
          </div>
        </div>
      </div>
    </div>
  );
}
