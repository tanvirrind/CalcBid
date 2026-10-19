import { prisma } from "../../../../../lib/prisma";
import { requireAppUser, overdue, getUserPlan, getOrCreateProfile } from "../../../../../lib/app-api";

const owned = (id, userId) =>
  prisma.invoice.findFirst({
    where: { id, userId },
    include: { client: true, quote: { select: { id: true, number: true } } },
  });

// GET /api/app/invoices/[id]
export async function GET(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const inv = await owned(params.id, user.id);
  if (!inv) return Response.json({ error: "Not found." }, { status: 404 });
  const plan = await getUserPlan(user.id);
  const profile = await getOrCreateProfile(user.id);
  return Response.json({ invoice: { ...inv, overdue: overdue(inv) }, plan, profile });
}

// PATCH /api/app/invoices/[id] — mark paid/unpaid, edit due date + notes.
export async function PATCH(req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const inv = await owned(params.id, user.id);
  if (!inv) return Response.json({ error: "Not found." }, { status: 404 });
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const data = {};
  if (b.status !== undefined) {
    if (!["unpaid", "paid"].includes(b.status)) {
      return Response.json({ error: "Invalid status." }, { status: 400 });
    }
    data.status = b.status;
    data.paidAt = b.status === "paid" ? new Date() : null;
  }
  if (b.dueDate !== undefined) {
    const d = new Date(b.dueDate);
    if (Number.isNaN(d.getTime())) {
      return Response.json({ error: "Invalid due date." }, { status: 400 });
    }
    data.dueDate = d;
  }
  if (b.notes !== undefined) data.notes = String(b.notes).slice(0, 5000) || null;
  const updated = await prisma.invoice.update({ where: { id: inv.id }, data });
  return Response.json({ invoice: { ...updated, overdue: overdue(updated) } });
}

// DELETE /api/app/invoices/[id] — deletes the invoice only; the quote stays.
export async function DELETE(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const inv = await owned(params.id, user.id);
  if (!inv) return Response.json({ error: "Not found." }, { status: 404 });
  await prisma.invoice.delete({ where: { id: inv.id } });
  return Response.json({ ok: true });
}
