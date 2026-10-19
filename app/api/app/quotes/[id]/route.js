import { prisma } from "../../../../../lib/prisma";
import { requireAppUser, QUOTE_STATUSES, getUserPlan, getOrCreateProfile } from "../../../../../lib/app-api";

const owned = (id, userId) => prisma.quote.findFirst({ where: { id, userId } });

// GET /api/app/quotes/[id]
export async function GET(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const quote = await prisma.quote.findFirst({
    where: { id: params.id, userId: user.id },
    include: { customer: true, invoice: true },
  });
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  const plan = await getUserPlan(user.id);
  const profile = await getOrCreateProfile(user.id);
  return Response.json({ quote, plan, profile });
}

// PATCH /api/app/quotes/[id] — status, notes, customer link, job title via notes source.
export async function PATCH(req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const quote = await owned(params.id, user.id);
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const data = {};
  if (b.status !== undefined) {
    if (!QUOTE_STATUSES.includes(b.status)) {
      return Response.json({ error: "Invalid status." }, { status: 400 });
    }
    data.status = b.status;
  }
  if (b.notes !== undefined) data.notes = String(b.notes).slice(0, 5000) || null;
  if (b.jobTitle !== undefined) {
    const src = (quote.source && typeof quote.source === "object") ? quote.source : {};
    data.source = { ...src, jobTitle: String(b.jobTitle).slice(0, 200) };
  }
  if (b.customerId !== undefined) {
    if (b.customerId) {
      const c = await prisma.customer.findFirst({ where: { id: b.customerId, userId: user.id } });
      if (!c) return Response.json({ error: "Client not found." }, { status: 400 });
      data.customerId = c.id;
    } else {
      data.customerId = null;
    }
  }
  const updated = await prisma.quote.update({ where: { id: quote.id }, data });
  return Response.json({ quote: updated });
}

// DELETE /api/app/quotes/[id] — blocked while an invoice exists.
export async function DELETE(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const quote = await prisma.quote.findFirst({
    where: { id: params.id, userId: user.id },
    include: { invoice: { select: { id: true } } },
  });
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  if (quote.invoice) {
    return Response.json(
      { error: "This quote has an invoice. Delete the invoice first.", code: "HAS_INVOICE" },
      { status: 409 }
    );
  }
  await prisma.quote.delete({ where: { id: quote.id } });
  return Response.json({ ok: true });
}
