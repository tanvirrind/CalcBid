// Shared calculator math for the /app section (Next.js, app router).
// Pure functions, no React — used by /app calculator screens.
// Formulas match the CalcBid App v1.5 prototype (artifact slug calcbid-prototype),
// which was audit-verified against worked examples in the PRD.
//
// NOTE — known differences vs the public site components (kept intentionally,
// recorded in PORT_MANIFEST.md):
//   - slab: public bags counts ignore waste; /app applies waste to bag counts.
//   - stair: public rounds to target riser; /app uses ceil(rise / maxRiser).
//   - drywall: public uses sheets/6 buckets etc.; /app uses area-based rules.
//   - paint: public adds 10% waste on top; /app reports exact + buy-up.
//   - roofing: bundle counts identical; /app prices per bundle, public per square.

export const r2 = (n) => Math.round((Number(n) || 0) * 100) / 100;

// ── Concrete slab ──────────────────────────────────────────────────────────
export function calcSlab({
  len = 0, lenIn = 0, wid = 0, widIn = 0,
  thickIn = 4, wastePct = 10, mode = "ready-mix",
  priceYd = 165, bagLb = 80, priceBag = 6.5, laborRate = 0,
} = {}) {
  const L = Math.max(0, len) + Math.max(0, lenIn) / 12;
  const W = Math.max(0, wid) + Math.max(0, widIn) / 12;
  const area = L * W;
  const volCuFt = area * (Math.max(0, thickIn) / 12);
  const yardsExact = volCuFt / 27;
  const wasteF = 1 + Math.max(0, wastePct) / 100;
  const adjCuFt = volCuFt * wasteF;
  const orderYards = yardsExact * wasteF;
  const yieldFt = bagLb === 60 ? 0.45 : 0.6;
  const bags = Math.ceil(adjCuFt / yieldFt - 1e-9);
  const material = mode === "bags" ? bags * priceBag : orderYards * priceYd;
  const labor = area * laborRate;
  return {
    area: r2(area), volCuFt: r2(volCuFt), yardsExact: r2(yardsExact),
    orderYards, bags, bagLb, material, labor, total: material + labor,
  };
}

// ── Stair ──────────────────────────────────────────────────────────────────
export function calcStair({
  riseIn = 108, maxRiser = 7.75, treadDepth = 10, widthIn = 36,
  stringerPrice = 28, treadPrice = 14,
} = {}) {
  const rise = Math.max(1, riseIn);
  const risers = Math.max(1, Math.ceil(rise / Math.max(0.1, maxRiser)));
  const actualRiser = rise / risers;
  const treads = risers - 1;
  const totalRun = treads * treadDepth;
  const stringerIn = Math.sqrt(rise * rise + totalRun * totalRun);
  const stringerFt = stringerIn / 12;
  const buyLen = [8, 10, 12, 14, 16].find((x) => x >= stringerFt) || 16;
  const stringers = widthIn <= 24 ? 2 : widthIn <= 40 ? 3 : 4;
  const comfort = 2 * actualRiser + treadDepth;
  return {
    risers, actualRiser, treads, totalRun, stringerIn, stringerFt, buyLen,
    stringers, comfort,
    checks: {
      riserOk: actualRiser <= 7.75 + 1e-9,
      treadOk: treadDepth >= 10 - 1e-9,
      comfortOk: comfort >= 24 - 1e-9 && comfort <= 27 + 1e-9,
    },
    material: stringers * stringerPrice + treads * treadPrice,
  };
}

// ── Roofing & pitch ────────────────────────────────────────────────────────
export function calcRoof({
  len = 30, wid = 40, rise = 6, wastePct = 10,
  priceBundle = 38, laborSq = 0,
} = {}) {
  const mult = Math.sqrt(1 + (rise / 12) ** 2);
  const angle = (Math.atan(rise / 12) * 180) / Math.PI;
  const area = len * wid * mult;
  const squares = area / 100;
  const sqWaste = squares * (1 + Math.max(0, wastePct) / 100);
  const bundles = Math.ceil(sqWaste * 3 - 1e-9);
  const rolls = Math.ceil(area / 400 - 1e-9);
  const material = bundles * priceBundle;
  const labor = sqWaste * laborSq;
  return { mult, angle, area, squares, sqWaste, bundles, rolls, material, labor, total: material + labor };
}

// ── Drywall ────────────────────────────────────────────────────────────────
export function calcDrywall({
  len = 12, wid = 12, height = 8, ceiling = true, sheetSqft = 32,
  wastePct = 10, priceSheet = 14, laborRate = 0,
} = {}) {
  const walls = 2 * (len + wid) * height;
  const area = walls + (ceiling ? len * wid : 0);
  const adj = area * (1 + Math.max(0, wastePct) / 100);
  const sheets = Math.ceil(adj / sheetSqft - 1e-9);
  const buckets = Math.ceil(adj / 450 - 1e-9); // 4.5-gal buckets
  const tape = Math.ceil(((adj * 0.37) / 500) - 1e-9); // 500-ft rolls
  const screws = Math.ceil(adj / 240 - 1e-9); // lb
  const material = sheets * priceSheet;
  const labor = adj * laborRate;
  return { walls: r2(walls), area: r2(area), adj: r2(adj), sheets, buckets, tape, screws, material, labor, total: material + labor };
}

