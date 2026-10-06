import { OG_IMAGE_BASE64 } from "../../lib/ogImage";

// Serves the default social preview image (1200×630 JPEG).
// The GitHub push path cannot carry binary files, so the image lives
// base64-encoded in lib/ogImage.js and is decoded here at request time.
export async function GET() {
  const bytes = Buffer.from(OG_IMAGE_BASE64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": bytes.length.toString(),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
