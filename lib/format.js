export const fmt$ = (n) =>
  "$" +
  Number(n || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const b64e = (s) =>
  btoa(unescape(encodeURIComponent(s)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const b64d = (s) => {
  const b = s.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(escape(atob(b)));
};

/** Encode a quote object into a shareable URL hash. */
export function encodeQuote(q) {
  try {
    return "#q=" + b64e(JSON.stringify(q));
  } catch {
    return "";
  }
}

/** Decode a quote object from the URL hash. Returns null if absent/invalid. */
export function decodeQuote(hash) {
  try {
    const m = hash.match(/#q=([A-Za-z0-9\-_]+)/);
    return m ? JSON.parse(b64d(m[1])) : null;
  } catch {
    return null;
  }
}
