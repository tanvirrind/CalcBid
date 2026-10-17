import Link from "next/link";

// Byline rendered on every /guides article: research-team attribution,
// last-updated date, and a link to the published costing methodology.
// Never invent a human author.
export default function GuideByline({ updated }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "6px 10px",
        margin: "14px 0 4px",
        fontSize: 14.5,
        color: "var(--ink-soft)",
      }}
    >
      <span>
        By the <strong style={{ color: "var(--ink)" }}>CalcBid Research Team</strong>
      </span>
      <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
      <span>Last updated: {updated || "October 2026"}</span>
      <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
      <Link
        href="/methodology"
        style={{ color: "var(--accent-deep)", fontWeight: 600 }}
      >
        How we calculate costs →
      </Link>
    </div>
  );
}
