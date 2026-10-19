"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Shared client helpers for the /app section.

export const money = (n) =>
  "$" + Number(n || 0).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const fmtDate = (d) => {
  if (!d) return "—";
  const dt = new Date(d);
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export const cx = (...a) => a.filter(Boolean).join(" ");

export async function api(path, opts = {}) {
  const res = await fetch(path, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    ...opts,
    ...(opts.body ? { body: typeof opts.body === "string" ? opts.body : JSON.stringify(opts.body) } : {}),
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok) {
    const err = new Error(data?.error || `Request failed (${res.status})`);
    err.code = data?.code;
    err.status = res.status;
    throw err;
  }
  return data;
}

export function useApi(path, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setData(await api(path));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [path, ...deps]);
  useEffect(() => {
    load();
  }, [load]);
  return { data, loading, error, reload: load };
}

// ── App chrome: bottom tab bar ─────────────────────────────────────────────
const TABS = [
  { href: "/app", label: "Calculate", ico: "🧮", exact: true },
  { href: "/app/quotes", label: "Quotes", ico: "📝" },
  { href: "/app/clients", label: "Clients", ico: "👷" },
  { href: "/app/profile", label: "Profile", ico: "⚙️" },
];

export function AppChrome({ children }) {
  const pathname = usePathname();
  return (
    <div className="cbapp">
      {children}
      <nav className="cbapp-tabbar" aria-label="App navigation">
        {TABS.map((t) => {
          const on = t.exact ? pathname === t.href : pathname.startsWith(t.href);
          return (
            <Link key={t.href} href={t.href} className={cx("cbapp-tab", on && "on")}>
              <span className="t-ico" aria-hidden>{t.ico}</span>
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

// ── Fields ─────────────────────────────────────────────────────────────────
export function F({ label, hint, children }) {
  return (
    <div className="cbapp-field">
      <label>{label}</label>
      {children}
      {hint && <div className="cbapp-hint">{hint}</div>}
    </div>
  );
}

export function Num({ value, set, min = 0, step = "any", placeholder }) {
  return (
    <input
      className="cbapp-input"
      type="number"
      inputMode="decimal"
      value={value}
      min={min}
      step={step}
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
}

export function Txt({ value, set, placeholder, type = "text" }) {
  return (
    <input
      className="cbapp-input"
      type={type}
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
}

export function Seg({ options, value, set }) {
  return (
    <div className="cbapp-seg" role="tablist">
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className={value === o.value ? "on" : ""}
          onClick={() => set(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Stepper({ value, set, min = 0, max = 100, step = 1, suffix = "" }) {
  const v = parseFloat(value) || 0;
  const clamp = (n) => Math.min(max, Math.max(min, Math.round(n * 100) / 100));
  return (
    <div className="cbapp-step">
      <button type="button" aria-label="decrease" onClick={() => set(String(clamp(v - step)))}>−</button>
      <input
        className="cbapp-input"
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => set(e.target.value)}
        aria-label="value"
      />
      <button type="button" aria-label="increase" onClick={() => set(String(clamp(v + step)))}>+</button>
      {suffix && <span className="cbapp-label">{suffix}</span>}
    </div>
  );
}

export function Chips({ options, value, set, multi = false }) {
  const toggle = (v) => {
    if (!multi) return set(v);
    const arr = Array.isArray(value) ? value : [];
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };
  return (
    <div className="cbapp-chips">
      {options.map((o) => {
        const v = typeof o === "string" ? o : o.value;
        const label = typeof o === "string" ? o : o.label;
        const on = multi ? (value || []).includes(v) : value === v;
        return (
          <button key={v} type="button" className={cx("cbapp-chip", on && "on")} onClick={() => toggle(v)}>
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function Disclosure({ title, children, defaultOpen = false }) {
  return (
    <details className="cbapp-disc" open={defaultOpen}>
      <summary>
        {title} <span aria-hidden>▾</span>
      </summary>
      <div className="cbapp-disc-body">{children}</div>
    </details>
  );
}

export function Pill({ status }) {
  const map = {
    draft: "cbapp-pill-draft", sent: "cbapp-pill-sent", viewed: "cbapp-pill-viewed",
    approved: "cbapp-pill-approved", declined: "cbapp-pill-declined",
    unpaid: "cbapp-pill-unpaid", paid: "cbapp-pill-paid",
  };
  const key = status === "overdue" ? "overdue" : status;
  return <span className={cx("cbapp-pill", map[key] || "cbapp-pill-info")}>{status}</span>;
}

export function Progress({ steps, current }) {
  return (
    <div className="cbapp-progress" aria-hidden>
      {Array.from({ length: steps }).map((_, i) => (
        <i key={i} className={i < current ? "on" : ""} />
      ))}
    </div>
  );
}

// ── Print-friendly document (quote or invoice) ─────────────────────────────
export function DocView({ kind, doc, biz, client, plan }) {
  const items = doc.items || [];
  const sub = items.reduce((s, i) => s + i.qty * i.price, 0);
  const afterMarkup = sub * (1 + (doc.markupPct || 0) / 100);
  const afterDisc = Math.max(0, afterMarkup - (doc.discount || 0));
  const total = afterDisc * (1 + (doc.taxRate || 0) / 100);
  const isInvoice = kind === "invoice";
  const bizName = biz?.businessName || biz?.name || "Your business";
  return (
    <div className="cbapp-doc">
      <div className="cbapp-row" style={{ border: 0, paddingBottom: 0 }}>
        <div>
          <h2>{isInvoice ? "INVOICE" : "QUOTE"}</h2>
          <div className="cbapp-label">{isInvoice ? doc.number : doc.number}</div>
        </div>
        <Pill status={isInvoice ? (doc.overdue ? "overdue" : doc.status) : doc.status} />
      </div>
      <div className="cbapp-grid2" style={{ marginTop: 14 }}>
        <div>
          <div className="cbapp-label">From</div>
          <strong>{bizName}</strong>
          {biz?.phone && <div className="cbapp-sub">{biz.phone}</div>}
          {biz?.email && <div className="cbapp-sub">{biz.email}</div>}
        </div>
        <div>
          <div className="cbapp-label">To</div>
          <strong>{client?.name || "—"}</strong>
          {client?.phone && <div className="cbapp-sub">{client.phone}</div>}
          {client?.email && <div className="cbapp-sub">{client.email}</div>}
        </div>
      </div>
      <table>
        <thead>
          <tr><th>Item</th><th className="tot">Qty</th><th className="tot">Price</th><th className="tot">Amount</th></tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i}>
              <td>{it.desc}</td>
              <td className="tot">{it.qty}</td>
              <td className="tot">{money(it.price)}</td>
              <td className="tot">{money(it.qty * it.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cbapp-kv"><span>Subtotal</span><b>{money(sub)}</b></div>
      {!!doc.markupPct && <div className="cbapp-kv"><span>Markup ({doc.markupPct}%)</span><b>{money(afterMarkup - sub)}</b></div>}
      {!!doc.discount && <div className="cbapp-kv"><span>Discount</span><b>−{money(doc.discount)}</b></div>}
      {!!doc.taxRate && <div className="cbapp-kv"><span>Tax ({doc.taxRate}%)</span><b>{money(total - afterDisc)}</b></div>}
      <div className="cbapp-kv"><span className="grand">Total</span><span className="grand">{money(total)}</span></div>
      {isInvoice ? (
        <div className="cbapp-sub" style={{ marginTop: 10 }}>
          Issued {fmtDate(doc.issueDate)} · Due {fmtDate(doc.dueDate)}
          {doc.quote?.number && <> · for quote {doc.quote.number}</>}
        </div>
      ) : (
        <div className="cbapp-sub" style={{ marginTop: 10 }}>
          Quote date {fmtDate(doc.quoteDate || doc.createdAt)}
          {doc.validDays ? <> · valid {doc.validDays} days</> : null}
        </div>
      )}
      {doc.notes && <p style={{ marginTop: 10, whiteSpace: "pre-wrap" }}>{doc.notes}</p>}
      {plan === "Free" && <div className="cbapp-powered">Powered by CalcBid</div>}
    </div>
  );
}

export function PageHead({ title, sub, back }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {back && (
        <Link href={back} className="cbapp-btn-ghost no-print" style={{ marginLeft: -12 }}>
          ← Back
        </Link>
      )}
      <h1 className="cbapp-title">{title}</h1>
      {sub && <p className="cbapp-sub">{sub}</p>}
    </div>
  );
}
