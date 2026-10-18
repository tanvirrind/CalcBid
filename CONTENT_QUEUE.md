# CalcBid Daily Article Queue

## PUBLISHED 2026-10-17 — kitchen & bath cluster launch (5 guides)

Staged 2026-10-17, pushed interactively same day. Live-verified 2026-10-18 (5/5 HTTP 200):
- bathroom-remodel-cost (PILLAR, 14,800 vol/KD41) — by type, tier, element; links down to tub-to-shower + small-bathroom; sideways to tile pillar/shower/bathroom-tile guides
- kitchen-remodel-cost (PILLAR, 12,100 vol/KD41; "kitchen renovation cost" 5,400 folded in) — by tier, element breakdown, minor vs major vs upscale + ROI; links down to cabinets; sideways to backsplash/lvp/paint guides
- tub-to-shower-conversion-cost (2,400 vol/KD5 — the quick win) — prefab vs one-day vs custom tile, accessibility, resale note; links up to bathroom pillar + shower-tile guide
- small-bathroom-remodel-cost (2,400 vol/KD12) — 5×7 + powder rooms, per-sq-ft paradox, space math; links up to pillar + bathroom-tile guide
- kitchen-cabinet-installation-cost (880 vol/KD16 + 1,000/KD16 + 880/KD13 variants) — per-lin-ft pricing, stock/semi-custom/custom, install-only labor, reface teaser (no refacing link — batch 2)
Cross-link edits (batch2): tile-installation-cost, shower-tile-installation-cost,
bathroom-tile-installation-cost, tile-backsplash-installation-cost, lvp-flooring-cost
each got a contextual paragraph linking the new clusters.
Staged: hidden_files/push-batches/batch1.json (88.3KB, 5 new pages) ·
batch2.json (104.5KB, 5 cross-link edits) · batch3.json (31.0KB, LAST: lib/guides.js + app/sitemap.js).
PUBLISHED 2026-10-17 (kitchen/bath batch 2 — pushed in 3 batches, verified live 5/5 200 + sitemap 71 guides + production seo:check 883/883; clusters #3 + #4 COMPLETE):
- kitchen-cabinet-refacing-cost, countertop-installation-cost, bathtub-replacement-cost,
  bathroom-vanity-installation-cost, walk-in-shower-cost (all with byline + DIY-vs-Pro +
  permits + /quote + cluster links both directions)
Clusters #3/#4 now complete (pillars + all members). No further kitchen/bath backlog.

## Internal-linking fix set — part of the Trends push (NOT yet pushed)

Folded into the Trends push — 6 batches (batch1: 3 Trends pages; batch2-5: 20 fix files
across 16 guides + 4 calculators; batch6: wiring LAST). Fixes: 5 hub-only pages now have
in-content inbound, mulch/water-heater Related-guides blocks completed, Trends guides get
10 in-content inbound links on publish, 2 forced calculator links skipped (vanity/countertop),
2 anchor variations.

## Google Trends batch (D3/D4/D5) — WRITTEN LOCALLY, ready to push (staged 2026-10-17)

3 new guides from the Google Trends brief pack (~/workspace/your_files/google-trends-briefs-2026-10-17.md, Section D), written at full current standard (GuideArticle updated="October 2026", cost tables, step-by-step, comparisons, mistakes list, 6 FAQs + FAQPage schema, metadata title ≤50 chars / description ≤155, DIY-vs-Pro + "Do you need a permit?" sections, internal links + /quote).
- home-winterization-cost (D4, seasonal — written first) — ~2,470 words: checklist-by-cost table, cost-of-skipping fear math (burst pipe $200–$3,000 / restoration $450–$15,000 / severe $10,000–$25,000), 48h freeze-warning list, southern vs northern homes, pro services, water-heater winter checklist, vacant-property section, leak-detector tech. Links: attic-insulation + gutter + water-heater calculators, blown-in/gutter guides.
- diy-vs-pro-home-renovation-cost (D3) — ~2,680 words: 6-project comparison table using CalcBid's published figures (paint/tile/LVP/deck boards/drywall/fence), hidden DIY costs, tool math, never-DIY list, room-by-room hybrid split, permit table, hybrid kitchen example, resale section. Every row links its calculator + guide; closing /quote CTA.
- asphalt-vs-concrete-driveway-cost (D5, contractor angle) — ~2,380 words: $5–$12/sq ft asphalt vs $6–$15 concrete installed, per-ton bidding decoder, tear-out table, lifetime math, upsells, low-bid red flags, PG grades, regional pricing, 10-yr maintenance calendar, paver third option. Cross-links cubicyardcalculator.site calculators: /calculators/driveway-cost-calculator/ and /calculators/asphalt-calculator/ (both verified HTTP 200). No CalcBid driveway calculator built per angle split.
Verified: npx next build clean (128/128), local seo:check 907/907 (baseline 883; one real catch fixed — 3 meta descriptions >155 chars; D5's cubicyard links pointed at trailing-slash canonicals). Link audit: 41 internal hrefs across the 3 pages, 0 broken.
Staged (6 batches, Trends pages + internal-link fix set; wiring LAST): hidden_files/push-batches/batch1.json (3 new pages) · batch2.json (link-fix round 1) · batch3.json (link-fix round 2) · batch4.json (link-fix round 3 + calculator-match links) · batch5.json (mulch/water-heater related blocks + anchor variations) · batch6.json (LAST: lib/guides.js + app/sitemap.js wiring). Re-verified 2026-10-18: all 6 batch files byte-equal to local working copies (batch1 re-staged for the diy guide's mulch-calculator link fix).

Backlog and dedup tracker for the daily 5-article automation. The worker updates
this file every run: moves written topics to Published, adds new rejections with
reasons, and keeps Backlog fresh.

## Trust layer (LIVE — pushed 2026-10-17, verified live 2026-10-18: /methodology + /disclaimer HTTP 200, "CalcBid Research Team" byline + /methodology link rendered on live guides)

Methodology + disclaimer pages built (sitemap+footer wired); research-team
byline added on all 61 guides via shared GuideArticle shell (updated="October 2026"
prop on every page; GuideByline component renders name + last-updated + /methodology
link; Article schema dateModified now derived from the prop). DIY-vs-Pro and
permit sections added to 8 flagship guides (deck-repair-cost, tile-installation-cost,
cost-to-paint-a-house, roof-replacement-cost-2026, chain-link-fence-installation-cost,
stucco-repair-cost, gutter-guards-cost, lvp-flooring-cost — 3 guides got both sections,
5 already had DIY sections so got permits only). About page expanded (calculator→quote
model, methodology link, trades list updated). HOMEPAGE PRICING: verified — homepage
(Free / Solo $19 / Crew $49 + "plans start at $19 a month" FAQ) already matches
app/pricing/page.js exactly; NO change made. Playbook updated: byline + DIY + permits
are now required sections for all future guides.

## Published — calculator expansion (2026-10-16, calculators 18 → 24)

6 new calculators written at full depth targeting Semrush keyword wins: stair
(22,200 vol), roof pitch (14,800), concrete slab (14,800; cost-led copy),
drywall (12,100), wallpaper (8,100, with pattern repeat), deck board (6,600).
Verified (next build clean, local seo:check 787/787, link self-audit 45 hrefs /
0 broken). PUSHED and LIVE-VERIFIED 2026-10-17 by the daily cron worker:
6/6 new calculator URLs HTTP 200, sitemap.xml lists all 24 calculators,
/calculators hub lists all 24, homepage + pricing count literals read "24".
Staged batch files were consumed by the push (push-batches/ now empty).

## Published (61 guides + 18 calculators as of 2026-10-16)

5 Tier-B guides + 2 calculators pushed 2026-10-16 on Tanveer's 'Push' in 5 batches,
verified live (7/7 URLs 200, sitemap 61 guides/18 calculators, production
seo:check 739/739). Written at full depth, verified (next build clean,
local seo:check 739/739, link self-audit 0 broken / all cluster + calculator
links wired), pushed from `hidden_files/push-batches/batch1.json`–`batch5.json`
(new pages in batch1–2, existing-page edits in batch3–4, lib/guides.js +
app/sitemap.js + calculators hub cards in LAST batch). The 2 new calculators
(stucco-calculator, lvp-flooring-calculator) have client components;
calculators went 16 → 18; count literals updated on homepage (×2) + pricing page.
- composite-deck-cost ($35–$70/sq ft installed; 300 sq ft build $10,500–$21,000; deck cluster extension, links up to deck-repair-cost pillar)
- commercial-painting-cost ($1.50–$6.50/sq ft; office/retail/warehouse/exterior rates + occupied-space premiums)
- concrete-paint-cost ($2–$6/sq ft painted; paint vs stain vs epoxy, prep-is-60%-of-the-job)
- how-long-to-wait-between-coats-of-paint (latex 4h, oil 24h, primer 1–3h; recoat windows by type/brand/weather)
- roof-installation-cost (new construction / first installation angle — distinct from roof-replacement-cost-2026; cross-linked both directions)
- stucco-calculator (wall area × repair % × coats × finish type × labor rate → total range; uses stucco-repair-cost's published figures)
- lvp-flooring-calculator (room dims × plank cost × underlayment × waste 10% × DIY/pro → boxes + total; matches lvp-flooring-cost rates)

Related link updates staged too: deck pillar → composite-deck-cost down-link;
roof-replacement-cost-2026 ↔ roof-installation-cost reciprocal links;
stucco-repair-cost → /calculators/stucco-calculator (was siding);
lvp-flooring-cost → /calculators/lvp-flooring-calculator (was tile-flooring).

## Internal-linking fix — 2026-10-15 (PUSHED + LIVE 2026-10-16)

Fixed the Oct 15 internal-link audit findings across 32 files: 2 broken 404 links repaired (tile-backsplash typo in ceramic guide, bundles-per-square slug in roofing guide); deck pillar +3 down-links, tile pillar +5 down-links, backsplash up-link; 'Related guides' sections added to all 16 calculator pages (topical 2–4 links; mulch + water-heater link hub + /quote since no topical guides exist); /quote CTAs added to 8 guides, calculator links added to 2 (cost-to-paint-12x12-room, how-to-quote-a-painting-job); 5 orphan guides given in-content inbound links. Re-audit: 0 broken, 0 orphans, deck+tile clusters fully linked both ways, 16/16 calculators link to guides, 56/56 guides have /quote. Local seo:check 683/683. Pushed 2026-10-16 on Tanveer's Approve in 5 batches; verified live (spot hrefs + production seo:check 683/683).

## Published (56 as of 2026-10-15)

stucco-repair-cost, chain-link-fence-installation-cost, how-much-paint-do-i-need,
cost-to-paint-a-house, gutter-guards-cost (2026-10-15 batch, Tier A — written by the
cron worker, pushed interactively same day in 2 push_files batches after Tanveer's
approval; verified live 5/5 200 + sitemap + production seo:check 683/683),

deck-repair-cost, deck-replacement-cost, cost-to-replace-deck-boards,
cost-to-install-deck-boards, deck-post-replacement-cost (2026-10-12, deck cluster batch 1),
deck-stairs-cost, deck-demolition-cost, deck-renovation-cost,
tile-installation-cost (tile pillar), bathroom-tile-installation-cost (2026-10-13 batch,
written locally, pushed 2026-10-14 — push was blocked on approval in detached cron runs;
pushed interactively in 3 push_files batches, verified live 10/10 + production seo:check 643/643),
shower-tile-installation-cost, floor-tile-installation-cost,
porcelain-tile-installation-cost, ceramic-tile-installation-cost, tile-removal-cost
(2026-10-14 batch, same push),

bundles-per-square, cost-to-epoxy-garage, cost-to-paint-12x12-room,
cost-to-paint-house-exterior, cost-to-replace-windows, gutter-installation-cost,
how-long-does-it-take-to-paint-a-house, how-much-paint-for-exterior-2000-sqft-house,
how-to-bid-concrete-slab, how-to-bid-deck-building-job, how-to-bid-fence-staining-job,
how-to-bid-gutter-installation-job, how-to-estimate-roofing-job,
how-to-handle-change-orders, how-to-measure-for-gutters, how-to-quote-a-painting-job,
how-to-quote-fence-installation-job, how-to-quote-pressure-washing-job,
how-to-quote-siding-job, how-to-quote-tile-job, interior-painting-cost-per-sqft,
lvp-flooring-cost, mini-split-installation-cost, paint-needed-2000-sqft-house,
painting-estimate-template, paver-installation-cost,
pressure-washing-cost-per-square-foot, quote-vs-estimate-vs-bid,
roof-pitch-multiplier-chart, roof-replacement-cost-2026, roofing-squares-chart,
siding-cost-per-square-foot, tile-backsplash-installation-cost,
fence-installation-cost-per-linear-foot, blown-in-attic-insulation-cost,
gutter-cleaning-cost-per-linear-foot

## Backlog (volume-verified via Semrush 2026-10-12 — full data in SEMRUSH_KEYWORDS.md)

CLUSTER #1 — deck repair (full map in TOPIC_CLUSTERS.md; write in order):
- deck repair cost — PILLAR (880 vol, KD 10; head term "deck repair" 22,200/KD 14) ✅ 2026-10-12
- deck replacement cost (1,600 vol, KD 14) ✅ 2026-10-12
- cost to replace deck boards (590 vol, KD 11) ✅ 2026-10-12
- cost to install deck boards (590 vol, KD 15) ✅ 2026-10-12
- deck post replacement cost (110 vol, KD 16) ✅ 2026-10-12
- deck stairs cost (512-keyword group) ✅ 2026-10-14 (published)
- deck demolition cost (303-keyword group) ✅ 2026-10-14 (published)
- deck renovation cost (110 vol, KD 20) ✅ 2026-10-14 (published)
- cost to rebuild a deck (170 vol, KD 19 — may merge with replacement guide)

CLUSTER #2 — tile installation (full map in TOPIC_CLUSTERS.md; write in order after deck cluster):
- tile installation cost — PILLAR (4,400 vol, KD 13; no AI Overview on SERP) ✅ 2026-10-14 (published)
- bathroom tile installation cost (1,600 vol, KD 21) ✅ 2026-10-14 (published)
- shower tile installation cost (1,600 vol, KD 27) ✅ 2026-10-14 (published)
- floor tile installation cost (720 vol, KD 27) ✅ 2026-10-14 (published)
- porcelain tile installation cost (590 vol, KD 13) ✅ 2026-10-14 (published)
- ceramic tile installation cost (720 vol, KD 30) ✅ 2026-10-14 (published)
- tile removal cost (590 vol, KD 9) ✅ 2026-10-14 (published)
- kitchen tile installation cost (110 vol, KD 22 — may merge with floor-tile guide)
- carpet tile installation cost (480 vol, KD 25 — optional, last)

Tier A (write after clusters #1 and #2; tile-installation-cost pillar already written — removed the duplicate "tile installation cost — general" line):
- stucco repair cost (40,500 vol, KD 31) ✅ 2026-10-15 (published)
- chain link fence installation cost (49,500 vol, KD 39) ✅ 2026-10-15 (published)
- how much paint do I need — general (5,400 vol, KD 38) ✅ 2026-10-15 (published)
- cost to paint a house — general flagship (3,600 vol, KD 24) ✅ 2026-10-15 (published)
- gutter guards cost (49,500 vol, KD 45) ✅ 2026-10-15 (published)

Tier B (write next):
- how long to wait between coats of paint (2,400 vol, KD 14) ✅ 2026-10-16 (published)
- painting concrete / concrete paint cost (22,200 vol, KD 37) ✅ 2026-10-16 (published)
- composite deck cost (49,500 vol, KD 40) ✅ 2026-10-16 (published)
- commercial painting cost (27,100 vol, KD 28) ✅ 2026-10-16 (published)
- roof installation cost (49,500 vol, KD 30) ✅ 2026-10-16 (published — new-construction/first-installation angle, kept distinct)
- cost to build a deck (1,600 vol, KD 42) — built 2026-10-19, staged for push approval (consumer per-sq-ft guide: material table, size totals, permits, DIY vs pro; linked from composite-deck-cost + deck-fence calculator)
- trade-specific estimate templates (KD 8–28)

Older backlog (pre-Semrush, still valid):
- mulch cost per yard / cost to mulch a yard (Tier 2 spare, 2026-10-12 research: HomeGuide stale 529d, Angi 219d, This Old House fresh — winnable with calculator embed)
- blown-in attic insulation cost (Tier 2, 2026-10-11 research)

## Rejected (too crowded — do not write without new angle)

- deck building cost, kitchen cabinet painting cost, concrete driveway cost,
  central AC replacement cost, drywall installation cost, water heater replacement
  cost, best contractor estimating software, markup vs margin, contractor deposit
  guides (2026-10-11 research)
- concrete patio cost per sq ft, roofing estimate template, epoxy vs polyaspartic
  garage floor (2026-10-12 research)
- cost to stain a fence, cost to stain a deck (2026-10-12 research: Angi holds
  fresh strong pages — rejected)
- cost to paint a brick house (2026-10-12 research: Angi fresh 69d + HomeGuide
  — rejected)
- concrete cost per cubic yard (2026-10-12 research: Angi fresh 32d + calculator
  competitors — rejected)

## Candidate pools (for fresh research)

Contractor how-to (pairs with /quote):
how to bid/quote/estimate + [trade job]; change orders; deposits; follow-up;
pricing strategy; measuring guides; business operations (invoicing, licensing).

Homeowner cost (pairs with a calculator):
cost of + [job the calculators cover]; cost per sq ft/linear ft; timelines;
material comparisons; DIY vs pro.

Trades with calculators to mine: paint, roofing, tile, deck/fence, hvac,
concrete/drywall, siding, pressure washing, attic insulation, gutter,
fence staining, window replacement, epoxy garage floor, pavers, water heater,
mulch.
