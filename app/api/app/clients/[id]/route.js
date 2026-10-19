import { prisma } from "../../../../../lib/prisma";
import { requireAppUser, totalsOf } from "../../../../../lib/app-api";

const clean = (v, n) => (v === undefined ? undefined : String(v).slice(0, n) || null);
const owned = (id, userId) => prisma.customer.findFirst({ where: { id, userId } });

async function detail(client) {
  const quotes = await prisma.quote.findMany({
    where: { customerId: client.id },
    orderBy: { updatedAt: "desc" },
    include: { invoice: { select: { id: true, number: true } } },
  });
  const invoices = await prisma.invoice.findMany({
    where: { clientId: client.id },
    orderBy: { createdAt: "desc" },
    include: { quote: { select: { id: true, number: true } } },
  });
  const t = (q) => totalsOf(q.items || [], { markupPct: q.markupPct || 0, discount: q.discount || 0, taxRate: q.taxRate || 0 }).total;
  const quoted = quotes.reduce((s, q) => s + t(q), 0);
  const invTotal = invoices.reduce((s, i) => s + Number(i.total || 0), 0);
  const paid = invoices.filter((i) => i.status === "paid").reduce((s, i) => s + Number(i.total || 0), 0);
  return {
    client,
    quotes,
    invoices,
    totals: {
      quoted: Math.round(quoted * 100) / 100,
      invoiced: Math.round(invTotal * 100) / 100,
      paid: Math.round(paid * 100) / 100,
    },
  };
}

// GET /api/app/clients/[id] — client detail with totals + quotes + invoices.
export async function GET(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const client = await owned(params.id, user.id);
  if (!client) return Response.json({ error: "Not found." }, { status: 404 });
  return Response.json(await detail(client));
}

// PATCH /api/app/clients/[id] — edit client.
export async function PATCH(req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const client = await owned(params.id, user.id);
  if (!client) return Response.json({ error: "Not found." }, { status: 404 });
  let b = {};
  try {
    b = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const data = {};
  if (b.name !== undefined) {
    const name = String(b.name ?? "").trim().slice(0, 200);
    if (!name) return Response.json({ error: "Client name is required." }, { status: 400 });
    data.name = name;
  }
  if (b.email !== undefined) data.email = clean(b.email, 200);
  if (b.phone !== undefined) data.phone = clean(b.phone, 50);
  if (b.address !== undefined) data.address = clean(b.address, 500);
  if (b.notes !== undefined) data.notes = clean(b.notes, 2000);
  const updated = await prisma.customer.update({ where: { id: client.id }, data });
  return Response.json({ client: updated });
}

// DELETE /api/app/clients/[id] — delete client; quotes/invoices are unlinked, never deleted.
export async function DELETE(_req, { params }) {
  const { user, unauthorized } = await requireAppUser();
  if (unauthorized) return unauthorized;
  const client = await owned(params.id, user.id);
  if (!client) return Response.json({ error: "Not found." }, { status: 404 });
  await prisma.customer.delete({ where: { id: client.id } });
  return Response.json({ ok: true });
}
