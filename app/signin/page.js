"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    setBusy(false);
    if (res?.error) {
      setError("Those credentials didn't match. Check your email and password and try again.");
    } else {
      window.location.href = "/";
    }
  }

  const input = {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid var(--line)",
    borderRadius: "8px",
    fontSize: "16px",
    fontFamily: "inherit",
    background: "#fff",
  };

  return (
    <div>
      <Navbar />
      <main className="section">
        <div className="container" style={{ maxWidth: 480 }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 8 }}>Sign in</h1>
          <p className="lead" style={{ marginBottom: 28 }}>
            Back to the shop — your saved customers and quotes are waiting.
          </p>
          <form onSubmit={handleSubmit} className="card" style={{ padding: 28 }}>
            {error && (
              <div className="notice" style={{ marginBottom: 16, borderColor: "#b3261e", color: "#b3261e" }}>
                {error}
              </div>
            )}
            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={input}
                autoComplete="email"
              />
            </label>
            <label style={{ display: "block", marginBottom: 20 }}>
              <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Password</span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={input}
                autoComplete="current-password"
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={busy} style={{ width: "100%" }}>
              {busy ? "Signing in…" : "Sign in"}
            </button>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
              No account yet? <Link href="/signup" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Create one</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
