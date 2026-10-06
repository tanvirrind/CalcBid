import Link from "next/link";
import JsonLd from "./JsonLd";

// Shared breadcrumbs: visible trail + BreadcrumbList structured data.
// items: [{ label, href }] — the last item is the current page (no link needed but harmless).
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `https://calcbid.com${it.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav
        aria-label="Breadcrumb"
        style={{ fontSize: 13, color: "var(--muted)", marginBottom: 18 }}
      >
        {items.map((it, i) => (
          <span key={it.href}>
            {i > 0 && <span style={{ margin: "0 8px" }}>→</span>}
            {i === items.length - 1 ? (
              <span>{it.label}</span>
            ) : (
              <Link href={it.href} style={{ color: "inherit" }}>
                {it.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
