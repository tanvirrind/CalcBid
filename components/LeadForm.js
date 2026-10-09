"use client";

import { useState } from "react";

export default function LeadForm({ trade, city, cityLabel, tradeLabel }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [contactTime, setContactTime] = useState("anytime");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, details, contactTime, trade, city, cityLabel, consent, website }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Something went wrong.");
      setState("done");
    } catch (err) {
      setState("error");
      setError(err.message);
    }
  };

  const input = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: "2px solid var(--line)", fontSize: 15, background: "#fff",
  };

  if (state === "done") {
    return (
      <div className="card" style={{ borderLeft: "4px solid #16a34a" }}>
        <h3 style={{ marginTop: 0 }}>Request received ✓</h3>
        <p style={{ color: "var(--muted)", marginBottom: 0 }}>
          Thanks, {name.split(" ")[0]}. A local {tradeLabel} contractor in {cityLabel} will
          reach out shortly — usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card" id="quote-form">
      <h3 style={{ marginTop: 0 }}>Get a free quote from a {cityLabel} {tradeLabel} contractor</h3>
      <p style={{ color: "var(--muted)", marginTop: -8 }}>
        Tell us about your project. One local pro replies — no spam, no robocalls from ten companies.
      </p>
      <div className="field-row">
        <div className="field">
          <label>Your name *</label>
          <input style={input} aria-label="Your name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jane Smith" />
        </div>
        <div className="field">
          <label>Phone *</label>
          <input style={input} aria-label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="(208) 555-0123" type="tel" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Email (optional)</label>
          <input style={input} aria-label="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@email.com" type="email" />
        </div>
        <div className="field">
          <label>Best time to call</label>
          <select style={input} aria-label="Best time to call" value={contactTime} onChange={(e) => setContactTime(e.target.value)}>
            <option value="anytime">Anytime</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Project details</label>
        <textarea aria-label="Project details" style={{ ...input, minHeight: 90, resize: "vertical" }} value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="e.g. 20×20 driveway replacement, old concrete needs removal…" />
      </div>
      {/* honeypot — invisible to humans */}
      <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}
        style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 13.5, color: "var(--muted)", marginTop: 12 }}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
          style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0 }} />
        <span>
          I agree to be contacted by CalcBid and a local {tradeLabel} contractor about my project
          by phone, text, or email. Msg & data rates may apply. This isn&apos;t a condition of purchase.
        </span>
      </label>
      {state === "error" && <p style={{ color: "#dc2626", marginTop: 10 }}>{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={state === "sending"}
        style={{ marginTop: 16, width: "100%" }}>
        {state === "sending" ? "Sending…" : `Get my free ${tradeLabel} quote →`}
      </button>
    </form>
  );
}
