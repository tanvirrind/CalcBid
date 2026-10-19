"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { F, Txt, Pill, DocView, PageHead, api, useApi, money, fmtDate } from "./ui";

// ── Invoices list with Outstanding / Paid summary ──────────────────────────
export function InvoicesList() {
  const { data, loading, error, reload } = useApi("/api/app/invoices");
  if (loading) return <p className="cbapp-sub">Loading invoices…</p>;
  if (error) return <div className="cbapp-err">{error} <button type="button" className="cbapp-btn-ghost" onClick={reload}>Retry</button></div>;
  const { invoices = [], summary = {} } = data;
  return (
    <>
      <div className="cbapp-card">
        <div className="cbapp-row"><span className="cbapp-label">Outstanding</span><span className="cbapp-val">{money(summary.outstanding)}</span></div>
        <div className="cbapp-row"><span className="cbapp-label">Paid</span><span className="cbapp-val" style={{ color: "var(--agreen)" }}>{money(summary.paid)}</span></div>
      </div>
      {invoices.length === 0 ? (
        <div className="cbapp-empty"><div className="e-ico">🧾</div><p>No invoices yet. Approve a quote, then convert it to an invoice.</p></div>
      ) : (
        <div className="cbapp-list">
          {invoices.map((i) => (
            <a key={i.id} href={`/app/invoices/${i.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div><div className="t">{i.number} · {i.client?.name || "No client"}</div>
                <div className="s">Due {fmtDate(i.dueDate)}{i.quote?.number ? ` · for quote ${i.quote.number}` : ""}</div></div>
                <div style={{ textAlign: "right" }}>
                  <div className="cbapp-val">{money(i.total)}</div>
                  <div style={{ marginTop: 4 }}><Pill status={i.overdue ? "overdue" : i.status} /></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

// ── Invoice detail ─────────────────────────────────────────────────────────
export function InvoiceDetail({ id }) {
  const router = useRouter();
  const { data, loading, error, reload } = useApi(`/api/app/invoices/${id}`);
  const [busy, setBusy] = useState(false);
  const [editDue, setEditDue] = useState(false);
  const [due, setDue] = useState("");
  const [notes, setNotes] = useState(null);
  if (loading) return <p className="cbapp-sub">Loading invoice…</p>;
  if (error) return <div className="cbapp-err">{error}</div>;
  const inv = data.invoice;
  const doPatch = async (body) => {
    setBusy(true);
    try {
      await api(`/api/app/invoices/${inv.id}`, { method: "PATCH", body });
      reload();
    } catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };
  const remove = async () => {
    if (!confirm("Delete this invoice? The original quote stays.")) return;
    await api(`/api/app/invoices/${inv.id}`, { method: "DELETE" });
    router.push("/app/quotes");
  };
  const openDue = () => { setDue(String(inv.dueDate).slice(0, 10)); setNotes(inv.notes || ""); setEditDue(true); };
  const submit = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await api(`/api/app/invoices/${inv.id}`, { method: "PATCH", body: { dueDate: String(due).slice(0, 10), notes } });
      setEditDue(false);
      reload();
    } catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };
  return (
    <>
      <PageHead title={`Invoice ${inv.number}`} back="/app/quotes" />
      <DocView kind="invoice" doc={inv} biz={data.profile} client={inv.client} plan={data.plan} />
      <div className="cbapp-card no-print" style={{ marginTop: 14 }}>
        {inv.status === "paid" ? (
          <button type="button" className="cbapp-btn cbapp-btn-ghost" style={{ width: "100%" }} disabled={busy} onClick={() => doPatch({ status: "unpaid" })}>
            Mark as unpaid
          </button>
        ) : (
          <button type="button" className="cbapp-btn cbapp-btn-primary" disabled={busy} onClick={() => doPatch({ status: "paid" })}>
            Mark as paid
          </button>
        )}
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="button" className="cbapp-btn-ghost" onClick={openDue}>Edit due date / notes</button>
          <button type="button" className="cbapp-btn-ghost" onClick={() => window.print()}>Print</button>
          <button type="button" className="cbapp-btn-ghost" style={{ color: "var(--ared)" }} onClick={remove}>Delete</button>
        </div>
      </div>
      {editDue && (
        <div className="cbapp-card no-print">
          <F label="Due date"><input className="cbapp-input" type="date" value={due} onChange={(e) => setDue(e.target.value)} /></F>
          <F label="Notes"><textarea className="cbapp-input" rows={3} value={notes || ""} onChange={(e) => setNotes(e.target.value)} /></F>
          <button type="button" className="cbapp-btn cbapp-btn-primary" disabled={busy} onClick={submit}>Save changes</button>
        </div>
      )}
    </>
  );
}
