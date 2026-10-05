import Link from "next/link";

const links = [
  { href: "/calculators", label: "Calculators" },
  { href: "/quote", label: "Quote generator" },
  { href: "/signin", label: "Sign in" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">C</span>
          CalcBid
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/quote" className="btn btn-primary btn-sm">
            Send a quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
