import { prisma } from "../../../../lib/prisma";
import { requireAppUser, getOrCreateProfile, getUserPlan } from "../../../../lib/app-api";

const pick = (b, k) => (b?.[k] === undefined ? undefined : b[k]);

// GET /api/app/profile — the signed-in user's business profile (created lazily).
export async function GET() {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const profile = await getOrCreateProfile(user.id);
  const plan = await getUserPlan(user.id);
  return Response.json({ profile, plan });
}

// PUT /api/app/profile — update business + defaults.
export async function PUT(req) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const str = (v, n) => (v === undefined ? undefined : String(v).slice(0, n) || null);
  const num = (v, lo, hi) =>
    v === undefined ? undefined : Math.min(hi, Math.max(lo, parseFloat(v) || 0));
  const data = {};
  if (b.businessName !== undefined) data.businessName = str(b.businessName, 200);
  if (b.ownerName !== undefined) data.ownerName = str(b.ownerName, 200);
  if (b.phone !== undefined) data.phone = str(b.phone, 50);
  if (b.email !== undefined) data.email = str(b.email, 200);
  if (b.address !== undefined) data.address = str(b.address, 500);
  if (b.markupPct !== undefined) data.markupPct = num(b.markupPct, 0, 1000);
  if (b.taxPct !== undefined) data.taxPct = num(b.taxPct, 0, 100);
  if (b.expiryDays !== undefined) data.expiryDays = Math.min(365, Math.max(1, parseInt(b.expiryDays) || 14));
  if (b.paymentTerms !== undefined)
    data.paymentTerms = [7, 14, 30].includes(parseInt(b.paymentTerms)) ? parseInt(b.paymentTerms) : 14;
  if (b.laborRate !== undefined) data.laborRate = num(b.laborRate, 0, 10000);
  if (b.trades !== undefined)
    data.trades = Array.isArray(b.trades) ? b.trades.map((t) => String(t).slice(0, 40)).slice(0, 20) : null;
  const profile = await prisma.businessProfile.upsert({
    where: { userId: user.id },
    create: { userId: user.id, ...data },
    update: data,
  });
  return Response.json({ profile });
}
