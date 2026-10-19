"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { F, Txt, Num, Stepper, Seg, Pill, Progress, DocView, PageHead, api, useApi, money, fmtDate, cx } from "./ui";

// ── New quote wizard: Details → Items → Totals → Preview ───────────────────
export function NewQuoteWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [items, setItems] = useState([]);
  const [markup, setMarkup] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [tax, setTax] = useState("0");
  const [expiry, setExpiry] = useState("14");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [c, p] = await Promise.all([
          api("/api/app/clients"),
          api("/api/app/profile"),
        ]);
        setClients(c.clients || []);
        const prof = p.profile || {};
        setMarkup(String(prof.markupPct ?? 0));
        setTax(String(prof.taxPct ?? 0));
        setExpiry(String(prof.expiryDays ?? 14));
      } catch { /* ok offline-ish */ }
      try {
        const snap = JSON.parse(sessionStorage.getItem("cbapp-calc") || "null");
        if (snap?.items?.length) {
          setItems(snap.items.map((i) => ({ ...i })));
          setJobTitle(snap.jobTitle || "");
          sessionStorage.removeItem("cbapp-calc");
        }
      } catch { /* ignore */ }
      setSeeded(true);
    })();
  }, []);

  const sub = items.reduce((s, i) => s + i.qty * i.price, 0);
  const afterMarkup = sub * (1 + (parseFloat(markup) || 0) / 100);
  const afterDisc = Math.max(0, afterMarkup - (parseFloat(discount) || 0));
  const total = afterDisc * (1 + (parseFloat(tax) || 0) / 100);

  const save = async () => {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      let cid = clientId;
      if (!cid && newName.trim()) {
        const c = await api("/api/app/clients", { method: "POST", body: { name: newName.trim(), phone: newPhone.trim() } });
        cid = c.client.id;
      }
      const q = await api("/api/app/quotes", {
        method: "POST",
        body: {
          clientId: cid || null,
          items,
          markupPct: parseFloat(markup) || 0,
          discount: parseFloat(discount) || 0,
          taxRate: parseFloat(tax) || 0,
          validDays: parseInt(expiry) || 14,
          notes,
          source: { jobTitle },
        },
      });
      router.push(`/app/quotes/${q.quote.id}`);
    } catch (e) {
      if (e.code === "PLAN_LIMIT") {
        router.push("/app/plan?reason=quotes");
        return;
      }
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  if (!seeded) return <p className="cbapp-sub">Loading…</p>;
  return (
    <>
      <PageHead title="New quote" back="/app" />
      <Progress steps={4} current={step} />
      {step === 1 && (
        <div className="cbapp-card">
          <F label="Client">
            <div className="cbapp-chips" style={{ marginBottom: 10 }}>
              {clients.slice(0, 8).map((c) => (
                <button key={c.id} type="button" className={cx("cbapp-chip", clientId === c.id && "on")}
                  onClick={() => { setClientId(c.id); setNewName(""); }}>{c.name}</button>
              ))}
            </div>
            <Txt value={newName} set={(v) => { setNewName(v); if (v) setClientId(""); }} placeholder="New client name" />
          </F>
          {newName.trim() && <F label="New client phone (optional)"><Txt value={newPhone} set={setNewPhone} type="tel" /></F>}
          <F label="Job title"><Txt value={jobTitle} set={setJobTitle} placeholder="e.g. Driveway slab — 20×20 ft" /></F>
          <button type="button" className="cbapp-btn cbapp-btn-primary" onClick={() => setStep(2)}>Continue →</button>
        </div>
      )}
      {step === 2 && (
        <div className="cbapp-card">
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--aline)", paddingBottom: 12, marginBottom: 12 }}>
              <F label={`Item ${i + 1} description`}><Txt value={it.desc} set={(v) => setItems(items.map((x, j) => j === i ? { ...x, desc: v } : x))} /></F>
              <div className="cbapp-grid2">
                <F label="Qty"><Num value={String(it.qty)} set={(v) => setItems(items.map((x, j) => j === i ? { ...x, qty: parseFloat(v) || 0 } : x))} /></F>
                <F label="Price ($)"><Num value={String(it.price)} set={(v) => setItems(items.map((x, j) => j === i ? { ...x, price: parseFloat(v) || 0 } : x))} /></F>
              </div>
              <button type="button" className="cbapp-btn-ghost" style={{ color: "var(--ared)" }}
                onClick={() => setItems(items.filter((_, j) => j !== i))}>Remove item</button>
            </div>
          ))}
          <button type="button" className="cbapp-btn-ghost" onClick={() => setItems([...items, { desc: "", qty: 1, price: 0 }])}>+ Add line item</button>
          <div className="cbapp-row" style={{ marginTop: 12 }}><span className="cbapp-label">Subtotal</span><span className="cbapp-val">{money(sub)}</span></div>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button type="button" className="cbapp-btn-ghost" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="cbapp-btn cbapp-btn-primary" style={{ flex: 1 }} disabled={!items.length} onClick={() => setStep(3)}>Continue →</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="cbapp-card">
          <F label="Markup %"><Stepper value={markup} set={setMarkup} min={0} max={500} suffix="%" /></F>
          <F label="Discount ($)"><Num value={discount} set={setDiscount} /></F>
          <F label="Tax %"><Stepper value={tax} set={setTax} min={0} max={30} step={0.5} suffix="%" /></F>
          <F label="Quote valid for (days)"><Stepper value={expiry} set={setExpiry} min={1} max={365} step={1} /></F>
          <F label="Notes (optional)"><textarea className="cbapp-input" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Payment terms, exclusions…" /></F>
          <div className="cbapp-row"><span className="cbapp-label">Grand total</span><span className="cbapp-val-big">{money(total)}</span></div>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button type="button" className="cbapp-btn-ghost" onClick={() => setStep(2)}>← Back</button>
            <button type="button" className="cbapp-btn cbapp-btn-primary" style={{ flex: 1 }} onClick={() => setStep(4)}>Preview →</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <>
          <DocView kind="quote" doc={{ number: "—", items, markupPct: parseFloat(markup) || 0, discount: parseFloat(discount) || 0, taxRate: parseFloat(tax) || 0, status: "draft", validDays: parseInt(expiry) || 14, notes, quoteDate: new Date().toISOString() }}
            biz={null} client={clientId ? clients.find((c) => c.id === clientId) : { name: newName || "New client" }} plan="Solo" />
          {error && <div className="cbapp-err">{error}</div>}
          <div className="no-print" style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button type="button" className="cbapp-btn-ghost" onClick={() => setStep(3)}>← Back</button>
            <button type="button" className="cbapp-btn cbapp-btn-primary" style={{ flex: 1 }} disabled={busy} onClick={save}>
              {busy ? "Saving…" : "Save quote"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

// ── Quotes list (segmented: Quotes | Invoices) ─────────────────────────────
export function QuotesList() {
  const [seg, setSeg] = useState("quotes");
  const { data, loading, error, reload } = useApi(seg === "quotes" ? "/api/app/quotes" : "/api/app/invoices");
  return (
    <>
      <PageHead title="Quotes & invoices" sub="Track every quote from draft to paid." />
      <div className="cbapp-card" style={{ padding: 8 }}>
        <Seg options={[{ label: "Quotes", value: "quotes" }, { label: "Invoices", value: "invoices" }]} value={seg} set={setSeg} />
      </div>
      {loading && <p className="cbapp-sub">Loading…</p>}
      {error && <div className="cbapp-err">{error} <button type="button" className="cbapp-btn-ghost" onClick={reload}>Retry</button></div>}
      {data && seg === "quotes" && (
        (data.quotes || []).length === 0 ? (
          <div className="cbapp-empty"><div className="e-ico">📝</div><p>No quotes yet. Run a calculator and turn the result into a quote.</p>
          <Link href="/app" className="cbapp-btn cbapp-btn-primary" style={{ marginTop: 12 }}>Open calculators</Link></div>
        ) : (
          <div className="cbapp-list">
            {data.quotes.map((q) => (
              <Link key={q.id} href={`/app/quotes/${q.id}`} className="cbapp-item">
                <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                  <div>
                    <div className="t">{q.number} · {q.customer?.name || "No client"}</div>
                    <div className="s">{fmtDate(q.createdAt)}{q.invoice ? ` · Invoiced ${q.invoice.number}` : ""}</div>
                  </div>
                  <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                    <Pill status={q.status} />
                    {q.invoice && <span className="cbapp-pill cbapp-pill-info">Invoiced</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
      {data && seg === "invoices" && <InvoicesSummary data={data} />}
    </>
  );
}

function InvoicesSummary({ data }) {
  const { invoices = [], summary = {} } = data;
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-row"><span className="cbapp-label">Outstanding</span><span className="cbapp-val">{money(summary.outstanding)}</span></div>
        <div className="cbapp-row"><span className="cbapp-label">Paid</span><span className="cbapp-val" style={{ color: "var(--agreen)" }}>{money(summary.paid)}</span></div>
      </div>
      {invoices.length === 0 ? (
        <div className="cbapp-empty"><div className="e-ico">🧾</div><p>No invoices yet. Approve a quote to convert it.</p></div>
      ) : (
        <div className="cbapp-list">
          {invoices.map((i) => (
            <Link key={i.id} href={`/app/invoices/${i.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div>
                  <div className="t">{i.number} · {i.client?.name || "No client"}</div>
                  <div className="s">Due {fmtDate(i.dueDate)}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="cbapp-val">{money(i.total)}</div>
                  <div style={{ marginTop: 4 }}><Pill status={i.overdue ? "overdue" : i.status} /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

// ── Quote detail ───────────────────────────────────────────────────────────
export function QuoteDetail({ id }) {
  const router = useRouter();
  const { data, loading, error, reload } = useApi(`/api/app/quotes/${id}`);
  const [busy, setBusy] = useState(false);
  const [convertError, setConvertError] = useState("");
  if (loading) return <p className="cbapp-sub">Loading quote…</p>;
  if (error) return <div className="cbapp-err">{error}</div>;
  const q = data.quote;
  const plan = data.plan || "Free";
  const profile = data.profile || {};
  const statuses = ["draft", "sent", "viewed", "approved", "declined"];

  const setStatus = async (status) => {
    setBusy(true);
    try { await api(`/api/app/quotes/${q.id}`, { method: "PATCH", body: { status } }); reload(); }
    catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };

  const convert = async () => {
    setBusy(true);
    setConvertError("");
    try {
      const r = await api(`/api/app/quotes/${q.id}/convert`, { method: "POST" });
      router.push(`/app/invoices/${r.invoice.id}`);
    } catch (e) {
      if (e.code === "PLAN_REQUIRED") { router.push("/app/plan?reason=invoice"); return; }
      if (e.code === "ALREADY_INVOICED" && e.invoiceId) { router.push(`/app/invoices/${e.invoiceId}`); return; }
      setConvertError(e.message);
    } finally { setBusy(false); }
  };

  const remove = async () => {
    if (!confirm("Delete this quote?")) return;
    try {
      await api(`/api/app/quotes/${q.id}`, { method: "DELETE" });
      router.push("/app/quotes");
    } catch (e) { alert(e.message); }
  };

  return (
    <>
      <PageHead title={`Quote ${q.number}`} back="/app/quotes" />
      <DocView kind="quote" doc={q} biz={profile} client={q.customer} plan={plan} />
      {q.invoice && (
        <div className="cbapp-note" style={{ marginTop: 12 }}>
          Invoiced as <Link href={`/app/invoices/${q.invoice.id}`} style={{ fontWeight: 800 }}>{q.invoice.number}</Link>
        </div>
      )}
      <div className="cbapp-card no-print" style={{ marginTop: 14 }}>
        <div className="cbapp-label" style={{ marginBottom: 8 }}>Status</div>
        <div className="cbapp-chips">
          {statuses.map((s) => (
            <button key={s} type="button" className={cx("cbapp-chip", q.status === s && "on")} disabled={busy} onClick={() => setStatus(s)}>
              {s[0].toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        {(q.status === "approved" || q.status === "sent") && !q.invoice && (
          <>
            <button type="button" className="cbapp-btn cbapp-btn-primary" style={{ marginTop: 12 }} disabled={busy} onClick={convert}>
              Convert to invoice
            </button>
            {plan === "Free" && <div className="cbapp-hint">Invoicing needs a Solo or Crew plan — you'll see the plans first.</div>}
          </>
        )}
        {convertError && <div className="cbapp-err" style={{ marginTop: 10 }}>{convertError}</div>}
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="button" className="cbapp-btn-ghost" onClick={() => window.print()}>Print</button>
          <button type="button" className="cbapp-btn-ghost" style={{ color: "var(--ared)" }} onClick={remove}>Delete</button>
        </div>
      </div>
    </>
  );
}
