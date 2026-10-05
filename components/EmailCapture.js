"use client";

import { useState } from "react";

/**
 * Demo-only capture. Wire to a real backend (Formspree, Resend, etc.)
 * before launch — see README roadmap.
 */
export default function EmailCapture({ compact = false }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="notice">
        You&apos;re on the list — we&apos;ll email you when CalcBid launches.
      </div>
    );
  }

  return (
    <form
      className="capture"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="you@yourcompany.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
      />
      <button type="submit" className="btn btn-primary">
        {compact ? "Notify me" : "Join the waitlist"}
      </button>
    </form>
  );
}
