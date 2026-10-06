import { prisma } from "../../../../lib/prisma";
import { requireUser } from "../../../../lib/api-auth";

const STATUSES = ["draft", "sent", "viewed", "approved", "declined"];

async function owned(id, userId) {
  return prisma.quote.findFirst({ where: { id, userId } });
}

// GET /api/quotes/[id] — fetch one of the user's quotes.
export async function GET(_req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const quote = await owned(params.id, user.id);
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  const withCustomer = await prisma.quote.findUnique({
    where: { id: quote.id },
    include: { customer: true },
  });
  return Response.json({ quote: withCustomer });
}

// PATCH /api/quotes/[id] — update status or quote fields.
export async function PATCH(req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const quote = await owned(params.id, user.id);
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });

  let body = {};
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const data = {};
  if (body.status !== undefined) {
    if (!STATUSES.includes(body.status)) {
      return Response.json({ error: "Invalid status." }, { status: 400 });
    }
    data.status = body.status;
  }
  if (body.notes !== undefined) data.notes = String(body.notes).slice(0, 5000) || null;
  if (body.customerId !== undefined) {
    if (body.customerId) {
      const c = await prisma.customer.findFirst({
        where: { id: body.customerId, userId: user.id },
      });
      if (!c) return Response.json({ error: "Customer not found." }, { status: 400 });
      data.customerId = c.id;
    } else {
      data.customerId = null;
    }
  }

  const updated = await prisma.quote.update({ where: { id: quote.id }, data });
  return Response.json({ quote: updated });
}

// DELETE /api/quotes/[id] — delete one of the user's quotes.
export async function DELETE(_req, { params }) {
  const { user, unauthorized } = await requireUser();
  if (unauthorized) return unauthorized;
  const quote = await owned(params.id, user.id);
  if (!quote) return Response.json({ error: "Not found." }, { status: 404 });
  await prisma.quote.delete({ where: { id: quote.id } });
  return Response.json({ ok: true });
}
