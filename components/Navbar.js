"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

const baseLinks = [
  { href: "/calculators", label: "Calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/quote", label: "Quote generator" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((s) => setSession(s?.user ? s : null))
      .catch(() => setSession(null));
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = session
    ? [...baseLinks, { href: "/dashboard", label: "Dashboard" }]
    : [...baseLinks, { href: "/signin", label: "Sign in" }];

  const authAction = session ? (
    <button
      className="btn btn-ghost btn-sm"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </button>
  ) : null;

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">C</span>
          CalcBid
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          {authAction}
          {!session && (
            <Link href="/signup" className="btn btn-ghost btn-sm">
              Sign up free
            </Link>
          )}
          <Link href="/quote" className="btn btn-primary btn-sm">
            Send a quote
          </Link>
        </div>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        {!session && (
          <Link
            href="/signup"
            className="btn btn-ghost"
            style={{ marginTop: 12, textAlign: "center" }}
            onClick={() => setOpen(false)}
          >
            Sign up free
          </Link>
        )}
        <Link
          href="/quote"
          className="btn btn-primary"
          style={{ marginTop: 12, textAlign: "center" }}
          onClick={() => setOpen(false)}
        >
          Send a quote
        </Link>
        {session && (
          <button
            className="btn btn-ghost"
            style={{ marginTop: 10 }}
            onClick={() => {
              setOpen(false);
              signOut({ callbackUrl: "/" });
            }}
          >
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
}
