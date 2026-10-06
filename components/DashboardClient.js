"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { fmt$ } from "../lib/format";

const STATUSES = ["draft", "sent", "viewed", "approved", "declined"];

const grand = (q) => {
  const items = Array.isArray(q.items) ? q.items : [];
  const sub = items.reduce((s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.price) || 0), 0);
  const disc = parseFloat(q.discount) || 0;
  const tax = ((parseFloat(q.taxRate) || 0) / 100) * Math.max(0, sub - disc);
  return Math.max(0, sub - disc) + tax;
};

const dstr = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
};

export default function DashboardClient() {
  const [quotes, setQuotes] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [err, setErr] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setErr("");
    try {
      const [qr, cr] = await Promise.all([fetch("/api/quotes"), fetch("/api/customers")]);
      if (!qr.ok) throw new Error("Couldn't load quotes.");
      if (!cr.ok) throw new Error("Couldn't load customers.");
      const qj = await qr.json();
      const cj = await cr.json();
      setQuotes(qj.quotes || []);
      setCustomers(cj.customers || []);
    } catch (e) {
      setErr(e.message || "Something went wrong.");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const pipeline = useMemo(() => {
    const open = (quotes || []).filter((q) => ["draft", "sent", "viewed"].includes(q.status))
      .reduce((s, q) => s + grand(q), 0);
    const won = (quotes || []).filter((q) => q.status === "approved")
      .reduce((s, q) => s + grand(q), 0);
    return { open, won, count: (quotes || []).length };
  }, [quotes]);

  const setStatus = async (id, status) => {
    const prev = quotes;
    setQuotes(quotes.map((q) => (q.id === id ? { ...q, status } : q)));
    const res = await fetch(`/api/quotes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) setQuotes(prev);
  };

  const delQuote = async (id) => {
    if (!window.confirm("Delete this quote? This can't be undone.")) return;
    const res = await fetch(`/api/quotes/${id}`, { method: "DELETE" });
    if (res.ok) setQuotes(quotes.filter((q) => q.id !== id));
  };

  const addCustomer = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setBusy(true);
    const res = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setBusy(false);
    if (res.ok) {
      const { customer } = await res.json();
      setCustomers([customer, ...(customers || [])]);
      setForm({ name: "", email: "", phone: "", address: "" });
      setShowAdd(false);
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || "Couldn't add customer.");
    }
  };

  const delCustomer = async (id) => {
    if (!window.confirm("Delete this customer? Their quotes stay, unlinked.")) return;
    const res = await fetch(`/api/customers/${id}`, { method: "DELETE" });
    if (res.ok) {
      setCustomers(customers.filter((c) => c.id !== id));
      load(); // refresh quote customer links
    }
  };

  if (quotes === null || customers === null) {
    return <div className="card">Loading your dashboard…</div>;
  }

  return (
    <div>
      {err && (
        <div className="notice" style={{ marginBottom: 18, borderColor: "#b3261e", color: "#b3261e" }}>
          {err}
        </div>
      )}

      <div className="grid3" style={{ marginBottom: 36 }}>
        <div className="card">
          <div className="t-name">{pipeline.count}</div>
          <div className="t-note">Saved quotes</div>
        </div>
        <div className="card">
          <div className="t-name">{fmt$(pipeline.open)}</div>
          <div className="t-note">Open pipeline (draft/sent/viewed)</div>
        </div>
        <div className="card">
          <div className="t-name">{fmt$(pipeline.won)}</div>
          <div className="t-note">Approved total</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 className="h2" style={{ margin: 0, fontSize: 26 }}>Quotes</h2>
        <Link href="/quote" className="btn btn-primary btn-sm">+ New quote</Link>
      </div>
      {!quotes.length ? (
        <div className="card" style={{ marginBottom: 36 }}>
          <p style={{ margin: 0, color: "var(--muted)" }}>
            No saved quotes yet. Build one in the{" "}
            <Link href="/quote" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>quote generator</Link>{" "}
            and hit <strong>Save quote</strong>.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12, marginBottom: 36 }}>
          {quotes.map((q) => (
            <div key={q.id} className="card" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
              <div style={{ minWidth: 200 }}>
                <div style={{ fontWeight: 800 }}>{q.number}</div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>
                  {q.customer?.name || "No customer"} · {dstr(q.quoteDate)} · <strong style={{ color: "var(--ink)" }}>{fmt$(grand(q))}</strong>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <select
                  value={q.status}
                  onChange={(e) => setStatus(q.id, e.target.value)}
                  style={{ padding: "8px 10px", borderRadius: 8, border: "2px solid var(--line)", fontWeight: 700, fontSize: 14 }}
                  aria-label="Quote status"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
                <Link href={`/quote?load=${q.id}`} className="btn btn-ghost btn-sm">Open</Link>
                <button className="btn btn-ghost btn-sm" onClick={() => delQuote(q.id)} style={{ color: "#b3261e" }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 className="h2" style={{ margin: 0, fontSize: 26 }}>Customers</h2>
        <button className="btn btn-primary btn-sm" onClick={() => setShowAdd((v) => !v)}>
          {showAdd ? "Cancel" : "+ Add customer"}
        </button>
      </div>
      {showAdd && (
        <form onSubmit={addCustomer} className="card" style={{ marginBottom: 18 }}>
          <div className="field-row">
            <div className="field">
              <label>Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Jane Smith" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" />
            </div>
          </div>
          <div className="field-row" style={{ marginTop: 12 }}>
            <div className="field">
              <label>Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" />
            </div>
            <div className="field">
              <label>Address</label>
              <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="123 Main St" />
            </div>
          </div>
          <button className="btn btn-primary" disabled={busy} style={{ marginTop: 14 }}>
            {busy ? "Adding…" : "Add customer"}
          </button>
        </form>
      )}
      {!customers.length && !showAdd ? (
        <div className="card">
          <p style={{ margin: 0, color: "var(--muted)" }}>
            No customers yet — they&apos;ll appear here automatically when you save a quote with a client name.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {customers.map((c) => (
            <div key={c.id} className="card" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 800 }}>{c.name}</div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>
                  {[c.email, c.phone].filter(Boolean).join(" · ")}
                  {c._count ? ` · ${c._count.quotes} quote${c._count.quotes === 1 ? "" : "s"}` : ""}
                </div>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => delCustomer(c.id)} style={{ color: "#b3261e" }}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
