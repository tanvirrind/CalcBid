"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
        setBusy(false);
        return;
      }
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      setBusy(false);
      if (login?.error) {
        window.location.href = "/signin";
      } else {
        window.location.href = "/";
      }
    } catch {
      setError("Couldn't reach the server. Try again.");
      setBusy(false);
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
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 8 }}>Create your account</h1>
          <p className="lead" style={{ marginBottom: 28 }}>
            Free to start. Save customers, quotes, and your own rates.
          </p>
          <form onSubmit={handleSubmit} className="card" style={{ padding: 28 }}>
            {error && (
              <div className="notice" style={{ marginBottom: 16, borderColor: "#b3261e", color: "#b3261e" }}>
                {error}
              </div>
            )}
            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={input}
                autoComplete="name"
                placeholder="e.g. Mike's Painting Co."
              />
            </label>
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
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={input}
                autoComplete="new-password"
                placeholder="8+ characters"
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={busy} style={{ width: "100%" }}>
              {busy ? "Creating account…" : "Create account"}
            </button>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
              Already have one? <Link href="/signin" style={{ color: "var(--accent-deep)", fontWeight: 700 }}>Sign in</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
