import { prisma } from "../../../../lib/prisma";
import { requireUser } from "../../../../lib/api-auth";

async function owned(id, userId) {
  return prisma.customer.findFirst({ where: { id, userId } });
}

// GET /api/customers/[id] — fetch one customer with their quotes.
export async function GET(_req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const customer = await owned(params.id, user.id);
  if (!customer) return Response.json({ error: "Not found." }, { status: 404 });
  const quotes = await prisma.quote.findMany({
    where: { userId: user.id, customerId: customer.id },
    orderBy: { updatedAt: "desc" },
  });
  return Response.json({ customer, quotes });
}

// PATCH /api/customers/[id] — update a customer.
export async function PATCH(req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const customer = await owned(params.id, user.id);
  if (!customer) return Response.json({ error: "Not found." }, { status: 404 });
  let body = {};
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }
  const data = {};
  if (body.name !== undefined) {
    const name = String(body.name).trim();
    if (!name) return Response.json({ error: "Name is required." }, { status: 400 });
    data.name = name.slice(0, 200);
  }
  if (body.email !== undefined) data.email = String(body.email).trim().toLowerCase().slice(0, 200) || null;
  if (body.phone !== undefined) data.phone = String(body.phone).slice(0, 50) || null;
  if (body.address !== undefined) data.address = String(body.address).slice(0, 500) || null;
  const updated = await prisma.customer.update({ where: { id: customer.id }, data });
  return Response.json({ customer: updated });
}

// DELETE /api/customers/[id] — delete a customer (their quotes stay, unlinked).
export async function DELETE(_req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const customer = await owned(params.id, user.id);
  if (!customer) return Response.json({ error: "Not found." }, { status: 404 });
  await prisma.customer.delete({ where: { id: customer.id } });
  return Response.json({ ok: true });
}
