"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { F, Txt, Num, Seg, Stepper, Chips, Pill, DocView, PageHead, api, useApi, money, fmtDate, cx } from "./ui";
import { CALCS } from "./calcs";

// ── /app home: picker + recent + outstanding/paid ──────────────────────────
export function HomeScreen() {
  const q = useApi("/api/app/quotes");
  const inv = useApi("/api/app/invoices");
  const quotes = (q.data?.quotes || []).slice(0, 3);
  const summary = inv.data?.summary;
  return (
    <>
      <PageHead title="CalcBid" sub="Calculate the job. Send the quote. Get paid." />
      {inv.data && (
        <div className="cbapp-card">
          <div className="cbapp-row"><span className="cbapp-label">Outstanding</span><span className="cbapp-val">{money(summary?.outstanding)}</span></div>
          <div className="cbapp-row"><span className="cbapp-label">Paid</span><span className="cbapp-val" style={{ color: "var(--agreen)" }}>{money(summary?.paid)}</span></div>
        </div>
      )}
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: "18px 0 10px" }}>Calculators</h2>
      <div className="cbapp-list">
        {CALCS.map((c) => (
          <Link key={c.slug} href={`/app/calculators/${c.slug}`} className="cbapp-item">
            <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
              <div><span aria-hidden style={{ fontSize: 22, marginRight: 10 }}>{c.ico}</span><span className="t">{c.name}</span></div>
              <span aria-hidden style={{ color: "var(--amuted)" }}>›</span>
            </div>
          </Link>
        ))}
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: "18px 0 10px" }}>Recent quotes</h2>
      {q.loading ? <p className="cbapp-sub">Loading…</p> : quotes.length === 0 ? (
        <div className="cbapp-empty"><div className="e-ico">📝</div><p>Nothing here yet — run a calculator to create your first quote.</p></div>
      ) : (
        <div className="cbapp-list">
          {quotes.map((qt) => (
            <Link key={qt.id} href={`/app/quotes/${qt.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div><div className="t">{qt.number} · {qt.customer?.name || "No client"}</div>
                <div className="s">{fmtDate(qt.createdAt)}</div></div>
                <Pill status={qt.status} />
              </div>
            </Link>
          ))}
        </div>
      )}
      <Link href="/app/quotes/new" className="cbapp-btn cbapp-btn-primary" style={{ marginTop: 16 }}>+ New quote</Link>
    </>
  );
}

// ── Clients list ───────────────────────────────────────────────────────────
export function ClientsList() {
  const router = useRouter();
  const { data, loading, error, reload } = useApi("/api/app/clients");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const quick = async () => {
    if (!name.trim() || busy) return;
    setBusy(true);
    try {
      const r = await api("/api/app/clients", { method: "POST", body: { name: name.trim() } });
      router.push(`/app/clients/${r.client.id}`);
    } catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };
  const clients = data?.clients || [];
  return (
    <>
      <PageHead title="Clients" sub="Everyone you've quoted or billed." />
      <div className="cbapp-card">
        <F label="Quick-add client">
          <div style={{ display: "flex", gap: 8 }}>
            <Txt value={name} set={setName} placeholder="Client name" />
            <button type="button" className="cbapp-btn cbapp-btn-primary" style={{ width: "auto" }} disabled={busy} onClick={quick}>Add</button>
          </div>
        </F>
      </div>
      {loading ? <p className="cbapp-sub">Loading…</p> : error ? (
        <div className="cbapp-err">{error} <button type="button" className="cbapp-btn-ghost" onClick={reload}>Retry</button></div>
      ) : clients.length === 0 ? (
        <div className="cbapp-empty"><div className="e-ico">👷</div><p>No clients yet.</p></div>
      ) : (
        <div className="cbapp-list">
          {clients.map((c) => (
            <Link key={c.id} href={`/app/clients/${c.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div><div className="t">{c.name}</div>
                <div className="s">{c._count?.quotes || 0} quotes · {c._count?.invoices || 0} invoices</div></div>
                <span aria-hidden style={{ color: "var(--amuted)" }}>›</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

// ── Client detail ──────────────────────────────────────────────────────────
export function ClientDetail({ id }) {
  const router = useRouter();
  const { data, loading, error, reload } = useApi(`/api/app/clients/${id}`);
  const [edit, setEdit] = useState(false);
  if (loading) return <p className="cbapp-sub">Loading client…</p>;
  if (error) return <div className="cbapp-err">{error}</div>;
  const { client, quotes = [], invoices = [], totals = {} } = data;
  const remove = async () => {
    if (!confirm("Delete this client? Their quotes and invoices stay, just unlinked.")) return;
    await api(`/api/app/clients/${id}`, { method: "DELETE" });
    router.push("/app/clients");
  };
  return (
    <>
      <PageHead title={client.name} sub={[client.phone, client.email].filter(Boolean).join(" · ")} back="/app/clients" />
      <div className="cbapp-card">
        <div className="cbapp-row"><span className="cbapp-label">Total quoted</span><span className="cbapp-val">{money(totals.quoted)}</span></div>
        <div className="cbapp-row"><span className="cbapp-label">Total invoiced</span><span className="cbapp-val">{money(totals.invoiced)}</span></div>
        <div className="cbapp-row"><span className="cbapp-label">Total paid</span><span className="cbapp-val" style={{ color: "var(--agreen)" }}>{money(totals.paid)}</span></div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button type="button" className="cbapp-btn-ghost" onClick={() => setEdit(!edit)}>{edit ? "Close" : "Edit"}</button>
          <button type="button" className="cbapp-btn-ghost" style={{ color: "var(--ared)" }} onClick={remove}>Delete</button>
        </div>
      </div>
      {edit && <ClientForm id={id} initial={client} onDone={() => { setEdit(false); reload(); }} />}
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: "18px 0 10px" }}>Quotes</h2>
      {quotes.length === 0 ? <p className="cbapp-sub">No quotes for this client yet.</p> : (
        <div className="cbapp-list">
          {quotes.map((qt) => (
            <Link key={qt.id} href={`/app/quotes/${qt.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div><div className="t">{qt.number}</div><div className="s">{fmtDate(qt.createdAt)}</div></div>
                <Pill status={qt.status} />
              </div>
            </Link>
          ))}
        </div>
      )}
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: "18px 0 10px" }}>Invoices</h2>
      {invoices.length === 0 ? <p className="cbapp-sub">No invoices for this client yet.</p> : (
        <div className="cbapp-list">
          {invoices.map((i) => (
            <Link key={i.id} href={`/app/invoices/${i.id}`} className="cbapp-item">
              <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
                <div><div className="t">{i.number}</div><div className="s">Due {fmtDate(i.dueDate)}</div></div>
                <div style={{ textAlign: "right" }}><div className="cbapp-val">{money(i.total)}</div>
                <div style={{ marginTop: 4 }}><Pill status={i.status} /></div></div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function ClientForm({ id, initial, onDone }) {
  const [name, setName] = useState(initial.name || "");
  const [phone, setPhone] = useState(initial.phone || "");
  const [email, setEmail] = useState(initial.email || "");
  const [address, setAddress] = useState(initial.address || "");
  const [notes, setNotes] = useState(initial.notes || "");
  const [busy, setBusy] = useState(false);
  const save = async () => {
    setBusy(true);
    try {
      await api(`/api/app/clients/${id}`, { method: "PATCH", body: { name, phone, email, address, notes } });
      onDone();
    } catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };
  return (
    <div className="cbapp-card">
      <F label="Name"><Txt value={name} set={setName} /></F>
      <div className="cbapp-grid2">
        <F label="Phone"><Txt value={phone} set={setPhone} type="tel" /></F>
        <F label="Email"><Txt value={email} set={setEmail} type="email" /></F>
      </div>
      <F label="Address"><Txt value={address} set={setAddress} /></F>
      <F label="Notes"><textarea className="cbapp-input" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} /></F>
      <button type="button" className="cbapp-btn cbapp-btn-primary" disabled={busy} onClick={save}>Save client</button>
    </div>
  );
}

// ── Profile / settings ─────────────────────────────────────────────────────
export function ProfileScreen() {
  const { data, loading, error, reload } = useApi("/api/app/profile");
  const [f, setF] = useState(null);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  if (!loading && !error && data && !f) {
    const p = data.profile || {};
    setF({
      businessName: p.businessName || "", ownerName: p.ownerName || "", phone: p.phone || "",
      email: p.email || "", address: p.address || "",
      markupPct: String(p.markupPct ?? 0), taxPct: String(p.taxPct ?? 0),
      expiryDays: String(p.expiryDays ?? 14), paymentTerms: p.paymentTerms || 14,
      laborRate: String(p.laborRate ?? 0), trades: Array.isArray(p.trades) ? p.trades : [],
    });
  }
  if (loading || !f) return <p className="cbapp-sub">Loading profile…</p>;
  if (error) return <div className="cbapp-err">{error} <button type="button" className="cbapp-btn-ghost" onClick={reload}>Retry</button></div>;
  const set = (k) => (v) => setF({ ...f, [k]: v });
  const TRADES = ["Concrete", "Painting", "Roofing", "Drywall", "Flooring", "Decking", "Remodeling", "Carpentry", "Tile", "Masonry"];
  const save = async () => {
    setBusy(true);
    setSaved(false);
    try {
      await api("/api/app/profile", {
        method: "PUT",
        body: {
          businessName: f.businessName, ownerName: f.ownerName, phone: f.phone, email: f.email, address: f.address,
          markupPct: parseFloat(f.markupPct) || 0, taxPct: parseFloat(f.taxPct) || 0,
          expiryDays: parseInt(f.expiryDays) || 14, paymentTerms: f.paymentTerms,
          laborRate: parseFloat(f.laborRate) || 0, trades: f.trades,
        },
      });
      setSaved(true);
    } catch (e) { alert(e.message); }
    finally { setBusy(false); }
  };
  return (
    <>
      <PageHead title="Profile" sub="Your business on every quote and invoice." />
      <div className="cbapp-card">
        <F label="Business name"><Txt value={f.businessName} set={set("businessName")} /></F>
        <F label="Your name"><Txt value={f.ownerName} set={set("ownerName")} /></F>
        <div className="cbapp-grid2">
          <F label="Phone"><Txt value={f.phone} set={set("phone")} type="tel" /></F>
          <F label="Email"><Txt value={f.email} set={set("email")} type="email" /></F>
        </div>
        <F label="Address"><Txt value={f.address} set={set("address")} /></F>
        <F label="Trades"><Chips options={TRADES} value={f.trades} set={set("trades")} multi /></F>
      </div>
      <div className="cbapp-card">
        <h3 style={{ fontSize: 17, fontWeight: 800 }}>Defaults for new quotes</h3>
        <div className="cbapp-grid2">
          <F label="Markup %"><Num value={f.markupPct} set={set("markupPct")} /></F>
          <F label="Tax %"><Num value={f.taxPct} set={set("taxPct")} /></F>
        </div>
        <div className="cbapp-grid2">
          <F label="Quote valid (days)"><Num value={f.expiryDays} set={set("expiryDays")} /></F>
          <F label="Default labor $ / sq ft"><Num value={f.laborRate} set={set("laborRate")} /></F>
        </div>
        <F label="Payment terms"><Seg options={[{ label: "Net 7", value: 7 }, { label: "Net 14", value: 14 }, { label: "Net 30", value: 30 }]} value={f.paymentTerms} set={set("paymentTerms")} /></F>
      </div>
      {saved && <div className="cbapp-note">Saved ✓</div>}
      <button type="button" className="cbapp-btn cbapp-btn-primary" disabled={busy} onClick={save}>{busy ? "Saving…" : "Save profile"}</button>
      <Link href="/app/plan" className="cbapp-item" style={{ marginTop: 14 }}>
        <div className="cbapp-row" style={{ border: 0, padding: 0 }}>
          <div><div className="t">Plan</div><div className="s">Current: {data.plan || "Free"}</div></div>
          <span aria-hidden style={{ color: "var(--amuted)" }}>›</span>
        </div>
      </Link>
    </>
  );
}

// ── Plan screen ────────────────────────────────────────────────────────────
const FEATURES = [
  ["Quotes per month", "3", "Unlimited", "Unlimited"],
  ["Clients", "Unlimited", "Unlimited", "Unlimited"],
  ["Calculators", "7", "7", "7"],
  ["Invoices", "—", "Unlimited", "Unlimited"],
  ['"Powered by CalcBid" footer', "Yes", "No", "No"],
];

export function PlanScreen() {
  const search = useSearchParams();
  const router = useRouter();
  const reason = search.get("reason");
  const { data, loading } = useApi("/api/app/profile");
  const plan = data?.plan || "Free";
  return (
    <>
      <PageHead title="Your plan" back="/app/profile" />
      {reason === "quotes" && (
        <div className="cbapp-warn">You've used your 3 free quotes this month. Solo removes the cap.</div>
      )}
      {reason === "invoice" && (
        <div className="cbapp-warn">Invoicing needs a Solo or Crew plan. Free keeps quotes only.</div>
      )}
      <div className="cbapp-card">
        <div className="cbapp-row"><span className="cbapp-label">Current plan</span><span className="cbapp-val">{loading ? "…" : plan}</span></div>
      </div>
      <div className="cbapp-card">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead><tr>
            <th style={{ textAlign: "left", padding: "8px 4px", color: "var(--amuted)", fontSize: 12 }}>FEATURE</th>
            <th style={{ padding: "8px 4px" }}>Free</th><th style={{ padding: "8px 4px" }}>Solo</th><th style={{ padding: "8px 4px" }}>Crew</th>
          </tr></thead>
          <tbody>
            {FEATURES.map(([label, a, b, c]) => (
              <tr key={label} style={{ borderTop: "1px solid var(--aline)" }}>
                <td style={{ padding: "8px 4px", color: "var(--amuted)" }}>{label}</td>
                <td style={{ textAlign: "center", padding: "8px 4px", fontWeight: plan === "Free" ? 800 : 400 }}>{a}</td>
                <td style={{ textAlign: "center", padding: "8px 4px", fontWeight: plan === "Solo" ? 800 : 400 }}>{b}</td>
                <td style={{ textAlign: "center", padding: "8px 4px", fontWeight: plan === "Crew" ? 800 : 400 }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cbapp-card">
        <div className="cbapp-row"><span className="t" style={{ fontWeight: 700 }}>Solo — $19/mo</span>
          <Link href="/pricing" className="cbapp-btn-ghost">Upgrade →</Link></div>
        <div className="cbapp-row"><span className="t" style={{ fontWeight: 700 }}>Crew — $49/mo</span>
          <Link href="/pricing" className="cbapp-btn-ghost">Upgrade →</Link></div>
        <p className="cbapp-hint">Upgrades are handled on the CalcBid pricing page. Plan activation happens after checkout.</p>
      </div>
      <div className="no-print" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="cbapp-btn cbapp-btn-ghost" onClick={() => router.back()}>Done</button>
      </div>
    </>
  );
}
