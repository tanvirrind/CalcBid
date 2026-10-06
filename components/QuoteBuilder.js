"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fmt$, encodeQuote, decodeQuote } from "../lib/format";

const uid = () =>
  "QB-" +
  new Date().toISOString().slice(0, 10).replace(/-/g, "") +
  "-" +
  Math.floor(100 + Math.random() * 900);

const today = () => new Date().toISOString().slice(0, 10);

function blankQuote(prefill) {
  return {
    number: uid(),
    date: today(),
    validDays: 30,
    biz: { name: "", email: "", phone: "" },
    client: { name: "", email: "", address: "" },
    items: prefill?.length
      ? prefill
      : [{ desc: "", qty: 1, price: 0 }],
    tax: 0,
    discount: 0,
    notes: "",
  };
}

export default function QuoteBuilder() {
  const params = useSearchParams();
  const [q, setQ] = useState(() => blankQuote());
  const [clientView, setClientView] = useState(null);
  const [copied, setCopied] = useState(false);
  const [session, setSession] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(null);
  const [saveError, setSaveError] = useState("");

  // Who's signed in? (drives the Save button)
  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((s) => setSession(s?.user ? s : null))
      .catch(() => setSession(null));
  }, []);

  // Prefill from calculator, load a saved quote, or load a shared quote from the URL hash.
  useEffect(() => {
    // Load a saved quote: ?load=<quoteId>
    const loadId = params.get("load");
    if (loadId) {
      fetch(`/api/quotes/${loadId}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => {
          if (!j?.quote) return;
          const sq = j.quote;
          setQ({
            number: sq.number,
            date: (sq.quoteDate || "").slice(0, 10) || today(),
            validDays: sq.validDays ?? 30,
            biz: {
              name: sq.biz?.name || "",
              email: sq.biz?.email || "",
              phone: sq.biz?.phone || "",
            },
            client: {
              name: sq.customer?.name || "",
              email: sq.customer?.email || "",
              address: sq.customer?.address || "",
            },
            items: Array.isArray(sq.items) && sq.items.length ? sq.items : [{ desc: "", qty: 1, price: 0 }],
            tax: sq.taxRate ?? 0,
            discount: sq.discount ?? 0,
            notes: sq.notes || "",
          });
          setSaved({ id: sq.id, number: sq.number });
        })
        .catch(() => {});
      return;
    }
    const shared = decodeQuote(window.location.hash);
    if (shared) {
      setClientView(shared);
      return;
    }
    // Generic prefill: ?items=<url-encoded JSON array of {desc, qty, price}>
    const itemsParam = params.get("items");
    if (itemsParam) {
      try {
        const parsed = JSON.parse(itemsParam);
        if (Array.isArray(parsed) && parsed.length) {
          setQ(blankQuote(parsed));
          return;
        }
      } catch {
        /* fall through to legacy params */
      }
    }
    // Legacy: paint calculator params
    const paint = parseFloat(params.get("paint"));
    const paintCost = parseFloat(params.get("paintCost"));
    const labor = parseFloat(params.get("labor"));
    if (Number.isFinite(paint) && Number.isFinite(paintCost)) {
      const items = [
        { desc: `Interior paint — ${paint} gal (materials)`, qty: 1, price: paintCost },
      ];
      if (Number.isFinite(labor) && labor > 0)
        items.push({ desc: "Labor", qty: 1, price: labor });
      setQ(blankQuote(items));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totals = useMemo(() => {
    const sub = q.items.reduce(
      (s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.price) || 0),
      0
    );
    const disc = parseFloat(q.discount) || 0;
    const tax = ((parseFloat(q.tax) || 0) / 100) * Math.max(0, sub - disc);
    return { sub, disc, tax, grand: Math.max(0, sub - disc) + tax };
  }, [q]);

  const set = (patch) => setQ((prev) => ({ ...prev, ...patch }));
  const setBiz = (k, v) => set({ biz: { ...q.biz, [k]: v } });
  const setClient = (k, v) => set({ client: { ...q.client, [k]: v } });
  const setItem = (i, k, v) =>
    set({ items: q.items.map((it, j) => (j === i ? { ...it, [k]: v } : it)) });
  const addItem = () =>
    set({ items: [...q.items, { desc: "", qty: 1, price: 0 }] });
  const delItem = (i) => set({ items: q.items.filter((_, j) => j !== i) });

  const validUntil = useMemo(() => {
    const d = new Date(q.date + "T12:00:00");
    d.setDate(d.getDate() + (parseInt(q.validDays) || 0));
    return d.toISOString().slice(0, 10);
  }, [q.date, q.validDays]);

  const shareLink = () =>
    window.location.origin + window.location.pathname + encodeQuote(q);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink());
    } catch {
      const ta = document.createElement("textarea");
      ta.value = shareLink();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtml = () => {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>Quote ${q.number}</title>
<style>body{font-family:system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 20px;color:#0f172a}
table{width:100%;border-collapse:collapse;margin:18px 0}th{text-align:left;font-size:12px;text-transform:uppercase;color:#64748b;border-bottom:2px solid #e2e8f0;padding:8px}
td{padding:10px 8px;border-bottom:1px solid #e2e8f0}.num{text-align:right}.tot{max-width:300px;margin-left:auto}.grand{font-size:22px;font-weight:800;border-top:2px solid #0f172a;padding-top:8px}</style></head>
<body><h1>Quote ${q.number}</h1>
<p><strong>${esc(q.biz.name)}</strong>${q.biz.phone ? " · " + esc(q.biz.phone) : ""}${q.biz.email ? " · " + esc(q.biz.email) : ""}<br>
Prepared for <strong>${esc(q.client.name)}</strong>${q.client.address ? " — " + esc(q.client.address) : ""}<br>
Date: ${q.date} · Valid until: ${validUntil}</p>
<table><tr><th>Description</th><th class="num">Qty</th><th class="num">Price</th><th class="num">Amount</th></tr>
${q.items.map((it) => `<tr><td>${esc(it.desc) || "—"}</td><td class="num">${it.qty}</td><td class="num">${fmt$(it.price)}</td><td class="num">${fmt$(it.qty * it.price)}</td></tr>`).join("")}
</table><div class="tot"><div>Subtotal: ${fmt$(totals.sub)}</div>${totals.disc ? `<div>Discount: −${fmt$(totals.disc)}</div>` : ""}${totals.tax ? `<div>Tax: ${fmt$(totals.tax)}</div>` : ""}<div class="grand">Total: ${fmt$(totals.grand)}</div></div>
${q.notes ? `<p><strong>Notes:</strong> ${esc(q.notes)}</p>` : ""}</body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `quote-${q.number}.html`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const saveQuote = async () => {
    setSaving(true);
    setSaveError("");
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: saved?.id ? undefined : q.number,
          date: q.date,
          validDays: q.validDays,
          biz: q.biz,
          client: { name: q.client.name, email: q.client.email, address: q.client.address },
          items: q.items,
          tax: q.tax,
          discount: q.discount,
          notes: q.notes,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSaveError(j.error || "Couldn't save the quote.");
      } else if (j.quote) {
        setSaved({ id: j.quote.id, number: j.quote.number });
        setQ((prev) => ({ ...prev, number: j.quote.number }));
      }
    } catch {
      setSaveError("Couldn't reach the server. Try again.");
    }
    setSaving(false);
  };

  const emailQuote = () => {
    const subject = encodeURIComponent(`Quote ${q.number} from ${q.biz.name || "us"}`);
    const body = encodeURIComponent(
      `Hi ${q.client.name || "there"},\n\nPlease find our quote ${q.number} attached below.\n\nTotal: ${fmt$(totals.grand)} (valid until ${validUntil})\n\nView it here: ${shareLink()}\n\n${q.notes}\n\n— ${q.biz.name}${q.biz.phone ? "\n" + q.biz.phone : ""}`
    );
    window.location.href = `mailto:${q.client.email}?subject=${subject}&body=${body}`;
  };

  // Shared-link client view: clean, read-only.
  if (clientView) return <QuoteDoc data={clientView} clientView />;

  const F = ({ label, value, on, type = "text", span }) => (
    <div className="field" style={span ? { gridColumn: "1 / -1" } : undefined}>
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => on(e.target.value)} />
    </div>
  );

  return (
    <div>
      <div className="calc-layout" style={{ gridTemplateColumns: "1fr" }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Your business</h3>
          <div className="field-row">
            <F label="Business name" value={q.biz.name} on={(v) => setBiz("name", v)} />
            <F label="Phone" value={q.biz.phone} on={(v) => setBiz("phone", v)} />
          </div>
          <F label="Email" value={q.biz.email} on={(v) => setBiz("email", v)} type="email" />

          <h3 style={{ marginTop: 26 }}>Client</h3>
          <div className="field-row">
            <F label="Client name" value={q.client.name} on={(v) => setClient("name", v)} />
            <F label="Client email" value={q.client.email} on={(v) => setClient("email", v)} type="email" />
          </div>
          <F label="Project address" value={q.client.address} on={(v) => setClient("address", v)} />

          <h3 style={{ marginTop: 26 }}>Line items</h3>
          <div className="line-items">
            {q.items.map((it, i) => (
              <div className="li-row" key={i}>
                <input placeholder="Description" value={it.desc} onChange={(e) => setItem(i, "desc", e.target.value)} />
                <input type="number" min="0" placeholder="Qty" value={it.qty} onChange={(e) => setItem(i, "qty", e.target.value)} />
                <input type="number" min="0" placeholder="$ Price" value={it.price} onChange={(e) => setItem(i, "price", e.target.value)} />
                <button className="li-del" onClick={() => delItem(i)} title="Remove">×</button>
              </div>
            ))}
          </div>
          <button className="btn btn-ghost btn-sm" onClick={addItem}>+ Add line item</button>

          <div className="field-row" style={{ marginTop: 22 }}>
            <F label="Tax %" value={q.tax} on={(v) => set({ tax: v })} type="number" />
            <F label="Discount ($)" value={q.discount} on={(v) => set({ discount: v })} type="number" />
          </div>
          <div className="field-row">
            <F label="Quote date" value={q.date} on={(v) => set({ date: v })} type="date" />
            <F label="Valid (days)" value={q.validDays} on={(v) => set({ validDays: v })} type="number" />
          </div>
          <div className="field">
            <label>Notes / terms</label>
            <textarea rows={3} value={q.notes} onChange={(e) => set({ notes: e.target.value })}
              placeholder="e.g. 50% deposit to schedule. Price includes materials and labor." />
          </div>
        </div>
      </div>

      <div className="toolbar no-print">
        {session ? (
          <button className="btn btn-primary" onClick={saveQuote} disabled={saving}>
            {saving ? "Saving…" : saved ? "✓ Saved — save as new" : "Save quote"}
          </button>
        ) : (
          <Link href="/signin" className="btn btn-primary">
            Sign in to save quotes
          </Link>
        )}
        <button className="btn btn-ghost" onClick={copyLink}>
          {copied ? "✓ Link copied" : "Copy shareable link"}
        </button>
        <button className="btn btn-dark" onClick={() => window.print()}>Print / PDF</button>
        <button className="btn btn-ghost" onClick={downloadHtml}>Download HTML</button>
        <button className="btn btn-ghost" onClick={emailQuote}>Open in email</button>
      </div>
      {saved && (
        <div className="notice no-print" style={{ marginBottom: 16 }}>
          Quote <strong>{saved.number}</strong> saved.{" "}
          <Link href="/dashboard" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>
            View it in your dashboard →
          </Link>
        </div>
      )}
      {saveError && (
        <div className="notice no-print" style={{ marginBottom: 16, borderColor: "#b3261e", color: "#b3261e" }}>
          {saveError}
        </div>
      )}

      <QuoteDoc data={q} totals={totals} validUntil={validUntil} />
      <p className="no-print" style={{ color: "var(--muted)", fontSize: 13.5, marginTop: 14 }}>
        {session
          ? "Signed in — hit Save quote to keep it in your dashboard, or copy the shareable link to send it right now."
          : "Shareable links encode the quote in the URL — no account needed. Sign in to save quotes to your dashboard."}
      </p>
    </div>
  );
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function QuoteDoc({ data: d, totals: t, validUntil, clientView }) {
  const tt = t || {
    sub: d.items.reduce((s, it) => s + it.qty * it.price, 0),
    disc: d.discount || 0, tax: 0, grand: 0,
  };
  if (!t) {
    const sub = tt.sub, disc = tt.disc;
    tt.tax = ((d.tax || 0) / 100) * Math.max(0, sub - disc);
    tt.grand = Math.max(0, sub - disc) + tt.tax;
  }
  const vu = validUntil || (() => {
    const dt = new Date(d.date + "T12:00:00");
    dt.setDate(dt.getDate() + (parseInt(d.validDays) || 0));
    return dt.toISOString().slice(0, 10);
  })();

  return (
    <div className="quote-doc">
      <div className="quote-head">
        <div>
          <h2>{d.biz.name || "Your Business"}</h2>
          <div style={{ color: "#cbd5e1", fontSize: 14 }}>
            {[d.biz.phone, d.biz.email].filter(Boolean).join(" · ")}
          </div>
        </div>
        <div className="q-meta">
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>QUOTE</div>
          <div>{d.number}</div>
          <div>Date: {d.date}</div>
          <div>Valid until: {vu}</div>
        </div>
      </div>
      <div className="quote-body">
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--muted)", fontWeight: 800 }}>Prepared for</div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{d.client.name || "Client name"}</div>
            <div style={{ color: "var(--muted)", fontSize: 14 }}>{d.client.address}</div>
          </div>
        </div>
        <table className="q-table">
          <thead><tr><th>Description</th><th className="num">Qty</th><th className="num">Price</th><th className="num">Amount</th></tr></thead>
          <tbody>
            {d.items.map((it, i) => (
              <tr key={i}>
                <td>{it.desc || "—"}</td>
                <td className="num">{it.qty}</td>
                <td className="num">{fmt$(it.price)}</td>
                <td className="num">{fmt$(it.qty * it.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="q-totals">
          <div className="r-row"><span>Subtotal</span><span>{fmt$(tt.sub)}</span></div>
          {tt.disc > 0 && <div className="r-row"><span>Discount</span><span>−{fmt$(tt.disc)}</span></div>}
          {tt.tax > 0 && <div className="r-row"><span>Tax</span><span>{fmt$(tt.tax)}</span></div>}
          <div className="grand"><span>Total</span><span style={{ float: "right" }}>{fmt$(tt.grand)}</span></div>
        </div>
        {d.notes && <div className="q-notes"><strong>Notes:</strong> {d.notes}</div>}
      </div>
      <div className="q-foot">
        <span>Generated with CalcBid — calculate the job, send the quote.</span>
        {clientView && <span>Questions? Reply to your contractor directly.</span>}
      </div>
    </div>
  );
}