// ── Paint ──────────────────────────────────────────────────────────────────
export function calcPaint({
  len = 12, wid = 14, height = 8, coats = 2, doors = 2, windows = 2,
  ceiling = false, coverage = 350, priceGal = 45, laborRate = 0,
} = {}) {
  const gross = 2 * (len + wid) * height;
  const paintable = Math.max(0, gross - doors * 21 - windows * 15 + (ceiling ? len * wid : 0));
  const exact = (paintable * coats) / Math.max(1, coverage);
  const buy = Math.ceil(exact - 1e-9);
  const material = buy * priceGal;
  const labor = paintable * laborRate;
  return { gross: r2(gross), paintable: r2(paintable), exact, buy, material, labor, total: material + labor };
}

// ── Tile & flooring ────────────────────────────────────────────────────────
export function calcTile({
  len = 10, wid = 12, mode = "tile",
  tileL = 12, tileW = 24, perBox = 10, priceBox = mode === "tile" ? 55 : 48,
  covPerBox = 20, wastePct = 10, laborRate = 0,
} = {}) {
  const area = len * wid;
  const adj = area * (1 + Math.max(0, wastePct) / 100);
  const labor = adj * laborRate;
  if (mode === "tile") {
    const tileSqft = (tileL * tileW) / 144;
    const tiles = Math.ceil(adj / tileSqft - 1e-9);
    const boxes = Math.ceil(tiles / Math.max(1, perBox) - 1e-9);
    const material = boxes * priceBox;
    return { mode, area: r2(area), adj: r2(adj), tileSqft: r2(tileSqft), tiles, boxes, buySqft: r2(boxes * perBox * tileSqft), material, labor, total: material + labor };
  }
  const boxes = Math.ceil(adj / Math.max(1, covPerBox) - 1e-9);
  const material = boxes * priceBox;
  return { mode, area: r2(area), adj: r2(adj), boxes, buySqft: r2(boxes * covPerBox), material, labor, total: material + labor };
}

// ── Deck board ─────────────────────────────────────────────────────────────
export function calcDeck({
  len = 16, wid = 12, along = "length", boardLen = 16,
  wastePct = 10, joist = 16, priceBoard = 18, laborRate = 0,
} = {}) {
  const runFt = along === "length" ? len : wid;
  const otherIn = (along === "length" ? wid : len) * 12;
  const rows = Math.ceil(otherIn / (5.5 + 0.125) - 1e-9);
  const perRow = Math.ceil(runFt / Math.max(1, boardLen) - 1e-9);
  const raw = rows * perRow;
  const boards = Math.ceil(raw * (1 + Math.max(0, wastePct) / 100) - 1e-9);
  const linearFt = boards * boardLen;
  const fasteners = Math.round(boards * (Math.floor((boardLen * 12) / Math.max(1, joist)) + 1) * 2);
  const area = len * wid;
  const material = boards * priceBoard;
  const labor = area * laborRate;
  return { runFt, rows, perRow, raw, boards, linearFt, fasteners, material, labor, total: material + labor };
}

// Worked examples (audit-verified in the prototype) for smoke tests.
export const WORKED_EXAMPLES = {
  slab: { inputs: { len: 10, wid: 10, thickIn: 4, wastePct: 10, mode: "ready-mix", priceYd: 165 }, expect: { orderYards: 1.36, material: 224.07 } },
  slabBags: { inputs: { len: 10, wid: 10, thickIn: 4, wastePct: 10, mode: "bags", bagLb: 80, priceBag: 6.5 }, expect: { bags: 62, material: 403 } },
  stair: { inputs: { riseIn: 108 }, expect: { risers: 14, actualRiser: 7.71, buyLen: 16, stringers: 3 } },
  roof: { inputs: { len: 30, wid: 40, rise: 6 }, expect: { bundles: 45, material: 1710 } },
  drywall: { inputs: { len: 12, wid: 12 }, expect: { sheets: 19, material: 266 } },
  paint: { inputs: { len: 12, wid: 14 }, expect: { paintable: 344, buy: 2, material: 90 } },
  tile: { inputs: { len: 10, wid: 12, mode: "tile" }, expect: { tiles: 66, boxes: 7, material: 385 } },
  flooring: { inputs: { len: 10, wid: 12, mode: "flooring" }, expect: { boxes: 7, material: 336 } },
  deck: { inputs: { len: 16, wid: 12 }, expect: { boards: 29, material: 522 } },
};
